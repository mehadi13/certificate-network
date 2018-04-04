/**
 * Enroll course transaction processor function.
 * @param {org.bjitgroup.com.participant.EvaluteExam} ee
 * @transaction
 */
async function evaluteExamTransaction(ee) {  
    // Update the exam mark with the mark.
  const examEvalution = ee.examEvalution;
  const exam = examEvalution.exam;
  
  if(!exam.isExamined){
  exam.obtainedMark = ee.mark;
  exam.isExamined = true;
  //update exam evalution
  const registeredExamEvalution = await getAssetRegistry('model.asset.ExamEvalution'); 
  await registeredExamEvalution.update(examEvalution);
  const registryBook = examEvalution.course.organization.registryBook;
  registryBook.results = [ee.examEvalution];
  const oldRegistryBook = await getAssetRegistry('model.asset.RegistryBook');
  await oldRegistryBook.update(registryBook);
  }
}