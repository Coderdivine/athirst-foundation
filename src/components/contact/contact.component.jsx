import "./contact.style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faBarsStaggered
} from "@fortawesome/free-solid-svg-icons";


// const location = {
//   address: "No. 12 Oyebola St., Ojota, Lagos, Nigeria, Africa.",
//   lat: 6.58700061126983,
//   lng: 3.379746854549108,
// };
// const zoomLevel = 10;
const Contact = () => {
  const getMail=()=>{
 axios.post("https://athirst-backend.herokuapp.com/get-mail").then(res=>{
   alert(res.data.message);
 }).catch(err=>{alert(err.message)});
};
  return (
    <div className="contactDiv" id="contact">
      <Container>
        <Row mt-3>
          <Col md={6}>
            <div className="contactRow">
              <h2>CONTACTS</h2>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="contactIcons"
                />{" "}
                Suit 15 works plaza opposite Kujore bus stop Ojota Ogudu road
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="contactIcons" />{" "}
                +2347062643699
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="contactIcons" />{" "}
                theathirstfoundation@gmail.com
              </p>
              <p>
                {" "}
                <Icon
                  icon="akar-icons:facebook-fill"
                  className="contactIcons"
                />
                <Icon
                  icon="akar-icons:instagram-fill"
                  className="contactIcons"
                />
                <Icon icon="akar-icons:twitter-fill" className="contactIcons" />
                <Icon
                  icon="akar-icons:linkedin-box-fill"
                  className="contactIcons"
                />
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="contactRow">
              <h2>Contact Us</h2>
              <p>
                If you would like more information or would be interested in
                donating yo help us achieve our mission, please fill out the
                form below and someone will get back to you.{" "}
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" placeholder="Enter your message" />
                </Form.Group>
                <button type="submit" onClick={()=>Handling(e)} className="contactSubmitBtn">
                  Submit
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
