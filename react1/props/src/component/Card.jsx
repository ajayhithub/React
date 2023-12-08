

// function Card(props) {
//       console.log(props.objdata.name)

//   return (
//     <div>
//       <h1>{props.objdata.name}</h1>
//       <h3>{props.objdata.email}</h3>
//     </div>
//   )
// }

function Card({objdata,arrdata}) {
    console.log(objdata.name)

return (
  <div>
    <h1>{objdata.name}</h1>
    <h3>{objdata.email}</h3>
    
  </div>
)
}
export default Card
