import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

const SkeletonLoader = ({ loading }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(animation, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    } else {
      animation.stopAnimation();
    }
  }, [loading]);

  const color1 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#ccc", "#eee", "#ccc"],
  });

  const color2 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#eee", "#ccc", "#eee"],
  });

  const gradientStyle = {
    ...styles.gradient,
    backgroundColor: "transparent",
    backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={gradientStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  gradient: {
    width: 200,
    height: 20,
    borderRadius: 10,
  },
});

export default SkeletonLoader;
