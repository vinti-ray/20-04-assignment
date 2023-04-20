import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./form.css"
import FormDataTable from "./showData";

function HomePage() {
  const [studentName, setStudentName] = useState("");
  const [nameerror, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [college, setCollege] = useState("");
  const [collegeError, setCollegeError] = useState("");
  const [formData, setFormData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    let nameerror = "";
    let emailError = "";
    let numberError = "";
    let clgnameError = "";

    const nameRegex = /[a-zA-Z]{3,}/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberregex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!numberregex.test(number)) {
      numberError = "please provide valid mobile number";
    }
    if (!nameRegex.test(studentName)) {
      nameerror = "please enter valid name";
    }
    if (!nameRegex.test(college)) {
      clgnameError = "please enter  name in valid format";
    }

    if (!emailRegex.test(email)) {
      emailError = "please enter valid email Id";
    }

    setNameError(nameerror);
    setEmailError(emailError);
    setCollegeError(clgnameError);
    setNumberError(numberError);

    return !(nameerror || emailError || clgnameError || numberError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
        const newFormData = {
            studentName,
            email,
            number,
            college,
          };
          setFormData([...formData, newFormData]);
          setShowTable(true)
          navigate("/")
         alert("form submitted successfully");
    }
  };

  return (
    <Container fluid  className="my-container">
      <Row >
        <Col >
          <Form onSubmit={handleSubmit} className="register">
            <Row className="my-4">
              <Col>
                <h1 className="headerRegister">Student Data</h1>
              </Col>
            </Row>
<Row>

<Col>
            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label style={{ color: "white" }}>Student's Name</Form.Label>
              {/* <label style={{ color: "red", marginLeft: "5px" }}>*</label> */}

              <Form.Control
                style={{ width: "100%" }}
                type="text"
                value={studentName}
                required={true}
                onChange={(event) => setStudentName(event.target.value)}
              />
              <div style={{ color: "red" }} className="error">
                {nameerror}
              </div>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label style={{ color: "white" }}>Email Address</Form.Label>
              {/* <label style={{ color: "red", marginLeft: "5px" }}>*</label> */}
              <Form.Control
                type="email"
                style={{ width: "100%" }}
                value={email}
                required={true}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div style={{ color: "red" }} className="error">
                {emailError}
              </div>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label style={{ color: "white" }}>Mobile Number</Form.Label>
              {/* <label style={{ color: "red", marginLeft: "5px" }}>*</label> */}
              <Form.Control
                type="text"
                style={{ width: "100%" }}
                maxLength={10}
                value={number}
                required={true}
                onChange={(event) => setNumber(event.target.value)}
              />
              <div style={{ color: "red" }} className="error">
                {numberError}
              </div>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label style={{ color: "white" }}>College Name</Form.Label>
              {/* <label style={{ color: "red", marginLeft: "5px" }}>*</label> */}
              <Form.Control
                type="text"
                style={{ width: "100%" }}
                value={college}
                required={true}
                onChange={(e) => setCollege(e.target.value)}
              />
              <div style={{ color: "red" }} className="error">
                {collegeError}
              </div>
            </Form.Group>
            </Col>
            <Col>
            

            <Button
              variant="success"
              type="submit"
            //   size="lg"
              className="button"

            >
              Submit
            </Button>
            </Col>
            </Row>
          </Form>
          {showTable && <FormDataTable formData={formData} />}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
