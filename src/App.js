import { createHashHistory } from "history";
import MyRoutes from './routes/route';
import './App.css';

function App() {
  return (
    <MyRoutes history={createHashHistory()} />
  );
}

export default App;
