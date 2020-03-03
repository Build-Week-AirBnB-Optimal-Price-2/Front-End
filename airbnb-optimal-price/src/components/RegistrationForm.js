import React, { useState } from "react";




const RegistrationForm = props => {


    const [user, setUser] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        passError: ''
    });

    const handleChanges = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user)
    };
    
    const validate = () => {
        let passError = "";
        const specialCharRegex = /[\W\s]/g;
        const specialCharTest = user.password.match(specialCharRegex)
        console.log(specialCharTest)
        if (user.password !== user.passwordConfirm) {
          passError = "passwords must match";
        } else if ( user.password.length < 6) {
            passError = "password must be 6 characters"
        } else if (user.password.includes(specialCharTest) === true) {
            passError = "passwords cannot contain spaces or special characters"
        }
    
        if (passError) {
          setUser({...user, passError});
          return false;
        }
    
        return true;
      };

    const submitForm = e => {
        e.preventDefault();
        const isValid = validate();
        if(isValid) {
            console.log(user)
            setUser({email: '', password: '', passwordConfirm: '', passError: ''})
        }
        
    }


    

    return (
        <div>

        <h2>Register New User</h2>
        <form onSubmit={submitForm}>
            <div>
            <label htmlFor="email"> E-Mail: </label>
            <input id='email' type='email' name='email' onChange={handleChanges} placeholder='E-Mail' value={user.email} required />
            </div>
            <div>
            <label htmlFor="Password"> Password: </label>
            <input id='Password' name='password' type='password' onChange={handleChanges} placeholder='Password' value={user.password} required />
            </div>
            <div>
            <label htmlFor="passwordConfirm"> Confirm  Password: </label>
            <input id='passwordConfirm' name='passwordConfirm' type='password' onChange={handleChanges} placeholder='Confirm Password' value={user.passwordConfirm} required />
            </div>
            <div>
                {user.passError}
            </div>
            <button type="submit"> Sign-up </button>
        </form>

        </div>
    )
};

export default RegistrationForm;
