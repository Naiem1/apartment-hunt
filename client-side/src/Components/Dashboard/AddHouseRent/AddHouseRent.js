import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddHouseRent.scss';

const AddHouseRent = () => {
    return (
        <div className="row m-4">
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h5 className='mt-2 ml-5'>Add Rent</h5>
                <div className='add-rent-container p-4'>
                    <div className="form-container">
                        <form action="">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="input1">Services Title</label>
                                    <input type="text" class="form-control" id="input1" placeholder="Service Title" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="input2">Price</label>
                                    <input type="text" class="form-control" id="input2" placeholder="Price" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="input3">Location</label>
                                    <input type="text" class="form-control" id="input3" placeholder="Enter Location"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="input4">No of Bedroom</label>
                                    <input type="text" class="form-control" id="input4" placeholder="No of Bedroom"/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="input5">No of Bathroom</label>
                                    <input type="text" class="form-control" id="input5" placeholder="No of Bathroom"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="exampleFormControlFile1">Thumbnail</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='text-right mt-3'>
                        <button className='submit-btn' type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHouseRent;