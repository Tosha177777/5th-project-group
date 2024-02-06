import { useState } from 'react';

import {
  TodayContainer,
  PencilSvg,
  BtnDelet,
  TrashSvg,
  BtnAdd,
  PlusSvg,
  Text,
  GlassSvg,
} from './Today.styled';

import { AddWater } from '../AddWater/AddWater';
import { EditWater } from '../AddWater/EditWater';
import { DeleteWater } from '../AddWater/DeleteWater';

export const Today = () => {
  const [isOpenedAdd, setIsOpenedAdd] = useState(false);
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);
  const [isOpenedDel, setIsOpenedDel] = useState(false);

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
      <TodayContainer>
        <Text>Today</Text>
        <GlassSvg />
        <Text>amount</Text>
        <Text>time</Text>
        <PencilSvg />
        <BtnDelet name="trash" type="button" onClick={onDeleteWaterModal}>
          <TrashSvg />
        </BtnDelet>
        <BtnAdd name="plus" type="button" onClick={onAddWaterModal}>
          <PlusSvg />
          <p>Add water</p>
        </BtnAdd>

        {isOpenedAdd && <AddWater onClose={onAddWaterModal} />}
        {isOpenedEdit && <EditWater onClose={onEditWaterModal} />}
        {isOpenedDel && <DeleteWater onClose={onDeleteWaterModal} />}
      </TodayContainer>
    </>
  );
};
