import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Menu} from "./components/Menu";
import {HomePage} from "./pages/HomePage";
import {BlogPage} from "./pages/BlogPage";
import {ProfilePage} from "./pages/ProfilePage";
import {BlogPost} from "./components/BlogPost";

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path='*' element={<p>Not Found</p>} />
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/blog' element={<BlogPage/>}>
                        <Route path=':slug' element={<BlogPost/>}/>
                    </Route>
                    <Route path='/profile' element={<ProfilePage/>}/>
                </Routes>
            </HashRouter>
        </React.Fragment>
    )
}

export default App
