import Image from "next/image";
import ItemAnuncio from "../ItemAnuncio/ItemAnuncio";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const StyledGaleria = styled.div`
    position: relative;

    .galeria-premium-title-div {
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
        overflow-x: hidden;

        ul {
            display: grid;
            grid-template-columns: repeat(10, 213px);
            column-gap: 20px;
        }
    }
`;

const StyledButton = styled.button`
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 50px;
    border-width: 0;
    padding: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 12%) 0px 1px 10px 0px, rgb(0 0 0 / 14%) 0px 4px 5px 0px;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 42.5%;
    left: 98%;

    svg {
        transform: rotate(180deg);
    }

    &:not(&:hover) {
        background-color: rgb(255, 255, 255);
    }

    &.reverse {
        left:-2%;

        svg {
            transform: rotate(0deg);
        }
    }
`;

export default function GaleriaPremium() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {

    })

    function scroll() {
        scrollRef.current?.scrollTo({
            left: buttonRef.current?.classList.contains('reverse') ? -scrollRef.current.scrollWidth : scrollRef.current.scrollWidth,
            behavior: "smooth"
        })

        buttonRef.current?.classList.contains('reverse') ? buttonRef.current.classList.remove('reverse') : buttonRef.current?.classList.add('reverse');
    }

    return (
        <StyledGaleria>
            <div className='galeria-premium-title-div'>
                <Image src='/images/galeria-premium/icon.svg' alt='Premium' width={25} height={30} />
                <h2>Galeria Premium</h2>
            </div>

            <div className='premium-items-list-div' ref={scrollRef}>
                <ul>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(element => {
                            return (
                                <li key={element}>
                                    <ItemAnuncio imgSrc='https://img.olx.com.br/thumbs256x256/01/018209542017733.jpg' titulo='Carro' valor='200.000' large />
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
            <StyledButton ref={buttonRef} onClick={scroll} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path fill="#000" d="M14.53 6.53a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06-1.06L9.06 12l5.47-5.47z" fillRule="evenodd"></path></svg>
            </StyledButton>
        </StyledGaleria>
    )
}