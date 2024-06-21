import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import SliderInformation from "../../components/base/SliderInformation";
import InfoResultContainer from "../../components/ui/screens/results/InfoResultContainer";
import CardInformation from "../../components/ui/screens/results/CardInformation";
import Container from "../../components/ui/screens/results/Container";
import { useSelector, useDispatch } from "react-redux";
import { addFlightSelected, addSearchNumber } from "../../redux/flightSlice";
const ResultNumberScreen = ({ navigation }) => {
  const { searchNumberList, typeToSheach } = useSelector(
    (state) => state.flightData
  );
  const dispatch = useDispatch();

  const changeFavoriteList = (favorite, modifiBool) => {
    let temporalElement = favorite;
    let temporalArray = [];
    let temporalArrayFavorite = [];
    let temporalArrayNoFavorite = [];

    temporalElement = { ...temporalElement, isFavorite: modifiBool };
    if (modifiBool) {
      searchNumberList.map((item, i) => {
        if (i === 0) {
          temporalArray.push(temporalElement);
        }
        if (item !== favorite) {
          temporalArray.push(item);
        } else {
        }
      });
    } else {
      searchNumberList.map((item, i) => {
        if (item === favorite) {
          temporalArrayNoFavorite.push(temporalElement);
        } else {
          temporalArrayFavorite.push(item);
        }
      });
      temporalArray = temporalArrayFavorite.concat(temporalArrayNoFavorite);
    }
    dispatch(addSearchNumber(temporalArray));
  };

  return (
    <MainLayout
      navigation={navigation}
      activeBackIcon={true}
      headerInfo
      typeToSheach={typeToSheach}
    >
      <Container>
        <InfoResultContainer />
        {searchNumberList.map((item, i) => {
          return (
            <CardInformation
              key={i}
              navigation={navigation}
              flightData={item}
              changeFavoriteList={changeFavoriteList}
            >
              <SliderInformation
                timeFlightVisible={true}
                flightData={item}
                onPress={() => {
                  dispatch(addFlightSelected(item));
                }}
              />
            </CardInformation>
          );
        })}
      </Container>
    </MainLayout>
  );
};

export default ResultNumberScreen;
