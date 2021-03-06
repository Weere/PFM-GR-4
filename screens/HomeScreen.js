import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { SliderBox } from "react-native-image-slider-box";
//import SlideshowTest from '../components/ImageSlider';
//import Onboarding from '../components/onboarding';

const HomeScreen = (props) => {
  const images = [
    require("../assets/photes/first.jpg"),
    require("../assets/photes/one.jpg"),
    // "https://placeimg.com/640/480/any",
    require("../assets/photes/two.jpg"),
    require("../assets/photes/three.jpg"),
    require("../assets/photes/four.jpg"),
    require("../assets/photes/last.jpg"),
  ];

  const pieData = [
    {
      name: "%  Shopping",
      population: 21,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "%  Savings",
      population: 9,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "%  Bills",
      population: 12,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "%  Transport",
      population: 8,
      color: "blue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "%  Others",
      population: 21,
      color: "purple",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "%  Remaining",
      population: 29,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const status = "Okay";
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inspiration}>
          {/* <Text>Inspirational messages</Text> */}
          {/* <Onboarding /> */}
          <SliderBox
            images={images}
            sliderBoxHeight={255}
            sliderBoxWidth="95%"
            imageComponent={Image}
            inactiveDotColor="#90A4AE"
            dotColor="#FFEE58"
            paginationBoxVerticalPadding={20}
            autoplay={true}
            circleLoop
            borderRadius={14}
            //resizeMethod={'resize'}
            //resizeMode={'cover'}
            //imageComponentStyle={{borderRadius: 15, width: '100%'}}
            imageLoadingColor="#2196F3"
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 10,
              padding: 0,
              margin: 0,
            }}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={styles.fields}>
          <Text style={styles.title}>Hey User,</Text>
          <Text style={styles.text}>This is your current standings</Text>
          <View style={styles.statuss}>
            <Text style={styles.title}>STATUS: </Text>
            <Text style={styles.title}>{status}</Text>
          </View>
        </View>
        <View>
          <PieChart
            data={pieData}
            width={350}
            height={220}
            chartConfig={{
              // backgroundColor: '#E26A00',
              // backgroundGradientFrom: '#FB8C00',
              // backgroundGradientTo: '#FFA726',
              // decimalPlaces: 2, //optional, defaults to 2dp
              color: (opacity = 1) => `rgba(225, 225, 225, ${opacity})`,
              style: {
                borderRadius: 6,
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft={8}
            absolute
            //radius={100}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inspiration: {
    shadowColor: "black",
    shadowOpacity: 0.36,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 18,
    elevation: 5,
    borderRadius: 15,
    // backgroundColor: 'white',
    height: 255,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    //flex: 1
  },
  fields: {
    margin: 10,
    //justifyContent: 'center',
    alignItems: "center",
  },
  statuss: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    paddingBottom: 5,
    fontSize: 15,
  },
  title: {
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },
});

export default HomeScreen;
