import { NavLink } from "react-router-dom";
import { useState } from "react";
import useOwn from "../hookUseOwn/hookUseOwn";

import DocumentTitle from "../components/DocumentTitle";

const HomePage = () => {
  const [isHoveredLog, setIsHoveredLog] = useState(false);
  const [isHoveredReg, setIsHoveredReg] = useState(false);

  const handleMouseEnterLog = () => {
    setIsHoveredLog(true);
  };

  const handleMouseLeaveLog = () => {
    setIsHoveredLog(false);
  };

  const handleMouseEnterReg = () => {
    setIsHoveredReg(true);
  };

  const handleMouseLeaveReg = () => {
    setIsHoveredReg(false);
  };

  const { isLoggedIn } = useOwn();

  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
      }}
    >
      <DocumentTitle> Contactbook</DocumentTitle>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2rem",
        }}
      >
        Welcome to Contactbook!
      </h1>
      {isLoggedIn ? (
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          Manage your contacts{" "}
        </p>
      ) : (
        <>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Please log in or register.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "10px 20px",
                backgroundColor: isHoveredLog
                  ? "rgb(7, 86, 143)"
                  : "rgb(85, 197, 228)",
                border: "1px solid black",
                borderRadius: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                transform: isHoveredLog ? "scale(1.1)" : "none",
              }}
              onMouseEnter={handleMouseEnterLog}
              onMouseLeave={handleMouseLeaveLog}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: isHoveredReg
                  ? "rgb(7, 86, 143)"
                  : "rgb(85, 197, 228)",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                border: "1px solid black",
                transform: isHoveredReg ? "scale(1.1)" : "none",
              }}
              onMouseEnter={handleMouseEnterReg}
              onMouseLeave={handleMouseLeaveReg}
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
