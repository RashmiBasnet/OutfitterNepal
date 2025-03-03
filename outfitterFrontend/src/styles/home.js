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


export const AboutBtn = styled.button`
  padding: 2vh;
  height: 7vh;
  width: 20vh;
  margin-top: 10vh;
  background-color: #ffffff;
  color: #B77729;
  border: 1px solid #B77729;
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


// Images Space
export const ImageContainer = styled.div`
  width: 100vw;
  height: auto; 
  padding: 0px;
  background-color: #DFD7C8;
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal-width columns */
  gap: 5px; 
  width: 100%; 
  height: auto; 
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0px;
  background-color: #DFD7C8; // Background Color

  &:nth-child(1) {
    grid-column: span 1;
    grid-row: span 2; 
  }

  &:nth-child(2) {
    grid-column: span 2;
    grid-row: span 1; 
  }

  &:nth-child(3) {
    grid-column: span 1;
    grid-row: span 2;
  }

  &:nth-child(4) {
    grid-column: span 2;
    grid-row: span 1; 
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 0px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

// Room Display
export const PackageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:rgb(165, 219, 247); // Background Color
`;

export const PackageText = styled.div`
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

export const Packages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5vh;
  justify-content: center;
  width: 100%;
`;

export const PackageCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 58vh;
  height: 80vh;
  margin-bottom: 3vh;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PackageImage = styled.img`
  width: 100%;
  height: 31vh;
  object-fit: cover;
`;

export const PackageInfo = styled.div`
  padding: 2vh;
  height: 30vh;

  h2 {
    font-family: "Times New Roman", Times, serif; 
    font-size: 1.5rem;
    color: rgba(0, 124, 145, 0.98);
    margin-top: 0px;
    margin-bottom: 0px;
  }

  p {
    font-family: "Times New Roman", Times, serif; 
    font-size: 15px;
    color: #444;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  hr {
    border: none;
    height: 1px;
    background-color: rgba(0, 124, 145, 0.98);
    margin: 10px 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PackageInfoText = styled.div`
  width: 100%;
  height: 11vh;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: left;
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
  color: rgba(0, 124, 145, 0.98);
`;

export const LearnMoreBtn = styled.button`
  padding: 2vh;
  width: 90%;
  margin-bottom: 10px;
  background-color: white;
  color: rgba(0, 124, 145, 0.98);
  border: 2px solid #000000;
  padding: 10px 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  border-radius: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #B77729;
    color: white;
    border-color: #B77729;
  }

  &:focus {
    outline: none;
    border-color: #B77729;
  }
`;

export const BookNowBtn = styled.button`
  padding: 2vh;
  width: 90%;
  margin-bottom: 4vh;
  background-color: rgba(0, 124, 145, 0.98);
  color: white;
  border: 2px solid #000000;
  padding: 10px 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  border-radius: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color:rgb(238, 142, 8);
    border-color: black;
  }

  &:focus {
    outline: none;
  }
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