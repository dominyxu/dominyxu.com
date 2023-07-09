import flipcardStyles from './experienceFlipcard.module.css'

export default function ExperienceFlipcard() {
  return (
    <div className={flipcardStyles.flipcardContainer}>
      <div className={flipcardStyles.back}></div>
      <div className={flipcardStyles.front}></div>


    </div>
  );

}