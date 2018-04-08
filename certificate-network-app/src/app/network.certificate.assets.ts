import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Organization} from './network.certificate.participants';
import {Exam,CourseDetails} from './network.certificate.concepts';
// export namespace network.certificate.assets{
   export class ExamEvalution extends Asset {
      id: string;
      exam: Exam;
      isExamined: boolean;
      isUsedForCertificate: boolean;
      obtainedMark: number;
   }
   export class Certificate extends Asset {
      id: string;
      examEvalution: ExamEvalution;
      isGiven: boolean;
      createdBy: Organization;
   }
   export class Course extends Asset {
      code: string;
      courseDetails: CourseDetails;
      organization: Organization;
   }
// }
