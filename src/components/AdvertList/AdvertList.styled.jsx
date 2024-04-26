import styled from '@emotion/styled';

export const AdvertListWrapper = styled.div`
  padding-bottom: 100px;
  width: 888px;
  animation: fadeInDown 0.5s ease;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NoResultsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--button-color);
  animation: fadeInUp 0.5s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const AdvertListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  padding: 16px 32px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  background-color: inherit;
  outline: none;
  border-radius: 200px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #101828;
  transition: border-color 0.3s ease;
  animation: fadeIn 0.5s ease;

  &:hover {
    border-color: #d84343;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
