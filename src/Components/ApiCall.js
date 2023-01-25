import React from 'react';
import { useEffect, useState } from 'react';


const ApiCall = () => {

    const [data, setData] = useState([]);


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts').then((fetcchData) => {
            fetcchData.json().then((data) => {
                setData(data)
            });
        });
    }, [])

 
    return (
        <div>
            <table border={'1'}>
                <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                {
                    data.map((dummyData) => {
                        return (
                            <tr>
                                <td>{dummyData.userId}</td>
                                <td>{dummyData.id}</td>
                                <td>{dummyData.title}</td>
                                <td>{dummyData.body}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ApiCall
