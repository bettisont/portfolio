import React from 'react';
import Image from "next/image";
// import img from "../../public/images/sample-image.webp";


interface BlogItemProps {
    tag: String,
    title: String,
    author: String,
    publishedOn: String,
    summary: String,
    image: string
}

const BlogItem = ({tag, title, author, publishedOn, summary, image}: BlogItemProps) => {

    console.log("image: ",image)

    return <div>
        <hr className="w-48 h-1 mx-auto my-4 bg-amber-950 border-0 rounded md:my-10 dark:bg-gray-700"/>
        <div className={"flex gap-4"}>

            <div className={"flex flex-col w-1/3 justify-between"}>
                <div>
                    <p className={"font-extralight "}>{tag}</p>
                    <p className={"font-extrabold text-5xl"}>{title}</p>
                </div>
                <div>
                    <p className={"font-bold"}>{author}</p>
                    <p>{publishedOn}</p>
                </div>
            </div>
            <div className={"w-1/3"}>
                <p className={"text-3xl font-light"}>{summary}</p>
            </div>
            <div className={"w-1/3"}>
                <Image src={image} alt={"random picture"} width={400} height={100}/>
            </div>
        </div>
    </div>

}

const BlogPage = () => {
    return (
        <div className={"flex justify-center m-10"}>
            <div className={'flex-col'}>
                <BlogItem  author={"Tim Bettison"}
                           title={"Lorem Ipsum Dolor Sit Amet"}
                           image={"/images/sample-image.webp"}
                           publishedOn={"8:05 PM GMT•December 15, 2023"}
                           summary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                           tag={"AI, React"}
                />

                <BlogItem  author={"Tim Bettison"}
                           title={"Consectetur Adipiscing Elit"}
                           image={"/images/Crypto.png"}
                           publishedOn={"8:05 PM GMT•December 12, 2023"}
                           summary={"Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                               "laboris nisi ut aliquip ex ea commodo consequat."}
                           tag={"Tech Trends, Crypto"}
                />

            </div>

        </div>


    );
};

export default BlogPage;
