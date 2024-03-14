import { useState } from "react";

/* eslint-disable react/prop-types */
const Accordion = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="accordion">
      <div
        className="accordion__title"
        onClick={() => setShowContent(!showContent)}
      >
        <h5>{title}</h5>
      </div>
      <div
        className={`accordion__content ${showContent ? "show-content" : ""}`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
