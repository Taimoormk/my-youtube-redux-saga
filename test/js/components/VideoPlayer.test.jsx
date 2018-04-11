import React from 'react';
import { VideoPlayer } from '../../../src/js/components/VideoPlayer';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('VideoListEntry Component', () => {
  let video, wrapper;

  it('renders', () => {
    video = {
      id: {
        videoId: '1234'
      },
      snippet: {
        title: 'some title',
        description: 'some description'
      }
    };
    wrapper = shallow(
      <VideoPlayer 
        selectedVideo={video}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders given an empty video object', () => {
    video = {};
    wrapper = shallow(
      <VideoPlayer 
        selectedVideo={video}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});