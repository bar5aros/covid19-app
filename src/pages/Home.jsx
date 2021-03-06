import React from "react";
import styled from "styled-components";

const MainSection = styled.main`
  background-color: #e3655b;
`;

const GreetingContainer = styled.div`
  padding: 100px;
  text-align: center;
`;

const Welcome = styled.h1`
  font-size: 4rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
`;

const WelcomeText =
  "Welcome to the App! Navigate through the bar above to see detailed data and charts about countries";

const Home = () => (
  <MainSection>
    <GreetingContainer>
      <Welcome>{WelcomeText}</Welcome>
    </GreetingContainer>
  </MainSection>
);

export default Home;
