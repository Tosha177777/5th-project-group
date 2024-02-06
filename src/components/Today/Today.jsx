import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { selectWaterIsLoading } from '/src/redux/waterSelectors';
import { selectTodayWater } from '/src/redux/waterSelectors';
import { todayWaterThunk } from '/src/redux/waterOperations';
import { ReactComponent as Glass } from '/src/svgs/icons/glass.svg';
import { ReactComponent as EditIcon } from '/src/svgs/icons/pencil.svg';
import { ReactComponent as Trashbin } from '/src/svgs/icons/trash.svg';
import { ReactComponent as Plus } from '/src/svgs/icons/plus.svg';
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
import { AddWater } from '../AddWater/AddWater';
import { EditWater } from '../AddWater/EditWater';
import { DeleteWater } from '../AddWater/DeleteWater';

const Today = () => {
  const todayData = useSelector(selectTodayWater);
  const isLoading = useSelector(selectWaterIsLoading);
  const [isOpenedAdd, setIsOpenedAdd] = useState(false);
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);
  const [isOpenedDel, setIsOpenedDel] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayWaterThunk());
  }, [dispatch]);

  const todayPortions = useMemo(() => {
    if (todayData) {
      return todayData.dayPortions;
    }
    return [];
  }, [todayData]);

  const onAddWaterModal = () => {
    setIsOpenedAdd(!isOpenedAdd);
  };

  const onEditWaterModal = () => {
    setIsOpenedEdit(!isOpenedEdit);
  };

  const onDeleteWaterModal = () => {
    setIsOpenedDel(!isOpenedDel);
  };

  return (
    <>
      <Text>Today</Text>
      {isLoading && <StyledInfo>Please wait. Loading...</StyledInfo>}
      {Array.isArray(todayPortions) && todayPortions.length > 0 ? (
        <StyledList>
          {todayPortions
            .map(({ id, date, waterVolume }) => (
              <StyledItem key={id}>
                <Glass />
                <StyledAmount>{date}</StyledAmount>
                <StyledTime>{waterVolume}</StyledTime>
                <StyledEditBtn onClick={onEditWaterModal}>
                  <EditIcon />
                </StyledEditBtn>
                <StyledEDeleteBtn onClick={onDeleteWaterModal}>
                  <Trashbin />
                </StyledEDeleteBtn>
              </StyledItem>
            ))
            .join('')}
        </StyledList>
      ) : (
        <StyledInfo>
          There are no records for today. Press &quot;Add Water&quot; to add.
        </StyledInfo>
      )}
      <StyledEAddBtn onClick={onAddWaterModal}>
        <Plus />
        <span>Add water</span>
      </StyledEAddBtn>

      {isOpenedAdd && <AddWater onClose={onAddWaterModal} />}
      {isOpenedEdit && <EditWater onClose={onEditWaterModal} />}
      {isOpenedDel && <DeleteWater onClose={onDeleteWaterModal} />}
    </>
  );
};

export default Today;
