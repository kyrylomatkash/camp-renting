import styled from '@emotion/styled';

export const DetailsListStyled = styled.ul`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DetailItem = styled.li`
  background-color: var(--feature-background-color);
  padding: 12px 18px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-color);
  display: flex;
  gap: 8px;
  animation: slideIn 0.5s ease forwards;

  @keyframes slideIn {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  svg {
    fill: transparent;
    stroke: var(--primary-color);
  }
`;
