import { Packs } from "./Packs";
import { useDispatch, useSelector } from "react-redux";
import {
  createPack,
  deletePack,
  getPacks,
  setPackName,
  updatePack,
} from "../../../main/bll/reducers/packs-reducer";
import { AppStoreType } from "../../../main/bll/store/store";
import s from "./Packs.module.css";
import { AddNewItem } from "../AddNewItem";
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import { useCallback, useEffect } from "react";
import { SearchInput } from "../../../main/ui/common/SearchInput";

export const PacksContainer = () => {
  const {
    cardPacks,
    packName,
    minCardsCount,
    maxCardsCount,
    min,
    max,
    isMine,
  } = useSelector((state: AppStoreType) => state.packs);
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
  const userId = useSelector((state: AppStoreType) => state.profile._id);
  const headers = ["Name", "Cards", "Last updated", "Created by", "Actions"];

  //CRUD operations with packs
  // request for packs from server
  useEffect(() => {
    dispatch(getPacks());
  }, [dispatch, packName, minCardsCount, maxCardsCount, min, max, isMine]);

  //sending request on adding new pack
  const onAddingNewPack = useCallback((value: string) => {
    dispatch(createPack(value ? value : "New Pack"));
  }, [dispatch]);

  //sending request on deleting pack
  const onRemovingPack = useCallback((id: string) => {
    dispatch(deletePack(id));
  }, [dispatch]);

  //sending request on editing pack
  const onEditingPack = useCallback((id: string, name?: string) => {
    dispatch(updatePack(id, name));
  }, [dispatch]);

  const setSearchValue = useCallback((value: string) => {
    dispatch(setPackName(value));
  }, [dispatch]);

  return (
    <div className={s.packList}>
      <h3>Packs list</h3>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <SearchInput onChange={setSearchValue} />
        <AddNewItem addNewCallback={onAddingNewPack} isLoading={isLoading} />
      </div>

      <Packs
        packs={cardPacks}
        headers={headers}
        userId={userId}
        onRemovingPack={onRemovingPack}
        onEditingPack={onEditingPack}
      />
    </div>
  );
};
