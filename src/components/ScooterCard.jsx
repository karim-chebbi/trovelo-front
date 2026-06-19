import React from "react";
import { useNavigate } from "react-router-dom";
import { Gauge, BatteryFull, MapPinned } from "lucide-react";

const ScooterCard = ({ scooter }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/scooter_description/${scooter._id}`)}
      className="group w-4/6 md:w-3/6 lg:w-80 cursor-pointer rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          alt={scooter.brand}
          src={scooter.image}
          className="aspect-square w-full h-56 object-cover bg-slate-100 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold text-volt-600 shadow-sm">
          ${scooter.price}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
          {scooter.brand}
        </p>
        <h3 className="mt-0.5 text-lg font-semibold text-ink truncate">
          {scooter.model}
        </h3>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
          <div className="flex flex-col items-center text-center gap-1">
            <Gauge className="size-4 text-volt-500" aria-hidden="true" />
            <span className="text-sm font-medium text-ink">
              {scooter.maxSpeed} km/h
            </span>
            <span className="text-[11px] text-slate-400">Top speed</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1 border-x border-slate-100">
            <MapPinned className="size-4 text-volt-500" aria-hidden="true" />
            <span className="text-sm font-medium text-ink">
              {scooter.range} km
            </span>
            <span className="text-[11px] text-slate-400">Range</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <BatteryFull className="size-4 text-volt-500" aria-hidden="true" />
            <span className="text-sm font-medium text-ink truncate max-w-full">
              {scooter.battery}
            </span>
            <span className="text-[11px] text-slate-400">Battery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterCard;
