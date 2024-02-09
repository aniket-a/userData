import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./table.css"

const Table = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get("https://raw.githubusercontent.com/shubhamy-metricoidtech/mern-developer-mockjson/main/STUDENTS_MOCK_DATA.json")
            setData(res?.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1 className="title">USER DATA</h1>

                <div className="frame">
                    {
                        data.map((item) => (
                            <table className="table table-striped-columns" key={item.id}>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Nationality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.nationality}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Table
