import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CoursesSummary from "./CoursesSummary";
import CoursesList from "./CoursesList";

const Couses = ({ coursesPeriod, courses, nullText }) => {
  let content = <Text style={styles.alert}> {nullText} </Text>;

  if (courses.length > 0) {
    content = <CoursesList courses={courses} />;
  }
  return (
    <View style={styles.container}>
      <CoursesSummary courses={courses} periodName={coursesPeriod} />
      {content}
    </View>
  );
};

export default Couses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  alert: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30,
  },
});
