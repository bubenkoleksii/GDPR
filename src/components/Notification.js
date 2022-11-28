import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from "react-toastify";

export default function Notification() {
  return ReactDOM.createPortal(
    <ToastContainer
      autoClose={3000}
      limit={3}
      theme="light"
      position="bottom-center"
      hideProgressBar={true}
    />,
    document.getElementById('toast')
  )
}