import { shallow } from "enzyme"
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";
import { todoDemo } from "../fixtures/demoTodosState";


describe('TodoListItem component tests', () => { 

  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const todoIndex = 0;

  let wrapper = shallow( <TodoListItem
    todo={ todoDemo }
    handleToggle={ handleToggle }
    handleDelete={ handleDelete }
    index={ todoIndex }
  /> );

  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = shallow( <TodoListItem
      todo={ todoDemo }
      handleToggle={ handleToggle }
      handleDelete={ handleDelete }
      index={ todoIndex }
    /> );
  });

  test('should show component correctly', () => { 
    expect(wrapper).toMatchSnapshot();  
  });

  test('should call delete function', () => { 
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(todoDemo.id);
  });

  test('should call toggle function', () => { 
    wrapper.find('.row').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(todoDemo.id);
  });

  test('should show the text correctly', () => { 
    const todoText = wrapper.find('li').text().trim();
    expect(todoText.includes(todoDemo.desc)).toBeTruthy();
    expect(todoText.includes(todoIndex + 1)).toBeTruthy();
  });

  test('should have complete class if todo.done == true', () => { 

    const todoDemo = { id: 1, desc: 'do tests', done: true };
    const wrapper = shallow( <TodoListItem
      todo={ todoDemo }
      handleToggle={ handleToggle }
      handleDelete={ handleDelete }
      index={ todoIndex }
    /> );
    expect(wrapper.find('.completed').exists()).toBeTruthy();
    expect(wrapper.find('li').at(0).hasClass('completed')).toBeTruthy();

  });

})