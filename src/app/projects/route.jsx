import { projects } from "./project";
import { nextRequest } from "next/server";

export async function GET(nextRequest) {
  const searchParams = nextRequest.nextUrl.searchParams;
  const query = searchParams.get("query");
  console.log("Query FOUND: ", query);

  const filteredProjects = query
    ? projects.filter((project) => project.name.includes(query))
    : projects;

  return Response.json(filteredProjects);
}
export async function POST(request) {
  const project = await request.json();
  const newProject = {
    id: projects.length + 1,
    name: project.name,
  };
  projects.push(newProject);
  return new Response(JSON.stringify(newProject), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
