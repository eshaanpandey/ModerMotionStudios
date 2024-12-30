import React from "react";

interface ShowReelProps {
  videoUrl?: string;
}

const ShowReel: React.FC<ShowReelProps> = ({ videoUrl }) => {
  const getGoogleDrivePreviewUrl = (url: string) => {
    if (url.includes("drive.google.com") && url.includes("/d/")) {
      return `https://drive.google.com/file/d/${
        url.split("/d/")[1].split("/")[0]
      }/preview`;
    }
    return url;
  };

  if (!videoUrl) {
    return null;
  }

  const isGoogleDriveVideo =
    videoUrl.includes("drive.google.com") && videoUrl.includes("/d/");

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h2 className="text-2xl font-bold mb-4">ShowReel</h2>
      <div className="relative w-full max-w-4xl" style={{ paddingTop: "56.25%" }}>
        {/* 16:9 Aspect Ratio */}
        {isGoogleDriveVideo ? (
          <iframe
            title="Showreel"
            src={getGoogleDrivePreviewUrl(videoUrl)}
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allow="autoplay"
          ></iframe>
        ) : (
          <video
            controls
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default ShowReel;
