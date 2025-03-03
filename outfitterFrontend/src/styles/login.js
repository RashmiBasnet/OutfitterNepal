import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray */
`;


// Navigation Bar
export const NavContainer = styled.div`
  display: flex;
  align-items: left;
  width: 100vw;
  height: 13vh;
  background-color:rgb(74, 176, 217); /* Dark blue-gray */
`;


export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #000000; /* Black text */
`;

export const NavItem = styled.li`
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  margin: 0 50px;
  color: #ffffff; /* White */
  position: relative;
  
  &:nth-child(1) {
    margin-right: 100px;
  }
`;


export const Icons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5vh;
  gap: 20px;
  flex-wrap: wrap;
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: #000000; /* Black text */
`;

// Content Space
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 85vh;
  overflow-y: auto;
`;

// Form
export const FormContainer = styled.div`
  background: #ffffff; /* White */
  padding: 5vh;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
  height: 65vh;
`;


export const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 3rem;
  color: #343a40; /* Dark blue-gray */
  margin-top: 0vh;
  margin-bottom: 5px;
`;


export const Subtitle = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: #666666; /* Dark gray text */
  margin-top: 2px;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1.5rem;

  label {
    font-family: "Times New Roman", Times, serif;
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 0.3rem;
    color: #666666; /* Dark gray text */
  }
`;

export const Input = styled.input`
  background-color: #f5f5f5; /* Light gray background */
  color: #000000; /* Black text */
  padding: 10px;
  border: 1px solid rgba(0, 124, 145, 0.98); /* Gold border */
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s ease, background 0.3s ease;

  &:focus {
    background-color: #ffffff; /* White background on focus */
    border-color: rgb(238, 142, 8); /* Gold border on focus */
  }

  /* Fix autofill styles */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: #f5f5f5;
    color: #000000;
    -webkit-text-fill-color: #000000;
    -webkit-box-shadow: 0 0 0px 1000px #f5f5f5 inset;
  }
`;

export const Button = styled.button`
  background-color:rgb(114, 178, 247); /* Blue */
  color: #ffffff; /* White */
  padding: 13px;
  margin-top: 2vh;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    color: #FEDD00;
    background-color: #0056b3; /* Darker blue */
  }
`;


export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #666666; /* Dark gray text */
  margin-top: 3rem;
`;

export const LinkText = styled(Link)`
  color: #d4af37; /* Gold text */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #b8860b; /* Darker gold on hover */
  }
`;
