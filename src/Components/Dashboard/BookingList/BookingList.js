import React from 'react';
import DbNavbar from '../DbNavbar/DbNavbar';
import DbSidebar from '../DbSidebar/DbSidebar';

const BookingList = () => {
    return (
        <main>
            <section>
                <DbNavbar />
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
            </section>
        </main>
    );
};

export default BookingList;