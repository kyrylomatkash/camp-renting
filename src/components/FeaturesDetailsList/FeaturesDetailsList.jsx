import React from 'react';
import { capitalizeFirstLetter } from '../../helpers/capitalize.js';
import Icon from '../Icon/Icon.jsx';
import { Box } from '@mui/material';

import { DetailsListStyled, DetailItem } from './FeaturesDetailsList.styled';

const FeaturesDetailsList = ({ details }) => {
  const iconsMapping = {
    AC: 'icon-ac',
    adults: 'icon-adults',
    'air conditioner': 'icon-air-conditioner',
    kitchen: 'icon-kitchen',
    beds: 'icon-bed',
    TV: 'icon-tv',
    CD: 'icon-cd',
    radio: 'icon-radio',
    shower: 'icon-shower',
    toilet: 'icon-toilet',
    freezer: 'icon-freezer',
    hob: 'icon-hob',
    microwave: 'icon-microwave',
    gas: 'icon-gas',
    water: 'icon-water',
    transmission: 'icon-transmission',
    engine: 'icon-petrol',
  };

  const data = [];

  for (const key in details) {
    if (key === 'bathroom') continue;

    if (
      key === 'transmission' ||
      key === 'engine' ||
      Number.parseInt(details[key]) !== 0
    ) {
      if (key === 'airConditioner') {
        data.splice(2, 0, 'AC');
        data.push('air conditioner');
      } else {
        data.push(key);
      }
    }
  }

  return (
    <Box
      p={2}
      boxShadow={0.5}
      borderRadius={4}
      bgcolor="background.paper"
      border={1}
      borderColor="grey.300"
    >
      <DetailsListStyled>
        {data.map((key, index) => (
          <DetailItem key={index}>
            <Icon icon={iconsMapping[key]} width={20} height={20} />

            <span>
              {key === 'airConditioner' ||
              key === 'beds' ||
              key === 'hob' ||
              key === 'adults'
                ? details[key]
                : ''}
              {key === 'transmission' || key === 'engine'
                ? capitalizeFirstLetter(details[key])
                : ` ${key}`}
            </span>
          </DetailItem>
        ))}
      </DetailsListStyled>
    </Box>
  );
};

export default FeaturesDetailsList;
