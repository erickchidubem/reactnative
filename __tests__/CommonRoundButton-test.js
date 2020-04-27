
import 'react-native';
import React from 'react';
import CommonRoundButton from '../src/components/common/CommonRoundButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  renderer.create(<CommonRoundButton />);
});
