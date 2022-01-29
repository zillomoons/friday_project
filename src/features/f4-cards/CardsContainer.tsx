import s from './Cards.module.css';
import {Cards} from "./Cards";
import {useCallback, useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../main/bll/store/store";
import SuperButton from "../../main/ui/common/superButton/SuperButton";
import {createCard, getCards} from "../../main/bll/reducers/cards-reducer";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ModalContext} from "../../contexts";
import {AddCardModal} from "../../main/ui/components/modals/add-card-modal/AddCardModal";
import {SearchInput} from "../../main/ui/common/SearchInput";
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {PATH} from "../../main/ui/routes/Routes";

export const CardsContainer = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const userId = useSelector((state: AppStoreType) => state.profile._id);
    const cardsPack_id = searchParams.get('cardsPack_id');
    const packName = searchParams.get('packName');
    const headers = ['Question', 'Answer', 'Last updated', 'Grade', 'Actions'];
    const cards = useSelector((state: AppStoreType) => state.cards.cards);
    const {openModal, closeModal} = useContext(ModalContext);
    const navigate = useNavigate();

    //CRUD operations with cards
    useEffect(() => {
        dispatch(getCards(cardsPack_id))
    }, [dispatch, cardsPack_id])

    //add new card to pack
    const onAddingNewCard = useCallback((question: string, answer: string) => {
        dispatch(createCard(cardsPack_id, question, answer))
    }, [])
    const handleClickAddPack = ()=> {
        openModal({
            title: 'Add new card',
            children: <AddCardModal addCallback={onAddingNewCard} closeModal={closeModal} />
        })
    }
    const handleSearch = () => {

    }
    const handleNavigateToPacks = () =>{
        navigate(PATH.MAIN)
    };
    return (
        <div className={s.cardsList}>
            <h3 onClick={handleNavigateToPacks}><MdOutlineKeyboardBackspace />{packName}</h3>
            <div className={s.searchBlock} >
                <SearchInput onChange={handleSearch} />
                <SuperButton style={{width: '200px'}}
                             disabled={isLoading}
                             onClick={handleClickAddPack}>
                    Add New Card
                </SuperButton>
            </div>

            <Cards headers={headers} cards={cards} userId={userId}/>
        </div>
    )
}

