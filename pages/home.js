import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/c1d5331308.js" crossorigin="anonymous"></script>
            </Head>
            <div className='main'>
                <div className='bio'>
                    <h1>Hey! I’m Dominy</h1>
                    <br></br>
                    <p>
                        I am a third year computer engineering student based in Toronto studying @McMasterU. I’m interested in cloud technologies, machine learning and fintech with the ultimate goal of creating better products through software.
                        <br></br>

                        Feel free to reach out to me at <a href='mailto:xudominy32@gmail.com'>xudominy32@gmail.com</a> and take a look at my resume!
                    </p>
                </div>
                <div className='socials'>
                    <ul>
                        <li><Link href='https://github.com/dominyxu'><i className="fa-brands fa-square-github">hi</i></Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
}