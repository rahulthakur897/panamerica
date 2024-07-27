import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export function ServiceTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Application Development</Tab>
        <Tab>Business Outsourcing (BPO)</Tab>
        <Tab>CRM/ Business Intelligence</Tab>
        <Tab>IT Placements</Tab>
      </TabList>

      <TabPanel>
        <p>
          Developing applications to meet business needs relies on technology,
          tools and technical architectures. To meet the demand for critical
          business applications in shorter time frames, many organizations are
          striving to improve their application development processes.
        </p>
        <p>
          Traditional systems for optimization do not address one key process
          that is a major consumer of developer's time and effort - application
          problem resolution. Industry experts estimate that developers spend
          30%-60% of their time identifying and correcting defects reported by
          testing and escalated by support staff. This process, referred to as
          application problem resolution, is common to all development
          organizations, regardless of their industry, development method, and
          platform.
        </p>
        <p>
          Our customized application development services offer consulting and
          delivery expertise in end-to-end systems integration and custom
          application development. Our services are designed to drive innovation
          and expansion into new marketplaces while reducing overall costs.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          We offer business process outsourcing services to meet the diverse
          needs of clients. We emphasize on rendering value based offshore
          outsourcing for our customers. Our offshore consulting services
          address all the challenges such as optimization of costs, increasing
          return on investments and so on.
        </p>
        <p>
          Our rich industry experience helps us in formulating customized
          services to diverse business verticals. We position ourselves to cater
          the needs of customers by leveraging on quality and innovation. We
          provide customized service offerings that convert our initiatives into
          flexible service delivery to offer clients an everlasting technology
          support experience.
        </p>
        <p>
          <strong>
            We constantly strive for innovation and excellence in each of our
            service offering. With a customer-focused attitude, desire to
            understand customer business and identify the right support
            solution, we provide comprehensive business process outsourcing
            services for our clients. We offer support services for diverse
            industries such as:
          </strong>
        </p>
        <ul>
          <li>Insurance</li>
          <li>Small Business Units</li>
        </ul>
        <p>
          <strong>
            We offer BPO support solutions and Call Center Support with modern
            technology in order to meet the Inbound and Outbound calling
            requirements. We provide 24x7 support service. Our Business Process
            Outsourcing services include:
          </strong>
        </p>
        <div className="space-around">
          <div className="service-box">
            <ul>
              <li>Inbound Services</li>
              <li>Comprehensive Customer care and support services.</li>
              <li>Market-centric order processing services.</li>
              <li>Insurance claims and verification processing.</li>
              <li>Advanced database management and back-office operations.</li>
            </ul>
          </div>
          <div className="service-box">
            <ul>
              <li>Outbound Services</li>
              <li>Direct marketing campaigns</li>
              <li>Welcome calls</li>
              <li>Selling services/ideas/policies</li>
              <li>Appointment handling</li>
              <li>Selling and promoting products and services</li>
              <li>Database maintenance and updates</li>
              <li>Prospects and lead generation</li>
              <li>Market research and analysis</li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <p>
          We provide complete range of Customer Relationship Management (CRM) to
          support diverse businesses in real-time basis. Our CRM solutions and
          business intelligence applications make use of business insights in
          implementing process improvement in wholesome aspects such as sales,
          marketing and service management. Our CRM solutions help in solving
          problems in customer interaction and customer retention.
        </p>
        <p>
          Our CRM solutions help marketing and sales teams in refining the
          customer reach and getting customers valuable feedback. These
          insights can be further be used in making the service delivery models
          more effective.
        </p>
        <p>
          Our CRM tools and Business Intelligence applications support in
          generating detailed marketing and sales reports to make business
          insights quantifiable and to improve the sales force.
        </p>
        <p>
          <strong>
            Our comprehensive CRM solutions help business organizations to:
          </strong>
        </p>
        <ul>
          <li>
            Attain appropriate business information to improve business
            efficiency
          </li>
          <li>
            Identify vital factors that contribute the effectiveness of customer
            satisfaction
          </li>
          <li>Support the decision making process efficiently</li>
          <li>
            Undertake market-driven and detailed customer preference analysis
          </li>
          <li>Recognize the areas for further enhancement of services</li>
          <li>
            Adopt proactive approach in the entire service rendering process
          </li>
          <li>
            Make use of integrated communication across different communication
            vehicles and channels
          </li>
          <li>Keep track of leads and plan to convert them into business</li>
          <li>Organize promotional and awareness programmes for more reach</li>
          <li>Assess the actual sales vis-vis target sales</li>
        </ul>
        <p>
          Our CRM solutions help businesses of any size in automating the entire
          process of customer interaction, information and analysis. Our
          solutions help in easily searching, sharing, analyzing, collaborating
          and creating detailed business reports.
        </p>
        <p>
          <strong>
            Our CRM Solutions support to automate the following activities:
          </strong>
        </p>
        <ul>
          <li>Sales force management</li>
          <li>Tracking of sales targets vs. achievements</li>
          <li>Lead generation</li>
          <li>Business communication with customers</li>
          <li>Email management</li>
          <li>Business intelligence report generation</li>
        </ul>
      </TabPanel>
      <TabPanel>
        <p>
          We support students, IT employees and IT career aspirants to plan
          career effectively. We provide comprehensive IT training along with
          communication skills and other corporate grooming support.
        </p>
        <p>
          The international IT job market is always emerging and evolving with
          more and more new avenues of job opportunities and diverse IT careers.
          We provide comprehensive support for both IT aspirants and IT firms.
        </p>
        <p>
          <strong>
            We assist in recruitment of software professionals at all levels:
          </strong>
        </p>
        <ul>
          <li>Directors</li>
          <li>Vice Presidents</li>
          <li>Business Managers</li>
          <li>Delivery Managers</li>
          <li>Project Managers</li>
          <li>Project Leaders</li>
          <li>Architects</li>
          <li>Software Programmers</li>
          <li>Software Engineers</li>
          <li>System Analysts</li>
          <li>Database Administrators</li>
          <li>Systems Administrators</li>
          <li>Support Managers</li>
          <li>Designers</li>
        </ul>
        <p>
          <strong>We offer an end-to-end It Placements support such as:</strong>
        </p>
        <ul>
          <li>Head hunting the people</li>
          <li>Job Opportunity Search</li>
          <li>Job Interview Coordination</li>
          <li>Contracting</li>
          <li>Other related HR Services</li>
        </ul>
      </TabPanel>
    </Tabs>
  );
}
