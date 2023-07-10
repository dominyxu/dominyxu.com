import flipcardStyles from './experienceFlipcard.module.css'
import { CSSTransition } from 'react-transition-group';


export default function ExperienceFlipcard({onClick}) {
  return (
    <div className={flipcardStyles.flipcardContainer} onClick={onClick}>
      <div className={flipcardStyles.back}>backside</div>
      <div className={flipcardStyles.front}>front</div>


    </div>
  );

}