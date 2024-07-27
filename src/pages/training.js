import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { PageSection } from "../components/PageSection";
import { TrainingTabs } from "../components/TrainingTab";

export default function Training() {
  return (
    <main>
      <div style={{ marginTop: "6rem" }}>
        <NavBar />
      </div>
      <article>
        <PageSection id="program" heading="Training Programme">
          <p>
            Corporate IT Training At Neuron IT Solutions we believe that
            training makes all the difference in IT industry. Change is a part
            of IT industry with existing technologies continuously changing with
            new features being added every time. Newer technologies emerge while
            the older technologies become obsolete. To be in sync with tomorrow
            we believe we need training today.
          </p>
          <p>
            We provide state of the art In-House training/Online training to our
            clients and consultants in different technologies to meet present
            market needs. Our training and mentoring services help our
            consultants to build right skill level to support various IT and
            network related projects. We have certified professionals to provide
            training, support and guidance. Our training programs cover a wide
            range of technologies to take care of total IT and business
            solutions. Our training allows you to maintain productivity and also
            help you during on job production issues. Our training programs are
            designed by combining real world scenarios, lessons learned over
            years of hands on experience and research. Neuron IT Solutions is
            cutting edge technology-based, training company that evolves ahead
            of the needs of the international markets.
          </p>
          <p>
            Highly interactive online courses presented through the Internet
            provide technical training in multiple technologies. Courses are
            easily accessible via the Internet making them available at home,
            work, or while traveling. Courses include an abundance of helpful
            interactive content like simulations, skill assessments, and a
            powerful search feature to create an engaging, effective learning
            environment. Flash simulations, video and audio to enhance the
            learning experience. Blended Learning Solutions SmartWorks provides
            client-oriented training choices in multiple formats and delivery
            methods, offering individuals top-quality training that can be
            tailored to meet individual learning styles and specific needs.
          </p>
          <p>
            Online LIVE Learning Online LIVE Learning provides students with a
            live instructor-led experience, via the Internet, that meets
            specific learning objectives. Although separated by geography,
            instructors and students share an interactive experience, including
            active discussions, simultaneous document viewing and application
            sharing, and the ability to form breakout groups in virtual rooms
            for team meetings. The advantage of live instruction, without having
            to leave the office, makes online LIVE learning an ideal training
            solution.
          </p>
          <p>
            Online ANYTIME Learning Online ANYTIME Learning is helping companies
            hone their competitive edge in this knowledge-based economy. Online
            ANYTIME learning enables information to be delivered in a
            customized, student-centric format, via the Internet, and features
            the same content as our world-renowned instructor-led training, from
            anywhere, anytime. Online ANYTIME Learning reduces training costs,
            provides easy access to educational materials and increases
            collaboration.
          </p>
          <p>
            Mentored Learning through online Mentored Learning merges multiple
            learning styles to create an effective and efficient learning
            process that increases a student’s ability to retain information and
            apply newly acquired knowledge. This is accomplished through a
            learning environment which provides students with simultaneous
            access to information delivered via audio and video, a simulated
            production environment and a mentor to guide them through the
            process. Students control the content covered and the pace at which
            they learn so they can focus on the specific skills they need to
            succeed. Hands-on practice reinforces those skills and one-on-one
            support and guidance from a certified instructor increase
            comprehension and retention of course material. In addition, the
            training schedule is flexible so courses fit into the student’s busy
            work and personal life allowing for greater concentration during
            training. The result is a truly learner-centric training solution
            that meets the needs of a multitude of students with varying skill
            levels and learning preferences while providing the tools and
            resources necessary to ensure proper skill development and knowledge
            transfer.
          </p>
          <p>
            Classroom learning As the foundation of our Integrated Learning
            methodology, the classroom experience has become a more enriching,
            dynamic and valuable learning method for students. Classroom
            learning students have their own networked environments, which
            enable instructors to manage hands-on lab demonstrations and
            exercises that mirror the professional environment. Additionally,
            Classroom Learning has been enhanced to include Web-based resources,
            such as tutorials and simulations, during and after class.
          </p>
          <ul>
            <li>Grid System Layout</li>
            <li>Built for Performance</li>
            <li>Focus on flow and conversions</li>
            <li>Dynamic URL update</li>
          </ul>
        </PageSection>
        <PageSection id="courses" heading="Top Popuplar Courses">
            <TrainingTabs />
        </PageSection>
      </article>
      <Footer />
    </main>
  );
}
