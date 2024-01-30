import { useState } from 'react';
import { useFormik } from 'formik'; // Import useFormik from formik library
import {
  AddWaterModal,
  ContainerModal,
  AddWaterForm,
  PageName,
  CloseBtn,
  PageText,
  InputAndBtnWaterContainer,
  AmountWater,
  BtnPlusMinus,
  InputWaterFix,
  EnterTime,
  InputTimeWater,
  AmountWaterText,
  FinallyContainer,
  FinallyWater,
  BtnSave,
} from './AddWater.styled';

import { ReactComponent as Glass } from '../../svgs/icons/glass.svg';

export const AddWater = ({ onSave, waterCardsSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    return `${hours}:${minutes}`;
  };

  const formik = useFormik({
    initialValues: {
      amountWater: 0,
      time: getCurrentTime(),
      waterCards: waterCardsSave || [],
    },
    onSubmit: ({ amountWater, time }, { resetForm }) => {
      const newWaterCard = {
        amount: amountWater,
        time: time,
      };

      formik.setFieldValue('waterCards', [...waterCards, newWaterCard]);

      onSave(amountWater, time);

      resetForm();
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const { amountWater, time, waterCards } = formik.values;

  const handleMinusClick = () => {
    formik.setFieldValue('amountWater', Math.max(0, amountWater - 50));
  };

  const handlePlusClick = () => {
    formik.setFieldValue('amountWater', amountWater + 50);
  };

  return (
    <AddWaterModal
      onClick={handleModalClick}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      style={{ display: isModalOpen ? 'block' : 'none' }}
    >
      <AddWaterForm onSubmit={formik.handleSubmit}>
        <PageName>Edit the entered amount of water</PageName>
        <CloseBtn onClick={closeModal}>X</CloseBtn>

        {waterCards.length > 0 ? (
          <div>
            {waterCards.map((card, index) => (
              <div key={index}>
                <Glass />
                <p>{`${card.amount} ml, ${card.time}`}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No notes yet</p>
        )}

        <PageText>Correct entered data:</PageText>
        <ContainerModal>
          <AmountWater>Amount of water:</AmountWater>
          <InputAndBtnWaterContainer>
            <BtnPlusMinus name="minus" type="button" onClick={handleMinusClick}>
              -
            </BtnPlusMinus>
            <InputWaterFix
              type="number"
              name="amountWater"
              value={amountWater}
              onChange={formik.handleChange}
            />
            <BtnPlusMinus name="plus" type="button" onClick={handlePlusClick}>
              +
            </BtnPlusMinus>
          </InputAndBtnWaterContainer>
        </ContainerModal>

        <ContainerModal>
          <EnterTime>Recording time:</EnterTime>
          <InputTimeWater
            type="time"
            name="time"
            value={time}
            step="300"
            onChange={formik.handleChange}
          />
        </ContainerModal>

        <ContainerModal>
          <AmountWaterText>Enter the value of the water used:</AmountWaterText>
          <InputTimeWater
            type="number"
            name="amountWater"
            value={amountWater}
            min={0}
            onChange={formik.handleChange}
          />
        </ContainerModal>

        <FinallyContainer>
          <FinallyWater>{amountWater}ml</FinallyWater>
          <BtnSave type="submit">Save</BtnSave>
        </FinallyContainer>
      </AddWaterForm>
    </AddWaterModal>
  );
};
