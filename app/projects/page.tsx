import fs from 'fs';
import path from 'path';
import { IProject } from '@/types/project';

async function getProjects(): Promise<IProject[]> {
  // Read the JSON file (server-side)
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}

export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="flex justify-center flex-wrap">
      {projects.map((project) => (
        <div key={project.id} className="max-w-md bg-white p-8 m-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <a href={project.github} className="text-blue-500 mt-4 block">View on GitHub</a>
        </div>
      ))}
    </div>
  );
}
