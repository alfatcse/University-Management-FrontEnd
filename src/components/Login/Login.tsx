"use client";
import { Button, Col, Row } from "antd";
import loginImage from "../../assets/login-image.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import { SubmitHandler } from "react-hook-form";

import {
  getUserInfo,
  isLoggedIn,
  storeUserInfo,
} from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/app/redux/api/authApi";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  console.log(isLoggedIn());
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
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
