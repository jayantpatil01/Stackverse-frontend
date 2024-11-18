import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import "../styles/Sucess.css";

const Success = () => {
  const location = useLocation();
  const paymentId = location.state?.paymentId;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Course-detail.pdf";
    link.download = "FullStack_Course_Guide.pdf";
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="success-page">
        <h1>Thank You for Your Purchase!</h1>
        <p>
          Your payment was successful. We’re thrilled to have you on board for the Full-Stack Development Course.
        </p>
        {paymentId && <p>Payment ID: {paymentId}</p>}
        <button className="download-btn" onClick={handleDownload}>
          Download Course Guide (PDF)
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Success;
