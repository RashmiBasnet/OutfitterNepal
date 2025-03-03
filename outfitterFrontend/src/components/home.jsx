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
    AboutBtn,
    ImageContainer,
    Images,
    Image,
    ImageWrapper,
    Content,
    PackageContainer,
    PackageText,
    Packages,
    PackageImage,
    PackageCard,
    PackageInfo,
    PackageInfoText,
    Icons,
    IconText,
    LearnMoreBtn,
    BookNowBtn,
    ViewAllBtn,
    BookNowBtn2
} from "../styles/home";
import evbc from "../assets/evbc.jpg";
import abct from "../assets/abct.jpg";
import lavtt from "../assets/lavtt.png";
import mact from "../assets/mact.webp";

function Home() {
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
                        <NavItem><Link to="/home"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent navigation
                            window.location.reload(); // Reload page
                        }}>HOME</Link></NavItem>
                        <NavItem onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="/trips">TRIPS</Link>
                            <DropdownMenu $dropdown={dropdown}>
                            <DropdownItem><Link to="/trips/everest">Everest Base Camp Trek</Link></DropdownItem>
                            <DropdownItem><Link to="/trips/annapurna">Annapurna Base Camp Trek</Link></DropdownItem>
                            <DropdownItem><Link to="/trips/manaslu">Manaslu Circuit Trek</Link></DropdownItem>
                            <DropdownItem><Link to="/trips/langtang">Langtang Valley Trek</Link></DropdownItem>
                            </DropdownMenu>
                        </NavItem>
                        <NavItem><Link to="/guide">TRAVEL GUIDE</Link></NavItem>
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
                    <h1>OUTFITTER NEPAL</h1>
                    <h1>Treks & Expedition P.Ltd.</h1>
                    <p>With a passion for exploration and a commitment to excellence, we specialize in trekking, cultural tours, adventure expeditions, and customized holiday packages. Our expert local guides ensure safe and enriching journeys, while our personalized service guarantees a seamless travel experience.</p>
                    <p>Whether you're seeking the thrill of the Himalayas or the serenity of cultural heritage sites, Outfitter Nepal is your trusted partner for extraordinary travel experiences. Let us turn your dream adventure into reality!</p>
                    <AboutBtn>Contact Us</AboutBtn>
                </AboutContainer>
                <ImageContainer>
                    
                </ImageContainer>
                <PackageContainer>
                    <PackageText>
                        <h1>TREKKING PACKAGES</h1>
                    </PackageText>
                    <Packages>
                        <PackageCard>
                            <PackageImage src={evbc} alt='EBC'></PackageImage>
                            <PackageInfo>
                                <h2>Everest Base Camp Trek</h2>
                                <PackageInfoText>
                                    <p>Everest Base Camp Trek explores the great Himalayas, particularly the route that leads to the Everest Base Camp, the lap of the world's highest mountain, Mt. Everest (8,848 m).</p>
                                </PackageInfoText>
                                <hr />
                                    <Icons>
                                        <IconText>
                                            <CalendarClock size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Duration : 16 Days</span>
                                        </IconText>
                                        <IconText>
                                            <BadgeDollarSign size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Price : US$1200(p/p)</span>
                                        </IconText>
                                        <IconText>
                                            <Gauge size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Difficulty Level : Moderate</span>
                                        </IconText>
                                        <IconText>
                                            <Users size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Group Size : 1-14</span>
                                        </IconText>
                                    </Icons>
                                <hr />
                            </PackageInfo>
                            <LearnMoreBtn>Learn More</LearnMoreBtn>
                            <BookNowBtn onClick={bookClick}>Book Now</BookNowBtn>
                        </PackageCard>

                        <PackageCard>
                            <PackageImage src={abct} alt='ABCT'></PackageImage>
                            <PackageInfo>
                                <h2>Annapurna Base Camp Trek</h2>
                                <PackageInfoText>
                                    <p>Indulge in the unbelievable beauty of the Annapurna Base Camp Trek with Escape Nepal on this adventurous and once-in-a-lifetime journey to the lap of Mt. Annapurna (8,091 m) - world's tenth highest mountain.</p>
                                </PackageInfoText>
                                <hr />
                                    <Icons>
                                        <IconText>
                                            <CalendarClock size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Duration : 14 Days</span>
                                        </IconText>
                                        <IconText>
                                            <BadgeDollarSign size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Price : US$750(p/p)</span>
                                        </IconText>
                                        <IconText>
                                            <Gauge size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Difficulty Level : Moderate</span>
                                        </IconText>
                                        <IconText>
                                            <Users size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Group Size : 1-14</span>
                                        </IconText>
                                    </Icons>
                                <hr />
                            </PackageInfo>
                            <LearnMoreBtn>Learn More</LearnMoreBtn>
                            <BookNowBtn onClick={bookClick}>Book Now</BookNowBtn>
                        </PackageCard>

                        <PackageCard>
                            <PackageImage src={mact} alt='MACT'></PackageImage>
                            <PackageInfo>
                                <h2>Manaslu Circuit Trek</h2>
                                <PackageInfoText>
                                    <p>One of the challenging treks in the Himalayas that offers off beaten trekking along with intimate encounters with locals and spectacular sceneries.</p>
                                </PackageInfoText>
                                    <hr />
                                        <Icons>
                                            <IconText>
                                                <CalendarClock size={20} color="rgba(0, 124, 145, 0.98)" />
                                                <span> Duration : 18 Days</span>
                                            </IconText>
                                            <IconText>
                                                <BadgeDollarSign size={20} color="rgba(0, 124, 145, 0.98)" />
                                                <span> Price : US$1000(p/p)</span>
                                            </IconText>
                                            <IconText>
                                                <Gauge size={20} color="rgba(0, 124, 145, 0.98)" />
                                                <span> Difficulty Level : Strenuous</span>
                                            </IconText>
                                            <IconText>
                                            <Users size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Group Size : 2-14</span>
                                        </IconText>
                                        </Icons>
                                    <hr />
                            </PackageInfo>
                            <LearnMoreBtn>Learn More</LearnMoreBtn>
                            <BookNowBtn onClick={bookClick}>Book Now</BookNowBtn>
                        </PackageCard>

                        <PackageCard>
                            <PackageImage src={lavtt} alt='LAVT'></PackageImage>
                            <PackageInfo>
                                <h2>Langtang Valley Trek</h2>
                                <PackageInfoText>
                                    <p>Exciting Langtang Valley Trek is a distinguished destination in the Himalayan region, which leads you to astonishing mountain peaks with an amusing walk through the area.</p>
                                </PackageInfoText>
                                    <hr />
                                        <Icons>
                                            <IconText>
                                                <CalendarClock size={20} color="rgba(0, 124, 145, 0.98)" />
                                                <span> Duration : 10 Days</span>
                                            </IconText>
                                            <IconText>
                                                <BadgeDollarSign size={20} color="rgba(0, 124, 145, 0.98)" />
                                                <span> Price : US$595(p/p)</span>
                                            </IconText>
                                            <IconText>
                                                <Gauge size={20} color="#rgba(0, 124, 145, 0.98)" />
                                                <span> Difficulty Level : Moderate</span>
                                            </IconText>
                                            <IconText>
                                            <Users size={20} color="rgba(0, 124, 145, 0.98)" />
                                            <span> Group Size : 1-10</span>
                                        </IconText>
                                        </Icons>
                                    <hr />
                            </PackageInfo>
                            <LearnMoreBtn>Learn More</LearnMoreBtn>
                            <BookNowBtn onClick={bookClick}>Book Now</BookNowBtn>
                        </PackageCard>


                    </Packages>
                    <ViewAllBtn onClick={roomsClick}>View All</ViewAllBtn>
                </PackageContainer>
            </Content>
        </Container>


                            
    );
}

export default Home;