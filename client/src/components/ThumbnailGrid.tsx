import React, { useEffect, useRef, useState, useCallback } from "react";
import Loader from "./Loader.tsx";
import Card from "./Card.tsx";
import { Project } from "../types/ProjectDescription.ts";

interface ThumbnailGridProps {
  fetchMoreData: (page: number) => Promise<Project[]>;
}

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({ fetchMoreData }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const projectSet = useRef<Set<string>>(new Set());

  const loadData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const data = await fetchMoreData(page);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        const uniqueProjects = data.filter(
          (project) => !projectSet.current.has(project.id)
        );
        uniqueProjects.forEach((project) => projectSet.current.add(project.id));

        setProjects((prev) => [...prev, ...uniqueProjects]);
        setPage((prev) => prev + 1); // Increment page for the next fetch.
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }, [fetchMoreData, hasMore, loading, page]);

  useEffect(() => {
    loadData(); // Load the initial batch of items.
  }, [loadData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          loadData();
        }
      },
      { threshold: 1.0 } // Trigger when the loader is fully visible.
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadData, loading]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          id={project.id}
          title={project.title}
          thumbnail={project.thumbnailUrl} // Lazy-loaded below
        />
      ))}
      {loading && projects.length === 0 && (
        <div className="flex justify-center items-center h-[200px]">
          <Loader />
        </div>
      )}
      {hasMore && <div ref={loaderRef} style={{ height: "1px" }}></div>}
    </div>
  );
};

export default ThumbnailGrid;
