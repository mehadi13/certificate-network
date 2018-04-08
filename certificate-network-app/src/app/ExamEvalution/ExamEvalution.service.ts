import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ExamEvalution } from '../network.certificate.assets';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ExamEvalutionService {

	
		private NAMESPACE: string = 'ExamEvalution';
	



    constructor(private dataService: DataService<ExamEvalution>) {
    };

    public getAll(): Observable<ExamEvalution[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ExamEvalution> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ExamEvalution> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ExamEvalution> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ExamEvalution> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
