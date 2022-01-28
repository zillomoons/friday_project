import SuperButton from "../../../common/superButton/SuperButton";
import SuperInput from "../../../common/superInput/SuperInput";
import {useState} from "react";

export const AddPackModal = ({ addCallback, closeModal}: PropsType) => {
    const [name, setName] = useState("")
    const handleAddPack = () => {
        addCallback(name);
        closeModal();
    }
    return (
        <>
            <div style={{margin: '40px 0', display: 'flex', gap: '15px'}}>
                <label>Name pack:</label>
                <SuperInput value={name}
                            placeholder='enter pack name'
                            onChange={e=>setName(e.currentTarget.value)} />
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
    addCallback: (value: string) => void
    closeModal: () => void
}
