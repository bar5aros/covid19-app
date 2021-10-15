import styled from "styled-components";

export const HeaderText = styled.h1`
  font-size: 2rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const TotalSection = styled.section`
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
`;

export const SectionHeader = styled.h2`
  font-size: 1rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: left;
`;

export const Container = styled.div`
  box-shadow: 8px 10px 25px -1px rgba(0, 0, 0, 0.38);
  width: 60%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6%;
  padding: 20px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLittle = styled.div`
  box-shadow: 8px 10px 25px -1px rgba(0, 0, 0, 0.38);
  width: 60%;
  max-width: 600px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorContainer = styled.div`
  box-shadow: 8px 10px 25px -1px rgba(0, 0, 0, 0.38);
  width: 60%;
  max-width: 600px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  margin-top: 25px;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-weight: bold;
  color: darkred;
`;

export const DateTextContainer = styled.div`
  width: 25%;
  min-width: 50px;
  max-width: 100px;
`;

export const DateText = styled.h3`
  font-size: 0.75rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const DatePickerContainer = styled.div`
  width: 50%;
  min-width: 100px;
  max-width: 200px;
`;

export const DailySection = styled.section`
  background-color: #c0c0c0;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
