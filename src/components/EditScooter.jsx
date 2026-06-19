import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editScooter } from "../JS/Actions/scooterActions";

const EditScooter = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newData, setNewData] = useState({});
  const { id } = useParams();
  const scooter = useSelector((state) => state.ScooterReducer.scooter);

  useEffect(() => {
    if (scooter) {
      setNewData(scooter);
    }
  }, [scooter]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleScooterChange = (e) => {
    const { name, value } = e.target;

    setNewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditScooter = () => {
    dispatch(editScooter(id, newData));
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit scooter
      </Button>
      <Modal
        style={{ top: 20 }}
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleEditScooter}
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
                Scooter description
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="make"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Make
                  </label>
                  <div className="mt-2">
                    <input
                      value={newData.make || ""}
                      onChange={handleScooterChange}
                      id="make"
                      name="make"
                      type="text"
                      autoComplete="make"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="model"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Model
                  </label>
                  <div className="mt-2">
                    <input
                      value={newData.model || ""}
                      onChange={handleScooterChange}
                      id="model"
                      name="model"
                      type="text"
                      autoComplete="model"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="year"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Year
                  </label>
                  <div className="mt-2">
                    <input
                      value={newData.year || ""}
                      onChange={handleScooterChange}
                      id="year"
                      name="year"
                      type="text"
                      autoComplete="year"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="image"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Image URL
                  </label>
                  <div className="mt-2">
                    <input
                      value={newData.image || ""}
                      onChange={handleScooterChange}
                      id="image"
                      name="image"
                      type="text"
                      autoComplete="image url"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="price"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      value={newData.price || ""}
                      onChange={handleScooterChange}
                      id="price"
                      name="price"
                      type="number"
                      autoComplete="price"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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

export default EditScooter;
