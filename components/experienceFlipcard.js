
import { CSSTransition } from 'react-transition-group';
import { useState } from "react";
import Flipcard from './Flipcard';
import experienceFlipcardStyles from './experienceFlipcard.module.css'

export default function ExperienceFlipcard() {

  const [showFront, setShowFront] = useState(true); //useState to determine if we show the front or the back of the card

  return (
      <div className={experienceFlipcardStyles.flippableCardContainer}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Flipcard onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>

        </div>
  );

}