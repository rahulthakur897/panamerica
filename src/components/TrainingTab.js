import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export function TrainingTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Java</Tab>
        <Tab>.Net</Tab>
        <Tab>ERP</Tab>
      </TabList>

      <TabPanel>
        <div className="space-between">
            <div>
                <img src={process.env.PUBLIC_URL + '/assets/images/lang/java.png'} alt="java" />
            </div>
            <div>
                <p></p>
            </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="space-between">
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/lang/net.png'} alt="net" />
                </div>
                <div>
                    <p></p>
                </div>
            </div>
      </TabPanel>
      <TabPanel>
        <div className="space-between">
            <div>
                <img src={process.env.PUBLIC_URL + '/assets/images/lang/erp.png'} alt="net" />
            </div>
            <div>
                <p></p>
            </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
