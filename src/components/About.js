import { Container, Row, Col } from "react-bootstrap";
import { TiltingTag } from "./TiltingTag";
import angular from "../assets/images/angular.svg";
import c from "../assets/images/c.svg";
import css from "../assets/images/css.svg";
import gitLogo from "../assets/images/gitLogo.svg";
import github from "../assets/images/github.svg";
import gitlab from "../assets/images/gitlab.svg";
import html from "../assets/images/html.svg";
import ion from "../assets/images/ion.svg";
import java from "../assets/images/java.svg";
import js from "../assets/images/js.svg";
import nodejs from "../assets/images/nodejs.svg";
import python from "../assets/images/python.svg";
import react from "../assets/images/react.svg";
import sql from "../assets/images/sql.svg"
import ts from "../assets/images/ts.svg";
import unity from "../assets/images/unity.svg";

export const About = () => {
    const tags = [
        {
            icon: java,
            label: "Java",
        },
        {
            icon: c,
            label: "C",
        },
        {
            icon: python,
            label: "Python",
        },
        {
            icon: html,
            label: "HTML",
        },
        {
            icon: css,
            label: "CSS",
        },
        {
            icon: js,
            label: "JavaScript",
        },
        {
            icon: ts,
            label: "TypeScript",
        },
        {
            icon: angular,
            label: "AngularJS",
        },
        {
            icon: react,
            label: "ReactJS",
        },
        {
            icon: ion,
            label: "Ionic",
        },
        {
            icon: nodejs,
            label: "Node.js",
        },
        {
            icon: sql,
            label: "SQL",
        },
        {
            icon: gitLogo,
            label: "Git",
        },
        {
            icon: github,
            label: "GitHub",
        },
        {
            icon: gitlab,
            label: "GitLab",
        },
        {
            icon: unity,
            label: "Unity",
        },
    ];

  return (
    <section id="about">
        <Container className="about">
            <Row className="box">
                <Col xs={12} md={6} xl={7}>
                    <div>
                        <h1 className="header" data-aos="fade-right">ABOUT</h1>
                        <p className="quote" data-aos="fade-right">
                            "No matter how much I consumed and consumed, I still found myself starving to learn more."
                        </p>
                        <p className="blurb" data-aos="fade-right">
                            Welcome. My name is Ethan Zhang. I am a second-year student specializing in Computer Science at the University of Toronto. I am incredibly invested in making use of programming and technology to solve the problems that may be encountered in a day-to-day basis. Some other interests that I have related to my field include machine learning, game development, design, and cryptography. In my free time, you can catch me learning a new programming language, playing the piano or guitar, or learning how to cook.
                        </p>
                        <p className="quip" data-aos="fade-right">
                            Here lies a wall of programming languages and technologies that I can confidently say that I am proficient with. Have a look.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="box">
                    {
                        tags.map((tag, index) => {
                            return (
                                <TiltingTag
                                key={index}
                                {...tag}
                                />
                            )
                        })
                    }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}