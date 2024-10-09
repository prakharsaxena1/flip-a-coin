import React from "react";
import CoinFlip from "./CoinFlip";
import Result from "./Result";

const FlipSpace: React.FC = () => {
  return (
    <div className="p-5">
      <CoinFlip />
      <Result />
    </div>
  );
};

export default FlipSpace;
