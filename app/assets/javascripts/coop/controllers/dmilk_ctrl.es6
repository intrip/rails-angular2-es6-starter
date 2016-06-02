import {BaseCtrl} from './base_ctrl.es6';

export class DmilkCtrl extends BaseCtrl {	 
	listAsl(forzaRicercaGenerale = true) {
      var br = new it_intersail_coop_dmilk_BodyListAslReqType();
      br.forzaRicercaGenerale = forzaRicercaGenerale;

      return this.proxy.doCommandAsync('DMilk.ListAsl', br);
	}
}
