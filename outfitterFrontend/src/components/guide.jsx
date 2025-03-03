import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CalendarClock, BadgeDollarSign, Gauge, Users } from "lucide-react";
import {
    Container,
    NavContainer, 
    Nav, 
    NavList, 
    NavItem,
    DropdownMenu,
    DropdownItem,
    StyledMenuIcon,
    StyledXIcon,
    MenuIconDropdown,
    AboutContainer,
    Content,
    TourGuideContainer,
    Guides,
    GuideImage,
    GuideCard,
    GuideInfo,
    GuideInfoText,
    ViewAllBtn,
    BookNowBtn2
} from "../styles/guide";
import bb from "../assets/bb.png";
import it from "../assets/it.png";
import kb from "../assets/kb.png";
import rt from "../assets/rt.png";

function Guide() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();  

    const handleClick = () => setClick(!click);
    const toggleDropdown = () => setDropdown(prev => !prev);

    const roomsClick = () => {
        navigate("/rooms");  // Navigate to /rooms when the button is clicked
    };

    const bookClick = () => {
        navigate("/book");  // Navigate to /rooms when the button is clicked
    };

    return (
        <Container>
            <BookNowBtn2 onClick={bookClick}>BOOK A TRIP</BookNowBtn2>
            <NavContainer>
                <Nav>
                    <NavList>
                        <NavItem><Link to="/home">HOME</Link></NavItem>
                        <NavItem onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="/trips">TRIPS</Link>
                            <DropdownMenu $dropdown={dropdown}>
                            <DropdownItem><Link to="/trips/everest">Everest Base Camp Trek</Link></DropdownItem>
                            <DropdownItem><Link to="/trips/annapurna">Annapurna Base Camp Trek</Link></DropdownItem>
                            <DropdownItem><Link to="/trips/manaslu">Manaslu Circuit Trek</Link></DropdownItem>
                            <DropdownItem><Link to="/trips/langtang">Langtang Valley Trek</Link></DropdownItem>
                            </DropdownMenu>
                        </NavItem>
                        <NavItem><Link to="/guide"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent navigation
                            window.location.reload(); // Reload page
                        }}>TRAVEL GUIDE</Link></NavItem>
                        <NavItem onClick={handleClick} onAbort={handleClick}>{click ? (
                                <StyledXIcon size={24} />  // Render X (cross) when clicked
                            ) : (
                                <StyledMenuIcon size={24} />// Render MenuIcon when not clicked
                            )}
                            <MenuIconDropdown $dropdown={click}>
                                <DropdownItem><Link to="/login">Login</Link></DropdownItem>
                                <DropdownItem><Link to="/signup">Sign Up</Link></DropdownItem>
                            </MenuIconDropdown>
                        </NavItem>
                    </NavList>
                </Nav>
            </NavContainer>
            <Content>
                <AboutContainer>
                    <h1>TRAVEL GUIDES</h1>
                    <p>Explore top destinations, attractions, and hidden gems with our travel guide, offering everything you need for an unforgettable journey.</p>
                </AboutContainer>
                <TourGuideContainer>
                    <Guides>
                        <GuideCard>
                            <GuideImage src={bb} alt='BirodhBurlakoti'></GuideImage>
                            <GuideInfo>
                                <h2>Birodh Burlakoti</h2>
                                <GuideInfoText>
                                    <p>Birodh has been working in the travel / tourism industry since 2010. He is an experienced and licensed tour leader, tourist guide, trekking / mountain guide. He also brings his travel photography skills to every trip he leads.</p>
                                </GuideInfoText>
                            </GuideInfo>
                        </GuideCard>

                        <GuideCard>
                            <GuideImage src={it} alt='IndraThapa'></GuideImage>
                            <GuideInfo>
                                <h2>Indra Thapa</h2>
                                <GuideInfoText>
                                    <p>Indra Thapa is a professional trekking guide for the entire most popular trekking region in Nepal including the Everest, Annapurna base camp and Langtang. He absolutely loves to show mighty Himalayas sharing his experience with trekkers.</p>
                                </GuideInfoText>
                            </GuideInfo>
                        </GuideCard>

                        <GuideCard>
                            <GuideImage src={kb} alt='KiranBasnet'></GuideImage>
                            <GuideInfo>
                                <h2>Kiran Basnet</h2>
                                <GuideInfoText>
                                    <p>Kiran Basnet is a hardworking and enthusiastic person who currently works as an manager in Company and became a tour and trekking guide now. Kiran completed his graduation in mass communications and now uses his skills in his role as an Tour and Trekking Guide.</p>
                                </GuideInfoText>
                            </GuideInfo>
                        </GuideCard>

                        <GuideCard>
                            <GuideImage src={rt} alt='RameshThapa'></GuideImage>
                            <GuideInfo>
                                <h2>Ramesh Thapa</h2>
                                <GuideInfoText>
                                    <p>Ramesh Thapa is from Dhading and started working with Outfitter Nepal since 2010 and he started his career as a trekking porter and now, he has been guide and has been trekking in to Annapurna, Langtang, Everest and Manaslu regions.</p>
                                </GuideInfoText>
                            </GuideInfo>
                        </GuideCard>

                    </Guides>
                </TourGuideContainer>
            </Content>
        </Container>


                            
    );
}

export default Guide;