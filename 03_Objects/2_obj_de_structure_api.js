const course = {
    name : 'learning js',
    courseInstructor : 'Varun Chandola',
    price : 9999,
    registrations : 10000
}

console.log(course.courseInstructor) // Varun Chandola

//const/let {objectMember} = objectName
const {courseInstructor} = course;
// course.courseInstructor is changed to {courseInstructor}
console.log(courseInstructor) // Varun Chandola

// we can also destructure the objMember name
// const/let {objMemName : yourPreferedName}  = ObjecName
const {courseInstructor : teacher} = course
console.log(teacher); // Varun Chandola