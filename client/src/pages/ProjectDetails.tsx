import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../utils/AllProjects.ts";
import { Project } from "../types/ProjectDescription.ts";
import Loader from "../components/Loader.tsx";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      const data = await getProjectById(id || "");
      setProject(data || null);
      setLoading(false);
    };

    fetchProject();
    
    return () => {
        setProject(null);
        setLoading(false);
    };
  }, [id]);

  if (loading) return <Loader />;
  if (!project) return <p>Project not found!</p>;

  const getDriveImageUrl = (url: string) => {
    if (url.startsWith("/assets/")) {
      return url;
    }
  
    const regex = /(?:drive\.google\.com\/.*?\/d\/|drive\.google\.com\/uc\?id=)([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      const transformedUrl = `https://drive.google.com/uc?id=${match[1]}`;
      return transformedUrl;
    }
  
    console.warn("Invalid or unsupported URL format:", url);
    return url;
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>

      {project.thumbnailUrl && (
        <div className="mb-4">
          <img
            src={getDriveImageUrl(project.thumbnailUrl)} // Ensure the URL is correctly processed
            alt={project.title}
            className="w-full max-h-64 object-cover rounded"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = "/assets/images/sample3.jpg")}
          />
        </div>
      )}

      {project.videoUrl && (
        <div className="mb-4">
          {project.videoUrl.includes("drive.google.com") &&
          project.videoUrl.includes("/d/") ? (
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {/* 16:9 Aspect Ratio */}
              <iframe
                src={`https://drive.google.com/file/d/${
                  project.videoUrl.split("/d/")[1].split("/")[0]
                }/preview`}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
              ></iframe>
            </div>
          ) : (
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {/* 16:9 Aspect Ratio */}
              <video controls className="absolute top-0 left-0 w-full h-full">
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      )}

      {project.images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={getDriveImageUrl(image)}
              alt={`Project Image ${index + 1}`}
              className="w-full rounded shadow"
              onError={(e) => (e.currentTarget.src = "/assets/images/sample3.jpg")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
