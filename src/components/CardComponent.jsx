import React from 'react';
import {useSelector} from 'react-redux';


function CardComponent() {
 const universities = useSelector((state) => state.allUniversities.universites);
 const {name,occupation,sex} = universities[0];
  console.log(universities);
  return (
    <div>
        <div className="card">
            <div className="card-body">
                <div className='card-img'>
                    <img src="./rexume.jpg" alt=""/>
                </div>
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{occupation}</h5>
                <h5 className="card-title">{sex}</h5>
                </div>
                </div>
          

    </div>
  )
}

export default CardComponent