import React, { useState, useEffect } from 'react';
import './Style/GetMethod.css';
import DeleteMethod from './DeleteMethod';
import PostMethod from './PostMethod';

const GetMethod = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        getMethod();

    }, [])

    const getMethod = () => {

        fetch('http://localhost:3333/students').then((rawInfo) => {
            rawInfo.json().then((resp) => {
                setData(resp);
            });
        }).catch((err) => {
            console.log(`You are getting an erro which is : ${err}`);
        })
    }





    return (

        <div className='tableContainer'>

            <PostMethod fun3={getMethod} />
            <div className='tableStructure'>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>USER NAME</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Remove Users</th>
                    </tr>
                    {
                        data.map((val, index) => {

                            return (

                                <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.userName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.mobileNo}</td>
                                    <td><DeleteMethod fun={val.id} fun2={getMethod} /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            </div>
        </div>
    )
}

export default GetMethod;
