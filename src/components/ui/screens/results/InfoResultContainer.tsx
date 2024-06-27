import {
  InfoResultContainer,
  DestinationTitle,
} from "./InfoResultContainer.style";
import { Flight } from "../../../../domain/entities/flight";

interface Props {
  searchNumberList: Flight[];
}

const ResultBart = ({ searchNumberList }: Props): JSX.Element => {
  return (
    <InfoResultContainer>
      <DestinationTitle textBlack={true}>
        {searchNumberList[0].departureAirport} to{" "}
        {searchNumberList[0].arrivalAirport}
      </DestinationTitle>
      <DestinationTitle>{searchNumberList.length} results</DestinationTitle>
    </InfoResultContainer>
  );
};

export default ResultBart;
