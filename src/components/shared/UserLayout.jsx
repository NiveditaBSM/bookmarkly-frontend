import { Outlet } from "react-router";

const UserLayout = () => {
    return (
        <div className="bg-indigo-600 h-screen">
            <Outlet />
        </div>
    );
};

export default UserLayout;