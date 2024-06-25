import AntDesign from "@expo/vector-icons/AntDesign";

import {
  CardContainer,
  TopContainer,
  Switch,
  SwitchContainer,
  FlightStatus,
  Status,
  BoderDivisor,
  FooderCard,
  FooderCardText,
  DetailsContainer,
} from "./CardInformation.style";
import { useDispatch } from "react-redux";
import { addFlightSelected } from "../../../../redux/flightSlice";
import { useEffect, useState } from "react";
import { COLOR_BLACK, COLOR_GRAY } from "../../../../utils/colors/colors";

const CardInformation = ({
  navigation,
  children,
  flightData,
  changeFavoriteList,
}) => {
  const [enabledSwitch, setEnabledSwitch] = useState(false);
  const toggleSwitch = (flightData) => {
    setEnabledSwitch((previousState) => !previousState);
    changeFavoriteList(flightData, !enabledSwitch);
  };
  // console.log("flightData.isFavorite---", flightData.isFavorite);
  useEffect(() => {
    setEnabledSwitch(flightData.isFavorite);
  }, [flightData]);

  const dispatch = useDispatch();
  return (
    <CardContainer>
      <TopContainer>
        <FlightStatus $statusColor={flightData.status}>
          <Status>{flightData.status}</Status>
        </FlightStatus>
        <SwitchContainer>
          <Switch
            trackColor={{ false: "#767577", true: COLOR_GRAY }}
            thumbColor={enabledSwitch ? COLOR_BLACK : COLOR_GRAY}
            onValueChange={() => {
              toggleSwitch(flightData);
            }}
            value={enabledSwitch}
          />
        </SwitchContainer>
      </TopContainer>
      {children}

      <BoderDivisor />
      <FooderCard>
        <FooderCardText numberFlight>
          {flightData.marketingCarrier} {flightData.marketingFlightCode}
        </FooderCardText>
        <DetailsContainer
          onPress={() => {
            {
              dispatch(addFlightSelected(flightData));
              navigation.navigate("DetailsScreen");
            }
          }}
        >
          <FooderCardText link>Details</FooderCardText>
          <AntDesign name="right" size={12} color="black" />
        </DetailsContainer>
      </FooderCard>
    </CardContainer>
  );
};

export default CardInformation;
