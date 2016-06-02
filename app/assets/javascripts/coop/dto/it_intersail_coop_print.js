function it_intersail_coop_print_PrintDocumentInfoType() {
	it_intersail_coop_zapdoc_DocumentInfoType.call(this);
	this.category = null;
	this.parent = null;
}
CoopProxy.addRules({it_intersail_coop_print_PrintDocumentInfoType: {
__def__: { nodetype: 'element',nodename: 'PrintDocumentInfoType',namespace: 'http://www.intersail.it/coop/print' },
__inherits__: "it_intersail_coop_zapdoc_DocumentInfoType",
category: { nodetype: 'element',nodename: 'Category',namespace: 'http://www.intersail.it/coop/print' },
parent: { nodetype: 'element',nodename: 'Parent',namespace: 'http://www.intersail.it/coop/print' }
}
});
function it_intersail_coop_print_PrintDocumentInfoListType() {
}
CoopProxy.addRules({it_intersail_coop_print_PrintDocumentInfoListType: {
__def__: { nodetype: 'element',nodename: 'PrintDocumentInfoListType',namespace: 'http://www.intersail.it/coop/print' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/print',type: 'it_intersail_coop_print_PrintDocumentInfoType',multiple: true }
}
});
function it_intersail_coop_print_BodyListPrintDocumentReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_print_BodyListPrintDocumentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListPrintDocumentReqType',namespace: 'http://www.intersail.it/coop/print' },
__inherits__: "it_intersail_coop_BodyType",
idList: { nodetype: 'element',nodename: 'IdList',namespace: 'http://www.intersail.it/coop/print',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_print_BodyListPrintDocumentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_print_BodyListPrintDocumentResType: {
__def__: { nodetype: 'element',nodename: 'BodyListPrintDocumentResType',namespace: 'http://www.intersail.it/coop/print' },
__inherits__: "it_intersail_coop_BodyType",
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/print',type: 'it_intersail_coop_print_PrintDocumentInfoListType' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/print')
