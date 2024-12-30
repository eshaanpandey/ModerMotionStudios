export interface Project {
    id: string;
    title: string;
    year: number;
    description: string;
    category: string;
    thumbnailUrl: string;
    videoUrl?: string; 
    images?: string[]; 
}
