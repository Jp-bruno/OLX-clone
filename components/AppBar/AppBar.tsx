import styled from "@emotion/styled";
import Image from "next/image";
import NavLink from "./NavLink";

const StyledAppBar = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;

  header {
    display: flex;
    align-items: center;
    width: ${({theme}) => theme.maxWidth};
    margin-inline: auto;
  }

  nav {
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    
    ul {
      display: flex;
      column-gap: 32px;
      margin-right: 45px;

      li {
        font-size: 14px;
        font-weight: 500;    
      }
    }
  }

  button {
    background-color: ${({theme}) => theme.secondary.main};
    width: 118px;
    border-radius: 50px;
    border: 0;
    height: 40px;
    margin-inline: auto;
    color: white;
    font-weight: 700;
  }
`

export default function AppBar() {
  return (
    <StyledAppBar>
      <header>
        <Image src='/images/logo.svg' width={48} height={48} layout="fixed" alt='logo' />
        <nav>
          <ul>
            <li>
              <NavLink src='/images/menu-icons/plano.svg' text='Plano Profissional' to='/' />
            </li>

            <li>
              <NavLink src='/images/menu-icons/anuncios.svg' text='Meus Anúncios' to='/' />
            </li>

            <li>
              <NavLink src='/images/menu-icons/chat.svg' text='Chat' to='/' />
            </li>

            <li>
              <NavLink src='/images/menu-icons/notificacoes.svg' text='Notificações' to='/' />

            </li>

            <li>
              <NavLink src='/images/menu-icons/entrar.svg' text='Entrar' to='/' />
            </li>
          </ul>
        </nav>

        <button>
          Anunciar
        </button>
      </header>
    </StyledAppBar>
  )
}