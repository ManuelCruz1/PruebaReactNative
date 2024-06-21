import React from "react";
import MainLayout from "../../../../layouts/MainLayout";
import {
  ColumContainer,
  DetailsContainer,
  Scroll,
} from "./ContainerDetails.style";

const ContainerDetails = ({ children, navigation }) => {
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
