import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


function Read() {

    const [apiData, setApiData] = useState([]);

    function getData() {
        axios.get('https://mock-api-bdg1.onrender.com/data')
            .then((response) => {
                setApiData(response.data);
            })
    }

    function handleDelete(id) {
        axios.delete(`https://mock-api-bdg1.onrender.com/data/${id}`)
            .then(() => {
                getData();
            })
    }

    function setDataToStorage(id, name, email, website) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("website", website);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='mb-2 mt-2'>
                            <Link to='/create'>
                                <button className='btn btn-success'>Create New Data</button>
                            </Link>
                        </div>
                        <div className='mt-4'>
                            <table className='table table-bordered table-hover tablel-striped'>
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {apiData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.website}</td>
                                            <td className='text-center'>
                                                <Link to="/edit">
                                                    <button className='btn btn-warning me-2'
                                                        onClick={() => setDataToStorage(item.id, item.name, item.email, item.website)}>
                                                        <FaEdit />
                                                    </button>
                                                </Link>
                                                <button className='btn btn-danger'
                                                    onClick={() => {
                                                        if (window.confirm("Are you sure to delete data?")) {
                                                            handleDelete(item.id)
                                                        }
                                                    }}>
                                                    <FaTrashCan />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read