import './App.css';
// import BottomNav from './components/BottomNav';
// import ReactMapGL, { Map } from "react-map-gl"
// import { useState } from 'react';
import Navbar from './components/Navbar';
import Chargingstationpage from './components/Chargingstationpage';
import Cafe from './components/Cafe';
// const accessToken = 'pk.eyJ1IjoibWFuaXNoMDMwMjIwMDMiLCJhIjoiY2xmYjh3eGhmMm5vZzQ1bzRkbHFidmdodyJ9.A4sbVLxIwWrbKJ6xI5LW0g';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Agiencies from './components/Agencies';
import Mechanic from './components/Machanic';
import Particularchargingstation from './components/Particularchargingstation';
import Particularagaencies from './components/Particularagaencies';
import Particularcafe from './components/Particularcafe';
import Particularmachanic from './components/Particularmachanic';
import Landing from './components/Landing';
import Login from './components/Login';
import Signin from './components/Signin';
import About from './components/About';
import Contact from './components/Contact';
import Datastate from './context/datastate';
import Downnav from './components/Downnav';
function App() {
  // const [viewport, setViewport] = useState({
  //   latitude: 45.4211,
  //   longitude: -75.6903,
  //   width: "100vw",
  //   zoom: 10,
  //   height: "100vh"
  // });
  return (
    <div className="App">
      <Datastate>
        <Router>
          <Routes>
            <Route path="/" element={<>
              <Navbar /><Landing /><Downnav/></>} />
            <Route path="/about" element={<>
              <Navbar /><About/> <Downnav/></>} />
            <Route path="/contact" element={<>
              <Navbar /><Contact/><Downnav/></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/chargingpoint" element={<>
              <Navbar /><Chargingstationpage /><Downnav/></>} />
            <Route path="/agencies" element={<>
              <Navbar /><Agiencies /><Downnav/></>} />
            <Route path="/cafe" element={<>
              <Navbar /><Cafe /><Downnav/></>} />
            <Route path="/mechanic" element={<>
              <Navbar /><Mechanic /><Downnav/></>} />
            <Route path="/chargingpoint/:chargingpoint" element={<>
              <Navbar /><Particularchargingstation /><Downnav/></>} />
            <Route path="/agencies/:agencies" element={<>
              <Navbar /><Particularagaencies /><Downnav/></>} />
            <Route path="/cafe/:cafe" element={<>
              <Navbar /><Particularcafe /><Downnav/></>} />
            <Route path="/mechanic/:mechanic" element={<>
              <Navbar /><Particularmachanic /><Downnav/></>} />
          </Routes>
        </Router>
      </Datastate>
    </div>
  );
}

export default App;
