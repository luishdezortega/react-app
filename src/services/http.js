import axios from "axios";

const endPointCourses = 'https://api.cebroker.com/v2/featuredCoursesProfession?profession=36';
const endPointAllCourses ="https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27";

export const getCourses = () => {
    return axios.get(endPointCourses)
}

export const getCoursesAll = (pageIndex=1, courseName) => {
    return axios.get(endPointAllCourses, { params : { pageIndex, courseName } })
}
