import { useEffect, useState } from 'react';
import {
  DailyNormaModalContent,
  ExitBtn,
  FormulaCover,
  FormulaExplanation,
  ModalForm,
  ModalTitle,
  Overlay,
} from './DailyNormaModal.styled';

import { ReactComponent as Xcros } from '../../svgs/icons/xcros.svg';
import { useDispatch } from 'react-redux';
import { changeWaterRate } from '../../redux/waterReducer';

export function DailyNormaModal({ closeModal }) {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [activeTime, setActiveTime] = useState(0);
  const [gender, setGender] = useState('woman');
  const [requiredWater, setRequiredWater] = useState(0);
  const [waterResult, setWaterResult] = useState(0);
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
      document.body.style.overflow = 'auto';
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
        setWaterResult(value);
        break;
      case 'gender':
        setGender(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const water = {
      waterRate: waterResult * 1000,
    };
    if (waterResult > 0) {
      dispatch(changeWaterRate(water));
      setWeight(0);
      setActiveTime(0);
      setWaterResult(0);
      closeModal();
    }
  };

  const requiredWaterCalculation = (gender, weight, time) => {
    if (gender === 'woman') {
      const woman = weight * 0.03 + time * 0.4;
      setRequiredWater(woman.toFixed(1));
    } else {
      const man = weight * 0.04 + time * 0.6;
      setRequiredWater(man.toFixed(1));
    }
  };

  useEffect(() => {
    requiredWaterCalculation(gender, weight, activeTime);
  }, [activeTime, weight, gender]);

  return (
    <Overlay onClick={closeOnBackdrop}>
      <DailyNormaModalContent>
        <ExitBtn>
          <Xcros />
        </ExitBtn>

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
              min={0}
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
              min={0}
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
              min={0}
              max={15}
              name="waterToDrink"
              value={waterResult}
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
