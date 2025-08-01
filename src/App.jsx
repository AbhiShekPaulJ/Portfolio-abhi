import { useState } from "react";
import Home from "./components/Home";
import Preloader from "./components/Preloader";


function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Home />
    </>
  );
}

export default App;
