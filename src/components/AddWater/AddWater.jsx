import { useState } from 'react';
import { useFormik } from 'formik'; // Import useFormik from formik library
import {
  AddWaterModal,
  ContainerModal,
  AddWaterForm,
  PageName,
  CloseBtn,
  WaterCardsDiv,
  WaterCards,
  TimeCards,
  PageText,
  InputAndBtnWaterContainer,
  AmountWater,
  MinusSvg,
  PlusSvg,
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
import { ReactComponent as Cross } from '../../svgs/icons/cross.svg';

export const AddWater = ({ onSave, waterCardsSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    return `${hours}:${minutes}`;
  };

  // const getCurrentTime = () => {
  //   const now = new Date();
  //   let hours = now.getHours();
  //   const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
  //   const period = hours >= 12 ? 'PM' : 'AM';
  //   hours = hours % 12 || 12; // 0 часов становится 12 часов
  //   return `${hours}:${minutes} ${period}`;
  // };

  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${period}`;
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
        <CloseBtn onClick={closeModal}>
          <Cross />
        </CloseBtn>

        {waterCards.length > 0 ? (
          <WaterCardsDiv>
            {waterCards.map((card, index) => (
              <WaterCards key={index}>
                <Glass />
                <p>{`${card.amount} ml`}</p>
                <TimeCards>{convertTo12HourFormat(card.time)}</TimeCards>
              </WaterCards>
            ))}
          </WaterCardsDiv>
        ) : (
          <p>No notes yet</p>
        )}

        <PageText>Correct entered data:</PageText>
        <ContainerModal>
          <AmountWater>Amount of water:</AmountWater>
          <InputAndBtnWaterContainer>
            <BtnPlusMinus name="minus" type="button" onClick={handleMinusClick}>
              <MinusSvg />
            </BtnPlusMinus>
            <InputWaterFix
              type="number"
              name="amountWater"
              value={amountWater}
              onChange={formik.handleChange}
              readOnly
            />
            <BtnPlusMinus name="plus" type="button" onClick={handlePlusClick}>
              <PlusSvg />
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
