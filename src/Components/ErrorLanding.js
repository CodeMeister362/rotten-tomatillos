// file imports
import './ErrorLanding.css'

//component imports
import React from 'react'

// functional component
const ErrorLanding = ({ status })  =>  {
  return (
    <div className ='error-container'>
      <h2 className="status-code">{status} Error</h2>
      <p className="error-message"> Something's gone wrong. Try again? </p>
    </div>
  )
}

export default ErrorLanding