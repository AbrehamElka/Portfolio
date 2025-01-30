import fs from 'fs';
import path from 'path';
import { IProject } from '@/types/project';
import Link from 'next/link';

async function getProjects(): Promise<IProject[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}

export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="flex justify-center flex-wrap">
      {projects.map((project) => (
        <Link href="/projects/[id]" as={`/projects/${project.id}`} key={project.id}>
          <div key={project.id} className="max-w-md bg-white p-8 m-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-gray-600 mt-2">{project.short}</p>
          </div>
        </Link>
        
      ))}
    </div>
  );
}
