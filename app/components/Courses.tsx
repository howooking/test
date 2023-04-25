import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  link: string;
  level: string;
}
// 클라이언트 컴포넌트로 바꾸니깐
// async function fetchCourses() {
//   try {
//     const res = await fetch("http://localhost:3000/api/courses");
//     const courses = await res.json();
//     return courses;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default function Courses({ courses }: { courses: Course[] }) {
  return (
    <>
      <div className='flex flex-col gap-3'>
        {courses.map((course: Course) => (
          <div
            key={course.id}
            className='box-border flex flex-col gap-2 rounded-lg border-2 border-blue-800 bg-blue-200 p-4 text-gray-700'
          >
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link
              href={course.link}
              target='_blank'
              className='max-w-max rounded-md bg-blue-800 px-3 py-1 text-white'
            >
              Go To Course
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
