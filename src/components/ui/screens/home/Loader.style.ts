import styled from "styled-components/native";
import { COLOR_BLACK, COLOR_GRAY } from "../../../../utils/colors/colors";

export const Container = styled.View`
  align-items: center;
`;

export const ActivityContainer = styled.View`
  justify-content: center;
  flex: 1;
  margin-top: 50%;
`;

export const Activity = styled.ActivityIndicator`
  color: ${COLOR_GRAY};
`;

export const TextLoading = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  color: ${COLOR_BLACK};
`;
