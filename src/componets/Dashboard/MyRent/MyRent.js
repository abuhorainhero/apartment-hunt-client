import React, { useContext, useEffect, useState } from 'react';
import DbSidebar from '../DbSidebar/DbSidebar';
import './MyRent.scss';
import logo from '../../../logos/Logo.png';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const MyRent = () => {
    const [rentList, setRentList] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://peaceful-dusk-81503.herokuapp.com/booking?booking=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setRentList(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <section className="row my-2">
                <div className="col-md-2 d-flex justify-content-center">
                  <Link to="/"> <img className="img-fluid" style={{ height: "50px" }} src={logo} alt="" /></Link> 
                </div>
                <div className="col-md-10 d-flex justify-content-between">
                    <h3 className="ml-5">My Rent House</h3>
                    <h4 className="mr-5">{ loggedInUser.name} </h4>
                </div>
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
                <div className="col-md-10 " style={{ height: "100vh", backgroundColor: '#E0F2F7' }}>
                    <div className="myRentTable m-3 p-3">

                        <table className="table ">
                            <thead className="theadLight">
                                <tr>
                                    <th scope="col">House Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
            .map(info =>  <tr key={}>*/}
                             {
                                 rentList.map(rent =>   <tr >
                                    <td >{rent.name}</td>
                                 <td>${rent.price}</td>
                                    <td >
                                        <button className="brandBtn"> View Details </button>
                                    </td>
                                </tr>)
                             }
                                {/* ) */}
                                {/* } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MyRent;