import { mount } from "enzyme";
import { UserContext } from "../../components/09-useContext/context/UserContext";
import { HomeScreen } from "../../components/09-useContext/screens/HomeScreen";

describe('HomeScreen component tests', () => {

  test('should show HomeScreen Component', () => {

    const user = { id: 123, name: 'Daniel', username: 'damtrax' };

    const wrapper = mount(
      <UserContext.Provider value={{ user }}>
        <HomeScreen />
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();

  });

});