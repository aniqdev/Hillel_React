import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from './Header';

configure({adapter: new Adapter()});

describe('<Header/>', () => {

	let headerComponent;

	const mockedProps = {
		onGetMovies: jest.fn(),
        onInputChange: jest.fn()
	}

	beforeEach(() => {
		headerComponent = shallow(<Header {...mockedProps}/>);
	});

	it('should be rendered', () => {
		expect(headerComponent).toMatchSnapshot();
	});

	it('should handlerSearch has call in clicking to search btn', () => {
		headerComponent.find('#bySearch').simulate('click');

		expect(mockedProps.onGetMovies).toHaveBeenCalled();
	});

	it('should handlerSearch has call in clicking to search btn', () => {
		headerComponent.find('.k-input').simulate('change');

		expect(mockedProps.onInputChange).toHaveBeenCalled();
	});

	it('check input handlerChange has to called with value', () => {
		const value = 'qwerty'
		headerComponent.find('.k-input').simulate('change', { target: { value }});

		expect(mockedProps.onInputChange).toBeCalledWith({ target: { value }});
	});



});