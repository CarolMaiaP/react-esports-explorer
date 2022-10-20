import perfil from '../assets/perfil.jpg';

export function Header(){
  return (
    <header>
      <div>
        <img src={perfil} alt="" />
      </div>
    </header>
  )
}