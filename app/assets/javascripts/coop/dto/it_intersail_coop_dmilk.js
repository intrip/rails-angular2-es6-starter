function it_intersail_coop_dmilk_AziendaType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_AziendaType: {
__def__: { nodetype: 'element',nodename: 'AziendaType',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_MacelloBseImportType() {
	it_intersail_coop_dmilk_AziendaType.call(this);
	this.indirizzo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_MacelloBseImportType: {
__def__: { nodetype: 'element',nodename: 'MacelloBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_AziendaType",
indirizzo: { nodetype: 'element',nodename: 'Indirizzo',namespace: 'http://www.intersail.it/coop/dmilk' },
bolliCee: { nodetype: 'element',nodename: 'BolliCee',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaBolliCeeDarwinType' }
}
});
function it_intersail_coop_dmilk_AslBseImportType() {
	it_intersail_coop_dmilk_AziendaType.call(this);
	this.indirizzo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_AslBseImportType: {
__def__: { nodetype: 'element',nodename: 'AslBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_AziendaType",
indirizzo: { nodetype: 'element',nodename: 'Indirizzo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_AllevatoreType() {
	it_intersail_coop_dmilk_AziendaType.call(this);
	this.codiceAllevix = null;
	this.parcheggiato = null;
	this.associazione1 = null;
	this.associazione2 = null;
	this.id = null;
	this.nrAnimali = null;
	this.specieCod = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_AllevatoreType: {
__def__: { nodetype: 'element',nodename: 'AllevatoreType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_AziendaType",
codiceAllevix: { nodetype: 'element',nodename: 'CodiceAllevix',namespace: 'http://www.intersail.it/coop/dmilk' },
parcheggiato: { nodetype: 'element',nodename: 'Parcheggiato',namespace: 'http://www.intersail.it/coop/dmilk' },
associazione1: { nodetype: 'element',nodename: 'Associazione1',namespace: 'http://www.intersail.it/coop/dmilk' },
associazione2: { nodetype: 'element',nodename: 'Associazione2',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
nrAnimali: { nodetype: 'element',nodename: 'NrAnimali',namespace: 'http://www.intersail.it/coop/dmilk' },
specieCod: { nodetype: 'element',nodename: 'SpecieCod',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_CampioneType() {
	it_intersail_coop_zapflow_ProcessInfoBaseType.call(this);
	this.campioneId = null;
	this.dataAccettazione = null;
	this.laboratorioCod = null;
	this.dataConsegna = null;
	this.consegnatoDa = null;
	this.accettatoDa = null;
	this.annotazioni = null;
	this.quantitaLatte = null;
	this.uMTLatte = null;
	this.associazionePrimariaCod = null;
	this.associazioneSecondariaCod = null;
	this.specie = null;
	this.riepilogoId = null;
	this.dataRevisione = null;
	this.dataFirma = null;
	this.erroreVerificaFiscale = null;
	this.erroreVerificaLaboratorio = null;
	this.dataInvioDocRiepilogo = null;
	this.statoInvioDocRiepilogo = null;
	this.barcode = null;
	this.parcheggiato = null;
	this.soccidario = null;
	this.soccidante = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_CampioneType: {
__def__: { nodetype: 'element',nodename: 'CampioneType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_zapflow_ProcessInfoBaseType",
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatore: { nodetype: 'element',nodename: 'Allevatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreType' },
giroLatte: { nodetype: 'element',nodename: 'GiroLatte',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_GiroLatteType' },
acquirente: { nodetype: 'element',nodename: 'Acquirente',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AziendaType' },
caseificio: { nodetype: 'element',nodename: 'Caseificio',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AziendaType' },
dataAccettazione: { nodetype: 'element',nodename: 'DataAccettazione',namespace: 'http://www.intersail.it/coop/dmilk' },
laboratorioCod: { nodetype: 'element',nodename: 'LaboratorioCod',namespace: 'http://www.intersail.it/coop/dmilk' },
rdps: { nodetype: 'element',nodename: 'Rdps',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaRdpType' },
dataConsegna: { nodetype: 'element',nodename: 'DataConsegna',namespace: 'http://www.intersail.it/coop/dmilk' },
consegnatoDa: { nodetype: 'element',nodename: 'ConsegnatoDa',namespace: 'http://www.intersail.it/coop/dmilk' },
accettatoDa: { nodetype: 'element',nodename: 'AccettatoDa',namespace: 'http://www.intersail.it/coop/dmilk' },
annotazioni: { nodetype: 'element',nodename: 'Annotazioni',namespace: 'http://www.intersail.it/coop/dmilk' },
quantitaLatte: { nodetype: 'element',nodename: 'QuantitaLatte',namespace: 'http://www.intersail.it/coop/dmilk' },
uMTLatte: { nodetype: 'element',nodename: 'UMTLatte',namespace: 'http://www.intersail.it/coop/dmilk' },
esami: { nodetype: 'element',nodename: 'Esami',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaEsameType' },
associazionePrimariaCod: { nodetype: 'element',nodename: 'AssociazionePrimariaCod',namespace: 'http://www.intersail.it/coop/dmilk' },
associazioneSecondariaCod: { nodetype: 'element',nodename: 'AssociazioneSecondariaCod',namespace: 'http://www.intersail.it/coop/dmilk' },
anomalia: { nodetype: 'element',nodename: 'Anomalia',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AnomaliaType' },
nomenclatore: { nodetype: 'element',nodename: 'Nomenclatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreType' },
macello: { nodetype: 'element',nodename: 'Macello',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreType' },
azioni: { nodetype: 'element',nodename: 'Azioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_zapflow_ActionListType' },
specie: { nodetype: 'element',nodename: 'Specie',namespace: 'http://www.intersail.it/coop/dmilk' },
riepilogoId: { nodetype: 'element',nodename: 'RiepilogoId',namespace: 'http://www.intersail.it/coop/dmilk' },
dataRevisione: { nodetype: 'element',nodename: 'DataRevisione',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFirma: { nodetype: 'element',nodename: 'DataFirma',namespace: 'http://www.intersail.it/coop/dmilk' },
erroreVerificaFiscale: { nodetype: 'element',nodename: 'ErroreVerificaFiscale',namespace: 'http://www.intersail.it/coop/dmilk' },
erroreVerificaLaboratorio: { nodetype: 'element',nodename: 'ErroreVerificaLaboratorio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataInvioDocRiepilogo: { nodetype: 'element',nodename: 'DataInvioDocRiepilogo',namespace: 'http://www.intersail.it/coop/dmilk' },
statoInvioDocRiepilogo: { nodetype: 'element',nodename: 'StatoInvioDocRiepilogo',namespace: 'http://www.intersail.it/coop/dmilk' },
barcode: { nodetype: 'element',nodename: 'Barcode',namespace: 'http://www.intersail.it/coop/dmilk' },
parcheggiato: { nodetype: 'element',nodename: 'Parcheggiato',namespace: 'http://www.intersail.it/coop/dmilk' },
soccidario: { nodetype: 'element',nodename: 'Soccidario',namespace: 'http://www.intersail.it/coop/dmilk' },
soccidante: { nodetype: 'element',nodename: 'Soccidante',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_EsameType() {
	this.id = null;
	this.campioneId = null;
	this.laboratorioCod = null;
	this.provaCod = null;
	this.valore = null;
	this.uMT = null;
	this.dataInizioEsame = null;
	this.dataFineEsame = null;
	this.annotazioni = null;
	this.programmato = null;
	this.stato = null;
	this.commento = null;
	this.isModificatoManuale = null;
	this.valoreLDGStr = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_EsameType: {
__def__: { nodetype: 'element',nodename: 'EsameType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' },
laboratorioCod: { nodetype: 'element',nodename: 'LaboratorioCod',namespace: 'http://www.intersail.it/coop/dmilk' },
provaCod: { nodetype: 'element',nodename: 'ProvaCod',namespace: 'http://www.intersail.it/coop/dmilk' },
valore: { nodetype: 'element',nodename: 'Valore',namespace: 'http://www.intersail.it/coop/dmilk' },
uMT: { nodetype: 'element',nodename: 'UMT',namespace: 'http://www.intersail.it/coop/dmilk' },
dataInizioEsame: { nodetype: 'element',nodename: 'DataInizioEsame',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFineEsame: { nodetype: 'element',nodename: 'DataFineEsame',namespace: 'http://www.intersail.it/coop/dmilk' },
annotazioni: { nodetype: 'element',nodename: 'Annotazioni',namespace: 'http://www.intersail.it/coop/dmilk' },
programmato: { nodetype: 'element',nodename: 'Programmato',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' },
nomenclatore: { nodetype: 'element',nodename: 'Nomenclatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreType' },
commento: { nodetype: 'element',nodename: 'Commento',namespace: 'http://www.intersail.it/coop/dmilk' },
isModificatoManuale: { nodetype: 'element',nodename: 'IsModificatoManuale',namespace: 'http://www.intersail.it/coop/dmilk' },
valoreLDGStr: { nodetype: 'element',nodename: 'ValoreLDGStr',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_EsameCommentoType() {
	it_intersail_coop_dmilk_EsameType.call(this);
	this.note = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_EsameCommentoType: {
__def__: { nodetype: 'element',nodename: 'EsameCommentoType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_EsameType",
note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_NomenclatoreType() {
	this.codice = null;
	this.provaCod = null;
	this.provaDesc = null;
	this.tecnicaCod = null;
	this.tecnicaDesc = null;
	this.metodoCod = null;
	this.metodoDesc = null;
	this.coefficiente = null;
	this.operatore = null;
	this.programmato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_NomenclatoreType: {
__def__: { nodetype: 'element',nodename: 'NomenclatoreType',namespace: 'http://www.intersail.it/coop/dmilk' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
provaCod: { nodetype: 'element',nodename: 'ProvaCod',namespace: 'http://www.intersail.it/coop/dmilk' },
provaDesc: { nodetype: 'element',nodename: 'ProvaDesc',namespace: 'http://www.intersail.it/coop/dmilk' },
tecnicaCod: { nodetype: 'element',nodename: 'TecnicaCod',namespace: 'http://www.intersail.it/coop/dmilk' },
tecnicaDesc: { nodetype: 'element',nodename: 'TecnicaDesc',namespace: 'http://www.intersail.it/coop/dmilk' },
metodoCod: { nodetype: 'element',nodename: 'MetodoCod',namespace: 'http://www.intersail.it/coop/dmilk' },
metodoDesc: { nodetype: 'element',nodename: 'MetodoDesc',namespace: 'http://www.intersail.it/coop/dmilk' },
coefficiente: { nodetype: 'element',nodename: 'Coefficiente',namespace: 'http://www.intersail.it/coop/dmilk' },
operatore: { nodetype: 'element',nodename: 'Operatore',namespace: 'http://www.intersail.it/coop/dmilk' },
programmato: { nodetype: 'element',nodename: 'Programmato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_NomenclatoreBseImportType() {
	it_intersail_coop_dmilk_NomenclatoreType.call(this);
	this.matrice = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_NomenclatoreBseImportType: {
__def__: { nodetype: 'element',nodename: 'NomenclatoreBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_NomenclatoreType",
matrice: { nodetype: 'element',nodename: 'Matrice',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_DrwnNomenclatoreRangeType() {
	this.iD = null;
	this.nomeclatoreMp = null;
	this.ordineElenco = null;
	this.valore = null;
	this.modEspr = null;
	this.valoreNumero = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_DrwnNomenclatoreRangeType: {
__def__: { nodetype: 'element',nodename: 'DrwnNomenclatoreRangeType',namespace: 'http://www.intersail.it/coop/dmilk' },
iD: { nodetype: 'element',nodename: 'ID',namespace: 'http://www.intersail.it/coop/dmilk' },
nomeclatoreMp: { nodetype: 'element',nodename: 'NomeclatoreMp',namespace: 'http://www.intersail.it/coop/dmilk' },
ordineElenco: { nodetype: 'element',nodename: 'OrdineElenco',namespace: 'http://www.intersail.it/coop/dmilk' },
valore: { nodetype: 'element',nodename: 'Valore',namespace: 'http://www.intersail.it/coop/dmilk' },
modEspr: { nodetype: 'element',nodename: 'ModEspr',namespace: 'http://www.intersail.it/coop/dmilk' },
valoreNumero: { nodetype: 'element',nodename: 'ValoreNumero',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaDrwnNomenclatoreRangeType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaDrwnNomenclatoreRangeType: {
__def__: { nodetype: 'element',nodename: 'ListaDrwnNomenclatoreRangeType',namespace: 'http://www.intersail.it/coop/dmilk' },
drwnNomenclatoreRange: { nodetype: 'element',nodename: 'DrwnNomenclatoreRange',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DrwnNomenclatoreRangeType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListDrwnNomenclatoreRangeReqType() {
	it_intersail_coop_BodyType.call(this);
	this.provaCod = null;
	this.nomenclatoreID = null;
	this.labCod = null;
	this.dtAccettazione = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListDrwnNomenclatoreRangeReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListDrwnNomenclatoreRangeReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
provaCod: { nodetype: 'element',nodename: 'ProvaCod',namespace: 'http://www.intersail.it/coop/dmilk' },
nomenclatoreID: { nodetype: 'element',nodename: 'NomenclatoreID',namespace: 'http://www.intersail.it/coop/dmilk' },
labCod: { nodetype: 'element',nodename: 'LabCod',namespace: 'http://www.intersail.it/coop/dmilk' },
dtAccettazione: { nodetype: 'element',nodename: 'DtAccettazione',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListDrwnNomenclatoreRangeResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListDrwnNomenclatoreRangeResType: {
__def__: { nodetype: 'element',nodename: 'BodyListDrwnNomenclatoreRangeResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
listaDrwnNomenclatoreRange: { nodetype: 'element',nodename: 'ListaDrwnNomenclatoreRange',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaDrwnNomenclatoreRangeType' }
}
});
function it_intersail_coop_dmilk_NomenclatoreListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_NomenclatoreListType: {
__def__: { nodetype: 'element',nodename: 'NomenclatoreListType',namespace: 'http://www.intersail.it/coop/dmilk' },
nomenclatore: { nodetype: 'element',nodename: 'Nomenclatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreType',multiple: true }
}
});
function it_intersail_coop_dmilk_AnomaliaType() {
	this.codice = null;
	this.descrizione = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_AnomaliaType: {
__def__: { nodetype: 'element',nodename: 'AnomaliaType',namespace: 'http://www.intersail.it/coop/dmilk' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_RdpType() {
	it_intersail_coop_zapdoc_DocumentInfoType.call(this);
	this.dataCreazione = null;
	this.stato = null;
	this.dataFirma = null;
	this.firmatoDa = null;
	this.annotazioni = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_RdpType: {
__def__: { nodetype: 'element',nodename: 'RdpType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_zapdoc_DocumentInfoType",
dataCreazione: { nodetype: 'element',nodename: 'DataCreazione',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFirma: { nodetype: 'element',nodename: 'DataFirma',namespace: 'http://www.intersail.it/coop/dmilk' },
firmatoDa: { nodetype: 'element',nodename: 'FirmatoDa',namespace: 'http://www.intersail.it/coop/dmilk' },
annotazioni: { nodetype: 'element',nodename: 'Annotazioni',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_GiroLatteType() {
	this.codice = null;
	this.dataPrelievo = null;
	this.eseguitoDa = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_GiroLatteType: {
__def__: { nodetype: 'element',nodename: 'GiroLatteType',namespace: 'http://www.intersail.it/coop/dmilk' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
dataPrelievo: { nodetype: 'element',nodename: 'DataPrelievo',namespace: 'http://www.intersail.it/coop/dmilk' },
eseguitoDa: { nodetype: 'element',nodename: 'EseguitoDa',namespace: 'http://www.intersail.it/coop/dmilk' },
caseificio: { nodetype: 'element',nodename: 'Caseificio',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AziendaType' },
acquirente: { nodetype: 'element',nodename: 'Acquirente',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AziendaType' }
}
});
function it_intersail_coop_dmilk_ListaCampioneType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaCampioneType: {
__def__: { nodetype: 'element',nodename: 'ListaCampioneType',namespace: 'http://www.intersail.it/coop/dmilk' },
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaRdpType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaRdpType: {
__def__: { nodetype: 'element',nodename: 'ListaRdpType',namespace: 'http://www.intersail.it/coop/dmilk' },
rdp: { nodetype: 'element',nodename: 'Rdp',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_RdpType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaEsameType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaEsameType: {
__def__: { nodetype: 'element',nodename: 'ListaEsameType',namespace: 'http://www.intersail.it/coop/dmilk' },
esame: { nodetype: 'element',nodename: 'Esame',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_EsameType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaEsameCommentoType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaEsameCommentoType: {
__def__: { nodetype: 'element',nodename: 'ListaEsameCommentoType',namespace: 'http://www.intersail.it/coop/dmilk' },
esame: { nodetype: 'element',nodename: 'Esame',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_EsameCommentoType',multiple: true }
}
});
function it_intersail_coop_dmilk_PaeseDiProvenienzaType() {
	this.id = null;
	this.sigla = null;
	this.descrizione = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_PaeseDiProvenienzaType: {
__def__: { nodetype: 'element',nodename: 'PaeseDiProvenienzaType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
sigla: { nodetype: 'element',nodename: 'Sigla',namespace: 'http://www.intersail.it/coop/dmilk' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaPaesiDiProvenienzaType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaPaesiDiProvenienzaType: {
__def__: { nodetype: 'element',nodename: 'ListaPaesiDiProvenienzaType',namespace: 'http://www.intersail.it/coop/dmilk' },
paesiDiProvenienza: { nodetype: 'element',nodename: 'PaesiDiProvenienza',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_PaeseDiProvenienzaType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListPaesiDiProvenienzaReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListPaesiDiProvenienzaReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListPaesiDiProvenienzaReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
query: { nodetype: 'element',nodename: 'Query',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_QueryType' }
}
});
function it_intersail_coop_dmilk_BodyListPaesiDiProvenienzaResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListPaesiDiProvenienzaResType: {
__def__: { nodetype: 'element',nodename: 'BodyListPaesiDiProvenienzaResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
listaPaesiDiProvenienza: { nodetype: 'element',nodename: 'ListaPaesiDiProvenienza',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaPaesiDiProvenienzaType' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniReqType() {
	it_intersail_coop_BodyType.call(this);
	this.dataInizio = null;
	this.dataFine = null;
	this.tipoDocumento = null;
	this.ownerId = null;
	this.userId = null;
	this.numeroConferimento = null;
	this.riepilogoId = null;
	this.giroCod = null;
	this.caseificioCod = null;
	this.dataPrelievo = null;
	this.tipoInvio = null;
	this.dataFirmaInizio = null;
	this.dataFirmaFine = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_IDListType' },
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoDocumento: { nodetype: 'element',nodename: 'TipoDocumento',namespace: 'http://www.intersail.it/coop/dmilk' },
ownerId: { nodetype: 'element',nodename: 'OwnerId',namespace: 'http://www.intersail.it/coop/dmilk' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroConferimento: { nodetype: 'element',nodename: 'NumeroConferimento',namespace: 'http://www.intersail.it/coop/dmilk' },
riepilogoId: { nodetype: 'element',nodename: 'RiepilogoId',namespace: 'http://www.intersail.it/coop/dmilk' },
giroCod: { nodetype: 'element',nodename: 'GiroCod',namespace: 'http://www.intersail.it/coop/dmilk' },
caseificioCod: { nodetype: 'element',nodename: 'CaseificioCod',namespace: 'http://www.intersail.it/coop/dmilk' },
dataPrelievo: { nodetype: 'element',nodename: 'DataPrelievo',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoInvio: { nodetype: 'element',nodename: 'TipoInvio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFirmaInizio: { nodetype: 'element',nodename: 'DataFirmaInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFirmaFine: { nodetype: 'element',nodename: 'DataFirmaFine',namespace: 'http://www.intersail.it/coop/dmilk' },
additionalFilter: { nodetype: 'element',nodename: 'AdditionalFilter',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_ODLFilterType' },
ricercaRdp: { nodetype: 'element',nodename: 'RicercaRdp',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_RicercaRdpType' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioni: { nodetype: 'element',nodename: 'Campioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneType' },
avviso: { nodetype: 'element',nodename: 'Avviso',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AvvisoType' }
}
});
function it_intersail_coop_dmilk_BodySaveCampioneReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveCampioneReqType: {
__def__: { nodetype: 'element',nodename: 'BodySaveCampioneReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneType' }
}
});
function it_intersail_coop_dmilk_BodySaveCampioneResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveCampioneResType: {
__def__: { nodetype: 'element',nodename: 'BodySaveCampioneResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneType' }
}
});
function it_intersail_coop_dmilk_ImportType() {
	this.id = null;
	this.labCod = null;
	this.fileName = null;
	this.filePath = null;
	this.dataSession = null;
	this.dataInizio = null;
	this.dataFine = null;
	this.allevatoreCod = null;
	this.tipoEsameCod = null;
	this.valoreCod = null;
	this.importRow = null;
	this.error = null;
	this.stato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_ImportType: {
__def__: { nodetype: 'element',nodename: 'ImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
labCod: { nodetype: 'element',nodename: 'LabCod',namespace: 'http://www.intersail.it/coop/dmilk' },
fileName: { nodetype: 'element',nodename: 'FileName',namespace: 'http://www.intersail.it/coop/dmilk' },
filePath: { nodetype: 'element',nodename: 'FilePath',namespace: 'http://www.intersail.it/coop/dmilk' },
dataSession: { nodetype: 'element',nodename: 'DataSession',namespace: 'http://www.intersail.it/coop/dmilk' },
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatoreCod: { nodetype: 'element',nodename: 'AllevatoreCod',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoEsameCod: { nodetype: 'element',nodename: 'TipoEsameCod',namespace: 'http://www.intersail.it/coop/dmilk' },
valoreCod: { nodetype: 'element',nodename: 'ValoreCod',namespace: 'http://www.intersail.it/coop/dmilk' },
importRow: { nodetype: 'element',nodename: 'ImportRow',namespace: 'http://www.intersail.it/coop/dmilk' },
error: { nodetype: 'element',nodename: 'Error',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaImportType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaImportType: {
__def__: { nodetype: 'element',nodename: 'ListaImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
import: { nodetype: 'element',nodename: 'Import',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListImportReqType() {
	it_intersail_coop_BodyType.call(this);
	this.dataInizio = null;
	this.dataFine = null;
	this.labCod = null;
	this.stato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
labCod: { nodetype: 'element',nodename: 'LabCod',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListImportResType() {
	it_intersail_coop_BodyType.call(this);
	this.totaleCampioni = null;
	this.righeDaElaborare = null;
	this.righeElaborate = null;
	this.righeInErrore = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListImportResType: {
__def__: { nodetype: 'element',nodename: 'BodyListImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
imports: { nodetype: 'element',nodename: 'Imports',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaImportType' },
totaleCampioni: { nodetype: 'element',nodename: 'TotaleCampioni',namespace: 'http://www.intersail.it/coop/dmilk' },
righeDaElaborare: { nodetype: 'element',nodename: 'RigheDaElaborare',namespace: 'http://www.intersail.it/coop/dmilk' },
righeElaborate: { nodetype: 'element',nodename: 'RigheElaborate',namespace: 'http://www.intersail.it/coop/dmilk' },
righeInErrore: { nodetype: 'element',nodename: 'RigheInErrore',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_VerbaleBseImportType() {
	this.id = null;
	this.numeroVerbale = null;
	this.numeroConferimento = null;
	this.dataPrelievo = null;
	this.dataAccettazione = null;
	this.dataRegistrazione = null;
	this.stato = null;
	this.numeroCampioni = null;
	this.rispostaA = null;
	this.tipologia = null;
	this.dataPresaInCarico = null;
	this.numeroRdp = null;
	this.note = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_VerbaleBseImportType: {
__def__: { nodetype: 'element',nodename: 'VerbaleBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroVerbale: { nodetype: 'element',nodename: 'NumeroVerbale',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroConferimento: { nodetype: 'element',nodename: 'NumeroConferimento',namespace: 'http://www.intersail.it/coop/dmilk' },
dataPrelievo: { nodetype: 'element',nodename: 'DataPrelievo',namespace: 'http://www.intersail.it/coop/dmilk' },
dataAccettazione: { nodetype: 'element',nodename: 'DataAccettazione',namespace: 'http://www.intersail.it/coop/dmilk' },
dataRegistrazione: { nodetype: 'element',nodename: 'DataRegistrazione',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' },
asl: { nodetype: 'element',nodename: 'Asl',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AslBseImportType' },
macello: { nodetype: 'element',nodename: 'Macello',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MacelloBseImportType' },
nomenclatore: { nodetype: 'element',nodename: 'Nomenclatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreBseImportType' },
campioni: { nodetype: 'element',nodename: 'Campioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneBseImportType' },
numeroCampioni: { nodetype: 'element',nodename: 'NumeroCampioni',namespace: 'http://www.intersail.it/coop/dmilk' },
rispostaA: { nodetype: 'element',nodename: 'RispostaA',namespace: 'http://www.intersail.it/coop/dmilk' },
tipologia: { nodetype: 'element',nodename: 'Tipologia',namespace: 'http://www.intersail.it/coop/dmilk' },
dataPresaInCarico: { nodetype: 'element',nodename: 'DataPresaInCarico',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatore: { nodetype: 'element',nodename: 'Allevatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreType' },
numeroRdp: { nodetype: 'element',nodename: 'NumeroRdp',namespace: 'http://www.intersail.it/coop/dmilk' },
note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_CampioneBseImportEsitoCEAType() {
	this.id = null;
	this.verbaleId = null;
	this.codice = null;
	this.numeroConferimento = null;
	this.esito = null;
	this.dataInvio = null;
	this.esitoCEA = null;
	this.dataRicevuta = null;
	this.email = null;
	this.dataFine = null;
	this.esitoCEAId = null;
	this.numeroVerbale = null;
	this.dataAccettazione = null;
	this.dataPrelievo = null;
	this.tipologia = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_CampioneBseImportEsitoCEAType: {
__def__: { nodetype: 'element',nodename: 'CampioneBseImportEsitoCEAType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
verbaleId: { nodetype: 'element',nodename: 'VerbaleId',namespace: 'http://www.intersail.it/coop/dmilk' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroConferimento: { nodetype: 'element',nodename: 'NumeroConferimento',namespace: 'http://www.intersail.it/coop/dmilk' },
esito: { nodetype: 'element',nodename: 'Esito',namespace: 'http://www.intersail.it/coop/dmilk' },
dataInvio: { nodetype: 'element',nodename: 'DataInvio',namespace: 'http://www.intersail.it/coop/dmilk' },
esitoCEA: { nodetype: 'element',nodename: 'EsitoCEA',namespace: 'http://www.intersail.it/coop/dmilk' },
dataRicevuta: { nodetype: 'element',nodename: 'DataRicevuta',namespace: 'http://www.intersail.it/coop/dmilk' },
email: { nodetype: 'element',nodename: 'Email',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
esitoCEAId: { nodetype: 'element',nodename: 'EsitoCEAId',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroVerbale: { nodetype: 'element',nodename: 'NumeroVerbale',namespace: 'http://www.intersail.it/coop/dmilk' },
dataAccettazione: { nodetype: 'element',nodename: 'DataAccettazione',namespace: 'http://www.intersail.it/coop/dmilk' },
dataPrelievo: { nodetype: 'element',nodename: 'DataPrelievo',namespace: 'http://www.intersail.it/coop/dmilk' },
tipologia: { nodetype: 'element',nodename: 'Tipologia',namespace: 'http://www.intersail.it/coop/dmilk' },
allegato: { nodetype: 'element',nodename: 'Allegato',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_zapdoc_DocumentInfoType' }
}
});
function it_intersail_coop_dmilk_ListaStatiCampioneBseImportType() {
	this.stato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaStatiCampioneBseImportType: {
__def__: { nodetype: 'element',nodename: 'ListaStatiCampioneBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk',multiple: true }
}
});
function it_intersail_coop_dmilk_CampioneBseImportType() {
	this.id = null;
	this.codice = null;
	this.identificazione = null;
	this.allevamento = null;
	this.esito = null;
	this.dataInizio = null;
	this.dataFine = null;
	this.nota = null;
	this.matriceId = null;
	this.dataNascita = null;
	this.sesso = null;
	this.specie = null;
	this.razza = null;
	this.aPagamento = null;
	this.codiceDiLaboratorio = null;
	this.situazione = null;
	this.notaNonIdoneita = null;
	this.extracomunitario = null;
	this.paeseDiProvenienza = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_CampioneBseImportType: {
__def__: { nodetype: 'element',nodename: 'CampioneBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
identificazione: { nodetype: 'element',nodename: 'Identificazione',namespace: 'http://www.intersail.it/coop/dmilk' },
allevamento: { nodetype: 'element',nodename: 'Allevamento',namespace: 'http://www.intersail.it/coop/dmilk' },
esito: { nodetype: 'element',nodename: 'Esito',namespace: 'http://www.intersail.it/coop/dmilk' },
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
nota: { nodetype: 'element',nodename: 'Nota',namespace: 'http://www.intersail.it/coop/dmilk' },
matriceId: { nodetype: 'element',nodename: 'MatriceId',namespace: 'http://www.intersail.it/coop/dmilk' },
stati: { nodetype: 'element',nodename: 'Stati',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaStatiCampioneBseImportType' },
dataNascita: { nodetype: 'element',nodename: 'DataNascita',namespace: 'http://www.intersail.it/coop/dmilk' },
sesso: { nodetype: 'element',nodename: 'Sesso',namespace: 'http://www.intersail.it/coop/dmilk' },
specie: { nodetype: 'element',nodename: 'Specie',namespace: 'http://www.intersail.it/coop/dmilk' },
razza: { nodetype: 'element',nodename: 'Razza',namespace: 'http://www.intersail.it/coop/dmilk' },
aPagamento: { nodetype: 'element',nodename: 'APagamento',namespace: 'http://www.intersail.it/coop/dmilk' },
codiceDiLaboratorio: { nodetype: 'element',nodename: 'CodiceDiLaboratorio',namespace: 'http://www.intersail.it/coop/dmilk' },
situazione: { nodetype: 'element',nodename: 'Situazione',namespace: 'http://www.intersail.it/coop/dmilk' },
notaNonIdoneita: { nodetype: 'element',nodename: 'NotaNonIdoneita',namespace: 'http://www.intersail.it/coop/dmilk' },
extracomunitario: { nodetype: 'element',nodename: 'Extracomunitario',namespace: 'http://www.intersail.it/coop/dmilk' },
paeseDiProvenienza: { nodetype: 'element',nodename: 'PaeseDiProvenienza',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaCampioneBseImportType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaCampioneBseImportType: {
__def__: { nodetype: 'element',nodename: 'ListaCampioneBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneBseImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaCampioneBseImportEsitoCEAType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaCampioneBseImportEsitoCEAType: {
__def__: { nodetype: 'element',nodename: 'ListaCampioneBseImportEsitoCEAType',namespace: 'http://www.intersail.it/coop/dmilk' },
campioneBSEEsitoCEA: { nodetype: 'element',nodename: 'CampioneBSEEsitoCEA',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneBseImportEsitoCEAType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaVerbaleBseImportType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaVerbaleBseImportType: {
__def__: { nodetype: 'element',nodename: 'ListaVerbaleBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
verbale: { nodetype: 'element',nodename: 'Verbale',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_VerbaleBseImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListVerbaliBseImportReqType() {
	it_intersail_coop_BodyType.call(this);
	this.dataInizio = null;
	this.dataFine = null;
	this.stato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListVerbaliBseImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListVerbaliBseImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniBseImportEsitoCEAReqType() {
	it_intersail_coop_dmilk_BodyBaseListReqType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniBseImportEsitoCEAReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniBseImportEsitoCEAReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_BodyBaseListReqType"
}
});
function it_intersail_coop_dmilk_BodyListCampioniBseImportEsitoCEAResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniBseImportEsitoCEAResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniBseImportEsitoCEAResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
listaCampioniBseImportEsitoCEA: { nodetype: 'element',nodename: 'ListaCampioniBseImportEsitoCEA',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneBseImportEsitoCEAType' }
}
});
function it_intersail_coop_dmilk_BodyListVerbaliBseImportResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListVerbaliBseImportResType: {
__def__: { nodetype: 'element',nodename: 'BodyListVerbaliBseImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbali: { nodetype: 'element',nodename: 'Verbali',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaVerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_BodyListVerbaliBseImportAdvancedReqType() {
	it_intersail_coop_BodyType.call(this);
	this.numeroConferimento = null;
	this.annoConferimento = null;
	this.barcodeCampione = null;
	this.marcaCampione = null;
	this.cdlCampione = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListVerbaliBseImportAdvancedReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListVerbaliBseImportAdvancedReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
numeroConferimento: { nodetype: 'element',nodename: 'NumeroConferimento',namespace: 'http://www.intersail.it/coop/dmilk' },
annoConferimento: { nodetype: 'element',nodename: 'AnnoConferimento',namespace: 'http://www.intersail.it/coop/dmilk' },
barcodeCampione: { nodetype: 'element',nodename: 'BarcodeCampione',namespace: 'http://www.intersail.it/coop/dmilk' },
marcaCampione: { nodetype: 'element',nodename: 'MarcaCampione',namespace: 'http://www.intersail.it/coop/dmilk' },
cdlCampione: { nodetype: 'element',nodename: 'CdlCampione',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListVerbaliBseImportAdvancedResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListVerbaliBseImportAdvancedResType: {
__def__: { nodetype: 'element',nodename: 'BodyListVerbaliBseImportAdvancedResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbali: { nodetype: 'element',nodename: 'Verbali',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaVerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_ListaAslType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaAslType: {
__def__: { nodetype: 'element',nodename: 'ListaAslType',namespace: 'http://www.intersail.it/coop/dmilk' },
asl: { nodetype: 'element',nodename: 'Asl',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AslBseImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListAslReqType() {
	it_intersail_coop_BodyType.call(this);
	this.filtroRagioneSociale = null;
	this.filtroIndirizzo = null;
	this.forzaRicercaGenerale = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAslReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListAslReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
filtroRagioneSociale: { nodetype: 'element',nodename: 'FiltroRagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroIndirizzo: { nodetype: 'element',nodename: 'FiltroIndirizzo',namespace: 'http://www.intersail.it/coop/dmilk' },
forzaRicercaGenerale: { nodetype: 'element',nodename: 'ForzaRicercaGenerale',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListAslResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAslResType: {
__def__: { nodetype: 'element',nodename: 'BodyListAslResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
asl: { nodetype: 'element',nodename: 'Asl',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaAslType' }
}
});
function it_intersail_coop_dmilk_ListaMacelliType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaMacelliType: {
__def__: { nodetype: 'element',nodename: 'ListaMacelliType',namespace: 'http://www.intersail.it/coop/dmilk' },
macello: { nodetype: 'element',nodename: 'Macello',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MacelloBseImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListMacelliReqType() {
	it_intersail_coop_BodyType.call(this);
	this.filtroBolloCee = null;
	this.filtroRagioneSociale = null;
	this.filtroIndirizzo = null;
	this.forzaRicercaGenerale = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListMacelliReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListMacelliReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
filtroBolloCee: { nodetype: 'element',nodename: 'FiltroBolloCee',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroRagioneSociale: { nodetype: 'element',nodename: 'FiltroRagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroIndirizzo: { nodetype: 'element',nodename: 'FiltroIndirizzo',namespace: 'http://www.intersail.it/coop/dmilk' },
forzaRicercaGenerale: { nodetype: 'element',nodename: 'ForzaRicercaGenerale',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListMacelliResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListMacelliResType: {
__def__: { nodetype: 'element',nodename: 'BodyListMacelliResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
macelli: { nodetype: 'element',nodename: 'Macelli',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaMacelliType' }
}
});
function it_intersail_coop_dmilk_ListaAllevatoriType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaAllevatoriType: {
__def__: { nodetype: 'element',nodename: 'ListaAllevatoriType',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatore: { nodetype: 'element',nodename: 'Allevatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListAllevatoriReqType() {
	it_intersail_coop_BodyType.call(this);
	this.filtroCodiceAllevix = null;
	this.filtroRagioneSociale = null;
	this.filtroIndirizzo = null;
	this.forzaRicercaGenerale = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAllevatoriReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListAllevatoriReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
filtroCodiceAllevix: { nodetype: 'element',nodename: 'FiltroCodiceAllevix',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroRagioneSociale: { nodetype: 'element',nodename: 'FiltroRagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroIndirizzo: { nodetype: 'element',nodename: 'FiltroIndirizzo',namespace: 'http://www.intersail.it/coop/dmilk' },
forzaRicercaGenerale: { nodetype: 'element',nodename: 'ForzaRicercaGenerale',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListAllevatoriResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAllevatoriResType: {
__def__: { nodetype: 'element',nodename: 'BodyListAllevatoriResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
allevatori: { nodetype: 'element',nodename: 'Allevatori',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaAllevatoriType' }
}
});
function it_intersail_coop_dmilk_ListaNomenclatoriType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaNomenclatoriType: {
__def__: { nodetype: 'element',nodename: 'ListaNomenclatoriType',namespace: 'http://www.intersail.it/coop/dmilk' },
nomenclatore: { nodetype: 'element',nodename: 'Nomenclatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreBseImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListNomenclatoriReqType() {
	it_intersail_coop_BodyType.call(this);
	this.gruppoCod = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListNomenclatoriReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListNomenclatoriReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
gruppoCod: { nodetype: 'element',nodename: 'GruppoCod',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListNomenclatoriResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListNomenclatoriResType: {
__def__: { nodetype: 'element',nodename: 'BodyListNomenclatoriResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
nomenclatori: { nodetype: 'element',nodename: 'Nomenclatori',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaNomenclatoriType' }
}
});
function it_intersail_coop_dmilk_BodySaveVerbaleBseImportReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveVerbaleBseImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodySaveVerbaleBseImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbale: { nodetype: 'element',nodename: 'Verbale',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_VerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_BodySaveVerbaleBseImportResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveVerbaleBseImportResType: {
__def__: { nodetype: 'element',nodename: 'BodySaveVerbaleBseImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbale: { nodetype: 'element',nodename: 'Verbale',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_VerbaleBseImportType' },
errori: { nodetype: 'element',nodename: 'Errori',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaErroriVerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_BodyStepNextVerbaleBseImportReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyStepNextVerbaleBseImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodyStepNextVerbaleBseImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbale: { nodetype: 'element',nodename: 'Verbale',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_VerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_BodyStepNextVerbaleBseImportResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyStepNextVerbaleBseImportResType: {
__def__: { nodetype: 'element',nodename: 'BodyStepNextVerbaleBseImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbale: { nodetype: 'element',nodename: 'Verbale',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_VerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_BodyInitializeVerbaleBseImportReqType() {
	it_intersail_coop_BodyType.call(this);
	this.anno = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyInitializeVerbaleBseImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodyInitializeVerbaleBseImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyInitializeVerbaleBseImportResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyInitializeVerbaleBseImportResType: {
__def__: { nodetype: 'element',nodename: 'BodyInitializeVerbaleBseImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NumeroProgressivoConferimentoType' }
}
});
function it_intersail_coop_dmilk_SizeType() {
	this.width = null;
	this.height = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_SizeType: {
__def__: { nodetype: 'element',nodename: 'SizeType',namespace: 'http://www.intersail.it/coop/dmilk' },
width: { nodetype: 'element',nodename: 'Width',namespace: 'http://www.intersail.it/coop/dmilk' },
height: { nodetype: 'element',nodename: 'Height',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_PositionType() {
	this.x = null;
	this.y = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_PositionType: {
__def__: { nodetype: 'element',nodename: 'PositionType',namespace: 'http://www.intersail.it/coop/dmilk' },
x: { nodetype: 'element',nodename: 'X',namespace: 'http://www.intersail.it/coop/dmilk' },
y: { nodetype: 'element',nodename: 'Y',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_MatriceElementType() {
	this.id = null;
	this.codice = null;
	this.tipo = null;
	this.stato = null;
	this.numeroCella = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_MatriceElementType: {
__def__: { nodetype: 'element',nodename: 'MatriceElementType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
posizione: { nodetype: 'element',nodename: 'Posizione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_PositionType' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
tipo: { nodetype: 'element',nodename: 'Tipo',namespace: 'http://www.intersail.it/coop/dmilk' },
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneBseImportType' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroCella: { nodetype: 'element',nodename: 'NumeroCella',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_MatriceElementListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_MatriceElementListType: {
__def__: { nodetype: 'element',nodename: 'MatriceElementListType',namespace: 'http://www.intersail.it/coop/dmilk' },
elements: { nodetype: 'element',nodename: 'Elements',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MatriceElementType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaPositionType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaPositionType: {
__def__: { nodetype: 'element',nodename: 'ListaPositionType',namespace: 'http://www.intersail.it/coop/dmilk' },
posizione: { nodetype: 'element',nodename: 'Posizione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_PositionType',multiple: true }
}
});
function it_intersail_coop_dmilk_TipologiaMatriceType() {
	this.id = null;
	this.identificativo = null;
	this.ordine = null;
	this.descrizione = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_TipologiaMatriceType: {
__def__: { nodetype: 'element',nodename: 'TipologiaMatriceType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
dimensione: { nodetype: 'element',nodename: 'Dimensione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_SizeType' },
posizioniCelleControllo: { nodetype: 'element',nodename: 'PosizioniCelleControllo',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaPositionType' },
identificativo: { nodetype: 'element',nodename: 'Identificativo',namespace: 'http://www.intersail.it/coop/dmilk' },
ordine: { nodetype: 'element',nodename: 'Ordine',namespace: 'http://www.intersail.it/coop/dmilk' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_MatriceType() {
	this.id = null;
	this.nome = null;
	this.dataCreazione = null;
	this.stato = null;
	this.tipoCampioni = null;
	this.numeroGiornaliero = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_MatriceType: {
__def__: { nodetype: 'element',nodename: 'MatriceType',namespace: 'http://www.intersail.it/coop/dmilk' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/dmilk' },
nome: { nodetype: 'element',nodename: 'Nome',namespace: 'http://www.intersail.it/coop/dmilk' },
elementi: { nodetype: 'element',nodename: 'Elementi',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MatriceElementListType' },
dataCreazione: { nodetype: 'element',nodename: 'DataCreazione',namespace: 'http://www.intersail.it/coop/dmilk' },
tipologia: { nodetype: 'element',nodename: 'Tipologia',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_TipologiaMatriceType' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoCampioni: { nodetype: 'element',nodename: 'TipoCampioni',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroGiornaliero: { nodetype: 'element',nodename: 'NumeroGiornaliero',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaMatriciType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaMatriciType: {
__def__: { nodetype: 'element',nodename: 'ListaMatriciType',namespace: 'http://www.intersail.it/coop/dmilk' },
matrice: { nodetype: 'element',nodename: 'Matrice',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MatriceType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListMatriciReqType() {
	it_intersail_coop_BodyType.call(this);
	this.dataInizio = null;
	this.dataFine = null;
	this.stato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListMatriciReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListMatriciReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/dmilk' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListMatriciResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListMatriciResType: {
__def__: { nodetype: 'element',nodename: 'BodyListMatriciResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
matrici: { nodetype: 'element',nodename: 'Matrici',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaMatriciType' }
}
});
function it_intersail_coop_dmilk_ListaTipologieMatriceType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaTipologieMatriceType: {
__def__: { nodetype: 'element',nodename: 'ListaTipologieMatriceType',namespace: 'http://www.intersail.it/coop/dmilk' },
tipologia: { nodetype: 'element',nodename: 'Tipologia',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_TipologiaMatriceType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListTipologieMatriceReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListTipologieMatriceReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListTipologieMatriceReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_dmilk_BodyListTipologieMatriceResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListTipologieMatriceResType: {
__def__: { nodetype: 'element',nodename: 'BodyListTipologieMatriceResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
tipologie: { nodetype: 'element',nodename: 'Tipologie',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaTipologieMatriceType' }
}
});
function it_intersail_coop_dmilk_BodySaveMatriceReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveMatriceReqType: {
__def__: { nodetype: 'element',nodename: 'BodySaveMatriceReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
matrice: { nodetype: 'element',nodename: 'Matrice',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MatriceType' }
}
});
function it_intersail_coop_dmilk_BodySaveMatriceResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveMatriceResType: {
__def__: { nodetype: 'element',nodename: 'BodySaveMatriceResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
matrice: { nodetype: 'element',nodename: 'Matrice',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MatriceType' }
}
});
function it_intersail_coop_dmilk_BodyInitializeMatriceBseImportReqType() {
	it_intersail_coop_BodyType.call(this);
	this.giorno = null;
	this.tipologiaCampioni = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyInitializeMatriceBseImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodyInitializeMatriceBseImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
giorno: { nodetype: 'element',nodename: 'Giorno',namespace: 'http://www.intersail.it/coop/dmilk' },
tipologiaCampioni: { nodetype: 'element',nodename: 'TipologiaCampioni',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyInitializeMatriceBseImportResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyInitializeMatriceBseImportResType: {
__def__: { nodetype: 'element',nodename: 'BodyInitializeMatriceBseImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NumeroProgressivoMatriceType' }
}
});
function it_intersail_coop_dmilk_BodyAnnullaNuovaMatriceBseImportReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyAnnullaNuovaMatriceBseImportReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAnnullaNuovaMatriceBseImportReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NumeroProgressivoMatriceType' }
}
});
function it_intersail_coop_dmilk_BodyAnnullaNuovaMatriceBseImportResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyAnnullaNuovaMatriceBseImportResType: {
__def__: { nodetype: 'element',nodename: 'BodyAnnullaNuovaMatriceBseImportResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_dmilk_BodyStampaFoglioLavoroReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyStampaFoglioLavoroReqType: {
__def__: { nodetype: 'element',nodename: 'BodyStampaFoglioLavoroReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NumeroProgressivoMatriceType' }
}
});
function it_intersail_coop_dmilk_BodyStampaFoglioLavoroResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyStampaFoglioLavoroResType: {
__def__: { nodetype: 'element',nodename: 'BodyStampaFoglioLavoroResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
documento: { nodetype: 'element',nodename: 'Documento',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_zapdoc_DocumentInfoType' }
}
});
function it_intersail_coop_dmilk_InfoErroreVerbaleBseImportType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_InfoErroreVerbaleBseImportType: {
__def__: { nodetype: 'element',nodename: 'InfoErroreVerbaleBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_CodiceCampioneDuplicatoErroreVerbaleBseImportType() {
	it_intersail_coop_dmilk_InfoErroreVerbaleBseImportType.call(this);
	this.codice = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_CodiceCampioneDuplicatoErroreVerbaleBseImportType: {
__def__: { nodetype: 'element',nodename: 'CodiceCampioneDuplicatoErroreVerbaleBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_InfoErroreVerbaleBseImportType",
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ErroreVerbaleBseImportType() {
	this.tipo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_ErroreVerbaleBseImportType: {
__def__: { nodetype: 'element',nodename: 'ErroreVerbaleBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
tipo: { nodetype: 'element',nodename: 'Tipo',namespace: 'http://www.intersail.it/coop/dmilk' },
info: { nodetype: 'element',nodename: 'Info',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_InfoErroreVerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_ListaErroriVerbaleBseImportType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaErroriVerbaleBseImportType: {
__def__: { nodetype: 'element',nodename: 'ListaErroriVerbaleBseImportType',namespace: 'http://www.intersail.it/coop/dmilk' },
errore: { nodetype: 'element',nodename: 'Errore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ErroreVerbaleBseImportType',multiple: true }
}
});
function it_intersail_coop_dmilk_NumeroProgressivoConferimentoType() {
	this.anno = null;
	this.progressivo = null;
	this.tipo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_NumeroProgressivoConferimentoType: {
__def__: { nodetype: 'element',nodename: 'NumeroProgressivoConferimentoType',namespace: 'http://www.intersail.it/coop/dmilk' },
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/dmilk' },
progressivo: { nodetype: 'element',nodename: 'Progressivo',namespace: 'http://www.intersail.it/coop/dmilk' },
tipo: { nodetype: 'element',nodename: 'Tipo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_NumeroProgressivoMatriceType() {
	this.giorno = null;
	this.progressivo = null;
	this.tipologiaCampioni = null;
	this.celleTotaliPrecedenti = null;
	this.celleControlloTotaliPrecedenti = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_NumeroProgressivoMatriceType: {
__def__: { nodetype: 'element',nodename: 'NumeroProgressivoMatriceType',namespace: 'http://www.intersail.it/coop/dmilk' },
giorno: { nodetype: 'element',nodename: 'Giorno',namespace: 'http://www.intersail.it/coop/dmilk' },
progressivo: { nodetype: 'element',nodename: 'Progressivo',namespace: 'http://www.intersail.it/coop/dmilk' },
tipo: { nodetype: 'element',nodename: 'Tipo',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_TipologiaMatriceType' },
tipologiaCampioni: { nodetype: 'element',nodename: 'TipologiaCampioni',namespace: 'http://www.intersail.it/coop/dmilk' },
celleTotaliPrecedenti: { nodetype: 'element',nodename: 'CelleTotaliPrecedenti',namespace: 'http://www.intersail.it/coop/dmilk' },
celleControlloTotaliPrecedenti: { nodetype: 'element',nodename: 'CelleControlloTotaliPrecedenti',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BolloCeeDarwinType() {
	this.identificativo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BolloCeeDarwinType: {
__def__: { nodetype: 'element',nodename: 'BolloCeeDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
identificativo: { nodetype: 'element',nodename: 'Identificativo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaBolliCeeDarwinType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaBolliCeeDarwinType: {
__def__: { nodetype: 'element',nodename: 'ListaBolliCeeDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
bollo: { nodetype: 'element',nodename: 'Bollo',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_BolloCeeDarwinType',multiple: true }
}
});
function it_intersail_coop_dmilk_ReferenteDarwinType() {
	this.codice = null;
	this.ragioneSociale = null;
	this.indirizzo = null;
	this.comune = null;
	this.provincia = null;
	this.obsoleto = null;
	this.tipoReferente = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_ReferenteDarwinType: {
__def__: { nodetype: 'element',nodename: 'ReferenteDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' },
ragioneSociale: { nodetype: 'element',nodename: 'RagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
indirizzo: { nodetype: 'element',nodename: 'Indirizzo',namespace: 'http://www.intersail.it/coop/dmilk' },
comune: { nodetype: 'element',nodename: 'Comune',namespace: 'http://www.intersail.it/coop/dmilk' },
provincia: { nodetype: 'element',nodename: 'Provincia',namespace: 'http://www.intersail.it/coop/dmilk' },
obsoleto: { nodetype: 'element',nodename: 'Obsoleto',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoReferente: { nodetype: 'element',nodename: 'TipoReferente',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_AslDarwinType() {
	it_intersail_coop_dmilk_ReferenteDarwinType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_AslDarwinType: {
__def__: { nodetype: 'element',nodename: 'AslDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_ReferenteDarwinType"
}
});
function it_intersail_coop_dmilk_MacelloDarwinType() {
	it_intersail_coop_dmilk_ReferenteDarwinType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_MacelloDarwinType: {
__def__: { nodetype: 'element',nodename: 'MacelloDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_ReferenteDarwinType",
bolliCee: { nodetype: 'element',nodename: 'BolliCee',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaBolliCeeDarwinType' }
}
});
function it_intersail_coop_dmilk_AllevatoreDarwinType() {
	it_intersail_coop_dmilk_ReferenteDarwinType.call(this);
	this.codiceAllevix = null;
	this.numeroCodiceAllevix = null;
	this.daUfficiale = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_AllevatoreDarwinType: {
__def__: { nodetype: 'element',nodename: 'AllevatoreDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_ReferenteDarwinType",
codiceAllevix: { nodetype: 'element',nodename: 'CodiceAllevix',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroCodiceAllevix: { nodetype: 'element',nodename: 'NumeroCodiceAllevix',namespace: 'http://www.intersail.it/coop/dmilk' },
daUfficiale: { nodetype: 'element',nodename: 'DaUfficiale',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaAllevatoriDarwinType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaAllevatoriDarwinType: {
__def__: { nodetype: 'element',nodename: 'ListaAllevatoriDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatore: { nodetype: 'element',nodename: 'Allevatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreDarwinType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaMacelliDarwinType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaMacelliDarwinType: {
__def__: { nodetype: 'element',nodename: 'ListaMacelliDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
macello: { nodetype: 'element',nodename: 'Macello',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MacelloDarwinType',multiple: true }
}
});
function it_intersail_coop_dmilk_ListaAslDarwinType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaAslDarwinType: {
__def__: { nodetype: 'element',nodename: 'ListaAslDarwinType',namespace: 'http://www.intersail.it/coop/dmilk' },
asl: { nodetype: 'element',nodename: 'Asl',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AslDarwinType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyListAllevatoriDarwinReqType() {
	it_intersail_coop_BodyType.call(this);
	this.filtroCodiceAllevix = null;
	this.filtroRagioneSociale = null;
	this.filtroIndirizzo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAllevatoriDarwinReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListAllevatoriDarwinReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
filtroCodiceAllevix: { nodetype: 'element',nodename: 'FiltroCodiceAllevix',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroRagioneSociale: { nodetype: 'element',nodename: 'FiltroRagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroIndirizzo: { nodetype: 'element',nodename: 'FiltroIndirizzo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListAllevatoriDarwinResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAllevatoriDarwinResType: {
__def__: { nodetype: 'element',nodename: 'BodyListAllevatoriDarwinResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
allevatori: { nodetype: 'element',nodename: 'Allevatori',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaAllevatoriDarwinType' }
}
});
function it_intersail_coop_dmilk_BodyListMacelliDarwinReqType() {
	it_intersail_coop_BodyType.call(this);
	this.filtroBolloCee = null;
	this.filtroRagioneSociale = null;
	this.filtroIndirizzo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListMacelliDarwinReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListMacelliDarwinReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
filtroBolloCee: { nodetype: 'element',nodename: 'FiltroBolloCee',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroRagioneSociale: { nodetype: 'element',nodename: 'FiltroRagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroIndirizzo: { nodetype: 'element',nodename: 'FiltroIndirizzo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListAslDarwinReqType() {
	it_intersail_coop_BodyType.call(this);
	this.filtroRagioneSociale = null;
	this.filtroIndirizzo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAslDarwinReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListAslDarwinReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
filtroRagioneSociale: { nodetype: 'element',nodename: 'FiltroRagioneSociale',namespace: 'http://www.intersail.it/coop/dmilk' },
filtroIndirizzo: { nodetype: 'element',nodename: 'FiltroIndirizzo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListAslDarwinResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAslDarwinResType: {
__def__: { nodetype: 'element',nodename: 'BodyListAslDarwinResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
asl: { nodetype: 'element',nodename: 'Asl',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaAslDarwinType' }
}
});
function it_intersail_coop_dmilk_BodyForzaRdpReqType() {
	it_intersail_coop_BodyType.call(this);
	this.verbaleId = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyForzaRdpReqType: {
__def__: { nodetype: 'element',nodename: 'BodyForzaRdpReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbaleId: { nodetype: 'element',nodename: 'VerbaleId',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyForzaRdpResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyForzaRdpResType: {
__def__: { nodetype: 'element',nodename: 'BodyForzaRdpResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
verbale: { nodetype: 'element',nodename: 'Verbale',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_VerbaleBseImportType' },
errori: { nodetype: 'element',nodename: 'Errori',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaErroriVerbaleBseImportType' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniLatteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.soloCampioniConAnomalia = null;
	this.soloCampioniConSegnalazioni = null;
	this.soloCampioniParcheggiati = null;
	this.allevatore = null;
	this.data = null;
	this.ordineAscendente = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_IDListType' },
soloCampioniConAnomalia: { nodetype: 'element',nodename: 'SoloCampioniConAnomalia',namespace: 'http://www.intersail.it/coop/dmilk' },
soloCampioniConSegnalazioni: { nodetype: 'element',nodename: 'SoloCampioniConSegnalazioni',namespace: 'http://www.intersail.it/coop/dmilk' },
soloCampioniParcheggiati: { nodetype: 'element',nodename: 'SoloCampioniParcheggiati',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatore: { nodetype: 'element',nodename: 'Allevatore',namespace: 'http://www.intersail.it/coop/dmilk' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' },
parametriRicerca: { nodetype: 'element',nodename: 'ParametriRicerca',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_ParametriRicercaType' },
ordineAscendente: { nodetype: 'element',nodename: 'OrdineAscendente',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyValidateCampioniLatteReqType() {
	it_intersail_coop_dmilk_BodyListCampioniLatteReqType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyValidateCampioniLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyValidateCampioniLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_dmilk_BodyListCampioniLatteReqType",
campioniDaEscludere: { nodetype: 'element',nodename: 'CampioniDaEscludere',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniLatteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioni: { nodetype: 'element',nodename: 'Campioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneType' },
paginazioneInfo: { nodetype: 'element',nodename: 'PaginazioneInfo',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_PaginazioneInfoType' }
}
});
function it_intersail_coop_dmilk_BodyGetNomenclatoreReqType() {
	it_intersail_coop_BodyType.call(this);
	this.codice = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGetNomenclatoreReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetNomenclatoreReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListMacelliDarwinResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListMacelliDarwinResType: {
__def__: { nodetype: 'element',nodename: 'BodyListMacelliDarwinResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
macelli: { nodetype: 'element',nodename: 'Macelli',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaMacelliDarwinType' }
}
});
function it_intersail_coop_dmilk_BodyGetNomenclatoreResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGetNomenclatoreResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetNomenclatoreResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
nomenclatore: { nodetype: 'element',nodename: 'Nomenclatore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreType' }
}
});
function it_intersail_coop_dmilk_BodyGetCampioneReqType() {
	it_intersail_coop_BodyType.call(this);
	this.campioneId = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGetCampioneReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetCampioneReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyGetCampioneResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGetCampioneResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetCampioneResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneType' }
}
});
function it_intersail_coop_dmilk_BodyGetNomenclatoreListReqType() {
	it_intersail_coop_BodyType.call(this);
	this.gruppoCod = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGetNomenclatoreListReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetNomenclatoreListReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
gruppoCod: { nodetype: 'element',nodename: 'GruppoCod',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyGetNomenclatoreListResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGetNomenclatoreListResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetNomenclatoreListResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
nomenclatoreList: { nodetype: 'element',nodename: 'NomenclatoreList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_NomenclatoreListType' }
}
});
function it_intersail_coop_dmilk_BodySaveCampioniLatteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.allevatore = null;
	this.data = null;
	this.soloCampioniConSegnalazioni = null;
	this.soloCampioniConAnomalia = null;
	this.soloCampioniParcheggiati = null;
	this.ordineAscendente = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveCampioniLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodySaveCampioniLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
esami: { nodetype: 'element',nodename: 'Esami',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaEsameType' },
esamiDaCancellare: { nodetype: 'element',nodename: 'EsamiDaCancellare',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_EsameDaCancellareListType' },
activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_IDListType' },
allevatore: { nodetype: 'element',nodename: 'Allevatore',namespace: 'http://www.intersail.it/coop/dmilk' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' },
parametriRicerca: { nodetype: 'element',nodename: 'ParametriRicerca',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_ParametriRicercaType' },
soloCampioniConSegnalazioni: { nodetype: 'element',nodename: 'SoloCampioniConSegnalazioni',namespace: 'http://www.intersail.it/coop/dmilk' },
soloCampioniConAnomalia: { nodetype: 'element',nodename: 'SoloCampioniConAnomalia',namespace: 'http://www.intersail.it/coop/dmilk' },
soloCampioniParcheggiati: { nodetype: 'element',nodename: 'SoloCampioniParcheggiati',namespace: 'http://www.intersail.it/coop/dmilk' },
ordineAscendente: { nodetype: 'element',nodename: 'OrdineAscendente',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodySaveCampioniLatteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveCampioniLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodySaveCampioniLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioni: { nodetype: 'element',nodename: 'Campioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneType' },
paginazioneInfo: { nodetype: 'element',nodename: 'PaginazioneInfo',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_PaginazioneInfoType' }
}
});
function it_intersail_coop_dmilk_BodyMarcaCampioneLatteAnomaloReqType() {
	it_intersail_coop_BodyType.call(this);
	this.campioneId = null;
	this.anomaliaCodice = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyMarcaCampioneLatteAnomaloReqType: {
__def__: { nodetype: 'element',nodename: 'BodyMarcaCampioneLatteAnomaloReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' },
anomaliaCodice: { nodetype: 'element',nodename: 'AnomaliaCodice',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyMarcaCampioneLatteAnomaloResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyMarcaCampioneLatteAnomaloResType: {
__def__: { nodetype: 'element',nodename: 'BodyMarcaCampioneLatteAnomaloResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campione: { nodetype: 'element',nodename: 'Campione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_CampioneType' }
}
});
function it_intersail_coop_dmilk_BodyListAnomalieReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAnomalieReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListAnomalieReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_dmilk_BodyListAnomalieResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAnomalieResType: {
__def__: { nodetype: 'element',nodename: 'BodyListAnomalieResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
anomaliaList: { nodetype: 'element',nodename: 'AnomaliaList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AnomaliaListType' }
}
});
function it_intersail_coop_dmilk_BodyListAllevatoreHistoryReqType() {
	it_intersail_coop_BodyType.call(this);
	this.allevatoreId = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAllevatoreHistoryReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListAllevatoreHistoryReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
allevatoreId: { nodetype: 'element',nodename: 'AllevatoreId',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListAllevatoreHistoryResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListAllevatoreHistoryResType: {
__def__: { nodetype: 'element',nodename: 'BodyListAllevatoreHistoryResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
allevatoreHistoryList: { nodetype: 'element',nodename: 'AllevatoreHistoryList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreHistoryListType' }
}
});
function it_intersail_coop_dmilk_BodyListCampioneHistoryReqType() {
	it_intersail_coop_BodyType.call(this);
	this.campioneId = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioneHistoryReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioneHistoryReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListCampioneHistoryResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioneHistoryResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioneHistoryResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
doubleSerieCommentoList: { nodetype: 'element',nodename: 'DoubleSerieCommentoList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieCommentoListType' }
}
});
function it_intersail_coop_dmilk_AllevatoreHistoryType() {
	this.title = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_AllevatoreHistoryType: {
__def__: { nodetype: 'element',nodename: 'AllevatoreHistoryType',namespace: 'http://www.intersail.it/coop/dmilk' },
title: { nodetype: 'element',nodename: 'Title',namespace: 'http://www.intersail.it/coop/dmilk' },
doubleSerieList: { nodetype: 'element',nodename: 'DoubleSerieList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieListType' },
markedValueList: { nodetype: 'element',nodename: 'MarkedValueList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MarkedValueListType' }
}
});
function it_intersail_coop_dmilk_AllevatoreHistoryListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_AllevatoreHistoryListType: {
__def__: { nodetype: 'element',nodename: 'AllevatoreHistoryListType',namespace: 'http://www.intersail.it/coop/dmilk' },
allevatoreHistory: { nodetype: 'element',nodename: 'AllevatoreHistory',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AllevatoreHistoryType',multiple: true }
}
});
function it_intersail_coop_dmilk_DoubleSerieType() {
	this.label = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieType',namespace: 'http://www.intersail.it/coop/dmilk' },
label: { nodetype: 'element',nodename: 'Label',namespace: 'http://www.intersail.it/coop/dmilk' },
elements: { nodetype: 'element',nodename: 'Elements',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieElementListType' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_DecorationType' }
}
});
function it_intersail_coop_dmilk_DoubleSerieListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieListType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieListType',namespace: 'http://www.intersail.it/coop/dmilk' },
doubleSerie: { nodetype: 'element',nodename: 'DoubleSerie',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieType',multiple: true }
}
});
function it_intersail_coop_dmilk_DoubleSerieElementListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieElementListType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieElementListType',namespace: 'http://www.intersail.it/coop/dmilk' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieElementType',multiple: true }
}
});
function it_intersail_coop_dmilk_DoubleSerieElementType() {
	this.value = null;
	this.date = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieElementType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieElementType',namespace: 'http://www.intersail.it/coop/dmilk' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop/dmilk' },
date: { nodetype: 'element',nodename: 'Date',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_DoubleSerieCommentoType() {
	this.label = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieCommentoType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieCommentoType',namespace: 'http://www.intersail.it/coop/dmilk' },
label: { nodetype: 'element',nodename: 'Label',namespace: 'http://www.intersail.it/coop/dmilk' },
elements: { nodetype: 'element',nodename: 'Elements',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieCommentoElementListType' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_DecorationType' }
}
});
function it_intersail_coop_dmilk_DoubleSerieCommentoListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieCommentoListType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieCommentoListType',namespace: 'http://www.intersail.it/coop/dmilk' },
doubleSerieCommento: { nodetype: 'element',nodename: 'DoubleSerieCommento',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieCommentoType',multiple: true }
}
});
function it_intersail_coop_dmilk_DoubleSerieCommentoElementListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieCommentoElementListType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieCommentoElementListType',namespace: 'http://www.intersail.it/coop/dmilk' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleSerieCommentoElementType',multiple: true }
}
});
function it_intersail_coop_dmilk_DoubleSerieCommentoElementType() {
	this.value = null;
	this.date = null;
	this.autore = null;
	this.commento = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleSerieCommentoElementType: {
__def__: { nodetype: 'element',nodename: 'DoubleSerieCommentoElementType',namespace: 'http://www.intersail.it/coop/dmilk' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop/dmilk' },
date: { nodetype: 'element',nodename: 'Date',namespace: 'http://www.intersail.it/coop/dmilk' },
autore: { nodetype: 'element',nodename: 'Autore',namespace: 'http://www.intersail.it/coop/dmilk' },
commento: { nodetype: 'element',nodename: 'Commento',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_MarkedValueType() {
	this.label = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_MarkedValueType: {
__def__: { nodetype: 'element',nodename: 'MarkedValueType',namespace: 'http://www.intersail.it/coop/dmilk' },
label: { nodetype: 'element',nodename: 'Label',namespace: 'http://www.intersail.it/coop/dmilk' },
valueList: { nodetype: 'element',nodename: 'ValueList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_DoubleListType' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_DecorationType' }
}
});
function it_intersail_coop_dmilk_MarkedValueListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_MarkedValueListType: {
__def__: { nodetype: 'element',nodename: 'MarkedValueListType',namespace: 'http://www.intersail.it/coop/dmilk' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_MarkedValueType',multiple: true }
}
});
function it_intersail_coop_dmilk_EsameDaCancellareType() {
	this.esameId = null;
	this.note = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_EsameDaCancellareType: {
__def__: { nodetype: 'element',nodename: 'EsameDaCancellareType',namespace: 'http://www.intersail.it/coop/dmilk' },
esameId: { nodetype: 'element',nodename: 'EsameId',namespace: 'http://www.intersail.it/coop/dmilk' },
note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_EsameDaCancellareListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_EsameDaCancellareListType: {
__def__: { nodetype: 'element',nodename: 'EsameDaCancellareListType',namespace: 'http://www.intersail.it/coop/dmilk' },
esameDaCancellare: { nodetype: 'element',nodename: 'EsameDaCancellare',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_EsameDaCancellareType',multiple: true }
}
});
function it_intersail_coop_dmilk_DoubleListType() {
	this.value = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_DoubleListType: {
__def__: { nodetype: 'element',nodename: 'DoubleListType',namespace: 'http://www.intersail.it/coop/dmilk' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop/dmilk',multiple: true }
}
});
function it_intersail_coop_dmilk_AnomaliaListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_AnomaliaListType: {
__def__: { nodetype: 'element',nodename: 'AnomaliaListType',namespace: 'http://www.intersail.it/coop/dmilk' },
anomalia: { nodetype: 'element',nodename: 'Anomalia',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AnomaliaType',multiple: true }
}
});
function it_intersail_coop_dmilk_BodyValidateCampioniLatteResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyValidateCampioniLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyValidateCampioniLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/dmilk' },
campioni: { nodetype: 'element',nodename: 'Campioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneType' },
paginazioneInfo: { nodetype: 'element',nodename: 'PaginazioneInfo',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_PaginazioneInfoType' }
}
});
function it_intersail_coop_dmilk_BodyAddCampioneLatteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.barcode = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyAddCampioneLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddCampioneLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
esami: { nodetype: 'element',nodename: 'Esami',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaEsameType' },
barcode: { nodetype: 'element',nodename: 'Barcode',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyAddCampioneLatteResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyAddCampioneLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddCampioneLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyDeleteCampioneLatteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.campioneId = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyDeleteCampioneLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyDeleteCampioneLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyDeleteCampioneLatteResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyDeleteCampioneLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyDeleteCampioneLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyCambiaDataCampioneLatteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.campioneId = null;
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyCambiaDataCampioneLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyCambiaDataCampioneLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyCambiaDataCampioneLatteResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyCambiaDataCampioneLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyCambiaDataCampioneLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyGeneraRiepiloghiLatteReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGeneraRiepiloghiLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGeneraRiepiloghiLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
processIdList: { nodetype: 'element',nodename: 'ProcessIdList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_dmilk_BodyGeneraRiepiloghiLatteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGeneraRiepiloghiLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyGeneraRiepiloghiLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
riepiloghiIdList: { nodetype: 'element',nodename: 'RiepiloghiIdList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_dmilk_AvvisoType() {
	this.tipoAvviso = null;
	this.testo = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_AvvisoType: {
__def__: { nodetype: 'element',nodename: 'AvvisoType',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoAvviso: { nodetype: 'element',nodename: 'TipoAvviso',namespace: 'http://www.intersail.it/coop/dmilk' },
testo: { nodetype: 'element',nodename: 'Testo',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyReportAttivitaLatteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.data = null;
	this.labCod = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyReportAttivitaLatteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyReportAttivitaLatteReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' },
labCod: { nodetype: 'element',nodename: 'LabCod',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyReportAttivitaLatteResType() {
	it_intersail_coop_BodyType.call(this);
	this.data = null;
	this.labCod = null;
	this.dataUltimoAggiornamento = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyReportAttivitaLatteResType: {
__def__: { nodetype: 'element',nodename: 'BodyReportAttivitaLatteResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' },
labCod: { nodetype: 'element',nodename: 'LabCod',namespace: 'http://www.intersail.it/coop/dmilk' },
sezioneList: { nodetype: 'element',nodename: 'SezioneList',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_SezioneListType' },
dataUltimoAggiornamento: { nodetype: 'element',nodename: 'DataUltimoAggiornamento',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_SezioneType() {
	this.label = null;
	this.status = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_SezioneType: {
__def__: { nodetype: 'element',nodename: 'SezioneType',namespace: 'http://www.intersail.it/coop/dmilk' },
label: { nodetype: 'element',nodename: 'Label',namespace: 'http://www.intersail.it/coop/dmilk' },
status: { nodetype: 'element',nodename: 'Status',namespace: 'http://www.intersail.it/coop/dmilk' },
values: { nodetype: 'element',nodename: 'Values',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ValuesListType' }
}
});
function it_intersail_coop_dmilk_SezioneListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_SezioneListType: {
__def__: { nodetype: 'element',nodename: 'SezioneListType',namespace: 'http://www.intersail.it/coop/dmilk' },
sezione: { nodetype: 'element',nodename: 'Sezione',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_SezioneType',multiple: true }
}
});
function it_intersail_coop_dmilk_ValuesListType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ValuesListType: {
__def__: { nodetype: 'element',nodename: 'ValuesListType',namespace: 'http://www.intersail.it/coop/dmilk' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ValuesStatusType',multiple: true }
}
});
function it_intersail_coop_dmilk_ValuesStatusType() {
	this.status = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_ValuesStatusType: {
__def__: { nodetype: 'element',nodename: 'ValuesStatusType',namespace: 'http://www.intersail.it/coop/dmilk' },
status: { nodetype: 'element',nodename: 'Status',namespace: 'http://www.intersail.it/coop/dmilk' },
valore: { nodetype: 'element',nodename: 'Valore',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_KeyValueType' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniAcquirenteCaseificioReqType() {
	it_intersail_coop_BodyType.call(this);
	this.dataInizioAccettazione = null;
	this.dataFineAccettazione = null;
	this.caseificioCod = null;
	this.acquirenteCod = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniAcquirenteCaseificioReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniAcquirenteCaseificioReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
dataInizioAccettazione: { nodetype: 'element',nodename: 'DataInizioAccettazione',namespace: 'http://www.intersail.it/coop/dmilk' },
dataFineAccettazione: { nodetype: 'element',nodename: 'DataFineAccettazione',namespace: 'http://www.intersail.it/coop/dmilk' },
caseificioCod: { nodetype: 'element',nodename: 'CaseificioCod',namespace: 'http://www.intersail.it/coop/dmilk' },
acquirenteCod: { nodetype: 'element',nodename: 'AcquirenteCod',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListCampioniAcquirenteCaseificioResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListCampioniAcquirenteCaseificioResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCampioniAcquirenteCaseificioResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
campioni: { nodetype: 'element',nodename: 'Campioni',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaCampioneType' },
avviso: { nodetype: 'element',nodename: 'Avviso',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_AvvisoType' }
}
});
function it_intersail_coop_dmilk_BodyListPrintDocumentExReqType() {
	it_intersail_coop_print_BodyListPrintDocumentReqType.call(this);
	this.soloRiepilogoNonInviato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListPrintDocumentExReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListPrintDocumentExReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_print_BodyListPrintDocumentReqType",
soloRiepilogoNonInviato: { nodetype: 'element',nodename: 'SoloRiepilogoNonInviato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListPrintDocumentExResType() {
	it_intersail_coop_print_BodyListPrintDocumentResType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListPrintDocumentExResType: {
__def__: { nodetype: 'element',nodename: 'BodyListPrintDocumentExResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_print_BodyListPrintDocumentResType"
}
});
function it_intersail_coop_dmilk_RicercaRdpType() {
	this.annoRdp = null;
	this.numeroRdp = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_RicercaRdpType: {
__def__: { nodetype: 'element',nodename: 'RicercaRdpType',namespace: 'http://www.intersail.it/coop/dmilk' },
annoRdp: { nodetype: 'element',nodename: 'AnnoRdp',namespace: 'http://www.intersail.it/coop/dmilk' },
numeroRdp: { nodetype: 'element',nodename: 'NumeroRdp',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyBaseListReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyBaseListReqType: {
__def__: { nodetype: 'element',nodename: 'BodyBaseListReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
query: { nodetype: 'element',nodename: 'Query',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_QueryType' }
}
});
function it_intersail_coop_dmilk_QueryType() {
	this.order = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_QueryType: {
__def__: { nodetype: 'element',nodename: 'QueryType',namespace: 'http://www.intersail.it/coop/dmilk' },
order: { nodetype: 'element',nodename: 'Order',namespace: 'http://www.intersail.it/coop/dmilk' },
filter: { nodetype: 'element',nodename: 'Filter',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_ODLFilterType' }
}
});
function it_intersail_coop_dmilk_BodySaveCampioniBseImportEsitoCEAReqType() {
	it_intersail_coop_BodyType.call(this);
	this.esitoCEAId = null;
	this.campioneId = null;
	this.dataInvio = null;
	this.esitoCEA = null;
	this.dataRicevuta = null;
	this.email = null;
	this.eliminaAllegato = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveCampioniBseImportEsitoCEAReqType: {
__def__: { nodetype: 'element',nodename: 'BodySaveCampioniBseImportEsitoCEAReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
esitoCEAId: { nodetype: 'element',nodename: 'EsitoCEAId',namespace: 'http://www.intersail.it/coop/dmilk' },
campioneId: { nodetype: 'element',nodename: 'CampioneId',namespace: 'http://www.intersail.it/coop/dmilk' },
dataInvio: { nodetype: 'element',nodename: 'DataInvio',namespace: 'http://www.intersail.it/coop/dmilk' },
esitoCEA: { nodetype: 'element',nodename: 'EsitoCEA',namespace: 'http://www.intersail.it/coop/dmilk' },
dataRicevuta: { nodetype: 'element',nodename: 'DataRicevuta',namespace: 'http://www.intersail.it/coop/dmilk' },
email: { nodetype: 'element',nodename: 'Email',namespace: 'http://www.intersail.it/coop/dmilk' },
allegato: { nodetype: 'element',nodename: 'Allegato',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_' },
eliminaAllegato: { nodetype: 'element',nodename: 'EliminaAllegato',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodySaveCampioniBseImportEsitoCEAResType() {
	it_intersail_coop_BodyType.call(this);
	this.success = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodySaveCampioniBseImportEsitoCEAResType: {
__def__: { nodetype: 'element',nodename: 'BodySaveCampioniBseImportEsitoCEAResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
success: { nodetype: 'element',nodename: 'Success',namespace: 'http://www.intersail.it/coop/dmilk' },
error: { nodetype: 'element',nodename: 'Error',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_ErroreType' }
}
});
function it_intersail_coop_dmilk_BodyExportFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.anno = null;
	this.mese = null;
	this.tipoExport = null;
	this.laboratorio = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyExportFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyExportFileReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/dmilk' },
mese: { nodetype: 'element',nodename: 'Mese',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoExport: { nodetype: 'element',nodename: 'TipoExport',namespace: 'http://www.intersail.it/coop/dmilk' },
laboratorio: { nodetype: 'element',nodename: 'Laboratorio',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyExportFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.nomeFile = null;
	this.estensione = null;
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyExportFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyExportFileResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
nomeFile: { nodetype: 'element',nodename: 'NomeFile',namespace: 'http://www.intersail.it/coop/dmilk' },
estensione: { nodetype: 'element',nodename: 'Estensione',namespace: 'http://www.intersail.it/coop/dmilk' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyDownloadExportFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.anno = null;
	this.mese = null;
	this.tipoExport = null;
	this.fileName = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyDownloadExportFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyDownloadExportFileReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/dmilk' },
mese: { nodetype: 'element',nodename: 'Mese',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoExport: { nodetype: 'element',nodename: 'TipoExport',namespace: 'http://www.intersail.it/coop/dmilk' },
fileName: { nodetype: 'element',nodename: 'FileName',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyDownloadExportFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.nomeFile = null;
	this.estensione = null;
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyDownloadExportFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyDownloadExportFileResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
nomeFile: { nodetype: 'element',nodename: 'NomeFile',namespace: 'http://www.intersail.it/coop/dmilk' },
estensione: { nodetype: 'element',nodename: 'Estensione',namespace: 'http://www.intersail.it/coop/dmilk' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListExportFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.anno = null;
	this.mese = null;
	this.tipoExport = null;
	this.laboratorio = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListExportFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListExportFileReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/dmilk' },
mese: { nodetype: 'element',nodename: 'Mese',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoExport: { nodetype: 'element',nodename: 'TipoExport',namespace: 'http://www.intersail.it/coop/dmilk' },
laboratorio: { nodetype: 'element',nodename: 'Laboratorio',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyListExportFileResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyListExportFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyListExportFileResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
listaExportFile: { nodetype: 'element',nodename: 'ListaExportFile',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_ListaExportFileType' }
}
});
function it_intersail_coop_dmilk_BodyGeneraExportFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.anno = null;
	this.mese = null;
	this.tipoExport = null;
	this.laboratorio = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGeneraExportFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGeneraExportFileReqType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/dmilk' },
mese: { nodetype: 'element',nodename: 'Mese',namespace: 'http://www.intersail.it/coop/dmilk' },
tipoExport: { nodetype: 'element',nodename: 'TipoExport',namespace: 'http://www.intersail.it/coop/dmilk' },
laboratorio: { nodetype: 'element',nodename: 'Laboratorio',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_BodyGeneraExportFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.success = null;
	this.messaggio = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_BodyGeneraExportFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyGeneraExportFileResType',namespace: 'http://www.intersail.it/coop/dmilk' },
__inherits__: "it_intersail_coop_BodyType",
success: { nodetype: 'element',nodename: 'Success',namespace: 'http://www.intersail.it/coop/dmilk' },
messaggio: { nodetype: 'element',nodename: 'Messaggio',namespace: 'http://www.intersail.it/coop/dmilk' },
error: { nodetype: 'element',nodename: 'Error',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_ErroreType' }
}
});
function it_intersail_coop_dmilk_InfoExportFileType() {
	this.fileName = null;
	this.statoExportFile = null;
	this.dataCreazione = null;
}
CoopProxy.addRules({it_intersail_coop_dmilk_InfoExportFileType: {
__def__: { nodetype: 'element',nodename: 'InfoExportFileType',namespace: 'http://www.intersail.it/coop/dmilk' },
fileName: { nodetype: 'element',nodename: 'FileName',namespace: 'http://www.intersail.it/coop/dmilk' },
statoExportFile: { nodetype: 'element',nodename: 'StatoExportFile',namespace: 'http://www.intersail.it/coop/dmilk' },
dataCreazione: { nodetype: 'element',nodename: 'DataCreazione',namespace: 'http://www.intersail.it/coop/dmilk' }
}
});
function it_intersail_coop_dmilk_ListaExportFileType() {
}
CoopProxy.addRules({it_intersail_coop_dmilk_ListaExportFileType: {
__def__: { nodetype: 'element',nodename: 'ListaExportFileType',namespace: 'http://www.intersail.it/coop/dmilk' },
infoExportFile: { nodetype: 'element',nodename: 'InfoExportFile',namespace: 'http://www.intersail.it/coop/dmilk',type: 'it_intersail_coop_dmilk_InfoExportFileType',multiple: true }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/dmilk')

CoopProxy.addNamespace('http://www.intersail.it/coop')

CoopProxy.addNamespace('http://www.intersail.it/coop/zapflow')

CoopProxy.addNamespace('http://www.intersail.it/coop/zapdoc')

CoopProxy.addNamespace('http://www.intersail.it/coop/sign')
