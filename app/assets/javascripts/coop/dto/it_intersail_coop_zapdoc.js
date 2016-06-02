function it_intersail_coop_zapdoc_DocumentInfoType() {
	this.identifier = null;
	this.name = null;
	this.isSigned = null;
	this.type = null;
	this.folder = null;
	this.description = null;
	this.originalName = null;
	this.mimeType = null;
	this.metadata = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_DocumentInfoType: {
__def__: { nodetype: 'element',nodename: 'DocumentInfoType',namespace: 'http://www.intersail.it/coop/zapdoc' },
identifier: { nodetype: 'element',nodename: 'Identifier',namespace: 'http://www.intersail.it/coop/zapdoc' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapdoc' },
isSigned: { nodetype: 'element',nodename: 'IsSigned',namespace: 'http://www.intersail.it/coop/zapdoc' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop/zapdoc' },
folder: { nodetype: 'element',nodename: 'Folder',namespace: 'http://www.intersail.it/coop/zapdoc' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/coop/zapdoc' },
originalName: { nodetype: 'element',nodename: 'OriginalName',namespace: 'http://www.intersail.it/coop/zapdoc' },
mimeType: { nodetype: 'element',nodename: 'MimeType',namespace: 'http://www.intersail.it/coop/zapdoc' },
metadata: { nodetype: 'element',nodename: 'Metadata',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_DocumentType() {
	it_intersail_coop_zapdoc_DocumentInfoType.call(this);
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_DocumentType: {
__def__: { nodetype: 'element',nodename: 'DocumentType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_zapdoc_DocumentInfoType",
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_DocumentInfoListType() {
}
CoopProxy.addRules({it_intersail_coop_zapdoc_DocumentInfoListType: {
__def__: { nodetype: 'element',nodename: 'DocumentInfoListType',namespace: 'http://www.intersail.it/coop/zapdoc' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapdoc',type: 'it_intersail_coop_zapdoc_DocumentInfoType',multiple: true }
}
});
function it_intersail_coop_zapdoc_BodyReadDocumentReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyReadDocumentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyReadDocumentReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyReadDocumentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyReadDocumentResType: {
__def__: { nodetype: 'element',nodename: 'BodyReadDocumentResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
document: { nodetype: 'element',nodename: 'Document',namespace: 'http://www.intersail.it/coop/zapdoc',type: 'it_intersail_coop_zapdoc_DocumentType' }
}
});
function it_intersail_coop_zapdoc_BodyWriteDocumentReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyWriteDocumentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyWriteDocumentReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
document: { nodetype: 'element',nodename: 'Document',namespace: 'http://www.intersail.it/coop/zapdoc',type: 'it_intersail_coop_zapdoc_DocumentType' }
}
});
function it_intersail_coop_zapdoc_BodyWriteDocumentResType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyWriteDocumentResType: {
__def__: { nodetype: 'element',nodename: 'BodyWriteDocumentResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyRemoveDocumentReqType() {
	it_intersail_coop_BodyType.call(this);
	this.parentId = null;
	this.documentIdentifier = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyRemoveDocumentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveDocumentReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
parentId: { nodetype: 'element',nodename: 'ParentId',namespace: 'http://www.intersail.it/coop/zapdoc' },
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyRemoveDocumentResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyRemoveDocumentResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveDocumentResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyGetDocumentHashReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
	this.hashType = null;
	this.certificate = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyGetDocumentHashReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetDocumentHashReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' },
hashType: { nodetype: 'element',nodename: 'HashType',namespace: 'http://www.intersail.it/coop/zapdoc' },
certificate: { nodetype: 'element',nodename: 'Certificate',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyGetDocumentHashResType() {
	it_intersail_coop_BodyType.call(this);
	this.hash = null;
	this.hashType = null;
	this.signerInfo = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyGetDocumentHashResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetDocumentHashResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
hash: { nodetype: 'element',nodename: 'Hash',namespace: 'http://www.intersail.it/coop/zapdoc' },
hashType: { nodetype: 'element',nodename: 'HashType',namespace: 'http://www.intersail.it/coop/zapdoc' },
signerInfo: { nodetype: 'element',nodename: 'SignerInfo',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyAddSignatureReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
	this.signature = null;
	this.certificate = null;
	this.hashType = null;
	this.signerInfo = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyAddSignatureReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddSignatureReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' },
signature: { nodetype: 'element',nodename: 'Signature',namespace: 'http://www.intersail.it/coop/zapdoc' },
certificate: { nodetype: 'element',nodename: 'Certificate',namespace: 'http://www.intersail.it/coop/zapdoc' },
hashType: { nodetype: 'element',nodename: 'HashType',namespace: 'http://www.intersail.it/coop/zapdoc' },
signerInfo: { nodetype: 'element',nodename: 'SignerInfo',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyAddSignatureResType() {
	it_intersail_coop_BodyType.call(this);
	this.newDocumentIdentifier = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyAddSignatureResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddSignatureResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
newDocumentIdentifier: { nodetype: 'element',nodename: 'NewDocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyGetDocumentSignaturesReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
	this.referenceDate = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyGetDocumentSignaturesReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetDocumentSignaturesReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' },
referenceDate: { nodetype: 'element',nodename: 'ReferenceDate',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyGetDocumentSignaturesResType() {
	it_intersail_coop_BodyType.call(this);
	this.status = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyGetDocumentSignaturesResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetDocumentSignaturesResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
status: { nodetype: 'element',nodename: 'Status',namespace: 'http://www.intersail.it/coop/zapdoc' },
envelopes: { nodetype: 'element',nodename: 'Envelopes',namespace: 'http://www.intersail.it/coop/zapdoc',type: 'it_intersail_coop_sign_EnvelopeResultListType' }
}
});
function it_intersail_coop_zapdoc_BodyAddDocumentPageReqType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
	this.pageData = null;
	this.dataFormat = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyAddDocumentPageReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddDocumentPageReqType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' },
pageData: { nodetype: 'element',nodename: 'PageData',namespace: 'http://www.intersail.it/coop/zapdoc' },
dataFormat: { nodetype: 'element',nodename: 'DataFormat',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});
function it_intersail_coop_zapdoc_BodyAddDocumentPageResType() {
	it_intersail_coop_BodyType.call(this);
	this.documentIdentifier = null;
}
CoopProxy.addRules({it_intersail_coop_zapdoc_BodyAddDocumentPageResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddDocumentPageResType',namespace: 'http://www.intersail.it/coop/zapdoc' },
__inherits__: "it_intersail_coop_BodyType",
documentIdentifier: { nodetype: 'element',nodename: 'DocumentIdentifier',namespace: 'http://www.intersail.it/coop/zapdoc' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/zapdoc')

CoopProxy.addNamespace('http://www.intersail.it/coop')

CoopProxy.addNamespace('http://www.intersail.it/coop/sign')
