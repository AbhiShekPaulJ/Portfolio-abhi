import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Preloader from "./components/Preloader";
// import PreloaderPrev from "./components/PreloaderPrev";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Router basename="/Portfolio-abhi/">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;

// import { useState } from "react";
// import Home from "./components/Home";
// import Preloader from "./components/Preloader";


// function App() {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <>
//       {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
//       <Home />
//     </>
//   );
// }

// export default App;
