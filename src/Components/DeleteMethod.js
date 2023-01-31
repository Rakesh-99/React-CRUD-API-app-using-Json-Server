import React from 'react'

const DeleteMethod = (props) => {


    const deleteUser = () => {

        fetch(`http://localhost:3333/students/${props.fun}`, {
            method: "DELETE"
        }).then((rawInfo) => {
            rawInfo.json().then((getData) => {
                console.log(getData);
                 props.fun2();
            });
        })
    }

    return (
        <div>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default DeleteMethod;
