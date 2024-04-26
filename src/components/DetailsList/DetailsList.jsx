import React from 'react';
import Icon from '../Icon/Icon';
import { DetailsListStyled } from './DetailsList.styled';
import { Chip } from '@mui/material';

const DetailsList = ({ data }) => {
  const getSuitability = numBeds => {
    if (numBeds <= 2) {
      return 'Suitable for small company or family';
    } else if (numBeds === 3 || numBeds === 4) {
      return 'Suitable for average family';
    } else if (numBeds === 6) {
      return 'Suitable for big company';
    } else {
      return 'Number of beds not specified';
    }
  };

  return (
    <DetailsListStyled>
      <li>
        <Icon icon="icon-adults" width={20} height={20} />
        {data.adults} adults
      </li>

      <li className="capitalized">
        <Icon icon="icon-transmission" width={20} height={20} />
        {data.transmission}
      </li>

      <li className="capitalized">
        <Icon icon="icon-petrol" width={20} height={20} />
        {data.engine}
      </li>

      {data.details.kitchen >= 1 && (
        <li>
          <Icon icon="icon-kitchen" width={20} height={20} />
          Kitchen
        </li>
      )}

      <li>
        <Icon icon="icon-bed" width={20} height={20} />
        {data.details.beds} beds
        <Chip label={getSuitability(data.details.beds)} size="small" />
      </li>

      {data.details.airConditioner >= 1 && (
        <li>
          <Icon icon="icon-ac" width={20} height={20} />
          AC
        </li>
      )}
    </DetailsListStyled>
  );
};

export default DetailsList;
