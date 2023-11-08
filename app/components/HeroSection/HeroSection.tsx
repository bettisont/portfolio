'use client'
import styles from './HeroSection.module.css'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";import {useEffect} from "react";
const HeroSection = () => {

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.hello_section}>
                    <div className={`${styles.hello_content}`}>
                        <RoughNotationGroup show={true}>
                            {/*<p id={styles.greeting} className={styles.hello_content_item}>Hi, I'm Tim 😊</p>*/}
                            <p id={styles.handle} className={styles.hello_content_item}>@timbettison</p>
                            <p className={`${styles.hello_content_item}`}>I am a <RoughNotation order={1} type={"underline"}>passionate</RoughNotation>  web developer,
                                I enjoy working with people to bring <RoughNotation order={2} type={"highlight"} color={'#fff886'}>ideas to life.</RoughNotation> </p>
                            <p className={`${styles.hello_content_item}`}>
                                My experience spans from Frontend with Angular and React, to backend with Java and NodeJS.
                            </p>
                        </RoughNotationGroup>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroSection;
