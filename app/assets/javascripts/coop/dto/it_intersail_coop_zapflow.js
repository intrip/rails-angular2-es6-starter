function it_intersail_coop_zapflow_ActionManagerType() {
	this.id = null;
	this.name = null;
	this.cardinality = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_ActionManagerType: {
__def__: { nodetype: 'element',nodename: 'ActionManagerType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
parameters: { nodetype: 'element',nodename: 'Parameters',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' },
cardinality: { nodetype: 'element',nodename: 'Cardinality',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_ActionType() {
	this.id = null;
	this.nome = null;
	this.descrizione = null;
	this.userChangeRequired = null;
	this.requireComment = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_ActionType: {
__def__: { nodetype: 'element',nodename: 'ActionType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
nome: { nodetype: 'element',nodename: 'Nome',namespace: 'http://www.intersail.it/coop/zapflow' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/coop/zapflow' },
manager: { nodetype: 'element',nodename: 'Manager',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ActionManagerType' },
decoration: { nodetype: 'element',nodename: 'Decoration',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' },
userChangeRequired: { nodetype: 'element',nodename: 'UserChangeRequired',namespace: 'http://www.intersail.it/coop/zapflow' },
requireComment: { nodetype: 'element',nodename: 'RequireComment',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_ActionListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_ActionListType: {
__def__: { nodetype: 'element',nodename: 'ActionListType',namespace: 'http://www.intersail.it/coop/zapflow' },
action: { nodetype: 'element',nodename: 'Action',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ActionType',multiple: true }
}
});
function it_intersail_coop_zapflow_CommentType() {
	this.id = null;
	this.processId = null;
	this.userId = null;
	this.date = null;
	this.title = null;
	this.text = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_CommentType: {
__def__: { nodetype: 'element',nodename: 'CommentType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
date: { nodetype: 'element',nodename: 'Date',namespace: 'http://www.intersail.it/coop/zapflow' },
title: { nodetype: 'element',nodename: 'Title',namespace: 'http://www.intersail.it/coop/zapflow' },
text: { nodetype: 'element',nodename: 'Text',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_CommentListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_CommentListType: {
__def__: { nodetype: 'element',nodename: 'CommentListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_CommentType',multiple: true }
}
});
function it_intersail_coop_zapflow_DateIntervalType() {
	this.inizio = null;
	this.fine = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_DateIntervalType: {
__def__: { nodetype: 'element',nodename: 'DateIntervalType',namespace: 'http://www.intersail.it/coop/zapflow' },
inizio: { nodetype: 'element',nodename: 'Inizio',namespace: 'http://www.intersail.it/coop/zapflow' },
fine: { nodetype: 'element',nodename: 'Fine',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_ProcessInfoBaseType() {
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
CoopProxy.addRules({it_intersail_coop_zapflow_ProcessInfoBaseType: {
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
function it_intersail_coop_zapflow_UnitRoleResourceType() {
	this.id = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_UnitRoleResourceType: {
__def__: { nodetype: 'element',nodename: 'UnitRoleResourceType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
unit: { nodetype: 'element',nodename: 'Unit',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_UnitType' },
role: { nodetype: 'element',nodename: 'Role',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_RoleType' },
resource: { nodetype: 'element',nodename: 'Resource',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ResourceType' }
}
});
function it_intersail_coop_zapflow_UnitRoleResourceListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_UnitRoleResourceListType: {
__def__: { nodetype: 'element',nodename: 'UnitRoleResourceListType',namespace: 'http://www.intersail.it/coop/zapflow' },
unitRoleResource: { nodetype: 'element',nodename: 'UnitRoleResource',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_UnitRoleResourceType',multiple: true }
}
});
function it_intersail_coop_zapflow_UnitType() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.parentId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_UnitType: {
__def__: { nodetype: 'element',nodename: 'UnitType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/coop/zapflow' },
parentId: { nodetype: 'element',nodename: 'ParentId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_RoleType() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.parentId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_RoleType: {
__def__: { nodetype: 'element',nodename: 'RoleType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/coop/zapflow' },
parentId: { nodetype: 'element',nodename: 'ParentId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_ResourceType() {
	this.id = null;
	this.name = null;
	this.surname = null;
	this.telephone = null;
	this.fax = null;
	this.email = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_ResourceType: {
__def__: { nodetype: 'element',nodename: 'ResourceType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
surname: { nodetype: 'element',nodename: 'Surname',namespace: 'http://www.intersail.it/coop/zapflow' },
telephone: { nodetype: 'element',nodename: 'Telephone',namespace: 'http://www.intersail.it/coop/zapflow' },
fax: { nodetype: 'element',nodename: 'Fax',namespace: 'http://www.intersail.it/coop/zapflow' },
email: { nodetype: 'element',nodename: 'Email',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_SubstitutionType() {
	this.id = null;
	this.userId = null;
	this.substituteId = null;
	this.from = null;
	this.to = null;
	this.priority = null;
	this.enabled = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_SubstitutionType: {
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
function it_intersail_coop_zapflow_SubstitutionListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_SubstitutionListType: {
__def__: { nodetype: 'element',nodename: 'SubstitutionListType',namespace: 'http://www.intersail.it/coop/zapflow' },
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstitutionType',multiple: true }
}
});
function it_intersail_coop_zapflow_ActivityType() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.manager = null;
	this.type = null;
	this.processDefinitionId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_ActivityType: {
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
function it_intersail_coop_zapflow_ActivityListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_ActivityListType: {
__def__: { nodetype: 'element',nodename: 'ActivityListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ActivityType',multiple: true }
}
});
function it_intersail_coop_zapflow_MetaType() {
	this.id = null;
	this.processDefId = null;
	this.objectClass = null;
	this.name = null;
	this.objectId = null;
	this.value = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_MetaType: {
__def__: { nodetype: 'element',nodename: 'MetaType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
processDefId: { nodetype: 'element',nodename: 'ProcessDefId',namespace: 'http://www.intersail.it/coop/zapflow' },
objectClass: { nodetype: 'element',nodename: 'ObjectClass',namespace: 'http://www.intersail.it/coop/zapflow' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/coop/zapflow' },
objectId: { nodetype: 'element',nodename: 'ObjectId',namespace: 'http://www.intersail.it/coop/zapflow' },
value: { nodetype: 'element',nodename: 'Value',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_MetaListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_MetaListType: {
__def__: { nodetype: 'element',nodename: 'MetaListType',namespace: 'http://www.intersail.it/coop/zapflow' },
meta: { nodetype: 'element',nodename: 'Meta',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_MetaType',multiple: true }
}
});
function it_intersail_coop_zapflow_HistoryElementType() {
	this.id = null;
	this.uRRId = null;
	this.date = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_HistoryElementType: {
__def__: { nodetype: 'element',nodename: 'HistoryElementType',namespace: 'http://www.intersail.it/coop/zapflow' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
activity: { nodetype: 'element',nodename: 'Activity',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IdentifiedStringType' },
uRRId: { nodetype: 'element',nodename: 'URRId',namespace: 'http://www.intersail.it/coop/zapflow' },
action: { nodetype: 'element',nodename: 'Action',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IdentifiedStringType' },
date: { nodetype: 'element',nodename: 'Date',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_HistoryElementListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_HistoryElementListType: {
__def__: { nodetype: 'element',nodename: 'HistoryElementListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_HistoryElementType',multiple: true }
}
});
function it_intersail_coop_zapflow_HistoryType() {
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_HistoryType: {
__def__: { nodetype: 'element',nodename: 'HistoryType',namespace: 'http://www.intersail.it/coop/zapflow' },
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
elements: { nodetype: 'element',nodename: 'Elements',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_HistoryElementListType' }
}
});
function it_intersail_coop_zapflow_BodyListActionReqType() {
	it_intersail_coop_BodyType.call(this);
	this.id = null;
	this.type = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListActionReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListActionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyListActionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListActionResType: {
__def__: { nodetype: 'element',nodename: 'BodyListActionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
actions: { nodetype: 'element',nodename: 'Actions',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ActionListType' }
}
});
function it_intersail_coop_zapflow_BodyListUnitRoleResourceReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListUnitRoleResourceReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
filter: { nodetype: 'element',nodename: 'Filter',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ODLFilterType' }
}
});
function it_intersail_coop_zapflow_BodyListUnitRoleResourceResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListUnitRoleResourceResType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
unitRoleResourceList: { nodetype: 'element',nodename: 'UnitRoleResourceList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_UnitRoleResourceListType' }
}
});
function it_intersail_coop_zapflow_BodyListActivitiesReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListActivitiesReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListActivitiesReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
filter: { nodetype: 'element',nodename: 'Filter',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_ODLFilterType' }
}
});
function it_intersail_coop_zapflow_BodyListActivitiesResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListActivitiesResType: {
__def__: { nodetype: 'element',nodename: 'BodyListActivitiesResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
activities: { nodetype: 'element',nodename: 'Activities',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ActivityListType' }
}
});
function it_intersail_coop_zapflow_BodyListMetaReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processDefId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListMetaReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListMetaReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processDefId: { nodetype: 'element',nodename: 'ProcessDefId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyListMetaResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListMetaResType: {
__def__: { nodetype: 'element',nodename: 'BodyListMetaResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
metaList: { nodetype: 'element',nodename: 'MetaList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_MetaListType' }
}
});
function it_intersail_coop_zapflow_BodyActionCompleteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
	this.comment = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyActionCompleteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyActionCompleteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
action: { nodetype: 'element',nodename: 'Action',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ActionType' },
outParams: { nodetype: 'element',nodename: 'OutParams',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_DecorationType' },
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyActionCompleteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyActionCompleteResType: {
__def__: { nodetype: 'element',nodename: 'BodyActionCompleteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
process: { nodetype: 'element',nodename: 'Process',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ProcessInfoBaseType' }
}
});
function it_intersail_coop_zapflow_BodyListProcessDefReqType() {
	it_intersail_coop_BodyType.call(this);
	this.permission = null;
	this.userId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListProcessDefReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListProcessDefReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
permission: { nodetype: 'element',nodename: 'Permission',namespace: 'http://www.intersail.it/coop/zapflow' },
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyListProcessDefResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListProcessDefResType: {
__def__: { nodetype: 'element',nodename: 'BodyListProcessDefResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processDefinitionList: { nodetype: 'element',nodename: 'ProcessDefinitionList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IdentifiedStringListType' }
}
});
function it_intersail_coop_zapflow_BodyAddCommentReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAddCommentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddCommentReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_CommentType' }
}
});
function it_intersail_coop_zapflow_BodyAddCommentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAddCommentResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddCommentResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_CommentType' }
}
});
function it_intersail_coop_zapflow_BodyListCommentReqType() {
	it_intersail_coop_BodyType.call(this);
	this.id = null;
	this.type = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListCommentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListCommentReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/coop/zapflow' },
type: { nodetype: 'element',nodename: 'Type',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyListCommentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListCommentResType: {
__def__: { nodetype: 'element',nodename: 'BodyListCommentResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comments: { nodetype: 'element',nodename: 'Comments',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_CommentListType' }
}
});
function it_intersail_coop_zapflow_BodyRemoveCommentReqType() {
	it_intersail_coop_BodyType.call(this);
	this.commentId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyRemoveCommentReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveCommentReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
commentId: { nodetype: 'element',nodename: 'CommentId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyRemoveCommentResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyRemoveCommentResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveCommentResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
comment: { nodetype: 'element',nodename: 'Comment',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_CommentType' }
}
});
function it_intersail_coop_zapflow_BodyGetHistoryReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyGetHistoryReqType: {
__def__: { nodetype: 'element',nodename: 'BodyGetHistoryReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyGetHistoryResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyGetHistoryResType: {
__def__: { nodetype: 'element',nodename: 'BodyGetHistoryResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
history: { nodetype: 'element',nodename: 'History',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_HistoryType' }
}
});
function it_intersail_coop_zapflow_BodyListUnitRoleResourceForActionReqType() {
	it_intersail_coop_BodyType.call(this);
	this.actionId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListUnitRoleResourceForActionReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceForActionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processIdList: { nodetype: 'element',nodename: 'ProcessIdList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IDListType' },
actionId: { nodetype: 'element',nodename: 'ActionId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyListUnitRoleResourceForActionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListUnitRoleResourceForActionResType: {
__def__: { nodetype: 'element',nodename: 'BodyListUnitRoleResourceForActionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
unitRoleResourceList: { nodetype: 'element',nodename: 'UnitRoleResourceList',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_IDListType' }
}
});
function it_intersail_coop_zapflow_BodyAssignProcessReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
	this.unitRoleResourceId = null;
	this.commento = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAssignProcessReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAssignProcessReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' },
unitRoleResourceId: { nodetype: 'element',nodename: 'UnitRoleResourceId',namespace: 'http://www.intersail.it/coop/zapflow' },
commento: { nodetype: 'element',nodename: 'Commento',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyAssignProcessResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAssignProcessResType: {
__def__: { nodetype: 'element',nodename: 'BodyAssignProcessResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processInfo: { nodetype: 'element',nodename: 'ProcessInfo',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ProcessInfoBaseType' }
}
});
function it_intersail_coop_zapflow_BodyAbortProcessReqType() {
	it_intersail_coop_BodyType.call(this);
	this.processId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAbortProcessReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAbortProcessReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processId: { nodetype: 'element',nodename: 'ProcessId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyAbortProcessResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAbortProcessResType: {
__def__: { nodetype: 'element',nodename: 'BodyAbortProcessResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
processInfo: { nodetype: 'element',nodename: 'ProcessInfo',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_ProcessInfoBaseType' }
}
});
function it_intersail_coop_zapflow_SubstituteType() {
	this.id = null;
	this.userId = null;
	this.substituteId = null;
	this.dateFrom = null;
	this.dateTo = null;
	this.enabled = null;
	this.priority = null;
	this.note = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_SubstituteType: {
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
function it_intersail_coop_zapflow_SubstituteListType() {
}
CoopProxy.addRules({it_intersail_coop_zapflow_SubstituteListType: {
__def__: { nodetype: 'element',nodename: 'SubstituteListType',namespace: 'http://www.intersail.it/coop/zapflow' },
element: { nodetype: 'element',nodename: 'Element',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstituteType',multiple: true }
}
});
function it_intersail_coop_zapflow_BodyAddSubstituteReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAddSubstituteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyAddSubstituteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitute: { nodetype: 'element',nodename: 'Substitute',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstituteType' }
}
});
function it_intersail_coop_zapflow_BodyAddSubstituteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyAddSubstituteResType: {
__def__: { nodetype: 'element',nodename: 'BodyAddSubstituteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitute: { nodetype: 'element',nodename: 'Substitute',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstituteType' }
}
});
function it_intersail_coop_zapflow_BodyRemoveSubstituteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.substituteId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyRemoveSubstituteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstituteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substituteId: { nodetype: 'element',nodename: 'SubstituteId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyRemoveSubstituteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyRemoveSubstituteResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstituteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitute: { nodetype: 'element',nodename: 'Substitute',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstituteType' }
}
});
function it_intersail_coop_zapflow_BodyListSubstituteReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
	this.dateFrom = null;
	this.dateTo = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListSubstituteReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstituteReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
dateFrom: { nodetype: 'element',nodename: 'DateFrom',namespace: 'http://www.intersail.it/coop/zapflow' },
dateTo: { nodetype: 'element',nodename: 'DateTo',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyListSubstituteResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListSubstituteResType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstituteResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitutes: { nodetype: 'element',nodename: 'Substitutes',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstituteListType' }
}
});
function it_intersail_coop_zapflow_BodyListSubstitutionsReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
	this.substituteId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListSubstitutionsReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstitutionsReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/coop/zapflow' },
substituteId: { nodetype: 'element',nodename: 'SubstituteId',namespace: 'http://www.intersail.it/coop/zapflow' },
period: { nodetype: 'element',nodename: 'Period',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_DateIntervalType' }
}
});
function it_intersail_coop_zapflow_BodyListSubstitutionsResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyListSubstitutionsResType: {
__def__: { nodetype: 'element',nodename: 'BodyListSubstitutionsResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitutions: { nodetype: 'element',nodename: 'Substitutions',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstitutionListType' }
}
});
function it_intersail_coop_zapflow_BodySetSubstitutionReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodySetSubstitutionReqType: {
__def__: { nodetype: 'element',nodename: 'BodySetSubstitutionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstitutionType' }
}
});
function it_intersail_coop_zapflow_BodySetSubstitutionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodySetSubstitutionResType: {
__def__: { nodetype: 'element',nodename: 'BodySetSubstitutionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstitutionType' }
}
});
function it_intersail_coop_zapflow_BodyRemoveSubstitutionReqType() {
	it_intersail_coop_BodyType.call(this);
	this.substitutionId = null;
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyRemoveSubstitutionReqType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstitutionReqType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitutionId: { nodetype: 'element',nodename: 'SubstitutionId',namespace: 'http://www.intersail.it/coop/zapflow' }
}
});
function it_intersail_coop_zapflow_BodyRemoveSubstitutionResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_coop_zapflow_BodyRemoveSubstitutionResType: {
__def__: { nodetype: 'element',nodename: 'BodyRemoveSubstitutionResType',namespace: 'http://www.intersail.it/coop/zapflow' },
__inherits__: "it_intersail_coop_BodyType",
substitution: { nodetype: 'element',nodename: 'Substitution',namespace: 'http://www.intersail.it/coop/zapflow',type: 'it_intersail_coop_zapflow_SubstitutionType' }
}
});

CoopProxy.addNamespace('http://www.intersail.it/coop/zapflow')

CoopProxy.addNamespace('http://www.intersail.it/coop/zapdoc')

CoopProxy.addNamespace('http://www.intersail.it/coop/sign')

CoopProxy.addNamespace('http://www.intersail.it/coop/print')
