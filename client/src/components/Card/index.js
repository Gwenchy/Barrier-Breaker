import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Card = (props) => {
	return(
		<div className="divSize dSize">
			<div className="card text-white bg-primary mb-3 text-center cSize">
        <div className="card-header hColor">{props.cardHeader}</div>
        <div className="card-body h2Color">
          <h4 className="card-title">{props.cardTitle}</h4>
            <p className="card-text">{props.cardText}</p>
        </div>
      </div>
		</div>
	);
}

export default Card;