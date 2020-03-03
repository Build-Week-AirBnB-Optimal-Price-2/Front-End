import React, { useState } from "react";
import RegistrationForm from './RegistrationForm';
import LoginRegisterToggle from './LoginRegisterToggle';
import LoginForm from './LoginForm'
import styled from 'styled-components'
import './LoginPage.css'



const Tab = styled.div `
overflow: hidden;
border-bottom: 1px #470B97 solid;
background-color: #f1f1f1;
`





const LoginPage = props => {

    const [active, setActive] = useState(true)

    

return(
    <div>
        
        <Tab className="tab" >
            <button className={`Button ${ active ? 'active' : ''}`} onClick={() => setActive(true)} >Login</button>
            <button className={`Button ${active ? '' : 'active'}`} onClick={() => setActive(false)}>Register</button>
        </Tab>
        <div className={active ?'activeTab':'tabContent'} >
        <LoginForm   />
        </div> 
        <div className={active ? 'tabContent' : 'activeTab'}>
        <RegistrationForm />
        </div>


    </div>
)


}

export default LoginPage;