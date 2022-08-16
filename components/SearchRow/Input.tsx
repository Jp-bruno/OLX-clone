import styled from "@emotion/styled"
import SearchButton from "./SearchButton"

const Wrapper = styled.div`
    width: 85%;
    margin-inline: auto;
    margin-bottom: 25px;
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    
    input {
        width: 100%;
        border: 0;
        font-size: 20px;
        padding: 18px 20px;
    }
`


export default function SearchInput() {
    return(
        <Wrapper>
            <input type="text" placeholder="Estou procurando por..." />
            <SearchButton />
        </Wrapper>
    )
}