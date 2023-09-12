import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ title, content, onTitleClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onTitleClick();
  };

  return (
    <div className="margin_bottom">
      <div className="titleCollapse" onClick={handleClick}>
        {title}
        <button className={isOpen ? "rotate" : ""}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button> 
      </div>
      {content}
    </div>
  );
}

export default Dropdown;
