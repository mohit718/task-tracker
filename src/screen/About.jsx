import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="centered screen">
      <h5>
        Our goal is to give our users best experience in managing their tasks.
      </h5>
      <Link to="/">
        <div className="task-header my-1">
          <RiArrowGoBackLine className='icon' style={{height:'1.3rem',width:'1.3rem'}}/>
          <h4>Go Back</h4>
        </div>
      </Link>
    </div>
  );
}
