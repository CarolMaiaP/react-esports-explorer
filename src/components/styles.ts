import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-top: 32px;
  height: calc(120px + 32px);

  div{
    width: 120px;
    margin: auto;
    background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);

    border-radius: 50%;

    display: flex;
    padding: 4px;

    transition: transform .3s;

    &:hover{
      transform: scale(1.1)
    }

    img{
      width: 100%;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`