import { ContainerStyle, Scroll } from "./Container.style";

const Container = ({ children }: any) => {
  return (
    <Scroll showsVerticalScrollIndicator={false}>
      <ContainerStyle>{children}</ContainerStyle>
    </Scroll>
  );
};

export default Container;
