import React from "react";
import "./About.css";
import aboutImg from "/images/about-image-1.jpg";
import storyImg from "/images/about-image-2.jpg";
import RentWidget from "../../components/RentWidget/RentWidget";
const About = () => {
  return (
    <div className="main-wrapper">
      <RentWidget />

      <section className="about-intro">
        <div className="intro-container">
          <div className="intro-text">
            <h5 className="intro-text">
              <span className="greet">About</span>
            </h5>
            <h1 className="intro-text">
              <span>Shift Together</span>
            </h1>
          </div>
        </div>
      </section>
      <hr />
      <section className="about-us">
        <div className="about-us-container p-4">
          <div className="about-row">
            <div className="about-col">
              <div className="about-us-img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="about-col">
              <div className="about-us-content">
                <div className="about-us-heading p-3">
                  <h3 className="text-uppercase text-center fw-bold ">
                    About us
                  </h3>
                </div>
                <div className="about-us-text">
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
                </div>
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
                <div className="story-heading p-3">
                  <h3 className="text-center text-uppercase fw-bold ">
                    Our Story
                  </h3>
                </div>
                <div className="story-text">
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
                </div>
              </div>
            </div>

            <div className="story-col">
              <div className="story-img">
                <img src={storyImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
