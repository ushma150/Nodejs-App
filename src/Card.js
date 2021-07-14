import React from 'react';


const Card=({id, username, email}) => {
    return (
        <div className="bg-light-pink pa4 h15 w5 ma2 dib grow shadow" >
            <img alt='robo' src={`https://robohash.org/ ${id}?set=set4 `}/>
            <div>
                <h2 className="tc">{username}</h2>
                <p className="tc">{email}</p>
            </div> 

        </div>
    );
}
export default Card;

