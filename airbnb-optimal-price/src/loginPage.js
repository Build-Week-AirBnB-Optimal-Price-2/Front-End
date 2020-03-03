import React, {useState} from 'react';
import NoteForm from './login';
import styled from "styled-components";

const TopCard = styled.div`
  background-color: #C0C0C0;
  padding: 3%;
  color: #470B97;
  border-radius: 10px;
`;

const LoginCard = styled.div`
  background-color: #C0C0C0;
  border-top: 1px #470B97 solid;
  border-bottom: 1px #470B97 solid;
  padding: 2% 0;
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
          <h3>Login Here</h3>

          <LoginCard>
            <NoteForm login={login}/>
          </LoginCard>
          
        </TopCard>
        
      </header>
    </div>
  );
}


export default LoginForm;
