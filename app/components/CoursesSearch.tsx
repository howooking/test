"use client";

import { Dispatch, SetStateAction, useState } from "react";

const CourseSearch = ({
  setCourses,
}: {
  setCourses: Dispatch<SetStateAction<never[]>>;
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    setCourses(courses);
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2 mb-3'>
      <input
        type='text'
        className='px-4 py-2 flex-1 ring-2 rounded-lg'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className='bg-blue-800 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-300 ease-in-out'
        type='submit'
      >
        Search
      </button>
    </form>
  );
};
export default CourseSearch;
