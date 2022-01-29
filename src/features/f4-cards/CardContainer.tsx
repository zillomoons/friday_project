import {useDispatch} from "react-redux";
import React, {useCallback, useContext} from "react";
import {ModalContext} from "../../contexts";
import {CardType, deleteCard, updateCard} from "../../main/bll/reducers/cards-reducer";
import {EditCardModal} from "../../main/ui/components/modals/edit-card-modal/EditCardModal";
import {DeleteCardModal} from "../../main/ui/components/modals/delete-card-modal/DeleteCardModal";
import {Card} from "./Card";

export const CardContainer = ({card, userId, packId}: CardContainerType) => {
    const dispatch = useDispatch();
    const {openModal, closeModal} = useContext(ModalContext)

//CRUD operations
    const onEditingCard = useCallback((question: string, answer: string) => {
        packId && dispatch(updateCard(packId, card._id, question, answer));
    }, [dispatch, packId, card._id]);
    const onDeletingCard = useCallback(() => {
        packId && dispatch(deleteCard(packId, card._id))
    }, [dispatch, packId, card._id])

    // callbacks for modals
    const handleUpdateCard = () => {
        openModal({
            title: 'Edit card',
            children: <EditCardModal updateCallback={onEditingCard}
                                     closeModal={closeModal}
                                     question={card.question}
                                     answer={card.answer}/>
        })
    };
    const handleDeleteCard = () => {
        openModal({
            title: 'Delete card',
            children: <DeleteCardModal deleteCallback={onDeletingCard} closeModal={closeModal}/>
        })
    };
    return (
        <Card card={card} userId={userId}
              handleDeleteCard={handleDeleteCard}
              handleUpdateCard={handleUpdateCard}/>
    )
}
type CardContainerType = {
    card: CardType
    userId: string | null
    packId: string | null
}
