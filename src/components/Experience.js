import { Container, Row, Col } from "react-bootstrap";
import jonah from "../assets/images/jonah.png";
import ut from "../assets/images/uoft.png";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2 className="header" data-aos="fade-up">EXPERIENCE</h2>
                <div className="job-row" data-aos="fade-up">
                    <a className="jonah-bg" href="https://www.jonahgroup.com/" target="_blank">
                        <img className="jonah" src={jonah}/>
                    </a>
                    <div className="company">
                        <b>Jonah Group</b>
                        <span className="time">2022</span>
                        <div>Application Development, Technical Developer Intern</div>
                        <div className="description" data-aos="fade-up">
                            Description
                            <ul>
                                <li data-aos="fade-up">Developed fullstack mobile application using <b>AngularJS</b> and <b>Ionic</b> as a frontend interface for users to log work and complete forms</li>
                                <li data-aos="fade-up">Designed complex form elements for user input to be stored in an <b>IndexedDB</b> database, using <b>TypeScript</b> for forms defined with <b>JSON</b> files</li>
                                <li data-aos="fade-up">Implemented unit tests with <b>Jasmine</b> to ensure the generation of form elements read from <b>JSON</b> files</li>
                                <li data-aos="fade-up">Practiced <b>Agile</b> software development, communicating with the project client by the end of each sprint and adjusting work as necessary</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="job-row" data-aos="fade-up">
                    <a className="ut-bg" href="https://www.utoronto.ca/" target="_blank">
                      <img className="ut" src={ut}/>
                    </a>
                    <div className="company">
                        <b>University of Toronto</b>
                        <span className="time">2021 - Now</span>
                        <div>Software Engineering, Undergraduate Student</div>
                        <div className="description" data-aos="fade-up">
                            Relevant Coursework
                            <ul>
                                <li data-aos="fade-up">[CSCA48] Introduction to Computer Science II</li>
                                <li data-aos="fade-up">[CSCB20] Introduction to Databases & Web Applications</li>
                                <li data-aos="fade-up">[CSCB07] Software Design</li>
                                <li data-aos="fade-up">[CSCB09] Software Tools & Systems Programming</li>
                                <li data-aos="fade-up">[CSCB63] Design & Analysis of Data Structures</li>
                                <li data-aos="fade-up">[CSCB58] Computer Organization</li>
                                <li data-aos="fade-up">[CSCC24] Principles of Programming Languages</li>
                                <li data-aos="fade-up">[CSCC01] Introduction to Software Engineering</li>
                                <li data-aos="fade-up">[CSCC43] Introduction to Databases</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}