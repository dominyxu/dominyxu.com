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
                            src="/pfp.jpeg"
                            className={sidebarStyles.pfp}
                            height={175}
                            width={175}
                            alt="pfp"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/experience" data-fill-text="experience">experience</Link>
                </li>
                <li>
                    <Link href="/projects" data-fill-text="projects">projects</Link>
                </li>
                <li>
                    <Link href="/interests" data-fill-text="interests">interests</Link>
                </li>

            </ul>
        </nav>
    )
}