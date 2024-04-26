import React from 'react';
import Icon from '../Icon/Icon';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm';
import { Box } from '@mui/material';

import { Rating, Location, ImgThumb } from '../AdvertItem/AdvertItem.styled';
import {
  AdvertModalContent,
  CloseBtn,
  Title,
  RatingLocationWrapper,
  Price,
  ScrollBox,
  GalleryWrapper,
  Description,
  TabsBox,
  Tab,
  Line,
  TabsWrapper,
} from './AdvertModal.styled';

const AdvertModal = ({ item, onClose, activeTab, setActiveTab }) => {
  const handleTabClick = index => {
    setActiveTab(index);
  };

  if (!item) {
    return null;
  }

  return (
    <AdvertModalContent>
      <CloseBtn type="button" onClick={onClose}>
        <Icon icon="icon-close" width={32} height={32} />
      </CloseBtn>

      <Title>{item.name}</Title>
      <RatingLocationWrapper>
        <Rating>
          <Icon icon="icon-star" width={16} height={16} />
          <button
            type="button"
            aria-label="Open reviews"
            onClick={() => handleTabClick(2)}
          >
            {`${item.rating}(${item.reviews.length} Reviews)`}
          </button>
        </Rating>
        <Box
          p={2}
          boxShadow={0.5}
          borderRadius={4}
          bgcolor="background.paper"
          border={1}
          borderColor="grey.300"
        >
          <Location>
            <Icon icon="icon-location" width={16} height={16} />
            <p>{item.location.split(',').reverse().join(', ')}</p>
          </Location>
        </Box>
      </RatingLocationWrapper>

      <Price>€{item.price.toFixed(2)}</Price>
      <ScrollBox>
        <div>
          <GalleryWrapper>
            {item.gallery.map((image, index) => (
              <ImgThumb key={index}>
                <img src={image} alt={item.name} />
              </ImgThumb>
            ))}
          </GalleryWrapper>
          <Box
            p={2}
            boxShadow={0.5}
            borderRadius={4}
            bgcolor="background.paper"
            border={1}
            borderColor="grey.300"
          >
            <Description>Description: {item.description}</Description>
          </Box>
        </div>
      </ScrollBox>
      <TabsBox>
        <Tab
          active={activeTab === 1}
          onClick={() => handleTabClick(1)}
          isActive={activeTab === 1}
        >
          Features
        </Tab>
        <Tab
          active={activeTab === 2}
          onClick={() => handleTabClick(2)}
          isActive={activeTab === 2}
        >
          Reviews
        </Tab>
      </TabsBox>
      <Line />
      <TabsWrapper>
        <div>
          {activeTab === 1 && <Features item={item} />}
          {activeTab === 2 && <Reviews reviews={item.reviews} />}
        </div>
        {activeTab !== 0 && <BookingForm />}
      </TabsWrapper>
    </AdvertModalContent>
  );
};

export default AdvertModal;
