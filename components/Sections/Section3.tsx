import styled from "@emotion/styled";
import GaleriaPremium from "../GaleriaPremium/GaleriaPremium";

const StyledSection = styled.section`
    padding-top: 35px;
    max-width: 85%;
    margin-inline: auto;
`;

export default function Section3() {
    return (
        <StyledSection className='section3'>
            <GaleriaPremium />
        </StyledSection>
    )
}