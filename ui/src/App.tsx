import { useEffect, useState } from "react"
import { DayComponent } from './components/DayComponent'
import styled from 'styled-components'
import { Class } from "./model/Class"
import axios, { AxiosResponse } from 'axios'
import { NewClassDialog } from "./components/NewClassDialog"

const Container = styled.div`
      display: grid;
      grid-template-columns: repeat(7, 1fr);

      height: 100%;
      color: #2C74B3;

      background-color: #0A2647;

      .newClassBtn {
        position: absolute;
        bottom: 20px;
        right: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;
        padding: 0;

        width: 70px;
        height: 70px;
        
        border: 0px;

        border-radius: 25px;

        font-size: 45pt;
        color: #9F73AB;

        background: #3F3B6C;
      }

      .newClassBtn:hover {
        transition: 250ms;
        cursor: pointer;
        color: #A3C7D6;
      }
`;

function App() {
  const [classesSunday, setClassesSunday] = useState<Class[]>([])
  const [classesMonday, setClassesMonday] = useState<Class[]>([])
  const [classesTuesday, setClassesTuesday] = useState<Class[]>([])
  const [classesWednesday, setClassesWednesday] = useState<Class[]>([])
  const [classesThursday, setClassesThursday] = useState<Class[]>([])
  const [classesFriday, setClassesFriday] = useState<Class[]>([])
  const [classesSaturday, setClassesSaturday] = useState<Class[]>([])
  const [isNewVisible, setIsNewVisible] = useState(false)

  function loadClasses() {
    axios.get('http://localhost:3000/classes')
      .then((response: AxiosResponse<Class[], any>) => {
        let classesSunday: Class[] = []
        let classesMonday: Class[] = []
        let classesTuesday: Class[] = []
        let classesWednesday: Class[] = []
        let classesThursday: Class[] = []
        let classesFriday: Class[] = []
        let classesSaturday: Class[] = []

        response.data.forEach((val) => {
          if (val.day === 0) {
            classesSunday.push(val)
          } else if (val.day === 1) {
            classesMonday.push(val)
          } else if (val.day === 2) {
            classesTuesday.push(val)
          } else if (val.day === 3) {
            classesWednesday.push(val)
          } else if (val.day === 4) {
            classesThursday.push(val)
          } else if (val.day === 5) {
            classesFriday.push(val)
          } else if (val.day === 6) {
            classesSaturday.push(val)
          }

          setClassesSunday(classesSunday)
          setClassesMonday(classesMonday)
          setClassesTuesday(classesTuesday)
          setClassesWednesday(classesWednesday)
          setClassesThursday(classesThursday)
          setClassesFriday(classesFriday)
          setClassesSaturday(classesSaturday)
        })
      })
  }

  useEffect(() => {
    loadClasses()
  }, [])

  return (
    <Container>
      <DayComponent day="Domingo" classes={classesSunday} onDeleted={loadClasses} />
      <DayComponent day="Segunda" classes={classesMonday} onDeleted={loadClasses} />
      <DayComponent day="Terça" classes={classesTuesday} onDeleted={loadClasses} />
      <DayComponent day="Quarta" classes={classesWednesday} onDeleted={loadClasses} />
      <DayComponent day="Quinta" classes={classesThursday} onDeleted={loadClasses} />
      <DayComponent day="Sexta" classes={classesFriday} onDeleted={loadClasses} />
      <DayComponent day="Sabado" classes={classesSaturday} onDeleted={loadClasses} />

      <button className="newClassBtn" onClick={() => setIsNewVisible(true)}>+</button>

      <NewClassDialog visible={isNewVisible} onClick={() => setIsNewVisible(false)} onNewClass={() => loadClasses()} />
    </Container>
  )
}

export default App
