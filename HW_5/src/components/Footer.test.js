import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from './Footer';

configure({adapter: new Adapter()});

describe('<Footer/>', () => {

	const children = 'Footer';
	const footerComponent = shallow(<Footer children={children}/>);

	it('should be rendered', () => {
		expect(footerComponent).toMatchSnapshot();
	});
	it('should be rendered with class footer-wrapper', () => {
		expect(footerComponent.find('.footer-wrapper')).toHaveLength(1);
	});

});