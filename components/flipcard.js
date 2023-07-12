import flipcardStyles from './flipcard.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Flipcard({ logo, role, location, date, content, onClick }) {
    return (
        <div className={flipcardStyles.card} onClick={onClick}>
            <div className={flipcardStyles.back}>
                back
            </div>
            <div className={flipcardStyles.front}>
                <div className='left'>
                <h3><Image
                        priority
                        src={logo}
                        className={flipcardStyles.logo}
                        height={175}
                        width={175}
                        alt="logo"
                    />
                    <Link href="https://www.eng.mcmaster.ca/ece/">McMaster University</Link>
                    Computer Engineering Student</h3>
                </div>
                <div className='right'>
<h3>{date}</h3>
                </div>
                
            </div>
        </div>
    );

}