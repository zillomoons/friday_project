import SuperButton from "../../../common/superButton/SuperButton";

export const DeleteCardModal = ({ deleteCallback, closeModal}: PropsType) => {
    const handleDelete = () => {
        deleteCallback();
        closeModal();
    }
    return (
        <>
            <p style={{marginBottom: '40px'}}>
                Do you really want to remove this card?
            </p>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SuperButton style={{backgroundColor: '#D7D8EF', width: '200px'}}
                             onClick={closeModal}
                >
                    Cancel
                </SuperButton>
                <SuperButton style={{backgroundColor: '#F1453D', width: '200px'}}
                             onClick={handleDelete}
                >
                    Delete
                </SuperButton>
            </div>

        </>
    )
}
type PropsType = {
    deleteCallback: () => void
    closeModal: () => void
}
