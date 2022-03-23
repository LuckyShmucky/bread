const { links } = require('express/lib/response')
const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    
    // console.log(breads)
    return ( 
          
      <Default title={title}>
       {/* <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p> */}

        <ul>
        {breads.map((bread) =>{
            return (
            <li key={bread.id}>
            <a href={`/breads/${bread.id}`}> {bread.name}</a>
            {/* <li className='sub-li'>{bread.getBakedBy()}</li> */}
            </li>
            )
        })}
        </ul>

        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>
      </Default>
    )
}

module.exports = Index

//<li key='index'>