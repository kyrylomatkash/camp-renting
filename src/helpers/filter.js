export const filterAdverts = (adverts, filter) => {
  const filteredByLocation = filter.location
    ? adverts.filter(ad => ad.location.includes(filter.location))
    : adverts;

  const filteredByDetails = Object.keys(filter.details).reduce(
    (filtered, detail) => {
      if (filter.details[detail]) {
        if (detail === 'ac') {
          return filtered.filter(ad => ad.details.airConditioner >= 1);
        } else if (detail === 'automatic') {
          return filtered.filter(ad => ad.transmission === 'automatic');
        } else if (detail === 'kitchen') {
          return filtered.filter(ad => ad.details.kitchen >= 1);
        } else if (detail === 'tv') {
          return filtered.filter(ad => ad.details.TV >= 1);
        } else {
          return filtered.filter(ad => ad.details[detail]);
        }
      } else {
        return filtered;
      }
    },
    filteredByLocation
  );

  const filteredByVehicleType = filter.vehicleType
    ? filteredByDetails.filter(ad => ad.form === filter.vehicleType)
    : filteredByDetails;

  const sortedAdverts = filteredByVehicleType.slice().sort((a, b) => {
    if (filter.sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return sortedAdverts;
};
