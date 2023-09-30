import React from 'react'

let errorBox = {
    padding: '10px',
    margin: '20px',
    textAlign: 'center',
    fontSize: '50px'
  }
function Error() {
  return (
    <div style={errorBox}>
      <h2>Sorry :(404 Page Not Found.</h2>
    </div>
  )
}

export default Error
