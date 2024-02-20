import Link from "next/link";
import { useEffect } from "react";
import homeStyles from '../styles/homePage.module.css'

export default function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/c1d5331308.js";
        script.crossOrigin = "anonymous";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="main">
                <div className="bio">
                    <h1>dominy xu</h1>
                    <br></br>
                    <p>
                        i'm a third year computer engineering student studying <a href="https://www.eng.mcmaster.ca/ece/">@mcmasteru</a> seeking to take on lifes next challenge.
                        <br></br>
                        <br></br>
                        incoming swe/fwe intern <a href="https://www.amd.com/en.html">@amd</a>. 
                        
                        <br></br>
                        prev: swe intern <a href="https://www.health.gov.on.ca/en/">@ministry of health</a>, <a href="http://www.trigon.ca/">@trigon</a>.
                        
                        <br></br>
                        <br></br>

                        grab a copy of my resume

                        <br></br>
                        <br></br>
                        listen along!
                    </p>
                </div>
                <br></br>
                <div className={homeStyles.socials}>
                    <ul>
                        <li>
                            <Link href="https://github.com/dominyxu">
                                <i className="fab fa-github"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/dominyxu/">
                            <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
