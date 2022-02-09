import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs, text, array} from '@storybook/addon-knobs';
import DrugItem from './';

const name = text('Name', 'Test Drug');
const diseases = array('Diseases', ['Test diseases 1', 'Test diseases 2']);
const description = text('Description', 'Test Description');
const released = text('Date', '2000-12-07');

storiesOf('DrugItem', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DrugItem
      name={name}
      diseases={diseases}
      description={description}
      released={released}
    />
  ))
  .add('with long name', () => (
    <DrugItem
      name={'This is a longer drug name. Essential Amino Acids'}
      diseases={['Test disease']}
      description={'Test description'}
      released={'2022-02-09'}
    />
  ))
  .add('with longer description', () => (
    <DrugItem
      name={'Test name'}
      diseases={['Test disease']}
      description={
        'This is a longer description of a medication. Provident et ratione adipisci blanditiis sit omnis. Quis sit molestias perspiciatis ea est vel totam. Est et ut aspernatur ut cupiditate voluptatem fuga incidunt. Ea vel non quidem. Quasi odio deleniti quo. Quasi et fugiat veniam temporibus hic excepturi veniam voluptatem quia.'
      }
      released={'2022-02-09'}
    />
  ));
