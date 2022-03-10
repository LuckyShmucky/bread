const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
 
    console.log(bread)
    return (
        <Default>
        <h3>{bread.name}</h3>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go home</a></li>
      </Default>
    )
}
//the child of referring to the html.children would be everything in defualt here
module.exports = Show