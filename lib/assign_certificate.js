/**
 * Assign Certificate transaction processor function.
 * @param {network.certificate.transactions.AssignCertificate} ac
 * @transaction
 */
async function assignCertificate(ac) {
  const certificate = ac.certificate;
  const examEvalution = certificate.examEvalution;
  if(!certificate.isGiven && examEvalution.isExamined && !certificate.examEvalution.isUsedForCertificate){
  
  //check if the student already enrolled selected course
  const enrolledCourses = examEvalution.exam.student.enrolledCourses;
  var isEnrolled = false;
  enrolledCourses.forEach(function(enrolledCourse) {
    if(enrolledCourse.code==examEvalution.exam.course.code){
      isEnrolled=true;
    }
  });
  
  if(isEnrolled){
  examEvalution.isUsedForCertificate = true;
  const obj = await getAssetRegistry('network.certificate.assets.ExamEvalution');
  await obj.update(examEvalution);
  
  certificate.isGiven = true;
  const updateCertificate = await getAssetRegistry('network.certificate.assets.Certificate');
  await updateCertificate.update(certificate);
  
  ac.certificate.examEvalution.exam.student.certificates = ( typeof 		 ac.certificate.examEvalution.exam.student.certificates  != 'undefined' && ac.certificate.examEvalution.exam.student.certificates  instanceof Array ) ? ac.certificate.examEvalution.exam.student.certificates  : [];
  
  examEvalution.exam.student.certificates.push(certificate);
  const getStudent = await getParticipantRegistry('network.certificate.participants.Student');
  await getStudent.update(examEvalution.exam.student);
  }else{
    errorHandeler('This course is not enrolled');
  }
  
  }else{
    errorHandeler('Given Certificate or Exam Evalution already used or Exam Evalution is not finish');
  }
}
function errorHandeler(errorMessage){
  let factory = getFactory();
    let errorEvent = factory.newEvent('network.certificate.events', 'ErrorEvent');
    errorEvent.errorMessage = errorMessage;
    emit(errorEvent);
}
