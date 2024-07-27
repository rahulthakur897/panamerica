import React from "react";
import { NavBar } from "../components/NavBar";
import { PageSection } from "../components/PageSection";
import { Footer } from "../components/Footer";

export default function Career() {
  return (
    <main>
      <div style={{ marginTop: "6rem" }}>
        <NavBar />
      </div>
      <article>
        <PageSection id="profile" heading="Careers">
          <div></div>
        </PageSection>
      </article>
      <Footer />
    </main>
  );
}
