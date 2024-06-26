import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchParams,
  resetFilter,
} from '../../redux/adverts/filterSlice.js';
import { selectFilter } from '../../redux/adverts/selectors';
import Icon from '../Icon/Icon.jsx';
import {
  FilterBox,
  Location,
  FilterTitle,
  EquipmentTitle,
  Line,
  EquipmentList,
  EquipmentCheckbox,
  EquipmentLabel,
  VehicleType,
  SearchBtn,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const [location, setLocation] = useState(filter.location);
  const [details, setDetails] = useState(filter.details);
  const [vehicleType, setVehicleType] = useState(filter.vehicleType || '');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilter = () => {
    if (
      filter.location ||
      Object.values(filter.details).some(Boolean) ||
      filter.vehicleType
    ) {
      dispatch(resetFilter());
      setLocation('');
      setDetails({
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
      });
      setVehicleType('');
    } else {
      dispatch(setSearchParams({ location, details, vehicleType, sortOrder }));
    }
  };

  const handleLocation = e => {
    const { value } = e.target;
    setLocation(value.trim());
  };

  const handleVehicleType = e => {
    const { value } = e.target;
    setVehicleType(value === vehicleType ? '' : value);
  };

  const handleEquipment = e => {
    const { value, checked } = e.target;
    setDetails({ ...details, [value]: checked });
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(
      setSearchParams({
        location,
        details,
        vehicleType,
        sortOrder: newSortOrder,
      })
    );
    setSortOrder(newSortOrder);
  };

  return (
    <FilterBox>
      <Location>
        <h4>Location</h4>
        <label>
          <input
            onChange={handleLocation}
            value={location}
            name="location"
            placeholder="City"
            type="text"
          />
          <Icon icon="icon-map" width={18} height={20} />
        </label>
      </Location>

      <FilterTitle>Filters</FilterTitle>

      <div>
        <EquipmentTitle>Vehicle equipment</EquipmentTitle>
        <Line />

        <EquipmentList>
          <li>
            <EquipmentCheckbox
              checked={details.ac}
              onChange={handleEquipment}
              type="checkbox"
              name="details"
              value="ac"
              id="ac"
            />
            <EquipmentLabel htmlFor="ac">
              <Icon icon="icon-ac" width={32} height={32} />
              AC
            </EquipmentLabel>
          </li>

          <li>
            <EquipmentCheckbox
              checked={details.automatic}
              onChange={handleEquipment}
              type="checkbox"
              name="details"
              value="automatic"
              id="transmission"
            />
            <EquipmentLabel htmlFor="transmission">
              <Icon icon="icon-transmission" width={32} height={32} />
              Automatic
            </EquipmentLabel>
          </li>

          <li>
            <EquipmentCheckbox
              checked={details.kitchen}
              onChange={handleEquipment}
              type="checkbox"
              name="details"
              value="kitchen"
              id="kitchen"
            />
            <EquipmentLabel htmlFor="kitchen">
              <Icon icon="icon-kitchen" width={32} height={32} />
              Kitchen
            </EquipmentLabel>
          </li>

          <li>
            <EquipmentCheckbox
              checked={details.tv}
              onChange={handleEquipment}
              type="checkbox"
              name="details"
              value="tv"
              id="tv"
            />
            <EquipmentLabel htmlFor="tv">
              <Icon icon="icon-tv" width={32} height={32} />
              TV
            </EquipmentLabel>
          </li>

          <li>
            <EquipmentCheckbox
              checked={details.bathroom}
              onChange={handleEquipment}
              type="checkbox"
              name="details"
              value="bathroom"
              id="bathroom"
            />
            <EquipmentLabel htmlFor="bathroom">
              <Icon icon="icon-shower" width={32} height={32} />
              Shower/WC
            </EquipmentLabel>
          </li>
        </EquipmentList>
      </div>

      <div>
        <EquipmentTitle>Vehicle type</EquipmentTitle>
        <Line />

        <EquipmentList>
          <li>
            <VehicleType
              onChange={handleVehicleType}
              type="radio"
              name="vehicleTypes"
              value="panelTruck"
              id="van"
            />
            <EquipmentLabel htmlFor="van">
              <Icon icon="icon-van" width={32} height={32} />
              Van
            </EquipmentLabel>
          </li>

          <li>
            <VehicleType
              onChange={handleVehicleType}
              type="radio"
              name="vehicleTypes"
              value="fullyIntegrated"
              id="fullyIntegrated"
            />
            <EquipmentLabel htmlFor="fullyIntegrated">
              <Icon icon="icon-fully-integrated" width={32} height={32} />
              Fully Integrated
            </EquipmentLabel>
          </li>

          <li>
            <VehicleType
              onChange={handleVehicleType}
              type="radio"
              name="vehicleTypes"
              value="alcove"
              id="alcove"
            />
            <EquipmentLabel htmlFor="alcove">
              <Icon icon="icon-alcove" width={32} height={32} />
              Alcove
            </EquipmentLabel>
          </li>
        </EquipmentList>
      </div>
      <SearchBtn
        onClick={handleSort}
        style={{ marginBottom: '20px', wight: '100%' }}
      >
        Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
      </SearchBtn>
      <SearchBtn onClick={handleFilter}>
        {filter.location ||
        Object.values(filter.details).some(Boolean) ||
        filter.vehicleType
          ? 'Reset'
          : 'Search'}
      </SearchBtn>
    </FilterBox>
  );
};

export default Filter;
