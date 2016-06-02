import {AuthCtrl} from './controllers/auth_ctrl.es6';
import {DmilkCtrl} from './controllers/dmilk_ctrl.es6';

var proxy = new CoopProxy(it_intersail_coop_SoggettoType.create('Utente', '[MyId]', 'MyAddress'),
  it_intersail_coop_SoggettoType.create('Servizio', 'COOPSVC-01', 'CED-SISI'));

let sessionId;

let login = function()
{
  let frm1 = document.getElementById('frmMain');
  let u = frm1.username.value;
  let p = frm1.password.value;

  let authCtrl = new AuthCtrl(proxy);
  authCtrl.login(u,p, "Test").then( function(res) {
      frm1['txtJson2'].value = JSON.stringify(res);
      alert('Hello, ' + res.user.username);
    }).catch( function(e){
      frm1['txtJson2'].value = JSON.stringify(e);
     });
}   

let listAsl = function()
{
  let frm2 = document.getElementById('frmMain');

  let dmilkCtrl = new DmilkCtrl(proxy);
  
  dmilkCtrl.listAsl().then( function(res) {
      frm2['txtJson2'].value = JSON.stringify(res);
    }).catch( function(e){
      frm2['txtJson2'].value = JSON.stringify(e);
    });
}   

window.listAsl = listAsl;
window.login = login;

