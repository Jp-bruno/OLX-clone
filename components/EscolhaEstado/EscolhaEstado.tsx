import styled from "@emotion/styled";
import Link from "next/link";

const StyledEstadosSection = styled.section`
    width: 87%;
    margin-inline: auto;
    margin-top: 50px;
    background-color: white;
    padding: 30px 20px 40px;

    .estados-section-title {
        display: flex;
        column-gap: 17px;
        margin-bottom: 20px;

        h2 {
            font-size: 20px;
            font-weight: 500;
            color: rgb(74, 74, 74);
        }
    }

    ul {
        display: flex;
        column-gap: 10px;

        a {
            color: ${props => props.theme.primary.main};
            font-size: 16px;
            font-weight: 500;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export default function EscolhaEstado() {
    const estados = ['RJ', 'SP', 'MG', 'PR', 'RS', 'SC', 'ES', 'BA', 'PE', 'DF', 'CE', 'MS', 'GO', 'AM', 'RN', 'PB', 'PA', 'MT', 'AL', 'SE', 'MA', 'AC', 'RO', 'TO', 'PI', 'AP', 'RR', 'BRASIL']
    return (
        <StyledEstadosSection>
            <div className='estados-section-title'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <h2>Escolha o seu estado:</h2>
            </div>
            <ul>
                {
                    estados.map(element => <li key={element}><Link href=''>{element}</Link></li>)
                }
            </ul>
        </StyledEstadosSection>
    )
}