import { shallow } from "enzyme";
import { TodoList } from "../../components/08-useReducer/TodoList";
import { demoState } from "../fixtures/demoTodosState";


describe('TodoList component tests', () => { 
  
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow( <TodoList
    toDosState={ demoState }
    handleToggle={ handleToggle }
    handleDelete={ handleDelete }
  /> );

  test('should show component', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain two <TodoListItem />', () => { 
    expect(wrapper.find('TodoListItem').length).toBe(demoState.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual( expect.any(Function) );
  });

});