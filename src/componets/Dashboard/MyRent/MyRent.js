import React, { useEffect, useState } from 'react';
import DbSidebar from '../DbSidebar/DbSidebar';
import './MyRent.scss';
import logo from '../../../logos/Logo.png';

const MyRent = () => {
    const [rentList, setRentList] = useState({})
    useEffect(() => {
        fetch("")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <section className="row my-2">
                <div className="col-md-2 d-flex justify-content-center">
                    <img className="img-fluid" style={{ height: "50px" }} src={logo} alt="" />
                </div>
                <div className="col-md-10 d-flex justify-content-between">
                    <h3 className="ml-5">My Rent House</h3>
                    <h4 className="mr-5">{ } Abu Horain</h4>
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
                                <tr >
                                    <td > My House</td>
                                    <td>$ 100</td>
                                    <td >
                                        <button className="brandBtn"> View Details </button>
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

export default MyRent;