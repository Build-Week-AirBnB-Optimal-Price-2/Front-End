import React, {useState} from 'react';
import NoteForm from './login';
import styled from "styled-components";

const TopCard = styled.div`
  background-color: lightgray;
  padding: 3%;
`;

const LoginCard = styled.div`
  background-color: darkgray;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;



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
        <TopCard>
          <h1>AirBnB Optimal Price</h1>
          <h3>Login In</h3>

          <LoginCard>
            <NoteForm login={login}/>
          </LoginCard>
          
        </TopCard>
        
      </header>
    </div>
  );
}


export default LoginForm;
