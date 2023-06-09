import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className='nav'>
            <ul>
                <Link href="/about">about</Link>
                <Link href="/experience">experience</Link>
                <Link href="/projects">projects</Link>
                <Link href="/interests">interests</Link>
            </ul>
        </nav>
    )
}