import React, { useEffect, useState } from 'react';
import './Style/PostMethod.css';

const PostMethod = (props) => {

    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');


   
    const userNameHandle = (e) => {
        setUserName(e.target.value)
    };
    const emailHandle = (e) => {
        setEmail(e.target.value);
    };
    const mobileNoHandler = (e) => {
        setMobileNo(e.target.value)
    };

    


    const submitHandler = (e) => {
        e.preventDefault();

        const dataItems = { userName, email, mobileNo }

        fetch('http://localhost:3333/students', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(dataItems)
        }).then((resp) => {
            resp.json().then((getData) => {
                console.log('resp', getData)
                const data = props.fun3();

            })
        })
    }



    return (
        
        <div className='container'>
            <form action="" onSubmit={submitHandler}>
                <input type="text" placeholder='USERNAME' value={userName} onChange={userNameHandle} required/>
                <input type="email" placeholder='EMAIL' value={email} onChange={emailHandle} required/>
                <input type="number" placeholder='MOBILE NO' value={mobileNo} onChange={mobileNoHandler} required/>
                <button type='submit'>Update User</button>        
            </form>
        </div>
    )


}

export default PostMethod
