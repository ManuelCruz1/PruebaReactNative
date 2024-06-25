import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const useDataTransformtoSlider = ({ flightData }) => {
  const { isLoading } = useSelector((state) => state.flightData);
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [percentage, setPercentage] = useState(0);

  const { flightSelected } = useSelector((state) => state.flightData);

  useEffect(() => {
    let temporalFlightselected = {};
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
