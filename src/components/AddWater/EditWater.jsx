import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
} from './AddWater.styled';

import { ReactComponent as Glass } from '../../svgs/icons/glass.svg';
import { ReactComponent as Cross } from '../../svgs/icons/cross.svg';
import { updateWaterThunk } from '../../redux/waterOperations';

export const EditWater = ({ waterCardsSave, onClose, itemId }) => {
  const dispatch = useDispatch();

    const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${period}`;
  };

  const convertTimeToISOString = (timeString) => {
    const now = new Date();
    const [hours, minutes] = timeString.split(':').map(Number);

    now.setHours(hours + 2, minutes);

    return now.toISOString();
  };

  const convertISOToTime = (isoString) => {
    const date = new Date(isoString);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  const formik = useFormik({
    initialValues: {
      amountWater: waterCardsSave.amountWater,
      time: convertISOToTime(waterCardsSave.time),
    },
    validationSchema: Yup.object({
      amountWater: Yup.number()
        .min(50, 'You should drink at least some water')
        .max(5000, 'It is unlikely you drank so much water')
        .required('Amount of water is required'),
      time: Yup.string().required('Recording time is required'),
    }),
    onSubmit: ({ amountWater, time }) => {
      const waterVolume = amountWater;
      const date = convertTimeToISOString(time);

      const updatedWaterCard = {
        waterVolume,
        date,
      };
      dispatch(updateWaterThunk({ itemId, newRecord: updatedWaterCard }));
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
        <PageName>Edit the entered amount of water</PageName>
        <CloseBtn onClick={handleCloseX}>
          <Cross />
        </CloseBtn>

        <WaterCardsDiv>
          <WaterCards>
            <Glass />
            <p>{`${amountWater} ml`}</p>
            <TimeCards>{convertTo12HourFormat(time)}</TimeCards>
          </WaterCards>
        </WaterCardsDiv>

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

