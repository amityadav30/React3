import {useState} from 'react';


function App() {
  const[username, setUsername]=useState('');
  const[age, setAge]=useState('');

  const usernameHandler=(e)=>{
    setUsername(e.target.value);
  }

  const ageHandler=(e)=>{
    setAge(e.target.value)
  }

  return (
    <div style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
      <label>Username</label>
      <input onChange={usernameHandler} style={{width:"20%"}}/>
    
      <label>Age</label>
      <input onChange={ageHandler} style={{width:"20%"}}/>

      
      
    </div>
  );
}

export default App;
