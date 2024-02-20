import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setWebsite(localStorage.getItem('website'));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://mock-api-bdg1.onrender.com/data/${id}`, {
            name,
            email,
            website
        })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log("Error:", error)
            })
    }


    return (
        <>
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className='mb-2 mt-2'>
                            <Link to='/'>
                                <button className='btn btn-primary'>Read Data</button>
                            </Link>
                        </div>
                        <br />
                        <form onSubmit={handleUpdate}>
                            <div className="form-group">
                                <label className='fw-bolder'><i>Enter Name : </i></label>
                                <input type="text" placeholder='Name' value={name} className='form-control mt-2'
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                            </div>
                            <div className="form-group mt-3">
                                <label className='fw-bolder'><i>Enter Email : </i></label>
                                <input type="email" placeholder='Email' value={email} className='form-control mt-2'
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                            </div>
                            <div className="form-group mt-3">
                                <label className='fw-bolder'><i>Enter Website : </i></label>
                                <input type="text" placeholder='Website' value={website} className='form-control mt-2'
                                    onChange={(e) => {
                                        setWebsite(e.target.value)
                                    }} />
                            </div>
                            <br />
                            <div className="d-grid">
                                <input type="submit" value="Update" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit