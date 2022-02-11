import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock('../../hooks/useCounter');
jest.mock('../../hooks/useFetch');

describe('MultipleCustomHooks tests', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      state: 10,
      counter: 10,
      increment: () => {}
    });
  });

  test('Should show component', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    const wrapper = shallow( <MultipleCustomHooks /> );
    expect(wrapper).toMatchSnapshot();
  });

  test('should show info in component', () => {
    const quote = 'HelloWorld';
    const author = 'Daniel';
    useFetch.mockReturnValue({ data: [{ author, quote }], loading: false, error: null });

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect(wrapper.find('.alert-info').exists()).toBeFalsy();
    expect(wrapper.find('.mb-3').text().trim()).toBe(quote);
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe(author);
  });


});
