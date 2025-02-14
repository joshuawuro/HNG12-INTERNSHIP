import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import MyTickets from "./pages/MyTicket";
import About from "./pages/About";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/Events" element={<Events />} />
        <Route path="/Tickets" element={<MyTickets />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
