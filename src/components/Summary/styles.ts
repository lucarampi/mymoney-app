import styled from "styled-components";

interface divProps {
    activeColor: string;
}
const colors = {
    positive: "#33CC95",
    neutral: "white",
    negative: "#E52E4D"
}

export const Container = styled.div<divProps>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);

        }

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display:flex;
            align-items:center;
            justify-content:space-between; 
        } 
        strong{
            display: block;
            margin-top: 1rem;
            font-size:2rem;
            font-weight:500;
            line-height:3rem;
        }
        &.highlight-background{
            background: ${(props) => {

        if (props.activeColor === "positive") {return colors.positive;}
        else if (props.activeColor === "negative") {return colors.negative;}
        else {return colors.neutral;}}};
            color: ${(props) => {
        if (props.activeColor === "positive" || props.activeColor === "negative") return "white";
        else return "black";}};
        }
    }
}
`