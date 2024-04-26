import styled from '@emotion/styled';

export const VehicleDetailsStyled = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const VehicleDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
  }
`;
