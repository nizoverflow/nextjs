import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/favicon.ico" width={75} height={75} />
            </div>
            <Link href='/'>Home</Link>
            <Link href="/about">About</Link>
            <Link href='/posts'>Post Listing</Link>
        </nav>
    );
}

export default Navbar;