import type { NextPage } from 'next';
import SearchInput from '../components/SearchRow/Input';
import styled from '@emotion/styled';
import Categorias from '../components/SearchRow/Categorias';
import ItemAnuncio from '../components/ItemAnuncio/ItemAnuncio';
import Image from 'next/image';

const Main = styled.main`
  background-color: #f4f4f4;
  padding-bottom: 200px;

  & .section1 {
    background-color: ${(props) => props.theme.primary.main};
    padding-top: 32px;
  }
  
  & .section2 {
    background-color: white;
    border-bottom: solid 1px ${props => props.theme.primary.main};
    padding: 30px 20px 300px;

    h2 {
      font-size: 20px;
      font-weight: 500;
      color: rgb(74, 74, 74);
      margin-bottom: 25px;
    }

    & .anuncios-wrapper {
      ul {
        display: flex;
        justify-content: space-between;
        row-gap: 25px;
        column-gap: 15px;
        flex-wrap: wrap;
        position: relative;


        li {
          width: 15%;
        }
      }
    }
  }

  .section3 {
    padding-top: 35px;

    .section3-title-div {
      display: flex;
      column-gap: 20px;

      h2 {
        font-size: 20px;
        font-weight: 500;
        color: rgb(74, 74, 74);
      }
    }

    .premium-items-list-div {
      margin-top: 20px;

      ul {
        display: grid;
        grid-template-columns: repeat(10, 18.6%);
        column-gap: 20px;
        overflow: hidden;
        position: relative;

        li {
          height: 
        }
      }
    }
  }

  .section2, .section3 {
    max-width: 85%;
    margin-inline: auto;
  }
`;

const Home: NextPage = () => {
  return (
    <Main>
      <section className='section1'>
        <SearchInput />
        <Categorias />
      </section>

      <section className='section2'>
        <h2>Anúncios recentes</h2>

        <div className='anuncios-wrapper'>
          <ul>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, index) => {
                return (
                  <li key={element}>
                    <ItemAnuncio imgSrc={index === 2 ? 'https://img.olx.com.br/thumbs256x256/22/222266072749331.jpg' : 'https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg'} titulo='Cachorro' valor='200' />
                    
                  </li>
                )
              })
            }
          </ul>

        </div>
      </section>

      <section className='section3'>
        <div className='section3-title-div'>
          <Image src='/images/galeria-premium/icon.svg' alt='Premium' width={25} height={30} />
          <h2>Galeria Premium</h2>
        </div>

        <div className='premium-items-list-div'>
          <ul>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(element => {
                return (
                  <li key={element}>
                    <ItemAnuncio imgSrc='	https://img.olx.com.br/thumbs256x256/01/018209542017733.jpg' titulo='Carro' valor='200.000' large/>
                  </li>
                )
              })
            }


          </ul>
        </div>
      </section>

    </Main>
  )
}

export default Home
