import { useState } from "react";
import styled from "styled-components"
import { Class } from "../model/Class"
import { ClassesDesc } from "./ClassesDesc"
import axios from 'axios'

type DayComponentProps = {
    day: string;
    classes: Class[];
    onDeleted: () => void;
}

const Container = styled.div`
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
        border-right: 1px solid #000;

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 22pt;

            background-color: #144272;
            height: 100px;

            border-bottom: 1px solid #000;
        }

        .content {
            ul {
                padding: 0;
                margin: 0;

                padding: 5px;
            }

            li {
                list-style: none;
                margin-bottom: 20px;
            }
        }
`

export function DayComponent(props: DayComponentProps) {
    function deleteClass(c: Class) {
        axios.delete(`http://localhost:3000/classes/${c.id}`)
            .then(() => {
                props.onDeleted()
            })
    }

    return (
        <Container>
            <div className="header">
                {props.day}
            </div>

            <div className="content">
                <ul>
                    {props.classes.map((val) => {
                        return (
                            <li key={val.id} onClick={() => deleteClass(val)}><ClassesDesc data={val} color={val.color} /></li>
                        )
                    })}
                </ul>
            </div>
        </Container>
    )
}