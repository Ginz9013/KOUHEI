import { useState, useEffect } from "react";
function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="w-20 h-8 flex justify-center items-center">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <p className="text-xl opacity-60">{date.toLocaleTimeString("it-IT")}</p>
    </div>
  );
}
export default Clock;
