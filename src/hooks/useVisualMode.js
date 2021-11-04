import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = function (mode, replace = false) {
    if (replace) {

      setHistory((prev) => {
        let historyCopy = [...prev];

        historyCopy.pop();

        return [...historyCopy, mode];
      })

      return setMode(mode);
    }
    setHistory(prev => [...prev, mode]);

    return setMode(mode);
  }

  const back = function () {
    let historyCopy = [...history];

    if (historyCopy.length > 1) {
      historyCopy.pop();
      setHistory(historyCopy);

      return setMode(historyCopy[historyCopy.length - 1])
    } else {
      return setMode(history[0]);
    }
  }

  return { mode, transition, back };
}