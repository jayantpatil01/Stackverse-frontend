import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Coursedetails.css";
import axios from "axios";

const CourseDetails = () => {

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/payment/order`,
        {}, // Pass the request body here if needed
        { headers: { "Content-Type": "application/json" } }
      );
  
      const { order } = response.data;
  
      const options = {
        key: "rzp_test_eSqWr31Os1klce",
        amount: order.amount,
        currency: order.currency,
        name: "StackVerse",
        description: "Full-Stack Development Course",
        order_id: order.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          window.location.href = "/success";
        },
        theme: {
          color: "#1e90ff",
        },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Payment request failed. Please try again.");
    }
  };
  
  
  

  return (
    <>
      <Navbar />
      <div className="course-details">
        <img src="/Banner.jpg" alt="Full-Stack Course" />
        <h1>Full-Stack Development Course</h1>
        <p>Learn full-stack development for just ₹49!</p>
        <button onClick={handlePayment} className="buy-now-btn">
          Buy Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
