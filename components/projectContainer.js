import experienceFlipcardStyles from './experienceFlipcard.module.css'
import Card from './card';

export default function ProjectContainer() {
    return (
        <div className={experienceFlipcardStyles.flippableCardContainer}>
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
