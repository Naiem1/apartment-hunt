import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.scss';

const BookingList = () => {

    const bookingList = [1,1,1];

    return (
        <div className="row m-4">
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h5 className='mt-2 ml-5'>Booking List</h5>
                <div className="list-container p-4">
                    <div className="table-container">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Phone</th>
                                <th>Message</th>
                                <th>Status</th>
                            </tr>
                            {
                                bookingList.map(list => 
                                    <tr>
                                        <td>Moin uddin</td>
                                        <td>moinuddin3188@gmail.com</td>
                                        <td>016000000</td>
                                        <td>Lorem ipsum</td>
                                        <select name="" id="">
                                            <option value="Pending">Pending</option>
                                            <option value="Ongoing">Ongoing</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </tr>
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;