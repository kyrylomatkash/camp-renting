import styled from '@emotion/styled';

export const CatalogStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
