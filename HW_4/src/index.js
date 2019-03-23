// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import constants from "./constants";
//
// const rootElement = document.getElementById('root');
//
// class Container extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       likes: 0,
//       dislikes: 0,
//     }
//   }
//   handleLikes (event) {
//     console.log('state.likes', this.state.likes);
//     this.setState({
//       likes: this.state.likes + 1,
//     })
//   }
//   render() {
//     return (
//       <div className='container stadies-wraper clearfix' >
//         <img src={ this.props.src } alt='logo' className='index-logo'/>
//         <h1>{ this.props.title }</h1>
//         <div className='like-wrapper'>
//                 <span className='like-wrapper_good'>
//                     <i
//                       onClick={this.handleLikes.bind(this)}
//                       className="fa fa-thumbs-up likes-marker"/>
//                     <span className='likes-quantity'>{ this.state.likes }</span>
//                 </span>
//           <span className='like-wrapper_bad'>
//                     <i
//                       className='fas fa-thumbs-down likes-marker'/>
//                     <span className='likes-quantity'>{ 0 }</span>
//                 </span>
//         </div>
//         <div className='clearfix description-wrapper'>
//           <button className={ this.props.class + ' float-right' }>
//             { this.props.buttonDescriptionTitle }
//           </button>
//           <div className={ 'hide' } >{ this.props.description }</div>
//         </div>
//         <button className={ this.props.class + ' float-right' }>
//           { this.props.buttonTitle }
//         </button>
//       </div>
//     );
//   }
// }
//
//
// ReactDOM.render(
//   <React.Fragment>
//     {
//       constants.studies.map(subject => {
//         console.log(subject);
//         return (
//           <Container
//             key = {subject.id}
//             title={ subject.title }
//             src={ subject.src }
//             class={ subject.class }
//             buttonTitle={ subject.buttonTitle }
//           />
//         )
//       })
//     }
//   </React.Fragment>,
//   rootElement
// );
//
import React from 'react';
import {render} from 'react-dom';
import App from './core/App.jsx';

render(<App/>, document.getElementById('root'));
