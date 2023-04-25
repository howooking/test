import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(request.url);
  // http://localhost:3000/api/courses/search?query=react
  // 위 주소로 요청을 하는 경우
  // 쿼리 데이터는 여러개일 수 있음

  console.log(new URL(request.url));
  // URL {
  //   pathname: '/api/courses/search',
  //   search: '?query=react',
  //   searchParams: URLSearchParams { 'query' => 'react' },
  //   hash: ''
  // }

  console.log(searchParams);
  // URLSearchParams { 'query' => 'react' }

  console.log(searchParams.get("query"));
  // react

  const searchedCourses = courses.filter((course) => {
    return course.title
      .toLowerCase()
      .includes(searchParams.get("query")!.toLowerCase());
  });

  return NextResponse.json(searchedCourses);
}
