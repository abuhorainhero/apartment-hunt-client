import React, { useContext, useEffect, useState } from 'react';
import DbSidebar from '../DbSidebar/DbSidebar';
import './BookingList.scss';
import logo from '../../../logos/Logo.png';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/bookinglist")
        .then(res => res.json())
        .then(data =>setBooking(data) )
        .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <section className="row my-2">
                <div className="col-md-2 d-flex justify-content-center">
                <Link to="/">   <img className="img-fluid" style={{ height: "50px" }} src={logo} alt="" /></Link>
                </div>
                <div className="col-md-10 d-flex justify-content-between">
                    <h3 className="ml-5">Booking List</h3>
                    <h4 className="mr-5">{ loggedInUser.name}</h4>
                </div>
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
                <div className="col-md-10" style={{height: "100vh", backgroundColor: '#E0F2F7' }}>
                    <div className="bookingTable m-3 p-3">

                        <table className="table">
                            <thead className="theadLight">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                 
                                    <th scope="col">Phone</th>
                                    <th scope="col">Massage</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    .map(info =>  <tr key={}>*/}
                             {
                                 booking.map(book =>   <tr >
                                    <td >{book.name}</td>
                                 <td>{book.email}</td>
                                 <td>{book.phon}</td>
                               
                                 <td>{book.message}</td>
                                    <td >
                                        {/* input selector */}
                                        <button className='brandBtn'> Pending </button>
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

export default BookingList;