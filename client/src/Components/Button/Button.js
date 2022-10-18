import BodyButton from './stylesButton'

const Button = (props) => (
  <BodyButton {...props}>{props.children}</BodyButton>
);

export default Button