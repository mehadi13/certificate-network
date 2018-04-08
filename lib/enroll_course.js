/**
 * Enroll Course transaction processor function.
 * @param {network.certificate.transactions.EnrollCourse} ec
 * @transaction
 */
async function enrollCourseTransaction(ec) {
  const oldStudent = ec.student;
  
  //check if the enroll courses is available
  oldStudent.enrolledCourses = ( typeof oldStudent.enrolledCourses != 'undefined' && oldStudent.enrolledCourses instanceof Array ) ? oldStudent.enrolledCourses : [];
  
  const enrolledCourses = oldStudent.enrolledCourses;
  
  //check if the student already enrolled selected course
  var isEnrolled = false;
  enrolledCourses.forEach(function(enrolledCourse) {
    if(enrolledCourse.id==ec.course.id){
      isEnrolled=true;
    }
  });
  
  //if the student first time enrolled the course
  if(!isEnrolled){
  oldStudent.enrolledCourses.push(ec.course);
  const obj = await getParticipantRegistry('network.certificate.participants.Student');
  await obj.update(oldStudent);
  }else{
    errorHandeler('You are already enrolled this course');
  }
}
