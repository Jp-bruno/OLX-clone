import styled from "@emotion/styled";
import { css } from '@emotion/react';

type AnuncioProps = {
    imgSrc: string,
    titulo: string,
    valor?: string
}

// const Image = styled('div', {
//     shouldForwardProp: prop => prop === 'imgSrc'
// })
//     (props => ({
//         "& .img-wrapper": {
//             position: "relative",
//             minWidth: "162px",
//             minHeight: "121px",
//             borderRadius: "10px",
//             overflow: "hidden",
//             backgroundImage: `url(${props => props.imgSrc})`
//         }
//     }))

const dynamic = (props: AnuncioProps) => css`
    background-image: url(${props.imgSrc});
`

const Anuncio = styled.div`
    min-width: 15%;

    h4 {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 400;
    }

    span {
        color: rgb(74, 74, 74);
        font-size: 16px;
        font-weight: 700;
    }
`;


const Imagem = styled('div', { shouldForwardProp:  prop => prop === 'imgSrc'})((props: Partial<AnuncioProps>) => ({
    position: "relative",
    minWidth: "162px",
    minHeight: "121px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: 'rgb(229, 229, 229)',
    backgroundImage: `url(${props.imgSrc})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}))

export default function ItemAnuncio({ imgSrc, titulo, valor }: AnuncioProps) {
    return (
        <Anuncio>
            <Imagem imgSrc={imgSrc}/>
            <h4>{titulo}</h4>
            <span>R$ {valor}</span>
        </Anuncio>
    )
}