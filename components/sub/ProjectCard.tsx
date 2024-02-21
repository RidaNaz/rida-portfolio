import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#b03fb4]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
        <br/>
        <p className="mt-2 text-center text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;