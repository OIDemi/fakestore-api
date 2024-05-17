import React, { useEffect, useState } from 'react'

const App = () => {
 const [apiResponse, setApiResponse] = useState([]);

const fetchUsers = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json()
  console.log(data);
  setApiResponse(data);
}

useEffect(() => {
  fetchUsers()
}, [])

console.log(apiResponse);

  return (
    <div className='wrapper'>
      {
        apiResponse.map(user => (
          <div>
          <div className='card'>
            <div className='card-container'>
          <img className='image' src={user.image} alt="" />
          <h4>{user.title}</h4>
          </div>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default App