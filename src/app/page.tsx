"use client"
import React, { useEffect, useState } from 'react'

export default function page() {

  const [userCount, setUserCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/user").then(
      response => response.json()
    ).then(
      data => {
        setStatus("Data is successfully loaded.")
        console.log(data)
        setUserCount(data.users.count)
        setUsers(data.users.rows)
      }
    )
  }, [])

  return (
    <>
      <h2>{status}</h2>
      <h1>There are {userCount} users.</h1>
      <ul>
        {
          users.map(
            (user, index) => {
              return <li key={index}>{user.username}</li>
            }
          )
        }
      </ul>
      
    </>
    
  )
}

