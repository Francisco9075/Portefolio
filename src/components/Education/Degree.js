import React from "react";
import classes from "./degree.module.css";
import UniversityImg from "../../Data/universityLogo.png";
import mkr from "../../Data/mkr.png"
import Card from "../UI/Card";
import { EducationData, EmpresaData } from "../../Data/EducationData"; 
import { useSelector } from "react-redux";

function Degree(props) {
    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                Percurso profissional
            </h1>

            {/* Bloco de Educação */}
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{ borderColor: uiColor }}>
                    <img src={UniversityImg} alt="degree" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{EducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationData.details.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Card>
            </div>

            {/* Bloco de Empresa */}
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{ borderColor: uiColor }}>
                    <img src={mkr} alt="degree" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EmpresaData.inicio} - {EmpresaData.fim}</h3>
                        <h1 style={{ color: uiColor }}>{EmpresaData.EmpresaName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EmpresaData.descricao}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EmpresaData.detalhes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
    );
}

export default Degree;
