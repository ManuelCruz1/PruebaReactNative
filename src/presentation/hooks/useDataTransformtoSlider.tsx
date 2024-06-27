import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Flight } from "../../domain/entities/flight";

interface Props {
  flightData: Flight;
}

const useDataTransformtoSlider = ({ flightData }: Props) => {
  const [departureTime, setDepartureTime] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(0);

  const { flightSelected, isLoading } = useSelector(
    (state) => state.flightData
  );

  useEffect(() => {
    let temporalFlightselected;
    if (flightData) {
      temporalFlightselected = flightData;
    } else {
      temporalFlightselected = flightSelected;
    }
    setDepartureTime(
      moment(temporalFlightselected.estimatedDepartureTime).format("h:mm")
    );
    setArrivalTime(
      moment(temporalFlightselected.estimatedArrivalTime).format("h:mm")
    );
    setOrigin(temporalFlightselected.departureAirport);
    setDestination(temporalFlightselected.arrivalAirport);
    setDuration(
      Math.floor(temporalFlightselected.totalFlightTimeInMinutes / 60) +
        "h" +
        (temporalFlightselected.totalFlightTimeInMinutes % 60) +
        "m"
    );

    /*aqui me base en casos ya que no cuento con estatus para saber
     el tiempo de vuelo para el porcentaje del slider*/

    switch (temporalFlightselected.status) {
      case "ON_TIME" || "DELAYED":
        setPercentage(0);
        break;
      case "ARRIVED":
        setPercentage(100);
        break;
      case "IN_THE_AIR":
        setPercentage(80);
        break;
      default:
        setPercentage(0);
        break;
    }
  }, [flightData]);

  return {
    isLoading,
    departureTime,
    arrivalTime,
    origin,
    destination,
    duration,
    percentage,
  };
};

export default useDataTransformtoSlider;
