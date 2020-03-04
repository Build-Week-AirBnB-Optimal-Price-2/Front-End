//This component is a form to be used for logging in a user that already has an account
//form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

import React, {useState} from 'react';
import styled from "styled-components";

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoginForm = props => {
  // console.log("props", props);
  const [note, setNote] = useState({
    email: "",
    password: "",
  });

  const handleChanges = e => {
  //   console.log(note);
  
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.login(note);
    setNote({ email: "", password: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formdiv">
        <div className="namestuff">
          <FormInput>
            <label htmlFor="email">Email </label>
  
            <div className="inputForm">
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChanges}
                placeholder=' E-mail'
                value={note.email}
              />
            </div>
          </FormInput>
        </div>
        
        <div className="namestuff">
        <FormInput>
            <label htmlFor="password">Password </label>

            <div className="inputForm">
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChanges}
                placeholder=' Password'
                value={note.password}
              />
            </div>

          </FormInput>
        </div>

        <div className="buttonL">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};
  
export default LoginForm;
  