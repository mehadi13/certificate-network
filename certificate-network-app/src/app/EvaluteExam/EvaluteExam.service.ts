import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { EvaluteExam } from '../network.certificate.transactions';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class EvaluteExamService {

	
		private NAMESPACE: string = 'EvaluteExam';
	



    constructor(private dataService: DataService<EvaluteExam>) {
    };

    public getAll(): Observable<EvaluteExam[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<EvaluteExam> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<EvaluteExam> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<EvaluteExam> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<EvaluteExam> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

