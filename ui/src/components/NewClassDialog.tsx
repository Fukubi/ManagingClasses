import { FormEvent, useState } from "react";
import styled from "styled-components";
import axios from 'axios'

type NewClassDialogProps = {
    visible: boolean;
    onClick: () => void;
    onNewClass: () => void;
}

type ContainerProps = {
    visible: Boolean;
}

const Container = styled.div<ContainerProps>`
    position: absolute;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};

    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #000;
    font-family: 'Roboto', sans-serif;

    .contentContainer {
        background-color: #FEFEFE;
        z-index: 1;

        border-radius: 25px;
    }
    
    h1 {
        font-size: 20pt;
        text-align: center;
        padding-right: 10px;
    }

    form {
        fieldset {
            border: 0;
        }

        label {
            font-size: 13pt;
            margin-right: 10px;
        }

        input {
            width: 200px;
            height: 30px;

            font-size: 13pt;
        }

        select {
            width: 100px;
            
            font-size: 12pt;
        }

        button {
            margin: 20px;

            border: 1px solid #000;
            background-color: transparent;
            border-radius: 10px;

            font-size: 15pt;

            width: 90%;
            height: 40px;
        }

        button:hover {
            cursor: pointer;
        }
    }
`

export function NewClassDialog(props: NewClassDialogProps) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [day, setDay] = useState(0)
    const [color, setColor] = useState('#000')

    function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(color);

        axios.post('http://localhost:3000/classes', {
            name: name,
            description: description,
            day: day,
            color: color
        }).then(() => {
            setName('');
            setDescription('');
            setDay(0);
            setColor('');

            props.onNewClass();
            props.onClick();
        })
    }

    return (
        <Container visible={props.visible}>
            <div style={{
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0)',
                position: 'absolute',
                zIndex: 0,
            }} onClick={() => props.onClick()}>
            </div>

            <div className="contentContainer">
                <h1>Nova Classe</h1>

                <div>
                    <form onSubmit={onFormSubmit}>
                        <fieldset>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="description">Descrição:</label>
                            <input value={description} type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="day">Dia:</label>
                            <select name="day" id="day" value={String(day)} onChange={(e) => {
                                setDay(Number(e.target.value))
                            }}>
                                <option value="0">Domingo</option>
                                <option value="1">Segunda</option>
                                <option value="2">Terça</option>
                                <option value="3">Quarta</option>
                                <option value="4">Quinta</option>
                                <option value="5">Sexta</option>
                                <option value="6">Sábado</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="color">Cor:</label>

                            <input type="color" name="color" id="color" value={color} onChange={(e) => {
                                setColor(e.target.value)
                            }} />
                        </fieldset>

                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}