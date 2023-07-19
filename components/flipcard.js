import flipcardStyles from './flipcard.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Flipcard({ logo, role, company, companyLink, location, date, content, onClick }) {
    return (
        <div className={flipcardStyles.card} onClick={onClick}>
            <div className={flipcardStyles.back}>
                {content}
                {/* <div>
                    <ul>
                        <li>Led development on an Electric Logging Device prototype using React and Tailwind CSS to the technical standard
                            from the CCMTA.</li>
                        <li>Designed and implemented UI changes to company website.</li>
                        <li>Analyzed and oversaw technical fleet management data for City of Richmond Hill vehicles.</li>

                    </ul>
                </div> */}

            </div>
            <div className={flipcardStyles.front}>
                <h2 className={flipcardStyles.left}>
                    <div>
                        <Image
                            src={logo}
                            // src="/images/mcmaster.png"
                            className={flipcardStyles.logo}
                            height={75}
                            width={75}
                            alt="logo"
                        />
                    </div>
                    <div className={flipcardStyles.info}>
                        <div>
                            
                            {/*MCMASTER UNIVERSITY*/}
                            <Link href={`${companyLink}`}>{company}</Link>
                            <br></br>
                        </div>
                        {role}
                        {/* computer engineering student */}
                    </div>
                </h2>
                <div className={flipcardStyles.right}>
                    
                    <p>{location}</p>
                    <p>{date}</p> 
                    
                    {/* <p>Hamilton, ON</p>
                    <p>05/25</p> */}
                </div>

            </div>
        </div>
    );

}