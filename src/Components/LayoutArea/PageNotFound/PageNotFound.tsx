import "./PageNotFound.css";
import pageNotFound404 from "../../../Assets/Images/404-not-found.jpg"

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
            <h1>404</h1>
            <h3>Not Found</h3>
            <p>The resource requested could not be found on this site!</p>
            <img src={pageNotFound404} />
        </div>
    );
}

export default PageNotFound;
