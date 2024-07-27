import React from "react";
import { NavBar } from "../components/NavBar";
import {ServiceTabs} from "../components/ServiceTab";
import { PageSection } from "../components/PageSection";
import { Footer } from "../components/Footer";

export default function Services() {
  return (
    <main>
      <div style={{ marginTop: "6rem" }}>
        <NavBar />
      </div>
      <article>
        <PageSection id="services" heading="Our Services">
          <React.Fragment>
            <div>
              <p>
                Pan America Inc. is a specialized Software & Consulting Services
                Provider, which helps clients plan, implement and maintain their
                technology investments cost effectively while improving the
                business performance.
              </p>
              <p>
                Pan America Inc. methodology and frameworks is designed to
                understand the business/technology requirements of clients and
                offer services & solutions designed to address the short and
                long term objectives of customers.
              </p>
              <p>
                Pan America Inc. has multiple years of experience and expertise
                in developing custom software solutions on multiple technology
                platforms. Our development methodology, design, development and
                testing processes are custom fitted to each every client’s needs
                to deliver them high quality products within budget and in time.
              </p>
              <p>
                Pan America Inc. customers find Pan America Inc. to be nimble,
                responsive and committed not only for the success of a specific
                project or service, but to constantly deliver customer value.
                Pan America Inc. partnership and alliances with global leaders
                helps us to work on the latest technologies to provide business
                efficiencies for customers and partners.
              </p>
              <p>
                The following variables are varied according to client’s and
                project’s needs.
              </p>
              <ul>
                <li>
                  <strong>Development Methodology:</strong> Iterative, Agile,
                  Waterfall
                </li>
                <li>
                  <strong>Project Artifices:</strong> Project Management Plan,
                  Business Requirements Document, Functional Requirements
                  Document, Software Architecture Document, Software Design
                  Document, Test Plan Matrix, etc.
                </li>
                <li>
                  <strong>Project costs:</strong> Fixed cost, Time & Material
                </li>
                <li>
                  <strong>Delivery models:</strong> Onsite, onshore offsite,
                  offshore, onshore/offshore
                </li>
              </ul>
              <em>While there is not one model that fits all needs, our experts work with the client to come up with a project plan that fits client’s requirements, time and budget.</em>
            </div>
            <div>
                <ServiceTabs />
            </div>
          </React.Fragment>
        </PageSection>
      </article>
      <Footer />
    </main>
  );
}
