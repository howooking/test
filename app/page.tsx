"use client";

import { useEffect, useState } from "react";
import Courses from "./components/Courses";
import Loading from "./loading";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchedCourses = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSearchedCourses();
    setMounted(true);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='pt-[76px]'>
      <h1 className='text-center bg-slate-200 p-4 text-3xl font-bold max-w-max rounded-2xl mx-auto my-3'>
        Welcome To Traversy Media
      </h1>
      {mounted ? <Courses courses={courses} /> : <></>}
      {/* <Courses courses={courses} /> */}
    </div>
  );
};

export default Home;
