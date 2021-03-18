import React from "react"
import { Question } from "./fakeData"

export interface ListItemProps {
    lock: boolean
    value: string,
    answer: string
    isCorrect: (val: boolean) => void
}
export interface ListProps {
    question: Question
    update: (state: {
        isCorrect: boolean,
        isAnswered: boolean
    }) => void
}
export const QuestionWrapper: React.FC<ListProps> = (props) => {
    const [lock, setLock] = React.useState(false)
    const isCorrect = (bool: boolean) => {
        setLock(true);
        props.update({ isAnswered: true, isCorrect: bool })
    }
    return (
        <>
            <div className="card">
                <label>{props.question.question}
                    <br />
                    {props.question.options.map((option, idx) => <QuestionItem
                        key={idx}
                        value={option}
                        answer={props.question.answer}
                        isCorrect={isCorrect}
                        lock={lock} />)}
                </label>
            </div>

        </>
    )
}
export const QuestionItem: React.FC<ListItemProps> = (props) => {
    const [isClicked, setIsClicked] = React.useState(false)
    const displayClassName = () => {
        if (props.lock) {
            if (props.value === props.answer) {
                return "correct"
            }
            else {
                return "false"
            }
        }
        return ""
    }
    return (<>
        <button onClick={(e => {
            e.preventDefault()
            if (!props.lock) {
                if (props.value === props.answer) {
                    props.isCorrect(true)
                }
                else {
                    props.isCorrect(false)
                }
                setIsClicked(true)
            }
        })}
            className={`${displayClassName()} ${isClicked ? "active" : ""}`}>
            {props.value}
        </button>
    </>)
}