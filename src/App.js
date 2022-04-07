import Nav from "./GlobalComp/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Genre from "./pages/Genre";
import Industry from "./pages/Industry";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
