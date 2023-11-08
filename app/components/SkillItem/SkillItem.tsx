import styles from './SkillItem.module.css'


interface SkillItemProps {
    title: string;
    description: string;
}

const SkillItem = ({title, description} : SkillItemProps) => {
    return (
        <>
            <div className={styles.skill_item_container}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    );
};

export default SkillItem;
