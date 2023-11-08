import Link from "next/link";
import {RiTwitterXFill} from "react-icons/ri";
import {AiFillGithub} from "react-icons/ai";




const Footer = () => {
    return (
        <>
            <div className="flex h-20 items-center">
                <div className="flex justify-start w-1/2">
                    <Link className="px-5" href={'https://twitter.com/TimBettison'}><RiTwitterXFill />
                    </Link>
                    <Link className="px-5" href={'https://github.com/bettisont'}><AiFillGithub /></Link>
                </div>
                <div className="flex justify-end pl-20px w-1/2 decoration-0">
                    <Link href={'/'}>TB</Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
