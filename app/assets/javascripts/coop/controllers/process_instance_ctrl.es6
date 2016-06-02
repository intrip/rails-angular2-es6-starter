import {BaseCtrl} from './base_ctrl.es6';

export class ProcessInstanceCtrl extends BaseCtrl {	


  list(filter = {}) {
    let defaults = {
      dataInizio: null,
      dataFine: null,
      protocolloInterno: null,
      protocolloEsterno: null,
      tipoDocumento: null,
      numeroDocumento: null,
      oggettoDocumento: null,
      enteProvenienza: null,
      settoreProvenienza: null,
      ownerId: null,
      userId: null
    };

    let reqBody = new it_intersail_coop_albopretorio_BodyListaDocumentiReqType();
    reqBody = Object.assign(reqBody, defaults, filter);

    //@TODO: fix activity creation
    let activities = new it_intersail_coop_IDListType();
    activities = '<Element>-2</Element>';
    reqBody.activities = activities;


    // console.log("Serialization result: ",this.proxy._serialize(reqBody));
    return super.call(this.proxy.doCommandAsync('AlboPretorio.ListaDocumenti', reqBody));
  }
}