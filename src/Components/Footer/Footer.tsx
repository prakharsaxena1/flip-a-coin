import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap justify-center gap-2 items-center py-4">
      <p className="transition-colors delay-100 text-center dark:text-gray-300 text-gray-600 text-sm">
        How to use coin flip to take decision correctly?
      </p>
      <a
        className="transition-colors delay-100 dark:bg-blue-700 bg-blue-500 px-2 py-1 rounded text-sm text-white font-semibold"
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
