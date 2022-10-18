import React from "react";
import { footerColor } from "./colors";
import Icon from './Icon';
import {
  FooterLogo, SocialIcon, FooterContainer, FooterRights,
  FooterWrapper, FooterAddress, FooterColumn, FooterGrid,
} from './styleFooter';
/* data */
import { icons, mainData } from "./footerData";
/* Components */
import { Row, Section } from "../../styles/globalStyles";

const Footer = () => (
  <FooterContainer>
    <Section top="-40px" background={footerColor.wraper}>
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo color={footerColor.text} to="/">
              <SocialIcon src={mainData.img} />{mainData.title}</FooterLogo>
            <FooterAddress color={footerColor.text}>{mainData.location}</FooterAddress>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {icons.map(icon => (<Icon key={icon.id} icon={icon} />))}
            </Row>

          </FooterColumn>
        </FooterGrid>

        <FooterRights color={footerColor.headers}>
          {mainData.subTitle} &copy; {new Date().getFullYear()}
        </FooterRights>
      </FooterWrapper>
    </Section>
  </FooterContainer>
);

export default Footer;