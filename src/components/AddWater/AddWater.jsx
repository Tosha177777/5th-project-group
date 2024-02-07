import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { v4 as uuidv4 } from 'uuid';
import {
  AddWaterModal,
  ContainerModal,
  AddWaterForm,
  PageName,
  CloseBtn,
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

import { ReactComponent as Cross } from '../../svgs/icons/cross.svg';
import { addWaterThunk } from '../../redux/waterOperations';
import { selectTodayPortions } from '../../redux/waterSelectors';

export const AddWater = ({ onClose }) => {
  const dispatch = useDispatch();
  const todayPortions = useSelector(selectTodayPortions);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    return `${hours}:${minutes}`;
  };

  const convertTimeToISOString = (timeString) => {
    const now = new Date();
    const [hours, minutes] = timeString.split(':').map(Number);

    now.setHours(hours + 2, minutes);

    return now.toISOString();
  };

  const formik = useFormik({
    initialValues: {
      amountWater: 0,
      time: getCurrentTime(),
      firstWater: false,
    },
    validationSchema: Yup.object({
      amountWater: Yup.number()
        .min(1, 'You should drink at least some water')
        .max(3000, 'It is unlikely you drank so much water')
        .required('Amount of water is required'),
      time: Yup.string().required('Recording time is required'),
    }),
    onSubmit: async ({ amountWater, time }) => {
      try {
        const waterVolume = amountWater;
        const date = convertTimeToISOString(time);

        const result = await dispatch(addWaterThunk({ waterVolume, date }));

        if (result) {
          onClose();
        } else {
          console.error('Dispatch was not successful');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseX = () => {
    onClose();
  };

  const { amountWater, time } = formik.values;

  const handleMinusClick = () => {
    formik.setFieldValue('amountWater', Math.max(0, amountWater - 50));
  };

  const handlePlusClick = () => {
    formik.setFieldValue('amountWater', amountWater + 50);
  };

  return (
    <AddWaterModal onClick={handleClick}>
      <AddWaterForm onSubmit={formik.handleSubmit}>
        <PageName>Add water</PageName>
        <CloseBtn onClick={handleCloseX}>
          <Cross />
        </CloseBtn>

        {!todayPortions.length && <p>No notes yet</p>}

        <PageText>Choose a value:</PageText>
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
