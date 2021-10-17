import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  ${
    "" /* position: relative;
  bottom: 0; */
  }
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  color: black;

  &:hover {
    color: lightgray;
    transition: 200ms ease-in;
    text-decoration: underline;
  }
`;

export const Heading = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.2em;
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  color: black;
`;
