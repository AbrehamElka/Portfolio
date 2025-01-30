export interface IProject {
    id: string;
    name: string;
    short: String;
    description: string;
    status: "active" | "inactive";
    github: string;
}