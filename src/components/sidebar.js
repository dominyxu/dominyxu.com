import Link from 'next/link';
import sidebarStyles from './sidebar.module.css'
import Image from 'next/image';


export default function SideBar() {
    return (
        <div>
            <nav>
                    <Link href="/">
                        <Image
                            priority
                            src="/images/h2s_profile.jpeg"
                            className={sidebarStyles.pfp}
                            height={144}
                            width={144}
                            alt="pfp"
                        />
                    </Link>
                    <br></br>
                    <Link href="/experience">experience</Link>                    <br></br>
                    <Link href="/projects">projects</Link>                    
                    <br></br>
                    <Link href="/interests">interests</Link>                    
                    <br></br>

            </nav>
        </div>
    )
}