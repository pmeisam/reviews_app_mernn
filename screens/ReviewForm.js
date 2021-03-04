import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object().shape({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      "is-num-1-5",
      "Rating must be a number between 1 and 5",
      (val) => parseInt(val, 10) < 6 && parseInt(val, 10) > 0
    ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View style={{ height: "100%" }}>
            <TextInput
              style={globalStyles.input}
              value={formikProps.values.title}
              placeholder="Reveiw title"
              onChangeText={formikProps.handleChange("title")}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              value={formikProps.values.body}
              style={globalStyles.input}
              placeholder="Reveiw body"
              onChangeText={formikProps.handleChange("body")}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              value={formikProps.values.rating}
              placeholder="Rating 1-5"
              onChangeText={formikProps.handleChange("rating")}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <FlatButton
              text="submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
