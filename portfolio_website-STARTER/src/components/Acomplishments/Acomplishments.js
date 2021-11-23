import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Open Source Projects'},
  { number: 3, text: 'Students', },
  { number: 4, text: 'Github Followers', },
  { number: 3, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.Text}</BoxText>
          </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
