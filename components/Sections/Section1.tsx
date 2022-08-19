import Categorias from "../SearchRow/Categorias";
import SearchInput from "../SearchRow/Input";
import styled from "@emotion/styled";

const StyledSection = styled.section`
    background-color: ${(props) => props.theme.primary.main};
    padding-top: 32px;
`;

export default function Section1() {
    return (
        <StyledSection>
            <SearchInput />
            <Categorias />
        </StyledSection>

    )
}