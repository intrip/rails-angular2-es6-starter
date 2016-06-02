function it_intersail_auth_UserType() {
	this.id = null;
	this.cognome = null;
	this.nome = null;
	this.username = null;
	this.password = null;
	this.descrizione = null;
	this.avatar = null;
	this.signature = null;
	this.passwordExpireDate = null;
	this.enabled = null;
}
CoopProxy.addRules({it_intersail_auth_UserType: {
__def__: { nodetype: 'element',nodename: 'UserType',namespace: 'http://www.intersail.it/auth' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/auth' },
cognome: { nodetype: 'element',nodename: 'Cognome',namespace: 'http://www.intersail.it/auth' },
nome: { nodetype: 'element',nodename: 'Nome',namespace: 'http://www.intersail.it/auth' },
username: { nodetype: 'element',nodename: 'Username',namespace: 'http://www.intersail.it/auth' },
password: { nodetype: 'element',nodename: 'Password',namespace: 'http://www.intersail.it/auth' },
descrizione: { nodetype: 'element',nodename: 'Descrizione',namespace: 'http://www.intersail.it/auth' },
avatar: { nodetype: 'element',nodename: 'Avatar',namespace: 'http://www.intersail.it/auth' },
signature: { nodetype: 'element',nodename: 'Signature',namespace: 'http://www.intersail.it/auth' },
passwordExpireDate: { nodetype: 'element',nodename: 'PasswordExpireDate',namespace: 'http://www.intersail.it/auth' },
enabled: { nodetype: 'element',nodename: 'Enabled',namespace: 'http://www.intersail.it/auth' },
roles: { nodetype: 'element',nodename: 'Roles',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_RolesType' },
groups: { nodetype: 'element',nodename: 'Groups',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_GroupsType' }
}
});
function it_intersail_auth_ApplicationType() {
	this.id = null;
	this.name = null;
	this.description = null;
}
CoopProxy.addRules({it_intersail_auth_ApplicationType: {
__def__: { nodetype: 'element',nodename: 'ApplicationType',namespace: 'http://www.intersail.it/auth' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/auth' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/auth' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/auth' },
actions: { nodetype: 'element',nodename: 'Actions',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_ActionType',multiple: true }
}
});
function it_intersail_auth_ActionType() {
	this.id = null;
	this.applicationId = null;
	this.name = null;
	this.description = null;
}
CoopProxy.addRules({it_intersail_auth_ActionType: {
__def__: { nodetype: 'element',nodename: 'ActionType',namespace: 'http://www.intersail.it/auth' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/auth' },
applicationId: { nodetype: 'element',nodename: 'ApplicationId',namespace: 'http://www.intersail.it/auth' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/auth' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_RoleType() {
	this.id = null;
	this.name = null;
	this.description = null;
}
CoopProxy.addRules({it_intersail_auth_RoleType: {
__def__: { nodetype: 'element',nodename: 'RoleType',namespace: 'http://www.intersail.it/auth' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/auth' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/auth' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/auth' },
actions: { nodetype: 'element',nodename: 'Actions',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_ActionType',multiple: true }
}
});
function it_intersail_auth_GroupType() {
	this.id = null;
	this.name = null;
	this.description = null;
}
CoopProxy.addRules({it_intersail_auth_GroupType: {
__def__: { nodetype: 'element',nodename: 'GroupType',namespace: 'http://www.intersail.it/auth' },
id: { nodetype: 'element',nodename: 'Id',namespace: 'http://www.intersail.it/auth' },
name: { nodetype: 'element',nodename: 'Name',namespace: 'http://www.intersail.it/auth' },
description: { nodetype: 'element',nodename: 'Description',namespace: 'http://www.intersail.it/auth' },
roles: { nodetype: 'element',nodename: 'Roles',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_RolesType' }
}
});
function it_intersail_auth_BodyLoginReqType() {
	it_intersail_coop_BodyType.call(this);
	this.username = null;
	this.password = null;
	this.applicationName = null;
}
CoopProxy.addRules({it_intersail_auth_BodyLoginReqType: {
__def__: { nodetype: 'element',nodename: 'BodyLoginReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
username: { nodetype: 'element',nodename: 'Username',namespace: 'http://www.intersail.it/auth' },
password: { nodetype: 'element',nodename: 'Password',namespace: 'http://www.intersail.it/auth' },
applicationName: { nodetype: 'element',nodename: 'ApplicationName',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyLoginResType() {
	it_intersail_coop_BodyType.call(this);
	this.sessionId = null;
	this.daysToPasswordExpiration = null;
}
CoopProxy.addRules({it_intersail_auth_BodyLoginResType: {
__def__: { nodetype: 'element',nodename: 'BodyLoginResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
user: { nodetype: 'element',nodename: 'User',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UserType' },
sessionId: { nodetype: 'element',nodename: 'SessionId',namespace: 'http://www.intersail.it/auth' },
daysToPasswordExpiration: { nodetype: 'element',nodename: 'DaysToPasswordExpiration',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyChangePasswordReqType() {
	it_intersail_coop_BodyType.call(this);
	this.username = null;
	this.oldPassword = null;
	this.newPassword = null;
}
CoopProxy.addRules({it_intersail_auth_BodyChangePasswordReqType: {
__def__: { nodetype: 'element',nodename: 'BodyChangePasswordReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
username: { nodetype: 'element',nodename: 'Username',namespace: 'http://www.intersail.it/auth' },
oldPassword: { nodetype: 'element',nodename: 'OldPassword',namespace: 'http://www.intersail.it/auth' },
newPassword: { nodetype: 'element',nodename: 'NewPassword',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyChangePasswordResType() {
	it_intersail_coop_BodyType.call(this);
	this.response = null;
}
CoopProxy.addRules({it_intersail_auth_BodyChangePasswordResType: {
__def__: { nodetype: 'element',nodename: 'BodyChangePasswordResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
response: { nodetype: 'element',nodename: 'Response',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyForceChangePasswordReqType() {
	it_intersail_coop_BodyType.call(this);
	this.username = null;
	this.newPassword = null;
}
CoopProxy.addRules({it_intersail_auth_BodyForceChangePasswordReqType: {
__def__: { nodetype: 'element',nodename: 'BodyForceChangePasswordReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
username: { nodetype: 'element',nodename: 'Username',namespace: 'http://www.intersail.it/auth' },
newPassword: { nodetype: 'element',nodename: 'NewPassword',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyForceChangePasswordResType() {
	it_intersail_coop_BodyType.call(this);
	this.response = null;
}
CoopProxy.addRules({it_intersail_auth_BodyForceChangePasswordResType: {
__def__: { nodetype: 'element',nodename: 'BodyForceChangePasswordResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
response: { nodetype: 'element',nodename: 'Response',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyCreateUserReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyCreateUserReqType: {
__def__: { nodetype: 'element',nodename: 'BodyCreateUserReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
user: { nodetype: 'element',nodename: 'User',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UserType' }
}
});
function it_intersail_auth_BodyCreateUserResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyCreateUserResType: {
__def__: { nodetype: 'element',nodename: 'BodyCreateUserResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
user: { nodetype: 'element',nodename: 'User',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UserType' }
}
});
function it_intersail_auth_BodyListRolesReqType() {
	it_intersail_coop_BodyType.call(this);
	this.applicationId = null;
}
CoopProxy.addRules({it_intersail_auth_BodyListRolesReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListRolesReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
applicationId: { nodetype: 'element',nodename: 'ApplicationId',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyListRolesResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyListRolesResType: {
__def__: { nodetype: 'element',nodename: 'BodyListRolesResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
roles: { nodetype: 'element',nodename: 'Roles',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_RolesType' }
}
});
function it_intersail_auth_BodyListUserReqType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyListUserReqType: {
__def__: { nodetype: 'element',nodename: 'BodyListUserReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_auth_BodyListUserResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyListUserResType: {
__def__: { nodetype: 'element',nodename: 'BodyListUserResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
users: { nodetype: 'element',nodename: 'Users',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UsersType' }
}
});
function it_intersail_auth_BodyChangeUserReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
}
CoopProxy.addRules({it_intersail_auth_BodyChangeUserReqType: {
__def__: { nodetype: 'element',nodename: 'BodyChangeUserReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/auth' },
user: { nodetype: 'element',nodename: 'User',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UserType' }
}
});
function it_intersail_auth_BodyChangeUserResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyChangeUserResType: {
__def__: { nodetype: 'element',nodename: 'BodyChangeUserResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
user: { nodetype: 'element',nodename: 'User',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UserType' }
}
});
function it_intersail_auth_BodyDeleteUserReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
}
CoopProxy.addRules({it_intersail_auth_BodyDeleteUserReqType: {
__def__: { nodetype: 'element',nodename: 'BodyDeleteUserReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyDeleteUserResType() {
	it_intersail_coop_BodyType.call(this);
}
CoopProxy.addRules({it_intersail_auth_BodyDeleteUserResType: {
__def__: { nodetype: 'element',nodename: 'BodyDeleteUserResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType"
}
});
function it_intersail_auth_BodyLogoutReqType() {
	it_intersail_coop_BodyType.call(this);
	this.userId = null;
	this.sessionId = null;
}
CoopProxy.addRules({it_intersail_auth_BodyLogoutReqType: {
__def__: { nodetype: 'element',nodename: 'BodyLogoutReqType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
userId: { nodetype: 'element',nodename: 'UserId',namespace: 'http://www.intersail.it/auth' },
sessionId: { nodetype: 'element',nodename: 'SessionId',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_BodyLogoutResType() {
	it_intersail_coop_BodyType.call(this);
	this.response = null;
}
CoopProxy.addRules({it_intersail_auth_BodyLogoutResType: {
__def__: { nodetype: 'element',nodename: 'BodyLogoutResType',namespace: 'http://www.intersail.it/auth' },
__inherits__: "it_intersail_coop_BodyType",
response: { nodetype: 'element',nodename: 'Response',namespace: 'http://www.intersail.it/auth' }
}
});
function it_intersail_auth_RolesType() {
}
CoopProxy.addRules({it_intersail_auth_RolesType: {
__def__: { nodetype: 'element',nodename: 'RolesType',namespace: 'http://www.intersail.it/auth' },
role: { nodetype: 'element',nodename: 'Role',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_RoleType',multiple: true }
}
});
function it_intersail_auth_UsersType() {
}
CoopProxy.addRules({it_intersail_auth_UsersType: {
__def__: { nodetype: 'element',nodename: 'UsersType',namespace: 'http://www.intersail.it/auth' },
user: { nodetype: 'element',nodename: 'User',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_UserType',multiple: true }
}
});
function it_intersail_auth_GroupsType() {
}
CoopProxy.addRules({it_intersail_auth_GroupsType: {
__def__: { nodetype: 'element',nodename: 'GroupsType',namespace: 'http://www.intersail.it/auth' },
group: { nodetype: 'element',nodename: 'Group',namespace: 'http://www.intersail.it/auth',type: 'it_intersail_auth_GroupType',multiple: true }
}
});

CoopProxy.addNamespace('http://www.intersail.it/auth')

CoopProxy.addNamespace('http://www.intersail.it/coop')
