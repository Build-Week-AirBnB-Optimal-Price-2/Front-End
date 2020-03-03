import React, { useState } from "react";
import RegistrationForm from './RegistrationForm';
import LoginRegisterToggle from './LoginRegisterToggle';
import LoginForm from './LoginForm'
import styled from 'styled-components'
import './LoginPage.css'



const LoginPage = props => {

    const Tab = styled.div `
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    `
    const Button = styled.button`
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;

        &:hover{
            background-color: #ddd;
        }
        &.active{
            background-color: #ccc;
        }
    `

// const openCity = (evt, name) => {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(name).style.display = "block";
//     evt.currentTarget.className += "active";
// }

return(
    <div>
        
        <Tab class="tab">
            <Button className="tablinks" onclick={openCity(event, 'login')}>Login</Button>
            <Button className="tablinks" onclick={openCity(event, 'register')}>Register</Button>
        </Tab>

        <LoginForm id='login' className='tabContent' />
        <RegistrationForm id='register' className='tabContent' />



    </div>
)


}

export default LoginPage;