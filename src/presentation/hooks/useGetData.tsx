import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, loading } from "../../redux/flightSlice";
import { getFlights } from "../../actions/flighs/get-flight";

const useGetData = () => {
  const { isLoading } = useSelector((state) => state.flightData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(addList(getFlights()));
    }, 1500);
  }, []);

  return {
    isLoading,
  };
};

export default useGetData;
