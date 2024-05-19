import ExperienceFlipcard from "../components/experienceFlipcard";
import Card from "../components/card";
import Accordian from "../components/accordian";
export default function Experience() {

    return (
        <div className="experience">
            <h1>experience</h1>
            <br></br>
            {/* <Accordian
                logo="/mcmaster1.png"
                role="BE, Computer Engineering"
                company="MCMASTER UNIVERSITY"
                companyLink="https://www.eng.mcmaster.ca/ece/"
                location="Hamilton, ON"
                date="04/2026"
            ></Accordian> */}
            <br></br>
            <ExperienceFlipcard />
            <Card
                logo="/mcmaster1.png"
                role="computer engineering student"
                company="MCMASTER UNIVERSITY"
                companyLink="https://www.eng.mcmaster.ca/ece/"
                location="Hamilton, ON"
                date="05/25"
                content={
                    <div>
                        <ul>
                            <li><strong>degree: </strong>bachelor's of computer engineering</li>
                            <li><strong>gpa: </strong>3.7</li>
                        </ul>
                    </div>
                }
            ></Card>
            


        </div>
    );
}
