import styled from "@emotion/styled";

const Button = styled.button`
    padding: 8px;
    border: 0;
    width: 60px;
    border-left: solid 2px;
    border-left-color: rgb(210, 210, 210);
    background-color: white;

    &:hover {
        background-color: ${props => props.theme.primary.dark};
        border: solid 0.1px white;
        cursor: pointer;

        svg path {
            fill: white;
        }
    }
`;

export default function SearchButton() {
    return (
        <Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#6E0AD6"><path fill="#6E0AD6" fillRule="evenodd" d="M16.84 15.78l4.69 4.69a.75.75 0 01-1.06 1.06l-4.69-4.69a8.25 8.25 0 111.06-1.06zm-1.51-.564a6.75 6.75 0 10-.113.113.759.759 0 01.112-.113z"></path></svg>
        </Button>
    )
}