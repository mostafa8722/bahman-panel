import { styled } from "@mui/system";
import { Formik } from "formik";
import { LoginInterface } from "../../utils/interfaces";

import TextField from "@mui/joy/TextField";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const FormEl = styled("form")(
  () => `
display:flex;
flex-direction:column;
align-items:center;
`
);

const FieldEl = styled("div")(
  () => `
display:flex;
flex-direction:column;
margin:10px 0px 0px 0px;
align-items:center;
width:100%;

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
margin-top:30px;
width:100%;
margin-left:35px;
font-size:0.9rem`
);

const SubmitButtonEl = styled("button")(() => `
margin-top:30px;
height:40px;
width:90%;
background:#373063;
color:#ffffff;
display:flex;
justify-content:center;
align-items:center;
border:none;
border-radius:10px;
cursor:pointer;
`)

const ForgetPasswordEl = styled(Link)(() => `
color:rgba(91, 147, 237, 1);
display:flex;
justify-content:end;
margin-top:10px;
width:90%;

`)

const MoreEl = styled("div")(() => `
display:grid;
grid-template-columns:auto auto;
margin-top:20px;
width:90%;
`)

const RegisterEl = styled(Link)(() => `
color:#ffffff;
display:flex;
justify-content:center;
margin-top:10px;
height:40px;
width:100px;
background:#28a745;
border-radius:10px;
align-items:center;


`)
const LoginGoogleEl = styled("div")(() => `
display:flex;
justify-content:center;
align-items:center;
background:#eeeeee;
border-radius:10px;
cursor:pointer;
`)
const GoogleTextEl = styled("span")(() => `
display:flex;
margin-left:10px;

`)
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
            <ForgetPasswordEl to="/forget-password">forget password</ForgetPasswordEl>
            <SubmitButtonEl type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButtonEl>

            <MoreEl>
              <RegisterEl>register  </RegisterEl>
              <LoginGoogleEl> 
                 <FcGoogle size={25} />
                 <GoogleTextEl>
                  Login By Google
                 </GoogleTextEl>
                
                   </LoginGoogleEl>
            </MoreEl>

          </FormEl>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
