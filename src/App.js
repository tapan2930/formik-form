import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "./App.css";
import FormikController from "./components/FormikControls";

function App() {
  const initialValues = {
    name: '',
    email: '',
    dob: null,
    join: null,
    leave: null,
    skills: [{skillName:'', profiency:''}]
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Enter proper email"),
    name: Yup.string().required("Required").max(15, "Must be 15 charaters or less"),
    dob: Yup.date().required("Required").nullable(),
    join: Yup.date().required("Requried").nullable(),
    leave: Yup.date().min(Yup.ref('join'), "Leaving date should be after joining date").required("Required").nullable(),
    skills: Yup.array().of(Yup.object().shape({
      skillName: Yup.string().required("Required"),
      profiency: Yup.string().required("Required")
    }))
  });


  const onSubmit = (values) => console.log(values);

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      > 
        {(formik) => (
          <Form>
            
            <FormikController control="input" type='email' label='Email' name = 'email' />
            <FormikController control="input" type='text' label='Name' name = 'name' />
            <FormikController control="arrayField" type='text' label="Skills:" name="skills" />
            <FormikController control="date" label="Birthday" name="dob" />
            <FormikController control="date" label="Joining date" name="join" />
            <FormikController control="date" label="Leave" name="leave" />
            {
              console.log(formik)
            }
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
