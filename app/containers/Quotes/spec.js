import { shallow } from 'enzyme';
import { Quotes } from './';
import { defaultState } from 'test/constants';
import s from './styles.css';

describe('Quotes component', () => {
  const quotes = [
    {
      id: '1',
      description: 'The most wasted day of all is that on which we have not laughed.',
      category: '1',
      created_at: '2017-01-01',
      last_edited_at: '2017-01-01',
    },
    {
      id: '2',
      description: 'Love you will find only where you may show yourself weak without provoking strength.',
      category: '1',
      created_at: '2017-01-05',
      last_edited_at: '2017-01-05',
    },
    {
      id: '3',
      description: 'I have never seen snow and do not know what winter means.',
      category: '2',
      created_at: '2017-01-02',
      last_edited_at: '2017-01-02',
    },
    {
      id: '4',
      description: 'I look for what needs to be done. After all, that\'s how the universe designs itself.',
      category: '2',
      created_at: '2017-01-03',
      last_edited_at: '2017-01-03',
    },
  ];

  const element = shallow(<Quotes {...defaultState} items={quotes} />);

  it('render', () => {
    expect(element.find(`.${s.root}`)).to.exist;
  });
});
