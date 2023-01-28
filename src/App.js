import React, { useState } from 'react';
import Header from './components/Header';
import Result from './components/Result';
import Search from './components/Search'
import './App.css';
import name from '@rstacruz/startup-name-generator';

function App() {
   
    const [suggestedDomains, setSuggestedDomains] = useState([]);

    const handleInputChange = (domain) => {
        setSuggestedDomains(domain.length > 0 ? name(domain) : []);
    };

    return (
        <div>
            <Header />
            <Search onInputChange={handleInputChange} />
            <Result suggestedDomains={suggestedDomains} />
        </div>
    );
}

export default App;
