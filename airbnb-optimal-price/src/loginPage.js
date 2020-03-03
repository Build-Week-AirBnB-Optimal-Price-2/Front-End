import React, {useState} from 'react';
import NoteForm from './login';
import styled from "styled-components";
import { Tween, Timeline } from 'react-gsap';

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



  const TimelineComponent = () => (
    <Timeline
      target={
        <div>
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
        </div>
      }
    >

      <Tween from={{ x: '-20px', opacity: .5 }} to={{ x: '0px' }} />
      <Tween from={{ opacity: .5 }} to={{ opacity: 1 }} />
    </Timeline>
  );
  

  return ( 
    <div>
      <TimelineComponent></TimelineComponent>   
    </div>   

  );
}


export default LoginForm;

