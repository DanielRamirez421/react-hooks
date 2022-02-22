import { mount } from "enzyme";
import { UserContext } from "../../components/09-useContext/context/UserContext";
import { AppRouter } from "../../components/09-useContext/routes/AppRouter";

describe('AppRouter component tests', () => {

  const user = { id: 123, name: 'Daniel', username: 'damtrax' };
  const wrapper = mount( 
    <UserContext.Provider value={{ user }}>
      <AppRouter /> 
    </UserContext.Provider>
  );

  test('should show AppRouter component', () => {
    expect(wrapper).toMatchSnapshot();
  });


});