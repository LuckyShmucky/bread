const { links } = require('express/lib/response')
const React = require('react')
const baker = require('../controllers/bakers_controller')
const Default = require('./layouts/Default')

function Index ({breads, bakers, title}) {
    
    // console.log(breads)
    return ( 
          
      <Default title={title}>
       {/* <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p> */}

        <ul>
        {breads.map((bread) =>{
            return (
            <li key={bread._id}>
            <a href={`/breads/${bread._id}`}>{bread.name}</a>
            {/* <li className='sub-li'>{bread.getBakedBy()}</li> */}
            </li>
            )
        })}
        </ul>

        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>
        <h3>Bakers</h3>
        <ul>
         {
           bakers.map(baker =>{
             return(
             <li key={baker._id}>
               <a href={`/bakers/${baker._id}`}>{baker.name}</a>
             </li>
             ) 
          })
         }
        </ul>

      </Default>
    )
}

module.exports = Index

//<li key='index'>