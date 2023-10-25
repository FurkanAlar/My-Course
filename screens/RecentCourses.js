import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Couses from "../components/Couses";
import { CoursesContext } from "../store/coursesContext";
import { getLastWeek } from "../helper/date";
import { getCourses } from "../helper/https";
import LoadingSpinner from "../components/LoadingSpinner";

const RecentCourses = () => {
  const coursesContext = useContext(CoursesContext);

  const [fetchedCourses, setSetchedCourses] = useState([]);

  const [isFetching, setİsFetching] = useState(true);

  useEffect(() => {
    async function takeCourses() {
      const courses = await getCourses();
      coursesContext.setCourse(courses);

      // setSetchedCourses(courses);
    }
    takeCourses();
  }, []);

  const recentCourses = coursesContext.courses.filter((course) => {
    const today = new Date();
    const dateLastWeek = getLastWeek(today, 7);

    return course.date >= dateLastWeek && course.date <= today;
  });

  return (
    <Couses
      courses={recentCourses}
      coursesPeriod="Son 1 Hafta"
      nullText="Yakın zamanda Herhangi Bir Kursa Kayıtlı Olmadınız!!!"
    />
  );
};

export default RecentCourses;

const styles = StyleSheet.create({});
