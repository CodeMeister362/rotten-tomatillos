import React from "react";
import './Spinner.css'
// import { Route, useLocation } from 'react-router-dom'

export default function LoadingSpinner() {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
}