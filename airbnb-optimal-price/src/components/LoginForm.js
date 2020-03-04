//This component is a form to be used for logging in a user that already has an account
//form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

import React, {useState} from 'react';



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
            <label htmlFor="email">Email </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChanges}
              value={note.email}
            />
          </div>
          
          <div className="namestuff">
            <label htmlFor="password">Password </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChanges}
              value={note.password}
            />
          </div>

          <button type="submit">Login</button>
        </div>
      </form>
    );
};
  
export default LoginForm;
  