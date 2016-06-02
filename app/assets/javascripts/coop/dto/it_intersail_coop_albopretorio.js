function it_intersail_coop_albopretorio_AnnullamentoType() {
	this.annullaEsposizione = null;
	this.motivoAnnullamento = null;
	this.dataAnnullamento = null;
	this.userId = null;
}
CoopProxy.addRules({it_intersail_coop_albopretorio_AnnullamentoType: {
__def__: { nodetype: 'element',nodename: 'AnnullamentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
annullaEsposizione: { nodetype: 'element',nodename: 'AnnullaEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
motivoAnnullamento: { nodetype: 'element',nodename: 'MotivoAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataAnnullamento: { nodetype: 'element',nodename: 'DataAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
}
});
function it_intersail_coop_albopretorio_DocumentoType() {
	it_intersail_coop_albopretorio_ProcessInfoBaseType.call(this);
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
CoopProxy.addRules({it_intersail_coop_albopretorio_DocumentoType: {
__def__: { nodetype: 'element',nodename: 'DocumentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_albopretorio_ProcessInfoBaseType",
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/albopretorio' },
numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/albopretorio' },
anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/albopretorio' },
enteProvenienza: { nodetype: 'element',nodename: 'EnteProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_IdentifiedStringType' },
settoreEmittente: { nodetype: 'element',nodename: 'SettoreEmittente',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataInizioPubblicazione: { nodetype: 'element',nodename: 'DataInizioPubblicazione',namespace: 'http://www.intersail.it/coop/albopretorio' },
dataFinePubblicazione: { nodetype: 'element',nodename: 'DataFinePubblicazione',namespace: 'http://www.intersail.it/coop/albopretorio' },
mailNotifica: { nodetype: 'element',nodename: 'MailNotifica',namespace: 'http://www.intersail.it/coop/albopretorio' },
numeroProtocollo: { nodetype: 'element',nodename: 'NumeroProtocollo',namespace: 'http://www.intersail.it/coop/albopretorio' },
modalitaAcquisizione: { nodetype: 'element',nodename: 'ModalitaAcquisizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
allegati: { nodetype: 'element',nodename: 'Allegati',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentInfoListType' },
note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/albopretorio' },
annullamento: { nodetype: 'element',nodename: 'Annullamento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_AnnullamentoType' },
azioni: { nodetype: 'element',nodename: 'Azioni',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_ActionListType' }
}
});
function it_intersail_coop_albopretorio_ListaDocumentiType() {
}
CoopProxy.addRules({it_intersail_coop_albopretorio_ListaDocumentiType: {
__def__: { nodetype: 'element',nodename: 'ListaDocumentiType',namespace: 'http://www.intersail.it/coop/albopretorio' },
infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType',multiple: true }
}
});
function it_intersail_coop_albopretorio_BodySalvaDocumentoReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodySalvaDocumentoReqType: {
__def__: { nodetype: 'element',nodename: 'BodySalvaDocumentoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
documento: { nodetype: 'element',nodename: 'Documento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType' }
}
});
function it_intersail_coop_albopretorio_BodySalvaDocumentoResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodySalvaDocumentoResType: {
__def__: { nodetype: 'element',nodename: 'BodySalvaDocumentoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType' }
}
});
function it_intersail_coop_albopretorio_BodyListaDocumentiReqType() {
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
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiReqType: {
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
function it_intersail_coop_albopretorio_BodyListaDocumentiResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
listaDocumenti: { nodetype: 'element',nodename: 'ListaDocumenti',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_ListaDocumentiType' }
}
});
function it_intersail_coop_albopretorio_BodyListaEntiProvenienzaReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaEntiProvenienzaReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaEntiProvenienzaReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_albopretorio_BodyListaEntiProvenienzaResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaEntiProvenienzaResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaEntiProvenienzaResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
enti: { nodetype: 'element',nodename: 'Enti',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_IdentifiedStringListType' }
}
});
function it_intersail_coop_albopretorio_BodyListaSettoriReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaSettoriReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaSettoriReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_coop_albopretorio_BodyListaSettoriResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaSettoriResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaSettoriResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
settori: { nodetype: 'element',nodename: 'Settori',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_IdentifiedStringListType' }
}
});
function it_intersail_coop_albopretorio_BodyAnnullaDocumentoReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentoId = null;
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyAnnullaDocumentoReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAnnullaDocumentoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
documentoId: { nodetype: 'element',nodename: 'DocumentoId',namespace: 'http://www.intersail.it/coop/albopretorio' },
annullamento: { nodetype: 'element',nodename: 'Annullamento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_AnnullamentoType' }
}
});
function it_intersail_coop_albopretorio_BodyAnnullaDocumentoResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyAnnullaDocumentoResType: {
__def__: { nodetype: 'element',nodename: 'BodyAnnullaDocumentoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType' }
}
});
function it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiDaStampareReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
idList: { nodetype: 'element',nodename: 'IdList',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareResType: {
__def__: { nodetype: 'element',nodename: 'BodyListaDocumentiDaStampareResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
listaDocumentiDaStampare: { nodetype: 'element',nodename: 'ListaDocumentiDaStampare',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_PrintDocumentInfoListType' }
}
});
function it_intersail_coop_albopretorio_BodyCaricaAllegatoReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyCaricaAllegatoReqType: {
__def__: { nodetype: 'element',nodename: 'BodyCaricaAllegatoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/albopretorio' },
allegato: { nodetype: 'element',nodename: 'Allegato',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentInfoType' }
}
});
function it_intersail_coop_albopretorio_BodyCaricaAllegatoResType() {
	it_intersail_coop_BodyType.call(this);
	this.success = null;
}
CoopProxy.addRules({it_intersail_coop_albopretorio_BodyCaricaAllegatoResType: {
__def__: { nodetype: 'element',nodename: 'BodyCaricaAllegatoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
__inherits__: "it_intersail_coop_BodyType",
success: { nodetype: 'element',nodename: 'Success',namespace: 'http://www.intersail.it/coop/albopretorio' },
error: { nodetype: 'element',nodename: 'Error',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_ErroreType' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/albopretorio')

CoopProxy.addNamespace('http://www.intersail.it/coop')

CoopProxy.addNamespace('http://www.intersail.it/coop/zapflow')

CoopProxy.addNamespace('http://www.intersail.it/coop/zapdoc')

CoopProxy.addNamespace('http://www.intersail.it/coop/sign')

CoopProxy.addNamespace('http://www.intersail.it/coop/print')
// function it_intersail_coop_albopretorio_AnnullamentoType() {
// 	this.annullaEsposizione = null;
// 	this.motivoAnnullamento = null;
// 	this.dataAnnullamento = null;
// 	this.userId = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_AnnullamentoType: {
// __def__: { nodetype: 'element',nodename: 'AnnullamentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// annullaEsposizione: { nodetype: 'element',nodename: 'AnnullaEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
// motivoAnnullamento: { nodetype: 'element',nodename: 'MotivoAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataAnnullamento: { nodetype: 'element',nodename: 'DataAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
// }
// });
// function it_intersail_coop_albopretorio_AnnullamentoType() {
// 	this.annullaEsposizione = null;
// 	this.motivoAnnullamento = null;
// 	this.dataAnnullamento = null;
// 	this.userId = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_AnnullamentoType: {
// __def__: { nodetype: 'element',nodename: 'AnnullamentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// annullaEsposizione: { nodetype: 'element',nodename: 'AnnullaEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
// motivoAnnullamento: { nodetype: 'element',nodename: 'MotivoAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataAnnullamento: { nodetype: 'element',nodename: 'DataAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
// }
// });
// function it_intersail_coop_albopretorio_AnnullamentoType() {
// 	this.annullaEsposizione = null;
// 	this.motivoAnnullamento = null;
// 	this.dataAnnullamento = null;
// 	this.userId = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_AnnullamentoType: {
// __def__: { nodetype: 'element',nodename: 'AnnullamentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// annullaEsposizione: { nodetype: 'element',nodename: 'AnnullaEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
// motivoAnnullamento: { nodetype: 'element',nodename: 'MotivoAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataAnnullamento: { nodetype: 'element',nodename: 'DataAnnullamento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
// }
// });
// function it_intersail_coop_albopretorio_DocumentoType() {
// 	it_intersail_coop_zapflow_ProcessInfoBaseType.call(this);
// 	this.data = null;
// 	this.numero = null;
// 	this.anno = null;
// 	this.settoreEmittente = null;
// 	this.dataInizioPubblicazione = null;
// 	this.dataFinePubblicazione = null;
// 	this.mailNotifica = null;
// 	this.numeroProtocollo = null;
// 	this.modalitaAcquisizione = null;
// 	this.note = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_DocumentoType: {
// __def__: { nodetype: 'element',nodename: 'DocumentoType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_zapflow_ProcessInfoBaseType",
// data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/albopretorio' },
// numero: { nodetype: 'element',nodename: 'Numero',namespace: 'http://www.intersail.it/coop/albopretorio' },
// anno: { nodetype: 'element',nodename: 'Anno',namespace: 'http://www.intersail.it/coop/albopretorio' },
// enteProvenienza: { nodetype: 'element',nodename: 'EnteProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IdentifiedStringType' },
// settoreEmittente: { nodetype: 'element',nodename: 'SettoreEmittente',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataInizioPubblicazione: { nodetype: 'element',nodename: 'DataInizioPubblicazione',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataFinePubblicazione: { nodetype: 'element',nodename: 'DataFinePubblicazione',namespace: 'http://www.intersail.it/coop/albopretorio' },
// mailNotifica: { nodetype: 'element',nodename: 'MailNotifica',namespace: 'http://www.intersail.it/coop/albopretorio' },
// numeroProtocollo: { nodetype: 'element',nodename: 'NumeroProtocollo',namespace: 'http://www.intersail.it/coop/albopretorio' },
// modalitaAcquisizione: { nodetype: 'element',nodename: 'ModalitaAcquisizione',namespace: 'http://www.intersail.it/coop/albopretorio' },
// allegati: { nodetype: 'element',nodename: 'Allegati',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapdoc_DocumentInfoListType' },
// note: { nodetype: 'element',nodename: 'Note',namespace: 'http://www.intersail.it/coop/albopretorio' },
// annullamento: { nodetype: 'element',nodename: 'Annullamento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_AnnullamentoType' },
// azioni: { nodetype: 'element',nodename: 'Azioni',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapflow_ActionListType' }
// }
// });
// function it_intersail_coop_albopretorio_ListaDocumentiType() {
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_ListaDocumentiType: {
// __def__: { nodetype: 'element',nodename: 'ListaDocumentiType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType',multiple: true }
// }
// });
// function it_intersail_coop_albopretorio_BodySalvaDocumentoReqType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodySalvaDocumentoReqType: {
// __def__: { nodetype: 'element',nodename: 'BodySalvaDocumentoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// documento: { nodetype: 'element',nodename: 'Documento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType' }
// }
// });
// function it_intersail_coop_albopretorio_BodySalvaDocumentoResType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodySalvaDocumentoResType: {
// __def__: { nodetype: 'element',nodename: 'BodySalvaDocumentoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyListaDocumentiReqType() {
// 	it_intersail_coop_BodyType.call(this);
// 	this.dataInizio = null;
// 	this.dataFine = null;
// 	this.protocolloInterno = null;
// 	this.protocolloEsterno = null;
// 	this.tipoDocumento = null;
// 	this.numeroDocumento = null;
// 	this.oggettoDocumento = null;
// 	this.enteProvenienza = null;
// 	this.settoreProvenienza = null;
// 	this.ownerId = null;
// 	this.userId = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiReqType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaDocumentiReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IDListType' },
// dataInizio: { nodetype: 'element',nodename: 'DataInizio',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataFine: { nodetype: 'element',nodename: 'DataFine',namespace: 'http://www.intersail.it/coop/albopretorio' },
// protocolloInterno: { nodetype: 'element',nodename: 'ProtocolloInterno',namespace: 'http://www.intersail.it/coop/albopretorio' },
// protocolloEsterno: { nodetype: 'element',nodename: 'ProtocolloEsterno',namespace: 'http://www.intersail.it/coop/albopretorio' },
// tipoDocumento: { nodetype: 'element',nodename: 'TipoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataDocumento: { nodetype: 'element',nodename: 'DataDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapflow_DateIntervalType' },
// numeroDocumento: { nodetype: 'element',nodename: 'NumeroDocumento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// oggettoDocumento: { nodetype: 'element',nodename: 'OggettoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio' },
// enteProvenienza: { nodetype: 'element',nodename: 'EnteProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio' },
// settoreProvenienza: { nodetype: 'element',nodename: 'SettoreProvenienza',namespace: 'http://www.intersail.it/coop/albopretorio' },
// dataInizioEsposizione: { nodetype: 'element',nodename: 'DataInizioEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapflow_DateIntervalType' },
// dataFineEsposizione: { nodetype: 'element',nodename: 'DataFineEsposizione',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapflow_DateIntervalType' },
// ownerId: { nodetype: 'element',nodename: 'OwnerId',namespace: 'http://www.intersail.it/coop/albopretorio' },
// userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/albopretorio' }
// }
// });
// function it_intersail_coop_albopretorio_BodyListaDocumentiResType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiResType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaDocumentiResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// listaDocumenti: { nodetype: 'element',nodename: 'ListaDocumenti',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_ListaDocumentiType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyListaEntiProvenienzaReqType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaEntiProvenienzaReqType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaEntiProvenienzaReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType"
// }
// });
// function it_intersail_coop_albopretorio_BodyListaEntiProvenienzaResType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaEntiProvenienzaResType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaEntiProvenienzaResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// enti: { nodetype: 'element',nodename: 'Enti',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IdentifiedStringListType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyListaSettoriReqType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaSettoriReqType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaSettoriReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType"
// }
// });
// function it_intersail_coop_albopretorio_BodyListaSettoriResType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaSettoriResType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaSettoriResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// settori: { nodetype: 'element',nodename: 'Settori',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IdentifiedStringListType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyAnnullaDocumentoReqType() {
// 	it_intersail_coop_BodyType.call(this);
// 	this.documentoId = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyAnnullaDocumentoReqType: {
// __def__: { nodetype: 'element',nodename: 'BodyAnnullaDocumentoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// documentoId: { nodetype: 'element',nodename: 'DocumentoId',namespace: 'http://www.intersail.it/coop/albopretorio' },
// annullamento: { nodetype: 'element',nodename: 'Annullamento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_AnnullamentoType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyAnnullaDocumentoResType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyAnnullaDocumentoResType: {
// __def__: { nodetype: 'element',nodename: 'BodyAnnullaDocumentoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// infoDocumento: { nodetype: 'element',nodename: 'InfoDocumento',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_albopretorio_DocumentoType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareReqType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareReqType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaDocumentiDaStampareReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// idList: { nodetype: 'element',nodename: 'IdList',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_IDListType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareResType() {
// 	it_intersail_coop_BodyType.call(this);
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyListaDocumentiDaStampareResType: {
// __def__: { nodetype: 'element',nodename: 'BodyListaDocumentiDaStampareResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// listaDocumentiDaStampare: { nodetype: 'element',nodename: 'ListaDocumentiDaStampare',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_print_PrintDocumentInfoListType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyCaricaAllegatoReqType() {
// 	it_intersail_coop_BodyType.call(this);
// 	this.processId = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyCaricaAllegatoReqType: {
// __def__: { nodetype: 'element',nodename: 'BodyCaricaAllegatoReqType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/albopretorio' },
// allegato: { nodetype: 'element',nodename: 'Allegato',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_zapdoc_DocumentInfoType' }
// }
// });
// function it_intersail_coop_albopretorio_BodyCaricaAllegatoResType() {
// 	it_intersail_coop_BodyType.call(this);
// 	this.success = null;
// }
// CoopProxy.addRules({it_intersail_coop_albopretorio_BodyCaricaAllegatoResType: {
// __def__: { nodetype: 'element',nodename: 'BodyCaricaAllegatoResType',namespace: 'http://www.intersail.it/coop/albopretorio' },
// __inherits__: "it_intersail_coop_BodyType",
// success: { nodetype: 'element',nodename: 'Success',namespace: 'http://www.intersail.it/coop/albopretorio' },
// error: { nodetype: 'element',nodename: 'Error',namespace: 'http://www.intersail.it/coop/albopretorio',type: 'it_intersail_coop_ErroreType' }
// }
// });

// CoopProxy.addNamespace('http://www.intersail.it/coop/albopretorio')

// CoopProxy.addNamespace('http://www.intersail.it/coop')
