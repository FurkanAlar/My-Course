import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseItem from "./CourseItem";

const CoursesList = ({ courses }) => {
  function renderCourseItem(itemData) {
    return <CourseItem {...itemData.item} />;
  }
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={renderCourseItem}
    />
  );
};

export default CoursesList;

const styles = StyleSheet.create({});
