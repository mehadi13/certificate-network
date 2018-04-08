import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ExamEvalutionService } from './ExamEvalution.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ExamEvalution',
	templateUrl: './ExamEvalution.component.html',
	styleUrls: ['./ExamEvalution.component.css'],
  providers: [ExamEvalutionService]
})
export class ExamEvalutionComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          id = new FormControl("", Validators.required);
        
  
      
          exam = new FormControl("", Validators.required);
        
  
      
          isExamined = new FormControl("", Validators.required);
        
  
      
          isUsedForCertificate = new FormControl("", Validators.required);
        
  
      
          obtainedMark = new FormControl("", Validators.required);
        
  


  constructor(private serviceExamEvalution:ExamEvalutionService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          exam:this.exam,
        
    
        
          isExamined:this.isExamined,
        
    
        
          isUsedForCertificate:this.isUsedForCertificate,
        
    
        
          obtainedMark:this.obtainedMark
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceExamEvalution.getAll()
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
      $class: "network.certificate.assets.ExamEvalution",
      
        
          "id":this.id.value,
        
      
        
          "exam":this.exam.value,
        
      
        
          "isExamined":this.isExamined.value,
        
      
        
          "isUsedForCertificate":this.isUsedForCertificate.value,
        
      
        
          "obtainedMark":this.obtainedMark.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "exam":null,
        
      
        
          "isExamined":null,
        
      
        
          "isUsedForCertificate":null,
        
      
        
          "obtainedMark":null
        
      
    });

    return this.serviceExamEvalution.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "exam":null,
        
      
        
          "isExamined":null,
        
      
        
          "isUsedForCertificate":null,
        
      
        
          "obtainedMark":null 
        
      
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
      $class: "network.certificate.assets.ExamEvalution",
      
        
          
        
    
        
          
            "exam":this.exam.value,
          
        
    
        
          
            "isExamined":this.isExamined.value,
          
        
    
        
          
            "isUsedForCertificate":this.isUsedForCertificate.value,
          
        
    
        
          
            "obtainedMark":this.obtainedMark.value
          
        
    
    };

    return this.serviceExamEvalution.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceExamEvalution.deleteAsset(this.currentId)
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

    return this.serviceExamEvalution.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "exam":null,
          
        
          
            "isExamined":null,
          
        
          
            "isUsedForCertificate":null,
          
        
          
            "obtainedMark":null 
          
        
      };



      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.exam){
          
            formObject.exam = result.exam;
          
        }else{
          formObject.exam = null;
        }
      
        if(result.isExamined){
          
            formObject.isExamined = result.isExamined;
          
        }else{
          formObject.isExamined = null;
        }
      
        if(result.isUsedForCertificate){
          
            formObject.isUsedForCertificate = result.isUsedForCertificate;
          
        }else{
          formObject.isUsedForCertificate = null;
        }
      
        if(result.obtainedMark){
          
            formObject.obtainedMark = result.obtainedMark;
          
        }else{
          formObject.obtainedMark = null;
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
      
        
          "id":null,
        
      
        
          "exam":null,
        
      
        
          "isExamined":null,
        
      
        
          "isUsedForCertificate":null,
        
      
        
          "obtainedMark":null 
        
      
      });
  }

}
