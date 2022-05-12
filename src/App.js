import { useState } from 'react';
import { Switch,Redirect, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Information from './components/Information';


function App() {
 const [need,setNeed] = useState([]);
  
  const getData = (data) =>{
      setNeed(data)
     
  }
  console.log(need,'app');
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/form' />
        </Route>
        <Route path='/form' exact>
          <Form onGetData={getData} />
        </Route>      
         <Route path='/form/:formId'>
           <Information info={need} />
         </Route>
      </Switch>
    </div>
  );
}

export default App;
