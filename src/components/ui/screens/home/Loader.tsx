import React from "react";
import {
  Activity,
  ActivityContainer,
  TextLoading,
  Container,
} from "./Loader.style";

const Loader = (): JSX.Element => {
  return (
    <Container>
      <ActivityContainer>
        <Activity size="large" />
      </ActivityContainer>
      <TextLoading>Loading...</TextLoading>
    </Container>
  );
};
export default Loader;
