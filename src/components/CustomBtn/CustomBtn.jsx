import sprite from '../../img/sprite.svg';
import {  CuctomBtnGreen } from './CustomBtn.styled';


export default function CuStomBtn( {label, onClick, width }) {
  return (    
    <CuctomBtnGreen width={width} onClick={onClick}>
      {label}
      <svg width={32} height={32}>
        <use href={`${sprite}#icon-arrow-right`} />
      </svg>
    </CuctomBtnGreen>  
  )
}