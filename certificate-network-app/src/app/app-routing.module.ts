import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { ExamEvalutionComponent } from './ExamEvalution/ExamEvalution.component';
import { CertificateComponent } from './Certificate/Certificate.component';
import { CourseComponent } from './Course/Course.component';


  import { StudentComponent } from './Student/Student.component';
  import { InstructorComponent } from './Instructor/Instructor.component';
  import { OrganizationComponent } from './Organization/Organization.component';


  import { AssignCertificateComponent } from './AssignCertificate/AssignCertificate.component';
  import { EnrollCourseComponent } from './EnrollCourse/EnrollCourse.component';
  import { EvaluteExamComponent } from './EvaluteExam/EvaluteExam.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'ExamEvalution', component: ExamEvalutionComponent},
    
		{ path: 'Certificate', component: CertificateComponent},
    
		{ path: 'Course', component: CourseComponent},
    
    
      { path: 'Student', component: StudentComponent},
      
      { path: 'Instructor', component: InstructorComponent},
      
      { path: 'Organization', component: OrganizationComponent},
      
      
        { path: 'AssignCertificate', component: AssignCertificateComponent},
        
        { path: 'EnrollCourse', component: EnrollCourseComponent},
        
        { path: 'EvaluteExam', component: EvaluteExamComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
