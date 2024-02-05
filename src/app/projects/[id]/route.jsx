import { projects } from "../project";
import { redirect } from "next/navigation";
export async function GET(request, { params }) {
  if (parseInt(params.id) > projects.length) {
    redirect("/projects");
  }
  const project = projects.find(
    (project) => project.id === parseInt(params.id)
  );
  return Response.json(project);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { name } = body;
  const index = projects.findIndex(
    (project) => project.id === parseInt(params.id)
  );
  projects[index].name = name;
  return Response.json(projects[index]);
}

export async function DELETE(_request, { params }) {
  const index = projects.findIndex(
    (project) => project.id === parseInt(params.id)
  );
  const deletedProject = projects[index];
  projects.splice(index, 1);
  return Response.json(deletedProject);
}
