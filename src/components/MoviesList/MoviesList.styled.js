import styled from 'styled-components';

/*
 * Стили компонента ImageGallery
 */
export const MovList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
`;

export const Item = styled.li`
  text-align: center;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px #ff00ff;
    transition: box-shadow .25s linear;
  }
`;

export const ImgPoster = styled.img`
  margin: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`

export const MovieTitle = styled.h3`
  padding: 8px;
`