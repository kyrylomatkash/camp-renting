import React from 'react';
import { Box } from '@mui/material';

import { capitalizeFirstLetter } from '../../helpers/capitalize';

import {
  VehicleDetailsStyled,
  VehicleDetailItem,
} from './VehicleDetails.styled';

const VehicleDetails = ({ item }) => {
  return (
    <VehicleDetailsStyled>
      <Box
        p={2}
        boxShadow={0.5}
        borderRadius={4}
        bgcolor="background.paper"
        border={1} // Add border
        borderColor="grey.300" // Add border color
      >
        <VehicleDetailItem>
          <p>Form</p>
          <p>{capitalizeFirstLetter(item.form)}</p>
        </VehicleDetailItem>
        <VehicleDetailItem>
          <p>Length</p>
          <p>{item.length}</p>
        </VehicleDetailItem>
        <VehicleDetailItem>
          <p>Width</p>
          <p>{item.width}</p>
        </VehicleDetailItem>
        <VehicleDetailItem>
          <p>Height</p>
          <p>{item.height}</p>
        </VehicleDetailItem>
        <VehicleDetailItem>
          <p>Tank</p>
          <p>{item.tank}</p>
        </VehicleDetailItem>
        <VehicleDetailItem>
          <p>Consumption</p>
          <p>{item.consumption}</p>
        </VehicleDetailItem>
      </Box>
    </VehicleDetailsStyled>
  );
};

export default VehicleDetails;
