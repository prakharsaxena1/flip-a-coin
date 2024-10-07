import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 items-center">
      <p className="text-center">How to use coin flip to take decision correctly?</p>
      <a className="dark:bg-blue-700 bg-blue-500 px-2 py-1 rounded text-white font-semibold" href="https://www.youtube.com/watch?v=P3GsKaBzitY" target="_blank">View video</a>
    </div>
  );
};

export default Footer;
