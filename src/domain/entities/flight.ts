export interface Flight {
  status: string;
  boardingTerminal: string;
  marketingCarrier: string;
  departureAirport: string;
  arrivalAirport: string;
  marketingFlightCode: string;
  estimatedDepartureTime: Date;
  estimatedArrivalTime: Date;
  totalFlightTimeInMinutes: number;
  boardingGate: string;
  boardingTime: string;
  arrivalTerminal: string;
  isFavorite: boolean;
}
