const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
 
    
    
    return (
        <Default>
        <h3>{bread.name}</h3>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
        </form>
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
       {/* <p>Baked by {bread.baker}</p>  */}
       {/* The second way of displaying this message is much better because 
       it follows DRY (do not repeat yourself) and is extremely automated */}
       <p>{bread.getBakedBy()}</p>

        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go home</a></li>
      </Default>
    )
}
//the child of referring to the html.children would be everything in defualt here
module.exports = Show

