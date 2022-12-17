import React from "react";
import PropTypes from "prop-types";
import classes from "./style.module.css";

function Card({ svg, name, val, safe, bgColor }) {
  return (
    <div className={classes.container}>
      <div className={classes.data}>
        <p>{name}</p>
        <p>{val}</p>
        <p>{safe}</p>
      </div>
      <div className={classes.svg} style={{ backgroundColor: bgColor }}>
        {svg}
      </div>
    </div>
  );
}

Card.defaultProps = {
  svg: "",
  name: " ",
  val: " ",
  safe: " ",
  bgColor: "",
};

Card.propTypes = {
  svg: PropTypes.node,
  name: PropTypes.string,
  bgColor: PropTypes.string,
  val: PropTypes.string,
  safe: PropTypes.string,
};

export default Card;
