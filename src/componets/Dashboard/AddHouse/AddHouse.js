import React, { useEffect, useState } from 'react';
import DbNavbar from '../DbNavbar/DbNavbar';
import DbSidebar from '../DbSidebar/DbSidebar';
import imgLogo from '../../../logos/cloud-upload-outline 1.png';

const AddHouse = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    console.log(file)
    console.log(info);
    const handleSubmit = (e) => {
        e.PreventDefault();

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('location', info.location);
        formData.append('bathroom', info.bathroom);
        formData.append('price', info.price);
        formData.append('bedroom', info.bedroom);
        console.log(formData)
        fetch("", {
            method: "POST",
            body: formData
        })
    }

        

    return (
        <main>
            <section>
                <DbNavbar />
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
                <div className="col-md-10 ">
                    <form onSubmit={handleSubmit}>
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Service Title</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="text" name="title" placeholder="Enter Title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Location</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="text" name="location" placeholder="Enter Location" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">No of Bathroom</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="number" name="bathroom" placeholder="Enter Number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Price</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="number" name="price" placeholder="Enter Price" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">No of Bedroom</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="number" name="bedroom" placeholder="Enter Number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Thumbnail</label> <br />
                                    <input onChange={handleFileChange} className="" type="file" name="file" placeholder={`${imgLogo} Upload image`} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <button type="submit" className="">Submit</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>
    );
};

export default AddHouse;