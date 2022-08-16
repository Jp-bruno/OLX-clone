import type { NextPage } from 'next';
import SearchInput from '../components/SearchRow/Input';
import styled from '@emotion/styled';
import Categorias from '../components/SearchRow/Categorias';
import ItemAnuncio from '../components/ItemAnuncio/ItemAnuncio';

const Main = styled.main`
  & .section1 {
    background-color: ${(props) => props.theme.primary.main};
    padding-top: 32px;
    padding-bottom: 32px;
  }
  
  & .section2 {
    max-width: 85%;
    margin-inline: auto;

    & .anuncios-wrapper {
      display: flex;
      justify-content: space-between;
      row-gap: 25px;
      column-gap: 15px;
      flex-wrap: wrap;
    }
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
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/208238430288671.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
          <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/20/206259433571996.jpg' titulo='Cachorro' valor='200' />
        </div>
      </section>

    </Main>
  )
}

export default Home
