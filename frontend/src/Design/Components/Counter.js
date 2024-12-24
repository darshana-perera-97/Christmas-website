import React, { useEffect, useState } from "react";

const Counter = () => {
  const [christmasCountdown, setChristmasCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [newYearCountdown, setNewYearCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showChristmas, setShowChristmas] = useState(true);

  useEffect(() => {
    const christmasDate = new Date(
      `December 25, ${new Date().getFullYear()} 00:00:00`
    ).getTime();

    const newYearDate = new Date(
      `January 1, ${new Date().getFullYear() + 1} 00:00:00`
    ).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      // Calculate Christmas Countdown
      const christmasDifference = christmasDate - now;
      if (christmasDifference > 0) {
        const days = Math.floor(christmasDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (christmasDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (christmasDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((christmasDifference % (1000 * 60)) / 1000);
        setChristmasCountdown({ days, hours, minutes, seconds });
      } else {
        setShowChristmas(false); // Disable Christmas countdown when the date has passed
      }

      // Calculate New Year Countdown
      const newYearDifference = newYearDate - now;
      if (newYearDifference > 0) {
        const days = Math.floor(newYearDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (newYearDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (newYearDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((newYearDifference % (1000 * 60)) / 1000);
        setNewYearCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter">
      {showChristmas ? (
        <>
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-6 text-center">
              <h1 className="txt1">Countdown to Christmas</h1>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            {christmasCountdown.days > 0 && (
              <div className="col-2">
                <div className="number">{christmasCountdown.days}</div>
                <div className="label">Days</div>
              </div>
            )}
            <div className="col-2">
              <div className="number">{christmasCountdown.hours}</div>
              <div className="label">Hours</div>
            </div>
            <div className="col-2">
              <div className="number">{christmasCountdown.minutes}</div>
              <div className="label">Minutes</div>
            </div>
            <div className="col-2">
              <div className="number">{christmasCountdown.seconds}</div>
              <div className="label">Seconds</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-6 text-center">
              <h1 className="txt1">Countdown to New Year 2025</h1>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            {newYearCountdown.days > 0 && (
              <div className="col-2">
                <div className="number">{newYearCountdown.days}</div>
                <div className="label">Days</div>
              </div>
            )}
            <div className="col-2">
              <div className="number">{newYearCountdown.hours}</div>
              <div className="label">Hours</div>
            </div>
            <div className="col-2">
              <div className="number">{newYearCountdown.minutes}</div>
              <div className="label">Minutes</div>
            </div>
            <div className="col-2">
              <div className="number">{newYearCountdown.seconds}</div>
              <div className="label">Seconds</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;
