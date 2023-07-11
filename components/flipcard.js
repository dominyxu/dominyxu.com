import flipcardStyles from './flipcard.module.css'

export default function Flipcard( {onClick} ) {
  return (
    <div className={flipcardStyles.card} onClick={onClick}>
      <div className={flipcardStyles.back}>iback</div>
      <div className={flipcardStyles.front}>ofront</div>
    </div>
  );

}