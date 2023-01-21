import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Header>
        <img src="./Assets/Logo.svg" alt="Logo" />
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Challenges</a>
          </li>
          <li>
            <a href="#">Reasources</a>
          </li>
          <li>
            <a href="#">Other links</a>
          </li>
          <li>
            <button>Sign in</button>
            <TryButton>Try for free</TryButton>
          </li>
        </ul>
        <Menu>
          <img src="./Assets/Menu.svg" alt="" />
          <img src="./Assets/Close.svg" alt="" />
        </Menu>
      </Header>

      <Main>
        <div>
          <h2>
            Ondeck is yor remote <span>conference calling tool</span>
          </h2>
          <p>
            Ondeck is a service that allows uoy to create a beautiful, online,
            and encrypted video calls for you and your remote team
          </p>
          <TryButton>Try for free</TryButton>
          <p>
            5.0 rating based on reviews from:
            <img src="./Assets/Capterra Logo.svg" alt="" />
            <img src="./Assets/AlternativeTo Logo.svg" alt="" />
          </p>
        </div>

        <img src="./Assets/Hero Image.png" alt="hero" />
      </Main>
      <Footer>
        <p>Trusted by 3+ million people at companies like</p>
        <Logos>
          <img src="./Assets/Netflix Logo.svg" alt="" />
          <img src="./Assets/Shopify Logo.svg" alt="" />
          <img src="./Assets/Spotify Logo.svg" alt="" />
          <img src="./Assets/Walmart Logo.svg" alt="" />
        </Logos>
      </Footer>
    </Container>
  );
};

export default Navbar;

const Container = styled.section`
  padding: 60px 80px;
`;

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 130px 0 0;
    align-items: center;
    flex: 0.8;
  }
  ul li {
    list-style: none;
    font-size: 18px;
    font-weight: 500;
  }

  li a {
    text-decoration: none;
    color: black;
  }

  li button {
    padding: 15px;
    border: none;
    outline: none;
    margin-right: 10px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
  }

  li button:nth-child(2) {
  }

  @media (max-width: 480px) {
    ul {
      display: none;
    }
  }
`;

const Menu = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;

const TryButton = styled.button`
  padding: 15px;
  border: none;
  outline: none;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #133416;
  color: #fff;
`;

const Main = styled.main`
  margin-top: 60px;
  display: flex;

  div {
    padding: 0 60px 0 0;
  }

  h2 {
    font-size: 84px;
    font-weight: 600;
    line-height: 7rem;

    span {
      color: #f7b300;
    }
  }

  p {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 20px;
    font-weight: 600;
  }
  img {
    width: 22rem;
  }

  button {
    margin-top: 20px;
  }

  div p img {
    width: 1.5rem;
    margin-right: 5px;
  }

  @media (max-width: 480px) {
    img {
      display: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.1rem;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;
