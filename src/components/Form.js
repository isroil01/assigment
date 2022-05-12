import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




function Form(props) {
  const [input,setInput] = useState('');
  const [apiDt,setApiDt] = useState([]);
  const [post,setPost] = useState([]);
 
  

  useEffect(() =>{
  
   fetch(`https://hn.algolia.com/api/v1/search?query=`)
   .then(res =>{
     if(!res.ok){
       throw new Error('faild');
      
     }
     return res.json()
   }).then(data =>{

    setApiDt(data.hits)

 
  }).catch(err =>{
     console.log(err.message);
   })
       

  },[post]) 
   


  const onChangeHandeler = (e) =>{
    setInput(e.target.value);
  
  }

  const onSubmitHandeler = (e) =>{
    e.preventDefault();
     
    setPost(input)
    
    
  }
  props.onGetData(apiDt);
 
 
  
  return (
    <div className='App'>
       <form onSubmit={onSubmitHandeler}>
         <h1>Search</h1>
         <input type='search' name='search' value={input} onChange={onChangeHandeler} id='search' />
       </form>
       {
            apiDt.filter(it =>it.author.toLowerCase() === input.toLowerCase()).map(item =>{
             return <div className='card' key={item.points}>
               <Link to={`/form/${item.author}`} className='map'>{item.author}</Link>
             </div>
            })
         }
    </div>
  );
}

export default Form;
