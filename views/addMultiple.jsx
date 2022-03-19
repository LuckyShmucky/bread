const React = require('react')
const Default = require('./layouts/Default')

function addMultiple({ bread }){
   let createFormBttn = () =>{
       return(

        <form action='/breads' method='POST'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>

       )
   }
    return(
        <Default>
            <h2>Post Multiple Breads At Once</h2>
        <form action="/breads" method='POST'>
        <button onClick={createFormBttn()}>Make new Posting</button>

        </form>

        </Default>
    )
}

module.exports = addMultiple