import { styled } from "@mui/system";
import { Formik } from "formik";
import { LoginInterface } from "../../utils/interfaces";

import TextField from "@mui/joy/TextField";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


const FormEl = styled("form")(
  () => `
display:flex;
flex-direction:column;
`
);

const FieldEl = styled("div")(
  () => `
display:flex;
flex-direction:column;
margin:10px 0px 0px 0px;
align-items:center;

`
);

const InputEl = styled(TextField)(
  () => `
border-radius:5px;
width:90%;
height:45px;
padding:0px 10px;
div{
background:#eeeeee!important;
}
.css-1mzzvl2-JoyInput-root{
--Input-focusedThickness:0px;
}

`
);

const ErrorEl = styled("span")(
  () => `
color:red;
display:flex;
margin-top:20px;
width:100%;
margin-left:35px;
font-size:0.9rem`
);
const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values: LoginInterface) => {
          const errors: LoginInterface = { email: "", password: "" };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <FormEl onSubmit={handleSubmit}>
            <FieldEl>
              <InputEl
                type="email"
                name="email"
                startDecorator={<AiOutlineMail />}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                color="danger"
                label="Email*"
                placeholder="enter your email"
                variant="solid"
                fullWidth
              />
              <ErrorEl>{errors.email && touched.email && errors.email}</ErrorEl>
            </FieldEl>

            <FieldEl>
              <InputEl
                type="text"
                name="password"
                startDecorator={<RiLockPasswordLine />}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                color="danger"
                label="password*"
                placeholder="enter your password"
                variant="solid"
                fullWidth
              />

              <ErrorEl>
                {errors.password && touched.password && errors.password}
              </ErrorEl>
            </FieldEl>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </FormEl>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
