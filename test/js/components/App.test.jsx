import React from 'react';
import { App } from '../../../src/js/components/App';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  let getVideos, wrapper;

  beforeEach(() => {
    getVideos = jest.fn();
    wrapper = shallow(<App getVideos={getVideos} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run getVideos with correct arguments', () => {
    expect(getVideos.mock.calls[0]).toEqual(['javascript', true]);
  });
});