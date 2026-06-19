import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteScooter } from "../JS/Actions/scooterActions";

const DeleteScooter = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteScooter = () => {
    dispatch(deleteScooter(id));
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <Button variant="outlined" color="danger" onClick={showModal}>
        Delete scooter
      </Button>
      <Modal
        title="Delete Scooter"
        open={isModalOpen}
        onOk={handleDeleteScooter}
        onCancel={handleCancel}
        okType="danger"
      >
        <p>Are you sure you want to delete this scooter?</p>
      </Modal>
    </>
  );
};

export default DeleteScooter;
