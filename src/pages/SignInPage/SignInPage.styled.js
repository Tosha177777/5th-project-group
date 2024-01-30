import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: relative;
  height: auto;

  .img-bottle {
    position: absolute;
    top: 20px;
    left: -130px;
  }

  .background-wrap {
    background-image: url(./images/desktop/Background-element-Main-Page@1x.png);
    width: 1440px;

    height: 582px;

    /* background-position: center top 49px;
    background-repeat: no-repeat;
width: 100%; */
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 49px;
    left: -100px;
  }
`;
