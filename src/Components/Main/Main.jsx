import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faLocation, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <div className="main-outer">
        <div className="main">
          <h2 className="text-light fw-bold contact-us">Contact Us</h2>
          <p className="text-light below-contact">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Re,
            <br />
            quas nostrum. Ex omnis neque recusandae at deleniti fuga!
          </p>
          <b className="bg-light p-2 rounded">
            Home{" "}
            <FontAwesomeIcon
              className="home-contact"
              icon={faAngleDoubleRight}
            ></FontAwesomeIcon>{" "}
            Contact Us
          </b>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 main-cards">
            <div>
              <h1 className="lets fw-bold">
                Let's Start
                <br />
                Something Great!
              </h1>
            </div>
            <div>
              <p className="lets text-secondary">
                Proactively customize cross-media schemas rather than high
                pay-off
                <br /> the customer service. Uniquely enable extensible niche.
              </p>
            </div>
            <div>
              <div className="cards py-3">
                <div><FontAwesomeIcon className="envelope" icon={faLocationPin} />
                </div>
                <div className="proo mx-3 fw-bold">
                  Akshya Nagar 1st Block 1st Cross,<br/> Rammurthy Nagar,<br/>
                  Bangalore-560016
                </div>
              </div>
              <div className="cards py-3">
                <div><FontAwesomeIcon className="envelope " icon={faMobile} /></div>
                <div className="my-3 mx-3 fw-bold">+91 12345 67890</div>
              </div>
              <div className="cards py-3">
                <div><FontAwesomeIcon className="envelope" icon={faEnvelope} /></div>
                <div className="my-3 mx-3 fw-bold">info@company.com</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15130.611189241283!2d73.9112732!3d18.5445857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1703774667668!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Main;
