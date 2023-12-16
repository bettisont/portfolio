import Link from "next/link";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <>
            <div className="flex justify-between h-20 items-center">
                <div className="flex justify-start pl-20px w-1/2 decoration-0">
                    <Link href={'/'}>TB</Link>
                </div>
                <div className="flex flex-col align-middle justify-center sm:flex-row sm:justify-around w-1/2">
                    <Link className={styles.header_link} id={styles.selected} href={'/'}>Home</Link>
                    <Link className={styles.header_link} href={'/blog'}>Blog</Link>
                    <Link className={styles.header_link} href={'/contact'}>Contact</Link>
                </div>
            </div>
        </>
    );
};

export default Header;
