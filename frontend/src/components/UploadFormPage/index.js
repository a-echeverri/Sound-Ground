import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadFormPage from './UploadFormPage';
import LoginForm from '../LoginFormModal/LoginForm';
import { useSelector } from 'react-redux';
import '../Navigation/Navigation.css'

function UploadFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <>
            <button id="upload-button" onClick={() => setShowModal(true)}>
                Upload
            </button>
            {showModal && (
                <>{
                    sessionUser ? (
                        <Modal onClose={() => setShowModal(false)}>
                            <UploadFormPage setShowModal = {setShowModal} />
                        </Modal>
                    ) : (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm/>
                        </Modal>)
                }</>
            )}
        </>
    );
}

export default UploadFormModal;