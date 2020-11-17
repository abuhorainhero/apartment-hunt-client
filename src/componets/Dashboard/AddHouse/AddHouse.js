import React, { useContext, useEffect, useState } from 'react';
import DbSidebar from '../DbSidebar/DbSidebar';
import imgLogo from '../../../logos/cloud-upload-outline 1.png';
import logo from '../../../logos/Logo.png';
import './AddHouse.scss';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const AddHouse = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('location', info.location)

    const handleSubmit = (e) => {
        e.preventDefault();
       const image = {img:'https://i.ibb.co/x6jR0GP/Rectangle-403.png'}
        const totalFormData =  {...info, ...image}
        fetch("http://localhost:5000/addApartment", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify(totalFormData)
        })
        .then(res => res.json())
        .then(data => data=== true?alert('Apartment Added'): alert("Apartment not added pls try again"))
    }



    return (
        <main>
            <section className="row my-2">
                <div className="col-md-2 d-flex justify-content-center">
                  <Link to="/home">  <img className="img-fluid" style={{ height: "50px" }} src={logo} alt="" /></Link>
                </div>
                <div className="col-md-10 d-flex justify-content-between">
                    <h3 className="ml-5">Add House</h3>
                    <h4 className="mr-5">{loggedInUser.name } </h4>
                </div>
            </section>
            <section className="row">
                <div className="col-md-2">
                    <DbSidebar />
                </div>
                <div className="col-md-10 addHouseForm" style={{height: "100vh", backgroundColor: '#E0F2F7' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="row m-3 p-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Service Title</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="text" name="name" placeholder="Enter Title" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Location</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="text" name="location" placeholder="Enter Location" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">No of Bathroom</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="number" name="bathroom" placeholder="Enter Number" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Price</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="number" name="price" placeholder="Enter Price" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">No of Bedroom</label> <br />
                                    <input onBlur={handleBlur} className="form-control" type="number" name="bedroom" placeholder="Enter Number" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Thumbnail</label> <br />
                                    <input onChange={handleFileChange} className="" type="file" name="file" placeholder={`${imgLogo} Upload image`} required/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <button type="submit" className="brandBtn mr-3">Submit</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>
    );
};

export default AddHouse;