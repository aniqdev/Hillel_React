import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});

describe('<App/>', () => {

	let appComponent;

	it('should be rendered', () => {
		appComponent = shallow(<App/>);

		expect(appComponent).toMatchSnapshot();
	});

});