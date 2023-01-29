import { Col } from "react-bootstrap";

export const ProjectCard = ({ pos, title, description, img, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank">
        <div className="proj-imgbx" data-aos="zoom-in" data-aos-delay={(String)(pos * 100)}>
          <img className="preview" src={img} />
          <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}