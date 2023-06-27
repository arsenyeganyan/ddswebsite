import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Styles/default.css';
import './Styles/home.css';
import './Styles/services.css';
import './Styles/workinghours.css';
import './Styles/contact.css';

import Navbar from "./Components/Navbar";
import Main from "./Components/Pages/Main";
import Contact from "./Components/Pages/Contact";
import Founders from "./Components/Pages/Founders";
import History from "./Components/Pages/History";
import Team from "./Components/Pages/Team";
import Servicess from "./Components/Pages/Servicess";
import WorkingHours from "./Components/Pages/WorkingHours";

function App(){
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/founders" element={<Founders />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/services" element={<Servicess />}/>
          <Route path="/workinghours" element={<WorkingHours />}/>
        </Routes>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);