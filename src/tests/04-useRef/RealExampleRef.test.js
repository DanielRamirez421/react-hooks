
import { shallow } from "enzyme";
import { RealExampleRef } from "../../components/04-useRef/RealExampleRef";

describe('RealExampleRef component tests', () => { 
  
  const wrapper = shallow( <RealExampleRef /> );

  test('should show component', () => { 
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
  });

  test('should show component <MultipleCustomHook />', () => { 
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
  });  

 });