import React from 'react';

const SearchBox=({onsearchchange})=>{
    return(
        <div>
            <input 
                className="pa2 ba bw2 tc di bg-lightest-blue" 
                text="search" 
                placeholder="Search your fav Kitty"
                onChange={onsearchchange} />
        </div>
    )
}
export default SearchBox;