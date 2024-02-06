import styled from 'styled-components';
import colors from '/src/root/root';

export const Text = styled.p`
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 500;
    color: ${colors.primaryColorBlack};

    @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;   
  }
`;

export const StyledList = styled.ul`
 margin-bottom: 12px;
 display: flex;
 flex-direction: column;
`
export const StyledItem = styled.li`
 display: flex;
 align-items: center;
 padding: 12px 0;
 margin-bottom: 12px;
 border-bottom: 1px solid ${colors.secondaryColor6};
 
`
export const StyledAmount = styled.p`
    margin-left: 12px;
    font-size: 18px;
    line-height: 1.33;
`;

export const StyledTime = styled.p`
    margin-left: 12px;
    margin-right: 38px;
    font-size: 12px;
    line-height: 2;
    color: ${colors.primaryColorBlack};

    @media (min-width: 768px) {
    margin-right: auto;
    margin-left: 16px;
  }
`;

export const StyledEditBtn = styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${colors.secondaryColor4};
    margin-right: 18px;
    
    :hover {
    border-bottom: 1px solid ${colors.secondaryColor4};
    }
`;

export const StyledEDeleteBtn = styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    stroke: ${colors.secondaryColor3};

    :hover {
    border-bottom: 1px solid ${colors.secondaryColor3};
    }
`;

export const StyledEAddBtn = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: ${colors.primaryColorBlue};
    background-color: transparent;
    transition: color ease-in-out 250ms;

    :hover {
    color: ${colors.secondaryColor5};
    fill: ${colors.secondaryColor5};
    }
`;

export const StyledInfo = styled.p`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    width: 250px;
    text-align: center;
    font-size: 16px;
    line-height: 1.33;
    color: ${colors.secondaryColor4}; 
`;



