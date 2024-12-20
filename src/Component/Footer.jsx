import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = {
    "Quick Links": ["Home", "Spécialité", "Réservation", "Contact Us"],
    "About Us": ["Test 1", "Test 2", "Test 3", "Test 4"],
    "Contact Us": [
      <div key="phone">
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
        +1 234 567 890
      </div>,
      <div key="email">
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
        support@medicleteam.com
      </div>,
      <div key="address">123 Medical St., Health City, Country</div>,
    ],
    "Follow Us": [
      <FontAwesomeIcon
        key="facebook"
        icon={faFacebook}
        style={{ margin: "0 10px", cursor: "pointer" }}
      />,
      <FontAwesomeIcon
        key="twitter"
        icon={faTwitter}
        style={{ margin: "0 10px", cursor: "pointer" }}
      />,
      <FontAwesomeIcon
        key="instagram"
        icon={faInstagram}
        style={{ margin: "0 10px", cursor: "pointer" }}
      />,
    ],
  };

  return (
    <div
      id="contact"
      style={{
        backgroundColor: "#2f6690",
        color: "white",
        fontFamily: "'Inter', Arial, sans-serif",
      }}
    >
      <footer
        style={{
          padding: "40px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          height: "auto", // Allow dynamic height
          boxShadow: "0 -4px 6px rgba(0,0,0,0.1)",
          position: "relative",
          transition: "height 1s ease",
        }}
      >
        {Object.keys(sections).map((section) => (
          <div key={section} style={{ cursor: "pointer", textAlign: "center" }}>
            <h2
              onClick={() => handleSectionToggle(section)}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "white",
                position: "relative",
                paddingBottom: "5px",
                transition: "all 1s ease",
                padding: "10px 20px",
                borderRadius: "5px", // Add rounded corners
                border: "2px solid transparent", // Initially transparent border
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)", // Add box shadow
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.color = "#2f6690";
                e.target.style.borderColor = "#2f6690";
                e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
                e.target.style.borderColor = "transparent";
                e.target.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
              }}
            >
              {section}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#ffffff",
                  transform:
                    activeSection === section ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 1s ease",
                  transformOrigin: "bottom right",
                }}
              ></span>
            </h2>
            <div
              style={{
                display: activeSection === section ? "flex" : "none",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                transition: "opacity 1s ease, transform 1s ease",
                opacity: activeSection === section ? 1 : 0,
                transform:
                  activeSection === section
                    ? "translateY(0)"
                    : "translateY(20px)",
                paddingTop: "10px",
              }}
            >
              {sections[section].map((item, index) => (
                <div
                  key={index}
                  style={{
                    margin: "0 10px",
                    whiteSpace: "nowrap",
                    padding: "10px",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    color: "#333",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "transform 1s ease",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </footer>

      {/* Stylish Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF", // Blue color
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 1s ease, transform 1s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
            outline: "none",
            marginBottom: "15px", // Add space at the bottom
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          <FontAwesomeIcon icon={faPhone} />
          Call Us
        </button>
        <button
          style={{
            padding: "10px 20px 10px 10px",
            backgroundColor: "#28a745", // Green color
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 1s ease, transform 1s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
            outline: "none",
            marginBottom: "15px", // Add space at the bottom
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Email Us
        </button>
      </div>
    </div>
  );
};

export default Footer;
