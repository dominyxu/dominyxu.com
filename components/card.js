import cardStyles from './card.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ logo, role, company, companyLink, location, date, content, onClick }) {
    return (
        <div className={cardStyles.card} onClick={onClick}>
            <div className={cardStyles.back}>
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
            <div className={cardStyles.front}>
                <div className={cardStyles.left}>
                    <div>
                        <Image
                            src={logo}
                            // src="/mcmaster.png"
                            className={cardStyles.logo}
                            height={75}
                            width={75}
                            alt="logo"
                        />
                    </div>
                    <div className={cardStyles.info}>
                        <div className={cardStyles.company}>
                            
                            {/*MCMASTER UNIVERSITY*/}
                            <Link href={`${companyLink}`}>{company}</Link>
                        </div>
                        <p>{role}</p>
                        {/* computer engineering student */}
                    </div>
                </div>
                <div className={cardStyles.right}>
                    
                    <p>{location}</p>
                    <p>{date}</p> 
                    
                    {/* <p>Hamilton, ON</p>
                    <p>05/25</p> */}
                </div>

            </div>
        </div>
    );

}