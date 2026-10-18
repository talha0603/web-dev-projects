import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="searchBox flex h-12 w-full items-center rounded-md bg-[#e5e5e5] px-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="h-full w-full bg-transparent pl-2 text-sm outline-none placeholder:text-gray-500"
      />
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-xl hover:bg-gray-300"
      >
        <IoIosSearch />
      </button>
    </div>
  )
}

export default Search