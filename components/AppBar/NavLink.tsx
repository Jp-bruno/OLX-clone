import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

type NavLinkProps = {
    to: string,
    src: string,
    alt?: string,
    text: string
}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: center;
`;

export default function NavLink({ to = '/', src, alt = 'icon', text }: NavLinkProps) {
    return (
        <>
            <Link href={to}>
                <StyledWrapper>
                    <Image src={src} width={24} height={24} layout='fixed' alt={alt} />
                    <span>{text}</span>
                </StyledWrapper>
            </Link>
        </>
    )
}