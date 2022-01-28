import SuperButton from "../../../common/superButton/SuperButton";
import SuperInput from "../../../common/superInput/SuperInput";
import {useState} from "react";

export const EditModal = ({packName, editCallback, closeModal}: PropsType) => {
    const [name, setName] = useState('')
    const handleEdit = () => {
        editCallback(name);
        closeModal();
    }
    return (
        <>
            <div style={{margin: '40px 0'}}>
                Name: <SuperInput placeholder={packName} value={name} onChange={e=>setName(e.currentTarget.value)} />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SuperButton style={{backgroundColor: '#D7D8EF', width: '200px'}}
                             onClick={closeModal}
                >
                    Cancel
                </SuperButton>
                <SuperButton style={{ width: '200px'}} onClick={handleEdit}>
                    Save
                </SuperButton>
            </div>

        </>
    )
}
type PropsType = {
    packName: string
    editCallback: (value: string) => void
    closeModal: () => void
}
