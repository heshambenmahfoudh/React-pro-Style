// import React, { useState, useEffect } from 'react'
// import './Smd.css'
// import { people } from '../Data/dunmmy'
// import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
// const Smd = () => {
//   const [data] = useState(people)
//   const [index, setIndex] = useState(0)
//   const lastIndex = data.length

//   useEffect(() => {
//     if (index < 0) {
//       setIndex(lastIndex)
//     } else if (index >= lastIndex) {
//       setIndex(0)
//     }
//     const slider = setInterval(() => {
//       setIndex(index + 1)
//     }, 5000)
//     return () => {
//       clearInterval(slider)
//     }
//   }, [index, lastIndex])

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setIndex(index + 1)
//     }, 5000)
//     return () => {
//       clearInterval(slider)
//     }
//   }, [index])

//   return (
//     <div className="container">
//       <section className="section">
//         <div className="title">
//           <h2>in sha allah</h2>
//         </div>
//         <div className="section-center">
//           {people.map((item, i) => {
//             // let position = 'nextSlide'
//             // if (i === index) {
//             //   position = 'activeSlide'
//             // }
//             // if (i === index - 1 || (index === 0 && i === people.length - 1)) {
//             //   position = 'lastSlide'
//             // }
//             return (
//               <article className={position} key={i}>
//                 <img src={item.image} alt="" className="person-img" />
//                 <h4>{item.name}</h4>
//                 {/* <p className="title">{item.title}</p>
//                 <p className="text">{item.quto}</p> */}
//               </article>
//             )
//           })}
//           <button className="prev" onClick={() => setIndex(index - 1)}>
//             {' '}
//             <BsArrowBarLeft />
//           </button>
//           <button className="next" onClick={() => setIndex(index + 1)}>
//             <BsArrowBarRight />
//           </button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Smd
