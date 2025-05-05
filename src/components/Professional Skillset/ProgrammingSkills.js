
import classes from "./programmingSkills.module.css";
import { CSharp, Python, PHP, ReactJs,JavaScript,  NodeJs, MySQL, HTML } from "../asset/svg/svg";
import { useSelector } from "react-redux";

const skills = [CSharp, Python, PHP, ReactJs, JavaScript, NodeJs, MySQL, HTML];
const skillNames=["C#","Python","PHP","ReactJs","JavaScript","NodeJs","MySQL","HTML"];
const ProgrammingSkills = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>Skills <span style={{ color:uiColor}}> programação</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor:uiColor}} key={index}>
                        <Item />
                        <span className={classes.skillName}>{skillNames[index]}</span>
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;