import { mount } from "enzyme";
import { UserContext } from "../../components/09-useContext/context/UserContext";
import { LoginScreen } from "../../components/09-useContext/screens/LoginScreen";

describe('LoginScreen component tests', () => {

  const setUser = jest.fn();
  const wrapper = mount( 
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen /> 
    </UserContext.Provider>
  );

  test('should show component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call setUser fnc', () => {
    // wrapper.find( 'button' ).simulate('click'); // Another way to simulate click
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: 'Daniel', username: 'damtrax' });
  });

});