import React from 'react'

export function Search(props) {
  function handleClick(e) {
      
    //e.preventDefault(); 
    //console.log(e.target.value);
    props.handleSearch(e);
  }    
  return <form className="uk-width-small uk-margin-right" >
            <input defaultValue={props.search} onKeyPress={(e) => handleClick(e)} className="uk-input" type="text" placeholder="Search"/>
         </form>
}


