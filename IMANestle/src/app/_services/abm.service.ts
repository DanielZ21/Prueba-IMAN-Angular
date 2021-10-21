import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_ROUTES } from 'src/data/route/api.routes';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(private http: HttpClient) { }

  /*------------INGRESO---------------*/

  getIngresos():Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_INGRESOS);     
  }

  getNuevoIngreso():Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_NUEVO_INGRESO_FABRICA);     
  }

  getIngreso(IdIingreso:number):Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_INGRESO_FABRICA + IdIingreso)
  }

  postIngreso(data:any):Observable<any>{
    return this.http.post(API_ROUTES.INGRESO_FABRICA_TB.POST_INGRESO_FABRICA, data);
  }

  getPesoActual(idBalanza : number):Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_PESO_ACTUAL + idBalanza);
  }

  /*------------MADCAP---------------*/

  getPrueba():Observable<any>{
    return this.http.get(API_ROUTES.MADCAP.GET_PRUEBA)
  }

  postLogin(data:any):Observable<any>{
    return this.http.post(API_ROUTES.MADCAP.POST_LOGIN, data)
  }

  postEnviarPeso(data:any):Observable<any>{
    return this.http.post(API_ROUTES.MADCAP.POST_ENVIAR_PESO, data)
  }

  /*------------TRANSPORTISTA---------------*/

  getAllTransportistas():Observable<any>{
    return this.http.get(API_ROUTES.TRANSPORTISTA.GET_ALL_TRANSPORTISTAS);     
  }

  getOneTransportista(id: number):Observable<any>{
    return this.http.get(API_ROUTES.TRANSPORTISTA.GET_ONE_TRANSPORTISTA + id)
  }

  postTransportista(data:any):Observable<any>{
    return this.http.post(API_ROUTES.TRANSPORTISTA.POST_TRANSPORTISTA, data)
  }

  deleteTransportista(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.TRANSPORTISTA.DELETE_TRANSPORTISTA + id)
  }

  /*------------ATA---------------*/

  getAllAtas():Observable<any>{
    return this.http.get(API_ROUTES.ATA.GET_ALL_ATAS)   
  }

  getOneAta(id: number):Observable<any>{
    return this.http.get(API_ROUTES.ATA.GET_ONE_ATA + id)
  }

  postAta(data:any):Observable<any>{
    return this.http.post(API_ROUTES.ATA.POST_ATA, data)
  }

  deleteAta(id:number):Observable<any>{
    return this.http.get(API_ROUTES.ATA.DELETE_ATA + id)
  }

  /*------------CHOFER---------------*/

  getAllChofere():Observable<any>{
    return this.http.get(API_ROUTES.CHOFER.GET_ALL_CHOFERES);     
  }

  getOneChofer(id: number):Observable<any>{
    return this.http.get(API_ROUTES.CHOFER.GET_ONE_CHOFER + id);
  }

  postChofer(data:any):Observable<any>{
    return this.http.post(API_ROUTES.CHOFER.POST_CHOFER, data)
  }

  deleteChofer(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.CHOFER.DELETE_CHOFER + id)
  }

  /*------------CLIENTE---------------*/

  getAllClientes():Observable<any>{
    return this.http.get(API_ROUTES.CLIENTE.GET_ALL_CLIENTES);     
  }

  getOneCliente(id: number):Observable<any>{
    return this.http.get(API_ROUTES.CLIENTE.GET_ONE_CLIENTE + id);
  }

  postliente(data:any):Observable<any>{
    return this.http.post(API_ROUTES.CLIENTE.POST_CLIENTE, data)
  }

  deleteCliente(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.CLIENTE.DELETE_CLIENTE + id)
  }

  /*------------DESTINO---------------*/

  getAllDestinos():Observable<any>{
    return this.http.get(API_ROUTES.DESTINO.GET_ALL_DESTINOS);     
  }

  getOneDestino(id: number):Observable<any>{
    return this.http.get(API_ROUTES.DESTINO.GET_ONE_DESTINO + id);
  }

  postDestino(data:any):Observable<any>{
    return this.http.post(API_ROUTES.DESTINO.POST_DESTINO, data)
  }

  deleteDestino(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.DESTINO.DELETE_DESTINO + id)
  }

  /*------------EXPORTADOR---------------*/

  getAllExportadores():Observable<any>{
    return this.http.get(API_ROUTES.EXPORTADOR.GET_ALL_EXPORTADORES);     
  }

  getOneExportador(id: number):Observable<any>{
    return this.http.get(API_ROUTES.EXPORTADOR.GET_ONE_EXPORTADOR + id);
  }

  postExportador(data:any):Observable<any>{
    return this.http.post(API_ROUTES.EXPORTADOR.POST_EXPORTADOR, data)
  }

  deleteExportador(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.EXPORTADOR.DELETE_EXPORTADOR + id)
  }

  /*------------NACIONALIDAD---------------*/

  getAllNacionalidades():Observable<any>{
    return this.http.get(API_ROUTES.NACIONALIDAD.GET_ALL_NACIONALIDADES)     
  }

  getOneNacionalidad(id: number):Observable<any>{
    return this.http.get(API_ROUTES.NACIONALIDAD.GET_ONE_NACIONALIDAD + id)
  }

  postNacionalidad(data:any):Observable<any>{
    return this.http.post(API_ROUTES.NACIONALIDAD.POST_NACIONALIDAD, data)
  }

  deleteNacionalidad(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.NACIONALIDAD.DELETE_NACIONALIDAD + id)
  }

  /*------------PATENTE---------------*/

  getAllPatentes():Observable<any>{
    return this.http.get(API_ROUTES.PATENTE.GET_ALL_PATENTES)     
  }

  getOnePatente(id: number):Observable<any>{
    return this.http.get(API_ROUTES.PATENTE.GET_ONE_PATENTE + id)
  }

  postPatente(data:any):Observable<any>{
    return this.http.post(API_ROUTES.PATENTE.POST_PATENTE, data)
  }

  deletePatente(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.PATENTE.DELETE_PATENTE + id)
  }

  /*------------REMITO---------------*/

  getAllRemitos():Observable<any>{
    return this.http.get(API_ROUTES.REMITO.GET_ALL_REMITOS)     
  }

  getOneRemito(id: number):Observable<any>{
    return this.http.get(API_ROUTES.REMITO.GET_ONE_REMITO + id)
  }

  postRemito(data:any):Observable<any>{
    return this.http.post(API_ROUTES.REMITO.POST_REMITO, data)
  }

  deleteRemito(id:number):Observable<any>{
    return this.http.delete(API_ROUTES.REMITO.DELETE_REMITO + id)
  }

  /*------------TIPO ARTICULO---------------*/

  getAllTipoArticulos():Observable<any>{
    return this.http.get(API_ROUTES.TIPO_ARTICULO.GET_ALL_TIPO_ARTICULOS)     
  }

  getOneTipoArticulo(id: number):Observable<any>{
    return this.http.get(API_ROUTES.TIPO_ARTICULO.GET_ONE_TIPO_ARTICULO + id)
  }

  postTipoArticulo(data:any):Observable<any>{
    return this.http.post(API_ROUTES.TIPO_ARTICULO.POST_TIPO_ARTICULO, data)
  }

  deleteTipoArticulo(TipoArticuloId:number):Observable<any>{
    return this.http.delete(API_ROUTES.TIPO_ARTICULO.DELETE_TIPO_ARTICULO + TipoArticuloId)
  }

}
