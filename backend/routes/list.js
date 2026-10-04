import { Router } from 'express';
import User from '../models/User.js'
import List from '../models/List.js'


const routerList = Router();

// Create Task
routerList.post( '/addTask', async (req , res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            const list = new List({ title, body, user:existingUser })
            await list.save();
            res.status(200).json({ list });
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        res.status(500).json({ error })
        
    }
} )

// Update Task
routerList.put( '/updateTask/:id', async (req , res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        const task = await List.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        if (task.user.toString() !== existingUser._id.toString()) {
            return res.status(403).json({ message: 'You can only update your own tasks' });
        }
        task.title = title;
        task.body = body;
        await task.save();
        // res.status(200).json({message:"Task Updated"})

        res.status(200).json({ list: task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
        
    }
} )

// Delete Task
routerList.delete( '/deleteTask/:id', async (req , res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        const task = await List.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Task cannot be found' });
        }
        if (task.user.toString() !== existingUser._id.toString()) {
            return res.status(403).json({ message: 'You can only delete your own task, this is not yours.' });
        }
        
        await List.findOneAndDelete(req.params.id);
        await User.findByIdAndDelete(existingUser._id, 
            { 
                $pull: { 
                    list: task._id 
                }
            })

        res.status(200).json({message: "Task deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
        
    }
} )

export default routerList;
