import React, { useState } from "react";
import RegisterFormWrapper from "../components/Form/RegisterFormWrapper";
import LoginFormWrapper from "../components/Form/LoginFormWrapper";
import EmailInput from "../components/Input/EmailInput";
import PasswordInput from "../components/Input/PasswordInput";
import Button from "../components/UI/Button";
import Container from "../components/UI/Container";
import Card from "../components/UI/Card";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const register = searchParams.get("register") || "";
  const handleClick = async () => {
    const req = axios
      .get("http://localhost:3001/auth/logout", { withCredentials: true })
      .then((res) => console.log(res));
  };
  return (
    <>
      {!register ? (
        <Container>
          <Card className="mx-auto w-full lg:w-[80ch]">
            <div>
              <legend className="font-bold">Login</legend>
              <p className="text-lg">
                Admin panel for adding products, managing profile and settings.
              </p>
            </div>
            <hr />
            <fieldset>
              <LoginFormWrapper>
                <EmailInput maxWidth />
                <PasswordInput maxWidth />
                <Button type="submit">Submit</Button>
              </LoginFormWrapper>
            </fieldset>
            <p>
              Need an account?{" "}
              <button
                className="font-bold"
                onClick={() => setSearchParams({ register: "1" })}
              >
                Register
              </button>
            </p>
          </Card>
        </Container>
      ) : (
        <Container>
          <Card className="mx-auto w-full lg:w-[80ch]">
            <div>
              <legend className="font-bold">Register</legend>
              <p className="text-lg">
                Register to add products, manage profile and buy.
              </p>
            </div>
            <hr />
            <fieldset>
              <RegisterFormWrapper>
                <EmailInput maxWidth />
                <PasswordInput maxWidth />
                <Button type="submit">Submit</Button>
              </RegisterFormWrapper>
            </fieldset>
            <p>
              Already have an account?{" "}
              <button
                className="font-bold"
                onClick={() => setSearchParams({ register: "" })}
              >
                Login
              </button>
            </p>
          </Card>
        </Container>
      )}
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Auth;
