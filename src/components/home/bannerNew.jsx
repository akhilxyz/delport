import React, { useState, useEffect } from "react";
import bannerData from "@data/banner-data";

const LandingPage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    if (bannerData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="landing-page"
      style={{
        padding: "80px 40px",
        margin: "0 auto",
        textAlign: "left",
        maxWidth: "1200px",
        position: "relative",
      }}
    >
      <div
        className="content"
        style={{
          marginBottom: "50px",
          color: "#fff",
        }}
      >
        <p
          style={{
              marginBottom: "15px",
              fontSize: "1.25rem",
              fontWeight: "450",
              letterSpacing: "1px",
              textTransform: "none", // Changed from "uppercase" to "none"
              color: "white",
              }}
        >
          Welcome to{" "}
        <span
           className="highlight"
           style={{
                   color: "#e1aa4c",
                   fontWeight: "700",
                   textTransform: "none", // Ensures "Golden Mile" stays lowercase
                  }}
        >
         Golden Mile
        </span>
        </p>

        <p
          className="fade-text"
          style={{
            fontSize: "4.8rem",
            lineHeight: "1.2",
            fontWeight: "650",
            marginBottom: "20px",
          }}
        >
          {bannerData[currentBanner]?.banner_title || "Setting The Gold"}
          <br />
          {bannerData[currentBanner]?.title_two || "Standard In Transportation"}
        </p>
        <div
          className="buttons"
          style={{
            marginTop: "20px",
          }}
        >
          <button
            className="btn"
            style={{
              padding: "15px 30px",
              marginRight: "15px",
              fontSize: "1rem",
              backgroundColor: "#333",
              color: "#d8a956",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            GET PRICING
          </button>
          <button
            className="btn"
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              backgroundColor: "#333",
              color: "#d8a956",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            OUR SERVICES
          </button>
        </div>
      </div>
      <div
        className="arrows"
        style={{
          marginTop: "20px",
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <div
          className="arrow left"
          style={{
            display: "inline-block",
            marginRight: "15px",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "#d8a956",
          }}
        >
          &lt;
        </div>
        <div
          className="arrow right"
          style={{
            display: "inline-block",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "#d8a956",
          }}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
