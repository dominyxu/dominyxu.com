import flipcardStyles from './flipcard.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Flipcard({ logo, role, location, date, content, onClick }) {
    return (
        <div className={flipcardStyles.card} onClick={onClick}>
            <div className={flipcardStyles.back}>
                {/* {content} */}
                <div>
                    <>
                        <br></br>
                        <ul>
                            <li><strong>tools:</strong> Python NLP (TensorFlow, spaCy, regex, HuggingFace Transformers), Python data processing (pandas, camelot) KPMG Ignite AI Platform, Jupyter Notebook, Power BI</li>
                            <li><strong>responsiblities:</strong> NLP project to process SOC reports, Power BI dashboard for compliance tracking
                            </li>
                        </ul>
                        <br></br>
                    </>
                </div>

            </div>
            <div className={flipcardStyles.front}>
                <h2 className={flipcardStyles.left}>
                    <div>
                        <Image
                            /*src={logo}*/
                            src="/images/mcmaster.png"
                            className={flipcardStyles.logo}
                            height={75}
                            width={75}
                            alt="logo"
                        />
                    </div>
                    <div className={flipcardStyles.info}>
                        <div>
                            <Link href="https://www.eng.mcmaster.ca/ece/">MCMASTER UNIVERSITY</Link>
                            <br></br>
                        </div>
                        {/*{role}*/}
                        computer engineering student
                    </div>
                </h2>
                <div className={flipcardStyles.right}>
                    {/*
                    <p>{location}</p>
                    <h3>{date}</h3> 
                    */}
                    <p>Hamilton, ON</p>
                    <p>05/25</p>
                </div>

            </div>
        </div>
    );

}