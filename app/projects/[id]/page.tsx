import path from 'path';
import fs from 'fs';
import { IProject } from '@/types/project';
import Image from 'next/image';

async function getProjects(): Promise<IProject[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}

const page = async ({ params }: { params: { id: string } }) => {
    const projects = await getProjects();
    const { id } = await params;
    const project = projects.find((project) => project.id.toString() === id);

    if (!project) {
        return <h1>Project not found</h1>;
    }
    return (
        <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mx-auto mt-8">
            {/* Project Title */}
            <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
            {/* Project Image */}
            <Image 
                src={project.image}
                alt={project.name}
                width={400}
                height={400} 
                className="mt-4 rounded-lg shadow-md mx-auto" />
            {/* Project Description */}
            <p className="mt-4 text-gray-700 leading-relaxed">
                {project.description}
            </p>

            {/* GitHub Button */}
            <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Visit GitHub Repo
            </a>
        </div>

    )
}

export default page