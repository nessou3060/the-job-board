import React from "react";

const Job = ({ title, contractType, country, city, className }) => {
  return (
    <div className={`job ${className}`}>
      <span>{title}</span>
      <div>
        <span>
          {contractType} - {country} - {city}
        </span>
      </div>
    </div>
  );
};

export default Job;
