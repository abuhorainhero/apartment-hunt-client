import React from 'react';
import DbNavbar from '../DbNavbar/DbNavbar';
import DbSidebar from '../DbSidebar/DbSidebar';

const MyRent = () => {
    // useState
    // useEffect

    return (
        <main>
            <section>
                <DbNavbar />
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
                <div className="col-md-10">
                    <div className="">

                        <table className="table">
                            <thead className="thead-light">
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
                                        <button> View Details </button>
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