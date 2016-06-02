function it_intersail_coop_sign_ResultBeanListType() {
}
CoopProxy.addRules({it_intersail_coop_sign_ResultBeanListType: {
__def__: { nodetype: 'element',nodename: 'ResultBeanListType',namespace: 'http://www.intersail.it/coop/sign' },
resultBean: { nodetype: 'element',nodename: 'ResultBean',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_ResultBeanType',multiple: true }
}
});
function it_intersail_coop_sign_SignatureResultListType() {
}
CoopProxy.addRules({it_intersail_coop_sign_SignatureResultListType: {
__def__: { nodetype: 'element',nodename: 'SignatureResultListType',namespace: 'http://www.intersail.it/coop/sign' },
signatureResult: { nodetype: 'element',nodename: 'SignatureResult',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SignatureResultType',multiple: true }
}
});
function it_intersail_coop_sign_EnvelopeResultListType() {
}
CoopProxy.addRules({it_intersail_coop_sign_EnvelopeResultListType: {
__def__: { nodetype: 'element',nodename: 'EnvelopeResultListType',namespace: 'http://www.intersail.it/coop/sign' },
envelopeResult: { nodetype: 'element',nodename: 'EnvelopeResult',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_EnvelopeResultType',multiple: true }
}
});
function it_intersail_coop_sign_CertificateInfoType() {
	this.friendlyName = null;
	this.subject = null;
	this.issuer = null;
	this.notBefore = null;
	this.notAfter = null;
	this.serialNumber = null;
	this.thumbprint = null;
	this.rawData = null;
}
CoopProxy.addRules({it_intersail_coop_sign_CertificateInfoType: {
__def__: { nodetype: 'element',nodename: 'CertificateInfoType',namespace: 'http://www.intersail.it/coop/sign' },
friendlyName: { nodetype: 'element',nodename: 'FriendlyName',namespace: 'http://www.intersail.it/coop/sign' },
subject: { nodetype: 'element',nodename: 'Subject',namespace: 'http://www.intersail.it/coop/sign' },
issuer: { nodetype: 'element',nodename: 'Issuer',namespace: 'http://www.intersail.it/coop/sign' },
notBefore: { nodetype: 'element',nodename: 'NotBefore',namespace: 'http://www.intersail.it/coop/sign' },
notAfter: { nodetype: 'element',nodename: 'NotAfter',namespace: 'http://www.intersail.it/coop/sign' },
serialNumber: { nodetype: 'element',nodename: 'SerialNumber',namespace: 'http://www.intersail.it/coop/sign' },
thumbprint: { nodetype: 'element',nodename: 'Thumbprint',namespace: 'http://www.intersail.it/coop/sign' },
rawData: { nodetype: 'element',nodename: 'RawData',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_ResultBeanType() {
	this.status = null;
	this.details = null;
	this.summary = null;
}
CoopProxy.addRules({it_intersail_coop_sign_ResultBeanType: {
__def__: { nodetype: 'element',nodename: 'ResultBeanType',namespace: 'http://www.intersail.it/coop/sign' },
status: { nodetype: 'element',nodename: 'Status',namespace: 'http://www.intersail.it/coop/sign' },
details: { nodetype: 'element',nodename: 'Details',namespace: 'http://www.intersail.it/coop/sign' },
summary: { nodetype: 'element',nodename: 'Summary',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_SignatureResultType() {
	this.status = null;
}
CoopProxy.addRules({it_intersail_coop_sign_SignatureResultType: {
__def__: { nodetype: 'element',nodename: 'SignatureResultType',namespace: 'http://www.intersail.it/coop/sign' },
status: { nodetype: 'element',nodename: 'Status',namespace: 'http://www.intersail.it/coop/sign' },
certificateInfo: { nodetype: 'element',nodename: 'CertificateInfo',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_CertificateInfoType' },
results: { nodetype: 'element',nodename: 'Results',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_ResultBeanListType' },
cSignatures: { nodetype: 'element',nodename: 'CSignatures',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SignatureResultListType' }
}
});
function it_intersail_coop_sign_EnvelopeResultType() {
	this.envelopeName = null;
}
CoopProxy.addRules({it_intersail_coop_sign_EnvelopeResultType: {
__def__: { nodetype: 'element',nodename: 'EnvelopeResultType',namespace: 'http://www.intersail.it/coop/sign' },
envelopeName: { nodetype: 'element',nodename: 'EnvelopeName',namespace: 'http://www.intersail.it/coop/sign' },
signatures: { nodetype: 'element',nodename: 'Signatures',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SignatureResultListType' }
}
});
function it_intersail_coop_sign_FileResultType() {
	this.fileName = null;
	this.viewUrl = null;
	this.downloadUrl = null;
	this.status = null;
}
CoopProxy.addRules({it_intersail_coop_sign_FileResultType: {
__def__: { nodetype: 'element',nodename: 'FileResultType',namespace: 'http://www.intersail.it/coop/sign' },
fileName: { nodetype: 'element',nodename: 'FileName',namespace: 'http://www.intersail.it/coop/sign' },
viewUrl: { nodetype: 'element',nodename: 'ViewUrl',namespace: 'http://www.intersail.it/coop/sign' },
downloadUrl: { nodetype: 'element',nodename: 'DownloadUrl',namespace: 'http://www.intersail.it/coop/sign' },
status: { nodetype: 'element',nodename: 'Status',namespace: 'http://www.intersail.it/coop/sign' },
envelopes: { nodetype: 'element',nodename: 'Envelopes',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_EnvelopeResultListType' }
}
});
function it_intersail_coop_sign_ReadersType() {
	this.reader = null;
	this.cardPresent = null;
}
CoopProxy.addRules({it_intersail_coop_sign_ReadersType: {
__def__: { nodetype: 'element',nodename: 'ReadersType',namespace: 'http://www.intersail.it/coop/sign' },
reader: { nodetype: 'element',nodename: 'Reader',namespace: 'http://www.intersail.it/coop/sign',multiple: true },
cardPresent: { nodetype: 'element',nodename: 'CardPresent',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_ReaderType() {
	this.name = null;
}
CoopProxy.addRules({it_intersail_coop_sign_ReaderType: {
__def__: { nodetype: 'element',nodename: 'ReaderType',namespace: 'http://www.intersail.it/coop/sign' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyCreateSignedFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.identifier = null;
	this.signature = null;
	this.hashAlgorithm = null;
	this.certificate = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodyCreateSignedFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyCreateSignedFileReqType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
identifier: { nodetype: 'element',nodename: 'Identifier',namespace: 'http://www.intersail.it/coop/sign' },
signature: { nodetype: 'element',nodename: 'Signature',namespace: 'http://www.intersail.it/coop/sign' },
hashAlgorithm: { nodetype: 'element',nodename: 'HashAlgorithm',namespace: 'http://www.intersail.it/coop/sign' },
certificate: { nodetype: 'element',nodename: 'Certificate',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyCreateSignedFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
	this.errorMessage = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodyCreateSignedFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyCreateSignedFileResType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/sign' },
errorMessage: { nodetype: 'element',nodename: 'ErrorMessage',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodySignDataReqType() {
	it_intersail_coop_BodyType.call(this);
	this.smartCardReader = null;
	this.pinCode = null;
	this.keyStoreAlias = null;
	this.data = null;
	this.hashAlgorithm = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodySignDataReqType: {
__def__: { nodetype: 'element',nodename: 'BodySignDataReqType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
smartCardReader: { nodetype: 'element',nodename: 'SmartCardReader',namespace: 'http://www.intersail.it/coop/sign' },
pinCode: { nodetype: 'element',nodename: 'PinCode',namespace: 'http://www.intersail.it/coop/sign' },
keyStoreAlias: { nodetype: 'element',nodename: 'KeyStoreAlias',namespace: 'http://www.intersail.it/coop/sign' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/sign' },
hashAlgorithm: { nodetype: 'element',nodename: 'HashAlgorithm',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodySignDataResType() {
	it_intersail_coop_BodyType.call(this);
	this.signature = null;
	this.certificate = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodySignDataResType: {
__def__: { nodetype: 'element',nodename: 'BodySignDataResType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
signature: { nodetype: 'element',nodename: 'Signature',namespace: 'http://www.intersail.it/coop/sign' },
certificate: { nodetype: 'element',nodename: 'Certificate',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyEnumReadersReqType() {
	it_intersail_coop_BodyType.call(this);
	this.withCard = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodyEnumReadersReqType: {
__def__: { nodetype: 'element',nodename: 'BodyEnumReadersReqType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
withCard: { nodetype: 'element',nodename: 'WithCard',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyEnumReadersResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_sign_BodyEnumReadersResType: {
__def__: { nodetype: 'element',nodename: 'BodyEnumReadersResType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
readers: { nodetype: 'element',nodename: 'Readers',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_ReadersType' }
}
});
function it_intersail_coop_sign_BodyGetFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.identifier = null;
	this.method = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodyGetFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetFileReqType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
identifier: { nodetype: 'element',nodename: 'Identifier',namespace: 'http://www.intersail.it/coop/sign' },
method: { nodetype: 'element',nodename: 'Method',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyGetFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.identifier = null;
	this.method = null;
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodyGetFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetFileResType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
identifier: { nodetype: 'element',nodename: 'Identifier',namespace: 'http://www.intersail.it/coop/sign' },
method: { nodetype: 'element',nodename: 'Method',namespace: 'http://www.intersail.it/coop/sign' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyVerifySignedFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.identifier = null;
}
CoopProxy.addRules({it_intersail_coop_sign_BodyVerifySignedFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyVerifySignedFileReqType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
identifier: { nodetype: 'element',nodename: 'Identifier',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_BodyVerifySignedFileResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_sign_BodyVerifySignedFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyVerifySignedFileResType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
fileResult: { nodetype: 'element',nodename: 'FileResult',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_FileResultType' }
}
});
function it_intersail_coop_sign_BodySignSISSReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_sign_BodySignSISSReqType: {
__def__: { nodetype: 'element',nodename: 'Body',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
documentList: { nodetype: 'element',nodename: 'DocumentList',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SISSDocumentListType' }
}
});
function it_intersail_coop_sign_BodySignSISSResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_sign_BodySignSISSResType: {
__def__: { nodetype: 'element',nodename: 'BodySignSISSResType',namespace: 'http://www.intersail.it/coop/sign' },
__inherits__: "it_intersail_coop_BodyType",
signedDocumentList: { nodetype: 'element',nodename: 'SignedDocumentList',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SISSSignedDocumentListType' }
}
});
function it_intersail_coop_sign_SISSDocumentType() {
	this.documentType = null;
	this.signatureType = null;
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_sign_SISSDocumentType: {
__def__: { nodetype: 'element',nodename: 'SISSDocumentType',namespace: 'http://www.intersail.it/coop/sign' },
documentType: { nodetype: 'element',nodename: 'DocumentType',namespace: 'http://www.intersail.it/coop/sign' },
signatureType: { nodetype: 'element',nodename: 'SignatureType',namespace: 'http://www.intersail.it/coop/sign' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_SISSDocumentListType() {
}
CoopProxy.addRules({it_intersail_coop_sign_SISSDocumentListType: {
__def__: { nodetype: 'element',nodename: 'SISSDocumentListType',namespace: 'http://www.intersail.it/coop/sign' },
document: { nodetype: 'element',nodename: 'Document',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SISSDocumentType',multiple: true }
}
});
function it_intersail_coop_sign_SISSSignedDocumentType() {
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_sign_SISSSignedDocumentType: {
__def__: { nodetype: 'element',nodename: 'SISSSignedDocumentType',namespace: 'http://www.intersail.it/coop/sign' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/sign' }
}
});
function it_intersail_coop_sign_SISSSignedDocumentListType() {
}
CoopProxy.addRules({it_intersail_coop_sign_SISSSignedDocumentListType: {
__def__: { nodetype: 'element',nodename: 'SISSSignedDocumentListType',namespace: 'http://www.intersail.it/coop/sign' },
signedDocument: { nodetype: 'element',nodename: 'SignedDocument',namespace: 'http://www.intersail.it/coop/sign',type: 'it_intersail_coop_sign_SISSSignedDocumentType',multiple: true }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/sign')

CoopProxy.addNamespace('http://www.intersail.it/coop')
