import { Container } from "./style";

const NormalButton = ({ children, type, ...rest }) => {
    return <Container {...rest}>{children}</Container>;
};

export default NormalButton;
