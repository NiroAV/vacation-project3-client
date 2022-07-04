import Fade from "../Fade/Fade";
import "./Home.css";

function Home(): JSX.Element {
    const title = `Welcome`
    const text = `What does your dream vacation look like?\n
    Is it a tranquil sandy beach, idly watching the water stretch away to a watercolor sunset?
    Is it a day spent testing your skills on PGA-caliber golf courses? 
    Is it a winding nature trail weaving its way through serene maritime forests?
    It could be your dream vacation finds you on the bow of a yacht, spying dolphins leaping through the surf.`

    return (
        <div className="Home">
         <Fade title={title} text={text}></Fade>
        </div>
    );
}

export default Home;
