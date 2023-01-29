import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import event from "../assets/images/event.png";
import botpeter from "../assets/images/botpeter.png";
import elm from "../assets/images/elm.png";
import ld from "../assets/images/ld.png";
import quad from "../assets/images/quad.png"
import draw from "../assets/images/draw.png";
import chat from "../assets/images/chat.png";
import revenge from "../assets/images/revenge.png";
import gdp from "../assets/images/gdp.png";
import cheerville from "../assets/images/cheerville.png";
import de from "../assets/images/de.png";
import website from "../assets/images/website.png";

export const Projects = () => {

  const projects = [
    {
        pos: 0,
        title: "Event Scheduling App",
        description: "An Android app made for scheduling group events written in Java with Android Studio, linked to Firebase, and developed collaboratively",
        img: event,
        link: "https://github.com/Aarin06/CSCB07_Project",
    },
    {
        pos: 1,
        title: "BotPeter",
        description: "A Discord bot that performs web scraping and makes use of the DALL-E API written in Node.js and developed alone",
        img: botpeter,
        link: "https://replit.com/@TheZhangedMan/botpeter",
    },
    {
        pos: 2,
        title: "Elm",
        description: "A short, isometric, dungeon crawler written in C# with Unity and developed collaboratively",
        img: elm,
        link: "https://ekew.itch.io/elm",
    },
    {
        pos: 0,
        title: "Lunar Drift",
        description: "A short game written in C# with Unity and developed collaboratively",
        img: ld,
        link: "https://github.com/TheZhangedMan/LunarDrift",
    },
    {
        pos: 1,
        title: "Quadtree Particle System",
        description: "A particle system that makes use of quadtrees to improve performance written in Java and developed alone",
        img: quad,
        link: "https://github.com/TheZhangedMan/QuadTree-Particle-System",
    },
    {
        pos: 2,
        title: "DuberDraw",
        description: "A networked multiplayer drawing game written in Java and developed alone",
        img: draw,
        link: "https://github.com/TheZhangedMan/DuberDraw",
    },
    {
        index: 0,
        title: "DuberChat",
        description: "A basic, networked chatting software written in Java and developed collaboratively",
        img: chat,
        link: "https://github.com/TheZhangedMan/DuberChat",
    },
    {
        index: 1,
        title: "Duber's Revenge",
        description: "A short, isometric game written in Java and developed collaboratively",
        img: revenge,
        link: "https://github.com/TheZhangedMan/Dubers-Revenge",
    },
    {
        pos: 2,
        title: "Geometry Drawing Program",
        description: "A program that draws shapes written in Java and developed alone",
        img: gdp,
        link: "https://github.com/TheZhangedMan/Geometry-Drawing-Program",
    },
    {
        pos: 0,
        title: "Cheerville",
        description: "A simulation of an \"ecosystem\" written in Java and developed alone",
        img: cheerville,
        link: "https://github.com/TheZhangedMan/Cheerville",
    },
    {
        pos: 1,
        title: "DuberEatz",
        description: "A pathfinding algorithm that performs depth-first search on text-based maps written in Java and developed alone",
        img: de,
        link: "https://github.com/TheZhangedMan/DuberEatz",
    },
    {
        pos: 2,
        title: "Portfolio",
        description: "A personal website made with ReactJS with a link to a personal website made with ReactJS with a link to a personal website with a link...",
        img: website,
        link: "http://localhost:3000/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2 className="header" data-aos="zoom-in">PROJECTS</h2>
                <p data-aos="zoom-in">The section below showcases my past work. Hover over each card for more details or click into a card to take a look at the work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}