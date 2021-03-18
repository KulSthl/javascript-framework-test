import React from 'react'
import { fake, FakeData } from './fakeData'
import { QuestionWrapper } from './Question'
export const Content: React.FC<{}> = (props) => {
    const [data, setData] = React.useState({} as FakeData)
    const [score, setScore] = React.useState(0)
    React.useEffect(() => {
        setData(JSON.parse(fake) as FakeData)
        console.log(data);

    }, [])
    return (<>
        <div className="content">
            <p>Qui esse ea sunt eu enim et amet aliqua eiusmod do magna dolor laboris. Quis nostrud ex elit eu ex irure quis cillum laborum occaecat elit occaecat. Amet aute amet magna pariatur pariatur. Deserunt est pariatur pariatur voluptate pariatur fugiat est elit id ipsum quis ea officia velit.</p>
            <p>Score: {score}</p>
            <div className="flex">
                {
                    data?.quiz?.maths?.map(obj => {
                        return <>
                            <QuestionWrapper
                                question={obj}
                                update={state => {
                                    if (state.isAnswered) {
                                        if (state.isCorrect) {
                                            setScore(prev => prev + 1)
                                        } else {
                                            setScore(prev => prev - 1)
                                        }
                                    }
                                }}
                            />
                        </>
                    })

                }
                {
                    data?.quiz?.sport?.map(obj => {
                        return <>
                            <QuestionWrapper
                                question={obj}
                                update={state => {
                                    if (state.isAnswered) {
                                        if (state.isCorrect) {
                                            setScore(prev => prev + 1)
                                        } else {
                                            setScore(prev => prev - 1)
                                        }
                                    }
                                }}
                            />
                        </>
                    })
                }
            </div>
        </div>
    </>)
}