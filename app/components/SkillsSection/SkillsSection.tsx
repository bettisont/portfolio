import styles from './SkillsSection.module.css'
import SkillItem from "@/app/components/SkillItem/SkillItem";

const SkillsSection = () => {
    return (
        <>
            <div id={"skills"} className={styles.grid_container}>
                <SkillItem title={'React'}  description={'Front end experience with React'} />
                <SkillItem title={'Angular'}  description={'Front end experience with Angular'} />
                <SkillItem title={'NextJS'}  description={'Front end experience with NextJS'} />
            </div>
        </>
    );
};

export default SkillsSection;
