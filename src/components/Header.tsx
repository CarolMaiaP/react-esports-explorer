import perfil from '../assets/perfil.jpg';
import { HeaderContainer } from './styles';

export function Header(){
  return (
    <HeaderContainer>
      <div>
        <img src={perfil} alt="" />
      </div>
    </HeaderContainer>
  )
}