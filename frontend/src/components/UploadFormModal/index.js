import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UploadForm from "./UploadForm";
import LoginForm from "../LoginFormModal/LoginForm";
import { useSelector } from "react-redux";

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
    <div className="upload-button-container">
      <button className="upload-button" onClick={() => setShowModal(true)}>
        Upload
      </button>
    </div>
      {showModal && (
        <>
          {sessionUser ? (
            <Modal onClose={() => setShowModal(false)}>
              <UploadForm setShowModal={setShowModal} />
            </Modal>
          ) : (
            <Modal onClose={() => setShowModal(false)}>
              <LoginForm />
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default UploadFormModal;
