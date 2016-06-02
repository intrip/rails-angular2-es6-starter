function it_intersail_coop_AnnullamentoType() {
	this.annullaEsposizione = null;
	this.motivoAnnullamento = null;
	this.dataAnnullamento = null;
	this.userId = null;
}
CoopProxy.addRules({it_intersail_coop_AnnullamentoType: {
__def__: { nodetype: 'element',nodename: 'AnnullamentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
annullaEsposizione: { nodetype: 'element',nodename: 'AnnullaEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
motivoAnnullamento: { nodetype: 'element',nodename: 'MotivoAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataAnnullamento: { nodetype: 'element',nodename: 'DataAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
}
});
function it_intersail_coop_DocumentoType() {
	it_intersail_coop_ProcessInfoBaseType.call(this);
	this.data = null;
	this.numero = null;
	this.anno = null;
	this.settoreEmittente = null;
	this.dataInizioPubblicazione = null;
	this.dataFinePubblicazione = null;
	this.mailNotifica = null;
	this.numeroProtocollo = null;
	this.modalitaAcquisizione = null;
	this.note = null;
}
CoopProxy.addRules({it_intersail_coop_DocumentoType: {
__def__: { nodetype: 'element',nodename: 'DocumentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_ProcessInfoBaseType",
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/albopretorio' },
numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/albopretorio' },
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/albopretorio' },
enteProvenienza: { nodetype: 'element',nodename: 'EnteProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IdentifiedStringType' },
settoreEmittente: { nodetype: 'element',nodename: 'SettoreEmittente',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataInizioPubblicazione: { nodetype: 'element',nodename: 'DataInizioPubblicazione',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataFinePubblicazione: { nodetype: 'element',nodename: 'DataFinePubblicazione',namespace: 'http://www.intersail.it/coop/albopretorio' },
mailNotifica: { nodetype: 'element',nodename: 'MailNotifica',namespace: 'http://www.intersail.it/coop/albopretorio' },
numeroProtocollo: { nodetype: 'element',nodename: 'NumeroProtocollo',namespace: 'http://www.intersail.it/coop/albopretorio' },
modalitaAcquisizione: { nodetype: 'element',nodename: 'ModalitaAcquisizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
allegati: { nodetype: 'element',nodename: 'Allegati',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapdoc_DocumentInfoListType' },
note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/albopretorio' },
annullamento: { nodetype: 'element',nodename: 'Annullamento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_AnnullamentoType' },
azioni: { nodetype: 'element',nodename: 'Azioni',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_ActionListType' }
}
});
function it_intersail_coop_ListaDocumentiType() {
}
CoopProxy.addRules({it_intersail_coop_ListaDocumentiType: {
__def__: { nodetype: 'element',nodename: 'ListaDocumentiType',namespace: 'http://www.intersail.it/coop/albopretorio' },
infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DocumentoType',multiple: true }
}
});
function it_intersail_coop_BodySalvaDocumentoReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodySalvaDocumentoReqType: {
__def__: { nodetype: 'element',nodename: 'BodySalvaDocumentoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
documento: { nodetype: 'element',nodename: 'Documento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DocumentoType' }
}
});
function it_intersail_coop_BodySalvaDocumentoResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodySalvaDocumentoResType: {
__def__: { nodetype: 'element',nodename: 'BodySalvaDocumentoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DocumentoType' }
}
});
function it_intersail_coop_BodyListaDocumentiReqType() {
	it_intersail_coop_BodyType.call(this);
	this.dataInizio = null;
	this.dataFine = null;
	this.protocolloInterno = null;
	this.protocolloEsterno = null;
	this.tipoDocumento = null;
	this.numeroDocumento = null;
	this.oggettoDocumento = null;
	this.enteProvenienza = null;
	this.settoreProvenienza = null;
	this.ownerId = null;
	this.userId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListaDocumentiReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IDListType' },
dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/albopretorio' },
protocolloInterno: { nodetype: 'element',nodename: 'ProtocolloInterno',namespace: 'http://www.intersail.it/coop/albopretorio' },
protocolloEsterno: { nodetype: 'element',nodename: 'ProtocolloEsterno',namespace: 'http://www.intersail.it/coop/albopretorio' },
tipoDocumento: { nodetype: 'element',nodename: 'TipoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataDocumento: { nodetype: 'element',nodename: 'DataDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DateIntervalType' },
numeroDocumento: { nodetype: 'element',nodename: 'NumeroDocumento',namespace: 'http://www.intersail.it/coop/albopretorio' },
oggettoDocumento: { nodetype: 'element',nodename: 'OggettoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio' },
enteProvenienza: { nodetype: 'element',nodename: 'EnteProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio' },
settoreProvenienza: { nodetype: 'element',nodename: 'SettoreProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataInizioEsposizione: { nodetype: 'element',nodename: 'DataInizioEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DateIntervalType' },
dataFineEsposizione: { nodetype: 'element',nodename: 'DataFineEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DateIntervalType' },
ownerId: { nodetype: 'element',nodename: 'OwnerId',namespace: 'http://www.intersail.it/coop/albopretorio' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
}
});
function it_intersail_coop_BodyListaDocumentiResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaDocumentiResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
listaDocumenti: { nodetype: 'element',nodename: 'ListaDocumenti',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_ListaDocumentiType' }
}
});
function it_intersail_coop_BodyListaEntiProvenienzaReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaEntiProvenienzaReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaEntiProvenienzaReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_BodyListaEntiProvenienzaResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaEntiProvenienzaResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaEntiProvenienzaResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
enti: { nodetype: 'element',nodename: 'Enti',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IdentifiedStringListType' }
}
});
function it_intersail_coop_BodyListaSettoriReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaSettoriReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaSettoriReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_BodyListaSettoriResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaSettoriResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaSettoriResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
settori: { nodetype: 'element',nodename: 'Settori',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IdentifiedStringListType' }
}
});
function it_intersail_coop_BodyAnnullaDocumentoReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentoId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyAnnullaDocumentoReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAnnullaDocumentoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
documentoId: { nodetype: 'element',nodename: 'DocumentoId',namespace: 'http://www.intersail.it/coop/albopretorio' },
annullamento: { nodetype: 'element',nodename: 'Annullamento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_AnnullamentoType' }
}
});
function it_intersail_coop_BodyAnnullaDocumentoResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAnnullaDocumentoResType: {
__def__: { nodetype: 'element',nodename: 'BodyAnnullaDocumentoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DocumentoType' }
}
});
function it_intersail_coop_BodyListaDocumentiDaStampareReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaDocumentiDaStampareReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiDaStampareReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
idList: { nodetype: 'element',nodename: 'IdList',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_BodyListaDocumentiDaStampareResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListaDocumentiDaStampareResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiDaStampareResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
listaDocumentiDaStampare: { nodetype: 'element',nodename: 'ListaDocumentiDaStampare',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_PrintDocumentInfoListType' }
}
});
function it_intersail_coop_BodyCaricaAllegatoReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyCaricaAllegatoReqType: {
__def__: { nodetype: 'element',nodename: 'BodyCaricaAllegatoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/albopretorio' },
allegato: { nodetype: 'element',nodename: 'Allegato',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_DocumentInfoType' }
}
});
function it_intersail_coop_BodyCaricaAllegatoResType() {
	it_intersail_coop_BodyType.call(this);
	this.success = null;
}
CoopProxy.addRules({it_intersail_coop_BodyCaricaAllegatoResType: {
__def__: { nodetype: 'element',nodename: 'BodyCaricaAllegatoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
success: { nodetype: 'element',nodename: 'Success',namespace: 'http://www.intersail.it/coop/albopretorio' },
error: { nodetype: 'element',nodename: 'Error',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_ErroreType' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/albopretorio')
function it_intersail_coop_MessaggioType() {
	this.id = null;
	this.timeStamp = null;
}
CoopProxy.addRules({it_intersail_coop_MessaggioType: {
__def__: { nodetype: 'element',nodename: 'MessaggioType',namespace: 'http://www.intersail.it/coop' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop' },
mittente: { nodetype: 'element',nodename: 'Mittente',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_SoggettoType' },
destinatario: { nodetype: 'element',nodename: 'Destinatario',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_SoggettoType' },
timeStamp: { nodetype: 'element',nodename: 'TimeStamp',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_RispostaType() {
	it_intersail_coop_MessaggioType.call(this);
	this.idRichiesta = null;
	this.comando = null;
}
CoopProxy.addRules({it_intersail_coop_RispostaType: {
__def__: { nodetype: 'element',nodename: 'Risposta',namespace: 'http://www.intersail.it/coop' },
__inherits__: "it_intersail_coop_MessaggioType",
idRichiesta: { nodetype: 'element',nodename: 'IdRichiesta',namespace: 'http://www.intersail.it/coop' },
comando: { nodetype: 'element',nodename: 'Comando',namespace: 'http://www.intersail.it/coop' },
errori: { nodetype: 'element',nodename: 'Errori',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ErroriType' },
body: { nodetype: 'element',nodename: 'Body',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_BodyType' }
}
});
function it_intersail_coop_RichiestaType() {
	it_intersail_coop_MessaggioType.call(this);
	this.comando = null;
}
CoopProxy.addRules({it_intersail_coop_RichiestaType: {
__def__: { nodetype: 'element',nodename: 'Richiesta',namespace: 'http://www.intersail.it/coop' },
__inherits__: "it_intersail_coop_MessaggioType",
comando: { nodetype: 'element',nodename: 'Comando',namespace: 'http://www.intersail.it/coop' },
body: { nodetype: 'element',nodename: 'Body',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_BodyType' }
}
});
function it_intersail_coop_SoggettoType() {
	this.tipo = null;
	this.identificativo = null;
	this.address = null;
}
// Added manually
it_intersail_coop_SoggettoType.create = function(tipo, identificativo, address) {
	var s = new it_intersail_coop_SoggettoType();
	s.tipo = tipo;
	s.identificativo = identificativo;
	s.address = address;
	return s;
};
CoopProxy.addRules({it_intersail_coop_SoggettoType: {
__def__: { nodetype: 'element',nodename: 'SoggettoType',namespace: 'http://www.intersail.it/coop' },
tipo: { nodetype: 'element',nodename: 'Tipo',namespace: 'http://www.intersail.it/coop' },
identificativo: { nodetype: 'element',nodename: 'Identificativo',namespace: 'http://www.intersail.it/coop' },
address: { nodetype: 'element',nodename: 'Address',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_BodyType() {
}
CoopProxy.addRules({it_intersail_coop_BodyType: {
__def__: { nodetype: 'element',nodename: 'BodyType',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_ErroriType() {
}
CoopProxy.addRules({it_intersail_coop_ErroriType: {
__def__: { nodetype: 'element',nodename: 'ErroriType',namespace: 'http://www.intersail.it/coop' },
errore: { nodetype: 'element',nodename: 'Errore',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ErroreType',multiple: true }
}
});
function it_intersail_coop_ErroreType() {
	this.codice = null;
	this.messaggio = null;
	this.source = null;
}
CoopProxy.addRules({it_intersail_coop_ErroreType: {
__def__: { nodetype: 'element',nodename: 'ErroreType',namespace: 'http://www.intersail.it/coop' },
codice: { nodetype: 'element',nodename: 'Codice',namespace: 'http://www.intersail.it/coop' },
messaggio: { nodetype: 'element',nodename: 'Messaggio',namespace: 'http://www.intersail.it/coop' },
source: { nodetype: 'element',nodename: 'Source',namespace: 'http://www.intersail.it/coop' },
erroreInterno: { nodetype: 'element',nodename: 'ErroreInterno',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ErroreType' }
}
});
function it_intersail_coop_ODLFilterType() {
	this.field = null;
	this.op = null;
	this.clausola = null;
}
CoopProxy.addRules({it_intersail_coop_ODLFilterType: {
__def__: { nodetype: 'element',nodename: 'ODLFilter',namespace: 'http://www.intersail.it/coop' },
field: { nodetype: 'element',nodename: 'Field',namespace: 'http://www.intersail.it/coop' },
op: { nodetype: 'element',nodename: 'Op',namespace: 'http://www.intersail.it/coop' },
clausola: { nodetype: 'element',nodename: 'Clausola',namespace: 'http://www.intersail.it/coop' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ODLValueType' },
conditions: { nodetype: 'element',nodename: 'Conditions',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ODLConditionsType' }
}
});
function it_intersail_coop_ODLConditionsType() {
}
CoopProxy.addRules({it_intersail_coop_ODLConditionsType: {
__def__: { nodetype: 'element',nodename: 'ODLConditionsType',namespace: 'http://www.intersail.it/coop' },
oDLFilter: { nodetype: 'element',nodename: 'ODLFilter',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ODLFilterType',multiple: true }
}
});
function it_intersail_coop_ODLValueType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_ODLValueType: {
__def__: { nodetype: 'element',nodename: 'ODLValueType',namespace: 'http://www.intersail.it/coop' },
__inherits__: ""
}
});
function it_intersail_coop_IdentifiedStringType() {
	this.id = null;
	this.value = null;
}
CoopProxy.addRules({it_intersail_coop_IdentifiedStringType: {
__def__: { nodetype: 'element',nodename: 'IdentifiedStringType',namespace: 'http://www.intersail.it/coop' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_IdentifiedStringListType() {
}
CoopProxy.addRules({it_intersail_coop_IdentifiedStringListType: {
__def__: { nodetype: 'element',nodename: 'IdentifiedStringListType',namespace: 'http://www.intersail.it/coop' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_IdentifiedStringType',multiple: true }
}
});
function it_intersail_coop_PaginazioneInfoType() {
	this.numRecords = null;
	this.startingRecord = null;
	this.totRecords = null;
}
CoopProxy.addRules({it_intersail_coop_PaginazioneInfoType: {
__def__: { nodetype: 'element',nodename: 'PaginazioneInfoType',namespace: 'http://www.intersail.it/coop' },
numRecords: { nodetype: 'element',nodename: 'NumRecords',namespace: 'http://www.intersail.it/coop' },
startingRecord: { nodetype: 'element',nodename: 'StartingRecord',namespace: 'http://www.intersail.it/coop' },
totRecords: { nodetype: 'element',nodename: 'TotRecords',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_ParametriRicercaType() {
	this.maxNumResult = null;
	this.startFromRecord = null;
}
CoopProxy.addRules({it_intersail_coop_ParametriRicercaType: {
__def__: { nodetype: 'element',nodename: 'ParametriRicercaType',namespace: 'http://www.intersail.it/coop' },
maxNumResult: { nodetype: 'element',nodename: 'MaxNumResult',namespace: 'http://www.intersail.it/coop' },
startFromRecord: { nodetype: 'element',nodename: 'StartFromRecord',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_RicercaType() {
}
CoopProxy.addRules({it_intersail_coop_RicercaType: {
__def__: { nodetype: 'element',nodename: 'Ricerca',namespace: 'http://www.intersail.it/coop' },
parametri: { nodetype: 'element',nodename: 'Parametri',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_ParametriRicercaType' }
}
});
function it_intersail_coop_RisultatoRicercaType() {
}
CoopProxy.addRules({it_intersail_coop_RisultatoRicercaType: {
__def__: { nodetype: 'element',nodename: 'RisultatoRicerca',namespace: 'http://www.intersail.it/coop' },
paginazione: { nodetype: 'element',nodename: 'Paginazione',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_PaginazioneInfoType' }
}
});
function it_intersail_coop_KeyValueType() {
	this.key = null;
	this.value = null;
	this.type = null;
}
CoopProxy.addRules({it_intersail_coop_KeyValueType: {
__def__: { nodetype: 'element',nodename: 'KeyValueType',namespace: 'http://www.intersail.it/coop' },
key: { nodetype: 'element',nodename: 'Key',namespace: 'http://www.intersail.it/coop' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop' }
}
});
function it_intersail_coop_KeyValueListType() {
}
CoopProxy.addRules({it_intersail_coop_KeyValueListType: {
__def__: { nodetype: 'element',nodename: 'KeyValueListType',namespace: 'http://www.intersail.it/coop' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop',type: 'it_intersail_coop_KeyValueType',multiple: true }
}
});
function it_intersail_coop_DecorationType() {
	it_intersail_coop_KeyValueListType.call(this);
}
CoopProxy.addRules({it_intersail_coop_DecorationType: {
__def__: { nodetype: 'element',nodename: 'DecorationType',namespace: 'http://www.intersail.it/coop' },
__inherits__: "it_intersail_coop_KeyValueListType"
}
});
function it_intersail_coop_IDListType() {
	this.element = null;
}
CoopProxy.addRules({it_intersail_coop_IDListType: {
__def__: { nodetype: 'element',nodename: 'IDListType',namespace: 'http://www.intersail.it/coop' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop',multiple: true }
}
});
function it_intersail_coop_IDType() {
	this.value = null;
}
CoopProxy.addRules({it_intersail_coop_IDType: {
__def__: { nodetype: 'element',nodename: 'IDType',namespace: 'http://www.intersail.it/coop' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop')
function it_intersail_coop_ActionManagerType() {
	this.id = null;
	this.name = null;
	this.cardinality = null;
}
CoopProxy.addRules({it_intersail_coop_ActionManagerType: {
__def__: { nodetype: 'element',nodename: 'ActionManagerType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
parameters: { nodetype: 'element',nodename: 'Parameters',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' },
cardinality: { nodetype: 'element',nodename: 'Cardinality',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_ActionType() {
	this.id = null;
	this.nome = null;
	this.descrizione = null;
	this.userChangeRequired = null;
	this.requireComment = null;
}
CoopProxy.addRules({it_intersail_coop_ActionType: {
__def__: { nodetype: 'element',nodename: 'ActionType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
nome: { nodetype: 'element',nodename: 'Nome',namespace: 'http://www.intersail.it/coop/zapflow' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/coop/zapflow' },
manager: { nodetype: 'element',nodename: 'Manager',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ActionManagerType' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' },
userChangeRequired: { nodetype: 'element',nodename: 'UserChangeRequired',namespace: 'http://www.intersail.it/coop/zapflow' },
requireComment: { nodetype: 'element',nodename: 'RequireComment',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_ActionListType() {
}
CoopProxy.addRules({it_intersail_coop_ActionListType: {
__def__: { nodetype: 'element',nodename: 'ActionListType',namespace: 'http://www.intersail.it/coop/zapflow' },
action: { nodetype: 'element',nodename: 'Action',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ActionType',multiple: true }
}
});
function it_intersail_coop_CommentType() {
	this.id = null;
	this.processId = null;
	this.userId = null;
	this.date = null;
	this.title = null;
	this.text = null;
}
CoopProxy.addRules({it_intersail_coop_CommentType: {
__def__: { nodetype: 'element',nodename: 'CommentType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
date: { nodetype: 'element',nodename: 'Date',namespace: 'http://www.intersail.it/coop/zapflow' },
title: { nodetype: 'element',nodename: 'Title',namespace: 'http://www.intersail.it/coop/zapflow' },
text: { nodetype: 'element',nodename: 'Text',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_CommentListType() {
}
CoopProxy.addRules({it_intersail_coop_CommentListType: {
__def__: { nodetype: 'element',nodename: 'CommentListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_CommentType',multiple: true }
}
});
function it_intersail_coop_DateIntervalType() {
	this.inizio = null;
	this.fine = null;
}
CoopProxy.addRules({it_intersail_coop_DateIntervalType: {
__def__: { nodetype: 'element',nodename: 'DateIntervalType',namespace: 'http://www.intersail.it/coop/zapflow' },
inizio: { nodetype: 'element',nodename: 'Inizio',namespace: 'http://www.intersail.it/coop/zapflow' },
fine: { nodetype: 'element',nodename: 'Fine',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_ProcessInfoBaseType() {
	this.id = null;
	this.nome = null;
	this.descrizione = null;
	this.stato = null;
	this.activityName = null;
	this.activityDescription = null;
	this.activityManager = null;
	this.activityStatus = null;
	this.activityDefinitionId = null;
	this.ownerId = null;
	this.userId = null;
	this.processDefinitionId = null;
}
CoopProxy.addRules({it_intersail_coop_ProcessInfoBaseType: {
__def__: { nodetype: 'element',nodename: 'ProcessInfoBaseType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
nome: { nodetype: 'element',nodename: 'Nome',namespace: 'http://www.intersail.it/coop/zapflow' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/coop/zapflow' },
stato: { nodetype: 'element',nodename: 'Stato',namespace: 'http://www.intersail.it/coop/zapflow' },
activityName: { nodetype: 'element',nodename: 'ActivityName',namespace: 'http://www.intersail.it/coop/zapflow' },
activityDescription: { nodetype: 'element',nodename: 'ActivityDescription',namespace: 'http://www.intersail.it/coop/zapflow' },
activityManager: { nodetype: 'element',nodename: 'ActivityManager',namespace: 'http://www.intersail.it/coop/zapflow' },
activityStatus: { nodetype: 'element',nodename: 'ActivityStatus',namespace: 'http://www.intersail.it/coop/zapflow' },
activityDefinitionId: { nodetype: 'element',nodename: 'ActivityDefinitionId',namespace: 'http://www.intersail.it/coop/zapflow' },
ownerId: { nodetype: 'element',nodename: 'OwnerId',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
processDefinitionId: { nodetype: 'element',nodename: 'ProcessDefinitionId',namespace: 'http://www.intersail.it/coop/zapflow' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' }
}
});
function it_intersail_coop_UnitRoleResourceType() {
	this.id = null;
}
CoopProxy.addRules({it_intersail_coop_UnitRoleResourceType: {
__def__: { nodetype: 'element',nodename: 'UnitRoleResourceType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
unit: { nodetype: 'element',nodename: 'Unit',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_UnitType' },
role: { nodetype: 'element',nodename: 'Role',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_RoleType' },
resource: { nodetype: 'element',nodename: 'Resource',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ResourceType' }
}
});
function it_intersail_coop_UnitRoleResourceListType() {
}
CoopProxy.addRules({it_intersail_coop_UnitRoleResourceListType: {
__def__: { nodetype: 'element',nodename: 'UnitRoleResourceListType',namespace: 'http://www.intersail.it/coop/zapflow' },
unitRoleResource: { nodetype: 'element',nodename: 'UnitRoleResource',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_UnitRoleResourceType',multiple: true }
}
});
function it_intersail_coop_UnitType() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.parentId = null;
}
CoopProxy.addRules({it_intersail_coop_UnitType: {
__def__: { nodetype: 'element',nodename: 'UnitType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/coop/zapflow' },
parentId: { nodetype: 'element',nodename: 'ParentId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_RoleType() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.parentId = null;
}
CoopProxy.addRules({it_intersail_coop_RoleType: {
__def__: { nodetype: 'element',nodename: 'RoleType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/coop/zapflow' },
parentId: { nodetype: 'element',nodename: 'ParentId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_ResourceType() {
	this.id = null;
	this.name = null;
	this.surname = null;
	this.telephone = null;
	this.fax = null;
	this.email = null;
}
CoopProxy.addRules({it_intersail_coop_ResourceType: {
__def__: { nodetype: 'element',nodename: 'ResourceType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
surname: { nodetype: 'element',nodename: 'Surname',namespace: 'http://www.intersail.it/coop/zapflow' },
telephone: { nodetype: 'element',nodename: 'Telephone',namespace: 'http://www.intersail.it/coop/zapflow' },
fax: { nodetype: 'element',nodename: 'Fax',namespace: 'http://www.intersail.it/coop/zapflow' },
email: { nodetype: 'element',nodename: 'Email',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_SubstitutionType() {
	this.id = null;
	this.userId = null;
	this.substituteId = null;
	this.from = null;
	this.to = null;
	this.priority = null;
	this.enabled = null;
}
CoopProxy.addRules({it_intersail_coop_SubstitutionType: {
__def__: { nodetype: 'element',nodename: 'SubstitutionType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
substituteId: { nodetype: 'element',nodename: 'SubstituteId',namespace: 'http://www.intersail.it/coop/zapflow' },
from: { nodetype: 'element',nodename: 'From',namespace: 'http://www.intersail.it/coop/zapflow' },
to: { nodetype: 'element',nodename: 'To',namespace: 'http://www.intersail.it/coop/zapflow' },
priority: { nodetype: 'element',nodename: 'Priority',namespace: 'http://www.intersail.it/coop/zapflow' },
enabled: { nodetype: 'element',nodename: 'Enabled',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_SubstitutionListType() {
}
CoopProxy.addRules({it_intersail_coop_SubstitutionListType: {
__def__: { nodetype: 'element',nodename: 'SubstitutionListType',namespace: 'http://www.intersail.it/coop/zapflow' },
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstitutionType',multiple: true }
}
});
function it_intersail_coop_ActivityType() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.manager = null;
	this.type = null;
	this.processDefinitionId = null;
}
CoopProxy.addRules({it_intersail_coop_ActivityType: {
__def__: { nodetype: 'element',nodename: 'ActivityType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/coop/zapflow' },
manager: { nodetype: 'element',nodename: 'Manager',namespace: 'http://www.intersail.it/coop/zapflow' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop/zapflow' },
processDefinitionId: { nodetype: 'element',nodename: 'ProcessDefinitionId',namespace: 'http://www.intersail.it/coop/zapflow' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' }
}
});
function it_intersail_coop_ActivityListType() {
}
CoopProxy.addRules({it_intersail_coop_ActivityListType: {
__def__: { nodetype: 'element',nodename: 'ActivityListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ActivityType',multiple: true }
}
});
function it_intersail_coop_MetaType() {
	this.id = null;
	this.processDefId = null;
	this.objectClass = null;
	this.name = null;
	this.objectId = null;
	this.value = null;
}
CoopProxy.addRules({it_intersail_coop_MetaType: {
__def__: { nodetype: 'element',nodename: 'MetaType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
processDefId: { nodetype: 'element',nodename: 'ProcessDefId',namespace: 'http://www.intersail.it/coop/zapflow' },
objectClass: { nodetype: 'element',nodename: 'ObjectClass',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
objectId: { nodetype: 'element',nodename: 'ObjectId',namespace: 'http://www.intersail.it/coop/zapflow' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_MetaListType() {
}
CoopProxy.addRules({it_intersail_coop_MetaListType: {
__def__: { nodetype: 'element',nodename: 'MetaListType',namespace: 'http://www.intersail.it/coop/zapflow' },
meta: { nodetype: 'element',nodename: 'Meta',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_MetaType',multiple: true }
}
});
function it_intersail_coop_HistoryElementType() {
	this.id = null;
	this.uRRId = null;
	this.date = null;
}
CoopProxy.addRules({it_intersail_coop_HistoryElementType: {
__def__: { nodetype: 'element',nodename: 'HistoryElementType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
activity: { nodetype: 'element',nodename: 'Activity',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IdentifiedStringType' },
uRRId: { nodetype: 'element',nodename: 'URRId',namespace: 'http://www.intersail.it/coop/zapflow' },
action: { nodetype: 'element',nodename: 'Action',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IdentifiedStringType' },
date: { nodetype: 'element',nodename: 'Date',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_HistoryElementListType() {
}
CoopProxy.addRules({it_intersail_coop_HistoryElementListType: {
__def__: { nodetype: 'element',nodename: 'HistoryElementListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_HistoryElementType',multiple: true }
}
});
function it_intersail_coop_HistoryType() {
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_HistoryType: {
__def__: { nodetype: 'element',nodename: 'HistoryType',namespace: 'http://www.intersail.it/coop/zapflow' },
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
elements: { nodetype: 'element',nodename: 'Elements',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_HistoryElementListType' }
}
});
function it_intersail_coop_BodyListActionReqType() {
	it_intersail_coop_BodyType.call(this);
	this.id = null;
	this.type = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListActionReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListActionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyListActionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListActionResType: {
__def__: { nodetype: 'element',nodename: 'BodyListActionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
actions: { nodetype: 'element',nodename: 'Actions',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ActionListType' }
}
});
function it_intersail_coop_BodyListUnitRoleResourceReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListUnitRoleResourceReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
filter: { nodetype: 'element',nodename: 'Filter',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ODLFilterType' }
}
});
function it_intersail_coop_BodyListUnitRoleResourceResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListUnitRoleResourceResType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
unitRoleResourceList: { nodetype: 'element',nodename: 'UnitRoleResourceList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_UnitRoleResourceListType' }
}
});
function it_intersail_coop_BodyListActivitiesReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListActivitiesReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListActivitiesReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
filter: { nodetype: 'element',nodename: 'Filter',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ODLFilterType' }
}
});
function it_intersail_coop_BodyListActivitiesResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListActivitiesResType: {
__def__: { nodetype: 'element',nodename: 'BodyListActivitiesResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ActivityListType' }
}
});
function it_intersail_coop_BodyListMetaReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processDefId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListMetaReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListMetaReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processDefId: { nodetype: 'element',nodename: 'ProcessDefId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyListMetaResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListMetaResType: {
__def__: { nodetype: 'element',nodename: 'BodyListMetaResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
metaList: { nodetype: 'element',nodename: 'MetaList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_MetaListType' }
}
});
function it_intersail_coop_BodyActionCompleteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
	this.comment = null;
}
CoopProxy.addRules({it_intersail_coop_BodyActionCompleteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyActionCompleteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
action: { nodetype: 'element',nodename: 'Action',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ActionType' },
outParams: { nodetype: 'element',nodename: 'OutParams',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' },
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyActionCompleteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyActionCompleteResType: {
__def__: { nodetype: 'element',nodename: 'BodyActionCompleteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
process: { nodetype: 'element',nodename: 'Process',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ProcessInfoBaseType' }
}
});
function it_intersail_coop_BodyListProcessDefReqType() {
	it_intersail_coop_BodyType.call(this);
	this.permission = null;
	this.userId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListProcessDefReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListProcessDefReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
permission: { nodetype: 'element',nodename: 'Permission',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyListProcessDefResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListProcessDefResType: {
__def__: { nodetype: 'element',nodename: 'BodyListProcessDefResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processDefinitionList: { nodetype: 'element',nodename: 'ProcessDefinitionList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IdentifiedStringListType' }
}
});
function it_intersail_coop_BodyAddCommentReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAddCommentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddCommentReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_CommentType' }
}
});
function it_intersail_coop_BodyAddCommentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAddCommentResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddCommentResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_CommentType' }
}
});
function it_intersail_coop_BodyListCommentReqType() {
	it_intersail_coop_BodyType.call(this);
	this.id = null;
	this.type = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListCommentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCommentReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyListCommentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListCommentResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCommentResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comments: { nodetype: 'element',nodename: 'Comments',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_CommentListType' }
}
});
function it_intersail_coop_BodyRemoveCommentReqType() {
	it_intersail_coop_BodyType.call(this);
	this.commentId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyRemoveCommentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveCommentReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
commentId: { nodetype: 'element',nodename: 'CommentId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyRemoveCommentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyRemoveCommentResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveCommentResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_CommentType' }
}
});
function it_intersail_coop_BodyGetHistoryReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyGetHistoryReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetHistoryReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyGetHistoryResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyGetHistoryResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetHistoryResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
history: { nodetype: 'element',nodename: 'History',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_HistoryType' }
}
});
function it_intersail_coop_BodyListUnitRoleResourceForActionReqType() {
	it_intersail_coop_BodyType.call(this);
	this.actionId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListUnitRoleResourceForActionReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceForActionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processIdList: { nodetype: 'element',nodename: 'ProcessIdList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IDListType' },
actionId: { nodetype: 'element',nodename: 'ActionId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyListUnitRoleResourceForActionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListUnitRoleResourceForActionResType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceForActionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
unitRoleResourceList: { nodetype: 'element',nodename: 'UnitRoleResourceList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_BodyAssignProcessReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
	this.unitRoleResourceId = null;
	this.commento = null;
}
CoopProxy.addRules({it_intersail_coop_BodyAssignProcessReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAssignProcessReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
unitRoleResourceId: { nodetype: 'element',nodename: 'UnitRoleResourceId',namespace: 'http://www.intersail.it/coop/zapflow' },
commento: { nodetype: 'element',nodename: 'Commento',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyAssignProcessResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAssignProcessResType: {
__def__: { nodetype: 'element',nodename: 'BodyAssignProcessResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processInfo: { nodetype: 'element',nodename: 'ProcessInfo',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ProcessInfoBaseType' }
}
});
function it_intersail_coop_BodyAbortProcessReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyAbortProcessReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAbortProcessReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyAbortProcessResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAbortProcessResType: {
__def__: { nodetype: 'element',nodename: 'BodyAbortProcessResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processInfo: { nodetype: 'element',nodename: 'ProcessInfo',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ProcessInfoBaseType' }
}
});
function it_intersail_coop_SubstituteType() {
	this.id = null;
	this.userId = null;
	this.substituteId = null;
	this.dateFrom = null;
	this.dateTo = null;
	this.enabled = null;
	this.priority = null;
	this.note = null;
}
CoopProxy.addRules({it_intersail_coop_SubstituteType: {
__def__: { nodetype: 'element',nodename: 'SubstituteType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
substituteId: { nodetype: 'element',nodename: 'SubstituteId',namespace: 'http://www.intersail.it/coop/zapflow' },
dateFrom: { nodetype: 'element',nodename: 'DateFrom',namespace: 'http://www.intersail.it/coop/zapflow' },
dateTo: { nodetype: 'element',nodename: 'DateTo',namespace: 'http://www.intersail.it/coop/zapflow' },
enabled: { nodetype: 'element',nodename: 'Enabled',namespace: 'http://www.intersail.it/coop/zapflow' },
priority: { nodetype: 'element',nodename: 'Priority',namespace: 'http://www.intersail.it/coop/zapflow' },
note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_SubstituteListType() {
}
CoopProxy.addRules({it_intersail_coop_SubstituteListType: {
__def__: { nodetype: 'element',nodename: 'SubstituteListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstituteType',multiple: true }
}
});
function it_intersail_coop_BodyAddSubstituteReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAddSubstituteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddSubstituteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitute: { nodetype: 'element',nodename: 'Substitute',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstituteType' }
}
});
function it_intersail_coop_BodyAddSubstituteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyAddSubstituteResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddSubstituteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitute: { nodetype: 'element',nodename: 'Substitute',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstituteType' }
}
});
function it_intersail_coop_BodyRemoveSubstituteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.substituteId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyRemoveSubstituteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstituteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substituteId: { nodetype: 'element',nodename: 'SubstituteId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyRemoveSubstituteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyRemoveSubstituteResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstituteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitute: { nodetype: 'element',nodename: 'Substitute',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstituteType' }
}
});
function it_intersail_coop_BodyListSubstituteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
	this.dateFrom = null;
	this.dateTo = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListSubstituteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstituteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
dateFrom: { nodetype: 'element',nodename: 'DateFrom',namespace: 'http://www.intersail.it/coop/zapflow' },
dateTo: { nodetype: 'element',nodename: 'DateTo',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyListSubstituteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListSubstituteResType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstituteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitutes: { nodetype: 'element',nodename: 'Substitutes',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstituteListType' }
}
});
function it_intersail_coop_BodyListSubstitutionsReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
	this.substituteId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyListSubstitutionsReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstitutionsReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
substituteId: { nodetype: 'element',nodename: 'SubstituteId',namespace: 'http://www.intersail.it/coop/zapflow' },
period: { nodetype: 'element',nodename: 'Period',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DateIntervalType' }
}
});
function it_intersail_coop_BodyListSubstitutionsResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyListSubstitutionsResType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstitutionsResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitutions: { nodetype: 'element',nodename: 'Substitutions',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstitutionListType' }
}
});
function it_intersail_coop_BodySetSubstitutionReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodySetSubstitutionReqType: {
__def__: { nodetype: 'element',nodename: 'BodySetSubstitutionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstitutionType' }
}
});
function it_intersail_coop_BodySetSubstitutionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodySetSubstitutionResType: {
__def__: { nodetype: 'element',nodename: 'BodySetSubstitutionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstitutionType' }
}
});
function it_intersail_coop_BodyRemoveSubstitutionReqType() {
	it_intersail_coop_BodyType.call(this);
	this.substitutionId = null;
}
CoopProxy.addRules({it_intersail_coop_BodyRemoveSubstitutionReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstitutionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitutionId: { nodetype: 'element',nodename: 'SubstitutionId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_BodyRemoveSubstitutionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_BodyRemoveSubstitutionResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstitutionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_SubstitutionType' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/zapflow')

CoopProxy.addNamespace('http://www.intersail.it/coop/zapdoc')

CoopProxy.addNamespace('http://www.intersail.it/coop/sign')

CoopProxy.addNamespace('http://www.intersail.it/coop/print')
