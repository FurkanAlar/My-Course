import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Couses from "../components/Couses";
import { CoursesContext } from "../store/coursesContext";

const AllCourses = () => {
  const coursesContext = useContext(CoursesContext);
  return (
    <Couses
      courses={coursesContext.courses}
      coursesPeriod="Hepsi"
      nullText="Herhangi Bir Kursa Kayıtlı Değilsiniz!!!"
    />
  );
};

export default AllCourses;

const styles = StyleSheet.create({});
