"use client";
import { Button, Col, Row } from "antd";
import loginImage from "../../assets/login-image.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import { SubmitHandler } from "react-hook-form";
import { type } from "os";
type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="Login Image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First Login your Account
        </h1>
        <div>
          <Form SubmitHandler={onSubmit}>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FromInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FromInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
