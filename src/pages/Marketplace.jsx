import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Zap } from "lucide-react";
import { getAllScooters } from "../JS/Actions/scooterActions";
import AddScooter from "../components/AddScooter";
import ScooterCard from "../components/ScooterCard";

const Marketplace = () => {
  const dispatch = useDispatch();
  const scooters = useSelector((state) => state.ScooterReducer.scooters);
  useEffect(() => {
    dispatch(getAllScooters());
  }, [dispatch]);

  return (
    <div className="bg-ice/30 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-volt-50 px-3 py-1 text-sm font-medium text-volt-600 mb-4">
            <Zap className="size-4 fill-volt-500 text-volt-500" />
            Marketplace
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Explore Premium Electric Scooters
          </h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Browse verified listings from trusted sellers, or list your own
            scooter in seconds.
          </p>
        </div>

        {/* Add scooter */}
        <div className="mb-10">
          <AddScooter />
        </div>

        {/* Listings */}
        {scooters.length > 0 ? (
          <div className="rounded-2xl border border-slate-100 bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex flex-wrap justify-center gap-8">
              {scooters.map((scooter) => (
                <ScooterCard scooter={scooter} key={scooter._id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-16 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-volt-50 p-3 mb-4">
              <Zap className="size-6 text-volt-500 fill-volt-500" />
            </div>
            <h3 className="text-lg font-semibold text-ink">
              No scooters listed yet
            </h3>
            <p className="mt-1 text-slate-500">
              Be the first to add one above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
