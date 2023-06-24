import Link from 'next/link';
import sidebarStyles from './sidebar.module.css'
import Image from 'next/image';


export default function SideBar() {
    return (
        <nav className={sidebarStyles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <Image
                            priority
                            src="/images/h2s_profile.jpeg"
                            className={sidebarStyles.pfp}
                            height={200}
                            width={200}
                            alt="pfp"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/experience">experience</Link>
                </li>
                <li>
                    <Link href="/projects">projects</Link>
                </li>
                <li>
                    <Link href="/interests">interests</Link>
                </li>

            </ul>
        </nav>
    )
}