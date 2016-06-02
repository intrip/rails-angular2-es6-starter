function it_intersail_coop_local_PrintAttributeType() {
	this.name = null;
}
CoopProxy.addRules({it_intersail_coop_local_PrintAttributeType: {
__def__: { nodetype: 'element',nodename: 'PrintAttributeType',namespace: 'http://www.intersail.it/coop/local' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_PrintOrientationType() {
	it_intersail_coop_local_PrintAttributeType.call(this);
	this.orientation = null;
}
CoopProxy.addRules({it_intersail_coop_local_PrintOrientationType: {
__def__: { nodetype: 'element',nodename: 'PrintOrientationType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_local_PrintAttributeType",
orientation: { nodetype: 'element',nodename: 'Orientation',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_PrintAttributeListType() {
}
CoopProxy.addRules({it_intersail_coop_local_PrintAttributeListType: {
__def__: { nodetype: 'element',nodename: 'PrintAttributeListType',namespace: 'http://www.intersail.it/coop/local' },
printAttribute: { nodetype: 'element',nodename: 'PrintAttribute',namespace: 'http://www.intersail.it/coop/local',type: 'it_intersail_coop_local_PrintAttributeType',multiple: true }
}
});
function it_intersail_coop_local_FileType() {
	this.fileName = null;
	this.content = null;
}
CoopProxy.addRules({it_intersail_coop_local_FileType: {
__def__: { nodetype: 'element',nodename: 'FileType',namespace: 'http://www.intersail.it/coop/local' },
fileName: { nodetype: 'element',nodename: 'FileName',namespace: 'http://www.intersail.it/coop/local' },
content: { nodetype: 'element',nodename: 'Content',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_FileListType() {
}
CoopProxy.addRules({it_intersail_coop_local_FileListType: {
__def__: { nodetype: 'element',nodename: 'FileListType',namespace: 'http://www.intersail.it/coop/local' },
file: { nodetype: 'element',nodename: 'File',namespace: 'http://www.intersail.it/coop/local',type: 'it_intersail_coop_local_FileType',multiple: true }
}
});
function it_intersail_coop_local_BodyBrowseForFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.title = null;
	this.filters = null;
	this.currentDirectory = null;
	this.selectMultipleFiles = null;
	this.readFileContent = null;
	this.maxFileSize = null;
	this.showPreview = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyBrowseForFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyBrowseForFileReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
title: { nodetype: 'element',nodename: 'Title',namespace: 'http://www.intersail.it/coop/local' },
filters: { nodetype: 'element',nodename: 'Filters',namespace: 'http://www.intersail.it/coop/local' },
currentDirectory: { nodetype: 'element',nodename: 'CurrentDirectory',namespace: 'http://www.intersail.it/coop/local' },
selectMultipleFiles: { nodetype: 'element',nodename: 'SelectMultipleFiles',namespace: 'http://www.intersail.it/coop/local' },
readFileContent: { nodetype: 'element',nodename: 'ReadFileContent',namespace: 'http://www.intersail.it/coop/local' },
maxFileSize: { nodetype: 'element',nodename: 'MaxFileSize',namespace: 'http://www.intersail.it/coop/local' },
showPreview: { nodetype: 'element',nodename: 'ShowPreview',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyBrowseForFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyBrowseForFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyBrowseForFileResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' },
selectedFiles: { nodetype: 'element',nodename: 'SelectedFiles',namespace: 'http://www.intersail.it/coop/local',type: 'it_intersail_coop_local_FileListType' }
}
});
function it_intersail_coop_local_BodyBrowseForDirectoryReqType() {
	it_intersail_coop_BodyType.call(this);
	this.title = null;
	this.currentDirectory = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyBrowseForDirectoryReqType: {
__def__: { nodetype: 'element',nodename: 'BodyBrowseForDirectoryReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
title: { nodetype: 'element',nodename: 'Title',namespace: 'http://www.intersail.it/coop/local' },
currentDirectory: { nodetype: 'element',nodename: 'CurrentDirectory',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyBrowseForDirectoryResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
	this.selectedDirectory = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyBrowseForDirectoryResType: {
__def__: { nodetype: 'element',nodename: 'BodyBrowseForDirectoryResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' },
selectedDirectory: { nodetype: 'element',nodename: 'SelectedDirectory',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyCopyFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.source = null;
	this.destination = null;
	this.overwrite = null;
	this.copyMode = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyCopyFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyCopyFileReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
source: { nodetype: 'element',nodename: 'Source',namespace: 'http://www.intersail.it/coop/local' },
destination: { nodetype: 'element',nodename: 'Destination',namespace: 'http://www.intersail.it/coop/local' },
overwrite: { nodetype: 'element',nodename: 'Overwrite',namespace: 'http://www.intersail.it/coop/local' },
copyMode: { nodetype: 'element',nodename: 'CopyMode',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyCopyFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
	this.message = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyCopyFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyCopyFileResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' },
message: { nodetype: 'element',nodename: 'Message',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyWriteFileReqType() {
	it_intersail_coop_BodyType.call(this);
	this.title = null;
	this.filters = null;
	this.currentDirectory = null;
	this.dialogMode = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyWriteFileReqType: {
__def__: { nodetype: 'element',nodename: 'BodyWriteFileReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
title: { nodetype: 'element',nodename: 'Title',namespace: 'http://www.intersail.it/coop/local' },
filters: { nodetype: 'element',nodename: 'Filters',namespace: 'http://www.intersail.it/coop/local' },
currentDirectory: { nodetype: 'element',nodename: 'CurrentDirectory',namespace: 'http://www.intersail.it/coop/local' },
dialogMode: { nodetype: 'element',nodename: 'DialogMode',namespace: 'http://www.intersail.it/coop/local' },
files: { nodetype: 'element',nodename: 'Files',namespace: 'http://www.intersail.it/coop/local',type: 'it_intersail_coop_local_FileListType' }
}
});
function it_intersail_coop_local_BodyWriteFileResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyWriteFileResType: {
__def__: { nodetype: 'element',nodename: 'BodyWriteFileResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyPrintRawReqType() {
	it_intersail_coop_BodyType.call(this);
	this.defaultPrinter = null;
	this.showDialog = null;
	this.data = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyPrintRawReqType: {
__def__: { nodetype: 'element',nodename: 'BodyPrintRawReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
defaultPrinter: { nodetype: 'element',nodename: 'DefaultPrinter',namespace: 'http://www.intersail.it/coop/local' },
showDialog: { nodetype: 'element',nodename: 'ShowDialog',namespace: 'http://www.intersail.it/coop/local' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyPrintRawResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyPrintRawResType: {
__def__: { nodetype: 'element',nodename: 'BodyPrintRawResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyPrintDefaultReqType() {
	it_intersail_coop_BodyType.call(this);
	this.defaultPrinter = null;
	this.showDialog = null;
	this.data = null;
	this.dataType = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyPrintDefaultReqType: {
__def__: { nodetype: 'element',nodename: 'BodyPrintDefaultReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
defaultPrinter: { nodetype: 'element',nodename: 'DefaultPrinter',namespace: 'http://www.intersail.it/coop/local' },
showDialog: { nodetype: 'element',nodename: 'ShowDialog',namespace: 'http://www.intersail.it/coop/local' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/local' },
dataType: { nodetype: 'element',nodename: 'DataType',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyPrintDefaultResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyPrintDefaultResType: {
__def__: { nodetype: 'element',nodename: 'BodyPrintDefaultResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyPrintPdfReqType() {
	it_intersail_coop_BodyType.call(this);
	this.defaultPrinter = null;
	this.showDialog = null;
	this.data = null;
	this.showProgress = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyPrintPdfReqType: {
__def__: { nodetype: 'element',nodename: 'BodyPrintPdfReqType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
defaultPrinter: { nodetype: 'element',nodename: 'DefaultPrinter',namespace: 'http://www.intersail.it/coop/local' },
showDialog: { nodetype: 'element',nodename: 'ShowDialog',namespace: 'http://www.intersail.it/coop/local' },
data: { nodetype: 'element',nodename: 'Data',namespace: 'http://www.intersail.it/coop/local' },
printAttributeList: { nodetype: 'element',nodename: 'PrintAttributeList',namespace: 'http://www.intersail.it/coop/local',type: 'it_intersail_coop_local_PrintAttributeListType' },
showProgress: { nodetype: 'element',nodename: 'ShowProgress',namespace: 'http://www.intersail.it/coop/local' }
}
});
function it_intersail_coop_local_BodyPrintPdfResType() {
	it_intersail_coop_BodyType.call(this);
	this.result = null;
}
CoopProxy.addRules({it_intersail_coop_local_BodyPrintPdfResType: {
__def__: { nodetype: 'element',nodename: 'BodyPrintPdfResType',namespace: 'http://www.intersail.it/coop/local' },
__inherits__: "it_intersail_coop_BodyType",
result: { nodetype: 'element',nodename: 'Result',namespace: 'http://www.intersail.it/coop/local' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/local')

CoopProxy.addNamespace('http://www.intersail.it/coop')
