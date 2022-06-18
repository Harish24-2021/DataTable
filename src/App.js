
import { useState } from 'react';
import './App.css';
import DataTable from './DataTable';
import Form from './Form';

function App() {

let [newForm,setNewForm]=useState(false)
  return (
    <div className="App">
      {newForm ? <Form/>: <DataTable setNewForm={setNewForm}/>}
      
      
    </div>
  );
}

export default App;
