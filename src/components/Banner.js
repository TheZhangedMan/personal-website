import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import stars from "../assets/miscellaneous/stars.mp4";
import { useState, useEffect } from "react";

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [erasing, setErasing] = useState(false);
    const [pause, setPause] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(50);
    const cycle = [ "a software engineer.", "a fullstack developer.",  "a computer scientist." ]
    useEffect(() => {
        let clock = setInterval(() => {
            update();
        }, delta);
        return () => { clearInterval(clock) };
    }, [text]);
    const update = () => {
        let role = cycle[index % cycle.length];
        let current = erasing ? role.substring(0, text.length - 1) : role.substring(0, text.length + 1);
        setText(current);
        if (erasing)
            setDelta(100);
        if (pause)
            setDelta(50);
        if (!erasing && current === role) {
            setErasing(true);
            setDelta(700);
        } else if (erasing && current === '') {
            setErasing(false);
            setIndex(index + 1);
            setDelta(600);
            setPause(true);
        }
    }
    return (
        <section id="home">
            <video autoPlay loop muted id="stars">
                <source src={stars} type="video/mp4"/>
            </video>
            <Container className="banner">
                <Row>
                <Col data-aos="zoom-out" data-aos-duration="2000" xs={12} md={6} xl={7}>
                    <div>
                        <span className="name">ETHAN ZHANG</span>
                        <h1>
                            {`I am `}
                            <span className="txt-rotate">
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>Current student at the University of Toronto, specializing in Computer Science.</p>
                        <a className="explore" href="#about">
                            <button>Explore<ArrowRight size={24}/></button>
                        </a>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    )
}