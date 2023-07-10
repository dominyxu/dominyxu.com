import flipcardStyles from './experienceFlipcard.module.css'

export default function ExperienceFlipcard() {
  return (
    <div className={flipcardStyles.flipcardContainer}>
      <div className={flipcardStyles.back}>backside</div>
      <div className={flipcardStyles.front}>front</div>


    </div>
  );

}