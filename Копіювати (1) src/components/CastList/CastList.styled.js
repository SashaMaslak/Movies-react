import styled from 'styled-components';


export const CastLIstBlock = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 32px;
  `;

  export const ImgProfile = styled.img`
    width: 250px;
  `;

  export const TitleProfile = styled.p`
    margin-top: 12px;
    font-weight: bold;
  `;

  export const TextProfile = styled.p`
    margin-top: 12px;
    border-bottom: 1px solid #000;
  `;