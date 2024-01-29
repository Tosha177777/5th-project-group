import { useEffect, useState } from 'react';
import {
  DailyNormaModalContent,
  FormulaCover,
  FormulaExplanation,
  ModalForm,
  ModalTitle,
  Overlay,
} from './DailyNormaModal.styled';

export function DailyNormaModal({ closeModal }) {
  const [weight, setWeight] = useState(0);
  const [activeTime, setActiveTime] = useState(0);
  const [gender, setGender] = useState('woman');
  const [requiredWater, setRequiredWater] = useState(0);
  const [waterToDrink, setWaterToDrink] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  });

  const hendleKeyDown = (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'weight':
        setWeight(value);
        break;
      case 'activeTime':
        setActiveTime(value);
        break;
      case 'waterToDrink':
        setWaterToDrink(value);
        break;
      case 'gender':
        setGender(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const contactData = {
      name: name,
      number: number,
    };

    addContact(contactData);
    setName('');
    setNumber('');
  };

  return (
    <Overlay onClick={closeOnBackdrop}>
      <DailyNormaModalContent>
        <ModalTitle>My daily norma</ModalTitle>
        <FormulaCover>
          <p className="formula-text">
            For girl:{' '}
            <span className="formula-acsent">V=(M*0,03) + (T*0,4)</span>
          </p>
          <p className="formula-text">
            For man:{' '}
            <span className="formula-acsent">V=(M*0,04) + (T*0,6)</span>
          </p>
        </FormulaCover>
        <FormulaExplanation>
          <span className="acsent-color">*</span> V is the volume of the water
          norm in liters per day, M is your body weight, T is the time of active
          sports, or another type of activity commensurate in terms of loads (in
          the absence of these, you must set 0)
        </FormulaExplanation>
        <ModalForm onSubmit={onSubmit}>
          <h2 className="sub-title">Calculate your rate:</h2>
          <div className="gender-lable">
            <label>
              <input
                type="radio"
                name="gender"
                value={'woman'}
                onChange={onInputChange}
                checked={gender === 'woman'}
                className="check"
              />
              <span className="chek-title">For woman</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="gender"
                value={'man'}
                onChange={onInputChange}
                checked={gender === 'man'}
                className="check"
              />
              <span className="chek-title">For man</span>
            </label>
          </div>

          <p className="weight-title">Your weight in kilograms:</p>
          <label className="weight-lable">
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={onInputChange}
              className="form-input"
            />
          </label>
          <p className="activeTime-title">
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </p>
          <label className="activeTime-lable">
            <input
              type="number"
              name="activeTime"
              value={activeTime}
              onChange={onInputChange}
              className="form-input"
            />
          </label>
          <div className="litersPerDay-container">
            <p className="litersPerDay-text">
              The required amount of water in liters per day:
            </p>{' '}
            <span className="calculated-litersPerDay">{requiredWater} L</span>
          </div>
          <h2 className="sub-title">
            Write down how much water you will drink:
          </h2>
          <label className="waterToDrink-lable">
            <input
              type="number"
              name="waterToDrink"
              value={waterToDrink}
              onChange={onInputChange}
              className="form-input"
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Save
          </button>
        </ModalForm>
      </DailyNormaModalContent>
    </Overlay>
  );
}
