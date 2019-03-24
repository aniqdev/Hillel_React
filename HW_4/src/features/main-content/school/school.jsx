import React, { Component } from 'react';
import './school-component.css';
import Button from '../../global/button/button-component'

class School extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      a:1
    }
  }

  doReaction(isLike){
    if(isLike){
      let x = this.state.likes;
      this.setState({likes: ++x});
    }else{
      let x = this.state.dislikes;
      this.setState({dislikes: ++x});
    }
  }

  render() {
    const { title, src, btnClass, buttonTitle, buttonShowDescription, description, showMore, buttonHideDescription, isShowLess } = this.props;

    return (
      <div className='clearfix description-wrapper'>
        <div className='container stadies-wraper clearfix' >
          <img src={ src } alt='logo' className='index-logo'/>
          <h1>{ title }</h1>
          <div className='like-wrapper'>
                      <span className='like-wrapper_good'>
                          <i onClick={ this.doReaction.bind(this, 1) } className="fa fa-thumbs-up likes-marker"> </i>
                          <span className='likes-quantity'>{ this.state.likes }</span>
                      </span>
            <span className='like-wrapper_bad'>
                          <i onClick={ this.doReaction.bind(this, 0) } className='fa fa-thumbs-down likes-marker'> </i>
                          <span className='likes-quantity'>{ this.state.dislikes }</span>
                      </span>
          </div>
          <div className='clearfix description-wrapper'>
            <Button
              onClick={ showMore.bind(null, title) }
              btnClass={ btnClass + ' float-right' } >
              { isShowLess ? buttonShowDescription : buttonHideDescription  || 'X' }
            </Button>
            <div className={ (isShowLess ? 'hide' : 'show') + ' description-wrapper_text' } >
              { description }
            </div>
          </div>
          <button className={ btnClass + ' float-right' }>
            { buttonTitle }
          </button>
        </div>
      </div>
    )
  }
};

export default School;
