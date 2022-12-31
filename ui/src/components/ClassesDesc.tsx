import styled from "styled-components"
import { Class } from "../model/Class"

type ClassesDescProps = {
    data: Class;
    color: string;
}

type ContainerProps = {
    color: string;
}

const Container = styled.div<ContainerProps>`
        background: ${props => props.color ? props.color : '#3F3B6C'};
        border-radius: 25px;
        height: 80px;

        transition: 500ms;

        header {
            height: 10%;
            font-size: 11pt;
            padding-left: 20px;
            padding-top: 10px;
            font-weight: bold;
        }

        .content {
            height: 90%;
            font-size: 14pt;
            text-align: end;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        :hover {
            background: linear-gradient(90deg, #6a3093, #a044ff);

            color: #C69749;

            transition: 500ms;
        }
`

export function ClassesDesc(props: ClassesDescProps) {
    return (
        <Container color={props.color}>
            <header>
                {props.data.name}
            </header>

            <div className="content">
                {props.data.description}
            </div>
        </Container>
    )
}