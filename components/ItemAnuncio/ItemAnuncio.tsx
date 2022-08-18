import styled from "@emotion/styled";
import isPropValid from '@emotion/is-prop-valid';

type AnuncioProps = {
    imgSrc: string,
    titulo: string,
    valor?: string,
    large?: boolean,
    className?: string
}

const Anuncio = styled.div`
    width: 100%;

    h4 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 400;
    }

    span {
        color: rgb(74, 74, 74);
        font-size: 16px;
        font-weight: 700;
    }
`;

const ImagemStyled = styled('div', { shouldForwardProp: prop => isPropValid(prop) && prop !== 'imgSrc' })((props: Partial<AnuncioProps>) => ({
    position: "relative",
    minWidth: "162px",
    minHeight: '121px',
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "rgb(229, 229, 229)",
    backgroundImage: `url(${props.imgSrc})`,
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    '&.large': {
        minHeight: '159px',
    }
}))

function Imagem({ className, imgSrc }: Partial<AnuncioProps>) {
    return (
        <ImagemStyled imgSrc={imgSrc} className={className}/>
    )
}


export default function ItemAnuncio({ imgSrc, titulo, valor, large = false }: AnuncioProps) {
    return (
        <Anuncio>
            <Imagem imgSrc={imgSrc} className={large ? 'large' : ''} />
            <h4>{titulo}</h4>
            <span>R$ {valor}</span>
        </Anuncio>
    )
}