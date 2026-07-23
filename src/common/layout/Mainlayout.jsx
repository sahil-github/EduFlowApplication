import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";

function Mainlayout() {
    return (
        <>
            <TopNav />
            <Outlet />

        </>
    )
}

export default Mainlayout;