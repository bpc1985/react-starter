import { shallow } from 'enzyme';
import { Login } from './';
import { defaultState } from 'test/constants';
import s from './styles.css';

describe('Login component', () => {
  const element = shallow(<Login {...defaultState} />);

  it('render', () => {
    expect(element.find(`.${s.root}`)).to.exist;
  });
});
