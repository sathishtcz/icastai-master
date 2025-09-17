import Main from "../core/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactpage from "../component/Contactpage/Contactpage";
import Papersubpage from "../component/Papersubpage/Papersubpage";
import Keydatepage from "../component/Keydatepage/Keydatepage";
import Conferencepage from "../component/Conferencepage/Conferencepage";
import Editorialpage from "../component/Editorialpage/Editorialpage";
import Scopepage from "../component/Scopepage/Scopepage";
import Aboutpage from "../component/Aboutpage/Aboutpage";
import Home from "../component/Home/Home";
import Committeepage from "../component/Committeepage/Committeepage";
import Scrolltotop from "./scrolltotop";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Scrolltotop />
            <Routes>
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/scope" element={<Scopepage />} />
                    <Route path="/editorial-board" element={<Editorialpage />} />
                    {/* <Route path="/organizing-committee" element={<Organizingpage />} /> */}
                    <Route path="/organizing-committee"  element={<Committeepage />} />
                    <Route path="/key-dates" element={<Keydatepage />} />
                    <Route path="/conference-tracks" element={<Conferencepage />} />
                    <Route path="/contactus" element={<Contactpage />} />
                    <Route path="/paper-submission" element={<Papersubpage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}