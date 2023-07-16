import flipcardStyles from './flipcard.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Flipcard({ logo, role, location, date, content, onClick }) {
    return (
        <div className={flipcardStyles.card} onClick={onClick}>
            <div className={flipcardStyles.back}>
                {content}
            </div>
            <div className={flipcardStyles.front}>
                <h2 className={flipcardStyles.left}>
                    <div>
                        <Image
                            /*src={logo}*/
                            src="/images/mcmaster.png"
                            className={flipcardStyles.logo}
                            height={100}
                            width={100}
                            alt="logo"
                        />
                    </div>
                    <div className={flipcardStyles.info}>
                        <div>
                        <Link href="https://www.eng.mcmaster.ca/ece/">MCMASTER UNIVERSITY</Link>
                        <br></br>
                        </div>
                        
                        computer engineering student
                    </div>
                </h2>
                <div className={flipcardStyles.right}>
                    <h3>{date}</h3>
                </div>

            </div>
        </div>
    );

}