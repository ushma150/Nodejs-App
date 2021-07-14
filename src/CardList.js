import React from 'react';
import Card from './Card';

const CardList =({robots} )=>{
    return (
        <div>
            {
				<h1>Hello this is for test. </h1>// continuous push change test on github
                robots.map((user,i)=>{
                    return <Card 
                            key={i} 
                            id={robots[i].id} 
                            username={robots[i].username} 
                             email={robots[i].email} 
                            />
                        }
                    )
            }
          
        </div>
    );
}
export default CardList;