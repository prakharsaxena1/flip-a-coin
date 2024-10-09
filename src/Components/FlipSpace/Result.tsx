import React, { useMemo } from "react";
import { useCoinStore } from "../../Store/store";

const Result: React.FC = () => {
  const { headsFrozen, tailsFrozen, result } = useCoinStore();
  const text = useMemo(() => {
    if (result !== null) {
      return result === "Heads" ? headsFrozen : tailsFrozen;
    }
    return '';
  }, [headsFrozen, result, tailsFrozen]);
  return (
    <div>
      <div className="flex flex-row gap-2 p-3 m-3 justify-center items-center h-20">
        <span className="text-xl">Result is: </span>
        <span className="text-xl italic font-bold">{result ?? "....."}</span>
      </div>
      {result !== null && text !== '' && (
        <div className="flex m-auto min-w-[200px] w-4/6 max-w-[500px]">
          <div className="flex gap-2 justify-center items-center bg-zinc-400 p-2 text-center text-slate-950 dark:bg-slate-700 dark:text-slate-100 w-full rounded shadow-lg">
            <span className="italic text-sm">{`It's ${result.toLowerCase()}, so: `}</span>
            <span className="font-bold text-green-300">{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
