import React, { useEffect, useState } from 'react'
import axios from 'axios'


const FetchData = () => {

    // creating state to store the resources collected
   const [users, setUsers] =  useState([]);

   //storng API URL in a variable
//    const api = 'https://jsonplaceholder.typicode.com/photos'

   // useEffect is used to fetch data
   useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(res => console.log(res)) // after fetching, then we change format using .json()
        .then(res => setUsers(res.data.content)) // then we update the state of users
        .catch(err => console.log(err)) // catch err and log to the console.
   }, []);

   console.log(users)




  return (
    <div>
        <ul>
            {users.map((u, index)=> (
                <li key={index}>{u.name}</li>
            ))}
        </ul>
        

    </div>
  )
}

export default FetchData