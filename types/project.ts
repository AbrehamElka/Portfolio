export interface IProject {
    id: string;
    name: string;
    description: string;
    status: "active" | "inactive";
    github: string;
}