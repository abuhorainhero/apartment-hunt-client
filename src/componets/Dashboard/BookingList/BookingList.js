import React from 'react';
import DbSidebar from '../DbSidebar/DbSidebar';
import './BookingList.scss';
import logo from '../../../logos/Logo.png';

const BookingList = () => {
    // state
    // useEffect

    return (
        <main>
            <section className="row my-2">
                <div className="col-md-2 d-flex justify-content-center">
                    <img className="img-fluid" style={{ height: "50px" }} src={logo} alt="" />
                </div>
                <div className="col-md-10 d-flex justify-content-between">
                    <h3 className="ml-5">Booking List</h3>
                    <h4 className="mr-5">{ } Abu Horain</h4>
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
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Massage</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    .map(info =>  <tr key={}>*/}
                                <tr >
                                    <td > Abu Horain</td>
                                    <td> abu.horain20@gmail.com</td>
                                    <td> 0174111111</td>
                                    <td> jfjaljfajfjfjjjj</td>
                                    <td >
                                        {/* input selector */}
                                        <button className='brandBtn'> Done </button>
                                    </td>
                                </tr>
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