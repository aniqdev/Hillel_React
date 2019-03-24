import React from 'react';
import School from '../school/school.jsx';

const SchoolList = (props) => {
  // console.log('School - props - ', props);
  const { title, studies, showMore } = props;
  // if (props.title) {
  //   return (
  //     <div className={props.class}>
  //       <h3>{ props.title }</h3>
  //     </div>
  //   )
  // }
  return (
   <div className={ props.className }>
     <h3>{ title }</h3>
     {
       studies.map( school => {
          return (<School
            title={school.title}
            src={school.src}
            btnClass={school.class}
            buttonTitle={school.buttonTitle}
            buttonShowDescription={school.buttonShowDescription}
            buttonHideDescription={school.buttonHideDescription}
            description={school.description}
            key={school.id}
            showMore={showMore}
            isShowLess={school.isShowLess}
          />)
         }

       )
     }
   </div>
  )
};

export default SchoolList;
