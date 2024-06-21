import { useSelector } from "react-redux";
import {
  InfoResultContainer,
  DestinationTitle,
} from "./InfoResultContainer.style";

const ResultBart = ({}) => {
  const { searchNumberList } = useSelector((state) => state.flightData);

  return (
    <InfoResultContainer>
      <DestinationTitle $textBlack={true}>
        {searchNumberList[0].departureAirport} to{" "}
        {searchNumberList[0].arrivalAirport}
      </DestinationTitle>
      <DestinationTitle>{searchNumberList.length} results</DestinationTitle>
    </InfoResultContainer>
  );
};

export default ResultBart;
