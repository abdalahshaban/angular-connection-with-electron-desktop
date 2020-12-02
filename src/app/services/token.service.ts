import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient, /*private _electronService: ElectronService*/) {
    // this._electronService.ipcRenderer.on('getAddressRes', (event, arg) => {
    //   console.log(event, 'event from angular');
    //   console.log(arg, 'arg in angular');
    // })

  }

  getAddressFromDeskTop() {
    // console.log(this._electronService, 'electron app');
    // this._electronService.ipcRenderer.send('getAddress');
    return this.http.get(`${environment.api}/token/get-address`)
  }

}
