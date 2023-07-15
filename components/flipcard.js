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
                <h2 className='left'>
                    <div>
                        <Image
                            /*src={logo}*/
                            src="/images/h2s_profile.jpeg"
                            className={flipcardStyles.logo}
                            height={75}
                            width={75}
                            alt="logo"
                        />
                    </div>
                    <div>
                        <Link href="https://www.eng.mcmaster.ca/ece/">MCMASTER UNIVERSITY</Link>

                        Computer Engineering Student
                    </div>
                </h2>
                <div className='right'>
                    <h3>{date}</h3>
                </div>

            </div>
        </div>
    );

}