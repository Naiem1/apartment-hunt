import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MyRent.scss';


const MyRent = () => {

    const myRent = [1,1,1];
    
    return (
        <div className="row m-4">
            <Sidebar/>
            <div className="col-8 col-lg-10 col-md-9">
                <h5 className='mt-2 ml-5'>My Rent</h5>
                <div className="my-rent-container p-4">
                    <div className="table-container">
                        <table>
                            <tr>
                                <th>House name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            {
                                myRent.map(rent => 
                                    <tr>
                                        <td>Nowakhali</td>
                                        <td>$123</td>
                                        <td><button className='btn btn-sm'>View Details</button></td>
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

export default MyRent;