import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = function (mode, replace = false) {
    if (replace) {
      history.pop();
      setHistory(prev => [...prev, mode])
      return setMode(mode)
    }
    setMode(mode);

    setHistory(prev => [...prev, mode]);
  }

  const back = function () {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1])
    }
  }

  return { mode, transition, back }
}