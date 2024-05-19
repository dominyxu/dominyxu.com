import accordianStyles from './accordian.module.css'
import Link from 'next/link';
import Image from 'next/image';


export default function Accordian({ logo, role, company, companyLink, date, content, onClick }) {
    return (
        <>
            <div className={accordianStyles.accordianContainer}>
                <div className={accordianStyles.accordianFace}>
                    <div className={accordianStyles.accordianLeft}>
                        <div>
                            <Image
                                src={logo}
                                // src="/mcmaster.png"
                                className={accordianStyles.logo}
                                height={65}
                                width={65}
                                alt="logo"
                            />
                        </div>
                        <div className={accordianStyles.info}>
                            <div className={accordianStyles.company}>
                                <Link href={`${companyLink}`}>{company}</Link>
                            </div>
                            <p>{role}</p>
                        </div>
                    </div>
                    <div className={accordianStyles.accordianRight}>
                        <p>{date}</p>
                    </div>

                </div>
                <div className={accordianStyles.accordianContent}>
                    <p className={accordianStyles.accordianContentText}>test</p>
                </div>
            </div>
        </>
    );
}