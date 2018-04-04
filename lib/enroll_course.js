/**
 * Enroll course transaction processor function.
 * @param {org.bjitgroup.com.participant.EnrollCourse} ec
 * @transaction
 */
async function sampleTransaction(ec) {  
    // Update the course list with the enroll course.
    ec.student.studentFile.courses = [ec.course];

    // Get the asset registry for the asset.
    const studentFile = await getAssetRegistry('model.asset.StudentFile');
    // Update the asset in the asset registry.
    await studentFile.update(ec.student.studentFile);

    // Emit an event for the modified asset.
   /* let event = getFactory().newEvent('org.acme.sample', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);*/
}
