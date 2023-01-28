import React from 'react';
import './Card.css';

const namecheapUrl =
"https://www.namecheap.com/domains/registration/results/?domain=";
const Card = ({ suggestedDomain }) => {
	return (
		<a
			target="_blank"
			rel="noreferrer"
			className="link" href={`${namecheapUrl}${suggestedDomain}`}>
			<div className="result-card">
				<p>{suggestedDomain}</p>

			</div>
		</a>
	);
};
export default Card;
