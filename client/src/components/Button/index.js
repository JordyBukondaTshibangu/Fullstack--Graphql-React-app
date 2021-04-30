import { ButtonComponent } from './ButtonElement'

const Button = ({ type, text, click }) =>  <ButtonComponent type={type} onClick={click}>{text}</ButtonComponent>

export default Button
