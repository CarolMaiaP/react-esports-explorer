import styled from "styled-components";

export const SectionContainer = styled.section`
    color: white;
    background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
    padding-top: 0.25rem;
    border-radius: 10px;

    div{
      background-color: #2A2634;
      padding: 2rem;
      padding-top: 1.5rem;
      border-radius: 8px;

      h2{
        letter-spacing: -0.47px;
      }

      p{
        letter-spacing: -0.18;
      }

      ul{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        margin-top: 1.5rem;

        li{
          transition: transform .3s;

          &:hover{
            transform: scale(1.1);
          }
        }
      }

      .games-list{
        img{
          width: 90px;
          border-radius: 8px;
        }
      }
    }
`