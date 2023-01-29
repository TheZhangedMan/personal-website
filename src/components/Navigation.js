import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import git from "../assets/images/git.svg";
import linked from "../assets/images/linked.svg";
import resume from "../assets/miscellaneous/Resume.pdf";

export const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50)
                setScrolled(true);
            else
                setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="tabs" className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/TheZhangedMan" target="_blank"><img src={git} alt=""/></a>
                        <a href="https://www.linkedin.com/in/ethan-zhang-6a229a230/" target="_blank"><img src={linked} alt=""/></a>
                    </div>
                    <a href={resume} target="_blank">
                        <button>Resume</button>
                    </a>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}