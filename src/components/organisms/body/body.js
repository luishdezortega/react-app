import React from 'react';
import './style.scss';
import Paginator from '../../molecules/paginator/paginator';
import BoxCourse from '../../molecules/box-course/box-course';
import BoxCourseTwo from '../../molecules/box-course-two/box-course-two';


const Body = ({ data, totalPage, page, items }) => {
  return (
    <div className="body"  >
      <Paginator total={totalPage} page={page} />
      <div>
        {loopCourse(data)}
      </div>
    </div>
  );
}

const loopCourse = (data) => data.map( (item, key) => <BoxCourse key={key} item={item} /> )

export default Body;
