import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  width: 100%;
  height: 64px;
  border: 1px solid black;
`;

const Main = styled.header`
  width: 100%;
  flex-grow: 1;
  border: 1px solid black;
`;

const Footer = styled.header`
  width: 100%;
  height: 64px;
  border: 1px solid black;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header>header</Header>
      <Main>{children}</Main>
      <Footer>footer</Footer>
    </Wrapper>
  );
};

export default Layout;
