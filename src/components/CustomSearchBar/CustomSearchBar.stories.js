import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import CustomSearchBar from './';

const value = text('Value', 'Test Value');
const placeholder = text('Placeholder', 'Test placeholder');
const mockOnClearText = action('Clear text called');
const mockOnChangeText = action('Change text called');

storiesOf('CustomSearchBar', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CustomSearchBar
      value={value}
      placeholder={placeholder}
      onClearText={mockOnClearText}
      onChangeText={mockOnChangeText}
    />
  ))
  .add('with longer search text value', () => (
    <CustomSearchBar
      value={'This is a longer text value for custom search bar component'}
      placeholder={'Test placeholder'}
      onClearText={mockOnClearText}
      onChangeText={mockOnChangeText}
    />
  ));
