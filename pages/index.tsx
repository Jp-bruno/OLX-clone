import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Section1 from '../components/Sections/Section1';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import EscolhaEstado from '../components/EscolhaEstado/EscolhaEstado';

const Main = styled.main`
  background-color: #f4f4f4;
  padding-bottom: 200px;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
      <EscolhaEstado />
    </Main>
  )
}

export default Home
