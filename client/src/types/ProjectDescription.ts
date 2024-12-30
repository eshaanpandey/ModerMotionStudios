export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    thumbnailUrl: string;
    videoUrl?: string; 
    images?: string[]; 
}
