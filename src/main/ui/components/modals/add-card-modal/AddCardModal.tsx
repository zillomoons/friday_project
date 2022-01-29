import SuperButton from "../../../common/superButton/SuperButton";
import SuperInput from "../../../common/superInput/SuperInput";
import {useState} from "react";

export const AddCardModal = ({ addCallback, closeModal}: PropsType) => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const handleAddPack = () => {
        addCallback(question, answer);
        closeModal();
    }
    return (
        <>
            <div style={{margin: '40px 0', display: 'flex', gap: '15px'}}>
                <label>Question:</label>
                <SuperInput value={question}
                            placeholder='enter question'
                            onChange={e=>setQuestion(e.currentTarget.value)} />

            </div>
            <div style={{margin: '40px 0', display: 'flex', gap: '15px'}}>
                <label>Answer:</label>
                <SuperInput value={answer}
                            placeholder='enter answer'
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
    addCallback: (question: string, answer: string) => void
    closeModal: () => void
}
