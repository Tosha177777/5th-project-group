import { 
    TodayContainer, 
    PencilSvg, 
    BtnDelet, 
    TrashSvg, 
    BtnAdd,
    PlusSvg,
    Text,
    GlassSvg
 } from './Today.styled';

export const Today = () => {
    return (
      <>
      <TodayContainer>
        <Text>Today</Text>
       <GlassSvg />
       <Text>amount</Text>
       <Text>time</Text>
       <PencilSvg />
       <BtnDelet name='trash' type='submint'>
        <TrashSvg />
       </BtnDelet>
       <BtnAdd name='plus' type='submint'>
       <PlusSvg />
       <p>Add water</p>
       </BtnAdd>
      </TodayContainer>
      </>
    );
}

