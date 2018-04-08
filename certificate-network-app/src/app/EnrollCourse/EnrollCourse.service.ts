import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { EnrollCourse } from '../network.certificate.transactions';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class EnrollCourseService {

	
		private NAMESPACE: string = 'EnrollCourse';
	



    constructor(private dataService: DataService<EnrollCourse>) {
    };

    public getAll(): Observable<EnrollCourse[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<EnrollCourse> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<EnrollCourse> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<EnrollCourse> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<EnrollCourse> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

