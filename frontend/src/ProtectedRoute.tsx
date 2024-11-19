import {Navigate, Outlet} from "react-router-dom";

type Props = {
    user: string | null | undefined
}

function ProtectedRoute(props: Props) {
    if (props.user === undefined) {
        return <Navigate to={"/"}/>
    } else {
        return <Outlet/>
    }
}

export default ProtectedRoute;