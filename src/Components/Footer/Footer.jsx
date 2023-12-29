import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer1 text-light">
          <div className="col-md-3 social p-5 ">
            <div>
              <h3 className="mx-2 follow">
                FOLLOW US{" "}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "#ffffff" }}
                />
              </h3>
              <img
                src="./Images/linkedin.svg"
                className="m-2"
                alt=""
                height={"30px"}
                width={"25px"}
              />
              <img
                src="./Images/telegram.svg"
                className="m-2"
                alt=""
                height={"30px"}
                width={"25px"}
              />
              <img
                src="./Images/twitter.svg"
                className="m-2"
                alt=""
                height={"30px"}
                width={"25px"}
              />
            </div>
            <div>
              <img
                src="./Images/globe-solid.svg"
                className="mx-2 my-3"
                alt=""
                height={"30px"}
                width={"25px"}
              />
              https://company.com
            </div>
          </div>
          <div className="col-md-3 p-5 social ">
            <h3 className="follow">
              OUR SERVICES{" "}
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff" }}
              />
            </h3>

            <p>
              <FontAwesomeIcon
                className="home-contact text-light me-2"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
            <p>
              <FontAwesomeIcon
                className="home-contact text-light me-2"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
            <p>
              <FontAwesomeIcon
                className="home-contact text-light me-2"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
            <p>
              <FontAwesomeIcon
                className="home-contact text-light me-2"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="col-md-3 p-5 my-4">
            <p>
              <FontAwesomeIcon
                className="home-contact mx-2 text-light"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
            <p>
              <FontAwesomeIcon
                className="home-contact mx-2 text-light"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
            <p>
              <FontAwesomeIcon
                className="home-contact mx-2 text-light"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
            <p>
              <FontAwesomeIcon
                className="home-contact mx-2 text-light"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="col-md-3 p-5">
            <h3 className="follow social">
              GET IN TOUCH{" "}
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#ffffff" }}
              />
            </h3>
            <div className="address">
                <img
              src="./Images/location-dot-solid.svg"
              className="mx-2 my-3"
              alt=""
              height={"30px"}
              width={"25px"}
            />
            <p className="social">
              Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
              Bangalore-560016
            </p></div>
            <hr></hr>
            <div className="social">
            <div><FontAwesomeIcon className="envelop" icon={faMobile} />Phone :+91 12345 67890</div>
          <div><FontAwesomeIcon className="envelop" icon={faEnvelope} />Email :info@company.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row footer2 text-light">
          <div className="col-md-6">
            Copyright ©  2023, iAssureIT All Rights Reserved
          </div>
          <div className="col-md-6">
            Designed & Developed By{" "}
            <b className="fw-bold">
            Siddhant Kakade at iAssure International Technologies Pvt. Ltd.
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
