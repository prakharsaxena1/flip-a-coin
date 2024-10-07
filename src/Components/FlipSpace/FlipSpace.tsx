import React, { useEffect, useState } from "react";

const headsImage = "https://media.geeksforgeeks.org/wp-content/uploads/20231016151817/heads.png";
const tailsImage = "https://media.geeksforgeeks.org/wp-content/uploads/20231016151806/tails.png";

type CoinFlipProps = {
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
}

const CoinFlip: React.FC<CoinFlipProps> = ({ setResult }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isFlipping) {
      setResult(null);
    }
  }, [isFlipping, setResult]);

  const handleFlip = () => {
    setIsFlipping(true);
    const totalRotations = 360 * 10;
    const val = Math.random();
    const isTails = val > 0.5;
    const finalRotation = isTails ? 180 : 0;
    setRotation(totalRotations + finalRotation);
    setTimeout(() => {
      setIsFlipping(false);
      setRotation(finalRotation);
      setResult(isTails ? 'Tails' : 'Heads');
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Coin container */}
      <div className={`relative w-48 h-48`} style={{ perspective: '1000px' }}>
        {/* Coin flipping logic */}
        <div className={`w-full h-full ${!isFlipping ? '' : 'transition-transform duration-[5s]'}`} style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)` }}>
          {/* Front (Heads) */}
          <div className="absolute inset-0 flex justify-center items-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
            <img src={headsImage} alt="heads" className="w-full h-full object-cover" />
          </div>
          {/* Back (Tails) */}
          <div className="absolute inset-0 flex justify-center items-center backface-hidden" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
            <img src={tailsImage} alt="tails" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* Button to flip the coin */}
      <button onClick={handleFlip} disabled={isFlipping} className="mt-8 px-4 py-2 dark:bg-blue-700 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors">
        {isFlipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    </div>
  );
}

type ResultProps = {
  result: string | null;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className="flex flex-row gap-2 p-3 m-3 justify-center items-center h-20">
      <span className="text-xl">Result is: </span>
      <span className="text-xl italic font-bold">{result ?? '.....'}</span>
    </div>
  );
}

const FlipSpace: React.FC = () => {
  const [coinResult, setCoinResult] = useState<string | null>(null);
  return (
    <div className="p-5">
      <CoinFlip setResult={setCoinResult} />
      <Result result={coinResult} />
    </div>
  );
};

export default FlipSpace;
