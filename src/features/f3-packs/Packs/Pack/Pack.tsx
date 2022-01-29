import React, {useContext} from "react";
import { PackType } from "../../../../main/bll/reducers/packs-reducer";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../../main/ui/routes/Routes";
import s from "../Packs.module.css"
import {ModalContext} from "../../../../contexts";
import {DeleteModal} from "../../../../main/ui/components/modals/delete-modal/DeleteModal";
import {EditModal} from "../../../../main/ui/components/modals/edit-modal/EditModal";
import {LearnPackModal} from "../../../../main/ui/components/modals/learn-pack-modal/LearnPackModal";




export const Pack = React.memo(({ pack, userId, onRemovingPack, onEditingPack }: PackPropsType) => {
    const isEditable = pack.user_id === userId;

    //method openModal from ModalContext
    const {openModal, closeModal} = useContext(ModalContext);

    const handleClickDelete = () => {
    openModal({
        title: 'Delete Pack',
        children: <DeleteModal packName={pack.name} deleteCallback={onDeletePack} closeModal={closeModal}/>
    })
    };
    const handleClickEdit = () => {
        openModal({
            title: 'Edit pack name',
            children: <EditModal packName={pack.name} editCallback={onEditPack} closeModal={closeModal} />
        })
    };
    const handleClickLearn = () => {
        openModal({
            title: `Learn ${pack.name}`,
            children: <LearnPackModal packId={pack._id} packName={pack.name} closeModal={closeModal} />
        })
    };

    const onDeletePack = () => {
        onRemovingPack(pack._id)
    }
    const onEditPack = (value: string) => {
        onEditingPack(pack._id, value) // can be changed after adding modal window for editing pack title
    }

    const userName = pack.user_name.length > 50 ? pack.user_name.slice(0, 50) : pack.user_name;
    const navigate = useNavigate();
    const handleNavigateToCard = () => {
        navigate(`${PATH.CARDS}?cardsPack_id=${pack._id}&packName=${pack.name}`)
    }

    return <tr>
        <td>
            <div className={s.packName}
                onClick={handleNavigateToCard}>
                {pack.name}
            </div>
        </td>
        <td>{pack.cardsCount}</td>
        <td>{pack.updated.slice(0,10)}</td>
        <td>{userName}</td>
        <td className={s.actionBtn}>
            {isEditable && <button className={s.deleteBtn} onClick={handleClickDelete}>Delete</button>}
            {isEditable && <button onClick={handleClickEdit}>Edit</button>}
            {!!pack.cardsCount && <button onClick={handleClickLearn}>Learn</button>}
        </td>
    </tr>
})

type PackPropsType = {
    pack: PackType;
    userId: string | null
    onRemovingPack: (id: string) => void
    onEditingPack: (id: string, name?: string) => void
}
