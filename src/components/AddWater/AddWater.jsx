import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  ErrorMsg,
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
    validationSchema: Yup.object({
      amountWater: Yup.number()
        .min(1, 'You should drink at least some water')
        .max(3000, 'It is unlikely you drank so much water')
        .required('Amount of water is required'),
      time: Yup.string().required('Recording time is required'),
    }),
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
            <WaterCards>
              <Glass />
              <p>{`${waterCards[0].amount} ml`}</p>
              <TimeCards>{convertTo12HourFormat(waterCards[0].time)}</TimeCards>
            </WaterCards>
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
        {formik.touched.amountWater && formik.errors.amountWater ? (
          <ErrorMsg>{formik.errors.amountWater}</ErrorMsg>
        ) : null}

        <FinallyContainer>
          <FinallyWater>{amountWater}ml</FinallyWater>
          <BtnSave type="submit">Save</BtnSave>
        </FinallyContainer>
      </AddWaterForm>
    </AddWaterModal>
  );
};
