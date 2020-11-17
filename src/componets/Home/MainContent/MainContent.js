import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="mainContent">
            <div className="overlay">
                <h1>Find Your House Rent</h1>
                <div className='find'>
                    <input placeholder="Search..." type="text" name="" id="serch"/>
                    <button className="btn button findButton " type="submit">Find Now</button>
                </div>
            </div>
        </main>
    );
};

export default MainContent;