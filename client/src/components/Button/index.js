import { ButtonComponent } from './ButtonElement'

const Button = ({ text, click }) =>  <ButtonComponent onClick={click}>{text}</ButtonComponent>

export default Button
