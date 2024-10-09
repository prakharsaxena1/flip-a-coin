import React from "react";
import { useCoinStore } from "../../Store/store";

const Settings: React.FC = () => {
  const { headsText, setHeadsText, setTailsText, tailsText, swapText, clearText, isFlipping } = useCoinStore();

  return (
    <>
      <div className="flex flex-col gap-2 m-2 w-full max-w-[500px] p-1">
        <div className="min-w-[200px] w-full items-center relative">
          <input
            className="transition-colors delay-100 p-2 rounded-sm outline-none text-slate-950 bg-zinc-50 dark:bg-slate-700 dark:text-slate-100 w-full text-center"
            type="text"
            placeholder="Enter your decision for heads"
            value={headsText}
            onChange={(e) => setHeadsText(e.target.value)}
          />
        </div>
        <div className="min-w-[200px] w-full items-center relative">
          <input
            className="transition-colors delay-100 p-2 rounded-sm outline-none text-slate-950 bg-zinc-50 dark:bg-slate-700 dark:text-slate-100 w-full text-center"
            type="text"
            placeholder="Enter your decision for tails"
            value={tailsText}
            onChange={(e) => setTailsText(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button
          disabled={isFlipping}
          onClick={() => swapText()}
          type="button"
          className="px-2 py-1 text-sm dark:bg-blue-700 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Swap
        </button>
        <button
          disabled={isFlipping}
          onClick={() => clearText()}
          type="button"
          className="px-2 py-1 text-sm dark:bg-blue-700 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Settings;
