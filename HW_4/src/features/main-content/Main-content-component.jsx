import React, {Component} from 'react';
import styles from './Main-content.module.css';
import SchoolList from './scool-list/school-list-component.jsx';
import constants from '../../constants';

// const MainContent = (props) => {
//   console.log('Main - props - ', props);
//   if (props.title) {
//     return (
//       <div className={styles.someClass + ' container'}>
//         <h1>{ props.title }</h1>
//         <SchoolList
//           title='School List'
//           class={styles.newClass}
//         />
//       </div>
//     )
//   } else {
//     return null;
//   }
//
// };
console.log('constants', constants);

const studies = constants.studies;
console.log('studies', constants.studies);

const title = 'School list';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studies,
      title
    }
  }
  showMore = (title) => {
    console.log(121212, title);

    this.setState({
        studies: this.state.studies.map(c => {
            return c.title === title
                ? { ...c, isShowLess: !c.isShowLess }
                : c;
        }),
    });
  };
  render() {
    if (this.props.title) {
    return (
      <div className={styles.someClass + ' container'}>
        <h1>{ this.props.title }</h1>
        <SchoolList
          studies={ this.state.studies }
          title='School List'
          class={styles.newClass}
          showMore={this.showMore}
        />
      </div>
    )
  } else {
    return null;
  }
  }
}

export default MainContent;
