import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap justify-center gap-2 items-center py-4">
      <p className="text-center text-gray-300 text-sm">
        How to use coin flip to take decision correctly?
      </p>
      <a
        className="dark:bg-blue-700 bg-blue-500 px-2 py-1 rounded text-sm text-white font-semibold"
        href="https://www.youtube.com/watch?v=P3GsKaBzitY"
        target="_blank"
        rel="noopener noreferrer"
      >
        View video
      </a>
    </footer>
  );
};

export default Footer;
