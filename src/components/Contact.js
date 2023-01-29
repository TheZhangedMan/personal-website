import { Container, Row, Col } from "react-bootstrap";
import { TiltingTag } from "./TiltingTag";
import filledLinked from "../assets/images/filledLinked.svg";
import github from "../assets/images/github.svg";
import phone from "../assets/images/phone.svg"
import mail from "../assets/images/mail.svg";
import discord from "../assets/images/discord.svg";
import ig from "../assets/images/ig.svg";
import file from "../assets/images/file.svg";
import resume from "../assets/miscellaneous/Resume.pdf";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2 className="header" data-aos="fade-right">CONTACT</h2>
                <p data-aos="fade-right">Feel free to contact me by any of the means below. For the best results, email me.</p>
                <div className="box">
                    <div className="social-card" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className="social-header">LINKEDIN</h3>
                        <p className="inst">Connect with me on LinkedIn!</p>
                        <a href="https://www.linkedin.com/in/ethan-zhang-6a229a230/" target="_blank">
                            <button className="sliding-button">LinkedIn<img className="small-icon" src={filledLinked} /></button>
                        </a>
                    </div>
                    <div className="social-card" data-aos="flip-right" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className="social-header">GITHUB</h3>
                        <p className="inst">Take a look at my GitHub!</p>
                        <a href="https://github.com/TheZhangedMan" target="_blank">
                            <button className="sliding-button">GitHub<img className="small-icon" src={github} /></button>
                        </a>
                    </div>
                    <div className="social-card" data-aos="flip-right" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className="social-header">EMAIL</h3>
                        <p className="inst">Send me an email!</p>
                        <a href="mailto: ethanzhang57@gmail.com" target="_blank">
                            <button className="sliding-button">Email<img className="small-icon" src={mail} /></button>
                        </a>
                    </div>
                    <div className="social-card" data-aos="flip-right" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className="social-header">RESUME</h3>
                        <p className="inst">View my resume!</p>
                        <a href={resume} target="_blank">
                            <button className="sliding-button">Resume<img className="small-icon" src={file} /></button>
                        </a>
                    </div>
                </div>
                <div className="box">
                    <TiltingTag {...{icon: phone, label: "(647)-537-0688"}}/>
                    <TiltingTag {...{icon: mail, label: "ethanzhang57@gmail.com"}}/>
                    <TiltingTag {...{icon: discord, label: "ethanol#1822"}}/>
                    <TiltingTag {...{icon: ig, label: "@etanzhang"}}/>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}