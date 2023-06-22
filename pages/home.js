import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import homeStyles from '../styles/home.module.css'

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
                    <h1>hey! i’m dominy</h1>
                    <br></br>
                    <p>
                        I am a third year computer engineering student based in Toronto studying @McMasterU. I’m interested in cloud technologies, machine learning and fintech with the ultimate goal of creating better products through software.
                        <br></br>
                        <br></br>

                        Feel free to reach out to me at <Link href="mailto:xudominy32@gmail.com">xudominy32@gmail.com</Link> and take a look at my resume!
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
