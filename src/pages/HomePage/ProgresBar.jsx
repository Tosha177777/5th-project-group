import ProgressBar from 'progressbar.js';
import { FormContainer } from './ProgressBar.styled';


const MyComponent = () => { new ProgressBar.Line(FormContainer, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, MyComponent) => {
        MyComponent.setText(Math.round(MyComponent.value() * 100) + ' %');
    }
  });
MyComponent.animate(1);
  const 
return (
  <MyComponent>
    <Btn type="button" onClick=></Btn>
  </MyComponent>
)
}

export default MyComponent;