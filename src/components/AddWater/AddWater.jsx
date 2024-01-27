import { useState } from 'react';
import {
  ContainerModal,
  AddWaterBackground,
  PageName,
  CloseBtn,
  PageText,
  AmountWater,
  BtnPlusMinus,
  InputWaterFix,
  EnterTime,
  InputTimeWater,
  AmountWaterText,
  FinallyWater,
  BtnSave,
} from './AddWater.styled';

export const AddWater = ({ initialAmount, initialTime, onSave }) => {
  const [amountWater, setAmountWater] = useState(initialAmount || 0);
  const [time, setTime] = useState(initialTime || getCurrentTime());
  const [hasPreviousData] = useState(!!initialAmount);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = Math.ceil(now.getMinutes() / 5) * 5;
    return `${hours}:${minutes}`;
  }

  const saveData = () => {
    onSave(amountWater, time);
  };

  const handleChange = (e) => {
    if (e.target.name === 'water') {
      setAmountWater(e.target.value);
    } else if (e.target.name === 'time') {
      setTime(e.target.value);
    }
  };

  const handleChangeWater = (e) => {
    const step = 50;

    if (e.target.name === 'plus') {
      setAmountWater((prevAmount) => prevAmount + step);
    } else if (e.target.name === 'minus') {
      setAmountWater((prevAmount) => Math.max(0, prevAmount - step));
    }
  };

  return (
    <div>
      <AddWaterBackground>
        <PageName>Edit the entered amount of water</PageName>
        <CloseBtn>X</CloseBtn>

        {hasPreviousData ? (
          <div>
            <p>{`${initialAmount} ml, ${initialTime}`}</p>
          </div>
        ) : (
          <p>No notes yet</p>
        )}

        <PageText>Correct entered data:</PageText>
        <ContainerModal>
          <AmountWater>Amount of water:</AmountWater>
          <BtnPlusMinus name="minus" onClick={handleChangeWater}>
            -
          </BtnPlusMinus>
          <InputWaterFix type="number" name="water" value={amountWater} />
          <BtnPlusMinus name="plus" onClick={handleChangeWater}>
            +
          </BtnPlusMinus>
        </ContainerModal>

        <ContainerModal>
          <EnterTime>Recording time:</EnterTime>
          <InputTimeWater
            type="time"
            name="time"
            value={time}
            step="300"
            onChange={handleChange}
          />
        </ContainerModal>

        <ContainerModal>
          <AmountWaterText>Enter the value of the water used:</AmountWaterText>
          <InputTimeWater
            type="number"
            name="water"
            value={amountWater}
            onChange={handleChange}
          />
        </ContainerModal>

        <div>
          <FinallyWater>{amountWater}</FinallyWater>
          <BtnSave onClick={saveData}>Save</BtnSave>
        </div>
      </AddWaterBackground>
    </div>
  );
};
