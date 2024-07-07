import styled from 'styled-components';

export const ImageContainer = styled.picture`
  display: none;

  @media (min-width: 768px) {
    display: block;

    &:nth-child(3) {
      grid-area: 1 / 3 / 1 / 5;
    }

    &:nth-child(4) {
      grid-area: 2 / 1 / 3 / 3;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;