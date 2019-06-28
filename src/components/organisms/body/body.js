import React from 'react';
import './style.scss';
import Paginator from '../../molecules/paginator/paginator';
import BoxCourse from '../../molecules/course-relevant-box/course-relevant';
import BoxCourseTwo from '../../molecules/course-all-box/course-all';
import BoxRadioButton from '../../molecules/radio-button-box/box-button';



const Body = ({ data, totalPage, page, items, previus, next }) => {
  return (
    <section className="body-section">
      <div className="radio-buttons-options">
        <BoxRadioButton />
      </div>

      <div className="courses-list">
        <Paginator previus={previus} next={next}  total={totalPage} page={page} />
        <div>
          {loopCourse(data)}
        </div>
        <div>
          {loopCourseAll(items)}
        </div>
      </div>
    </section>




  );
}

const loopCourse = (data) => data.map((item, key) => <BoxCourse key={key} item={item} />);
const loopCourseAll = (items) => items.map((item, key) => <BoxCourseTwo key={key} item={item} />);

export default Body;
