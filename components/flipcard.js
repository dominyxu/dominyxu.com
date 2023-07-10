import flipcardStyles from './flipcard.module.css'

export default function Flipcard( {onClick} ) {
  return (
    <div className={flipcardStyles.card} onClick={onClick}>
      <div className={flipcardStyles.back}>backside</div>
      <div className={flipcardStyles.front}>frontside</div>
    </div>
  );

}