import Link from 'next/link';
import sidebarStyles from './sidebar.module.css'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';


export default function SideBar() {
    return (
        <div>
            <nav className={sidebarStyles.sidebarcontainer}>
                <Link href="/"><Image
                    src="/images/h2s_profile.jpeg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt=""
                /></Link>
                <Link href="/about">about</Link>
                <Link href="/experience">experience</Link>
                <Link href="/projects">projects</Link>
                <Link href="/interests">interests</Link>
            </nav>
        </div>
    )
}