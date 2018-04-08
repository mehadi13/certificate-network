import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Course,Certificate} from './network.certificate.assets';
// export namespace network.certificate.participants{
   export abstract class Person extends Participant {
      id: string;
      firstName: string;
      lastName: string;
   }
   export class Student extends Person {
      enrolledCourses: Course[];
      certificates: Certificate[];
   }
   export class Instructor extends Person {
   }
   export class Organization extends Participant {
      id: string;
      name: string;
   }
// }
