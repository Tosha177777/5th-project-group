import styled from '@emotion/styled';
import colors from '/src/root/root';

export const StyledWrap = styled.div`
width: 100%;

@media (min-width: 768px) {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    gap: 23px;
 }

`
export const StyledWrapper = styled.div`
margin-bottom: 16px;

@media (min-width: 768px) {
  padding-bottom: 8px;
    margin-bottom: 0;
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`

export const StyledText = styled.p`
margin-bottom: 8px;
font-size: 18px;
line-height: 1.33;
color: ${colors.primaryColorBlue};

@media (min-width: 768px) {
    margin-bottom: 16px;    
  }

`

export const StyledLine = styled.div`
position: relative;
top: 0;
margin-left: auto;
margin-right: auto;
margin-bottom: 3px;
margin-top: 3px;
width: 256px;
height: 8px;
background-color:${colors.secondaryColor6};
border-radius: 10px;

@media (min-width: 768px) {
    width: 325px;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }

`
export const StyledProgressLine = styled.div`
position: absolute;                   
height: 8px;
background-color:${colors.secondaryColor4};
border-radius: 10px;

`

export const StyledDote = styled.div`
position: absolute;
top: -4px;
left: 0;              
width: 14px;
height: 14px;
background-color:${colors.primaryColorWhite};
border: 1px solid ${colors.primaryColorBlue};
border-radius: 50%;

`

export const StyledNumberWrap = styled.div`
position: relative;
top: 0;
display: flex;
justify-content: space-between;

p {
display: flex;
flex-direction: column;
font-size: 12px;
line-height: 1.33;
}

p::before {
  content: '';
  position: relative;
  top: 1px;
  left: 60%;
  width: 0;
  margin-bottom: 4px;
  height: 8px;
  border-left: 2px solid ${colors.secondaryColor6};
}

`

export const StyledPercentage = styled.span`
display: block;
position: absolute;
top: 8px;
font-size: 16px;
line-height: 1.25;
`

export const StyledButton = styled.button`
height: 44px;
display: flex;
gap: 10px;
align-items: center;
padding: 6px 76px;
border-radius: 10px;
border: none;
stroke: ${colors.primaryColorWhite};
background-color:${colors.primaryColorBlue};
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

@media (min-width: 768px) {
    padding: 10px 104px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px;
  }

:hover {
   box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

span{
display:inline-block;
padding: 0 9px;
font-weight: 500;
font-size: 16px;
line-height: 1.25;
color: ${colors.primaryColorWhite};

@media (min-width: 768px) {
    padding: 0 5px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
}

`