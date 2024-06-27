import { ContainerStyle, Scroll } from "./Container.style";
interface Props {
  children?: JSX.Element[];
}

const Container = ({ children }: Props): JSX.Element => {
  return (
    <Scroll showsVerticalScrollIndicator={false}>
      <ContainerStyle>{children}</ContainerStyle>
    </Scroll>
  );
};

export default Container;
