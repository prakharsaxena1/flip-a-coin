import React from "react";
import Heading from "./Components/Heading";
import FlipSpace from "./Components/FlipSpace";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <main className="w-full h-[100vh] font-mono">
      <Heading />
      <FlipSpace />
      <Footer />
    </main>
  );
};

export default App;
