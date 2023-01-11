import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";  
import Home from "../container/Home";
import About from "../container/About";
import Contact from "../container/Contact";
import Profile from "../container/Profile";
import { useEffect,useState } from "react";
import { Button,Result } from "antd";
import Test from "../container/test";

function AppRouter(){
    const [user , setUser]= useState(true);

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/about"
            element={user ? <About />: <Navigate to={"/"} />} />
            <Route path="/contact"
            element={user ? <Contact /> : <Navigate to={"/"}/>} />
            <Route path="/profile/:username"
            element={user ? <Profile />: <Navigate to={"/"}/>} />
            <Route
            path="*"
            element={
                <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button>back Home</Button>}
                />
            }
            />
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;