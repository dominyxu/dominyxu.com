
import { CSSTransition } from 'react-transition-group';
import { useState } from "react";
import Flipcard from './Flipcard';
import experienceFlipcardStyles from './experienceFlipcard.module.css'
import Link from 'next/link';

export default function ExperienceFlipcard() {

    const [showFront, setShowFront] = useState(true); //useState to determine if we show the front or the back of the card

    return (
        <div className={experienceFlipcardStyles.flippableCardContainer}>
            <Flipcard
                logo="/images/mcmaster.png"
                role="computer engineering studentlol"
                company="MCMASTER UNIVERSITYlol"
                companyLink="https://www.eng.mcmaster.ca/ece/"
                location="Hamilton, ON"
                date="05/25"
                content={
                    <div>
                        <ul>
                            <li>Led development on an Electric Logging Device prototype using React and Tailwind CSS to the technical standard
                                from the CCMTA.</li>
                            <li>Designed and implemented UI changes to company website.</li>
                            <li>Analyzed and oversaw technical fleet management data for City of Richmond Hill vehicles.</li>

                        </ul>
                    </div>
                }
            ></Flipcard>
            <hr></hr>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Flipcard onClick={() => {
                    setShowFront((v) => !v);
                }}></Flipcard>
            </CSSTransition>

            

        </div>
    );

}