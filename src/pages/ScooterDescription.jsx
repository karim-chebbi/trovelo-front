import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Loading from "../components/Loading";
import DeleteScooter from "../components/DeleteScooter";
import EditScooter from "../components/EditScooter";
import { getScooterById } from "../JS/Actions/scooterActions";
import {
  FiBattery,
  FiWind,
  FiMapPin,
  FiDollarSign,
  FiPackage,
} from "react-icons/fi";

const ScooterDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const scooter = useSelector((state) => state.ScooterReducer.scooter);
  const load = useSelector((state) => state.ScooterReducer.load);

  useEffect(() => {
    dispatch(getScooterById(id));
  }, [dispatch, id]);

  const features = [
    {
      name: "Brand",
      description: scooter?.brand,
      icon: <FiPackage className="text-2xl text-indigo-600" />,
    },
    {
      name: "Model",
      description: scooter?.model,
      icon: <FiPackage className="text-2xl text-indigo-600" />,
    },
    {
      name: "Max Speed",
      description: scooter?.maxSpeed ? `${scooter.maxSpeed} km/h` : "-",
      icon: <FiWind className="text-2xl text-indigo-600" />,
    },
    {
      name: "Range",
      description: scooter?.range ? `${scooter.range} km` : "-",
      icon: <FiMapPin className="text-2xl text-indigo-600" />,
    },
    {
      name: "Battery",
      description: scooter?.battery,
      icon: <FiBattery className="text-2xl text-indigo-600" />,
    },
    {
      name: "Price",
      description: scooter?.price ? `${scooter.price} DT` : "-",
      icon: <FiDollarSign className="text-2xl text-indigo-600" />,
    },
    {
      name: "Stock",
      description: scooter?.stock ?? 0,
      icon: <FiPackage className="text-2xl text-indigo-600" />,
    },
  ];

  return (
    <div className="bg-white">
      {load && <Loading />}
      <div className="px-24 mt-6">
        <Button onClick={() => navigate(-1)}>
          <LeftOutlined />
          Back
        </Button>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {scooter?.brand ?? "Scooter"} {scooter?.model ?? "Details"}
          </h2>
          <p className="mt-4 text-gray-500">
            Detailed specifications and quick actions for this scooter.
          </p>

          <div className="flex gap-4 py-4">
            <EditScooter />
            <DeleteScooter />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex items-center gap-4 rounded-lg border p-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-50">
                  {feature.icon}
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    {feature.description ?? "-"}
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid place-items-center gap-4">
          <img
            alt={scooter?.model ?? "scooter"}
            src={scooter?.image}
            className="rounded-lg bg-gray-100 max-h-96 object-contain"
          />
          <div className="w-full max-w-sm">
            <h3 className="text-sm font-medium text-gray-700">Battery</h3>
            <div className="mt-2 flex items-center gap-3">
              <FiBattery className="text-2xl text-yellow-500" />
              <div className="flex-1">
                <div className="rounded bg-gray-200 h-3 overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: scooter?.batteryPercent ?? "60%" }}
                  />
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {scooter?.battery ?? "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterDescription;
