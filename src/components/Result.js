import React from 'react';
import Card from './Card';
import './Result.css'
const Result =({suggestedDomains})=>{
	const suggestedDomainsJsx = suggestedDomains.map((suggestedDomain)=>{
		return <Card key={suggestedDomain} suggestedDomain={suggestedDomain}/>;
	});
	return(
		<div className="result">
			{suggestedDomainsJsx}
		</div>
	);
};
export default Result;
