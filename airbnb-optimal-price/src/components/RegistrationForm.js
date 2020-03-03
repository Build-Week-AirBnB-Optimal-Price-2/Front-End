import React, { useState } from "react";



const RegistrationForm = props => {


    const [user, setUser] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const handleChanges = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user)
    };
  

    const submitForm = e => {
        e.preventDefault();
        console.log(user)
        setUser({email: '', password: '', passwordConfirm: ''})
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
            <input id='passwordConfirm' name='passwordConfirm' type='password' onChange={handleChanges} placeholder='Confirm Password' value={user.password} required />
            </div>
            <button type="submit"> Sign-up </button>
        </form>

        </div>
    )
};

export default RegistrationForm;
