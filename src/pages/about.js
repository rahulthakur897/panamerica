import React from "react";
import { NavBar } from "../components/NavBar";
import { AboutTabs } from "../components/AboutTab";
import { PageSection } from "../components/PageSection";
import { Footer } from "../components/Footer";

const styles = {
  aboutAdv: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/adv.jpg)`,
    height: `200px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function AboutUs() {
  return (
    <main>
      <div style={{ marginTop: "6rem" }}>
        <NavBar />
      </div>
      <article>
        <PageSection id="about" heading="About Us">
          <React.Fragment>
            <div>
              <p>
                <strong>Pan America Inc.</strong> were established to increase
                profitability for its clients using Information Technology. It
                has immense pleasure in offering the products and services
                knowledge in a wide variety of technologies that allows us to
                provide our clients with a full line of technology services.
              </p>
              <p>
                <strong>Pan America Inc.</strong> is committed to provide
                innovative management consulting and IT solutions to customers,
                and for partnering with them to leverage technology in today’s
                competitive marketplace through a powerful mix of people,
                process and the appropriate application of the technology, which
                will deliver a cost effective solutions to the customers. We
                have rich domain experience in providing cost-competitive
                software development and consulting services. We have
                comprehensive service delivery models in terms of on-site,
                off-site and off-shore capabilities. Our services leverage our
                Global Delivery Methodology.
              </p>
              <p>
                <strong>Pan America Inc.</strong> is a fast growing IT solutions
                and consulting company which provied certified professional for
                Agile, Development and Automation. At N-IT, everything we do is
                based upon our shared principles and defined by what we are
                dedicated to as a team. Mobilizing Tech talent and Solutions to
                power IT innovations and initiations.
              </p>
              <p>
                <strong>Pan America Inc.</strong> is a company built upon
                corporate confidence. Throughout our years of corporate
                experience, we have strengthened our ability to quickly satisfy
                our clients’ IT staff augmentation and project sourcing
                requirements. Today, we use our formidable force of recruiters
                to directly support our program, project, and business
                relationship managers for satisfying our clients’ IT resource
                requirements.
              </p>
              <p>
                The culture of Pan America Inc. is one of shared success, not
                just with customers but also with our employees. Making part of
                the company’s stock available (in the form of stock options) to
                key Pan America Inc. Managers and staff, our founders have made
                it likely that when you work with a Pan America Inc. employee,
                you’re likely working with a Pan America Inc. shareholder with
                some “skin in the game”.
              </p>
            </div>
            <div>
                <h1>Our Specialization</h1>
                <AboutTabs />
            </div>
          </React.Fragment>
        </PageSection>
        <section className="about" style={styles.aboutAdv}>
          <div className="about-container">
            <p className="about-text text-center">
              Quality is a way of living. Quality is the essence of performance.
              Quality enriches life.
            </p>
          </div>
        </section>
        <PageSection id="objective" heading="Our Objectives" bgColor="yellow-bg">
          <React.Fragment>
            <div>
              <p>
                Pan America Inc. ensures the high quality of each individual
                within our proposed teams through a rigorous screening process
                that evaluates potential employees based on specific
                technological qualifications, training, certifications, and
                experience.
              </p>
              <p>
                Involvement, communication, and cooperation are key factors for
                the success of each of Pan America Inc.’s unique solutions. Each
                member, from employee to investor, is involved from the first
                steps of the project lifecycle through to its implementation to
                optimize productivity and the end quality achieved.
              </p>
              <p>
                Involvement, communication, and cooperation are key factors for
                the success of each of Pan America Inc.’s unique solutions.
              </p>
              <p>
                Each member, from employee to investor, is involved from the
                first steps of the project lifecycle through to its
                implementation to optimize productivity and the end quality
                achieved.
              </p>
            </div>
            <div className="space-around">
              <div className="objective-box">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/objective/vision.png"
                    }
                    alt="vision"
                  />
                  <figcaption>
                    Get More Revenue and Business
                    <br />
                    from New Customers
                  </figcaption>
                </figure>
                <p>
                  "To be a leader in providing world class IT Development
                  Solutions and services". Pan America Inc.'s true excellence
                  lies within our ability to look at the “big picture” — to
                  recognize beforehand how each facet of the undertaking will
                  merge within the final incarnation. Our knowledge base is
                  continually expanding to include new information on technology
                  and the organizations that require it.
                </p>
              </div>
              <div className="objective-box">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/objective/mission.png"
                    }
                    alt="mission"
                  />
                  <figcaption>
                    Get More Revenue and Business
                    <br />
                    from New Customers
                  </figcaption>
                </figure>
                <p>
                  "To deliver quality services and products helping
                  organizations cost cuts, and enhance customer service" Our
                  mission is to provide businesses with the utmost quality
                  products and services using information technology. We value
                  professional, courteous and personalized service. We believe
                  in working together with our clients to develop solutions that
                  precisely meet their needs, schedules and budget. Pan America
                  Inc. mission is to use reliable strategies and apply them to
                  distinct specifications to provide quality solutions on time
                  and within budget.Because internal stability is fundamental to
                  success, Pan America Inc. retains expert staff with a
                  combination of incentives and benefits.
                </p>
              </div>
            </div>
          </React.Fragment>
        </PageSection>
      </article>
      <Footer />
    </main>
  );
}
