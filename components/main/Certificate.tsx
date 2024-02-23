import React from "react";
import CertificateCard from "../sub/CertificateCard";

const Certificate = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="certificates" 
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 py-20">
        CERTIFICATES
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-5">
        <CertificateCard
          src="/digital-marketing.png"
          title="Digital Marketing"
          description="* Social Media Marketing * Direct Marketing * Google Ads * Google Analytics"
        />
        <CertificateCard
          src="/graphic-designing.png"
          title="Graphic Designing"
          description="* Adobe Illustrator * Adobe Photoshop * Adobe InDesign * Adobe XD * Canva"
        />
        <CertificateCard
          src="/freelancing.png"
          title="Freelancing"
          description="*Upwork * Freelancer * Fiverr * Guru * PeoplePerHour * Toptal"
        />
        <CertificateCard
          src="/data-science.png"
          title="Introduction to Data Science"
          description="*Data Science * Machine Learning * Python"
        />
      </div>
    </div>
  );
};

export default Certificate;