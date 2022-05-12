import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Information({info}) {
   const params = useParams();
   const filter = info.filter(item => item.author === params.formId);
  
  return <div className="detail">
      {
          filter.map(dt =>{
              return <div key={dt.points}>
                  <h1>{dt.author}</h1>
                  <p>{dt.title}</p>
                  <Link to='/form'>back</Link>
              </div>
          })
      }
  </div>;
}

export default Information;
