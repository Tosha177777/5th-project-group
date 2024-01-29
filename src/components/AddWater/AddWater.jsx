import { useState } from 'react';
// import { useFormik } from 'formik';
import {
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

export const AddWater = ({ onSave, waterCardsSave }) => {
  const [amountWater, setAmountWater] = useState(0);
  const [time, setTime] = useState(getCurrentTime());
  const [waterCards, setWaterCards] = useState(waterCardsSave || []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = Math.ceil(now.getMinutes() / 5) * 5;
    return `${hours}:${minutes}`;
  }

  // const formik = useFormik({
  //   initialValues: {
  //     amountWater: 0,
  //     time: getCurrentTime(),
  //   },
  //   onSubmit: ({ amountWater, time }, { resetForm }) => {
  //     const newWaterCard = {
  //       amount: amountWater,
  //       time: time,
  //     };

  //     setWaterCards((prevCards) => [...prevCards, newWaterCard]);

  //     onSave(amountWater, time);

  //     resetForm();
  //   },
  // });

  const saveData = (e) => {
    e.preventDefault();

    const newWaterCard = {
      amount: amountWater,
      time: time,
    };

    setWaterCards((prevCards) => [...prevCards, newWaterCard]);

    setAmountWater(0);
    setTime(getCurrentTime());
    onSave(waterCards);
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
      <AddWaterForm onSubmit={saveData}>
        <PageName>Edit the entered amount of water</PageName>
        <CloseBtn>X</CloseBtn>

        {waterCards.length > 0 ? (
          <div>
            {waterCards.map((card, index) => (
              <div key={index}>
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
            <BtnPlusMinus
              name="minus"
              type="button"
              onClick={handleChangeWater}
            >
              -
            </BtnPlusMinus>
            <InputWaterFix
              type="number"
              name="water"
              value={amountWater}
              onChange={handleChange}
            />
            <BtnPlusMinus name="plus" type="button" onClick={handleChangeWater}>
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
            onChange={handleChange}
          />
        </ContainerModal>

        <ContainerModal>
          <AmountWaterText>Enter the value of the water used:</AmountWaterText>
          <InputTimeWater
            type="number"
            name="water"
            value={amountWater}
            min={0}
            onChange={handleChange}
          />
        </ContainerModal>

        <FinallyContainer>
          <FinallyWater>{amountWater}ml</FinallyWater>
          <BtnSave type="submit">Save</BtnSave>
        </FinallyContainer>
      </AddWaterForm>
    </div>
  );
};
