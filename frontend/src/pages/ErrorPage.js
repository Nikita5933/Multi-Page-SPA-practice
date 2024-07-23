import Navigation from "../components/Navigation";
import Error from "../components/ErrorModule";
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError()

let title = 'An error occurred';
let message = 'Something went wrong';

if (error.status === 500) {
    message = JSON.parse(error.data).message;
}

if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resources';
}


    return (
        <>
            <Navigation />
            <Error title={title}><p>{message}</p></Error>
        </>
    );
}