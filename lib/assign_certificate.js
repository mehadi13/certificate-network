/**
 * Enroll course transaction processor function.
 * @param {org.bjitgroup.com.participant.AssignCertificate} ac
 * @transaction
 */
async function assignCertificateTransaction(ac) {  
  
    const certificate = ac.certificate;
    const examEvalution = ac.examEvalution;
    const student = ac.toStudent;
    
    if(examEvalution.exam.isExamined){
     if(!examEvalution.isUsedForCertificate){ certificate.examEvalution = examEvalution;
       student.studentFile.certificates = [certificate];
       certificate.isAssign = true;
       examEvalution.isUsedForCertificate = true;
       const oldCertificate = await getAssetRegistry('model.asset.Certificate');
       await oldCertificate.update(certificate);
       const oldFile = await getAssetRegistry('model.asset.StudentFile');
         await oldFile.update(student.studentFile);
     }
    }
    
  }