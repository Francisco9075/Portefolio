import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.DUMMY_PROJECTS;
    return (
        <div id="projects">
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1><span style={{ color: nonThemeColor }}>Os meus trabalhos</span><span style={{ color: uiColor }}> recentes</span></h1>
                    <div>
                        Meu trabalho utiliza uma grande variedade de ferramentas tecnológicas de última geração. Minha melhor experiência é criar projetos React e implementá-los em aplicações web usando o Github Pages.
                    </div>
                </section>
            </div>
            <ProgrammingSkills />
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>Os meus projetos</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a target="_blank" rel="noreferrer" href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button className={styles.moreProjectBtn}>More Projects</Button>
                </a>
            </div>
        </div>
    )
};

export default Projects;