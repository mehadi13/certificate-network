import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Certificate } from '../network.certificate.assets';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class CertificateService {

	
		private NAMESPACE: string = 'Certificate';
	



    constructor(private dataService: DataService<Certificate>) {
    };

    public getAll(): Observable<Certificate[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Certificate> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Certificate> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Certificate> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Certificate> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
