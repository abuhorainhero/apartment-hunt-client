import React from 'react';
import Header from './Header/Header';
import './HomePage.scss'

const HomePage = () => {
    return (
        <div>
            <Header />
            <div>
                <section className="banner d-flex align-items-center text-center">
                    <div className="container">
                        <h1 className='text-white'>Best Food Waiting  for your Belly</h1>
                        <div className="search-box col-md-6 my-5 mx-auto">
                            <input id="query" type="text" className="form-control" placeholder="Search Food Item" />
                            <button className="btn text-white search-btn btn-rounded">Find Now</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;