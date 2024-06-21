import styled from "styled-components";

export const Container = styled.View`
  align-items: center;
`;

export const ActivityContainer = styled.View`
  justify-content: center;
  flex: 1;
  /* flex-direction: row; */
  margin-top: 50%;
`;

export const Activity = styled.ActivityIndicator`
  color: #cccccc;
`;

export const TextLoading = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  color: #000000;
`;
