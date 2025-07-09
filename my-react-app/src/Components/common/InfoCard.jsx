import React from 'react';

const InfoCard = ({ heading, description, imageSrc }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 text-center">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
