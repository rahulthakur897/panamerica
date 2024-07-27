import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export function AboutTabs() {
  return (<Tabs>
    <TabList>
      <Tab>Corporate Profile</Tab>
      <Tab>Global Delivery Methodology</Tab>
    </TabList>

    <TabPanel>
      <p>
        NEURON IT Solutions is committed to provide innovative management
        consulting and IT solutions to customers, and for partnering with them
        to leverage technology in today's competitive marketplace through a
        powerful mix of people, process and the appropriate application of the
        technology, which will deliver a cost effective solutions to the
        customers. We have rich domain experience in providing cost-competitive
        software development and consulting services. We have comprehensive
        service delivery models in terms of on-site, off-site and off-shore
        capabilities. Our services leverage our Global Delivery Methodology.
      </p>
      <p>
        Our Indian operations support our efforts by providing the experienced
        manpower, state-of-the-art technical infrastructure and facilities to
        offer market-driven software development project execution.
      </p>
      <p>
        We offer right solutions in today's business environment to companies
        who need competitive advantage. Our solutions, services and support
        provide an added advantage for clients to accomplish maximum
        returns-on-investments. Our primary objective is to provide the
        best-in-class software and BPO solutions. We work with clients closely
        in understanding each of their needs and apt address them with
        customized solutions using advanced software technologies that leverage
        the existing IT infrastructure of the client.
      </p>
      <p>We follow the core values such as:</p>
      <ul>
        <li>
          <strong>Results Driven:</strong> We measure our performance by what
          value addition we deliver to our partners and customers
        </li>
        <li>
          <strong>Disciplined:</strong> We follow disciplined and transparent
          processes to improve our service performance.
        </li>
        <li>
          <strong>Collaborative:</strong> We work with our strategic partners
          and clients with a shared vision.
        </li>
        <li>
          <strong>Interaction:</strong> We involve in detailed interaction with
          our partners, our customers in an open and straightforward manner.
        </li>
        <li>
          <strong>Competitive:</strong> We work aggressively and win over
          competition ethically.
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <p>
        Our global delivery model is aimed at offering clients, robust solutions
        and customized services that support their business activities. We do
        in-depth research in understanding the client needs and accordingly
        customize services and solutions.
      </p>
      <p>
        Our delivery model supports us to provide services and solutions in a
        swifter manner to provide the following advantages:
      </p>
      <ul>
        <li>
          <strong>Enhanced Productivity:</strong> We ensure better productivity
          through time-tested processes and service delivery models.
        </li>
        <li>
          <strong>Better Services:</strong> We offer better and faster solutions
          and support services to enable clients to improve their business
          profitability.
        </li>
        <li>
          <strong>Time-to-market:</strong> We provide enriched and market-driven
          services that are totally tailor-made to meet the distinctive needs of
          clients and provide them business efficiency.
        </li>
        <li>
          <strong>Optimized Costs:</strong> We establish a scenario where
          clients enjoy greater returns on investment and reduction in costs and
          effectiveness in operations through our services.
        </li>
        <li>
          <strong>Comprehensive Communication:</strong> We are constantly in
          communication with our clients about our quality
          initiatives,service-driven approaches and process-centric efforts to
          make service delivery more effective.
        </li>
      </ul>
    </TabPanel>
  </Tabs>
)};
