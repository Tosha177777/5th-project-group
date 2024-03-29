import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { todayWaterThunk } from '../../redux/waterOperations';
import { selectWaterIsLoading } from '/src/redux/waterSelectors';
import { selectTodayWater } from '/src/redux/waterSelectors';
import { ReactComponent as Glass } from '/src/svgs/icons/glass.svg';
import { ReactComponent as EditIcon } from '/src/svgs/icons/pencil.svg';
import { ReactComponent as Trashbin } from '/src/svgs/icons/trash.svg';
import { ReactComponent as Plus } from '/src/svgs/icons/plus.svg';
import { AddWater } from '../AddWater/AddWater';
import { EditWater } from '../AddWater/EditWater';
import { DeleteWater } from '../AddWater/DeleteWater';
import {
  Text,
  StyledList,
  StyledItem,
  StyledAmount,
  StyledTime,
  StyledEditBtn,
  StyledEDeleteBtn,
  StyledEAddBtn,
  StyledInfo,
} from './Today.styled';

const Today = () => {
  const todayPortions = useSelector(selectTodayWater);
  const isLoading = useSelector(selectWaterIsLoading);
  const [isOpenedAdd, setIsOpenedAdd] = useState(false);
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);
  const [isOpenedDel, setIsOpenedDel] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [waterCards, setWaterCards] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedItemId !== null) {
      dispatch(todayWaterThunk());
    }
  }, [dispatch, waterCards, selectedItemId]);

  const onAddWaterModal = () => {
    setIsOpenedAdd(!isOpenedAdd);
  };

  const onEditWaterModal = (_id) => {
    setIsOpenedEdit(!isOpenedEdit);
    const selectedWaterPortion = todayPortions.find(
      (portion) => portion._id === _id
    );
    setSelectedItemId(_id);
    setWaterCards(selectedWaterPortion);
  };

  const onDeleteWaterModal = (_id) => {
    setIsOpenedDel(!isOpenedDel);
    setSelectedItemId(_id);
  };

  return (
    <>
      <Text>Today</Text>
      {isLoading && <StyledInfo>Please wait. Loading...</StyledInfo>}
      {todayPortions.length > 0 ? (
        <StyledList>
          {todayPortions.map(({ _id, date, waterVolume }) => (
            <StyledItem key={_id}>
              <Glass />
              <StyledAmount>{waterVolume} ml</StyledAmount>
              <StyledTime>
                {new Intl.DateTimeFormat('en', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                  timeZone: 'UTC',
                }).format(new Date(date))}
              </StyledTime>
              <StyledEditBtn onClick={() => onEditWaterModal(_id)}>
                <EditIcon />
              </StyledEditBtn>
              <StyledEDeleteBtn onClick={() => onDeleteWaterModal(_id)}>
                <Trashbin />
              </StyledEDeleteBtn>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <StyledInfo>No notes yet</StyledInfo>
      )}
      <StyledEAddBtn onClick={onAddWaterModal}>
        <Plus />
        <span>Add water</span>
      </StyledEAddBtn>

      {isOpenedAdd && <AddWater onClose={onAddWaterModal} />}
      {isOpenedEdit && (
        <EditWater
          waterCardsSave={waterCards}
          onClose={onEditWaterModal}
          recordId={selectedItemId}
        />
      )}
      {isOpenedDel && (
        <DeleteWater onClose={onDeleteWaterModal} recordId={selectedItemId} />
      )}
    </>
  );
};

export default Today;
