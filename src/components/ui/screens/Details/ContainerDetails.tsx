import React, { PropsWithChildren } from "react";
import MainLayout from "../../../../layouts/MainLayout";
import {
  ColumContainer,
  DetailsContainer,
  Scroll,
} from "./ContainerDetails.style";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../../../../presentation/navigator/StackNavigator";

interface Props {
  children?: JSX.Element[];
  navigation?: NavigationProp<RootStackParams>;
}

const ContainerDetails = ({ children, navigation }: Props): JSX.Element => {
  return (
    <MainLayout
      activeBackIcon={true}
      navigation={navigation}
      backgroundImage={require("../../../../assets/images/imageDetails.png")}
    >
      <ColumContainer>
        <DetailsContainer>
          <Scroll>{children}</Scroll>
        </DetailsContainer>
      </ColumContainer>
    </MainLayout>
  );
};
export default ContainerDetails;
