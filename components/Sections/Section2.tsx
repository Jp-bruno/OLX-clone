import ItemAnuncio from "../ItemAnuncio/ItemAnuncio";
import styled from "@emotion/styled";

const StyledSection = styled.section`
    background-color: white;
    border-bottom: solid 1px ${props => props.theme.primary.main};
    padding: 30px 20px 300px;
    max-width: 85%;
    margin-inline: auto;
    
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
`;


export default function Section2() {
    return (
        <StyledSection>
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
        </StyledSection>
    )
}