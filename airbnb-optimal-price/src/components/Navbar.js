//This is the element on the DashboardPage that holds buttons for user actions
//User should be able to logout and create a new property from here
//create buttons for each of those actions
import styled from "styled-components";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

`;

const CompanyName = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 2%;
  width: 100%;
  color: #c0c0c0;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  text-decoration: none;
`;


const Navbar = () => {
  const history = useHistory();
  const logout = e => {
    e.preventDefault();
    window.localStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <div>
      <div className="NavBar">
        <TopNav>
          <CompanyName>
            <h1>AirBnB Optimal Price</h1>   
          </CompanyName>
     
          <NavList>
            <div className='linky'>
              <Link to={`/new-property`}>New Property</Link>
            </div>

            <div className='linky'>
              <a onClick={logout}>Logout</a>
            </div>

          </NavList>
        </TopNav>
      </div>
    </div>
  );
};

export default Navbar;
