import { Button, Modal } from "antd";
import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addScooter } from "../JS/Actions/scooterActions";

const AddScooter = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newScooter, setNewScooter] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleScooterChange = (e) => {
    setNewScooter({ ...newScooter, [e.target.name]: e.target.value });
  };

  const handleAddScooter = () => {
    dispatch(
      addScooter({
        ...newScooter,
        price: Number(newScooter.price),
        maxSpeed: Number(newScooter.maxSpeed),
        range: Number(newScooter.range),
      })
    );

    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new scooter
      </Button>
      <Modal
        style={{ top: 20 }}
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleAddScooter}
        onCancel={handleCancel}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Scooter Information
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Fill in the details of the electric scooter.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Brand */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Brand
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="brand"
                      name="brand"
                      type="text"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>

                {/* Model */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Model
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="model"
                      name="model"
                      type="text"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Price ($)
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>

                {/* Max Speed */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="maxSpeed"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Max Speed (km/h)
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="maxSpeed"
                      name="maxSpeed"
                      type="number"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>

                {/* Range */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="range"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Range (km)
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="range"
                      name="range"
                      type="number"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>

                {/* Battery */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="battery"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Battery
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="battery"
                      name="battery"
                      type="text"
                      placeholder="36V 10.4Ah"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="col-span-full">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Image URL
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleScooterChange}
                      id="image"
                      name="image"
                      type="text"
                      className="block w-full rounded-md px-3 py-2 border border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddScooter;
