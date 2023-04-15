import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here, e.g., clearing session or token, etc.
    // Redirect to login page or any other page after logout
    // Example:
    async function performLogout() {
      try {
        // Call your logout API endpoint
        await fetch("http://localhost:5000/logout", {
          method: "GET",
          credentials: "include",
        });

        // Redirect to login page or any other page after successful logout
        navigate("/login");
      } catch (error) {
        console.error("Failed to logout:", error);
      }
    }

    performLogout();
  }, [navigate]);

  return (
    <>
      <h1>Logging out...</h1>
      {/* You can also show a loader or any other UI while logging out */}
    </>
  );
};

export default Logout;
