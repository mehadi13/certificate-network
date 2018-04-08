import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ExamEvalutionComponent } from './ExamEvalution/ExamEvalution.component';
import { CertificateComponent } from './Certificate/Certificate.component';
import { CourseComponent } from './Course/Course.component';


  import { StudentComponent } from './Student/Student.component';
  import { InstructorComponent } from './Instructor/Instructor.component';
  import { OrganizationComponent } from './Organization/Organization.component';


  import { AssignCertificateComponent } from './AssignCertificate/AssignCertificate.component';
  import { EnrollCourseComponent } from './EnrollCourse/EnrollCourse.component';
  import { EvaluteExamComponent } from './EvaluteExam/EvaluteExam.component';  
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    ExamEvalutionComponent,
    CertificateComponent,
    
    CourseComponent
    ,
    
    StudentComponent,
      InstructorComponent,
      
      OrganizationComponent
      ,

    AssignCertificateComponent,
        EnrollCourseComponent,
        
        EvaluteExamComponent
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
