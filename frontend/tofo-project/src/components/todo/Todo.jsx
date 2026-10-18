import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  FaPlus,
  FaPen,
  FaTrash,
  FaCheck,
  FaTimes,
  FaLock,
  FaRegCircle,
  FaCheckCircle,
} from 'react-icons/fa'
import { request, LIST_URL } from '../../api'
import './Todo.css'

const Todo = () => {
  // Saved by Signin
  const userId = localStorage.getItem('userId')
  const email = localStorage.getItem('email')

  // The database has no "completed" field, so done ticks live in the browser
  const doneKey = `todo-done-${userId}`

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDetails, setEditDetails] = useState('')
  const [doneIds, setDoneIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(doneKey)) || []
    } catch {
      return []
    }
  })

  // GET /api/v2/getTasks/:userId  ->  { list: [...] }
  const loadTodos = async () => {
    try {
      const data = await request(`${LIST_URL}/getTasks/${userId}`)
      setTodos(data.list || [])
    } catch (err) {
      toast.error(err.message || 'Cannot reach the server.')
    }
  }

  // First load when the page opens
  useEffect(() => {
    if (!userId) return

    const fetchTodos = async () => {
      try {
        const data = await request(`${LIST_URL}/getTasks/${userId}`)
        setTodos(data.list || [])
      } catch (err) {
        toast.error(err.message || 'Cannot reach the server.')
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [userId])

  // POST /api/v2/addTask  { title, body, email }
  const handleAdd = async (e) => {
    e.preventDefault()

    if (!title.trim() || !details.trim()) {
      return toast.error('Please write a title and some details.')
    }

    try {
      setSaving(true)
      await request(`${LIST_URL}/addTask`, {
        method: 'POST',
        body: JSON.stringify({
          title: title.trim(),
          body: details.trim(),
          email,
        }),
      })
      setTitle('')
      setDetails('')
      await loadTodos()
      toast.success('Task added!')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setSaving(false)
    }
  }

  // Complete a task. This is final: a completed task cannot be undone.
  const handleComplete = (task) => {
    if (doneIds.includes(task._id)) return

    const sure = window.confirm(
      'Mark this task as completed? You will not be able to undo or edit it.'
    )
    if (!sure) return

    const next = [...doneIds, task._id]
    setDoneIds(next)
    localStorage.setItem(doneKey, JSON.stringify(next))
    toast.success('Task completed. Nice work!')
  }

  const startEdit = (task) => {
    // Completed tasks are locked
    if (doneIds.includes(task._id)) return

    setEditingId(task._id)
    setEditTitle(task.title)
    setEditDetails(task.body)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditTitle('')
    setEditDetails('')
  }

  // PUT /api/v2/updateTask/:id  { title, body, email }
  const saveEdit = async (task) => {
    if (doneIds.includes(task._id)) return

    if (!editTitle.trim() || !editDetails.trim()) {
      return toast.error('Title and details cannot be empty.')
    }

    try {
      await request(`${LIST_URL}/updateTask/${task._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: editTitle.trim(),
          body: editDetails.trim(),
          email,
        }),
      })
      cancelEdit()
      await loadTodos()
      toast.success('Task updated!')
    } catch (err) {
      toast.error(err.message)
    }
  }

  // DELETE /api/v2/deleteTask/:id  { email }
  const handleDelete = async (task) => {
    try {
      await request(`${LIST_URL}/deleteTask/${task._id}`, {
        method: 'DELETE',
        body: JSON.stringify({ email }),
      })

      // Forget its done mark too
      const next = doneIds.filter((id) => id !== task._id)
      setDoneIds(next)
      localStorage.setItem(doneKey, JSON.stringify(next))

      await loadTodos()
      toast.info('Task deleted.')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const doneCount = todos.filter((t) => doneIds.includes(t._id)).length

  // Not signed in -> go to the sign in page
  if (!userId) {
    return <Navigate to="/signin" replace />
  }

  return (
    <main className="todo-page">
      <div className="todo-container">
        {/* Header + add form */}
        <section className="todo-header">
          <div className="todo-header-top">
            <div>
              <h2>My Todo List</h2>
              <p className="todo-subtitle">
                {todos.length === 0
                  ? 'Add your first task below.'
                  : `${doneCount} of ${todos.length} tasks done`}
              </p>
            </div>
            <span className="todo-badge">
              {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          <form onSubmit={handleAdd} className="todo-add">
            <div className="todo-add-fields">
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <button type="submit" className="todo-add-btn" disabled={saving}>
              <FaPlus />
              <span>{saving ? 'Adding...' : 'Add Task'}</span>
            </button>
          </form>
        </section>

        {/* Task cards */}
        {loading ? (
          <p className="todo-empty">Loading your tasks...</p>
        ) : todos.length === 0 ? (
          <div className="todo-empty-card">
            <p>No tasks yet. Add one above to get started.</p>
          </div>
        ) : (
          <ul className="todo-list">
            {todos.map((task) => {
              const isEditing = editingId === task._id
              const isDone = doneIds.includes(task._id)

              return (
                <li
                  key={task._id}
                  className={`todo-card ${isDone ? 'todo-done' : ''}`}
                >
                  {/* Circle: clickable only while the task is pending */}
                  <button
                    type="button"
                    className="todo-check"
                    onClick={() => handleComplete(task)}
                    disabled={isDone}
                    aria-label={isDone ? 'Task completed' : 'Mark task as done'}
                    title={isDone ? 'Completed' : 'Click to complete'}
                  >
                    {isDone ? <FaCheckCircle /> : <FaRegCircle />}
                  </button>

                  {isEditing ? (
                    <div className="todo-edit-fields">
                      <input
                        className="todo-edit-input"
                        type="text"
                        value={editTitle}
                        autoFocus
                        placeholder="Task title"
                        onChange={(e) => setEditTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') saveEdit(task)
                          if (e.key === 'Escape') cancelEdit()
                        }}
                      />
                      <input
                        className="todo-edit-input"
                        type="text"
                        value={editDetails}
                        placeholder="Details"
                        onChange={(e) => setEditDetails(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') saveEdit(task)
                          if (e.key === 'Escape') cancelEdit()
                        }}
                      />
                    </div>
                  ) : (
                    <div className="todo-body">
                      <span className="todo-title">{task.title}</span>
                      <span className="todo-details">{task.body}</span>
                    </div>
                  )}

                  <div className="todo-actions">
                    {isEditing ? (
                      <>
                        <button
                          type="button"
                          className="todo-icon-btn todo-save"
                          onClick={() => saveEdit(task)}
                          aria-label="Save task"
                        >
                          <FaCheck />
                        </button>
                        <button
                          type="button"
                          className="todo-icon-btn"
                          onClick={cancelEdit}
                          aria-label="Cancel editing"
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        {isDone ? (
                          <span className="todo-locked">
                            <FaLock /> Completed
                          </span>
                        ) : (
                          <button
                            type="button"
                            className="todo-icon-btn"
                            onClick={() => startEdit(task)}
                            aria-label="Edit task"
                          >
                            <FaPen />
                          </button>
                        )}
                        <button
                          type="button"
                          className="todo-icon-btn todo-delete"
                          onClick={() => handleDelete(task)}
                          aria-label="Delete task"
                        >
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </main>
  )
}

export default Todo