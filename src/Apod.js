import React from "react";



function Apod({dopa}){
    
const{url,date,title,explanation}=dopa



    return(
        <div className="photo">
        <div className="photo-img">
          <img src={dopa.url} alt={`APOD of the day=${dopa.date}`} />
        </div>
        <div className="photo-info">
          <h2>{dopa.title}</h2>
          <div>{dopa.date}</div>
          <p>{dopa.explanation}</p>
        </div>
        </div>  
        )
}

export default Apod;