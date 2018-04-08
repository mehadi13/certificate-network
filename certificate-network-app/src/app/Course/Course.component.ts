import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CourseService } from './Course.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Course',
	templateUrl: './Course.component.html',
	styleUrls: ['./Course.component.css'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          code = new FormControl("", Validators.required);
        
  
      
          courseDetails = new FormControl("", Validators.required);
        
  
      
          organization = new FormControl("", Validators.required);
        
  


  constructor(private serviceCourse:CourseService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          code:this.code,
        
    
        
          courseDetails:this.courseDetails,
        
    
        
          organization:this.organization
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceCourse.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
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
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "network.certificate.assets.Course",
      
        
          "code":this.code.value,
        
      
        
          "courseDetails":this.courseDetails.value,
        
      
        
          "organization":this.organization.value
        
      
    };

    this.myForm.setValue({
      
        
          "code":null,
        
      
        
          "courseDetails":null,
        
      
        
          "organization":null
        
      
    });

    return this.serviceCourse.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "code":null,
        
      
        
          "courseDetails":null,
        
      
        
          "organization":null 
        
      
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


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "network.certificate.assets.Course",
      
        
          
        
    
        
          
            "courseDetails":this.courseDetails.value,
          
        
    
        
          
            "organization":this.organization.value
          
        
    
    };

    return this.serviceCourse.updateAsset(form.get("code").value,this.asset)
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


  deleteAsset(): Promise<any> {

    return this.serviceCourse.deleteAsset(this.currentId)
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

    return this.serviceCourse.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "code":null,
          
        
          
            "courseDetails":null,
          
        
          
            "organization":null 
          
        
      };



      
        if(result.code){
          
            formObject.code = result.code;
          
        }else{
          formObject.code = null;
        }
      
        if(result.courseDetails){
          
            formObject.courseDetails = result.courseDetails;
          
        }else{
          formObject.courseDetails = null;
        }
      
        if(result.organization){
          
            formObject.organization = result.organization;
          
        }else{
          formObject.organization = null;
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
      
        
          "code":null,
        
      
        
          "courseDetails":null,
        
      
        
          "organization":null 
        
      
      });
  }

}
