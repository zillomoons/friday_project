import SuperButton from "../../../common/superButton/SuperButton";
import SuperInput from "../../../common/superInput/SuperInput";
import {useState} from "react";

export const EditCardModal = ({ question, answer, updateCallback, closeModal}: PropsType) => {
    const [questionText, setQuestion] = useState(question)
    const [answerText, setAnswer] = useState(answer)
    const handleAddPack = () => {
        updateCallback(questionText, answerText);
        closeModal();
    }
    return (
        <>
            <div style={{margin: '40px 0', display: 'flex', gap: '15px'}}>
                <label>Question:</label>
                <SuperInput value={questionText}
                            placeholder= {question}
                            onChange={e=>setQuestion(e.currentTarget.value)} />

            </div>
            <div style={{margin: '40px 0', display: 'flex', gap: '15px'}}>
                <label>Answer:</label>
                <textarea value={answerText}
                            placeholder={answer}
                            onChange={e=>setAnswer(e.currentTarget.value)} />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SuperButton style={{backgroundColor: '#D7D8EF', width: '200px'}}
                             onClick={closeModal}
                >
                    Cancel
                </SuperButton>
                <SuperButton style={{ width: '200px'}} onClick={handleAddPack}>
                    Save
                </SuperButton>
            </div>

        </>
    )
}
type PropsType = {
    updateCallback: (question: string, answer:string) => void
    closeModal: () => void
    question: string
    answer: string
}
