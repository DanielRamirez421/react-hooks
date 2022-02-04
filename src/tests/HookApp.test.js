import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('HookApp component tests', () => {

  test('should matchSnapShot with component', () => {
    let wrapper = shallow( <HookApp /> );
    expect( wrapper ).toMatchSnapshot();
  });
  

});
