import React from 'react';
import { VideoList } from '../../../src/js/components/VideoList';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('VideoList Component', () => {
  let videoList, selectVideo;

  beforeEach(() => {
    videoList = [
      {
        id: { videoId: '1'},
        snippet: {
          title: 'some title1',
          description: 'some description1',
          thumbnails: {
            default: {
              url: 'someurl1'
            }
          }
        }
      },
      {
        id: { videoId: '2'},
        snippet: {
          title: 'some title2',
          description: 'some description2',
          thumbnails: {
            default: {
              url: 'someurl2'
            }
          }
        }
      }
    ];
    selectVideo = jest.fn();
  });

  it('renders', () => {
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={false}
        error={null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Loading message', () => {
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={true}
        error={null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Error message', () => {
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={false}
        error={{ message: 'Error while loading videos'}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('passes on the selectVideo function', () => {
    expect(selectVideo.mock.calls.length).toBe(0);
  });
});