import React, { useState, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import RentWidget from "../../components/RentWidget/RentWidget";
const Home = (props) => {
  const [greet, setGreet] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/getdata", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const { name } = data.user;
        setGreet(`Welcome back, ${name}!`);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleWidget = () => {
    const widget = document.querySelector(".widget-wrapper");
    widget.classList.add("show-widget");
  };

  return (
    <div className="main-wrapper">
      <RentWidget />

      <section className="home-intro">
        <div className="home-intro-container container">
          <motion.div
            className="home-intro-text"
            initial={{ marginBottom: "20" }}
            animate={{ marginBottom: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            <h5 className="intro-text text-community">
              <span>Shift Together Community</span>
            </h5>

            <p className="intro-text text-slogan">
              {greet ||
                "Join our Community, make connections, and create a better world together."}
            </p>
          </motion.div>

          <div className="rent-btn-container">
            <motion.button
              className="rent-flat-button"
              onClick={handleWidget}
              initial={{ marginLeft: "-100vw" }}
              animate={{ marginLeft: 0 }}
              transition={{ type: "spring", delay: 0.4 }}
            >
              Rent a Flat
            </motion.button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans">
        <div className="plans-container p-4">
          <motion.div
            className="plans-heading"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-center fw-bold my-4 py-2 text-uppercase">
              Floor Plans & Price
            </h2>
          </motion.div>
          {props.PlanCard}
        </div>
      </section>
      <hr />
      {/* Facilities Section */}
      <section className="facilities">
        <div className="facilities-container container py-4">
          <motion.div
            className="facilities-heading"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-center fw-bold my-4 py-2 text-uppercase">
              Facilities & Amenities
            </h2>
          </motion.div>
          <motion.div
            className="facilities-sub-heading"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h6 className="fw-bold text-uppercase">Top Facilities</h6>
          </motion.div>
          <motion.div
            className="facilities-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <p>
              Shift Together presents an exclusive opportunity to own a stunning
              home that offers all kinds of amenities and facilities. This
              includes a sewage treatment plant, 24x7 security, and easy access
              to 24/7 power backup. It also has a gated community, an exclusive
              offering only for Shift Together residents. Shift Together has an
              excellent combination of comfort and convenience to suit every
              requirement as well as need.
            </p>
          </motion.div>

          <div className="facilities-content">{props.FacilitiesCard}</div>
        </div>
      </section>

      <hr />
    </div>
  );
};

export default Home;
