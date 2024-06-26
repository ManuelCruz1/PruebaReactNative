import React from "react";
import MainLayout from "../../../../layouts/MainLayout";
import {
  DefaultContainer,
  ContainerNumber,
  FlighStatus,
  StatusContainer,
  BoderDivisor,
} from "./HeaderCard.style";
import moment from "moment";
import { Flight } from "../../../../domain/entities/flight";

interface Props {
  flightSelected?: Flight;
}

const HeaderCard = ({ flightSelected }: Props): JSX.Element => {
  return (
    <>
      <DefaultContainer>
        <ContainerNumber>
          <DefaultContainer numberContainer>
            <FlighStatus grayText>
              {flightSelected.marketingCarrier}
            </FlighStatus>
            <FlighStatus flightNumber>
              {flightSelected.marketingFlightCode}
            </FlighStatus>
          </DefaultContainer>
          <FlighStatus>
            {moment(flightSelected.estimatedDepartureTime).format(
              "dddd Do MMM"
            )}
          </FlighStatus>
        </ContainerNumber>
        <StatusContainer statusColor={flightSelected.status}>
          <FlighStatus status>{flightSelected.status}</FlighStatus>
        </StatusContainer>
      </DefaultContainer>
      <BoderDivisor />
    </>
  );
};
export default HeaderCard;
