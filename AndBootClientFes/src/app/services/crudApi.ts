import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { TableRecord } from "../models/tableRecord";
import { environment } from "../../environments/environment";
import { TableProperty } from "../models/tableProperty";



@Injectable()
export class CrudApi {
    private apiUrl : string;

    constructor(private http : Http) {
        this.apiUrl = environment.apiUrl;
    }
    
    create(record : TableRecord) : Observable<Response> {
        var json = this.convertToJson(record);
        const url: string = `${this.apiUrl}/crud?table=${record.tableName}`;
        console.log(url);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, json, options);
    }

    read(tableName: string) : Observable<TableRecord[]>{
        const url: string = `${this.apiUrl}/crud?table=${tableName}`;
        console.log(url);
        return this.http.get(url).map(resp => {
            console.log(resp.status);
            console.log(resp.statusText);
            console.log(resp.json());
            return this.convertFromObjectArray(resp.json());})
        .catch((error:any) => {
            console.log(error);
            return Observable.throw(error);});
    }

    update(record : TableRecord) : Observable<Response> {
        var json = this.convertToJson(record);
        var recordName = record.properties.filter(p => p.key == "name")[0].value;
        const url: string = `${this.apiUrl}/crud?table=${record.tableName}&name=${recordName}`;
        console.log(url);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, json, options);
    }

    private convertToJson(record : TableRecord) : string {
        let jsonObject : any = {};
        for(let property of record.properties) {
          if(property.key && property.key != "" && property.value) {
            jsonObject[property.key] = property.value;
          }
        }
        let json = JSON.stringify(jsonObject); 
        console.log(json); 
        return json;  
    }

    private convertFromObjectArray(objArray : any[]) : TableRecord[]
    {
        let records : TableRecord[] = [];
        for(let jsonObject of objArray) {
            let record  = new TableRecord();
            for(let objProperty in jsonObject) {
                if(jsonObject.hasOwnProperty(objProperty)) {
                    let tableProperty = new TableProperty(objProperty, jsonObject[objProperty])
                    record.properties.push(tableProperty);
                }
            }
            records.push(record)
        }
        return records;
    }

    // private convertObjectFromJson(json : string) : TableRecord {
    //     let jsonObject = JSON.parse(json);
    //     let result = new TableRecord();
    //     for(let property in jsonObject) {
    //         if(jsonObject.hasOwnProperty(property)) {
    //             let tableProperty = new TableProperty(property, jsonObject[property]);
    //             result.properties.push(tableProperty);
    //         }
    //     }
    //     return result;
    // }

    // private convertArrayFromJson(json : string) : TableRecord[] {
    //     let result : TableRecord[] = [];
    //     let jsonArray = JSON.parse(json);
    //     for(let jsonObject of jsonArray)
    //     {
    //         var record = this.convertObjectFromJson(jsonObject);
    //         result.push(record);
    //     }
    //     return result;
    // }
}