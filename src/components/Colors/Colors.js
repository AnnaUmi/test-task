import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@ticketmaster/prism';
import styled from 'styled-components';

const Color = styled.div`
  width: 120px;
  height: 60px;
  background-color: ${({ color }) => color};
  margin: 20px 20px 20px 0;
`;

const Flex = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const approvedColors = [
  {
    title: 'Brand Colors',
    colorsList: [
      {
        name: 'Azure',
        color: colors.azure.base,
      },
      {
        name: 'Pearl Black',
        color: colors.blackPearl,
      },
    ],
  },
  {
    title: 'Marketplace Accent Colors',
    colorsList: [
      {
        name: 'Helitrope',
        color: colors.heliotrope.base,
      },
      {
        name: 'Dark Helitrope',
        color: colors.heliotrope.dark,
      },
      {
        name: 'Light Helitrope',
        color: colors.heliotrope.light,
      },
      {
        name: 'Cruz',
        color: colors.cruz.base,
      },
      {
        name: 'Dark Cruz',
        color: colors.cruz.dark,
      },
      {
        name: 'Light Cruz',
        color: colors.cruz.light,
      },
    ],
  },
  {
    title: 'Enterprise Accent Colors',
    colorsList: [
      {
        name: 'Turquoise',
        color: colors.turquoise.base,
      },
      {
        name: 'Dark Turquoise',
        color: colors.turquoise.dark,
      },
      {
        name: 'Light Turquoise',
        color: colors.turquoise.light,
      },
      {
        name: 'Aquamarine',
        color: colors.aquamarine,
      },
    ],
  },
  {
    title: 'Grays',
    colorsList: [
      {
        name: 'Onyx',
        color: colors.onyx.base,
      },
      {
        name: 'Slate',
        color: colors.slate,
      },
      {
        name: 'Moonrock',
        color: colors.moonrock,
      },
      {
        name: 'Diatomite',
        color: colors.diatomite,
      },
      {
        name: 'Quartz',
        color: colors.quartz,
      },
      {
        name: 'White',
        color: colors.white.base,
      },
    ],
  },
  {
    title: 'Feedback Colors',
    colorsList: [
      {
        name: 'Ruby',
        color: colors.ruby.base,
      },
      {
        name: 'Dark Ruby',
        color: colors.ruby.darkRuby,
      },
      {
        name: 'Light Ruby',
        color: colors.ruby.lightRuby,
      },
      {
        name: 'Amber',
        color: colors.amber.base,
      },
      {
        name: 'Dark Amber',
        color: colors.amber.darkAmber,
      },
      {
        name: 'Light Amber',
        color: colors.amber.lightAmber,
      },
      {
        name: 'Emerald',
        color: colors.emerald.base,
      },
      {
        name: 'Dark Emerald',
        color: colors.emerald.dark,
      },
      {
        name: 'Light Emerald',
        color: colors.emerald.light,
      },
    ],
  },
  {
    title: 'Button Colors',
    colorsList: [
      {
        name: 'Hover Azure',
        color: colors.azure.base,
      },
      {
        name: 'Pressed Azure',
        color: colors.azure.pressed,
      },
      {
        name: 'Hover Azure Light',
        color: colors.azure.light,
      },
      {
        name: 'Pressed Azure Light',
        color: colors.azure.pressedLight,
      },

      {
        name: 'Hover Emerald',
        color: colors.emerald.hover,
      },
      {
        name: 'Pressed Emerald',
        color: colors.emerald.pressed,
      },
    ],
  },
];

const ColorBox = ({ color, name }) => (
  <div>
    <span>{name}</span>
    <Color color={color} />
  </div>
);

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const ColorSection = ({ title, colorsList }) => (
  <div>
    <h3>{title}</h3>
    <Flex>
      {colorsList.map(color => (
        <ColorBox key={color.name} {...color} />
      ))}
    </Flex>
  </div>
);

ColorSection.propTypes = {
  title: PropTypes.string.isRequired,
  colorsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const Colors = () =>
  approvedColors.map(colorBlock => <ColorSection key={colorBlock.title} {...colorBlock} />);

export default Colors;
