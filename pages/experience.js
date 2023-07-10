import ExperienceFlipcard from "../components/experienceFlipcard";
import { CSSTransition } from 'react-transition-group';
import { useState } from "react";

export default function Experience() {
    const [showFront, setShowFront] = useState(true); //useState to determine if we show the front or the back of the card
    return (
        <>
            <div className="experience">
                <h1>experience</h1>
                <br></br>
                <h2>Ministry of Health</h2>
                <br></br>
                <CSSTransition>
                    <ExperienceFlipcard onClick={()=>{
                        setShowFront((v)=>!v);
                    }}></ExperienceFlipcard>
                </CSSTransition>


            </div>
        </>
    );
}

/* const SAMPLE_CARD = [
    {
        id: 1,
        question: "what is 2+2",
        answer: '4',
        options: [
            '2',
            '3',
            '4',
            '5'
        ]
    },
    {
        id: 2,
        question: "what is 2+3",
        answer: 'answer',
        options: [
            'answer',
            'answer1',
            'answer2',
            'answer3',
            'answer4'
        ]
    },

] */