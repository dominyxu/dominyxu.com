
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
                role="computer engineering student"
                company="MCMASTER UNIVERSITY"
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
            <Flipcard
                logo="/images/MoH.jpeg"
                role="software engineer intern"
                company="MINISTRY OF HEALTH"
                companyLink="https://www.eng.mcmaster.ca/ece/"
                location="Toronto, ON"
                date="04/23 - 09/23"
                content={
                    <div>
                        <ul>
                            <li>Created a RESTful client service used by front-end application, when invoked, would return customer data eligible for promotion.</li>
                            <li>Built an internal tool to support story documentation mapping between in-house JIRA board and client JIRA board.</li>
                            <li>Completed development for 11 technical stories, wrote and executed Acceptance Criteria Tests for those stories.</li>
                            <li>Worked in AGILE project environment to develop outward-facing client products as a scrum team member.</li>

                        </ul>
                    </div>
                }
            ></Flipcard>
            <Flipcard
                logo="/images/trigon1.png"
                role="software engineer intern"
                company="TRIGON COMPUTER SOLUTIONS"
                companyLink="https://www.linkedin.com/company/trigon_2/about/"
                location="Markham, ON"
                date="04/22 - 09/22"
                content={
                    <div>
                        <ul>
                            <li>Created a RESTful client service used by front-end application, when invoked, would return customer data eligible for promotion.</li>
                            <li>Built an internal tool to support story documentation mapping between in-house JIRA board and client JIRA board.</li>
                            <li>Completed development for 11 technical stories, wrote and executed Acceptance Criteria Tests for those stories.</li>
                            <li>Worked in AGILE project environment to develop outward-facing client products as a scrum team member.</li>

                        </ul>
                    </div>
                }
            ></Flipcard>
            <Flipcard
                logo="/images/dmt.png"
                role="developer intern"
                company="DM&T SERVICES"
                companyLink="https://www.dmtserv.com/"
                location="Markham, ON"
                date="04/19 - 09/19"
                content={
                    <div>
                        <ul>
                            <li>Assist development on an Electric Logging Device prototype using React and Tailwind CSS to CCMTA technical standard
                                from the Canadian Council of Motor Transport Administrators.</li>
                            <li>Designed and implemented UI changes to company website.</li>
                            <li>Analyzed and oversaw technical fleet management data for City of Richmond Hill vehicles.</li>

                        </ul>
                    </div>
                }
            ></Flipcard>




        </div>
    );

}