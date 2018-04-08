/**
 * Evalute Exam transaction processor function.
 * @param {network.certificate.transactions.EvaluteExam} ee
 * @transaction
 */
async function evaluteExamTransaction(ee) {
  const examEvalution = ee.examEvalution;
  if( !examEvalution.isExamined && ee.mark <= examEvalution.exam.totalMark){
  examEvalution.obtainedMark = ee.mark;
  examEvalution.isExamined = true;
  const obj = await getAssetRegistry('network.certificate.assets.ExamEvalution');
  await obj.update(examEvalution);
  }else{
    errorHandeler('already examined or invalide marking');
  }
}