import React from "react";
import styled from "styled-components";

const GreetingContainer = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Welcome = styled.h1`
  font-size: 4rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const WelcomeText =
  "Welcome to the App! Navigate through the bar to see detailed data and charts about countries";

const Home = () => (
  <section>
    <GreetingContainer>
      <Welcome>{WelcomeText}</Welcome>
    </GreetingContainer>
  </section>
);

export default Home;
