export interface IProject {
    id: string;
    name: string;
    image: string;
    short: String;
    description: string;
    status: "active" | "inactive";
    github: string;
}