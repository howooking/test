import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(request: Request) {
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: new Date().getTime(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);
  // 실제 저장되는 것은 아니지만 body 데이터를 어떻게 가져오는지에 대해
  return NextResponse.json(courses);
}
