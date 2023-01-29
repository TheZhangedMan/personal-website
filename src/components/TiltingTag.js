import Tilt from "react-parallax-tilt";

export const TiltingTag = ({ icon, label }) => {
    return (
        <div className="front" data-aos="fade-left" data-aos-delay={Math.floor(Math.random() * 6) * 50}>
            <div className="zoom">
                <Tilt className="tilt" glareEnable={true} glareBorderRadius="10px">
                        <img className="icon" src={icon}/>
                        <p className="label">{label}</p>
                </Tilt>
            </div>
        </div>
    )
}
