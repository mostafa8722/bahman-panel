import { styled } from "@mui/system";

import LoginForm from "../components/login/LoginForm";


const SectionEl = styled("section")(() => `
display:flex;
margin:0px auto;
  align-items:cener;
  justify-content:center;
background:#eeeeee;
height:100vh;
`);
const LoginEl = styled("div")(() => `
display:flex;
margin:0px auto;
flex-direction:column;
width:450px;
height: 500px;
margin-top:50px;
background:#ffffff;
border-radius:10px;
`);

const TitleEl = styled("h2")(() => `
padding:30px 20px;
font-size:1.1rem;
text-align:center;
`);








const Login = () => {
    return (
        <>
        <SectionEl>
            <LoginEl>
                <TitleEl>Login to Bahman Shop Panel</TitleEl>
                  <LoginForm />

            </LoginEl>
            </SectionEl>
        </>
    );
};
export default Login;
