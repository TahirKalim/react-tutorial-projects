// import React, { useState, useEffect } from 'react'
// import List from './List'
// import Alert from './Alert'

// function App() {
//   return <h2>grocery bud setup</h2>

// }

// export default App

// Structure
//set the state values. useState 'name' for the form with empty value. 'list' for localStorage with empty array'. isEditing for flag for whether we are editing or not. By default it is set false. editID for editing element with null value. alert for different flags and colors with an object {show:false,msg:'',type:''}.
// In return write a tag 'section' with class 'section-center' inside 'section' write another div with class 'grocery-container'
// write  <List/> component and below list write button with class 'clear-btn'
//right below the section write form tag with class 'grocery-form' and onSubmit={handleSubmit}

//In the form write this {alert.show && <Alert/>}
// then h3 tag with value  grocery bud. Below h3 tag  write div with class 'form-control' and within that write 'input' tag with type='text' below input write button with type submit and class 'submit-btn' within button write {isEditing ? 'edit':'submit'} now complete input section and test the value

// import React, { useState, useEffect } from 'react'
// import List from './List'
// import Alert from './Alert'

// function App() {
//   const [name, setName] = useState('')
//   const [list, setList] = useState([])
//   const [isEditing, setIsEditing] = useState(false)
//   const [editID, setEditID] = useState(null)
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }
//   return (
//     <section className='section-center'>
//       <form className='grocery-form' onSubmit={handleSubmit}>
//         {alert.show && <Alert />}
//         <h3>grocery bud</h3>
//         <div className='form-control'>
//           <input
//             type='text'
//             className='grocery'
//             placeholder='e.g eggs'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type='submit' className='submit-btn'>
//             {isEditing ? 'edit' : 'submit'}
//           </button>
//         </div>
//       </form>
//       <div className='grocery-container'>
//         <List />
//         <button className='clear-btn'>clear items</button>
//       </div>
//     </section>
//   )
// }
// export default App

// ADD ITEMS
// 1. First we deal with 'name' if its empty display alert else if its not empty and isEditing then deal with edit. otherwise show names. and iterate over the list using map in the list component and pass the list prop.see the instructions in list component
// import React, { useState, useEffect } from 'react'
// import List from './List'
// import Alert from './Alert'

// function App() {
//   const [name, setName] = useState('')
//   const [list, setList] = useState([])
//   const [isEditing, setIsEditing] = useState(false)
//   const [editID, setEditID] = useState(null)
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!name) {
//       // display alert
//     } else if (name && isEditing) {
//       // deal with edit
//     } else {
//       //show alert
//       const newItem = { id: new Date().getTime().toString(), title: name }
//       setList([...list, newItem])
//       setName('')
//     }
//   }
//   return (
//     <section className='section-center'>
//       <form className='grocery-form' onSubmit={handleSubmit}>
//         {alert.show && <Alert />}
//         <h3>grocery bud</h3>
//         <div className='form-control'>
//           <input
//             type='text'
//             className='grocery'
//             placeholder='e.g eggs'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type='submit' className='submit-btn'>
//             {isEditing ? 'edit' : 'submit'}
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className='grocery-container'>
//           <List items={list} />
//           <button className='clear-btn'>clear items</button>
//         </div>
//       )}
//     </section>
//   )
// }
// export default App

// ALERT VIDEO
//lets set in alert the value of show to true and msg: hello world, type: 'success'
// since we will call setAlert many times we will thing of better approach. We will also setup timer in Alert component for 3sec
import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  // const [alert, setAlert] = useState({
  //   show: true,
  //   msg: 'hello',
  //   type: 'success',
  // })
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      showAlert(true,'danger','Please enter value')
    } else if (name && isEditing) {
      // deal with edit
    } else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false,type='',msg='')=>{
    setAlert({show,type,msg})
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} />
          <button className='clear-btn'>clear items</button>
        </div>
      )}
    </section>
  )
}
export default App
