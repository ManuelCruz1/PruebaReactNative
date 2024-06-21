import React from "react";
import {
  ContainerInformation,
  ContainerSimpleColum,
  ContainerSimpleRow,
  DetailsTitle,
  FlighStatus,
  FlightContainer,
  FlightDetailsContainer,
  Icon,
  InformationCard,
} from "./FlightInformation.style";
import moment from "moment";

interface Props {
  flightSelected?: any;
}

const FlightInformation = ({ flightSelected }: Props) => {
  return (
    <FlightContainer>
      <DetailsTitle>Flight details</DetailsTitle>
      <FlightDetailsContainer>
        <ContainerInformation>
          <ContainerSimpleRow>
            <Icon source={require("../../../../assets/icons/Despegue.png")} />
            <FlighStatus bold>Departure</FlighStatus>
          </ContainerSimpleRow>
          <FlighStatus blurred>Ciudad de México - AICM</FlighStatus>
        </ContainerInformation>
        <InformationCard>
          <ContainerSimpleColum>
            <FlighStatus>Terminal</FlighStatus>
            <FlighStatus bold>{flightSelected.boardingTerminal}</FlighStatus>
          </ContainerSimpleColum>
          <ContainerSimpleColum>
            <FlighStatus>Gate</FlighStatus>
            <FlighStatus bold>{flightSelected.boardingGate}</FlighStatus>
          </ContainerSimpleColum>
          <ContainerSimpleColum>
            <FlighStatus>Boarding</FlighStatus>
            <FlighStatus bold>
              {moment(flightSelected.estimatedDepartureTime).format("h:mm")}
            </FlighStatus>
          </ContainerSimpleColum>
        </InformationCard>

        <ContainerInformation>
          <ContainerSimpleRow>
            <Icon source={require("../../../../assets/icons/Aterrizaje.png")} />
            <FlighStatus bold>Arrival</FlighStatus>
          </ContainerSimpleRow>
          <FlighStatus blurred>
            Cancún - Terminal {flightSelected.arrivalTerminal}
          </FlighStatus>
        </ContainerInformation>
        <InformationCard>
          <ContainerSimpleColum>
            <FlighStatus>Terminal</FlighStatus>
            <FlighStatus bold>{flightSelected.arrivalTerminal}</FlighStatus>
          </ContainerSimpleColum>
          <ContainerSimpleColum>
            <FlighStatus>Est. Landing</FlighStatus>
            <FlighStatus bold>
              {moment(flightSelected.estimatedArrivalTime).format("h:mm")}
            </FlighStatus>
          </ContainerSimpleColum>
        </InformationCard>
      </FlightDetailsContainer>
    </FlightContainer>
  );
};
export default FlightInformation;
