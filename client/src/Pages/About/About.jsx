import React from "react";
import "./About.css";
import { motion, spring } from "framer-motion";
import aboutImg from "/images/about-image-1.jpg";
import storyImg from "/images/about-image-2.jpg";
import RentWidget from "../../components/RentWidget/RentWidget";
const About = () => {
  return (
    <div className="main-wrapper">
      <RentWidget />

      <section className="about-intro">
        <div className="about-intro-container">
          <motion.div
            className="intro-text"
            initial={{ marginBottom: "20" }}
            animate={{ marginBottom: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            <h3 className="intro-text">
              <span className="intro-heading text-uppercase">About</span>
            </h3>
            <h1 className="intro-text">
              <span className="intro-sub-heading text-uppercase">
                Shift Together
              </span>
            </h1>
          </motion.div>
        </div>
      </section>
      <hr />
      <section className="about-us">
        <div className="about-us-container p-4">
          <div className="about-row">
            <motion.div
              className="about-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="about-us-img">
                <img src={aboutImg} alt="" />
              </div>
            </motion.div>
            <div className="about-col">
              <div className="about-us-content">
                <motion.div
                  className="about-us-heading p-3"
                  initial={{ marginLeft: "-100vw" }}
                  whileInView={{ marginLeft: "0" }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <h3 className="text-uppercase text-center fw-bold ">
                    About us
                  </h3>
                </motion.div>
                <motion.div
                  className="about-us-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <p>
                    Welcome to Shift Together, a community-driven website
                    dedicated to creating positive change in the world. Our
                    mission is to bring together individuals from all
                    backgrounds and walks of life to work towards a shared
                    vision of a better, more equitable future for all.
                  </p>

                  <p>
                    At Shift Together, we are committed to building a community
                    that is inclusive, diverse, and welcoming to all. We value
                    open communication, mutual respect, and a willingness to
                    learn and grow together. Whether you are passionate about
                    social justice, environmental sustainability, or any other
                    issue that affects our world, we invite you to join us and
                    be part of the shift towards a better future.
                  </p>
                  <p>
                    Thank you for visiting our website, and we look forward to
                    working together with you to make a positive impact in the
                    world.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="story">
        <div className="story-container p-4">
          <div className="story-row">
            <div className="story-col">
              <div className="story-content">
                <motion.div
                  className="story-heading p-3"
                  initial={{ marginRight: "-100vw" }}
                  whileInView={{ marginRight: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <h3 className="text-center text-uppercase fw-bold ">
                    Our Story
                  </h3>
                </motion.div>
                <motion.div
                  className="story-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <p>
                    Shift Together is a website created by a group of
                    individuals with a shared vision of making a positive impact
                    in the world. It is a community-driven platform that brings
                    people together from all walks of life to collaborate, share
                    ideas, and work towards common goals. The website offers a
                    range of resources and tools to help users connect with
                    like-minded individuals and take action on the issues that
                    matter most. Through Shift Together, people can organize
                    events, launch campaigns, and create real-world impact in
                    areas like environmental sustainability, social justice, and
                    education. The website has become a symbol of hope and a
                    catalyst for change, inspiring people from all over the
                    world to come together and work towards a better future.
                    Whether you are a seasoned activist or just starting to
                    explore the world of social change, Shift Together offers a
                    welcoming and inclusive community where you can connect,
                    learn, and take action.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="story-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="story-img">
                <img src={storyImg} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <hr />
      {/* Mission */}
      <section className="mission">
        <motion.div
          className="mission-container"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="heading">
            <h2 className="fw-bold text-uppercase py-2">Our Vision</h2>
          </div>
          <div className="content">
            <p className="py-3">
              To become recognized as a leading name in the world of real
              estate, delivering excellent projects with the highest standards
              in design, quality, and aesthetics.
            </p>
          </div>
          <div className="heading">
            <h2 className="fw-bold text-uppercase py-2">Our Mission</h2>
          </div>
          <div className="content">
            <p className="py-3">
              To understand clients’ needs and deliver superior living spaces at
              economical costs.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
