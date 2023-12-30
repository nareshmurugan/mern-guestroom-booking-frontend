import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";
import Cookies from "js-cookies";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function passval(p) {
    return (
      /[A-Z]/.test(p) &&
      /[0-9]/.test(p) &&
      /[a-z]/.test(p) &&
      /[!@#$%^&*()`~_+-={}<>?,/"';: A-Za-z0-9]{7,}$/.test(p) &&
      /[!@#$%^&*()`~_+-={}<>?,/"';:]/.test(p)
    );
  }

  useEffect(() => {
    const credVerify = async () => {
      try {
        const token = `Bearer ${Cookies.getItem("Credentials")}`;
        console.log(token);
        const data = (await axios.post("/api/user/verify", { token: token }))
          .data;
        console.log(data);
        if (data.result === "Success") {
          navigate("/home");
        }
      } catch (error) {
        console.log("No Token");
      }
    };
    (async () => await credVerify())();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    const isValidPassword = passval(password);
    console.log("Login submitted with:", { email, password });
    if (isValidPassword) {
      const tokenGen = async () => {
        try {
          const data = (
            await axios.post("/api/user/signin", { email, password })
          ).data;
          console.log("cread");
          console.log(data.token);
          Cookies.setItem("Credentials", data.token, { expires: 7 });
          navigate("/home");
        } catch (error) {
          console.log("error on login");
        }
      };
      (async () => await tokenGen())();
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, red, blue)",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="card text-center"
          style={{ minHeight: "30rem", minWidth: "25rem" }}
        >
          <Row className="justify-content-center mt-5">
            <Col md={6}>
              <h2 className="text-center">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Label>Password</Form.Label>
                <Form.Group
                  controlId="formPassword"
                  className="input-group mb-3"
                >
                  <Form.Control
                    className="form-control"
                    aria-describedby="button-addon2"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    class="btn "
                    type="button"
                    id="button-addon2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                  </Button>
                </Form.Group>
                <Link to="/">Forgot Password</Link>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <Link to="/signup" className="link-underline-opacity-0">
                  <Button className="btn btn-success">signup</Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
