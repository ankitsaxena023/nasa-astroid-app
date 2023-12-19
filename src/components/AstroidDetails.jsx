import React from "react";

const AstroidDetails = ({ astroidData }) => {
  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-indigo-100 bg-cover bg-center"
      style={{
        backgroundImage: `url(/astroid-space.jpg)`,
      }}
    >
      <div>
        <div className="text-white">
          <h3>Name : {astroidData.name}</h3>
          <a
            href={astroidData.astroidUrl}
            target="_blank"
            className="hover:text-orange-500"
          >
            nasa_jpl_url : details
          </a>
          <h1 className="text-white">
            is_potentially_hazardous_asteroid : {astroidData.isHazardous}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AstroidDetails;
