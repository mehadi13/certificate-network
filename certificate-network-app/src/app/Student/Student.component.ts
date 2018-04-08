import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from './Student.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Student',
	templateUrl: './Student.component.html',
	styleUrls: ['./Student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          enrolledCourses = new FormControl("", Validators.required);
        
  
      
          certificates = new FormControl("", Validators.required);
        
  
      
          id = new FormControl("", Validators.required);
        
  
      
          firstName = new FormControl("", Validators.required);
        
  
      
          lastName = new FormControl("", Validators.required);
        
  


  constructor(private serviceStudent:StudentService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          enrolledCourses:this.enrolledCourses,
        
    
        
          certificates:this.certificates,
        
    
        
          id:this.id,
        
    
        
          firstName:this.firstName,
        
    
        
          lastName:this.lastName
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceStudent.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "network.certificate.participants.Student",
      
        
          "enrolledCourses":this.enrolledCourses.value,
        
      
        
          "certificates":this.certificates.value,
        
      
        
          "id":this.id.value,
        
      
        
          "firstName":this.firstName.value,
        
      
        
          "lastName":this.lastName.value
        
      
    };

    this.myForm.setValue({
      
        
          "enrolledCourses":null,
        
      
        
          "certificates":null,
        
      
        
          "id":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null
        
      
    });

    return this.serviceStudent.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "enrolledCourses":null,
        
      
        
          "certificates":null,
        
      
        
          "id":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "network.certificate.participants.Student",
      
        
          
            "enrolledCourses":this.enrolledCourses.value,
          
        
    
        
          
            "certificates":this.certificates.value,
          
        
    
        
          
        
    
        
          
            "firstName":this.firstName.value,
          
        
    
        
          
            "lastName":this.lastName.value
          
        
    
    };

    return this.serviceStudent.updateParticipant(form.get("id").value,this.participant)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceStudent.deleteParticipant(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceStudent.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "enrolledCourses":null,
          
        
          
            "certificates":null,
          
        
          
            "id":null,
          
        
          
            "firstName":null,
          
        
          
            "lastName":null 
          
        
      };



      
        if(result.enrolledCourses){
          
            formObject.enrolledCourses = result.enrolledCourses;
          
        }else{
          formObject.enrolledCourses = null;
        }
      
        if(result.certificates){
          
            formObject.certificates = result.certificates;
          
        }else{
          formObject.certificates = null;
        }
      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.firstName){
          
            formObject.firstName = result.firstName;
          
        }else{
          formObject.firstName = null;
        }
      
        if(result.lastName){
          
            formObject.lastName = result.lastName;
          
        }else{
          formObject.lastName = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "enrolledCourses":null,
        
      
        
          "certificates":null,
        
      
        
          "id":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null 
        
      
      });
  }

}
