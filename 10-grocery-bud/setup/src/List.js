//start
// import React from 'react'
// import { FaEdit, FaTrash } from 'react-icons/fa'

// const List = () => {
//   return <h2>list component</h2>
// }
// export default List

//pass list prop
// iterate using map destructure item.
// 1. div with class 'grocery-list' inside now iterate destructure. 2 after destructure another return and in the return write article tag with key=id and class 'grocery-list' 3. p tag with class 'title' 4. outside 'p' tag another div 'btn-container' inside the div container create a button with type button and class 'edit-btn' . 5. copy again with  'delete-btn'

// import React from 'react'
// import { FaArrowAltCircleLeft, FaEdit, FaTrash } from 'react-icons/fa'

// const List = ({ items }) => {
//   return (
//     <div className='grocery-list'>
//       {items.map((item) => {
//         const { id, title } = item
//         return (
//           <article key={id} className='grocery-item'>
//             <p className='title'>{title}</p>
//             <div className='btn-container'>
//               <button type='button' className='edit-btn'>
//                 <FaEdit />
//               </button>
//               <button type='button' className='delete-btn'>
//                 <FaTrash />
//               </button>
//             </div>
//           </article>
//         )
//       })}
//     </div>
//   )
// }
// export default List


import React from 'react'
import { FaArrowAltCircleLeft, FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item
        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn'>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default List
