import SuperButton from "../../common/superButton/SuperButton";

export const DeleteModal = ({packName, deleteCallback, closeModal}: PropsType) => {
    const handleDelete = () => {
        deleteCallback();
        closeModal();
    }
    return (
        <>
            <p style={{marginBottom: '40px'}}>
                Do you really want to remove {packName} pack? All cards will be excluded from this course.
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
    packName: string
    deleteCallback: () => void
    closeModal: () => void
}
