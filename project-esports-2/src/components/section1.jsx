import React, { useEffect, useState } from "react";
import "../components/section1.css";

export function Section1() {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const text = "WELCOME TO AGENT ESPORTS";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setAnimatedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section1">
      <div className="bgshades d-flex p-3 flex-column justify-content-center  align-items-center">

        <div className={`text-animation`}>{animatedText}</div>

        <div className="textdanger fs-1 fw-bold">
          PARTICIPATE AND WIN
        </div>

        <div className="text-center">
          Elevate your gaming journey with our adrenaline pumping esports tournaments. <br />
          <span className="desktop">Join the competition today and unleash your gaming powers!</span>
          <span className="mobile text-white-50"> unleash your skills now!"</span>
        </div>

        <a href="#scroll" className="btn btn-danger mt-2">Join Now</a>

      </div>
    </div>
  );
}
