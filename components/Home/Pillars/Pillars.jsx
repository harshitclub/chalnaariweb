import React from "react";
import "./style.scss";
import Image from "next/image";
import pillar1 from "../../../public/pillar1.png";
import pillar2 from "../../../public/pillar2.png";
import pillar3 from "../../../public/pillar3.png";
import pillar4 from "../../../public/pillar4.png";
// import pillar5 from "../../../public/pillar5.png";

const Pillars = () => {
  return (
    <section className="pillars">
      <div className="pillarsHead">
        <h2>Our Pillars.</h2>
      </div>
      <div className="pillarsContainer">
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar1} />
          </div>
          <div className="pillarContent">
            <h4>
              Economic &<br />
              Financial Empowerment
            </h4>
          </div>
        </div>
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar2} />
          </div>
          <div className="pillarContent">
            <h4>
              Education &<br />
              Skill Development
            </h4>
          </div>
        </div>
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar3} />
          </div>
          <div className="pillarContent">
            <h4>
              Health &<br />
              Well-being
            </h4>
          </div>
        </div>
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar4} />
          </div>
          <div className="pillarContent">
            <h4>
              Advocacy &<br />
              Awareness
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
