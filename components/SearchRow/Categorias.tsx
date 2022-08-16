import Image from "next/image";
import styled from "@emotion/styled";

const images = [
    ['/images/categorias-icons/1.svg', 'Imóveis'],
    ['/images/categorias-icons/2.svg', 'Auto e peças'],
    ['/images/categorias-icons/3.svg', 'Para a sua casa'],
    ['/images/categorias-icons/4.svg', 'Eletrônicos e celulares'],
    ['/images/categorias-icons/5.svg', 'Vagas de emprego'],
    ['/images/categorias-icons/6.svg', 'Serviços'],
    ['/images/categorias-icons/7.svg', 'Músicas e hobbies'],
    ['/images/categorias-icons/8.svg', 'Esportes e lazer'],
    ['/images/categorias-icons/9.svg', 'Moda e beleza'],
    ['/images/categorias-icons/10.svg', 'Agro e indústria'],
    ['/images/categorias-icons/11.svg', 'Todas as Categorias'],
];

const Wrapper = styled.div`

    ul {
        display: flex;
        align-items: center;
        margin-inline: auto;
        padding-inline: 55px;
        width: ${props => props.theme.maxWidth};
        justify-content: space-evenly;
        align-items: flex-start;
    } 

        .item-categoria {
            display: flex;
            height: 100%;
            flex-direction: column;
            width: 90px;
            align-items: center;
            row-gap: 5px;

            .image-wrapper {
                background-color: white;
                border-radius: 50px;
                display: grid;
                place-items: center;
                justify-self: flex-start;
                width: 58px;
                height: 58px;

                img {
                    opacity: ${props => props.theme.iconsOpacity};
                }
            }
            
            small {
                color: white;
                display: flex;
                text-align: center;
                font-size: 12px;
            }
        }
`;

export default function Categorias() {
    return (
        <Wrapper>
            <ul>
                {
                    images.map(element => {
                        return (
                            <li className='item-categoria' key={Math.random() * 1000}>
                                <div className='image-wrapper'>
                                    <Image src={element[0]} width={32} height={32} alt={element[1]} />
                                </div>
                                <small>{element[1]}</small>
                            </li>
                        )
                    })
                }
            </ul>
        </Wrapper>
    )
}