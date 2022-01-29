import {PackType} from "../../../../main/bll/reducers/packs-reducer";
import React, {useCallback, useContext} from "react";
import {ModalContext} from "../../../../contexts";
import {DeleteModal} from "../../../../main/ui/components/modals/delete-modal/DeleteModal";
import {EditModal} from "../../../../main/ui/components/modals/edit-modal/EditModal";
import {LearnPackModal} from "../../../../main/ui/components/modals/learn-pack-modal/LearnPackModal";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../../main/ui/routes/Routes";
import {Pack} from "./Pack";

export const PackContainer = React.memo(({pack, userId, onRemovingPack, onEditingPack}: ContainerPackPropsType) => {
    const isEditable = pack.user_id === userId;

    const onDeletePack = () => {
        onRemovingPack(pack._id)
    }
    const onEditPack = (value: string) => {
        onEditingPack(pack._id, value) // can be changed after adding modal window for editing pack title
    }

    //method openModal from ModalContext
    const {openModal, closeModal} = useContext(ModalContext);

    const handleClickDelete = useCallback(() => {
        openModal({
            title: 'Delete Pack',
            children: <DeleteModal packName={pack.name} deleteCallback={onDeletePack} closeModal={closeModal}/>
        })
    }, [pack.name, closeModal, onDeletePack]);
    const handleClickEdit = useCallback(() => {
        openModal({
            title: 'Edit pack name',
            children: <EditModal packName={pack.name} editCallback={onEditPack} closeModal={closeModal}/>
        })
    }, []);
    const handleClickLearn = useCallback(() => {
        openModal({
            title: `Learn ${pack.name}`,
            children: <LearnPackModal packId={pack._id} closeModal={closeModal}/>
        })
    }, []);

    const userName = pack.user_name.length > 50 ? pack.user_name.slice(0, 50) : pack.user_name;
    const navigate = useNavigate();
    const handleNavigateToCard = () => {
        navigate(`${PATH.CARDS}?cardsPack_id=${pack._id}&packName=${pack.name}`)
    }

    return <Pack handleNavigateToCard={handleNavigateToCard}
                 handleClickDelete={handleClickDelete}
                 handleClickLearn={handleClickLearn}
                 handleClickEdit={handleClickEdit}
                 pack={pack} userName={userName}
                 isEditable={isEditable}/>
})
type ContainerPackPropsType = {
    pack: PackType;
    userId: string | null
    onRemovingPack: (id: string) => void
    onEditingPack: (id: string, name?: string) => void
}
