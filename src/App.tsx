import React from "react";
import Heading from "./Components/Heading";
import FlipSpace from "./Components/FlipSpace";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Heading />
        <FlipSpace />
      </main>
      <Footer />
    </div>
  );
};

export default App;
