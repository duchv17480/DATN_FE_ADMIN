import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost:8080/api/v1/category';
  url_groupComponent = 'http://localhost:8080/api/v1/component';

  constructor(
    private httpClient: HttpClient
    ) { }


    createCategory(category: any, file?: any): Observable<any>{
      const formData = new FormData();

      formData.append('file', file);
      formData.append('name', category.name);
      formData.append('images', category.images);
      formData.append('status', category.status.toString());
      formData.append('groupId', category.groupId.toString());

      return this.httpClient.post(this.url + "/create", formData);
    }

    getAllGroupcomponent():Observable<any>{
      return this.httpClient.get(this.url_groupComponent + '/info');
    }

    getAllCategory(page: number, pageSize: number): Observable<any>{
      let param = new HttpParams();
      param = param.append('page',page);
      param = param.append('page-number',pageSize);

      return this.httpClient.get(this.url + '?page=' + page + '&page-number=' + pageSize, { params:param });
    }

    deleteCategory(id:number):Observable<any>{
      return this.httpClient.delete(this.url + '/delete/' + id);
    }


}
