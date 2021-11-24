// import React, { useEffect } from 'react'


// const Alert = () => {
//   return (
//     <div>
//       alert
//     </div>
//   )
// }

// export default Alert

//Structure
import React, { useEffect } from 'react'


const Alert = ({type,msg}) => {
  return (
    <div>
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  )
}

export default Alert

