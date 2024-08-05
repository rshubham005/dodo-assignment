import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Notification from "./components/Notification/Notification";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "./components/Transactions/Transactions";
import ExtraPages from "./components/ExtraPages/ExtraPages";
import UserSettings from "./components/UserSettings/UserSettings";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="contents">
          <Sidebar />
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/transactions" element={<Transactions />} />
              <Route path="/extra" element={<ExtraPages />} />
              <Route path="/user-setting" element={<UserSettings />} />
            </Routes>
          </div>
          <Notification />
        </div>
      </div>
    </Router>
  );
}

export default App;
