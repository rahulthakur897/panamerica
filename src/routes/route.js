import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const About = loadable(() => import("../pages/about"));
const Career = loadable(() => import("../pages/career"));
const Home = loadable(() => import("../pages/home"));
const Profile = loadable(() => import("../pages/profile"));
const Service = loadable(() => import("../pages/service"));
const Training = loadable(() => import("../pages/training"));

const MyRoutes = ({ history }) => (
  <Routes history={history}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/careers" element={<Career />} />
    <Route path="/home" element={<Home />} />
    <Route path="/profiles" element={<Profile />} />
    <Route path="/services" element={<Service />} />
    <Route path="/training" element={<Training />} />
  </Routes>
);

export default MyRoutes;
