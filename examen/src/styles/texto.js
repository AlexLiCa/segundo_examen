import styled from "styled-components";

const Texto = styled.p`
    color: ${props => props.color ? props.color : "black" };
    text-align: ${props => props.alinear ? props.alinear : "center"};
    font-size: ${props => props.tamaño ? props.tamaño : "2rem"};
    font-weight: ${props => props.negritas ? props.negritas : "normal"};
    font-style: ${props => props.italicas ? props.italicas : "normal"};
`
export default Texto;