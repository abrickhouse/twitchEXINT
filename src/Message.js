import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Message.css";

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 76));
}

function randomIntegerTwo(max) {
  return Math.floor(Math.random() * (max + 130));
}

function randomIntegerThree() {
  return Math.floor(Math.random() * (7000 + 1000));
}

function randomRgbColor() {
  let r = randomInteger(180);
  let g = randomInteger(180);
  let b = randomInteger(180);
  return [r, g, b];
}

function randomHexColor() {
  let [r, g, b] = randomRgbColor();

  let hr = r.toString(16).padStart(2, "0");
  let hg = g.toString(16).padStart(2, "0");
  let hb = b.toString(16).padStart(2, "0");

  return "#" + hr + hg + hb;
}

const Message = ({ user, text }) => {
  var random_color = randomHexColor();
  var random_x = randomIntegerTwo(window.innerWidth - 170);
  var random_y = randomIntegerTwo(window.innerHeight - 170);
  const col = {
    color: random_color,
  };

  const pos = {
    left: random_x,
    top: random_y,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // change visibility
    }, randomIntegerThree());
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main" id="kaboom" style={pos}>
      <div className="username" style={col}>
        {user}:
      </div>

      <div className="chattext"> {text}</div>
    </div>
  );
};

Message.displayName = "Message";

Message.propTypes = {
  user: PropTypes.object,
  text: PropTypes.object,
};

export default Message;
