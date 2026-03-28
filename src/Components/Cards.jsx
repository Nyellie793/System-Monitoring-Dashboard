import React from "react";

const Cards = ({
  icon,
  iconColor,
  bgColor,
  title,
  value,
  unit,
  indicator,
  variant = "default",
}) => {
  
  // 🔹 STAT VARIANT (like your screenshot)
  if (variant === "stat") {
    return (
      <div className="bg-gray-100 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition">
        
        {/* Icon */}
        <div className={`p-3 rounded-full ${bgColor}`}>
          {icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>

      </div>
    );
  }

  // 🔹 DEFAULT VARIANT (your existing cards)
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center gap-3 min-h-45 hover:shadow-lg transition-shadow">
      
      <div className="flex items-center gap-3">
        <div className={`text-2xl ${iconColor}`}>{icon}</div>
        <h3 className="text-gray-800 font-semibold">{title}</h3>
      </div>

      <p className="text-3xl font-bold text-gray-900">
        {value}{" "}
        {unit && <span className="text-sm text-gray-500">{unit}</span>}
      </p>

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