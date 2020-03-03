//This is the first page the user sees after leaving the marketing page
//User can either login or register from here (but only one is displayed at a time)

//components contained in LoginPage:
//LoginForm
//RegistrationForm
//LoginRegisterToggle

import React, {useState} from 'react';
import NoteForm from './LoginForm';
import styled from "styled-components";
import RegistrationForm from './RegistrationForm';
import { Tween, Timeline } from 'react-gsap';

const TopCard = styled.div`
  background-color: #C0C0C0;
  padding: 3%;
  color: #470B97;
  border-radius: 10px;
`;

// const LoginCard = styled.div`
//   background-color: #C0C0C0;
//   border-top: 1px #470B97 solid;
//   border-bottom: 1px #470B97 solid;
//   padding: 2% 0;
// `;


const Tab = styled.div `
overflow: hidden;
border-bottom: 1px #470B97 solid;
background-color: #f1f1f1;
`

function LoginForm() {
  const [memberValues, setMemberValues] = useState([]);

  const [active, setActive] = useState(true)

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

            <Tab className="tab" >
                <button className={`Button ${ active ? 'active' : ''}`} onClick={() => setActive(true)} >Login</button>
                <button className={`Button ${active ? '' : 'active'}`} onClick={() => setActive(false)}>Register</button>
            </Tab>


              <TopCard>
                <h1>AirBnB Optimal Price</h1>
                <h3>Login Here</h3>
  

                <div className={`loginCard ${active ?'activeTab':'tabContent'}`}>
                     <NoteForm login={login} /> 
                </div>
                <div className={`loginCard ${active ?'tabContent':'activeTab'}`}>
                <RegistrationForm />
                </div>
                
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
