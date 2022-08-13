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
    width: 90%;
    margin-inline: auto;
  }

  nav {
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    
    ul {
      display: flex;
      width: 70%;
      align-items: center;
      justify-self: flex-end;
      column-gap: 32px;

      li {
        color: black;
        flex-basis: max-content;
        font-size: 14px;
        font-weight: 600;

        div {
          display: flex;
          align-items: center;
          column-gap: 10px;
          justify-content: center;
        }
      }
    }
  }

  button {
    background-color: ${(props) => props.theme.secondary.main};
    width: 118px;
    border-radius: 50px;
    border: 0;
    height: 40px;
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
              <NavLink src='/images/icons/plano.svg' text='Plano Profissional' to='/' />
            </li>

            <li>
              <NavLink src='/images/icons/anuncios.svg' text='Meus Anúncios' to='/' />
            </li>

            <li>
              <NavLink src='/images/icons/chat.svg' text='Chat' to='/' />
            </li>

            <li>
              <NavLink src='/images/icons/notificacoes.svg' text='Notificações' to='/' />

            </li>

            <li>
              <NavLink src='/images/icons/entrar.svg' text='Entrar' to='/' />
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