import styled from "styled-components";

export const MovieDetailsBlock = styled.div`
   display: flex;
   padding: 16px;
   border-bottom: 2px solid #000;
   border-radius: 2px;
`
export const MovieDetailsBtn = styled.button`
   padding: 4px;
   &:hover {
    box-shadow: 5px 5px 5px #ff00ff;
    transition: box-shadow .25s linear;
   }
`
export const MovieTitle = styled.h2`
   padding: 8px;
`
export const MovieImg = styled.img`
   border-radius: 3px;
   width: 350px;
`

export const MovieDescribe = styled.div`
   display: block;
   padding: 10px;
`

export const MovieInfo = styled.ul`
   display: block;
   padding: 8px;
   list-style: square;
   border-bottom: 1px solid #000;
   border-radius: 2px;
`

export const MovieText = styled.p`
   display: block;
   padding: 8px;
   list-style: square;
   border-bottom: 1px solid #000;
   border-radius: 2px;
   span {
      font-weight: bold;
   }
`

export const MovieTitleText = styled.p`
   font-weight: bold;
   padding: 8px;
`

export const GenresList = styled.ul`
   margin-left: 10px;
   padding: 8px;
   list-style: square;
   border-bottom: 1px solid #000;
   border-radius: 2px;
`

export const AddInfoTitle = styled.h4`
   margin-top: 10px;
`

export const MovieInfoItem = styled.li`
   margin-top: 10px;
`









