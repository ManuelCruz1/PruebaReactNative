import React from "react";
import { SafeAreaView } from "react-native";
import {
  RecipeImageBackground,
  HeaderContainer,
  BackIcon,
  InfoContainer,
  TextInformation,
  DateContainer,
} from "./MainLayout.style";
import { Platform } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";
import moment from "moment";

interface Props {
  children?: any;
  activeBackIcon?: boolean;
  navigation?: any;
  headerInfo?: any;
  backgroundImage?: string;
  typeToSheach?: string;
}

const MainLayout = ({
  children,
  activeBackIcon,
  navigation,
  headerInfo,
  backgroundImage,
  typeToSheach,
}: Props) => {
  const { searchNumberList } = useSelector((state) => state.flightData);
  console.log(Platform.OS);
  return (
    <RecipeImageBackground source={backgroundImage}>
      <SafeAreaView>
        <HeaderContainer $Platform={Platform.OS}>
          {activeBackIcon ? (
            <BackIcon>
              <AntDesign
                name="left"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
              />
            </BackIcon>
          ) : null}
          {headerInfo ? (
            <InfoContainer>
              {typeToSheach === "number" ? (
                <TextInformation bold>
                  {searchNumberList[0].marketingCarrier}{" "}
                  {searchNumberList[0].marketingFlightCode}
                </TextInformation>
              ) : null}
              {typeToSheach === "originDestination" ? (
                <TextInformation bold>
                  {searchNumberList[0].departureAirport}
                  {" -> "}
                  {searchNumberList[0].arrivalAirport}
                </TextInformation>
              ) : null}
              <DateContainer>
                <TextInformation>
                  {moment(searchNumberList[0].estimatedDepartureTime).format(
                    "dddd Do MMM"
                  )}
                </TextInformation>
                <TextInformation
                  link
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  Change
                </TextInformation>
              </DateContainer>
            </InfoContainer>
          ) : null}
        </HeaderContainer>

        {children}
      </SafeAreaView>
    </RecipeImageBackground>
  );
};

export default MainLayout;
