import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [website, setWebsite] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://mock-api-bdg1.onrender.com/data", {
            name,
            email,
            website,
        })
            .then(() => {
                navigate('/');
            })
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-md-4">
                        <div className='mb-2 mt-2'>
                            <Link to='/'>
                                <button className='btn btn-primary'>Read Data</button>
                            </Link>
                        </div>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className='fw-bolder'><i>Enter Name : </i></label>
                                <input type="text" placeholder='Name' value={name} className='form-control mt-2'
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <label className='fw-bolder'><i>Enter Email : </i></label>
                                <input type="email" placeholder='Email' value={email} className='form-control mt-2'
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <label className='fw-bolder'><i>Enter Website : </i></label>
                                <input type="text" placeholder='Website' value={website} className='form-control mt-2'
                                    onChange={(e) => setWebsite(e.target.value)} />
                            </div>
                            <br />
                            <div className="d-grid">
                                <input type="submit" value="Submit" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create