import sprite from '../../../img/sprite.svg';
import { ContactUsBtn } from './LightGreenBtn.styled';

export default function LightGreenBtn( {label, onClick, width }) {
  return (    
    <ContactUsBtn width={width} onClick={onClick}>
      {label}   
      <svg width={14} height={14}>
        <use href={`${sprite}#icon-down`} />
      </svg>
    </ContactUsBtn>
  )
}