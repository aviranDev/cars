import { FooterSocialIcon } from './styleFooter';
import { footerColor } from './colors'

const Icon = (props) => (
  <FooterSocialIcon
    color={footerColor.text}
    hover={footerColor.hover}
    href={props.icon.href}
    target="_blank"
  >
    {props.icon.tag}
  </FooterSocialIcon>
);

export default Icon