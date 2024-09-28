// Footer.js
import styled from "@emotion/styled";
import { Typography } from "antd";
import React from "react";
import logo from "../assets/Logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
const { Title } = Typography;

const TypoHeader = styled(Title)`
  color: white !important;
  margin: 0.5em 0 !important;
  text-align: left;
  font-weight: 800 !important;
  font-size: 18px !important;
`;

const StyledAlign = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    display: block;
  }
`;

const FooterText = styled.p`
  text-align: left;
  margin: 0px;
  @media (max-width: 768px) {
    margin: 8px 0px;
  }
`;

const StyledFooter = styled.div`
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
  clear: both;
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="logo">
        <img src={logo} alt="C cinemas" className="logo-img" />
      </div>

      <StyledAlign>
        <div>
          <TypoHeader level={5}>STAY IN TOUCH</TypoHeader>

          <div>
            <img src={facebook} alt="facebook" className="footer-img" />
            <img src={twitter} alt="twitter" className="footer-img" />
            <img src={instagram} alt="instagram" className="footer-img" />
            <img src={youtube} alt="youtube" className="footer-img" />
          </div>
        </div>
        <FooterText>
          &copy; 2024 Cinema Ticket Booking. <br /> Powered by Central Team.
        </FooterText>
      </StyledAlign>
    </StyledFooter>
  );
}

export default Footer;
