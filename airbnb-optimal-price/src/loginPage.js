import React, {useState} from 'react';
import './App.css';
import NoteForm from './login';


function LoginForm() {
  const [memberValues, setMemberValues] = useState([]);

  const login = member => {
      const newMember = {
          email: member.email,
          password: member.password

      };

      setMemberValues([...memberValues, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login In</h1>

        <NoteForm login={login}/>
      </header>
    </div>
  );
}


export default LoginForm;
