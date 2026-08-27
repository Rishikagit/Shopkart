import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorFallBack = ({resetErrorBoundary}) => {
  const navigate=useNavigate();

  const handleHome=()=>
  {
    resetErrorBoundary();
    navigate("/");
  }
  return (
    <div>ErrorFallBack


      <h2>Something went wrong!!</h2>
      <button onClick={handleHome}>Go to home</button>
    </div>
  )
}

export default ErrorFallBack