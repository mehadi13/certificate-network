import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Student,Instructor} from './network.certificate.participants';
import {Course} from './network.certificate.assets';
// export namespace network.certificate.concepts{
   export class Exam {
      totalMark: number;
      course: Course;
      student: Student;
   }
   export class CourseDetails {
      name: string;
      description: string;
      instructor: Instructor;
   }
// }
