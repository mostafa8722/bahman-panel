import react from  "react"
import { Link, Route, Routes,BrowserRouter as Router,NavLink } from "react-router-dom";
import Layout from "./container/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


const App = ()=>{
    return (
        <>
          <Router>
            <Routes>
                <Route path="/dashboard" element={<Layout ><Dashboard />  </Layout>} />
                <Route path="/" element={<Layout ><Login />  </Layout>} />
                <Route path="/login" element={<Layout ><Login />  </Layout>} />
                <Route path="*" element={<Layout ><NotFound />  </Layout>} />
               
             
              
            </Routes>
          </Router>
        </>
    );
}
export default App;