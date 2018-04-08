import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Student} from './network.certificate.participants';
import {Certificate,Course,ExamEvalution} from './network.certificate.assets';
// export namespace network.certificate.transactions{
   export class AssignCertificate extends Transaction {
      certificate: Certificate;
   }
   export class EnrollCourse extends Transaction {
      student: Student;
      course: Course;
   }
   export class EvaluteExam extends Transaction {
      examEvalution: ExamEvalution;
      mark: number;
   }
// }
