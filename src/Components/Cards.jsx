import React from "react";

const Cards = ({ icon, iconColor, title, value, unit, indicator, className }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-xl p-5 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow min-h-[180px] ${className}`}
    >
      {/* Top row: Icon + Title */}
      <div className="flex items-center gap-3">
        {icon && (
          <div className={`text-2xl ${iconColor ? iconColor : "text-gray-700"}`}>
            {icon}
          </div>
        )}
        <h3 className="text-gray-800 font-semibold">{title}</h3>
      </div>

      {/* Main value with optional unit */}
      <p className="text-3xl font-bold text-gray-900">
        {value}{" "}
        {unit && <span className="text-sm font-normal text-gray-500">{unit}</span>}
      </p>

      {/* Optional indicator */}
      {indicator && (
        <div className="flex items-center gap-1 text-sm font-medium text-red-500">
          {indicator.icon}
          <span>{indicator.text}</span>
        </div>
      )}
    </div>
  );
};

export default Cards;