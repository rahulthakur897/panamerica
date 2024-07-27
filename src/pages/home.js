import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { PageSection } from "../components/PageSection";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <main>
      <NavBar />
      <div id="page-banner">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#065682",
                },
              },
              fullScreen: {
                enable: false,
                zIndex: -1,
              },
              fpsLimit: 80,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 6,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#fecd01",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                style: {
                  position: "absolute",
                  zIndex: -1,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        <p id="banner-slogan">
          We help great <span style={{ color: "#fecd01" }}>companies</span>{" "}
          simplify and take control of their{" "}
          <span style={{ color: "#fecd01" }}>IT</span>
        </p>
      </div>
      <article>
        <PageSection id="company" heading="Our Company" halfBg>
          <React.Fragment>
            <div>
              <p>
                Pan America Inc. was established for clients using Information
                Technology to solve complex problems and/or maximize
                profitability. It has immense pleasure in offering the products
                and services knowledge in a wide variety of technologies that
                allows us to provide our clients with a full line of technology
                services. N-IT is committed to provide innovative management
                consulting and IT solutions to customers, and for partnering
                with them to leverage technology in todayâ€™s competitive
                marketplace through a powerful mix of people, process and the
                appropriate application of the technology, which will deliver a
                cost effective solutions to the customers. We have rich domain
                experience in providing cost-competitive software development
                and consulting services. We have comprehensive service delivery
                models in terms of on-site, off-site and off-shore capabilities.
                Our services leverage our Global Delivery Methodology.
              </p>
            </div>
            <div className="space-around">
              <div className="info-box">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/company/training.png"
                  }
                  alt="Training"
                />
                <p>Training & Placement Services</p>
              </div>
              <div className="info-box">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/company/job.png"}
                  alt="Job Support"
                />
                <p>Job Support</p>
              </div>
              <div className="info-box">
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/company/career.png"
                  }
                  alt="Career Counseling"
                />
                <p>Career Counseling Service</p>
              </div>
            </div>
          </React.Fragment>
        </PageSection>
        <PageSection id="benefits" heading="Our Benefits" bgColor="blue-bg">
          <div className="space-between">
            <div>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/revenue.png"
                  }
                  alt="revenue"
                />
                <figcaption>
                  Get More Revenue and Business from New Customers
                </figcaption>
              </figure>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/quality.png"
                  }
                  alt="quality"
                />
                <figcaption>
                  Improve Company and Product / Service Quality
                </figcaption>
              </figure>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/service.png"
                  }
                  alt="service"
                />
                <figcaption>
                  Increase Customer Satisfaction with your Products/ Service
                </figcaption>
              </figure>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/develop.png"
                  }
                  alt="develop"
                />
                <figcaption>
                  Describe, Understand, and Communicate Your Company Processes
                </figcaption>
              </figure>
            </div>
            <div>
              <h5 style={{ marginBottom: "4rem" }}>
                Meet Customer Requirements
              </h5>
              <img
                src={
                  process.env.PUBLIC_URL + "assets/images/benefits/benefits.png"
                }
                style={{ width: "400px" }}
                alt="benefits"
              />
              <h5 style={{ marginTop: "4rem" }}>
                Achieve International Quality Recognition
              </h5>
            </div>
            <div>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/culture.png"
                  }
                  alt="culture"
                />
                <figcaption>
                  Develop a Professional Culture and Better Employee Morale
                </figcaption>
              </figure>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/consistency.png"
                  }
                  alt="consistency"
                />
                <figcaption>
                  Improve the Consistency of Your Operations
                </figcaption>
              </figure>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/benefits/focus.png"
                  }
                  alt="focus"
                />
                <figcaption>
                  Better focus by Management and Employees
                </figcaption>
              </figure>
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/benefits/efficiency.png"
                  }
                  alt="efficiency"
                />
                <figcaption>
                  Improve Efficiency, Reduce Waste, and Save Money
                </figcaption>
              </figure>
            </div>
          </div>
        </PageSection>
        <PageSection id="contact" heading="Contact Us">
          <div className="space-between">
            <div style={{ width: "50%", textAlign: "left" }}>
              <div className="flex-start" style={{ marginBottom: "1.5rem" }}>
                <img
                  style={{ marginRight: "1rem" }}
                  src={
                    process.env.PUBLIC_URL + "assets/images/address/address.png"
                  }
                  alt="address"
                />
                <div>
                  <p style={{ margin: 0 }}>
                    <strong>Address:</strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    8270 Woodland Center Blvd, Tampa, Florida, 33614
                  </p>
                </div>
              </div>
              <div className="flex-start" style={{ marginBottom: "1.5rem" }}>
                <img
                  style={{ marginRight: "1rem" }}
                  src={
                    process.env.PUBLIC_URL + "assets/images/address/call.png"
                  }
                  alt="call"
                />
                <div>
                  <p style={{ margin: 0 }}>
                    <strong>Phone:</strong>
                  </p>
                  <p style={{ margin: 0 }}>+1 (786) 955-9999</p>
                </div>
              </div>
              <div className="flex-start" style={{ marginBottom: "1.5rem" }}>
                <img
                  style={{ marginRight: "1rem" }}
                  src={process.env.PUBLIC_URL + "assets/images/address/www.png"}
                  alt="www"
                />
                <div>
                  <p style={{ margin: 0 }}>
                    <strong>Email:</strong>
                  </p>
                  <p style={{ margin: 0 }}>adhi@n-it.us</p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                textAlign: "left",
                paddingBottom: "3rem",
              }}
            >
              <p>Please Provide your Details for a quick Replay</p>
              <form noValidate>
                <div
                  className="space-between"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Name of the Company"
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Email"
                  />
                </div>
                <div
                  className="space-between"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <input
                    type="text"
                    className="input-text"
                    placeholder="ISO Standard"
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Phone"
                  />
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <textarea
                    className="textarea"
                    rows="5"
                    placeholder="Requirement"
                  />
                </div>
                <button className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </PageSection>
      </article>
      <Footer />
    </main>
  );
}
