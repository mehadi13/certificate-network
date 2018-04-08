import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Instructor } from '../network.certificate.participants';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class InstructorService {

	
		private NAMESPACE: string = 'Instructor';
	



    constructor(private dataService: DataService<Instructor>) {
    };

    public getAll(): Observable<Instructor[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<Instructor> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<Instructor> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<Instructor> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<Instructor> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
