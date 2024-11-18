import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Coursedetails.css";

const CourseDetails = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to create order. Please try again.");
      }

      const { order } = await response.json();

      const options = {
        key: "rzp_test_eSqWr31Os1klce",
        amount: order.amount,
        currency: order.currency,
        name: "StackVerse",
        description: "Full-Stack Development Course",
        order_id: order.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          window.location.href = "/sucess"; // Redirect to success page
        },
        theme: {
          color: "#1e90ff",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert(error.message);
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
