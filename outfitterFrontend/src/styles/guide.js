import styled from "styled-components";
import { X, MenuIcon } from "lucide-react";
import evbc from "C:/Users/Asus/Desktop/outfitter/outfitterFrontend/src/assets/evbc.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background-color:rgb(165, 219, 247);
  
`;

// Navigation Bar
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 11vh;
  background-color: rgb(74, 176, 217);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  align-items: center; /* Align items vertically */
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  color: black;
`;

export const NavItem = styled.li`
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  margin: 0 50px; 
  color: white;
  position: relative;
  
  &:nth-child(1) {
    margin-right: 100px;
  }

  &:nth-child(2) {
    margin-right: 50px;
  }

  &:nth-child(3) {
    margin-left: 450px;
  }

  &:nth-child(4) {
    margin-left: 100px;
  }

  &:nth-child(5) {
    margin-left: 50px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color:rgb(131, 232, 255);
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 200px;
  top: 100%; // Position it below the nav item
  left: 0;
  padding: 10px 0;
  z-index: 1; // Ensure it's above other elements
  display: ${(props) => (props.$dropdown ? "block" : "none")};
  flex-direction: column;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledXIcon = styled(X)`
  cursor: pointer;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const MenuIconDropdown = styled.div`
  position: absolute;
  background-color: rgb(131, 232, 255);
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 15vh; /* Or any width that suits your design */
  top: 100%;
  right: 0;  /* This ensures it doesn't stretch to the right side */
  left: 0; /* Align it to the left of the parent container */
  padding: 10px 0;
  z-index: 1;
  display: ${(props) => (props.$dropdown ? "block" : "none")};
  flex-direction: column;
`;

export const DropdownItem = styled.div`
  padding: 12px 20px;
  text-align: left;
  
  a {
    text-decoration: none;
    color: inherit;
    font-weight: normal;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &:hover {
    color: white;
  }
`;

// Content Space
export const Content = styled.div`
  width: 100vw;
  height: 85vh; 
  overflow-y: auto; // scroll
`;

// About Space
export const AboutContainer = styled.div`
  background image: url(${evbc}), linear-gradient(to bottom, rgba(0, 0, 0,0.7), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-position: cover;
  text-align: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  color: white;

  h1 {
    font-size: 60px;
    font-family: "Times New Roman", Times, serif;
    color: black;
    margin-bottom: 0vh;
  }

  h1:nth-of-type(2) {
    color: black; 
    margin-top: 0;
    margin-bottom: 5vh;
  }

  p {
    margin-top: 8px;
    font-size: 1rem;
    color: #B77729;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
  }
`;

// Room Display
export const TourGuideContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 10vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgb(165, 219, 247); // Background Color
`;

export const GuideText = styled.div`
  text-align: center;
  margin-top: 14vh;
  margin-bottom: 13vh;

  h1 {
    font-family: "Times New Roman", Times, serif; 
    font-size: 3rem;
    color: #000000;
  }

  p{
    text-align: center;
    margin-left: 25vh;
    margin-right: 25vh;
    font-family: "Times New Roman", Times, serif; 
    font-size: 1rem;
    color: black;
  }
`;

export const Guides = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5vh;
  justify-content: center;
  width: 100%;
`;

export const GuideCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(202, 235, 251);
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 120vh;
  padding: 2vh;
  height: auto;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const GuideImage = styled.img`
  width: 30vh;
  height: 30vh;
  object-fit: cover;
`;

export const GuideInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80vh;
  height: 30vh;
  margin-left: 2vh;

  h2 {
    font-family: "Times New Roman", Times, serif; 
    font-size: 2rem;
    color: black;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  p {
    font-family: "Times New Roman", Times, serif; 
    font-size: 16px;
    color: black;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const GuideInfoText = styled.div`
  width: 100%;
  height: 11vh;
`;

export const ViewAllBtn = styled.button`
  padding: 2vh;
  height: 7vh;
  width: 20vh;
  margin-top: 15vh;
  margin-bottom: 15vh;
  background-color: #F4E8D7;
  color: #B77729;
  border: 1px solid: #000000;
  padding: 10px 20px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #000000;
    border: 1px solid #B77729;
  }

  &:focus {
    outline: none;
  }
`;

export const BookNowBtn2 = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  padding: 2vh;
  height: 7vh;
  width: 20vh;
  background-color: rgba(0, 124, 145, 0.98);
  color: white;
  border: 2px solid #000000;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0px;
  transition: all 0.3s ease;
  z-index: 1000; /* Ensures it stays above other content */

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }

  &:focus {
    outline: none;
  }
`;