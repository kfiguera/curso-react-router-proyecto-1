import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Menu} from "./components/Menu";
import {HomePage} from "./pages/HomePage";
import {BlogPage} from "./pages/BlogPage";
import {ProfilePage} from "./pages/ProfilePage";
import {BlogPost} from "./components/BlogPost";
import {LoginPage} from "./pages/LoginPage";
import {LogoutPage} from "./pages/LogoutPage";
import {AuthProvider} from "./components/auth/auth";

function App() {
    return (
        <HashRouter>
            <AuthProvider>
                <Menu/>
                <Routes>
                    <Route path='*' element={<p>Not Found</p>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/blog' element={<BlogPage/>}>
                        <Route path=':slug' element={<BlogPost/>}/>
                    </Route>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/logout' element={<LogoutPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                </Routes>
            </AuthProvider>
        </HashRouter>
    )
}

export default App
