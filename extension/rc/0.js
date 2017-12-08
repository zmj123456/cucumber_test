webpackJsonp([0],{

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Call with {brand}',
  smsTitle: 'SMS with {brand}'
};

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _authMessages$interna;

var _authMessages = __webpack_require__(885);

var _authMessages2 = _interopRequireDefault(_authMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Login failed due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Access denied. Please contact support.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Session expired. Please sign in.'), _authMessages$interna);


/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callErrors$noToNumbe;

var _callErrors = __webpack_require__(739);

var _callErrors2 = _interopRequireDefault(_callErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Dialing emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options\n    please contact your account administrator for an upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'area code'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'Emergency dialing is not supported.'), _callErrors$noToNumbe);


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callingSettingsMessa;

var _callingSettingsMessages = __webpack_require__(886);

var _callingSettingsMessages2 = _interopRequireDefault(_callingSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Please select in Calling section how you want to make your call. It would be nice if you let us know your location by specifying the country and area code (if available) in Region section, so you can do local dialing with the app.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Please select in Calling section how you want to make your call.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Your permissions have been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'Your phone number information has been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Settings > Calling'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number.'), _callingSettingsMessa);


/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _region$regionSetting;

var _regionSettingsMessages = __webpack_require__(888);

var _regionSettingsMessages2 = _interopRequireDefault(_regionSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_region$regionSetting = {
  region: 'Region'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'region settings'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Please enter a valid area code.'), _region$regionSetting);


/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageSenderMessage;

var _messageSenderMessages = __webpack_require__(740);

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Send Success.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Something wrong happened when send message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Phone Number Validate Error.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Please enter the text to be sent.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'You have no permission to send message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'You must select a number from your phone numbers to send'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Invalid phone number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Please enter a valid receiver number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Text is too long, 1000 Limited'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Recipient number is invalids'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Dialing emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'A valid Phone Number is required to send text message to recipients outside of your company. Please contact your Administrator to add a direct number to your account.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Sending SMS to international phone number is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'area code'), _messageSenderMessage);


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Request limit exceeded. App will resume in {ttl} seconds.'
};


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _connectivityMonitorMessages = __webpack_require__(887);

var _connectivityMonitorMessages2 = _interopRequireDefault(_connectivityMonitorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'Network connection is lost.');


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _webphoneErrors$conne;

var _webphoneErrors = __webpack_require__(889);

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Connect with web phone server failed.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Web phone registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Calling with browser is only supported on Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'A maximum of 5 web phones could be registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'You have no permission to send message.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'Cannot send call to voicemail due to internal error'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'Call cannot be muted at the moment.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'Call cannot be hold at the moment.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'Cannot flip the call. Please try again later.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'You cannot record the call at the moment. Error code: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'Sorry, your account does not have the feature to record a call. Please contact your account administrator.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'Cannot transfer the call. Please try again later.'), _webphoneErrors$conne);


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _meetingStatus$emptyT;

var _meetingStatus = __webpack_require__(741);

var _meetingStatus2 = _interopRequireDefault(_meetingStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_meetingStatus$emptyT = {}, (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.emptyTopic, 'Please enter meeting topic.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.noPassword, 'Please provide meeting password.'), (0, _defineProperty3.default)(_meetingStatus$emptyT, _meetingStatus2.default.scheduledSuccess, 'Meeting is scheduled.'), _meetingStatus$emptyT);


/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _permissionsMessages = __webpack_require__(890);

var _permissionsMessages2 = _interopRequireDefault(_permissionsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition.');


/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Sign In',
  version: 'Version'
};


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$callingOptions;

var _callingOptions = __webpack_require__(368);

var _callingOptions2 = _interopRequireDefault(_callingOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$callingOptions = {
  title: 'Calling'
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} for Desktop'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'My {brand} Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Other Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Custom Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Browser'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Make my calls with'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Ring me at my location first, then connect the called party'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'My Location'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Prompt me to dial 1 before connecting the call'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser + 'Tooltip', 'Use this option to make and receive calls using your computer’s microphone and speaker.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone + 'Tooltip', 'Use this option to make and receive calls using your {brand} for Desktop app.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip', 'Use this option to make calls using your {brand} phone.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip1', 'For the call you make, your {brand} phone will ring first then the party you called.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip', 'Use this option to make calls using your other phones such as home or cell phones that you have added in your {brand} Extension.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip1', 'For the call you make, this phone will ring first then the party you called.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip', 'Use this option to make calls using any phone of your choice by entering a valid phone number in the field below.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip1', 'For the call you make, this phone will ring first then the party you called.'), _title$callingOptions);


/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Save'
};


/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Region',
  NAOnlyMessage: 'Please set your area code. This will be used for local dialing.',
  MultiWithNAMessage: 'Please set the country and area code for your region. This will be used for local dialing and phone number formatting.',
  MultiWithoutNAMessage: 'Please select the country you locate in. This will be used for local dialing and phone number formatting.',
  country: 'Country',
  areaCode: 'Area Code',
  areaCodePlaceholder: 'Enter Area Code'
};


/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  AR: 'Argentina',
  AT: 'Austria',
  BH: 'Bahrain',
  BR: 'Brazil',
  BG: 'Bulgaria',
  CA: 'Canada',
  CL: 'Chile',
  CN: 'China',
  HR: 'Croatia',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DO: 'Dominican Republic',
  EE: 'Estonia',
  FI: 'Finland',
  FR: 'France',
  DE: 'Germany',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IE: 'Ireland',
  IL: 'Israel',
  IN: 'India',
  IT: 'Italy',
  JP: 'Japan',
  LV: 'Latvia',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MY: 'Malaysia',
  MX: 'Mexico',
  NL: 'Netherlands',
  NO: 'Norway',
  PA: 'Panama',
  PH: 'Philippines',
  PL: 'Poland',
  PT: 'Portugal',
  RO: 'Romania',
  SK: 'Slovakia',
  SI: 'Slovenia',
  ES: 'Spain',
  SE: 'Sweden',
  CH: 'Switzerland',
  TR: 'Turkey',
  GB: 'United Kingdom',
  AU: 'Australia',
  GE: 'Georgia',
  ID: 'Indonesia',
  KE: 'Kenya',
  NG: 'Nigeria',
  PK: 'Pakistan',
  ZA: 'South Africa',
  KR: 'South Korea',
  SG: 'Singapore',
  TW: 'Taiwan',
  UA: 'Ukraine',
  US: 'United States',
  VN: 'Vietnam',
  BE: 'Belgium',
  BJ: 'Benin',
  SV: 'El Salvador',
  GH: 'Ghana',
  GR: 'Greece',
  GN: 'Guinea',
  NZ: 'New Zealand',
  PE: 'Peru',
  PR: 'Puerto Rico',
  419: 'Latin America'
};


/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneTypes$business$;

var _phoneTypes = __webpack_require__(2735);

var _phoneTypes2 = _interopRequireDefault(_phoneTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Business Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Extension Number'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Home Number'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Mobile Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Unknown Phone Type'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.company, 'Company Number'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.direct, 'Direct Number'), _phoneTypes$business$);


/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneSources$account;

var _phoneSources = __webpack_require__(1022);

var _phoneSources2 = _interopRequireDefault(_phoneSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Account'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contact'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Opportunity'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'System User'), _phoneSources$account);


/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name...'
};


/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Direct',
  MainCompanyNumber: 'Main',
  CompanyNumber: 'Company',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Blocked',
  AdditionalCompanyNumber: 'Company',
  ForwardedCompanyNumber: 'Forwarded',
  from: 'From'
};


/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'From',
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name...',
  typeMessage: 'Type message...',
  send: 'Send'
};


/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details'
};


/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  typeMessage: 'Type message...',
  send: 'Send'
};


/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'New Conference',
  dialInNumber: 'Dial-in Number',
  hostAccess: 'Host Access',
  participantsAccess: 'Participants Access',
  addinalDialInNumbers: 'Additional Dial-in Numbers',
  selectNumbers: 'Select Numbers',
  enableJoinBeforeHost: 'Enable join before Host',
  conferenceCommands: 'Conference Commands',
  inviteWithGCalendar: 'Invite with Google Calendar',
  inviteWithText: 'Invite with Text',
  joinAsHost: 'Join as Host',
  inviteText: 'Please join the RingCentral conference.\n\nDial-In Numbers: {dialInNumber} \n\n{internationals} \nParticipant Access: {participantCode} \n\nNeed an international dial-in phone number? Please visit http://www.ringcentral.com/conferencing \n\nThis conference call is brought to you by RingCentral Conferencing.'
};


/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  starSharp2Title: 'Caller Count',
  starSharp2Body: 'Keep track of how many people are on the call',
  starSharp3Title: 'Leave Conference',
  starSharp3Body: 'Lets the host hang up and end the call',
  starSharp4Title: 'Menu',
  starSharp4Body: 'Listen to the list of touchtone commands',
  starSharp5Title: 'Set Listening Modes',
  starSharp5Body: 'Press 1x: Mute callers - Callers can unmute with  *, #, 6\nPress 2x: Mute callers - Listen only. No unmuting option\nPress 3x: Unmute callers - Opens the line again',
  starSharp6Title: 'Mute Host Line',
  starSharp6Body: 'Press once to MUTE\nPress again to UNMUTE',
  starSharp7Title: 'Secure the Call',
  starSharp7Body: 'Press once to BLOCK all callers\nPress again to OPEN the call',
  starSharp8Title: 'Hear sound when people Enter or Exit call',
  starSharp8Body: 'Press 1x: Turns OFF sound\nPress 2x: Enter tone is ON Exit tone is OFF\nPress 3x: Enter tone is OFF Exit tone is ON\nPress 4x: Turns ON sound',
  star9Title: 'Record your conference',
  star9Body: 'Press once to START recording\nPress again to STOP recording'
};


/***/ }),

/***/ 1281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  confirm: 'Confirm'
};


/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Account',
  contact: 'Contact',
  lead: 'Lead',
  chooseEntity: 'Please select entity type',
  create: 'Create'
};


/***/ }),

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageTypes = __webpack_require__(367);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({
  addLog: 'Log',
  editLog: 'Edit Log',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  call: 'Call',
  conversation: 'Conversation',
  groupConversation: 'Group Conversation',
  voiceMessage: 'Voice message'
}, _messageTypes2.default.voiceMail, 'Voice Mail');


/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Loading: 'Loading...',
  search: 'Search...',
  noMessages: 'No Messages',
  noSearchResults: 'No matching records found'
};


/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$messageTypes$a;

var _messageTypes = __webpack_require__(367);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$messageTypes$a = {
  title: 'Messages'
}, (0, _defineProperty3.default)(_title$messageTypes$a, _messageTypes2.default.all, 'All'), (0, _defineProperty3.default)(_title$messageTypes$a, _messageTypes2.default.voiceMail, 'Voice'), (0, _defineProperty3.default)(_title$messageTypes$a, _messageTypes2.default.text, 'Text'), (0, _defineProperty3.default)(_title$messageTypes$a, _messageTypes2.default.fax, 'Fax'), _title$messageTypes$a);


/***/ }),

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  addLog: 'Log',
  text: 'Text',
  call: 'Call',
  addContact: 'Add Contact',
  missedCall: 'Missed',
  inboundCall: 'Inbound',
  outboundCall: 'Outbound',
  from: 'From',
  to: 'To'
};


/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  currentCall: 'Current Call',
  ringCall: 'Ringing Call',
  onHoldCall: 'Call on Hold',
  otherDeviceCall: 'Ongoing calls on my other devices'
};


/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  addLog: 'Log',
  text: 'Text',
  call: 'Call',
  missedCall: 'Missed',
  inboundCall: 'Inbound',
  outboundCall: 'Outbound'
};


/***/ }),

/***/ 1367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  noRecords: 'No results found'
};


/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'History'
};


/***/ }),

/***/ 1389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Forward',
  cancel: 'Cancel',
  customNumber: 'Custom number'
};


/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  reply: 'Reply',
  onMyWay: 'On my way',
  customMessage: 'Custom Message',
  callMeBackIn: 'Call me back in',
  willCallYouBackIn: 'Will call you back in',
  min: 'min.',
  hours: 'hours',
  days: 'days'
};


/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Forward',
  reply: 'Reply',
  ignore: 'Ignore',
  toVoicemail: 'To Voicemail',
  answer: 'Answer',
  answerAndEnd: 'Answer & End',
  answerAndHold: 'Answer & Hold'
};


/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Unknown',
  anonymous: 'Anonymous',
  activeCall: 'Active Call'
};


/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  hide: 'Hide',
  end: 'End',
  keypad: 'Keypad'
};


/***/ }),

/***/ 1444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unmute: 'Unmute',
  mute: 'Mute',
  keypad: 'Keypad',
  hold: 'Hold',
  onHold: 'On Hold',
  park: 'Park',
  stopRecord: 'Stop',
  record: 'Record',
  add: 'Add',
  transfer: 'Transfer',
  flip: 'Flip'
};


/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Home: 'Home',
  Mobile: 'Mobile',
  Work: 'Work'
};


/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flipHeader: 'Flip Call to...',
  flip: 'Flip',
  complete: 'Complete Flip'
};


/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To:',
  transferTo: 'Transfer to',
  blindTransfer: 'Transfer',
  enterNameOrNumber: 'Enter Number'
};


/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Unknown',
  anonymous: 'Anonymous',
  activeCalls: 'Active Calls'
};


/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Active Call'
};


/***/ }),

/***/ 1500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'No records found'
};


/***/ }),

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Search...'
};


/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  all: 'All',
  company: 'Company',
  personal: 'Personal'
};


/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extensionLabel$direc;

var _presenceStatus = __webpack_require__(738);

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = __webpack_require__(768);

var _dndStatus2 = _interopRequireDefault(_dndStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_extensionLabel$direc = {
  extensionLabel: 'Ext.',
  directLabel: 'Direct',
  emailLabel: 'Email',
  call: 'Call',
  text: 'Text'
}, (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.available, 'Available'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy + _dndStatus2.default.takeAllCalls, 'Busy'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptDepartmentCalls, 'Busy'), (0, _defineProperty3.default)(_extensionLabel$direc, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptAnyCalls, 'Do not Disturb'), _extensionLabel$direc);


/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Contact Details'
};


/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Audio',
  dialButtonVolume: 'Dial Button Volume',
  ringtoneVolume: 'Ringtone Volume',
  callVolume: 'Call Volume',
  muteCalls: 'Mute Calls',
  outputDevice: 'Output Device',
  inputDevice: 'Input Device',
  micPermission: 'Microphone Permission'
};


/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  topic: 'Topic',
  when: 'When',
  duration: 'Duration',
  recurringMeeting: 'Recurring Meeting',
  recurringDescribe: 'Please remember to check recurrence or repeat in your calendar invitation to your attendees.',
  video: 'Video',
  videoDescribe: 'When joining a meeting',
  host: 'Host',
  participants: 'Participant',
  audioOptions: 'Audio Options',
  voIPOnly: 'VoIP Only',
  both: 'Both',
  meetingOptions: 'Meeting Options',
  requirePassword: 'Require meeting password',
  password: 'Password',
  enableJoinBeforeHost: 'Enable join before host',
  telephonyOnly: 'Telephony Only'
};


/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  google: 'Google'
};

/***/ }),

/***/ 1557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  schedule: 'Schedule',
  prompt: 'Please authorize RingCentral to access your account information.'
};


/***/ }),

/***/ 1558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invite with Google Calendar'
};

/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  inviteWithCalendar: 'Invite with Google Calendar'
};

/***/ }),

/***/ 1560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  authorize: 'Authorize',
  prompt: 'Please authorize RingCentral to access your Google account information.'
};

/***/ }),

/***/ 1561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _authorizationError$a;

var _authorizationError = __webpack_require__(891);

var _authorizationError2 = _interopRequireDefault(_authorizationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_authorizationError$a = {}, (0, _defineProperty3.default)(_authorizationError$a, _authorizationError2.default.accountLoggedOut, 'We noticed you have logged out your Google account {accountEmail}. To continue please {clickHereLink} to authorize RingCentral for Google to access your Google account.'), (0, _defineProperty3.default)(_authorizationError$a, 'clickHere', 'click here'), _authorizationError$a);

/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.'
};


/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.',
  inBound: 'Inbound',
  outBound: 'Outbound',
  missed: 'Missed Call'
};


/***/ }),

/***/ 1587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  recentActivities: 'Recent Activities',
  text: 'Text',
  fax: 'Fax',
  voicemail: 'Voicemail',
  call: 'Call',
  gmail: 'Gmail'
};

/***/ }),

/***/ 1598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.'
};

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  dialpadLabel: 'Dial Pad',
  callsLabel: 'Calls',
  historyLabel: 'History',
  messagesLabel: 'Messages',
  composeTextLabel: 'Compose Text',
  moreMenuLabel: 'More menu',
  contactsLabel: 'Contacts',
  meetingLabel: 'Schedule Meeting',
  conferenceLabel: 'Schedule Conference',
  settingsLabel: 'Settings'
};

/***/ }),

/***/ 1610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Offline Mode'
};


/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'End User License Agreement',
  serviceTerms: 'Service Terms'
};


/***/ }),

/***/ 1632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _presenceStatus$avail;

var _presenceStatus = __webpack_require__(738);

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = __webpack_require__(768);

var _dndStatus2 = _interopRequireDefault(_dndStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Available'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.takeAllCalls, 'Busy'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptDepartmentCalls, 'Busy'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptAnyCalls, 'Do not Disturb'), _presenceStatus$avail);


/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Status',
  acceptQueueCalls: 'Accept call queue calls'
};


/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'English',
  ja: 'Japanese',
  fr: 'French',
  de: 'Deutsch',
  es: 'Spanish',
  it: 'Italian',
  pt: 'Portuguese'
};


/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Region',
  calling: 'Calling',
  logout: 'Logout',
  version: 'Version',
  settings: 'Settings',
  clickToDial: 'Click to Dial',
  autoCreateLog: 'Auto-create Call Log',
  autoCreateSMSLog: 'Auto-create SMS Log',
  autoLogCalls: 'Auto log calls',
  autoLogSMS: 'Auto log SMS',
  clickToSMS: 'Click to SMS',
  clickToDialSMS: 'Click to Dial/SMS',
  audio: 'Audio',
  language: 'Language'
};


/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Authorize',
  authorized: 'Unauthorize',
  unauthorizedTitle: 'Authorized Account',
  tooltip: 'You have authorized RingCentral for Google to access your account '
};

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  incomingCall: 'Incoming Call From:',
  answer: 'Answer',
  ignore: 'Ignore'
};

/***/ }),

/***/ 2735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(12);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['business', 'extension', 'home', 'mobile', 'phone', 'unknown', 'company', 'direct']);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DaHJvbWVBZGFwdGVyL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbEFsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL2VuLVVTLmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZUNvbW1hbmRzL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTW9kYWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZUxpc3QvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZXNzYWdlc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbEl0ZW0vaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbEl0ZW0vaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb250YWluZXJzL0NhbGxIaXN0b3J5UGFnZS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZvcndhcmRGb3JtL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVwbHlXaXRoTWVzc2FnZS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0luY29taW5nQ2FsbFBhZC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb250YWluZXJzL0luY29taW5nQ2FsbFBhZ2UvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsRGlhbFBhZC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxQYWQvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SYWRpb0J0bkdyb3VwL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRmxpcFBhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVHJhbnNmZXJQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb250YWluZXJzL0NhbGxDdHJsUGFnZS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb250YWluZXJzL0NhbGxCYWRnZUNvbnRhaW5lci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RMaXN0L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29udGFjdHNWaWV3L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29udGFjdFNvdXJjZUZpbHRlci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3REZXRhaWxzL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29udGFjdERldGFpbHNWaWV3L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQXVkaW9TZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVldGluZ1BhbmVsL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFNvdXJjZUZpbHRlci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lZXRpbmdTY2hlZHVsZUJ1dHRvbi9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lZXRpbmdJbnZpdGVCdXR0b24vaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVldGluZ0F1dGhvcml6ZUJ1dHRvbi9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6YXRpb25BbGVydC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0V1bGEvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QcmVzZW5jZUl0ZW0vaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QcmVzZW5jZVNldHRpbmdTZWN0aW9uL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9jYWxlUGlja2VyL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6ZVNldHRpbmdzUGFuZWwvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL2VuLVVTLmpzIiwid2VicGFjazovLy9lbnVtcy9waG9uZVR5cGVzLmpzP2Y0M2YiXSwibmFtZXMiOlsiYzJkVGl0bGUiLCJzbXNUaXRsZSIsImludGVybmFsRXJyb3IiLCJhY2Nlc3NEZW5pZWQiLCJzZXNzaW9uRXhwaXJlZCIsIm5vVG9OdW1iZXIiLCJub0FyZWFDb2RlIiwic3BlY2lhbE51bWJlciIsImNvbm5lY3RGYWlsZWQiLCJub3RBbkV4dGVuc2lvbiIsIm5ldHdvcmtFcnJvciIsIm5vUmluZ291dEVuYWJsZSIsInNhdmVTdWNjZXNzIiwic2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lIiwiZmlyc3RMb2dpbiIsImZpcnN0TG9naW5PdGhlciIsInBlcm1pc3Npb25DaGFuZ2VkIiwicGhvbmVOdW1iZXJDaGFuZ2VkIiwid2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZCIsImVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUiLCJyZWdpb24iLCJkaWFsaW5nUGxhbnNDaGFuZ2VkIiwiYXJlYUNvZGVJbnZhbGlkIiwic2VuZFN1Y2Nlc3MiLCJzZW5kRXJyb3IiLCJudW1iZXJWYWxpZGF0ZUVycm9yIiwidGV4dEVtcHR5Iiwibm9QZXJtaXNzaW9uIiwic2VuZGVyRW1wdHkiLCJyZWNpcGllbnRzRW1wdHkiLCJ0ZXh0VG9vTG9uZyIsInJlY2lwaWVudE51bWJlckludmFsaWRzIiwic2VuZGVyTnVtYmVySW52YWxpZCIsIm5vdFNtc1RvRXh0ZW5zaW9uIiwiaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZCIsInJhdGVFeGNlZWRlZCIsImRpc2Nvbm5lY3RlZCIsImNvbm5lY3RlZCIsImJyb3dzZXJOb3RTdXBwb3J0ZWQiLCJ3ZWJwaG9uZUNvdW50T3ZlckxpbWl0Iiwibm90T3V0Ym91bmRDYWxsV2l0aG91dERMIiwiZ2V0U2lwUHJvdmlzaW9uRXJyb3IiLCJ0b1ZvaWNlTWFpbEVycm9yIiwibXV0ZUVycm9yIiwiaG9sZEVycm9yIiwiZmxpcEVycm9yIiwicmVjb3JkRXJyb3IiLCJyZWNvcmREaXNhYmxlZCIsInRyYW5zZmVyRXJyb3IiLCJlbXB0eVRvcGljIiwibm9QYXNzd29yZCIsInNjaGVkdWxlZFN1Y2Nlc3MiLCJpbnZhbGlkVGllciIsImxvZ2luQnV0dG9uIiwidmVyc2lvbiIsInRpdGxlIiwic29mdHBob25lIiwibXlwaG9uZSIsIm90aGVycGhvbmUiLCJjdXN0b21waG9uZSIsImJyb3dzZXIiLCJzYXZlIiwiTkFPbmx5TWVzc2FnZSIsIk11bHRpV2l0aE5BTWVzc2FnZSIsIk11bHRpV2l0aG91dE5BTWVzc2FnZSIsImNvdW50cnkiLCJhcmVhQ29kZSIsImFyZWFDb2RlUGxhY2Vob2xkZXIiLCJBUiIsIkFUIiwiQkgiLCJCUiIsIkJHIiwiQ0EiLCJDTCIsIkNOIiwiSFIiLCJDWSIsIkNaIiwiREsiLCJETyIsIkVFIiwiRkkiLCJGUiIsIkRFIiwiSEsiLCJIVSIsIklFIiwiSUwiLCJJTiIsIklUIiwiSlAiLCJMViIsIkxUIiwiTFUiLCJNWSIsIk1YIiwiTkwiLCJOTyIsIlBBIiwiUEgiLCJQTCIsIlBUIiwiUk8iLCJTSyIsIlNJIiwiRVMiLCJTRSIsIkNIIiwiVFIiLCJHQiIsIkFVIiwiR0UiLCJJRCIsIktFIiwiTkciLCJQSyIsIlpBIiwiS1IiLCJTRyIsIlRXIiwiVUEiLCJVUyIsIlZOIiwiQkUiLCJCSiIsIlNWIiwiR0giLCJHUiIsIkdOIiwiTloiLCJQRSIsIlBSIiwiYnVzaW5lc3MiLCJleHRlbnNpb24iLCJob21lIiwibW9iaWxlIiwicGhvbmUiLCJ1bmtub3duIiwiY29tcGFueSIsImRpcmVjdCIsImFjY291bnQiLCJjb250YWN0IiwicmNDb250YWN0IiwibGVhZCIsIm9wcG9ydHVuaXR5Iiwic3lzdGVtVXNlciIsInRvIiwiZW50ZXJOYW1lT3JOdW1iZXIiLCJEaXJlY3ROdW1iZXIiLCJNYWluQ29tcGFueU51bWJlciIsIkNvbXBhbnlOdW1iZXIiLCJDb21wYW55RmF4TnVtYmVyIiwiQmxvY2tlZCIsIkFkZGl0aW9uYWxDb21wYW55TnVtYmVyIiwiRm9yd2FyZGVkQ29tcGFueU51bWJlciIsImZyb20iLCJ0eXBlTWVzc2FnZSIsInNlbmQiLCJsb2dnaW5nIiwibG9nQ2FsbCIsImVkaXRMb2ciLCJzZWxlY3QiLCJPbkhvbGQiLCJSaW5naW5nIiwiQ2FsbENvbm5lY3RlZCIsInVua25vd25Vc2VyIiwidW5rbm93bk51bWJlciIsInVuYXZhaWxhYmxlIiwidmlld0RldGFpbHMiLCJuZXdDb25mZXJlbmNlIiwiZGlhbEluTnVtYmVyIiwiaG9zdEFjY2VzcyIsInBhcnRpY2lwYW50c0FjY2VzcyIsImFkZGluYWxEaWFsSW5OdW1iZXJzIiwic2VsZWN0TnVtYmVycyIsImVuYWJsZUpvaW5CZWZvcmVIb3N0IiwiY29uZmVyZW5jZUNvbW1hbmRzIiwiaW52aXRlV2l0aEdDYWxlbmRhciIsImludml0ZVdpdGhUZXh0Iiwiam9pbkFzSG9zdCIsImludml0ZVRleHQiLCJzdGFyU2hhcnAyVGl0bGUiLCJzdGFyU2hhcnAyQm9keSIsInN0YXJTaGFycDNUaXRsZSIsInN0YXJTaGFycDNCb2R5Iiwic3RhclNoYXJwNFRpdGxlIiwic3RhclNoYXJwNEJvZHkiLCJzdGFyU2hhcnA1VGl0bGUiLCJzdGFyU2hhcnA1Qm9keSIsInN0YXJTaGFycDZUaXRsZSIsInN0YXJTaGFycDZCb2R5Iiwic3RhclNoYXJwN1RpdGxlIiwic3RhclNoYXJwN0JvZHkiLCJzdGFyU2hhcnA4VGl0bGUiLCJzdGFyU2hhcnA4Qm9keSIsInN0YXI5VGl0bGUiLCJzdGFyOUJvZHkiLCJjYW5jZWwiLCJjb25maXJtIiwiY2hvb3NlRW50aXR5IiwiY3JlYXRlIiwiYWRkTG9nIiwiYWRkRW50aXR5IiwiY2FsbCIsImNvbnZlcnNhdGlvbiIsImdyb3VwQ29udmVyc2F0aW9uIiwidm9pY2VNZXNzYWdlIiwidm9pY2VNYWlsIiwiTG9hZGluZyIsInNlYXJjaCIsIm5vTWVzc2FnZXMiLCJub1NlYXJjaFJlc3VsdHMiLCJhbGwiLCJ0ZXh0IiwiZmF4IiwiYWRkQ29udGFjdCIsIm1pc3NlZENhbGwiLCJpbmJvdW5kQ2FsbCIsIm91dGJvdW5kQ2FsbCIsIm5vQWN0aXZlQ2FsbHMiLCJjdXJyZW50Q2FsbCIsInJpbmdDYWxsIiwib25Ib2xkQ2FsbCIsIm90aGVyRGV2aWNlQ2FsbCIsIm5vUmVjb3JkcyIsImZvcndhcmQiLCJjdXN0b21OdW1iZXIiLCJyZXBseSIsIm9uTXlXYXkiLCJjdXN0b21NZXNzYWdlIiwiY2FsbE1lQmFja0luIiwid2lsbENhbGxZb3VCYWNrSW4iLCJtaW4iLCJob3VycyIsImRheXMiLCJpZ25vcmUiLCJ0b1ZvaWNlbWFpbCIsImFuc3dlciIsImFuc3dlckFuZEVuZCIsImFuc3dlckFuZEhvbGQiLCJhbm9ueW1vdXMiLCJhY3RpdmVDYWxsIiwiaGlkZSIsImVuZCIsImtleXBhZCIsInVubXV0ZSIsIm11dGUiLCJob2xkIiwib25Ib2xkIiwicGFyayIsInN0b3BSZWNvcmQiLCJyZWNvcmQiLCJhZGQiLCJ0cmFuc2ZlciIsImZsaXAiLCJIb21lIiwiTW9iaWxlIiwiV29yayIsImZsaXBIZWFkZXIiLCJjb21wbGV0ZSIsInRyYW5zZmVyVG8iLCJibGluZFRyYW5zZmVyIiwiYWN0aXZlQ2FsbHMiLCJub0NvbnRhY3RzIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJwZXJzb25hbCIsImV4dGVuc2lvbkxhYmVsIiwiZGlyZWN0TGFiZWwiLCJlbWFpbExhYmVsIiwiYXZhaWxhYmxlIiwib2ZmbGluZSIsImJ1c3kiLCJ0YWtlQWxsQ2FsbHMiLCJkb05vdEFjY2VwdERlcGFydG1lbnRDYWxscyIsImRvTm90QWNjZXB0QW55Q2FsbHMiLCJjb250YWN0RGV0YWlscyIsImRpYWxCdXR0b25Wb2x1bWUiLCJyaW5ndG9uZVZvbHVtZSIsImNhbGxWb2x1bWUiLCJtdXRlQ2FsbHMiLCJvdXRwdXREZXZpY2UiLCJpbnB1dERldmljZSIsIm1pY1Blcm1pc3Npb24iLCJ0b3BpYyIsIndoZW4iLCJkdXJhdGlvbiIsInJlY3VycmluZ01lZXRpbmciLCJyZWN1cnJpbmdEZXNjcmliZSIsInZpZGVvIiwidmlkZW9EZXNjcmliZSIsImhvc3QiLCJwYXJ0aWNpcGFudHMiLCJhdWRpb09wdGlvbnMiLCJ2b0lQT25seSIsImJvdGgiLCJtZWV0aW5nT3B0aW9ucyIsInJlcXVpcmVQYXNzd29yZCIsInBhc3N3b3JkIiwidGVsZXBob255T25seSIsImdvb2dsZSIsInNjaGVkdWxlIiwicHJvbXB0IiwiaW52aXRlV2l0aENhbGVuZGFyIiwiYXV0aG9yaXplIiwiYWNjb3VudExvZ2dlZE91dCIsImluQm91bmQiLCJvdXRCb3VuZCIsIm1pc3NlZCIsInJlY2VudEFjdGl2aXRpZXMiLCJ2b2ljZW1haWwiLCJnbWFpbCIsImRpYWxwYWRMYWJlbCIsImNhbGxzTGFiZWwiLCJoaXN0b3J5TGFiZWwiLCJtZXNzYWdlc0xhYmVsIiwiY29tcG9zZVRleHRMYWJlbCIsIm1vcmVNZW51TGFiZWwiLCJjb250YWN0c0xhYmVsIiwibWVldGluZ0xhYmVsIiwiY29uZmVyZW5jZUxhYmVsIiwic2V0dGluZ3NMYWJlbCIsIm9mZmxpbmVNb2RlIiwiZXVsYSIsInNlcnZpY2VUZXJtcyIsInN0YXR1cyIsImFjY2VwdFF1ZXVlQ2FsbHMiLCJlbiIsImphIiwiZnIiLCJkZSIsImVzIiwiaXQiLCJwdCIsImNhbGxpbmciLCJsb2dvdXQiLCJzZXR0aW5ncyIsImNsaWNrVG9EaWFsIiwiYXV0b0NyZWF0ZUxvZyIsImF1dG9DcmVhdGVTTVNMb2ciLCJhdXRvTG9nQ2FsbHMiLCJhdXRvTG9nU01TIiwiY2xpY2tUb1NNUyIsImNsaWNrVG9EaWFsU01TIiwiYXVkaW8iLCJsYW5ndWFnZSIsInVuYXV0aG9yaXplZCIsImF1dGhvcml6ZWQiLCJ1bmF1dGhvcml6ZWRUaXRsZSIsInRvb2x0aXAiLCJpbmNvbWluZ0NhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2tCQUFlO0FBQ2JBLFlBQVUsbUJBREc7QUFFYkMsWUFBVTtBQUZHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7OztvR0FHRyx1QkFBYUMsYSxFQUFnQiw4RCx3REFDN0IsdUJBQWFDLFksRUFBZSx3Qyx3REFDNUIsdUJBQWFDLGMsRUFBaUIsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xqQzs7Ozs7O29HQUdHLHFCQUFXQyxVLEVBQWEsb0Msd0RBQ3hCLHFCQUFXQyxVLEVBQWEsK0Qsd0RBQ3hCLHFCQUFXQyxhLEVBQWdCLGdFLHdEQUMzQixxQkFBV0MsYSxFQUFnQiw0Qyx3REFDM0IscUJBQVdOLGEsRUFBZ0IsZ0Usd0RBQzNCLHFCQUFXTyxjLEVBQWlCLHNDLHdEQUM1QixxQkFBV0MsWSxFQUFlLCtELHdEQUMxQixxQkFBV0MsZSxFQUFrQiw4SyxvRUFDcEIsVyxvRUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlo7Ozs7OztvR0FJRyxrQ0FBd0JDLFcsRUFBYyw4Qix3REFDdEMsa0NBQXdCQyx3QixFQUEyQix3Ryx3REFDbkQsa0NBQXdCQyxVLEVBQWEsd08sd0RBQ3JDLGtDQUF3QkMsZSxFQUFrQixrRSx3REFDMUMsa0NBQXdCQyxpQixFQUFvQixpRyx3REFDNUMsa0NBQXdCQyxrQixFQUFxQiw2RyxnRUFDeEMsb0Isd0RBQ0wsa0NBQXdCQyx5QixFQUE0QixtSSx3REFDcEQsa0NBQXdCQyw0QixFQUErQiw4Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjFEOzs7Ozs7O0FBSUVDLFVBQVE7d0RBQ1AsaUNBQXVCUixXLEVBQWMsOEIsd0RBQ3JDLGlDQUF1QlMs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Ozs7a0JDUjFDO0FBQ2JrRCxVQUFRLFFBREs7QUFFYkMsb0JBQWtCO0FBRkwsQzs7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsTUFBSSxTQURTO0FBRWJDLE1BQUksVUFGUztBQUdiQyxNQUFJLFFBSFM7QUFJYkMsTUFBSSxTQUpTO0FBS2JDLE1BQUksU0FMUztBQU1iQyxNQUFJLFNBTlM7QUFPYkMsTUFBSTtBQVBTLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBO0FBQ2J6VCxVQUFRLFFBREs7QUFFYjBULFdBQVMsU0FGSTtBQUdiQyxVQUFRLFFBSEs7QUFJYnpSLFdBQVMsU0FKSTtBQUtiMFIsWUFBVSxVQUxHO0FBTWJDLGVBQWEsZUFOQTtBQU9iQyxpQkFBZSxzQkFQRjtBQVFiQyxvQkFBa0IscUJBUkw7QUFTYkMsZ0JBQWMsZ0JBVEQ7QUFVYkMsY0FBWSxjQVZDO0FBV2JDLGNBQVksY0FYQztBQVliQyxrQkFBZ0IsbUJBWkg7QUFhYkMsU0FBTyxPQWJNO0FBY2JDLFlBQVU7QUFkRyxDOzs7Ozs7Ozs7Ozs7OztrQkNBQTtBQUNiQyxnQkFBYyxXQUREO0FBRWJDLGNBQVksYUFGQztBQUdiQyxxQkFBbUIsb0JBSE47QUFJYkMsV0FBUztBQUpJLEM7Ozs7Ozs7Ozs7Ozs7a0JDQUE7QUFDYkMsZ0JBQWMscUJBREQ7QUFFYmhILFVBQVEsUUFGSztBQUdiRixVQUFRO0FBSEssQzs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O2tCQUVlLG1CQUFTLENBQ3RCLFVBRHNCLEVBRXRCLFdBRnNCLEVBR3RCLE1BSHNCLEVBSXRCLFFBSnNCLEVBS3RCLE9BTHNCLEVBTXRCLFNBTnNCLEVBT3RCLFNBUHNCLEVBUXRCLFFBUnNCLENBQVQsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGMyZFRpdGxlOiAnQ2FsbCB3aXRoIHticmFuZH0nLFxyXG4gIHNtc1RpdGxlOiAnU01TIHdpdGgge2JyYW5kfScsXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBhdXRoTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhNZXNzYWdlcy5pbnRlcm5hbEVycm9yXTogJ0xvZ2luIGZhaWxlZCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gIFthdXRoTWVzc2FnZXMuYWNjZXNzRGVuaWVkXTogJ0FjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuJyxcbiAgW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF06ICdTZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBzaWduIGluLicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgY2FsbEVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGwvY2FsbEVycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxFcnJvcnMubm9Ub051bWJlcl06ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuJyxcbiAgW2NhbGxFcnJvcnMubm9BcmVhQ29kZV06ICdQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuJyxcbiAgW2NhbGxFcnJvcnMuc3BlY2lhbE51bWJlcl06ICdEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLicsXG4gIFtjYWxsRXJyb3JzLmNvbm5lY3RGYWlsZWRdOiAnQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW2NhbGxFcnJvcnMuaW50ZXJuYWxFcnJvcl06ICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gIFtjYWxsRXJyb3JzLm5vdEFuRXh0ZW5zaW9uXTogJ1RoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LicsXG4gIFtjYWxsRXJyb3JzLm5ldHdvcmtFcnJvcl06ICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW2NhbGxFcnJvcnMubm9SaW5nb3V0RW5hYmxlXTogJ1lvdXIgZXh0ZW5zaW9uIGlzIGFsbG93ZWQgdG8gbWFrZSBjYWxscyB3aXRoIGRlc2t0b3AgYXBwLlxcbiAgICBJZiB5b3Ugd2lzaCB0byBzd2l0Y2ggdG8gb3RoZXIgY2FsbGluZyBvcHRpb25zXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLicsXG4gIGFyZWFDb2RlOiAnYXJlYSBjb2RlJyxcbiAgdGVsdXM5MTE6ICdFbWVyZ2VuY3kgZGlhbGluZyBpcyBub3Qgc3VwcG9ydGVkLidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsQWxlcnQvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXTogJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lXTogJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGF2ZSB7YnJhbmR9IGZvciBEZXNrdG9wIGluc3RhbGxlZCBpbiB5b3VyIGNvbXB1dGVyLicsXG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5maXJzdExvZ2luXTogJ1BsZWFzZSBzZWxlY3QgaW4gQ2FsbGluZyBzZWN0aW9uIGhvdyB5b3Ugd2FudCB0byBtYWtlIHlvdXIgY2FsbC4gSXQgd291bGQgYmUgbmljZSBpZiB5b3UgbGV0IHVzIGtub3cgeW91ciBsb2NhdGlvbiBieSBzcGVjaWZ5aW5nIHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgKGlmIGF2YWlsYWJsZSkgaW4gUmVnaW9uIHNlY3Rpb24sIHNvIHlvdSBjYW4gZG8gbG9jYWwgZGlhbGluZyB3aXRoIHRoZSBhcHAuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmZpcnN0TG9naW5PdGhlcl06ICdQbGVhc2Ugc2VsZWN0IGluIENhbGxpbmcgc2VjdGlvbiBob3cgeW91IHdhbnQgdG8gbWFrZSB5b3VyIGNhbGwuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBlcm1pc3Npb25DaGFuZ2VkXTogJ1lvdXIgcGVybWlzc2lvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgcmVjZW50bHkuIFBsZWFzZSBnbyB0byB7bGlua30gdG8gY2hlY2sgeW91ciBDYWxsaW5nIG9wdGlvbnMuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBob25lTnVtYmVyQ2hhbmdlZF06ICdZb3VyIHBob25lIG51bWJlciBpbmZvcm1hdGlvbiBoYXMgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLicsXG4gIGxpbms6ICdTZXR0aW5ncyA+IENhbGxpbmcnLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZF06ICdZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGFuZCB5b3UgY2Fubm90IG1ha2UgY2FsbHMgd2l0aCBCcm93c2VyLiBGb3IgZGV0YWlscyBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZW1lcmdlbmN5Q2FsbGluZ05vdEF2YWlsYWJsZV06ICdEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLiBJbiBhbiBlbWVyZ2VuY3ksIHVzZSB5b3VyIHRyYWRpdGlvbmFsIHdpcmVsaW5lIG9yIHdpcmVsZXNzIHBob25lIHRvIGNhbGwgYW4gZW1lcmdlbmN5IG51bWJlci4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1JlZ2lvblNldHRpbmdzL3JlZ2lvblNldHRpbmdzTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlZ2lvbjogJ1JlZ2lvbicsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXTogJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4nLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5kaWFsaW5nUGxhbnNDaGFuZ2VkXTogJ1RoZSBwcmV2aW91cyByZWdpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBmb3IgeW91ciBhY2NvdW50LlxcbiAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgbmV3IHtyZWdpb25TZXR0aW5nc0xpbmt9LicsXG4gIHJlZ2lvblNldHRpbmdzOiAncmVnaW9uIHNldHRpbmdzJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuYXJlYUNvZGVJbnZhbGlkXTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFyZWEgY29kZS4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlZ2lvblNldHRpbmdzQWxlcnQvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBtZXNzYWdlU2VuZGVyTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZXNzYWdlU2VuZGVyL21lc3NhZ2VTZW5kZXJNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kU3VjY2Vzc106ICdTZW5kIFN1Y2Nlc3MuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kRXJyb3JdOiAnU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoZW4gc2VuZCBtZXNzYWdlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubnVtYmVyVmFsaWRhdGVFcnJvcl06ICdQaG9uZSBOdW1iZXIgVmFsaWRhdGUgRXJyb3IuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0RW1wdHldOiAnUGxlYXNlIGVudGVyIHRoZSB0ZXh0IHRvIGJlIHNlbnQuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub1Blcm1pc3Npb25dOiAnWW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2UuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJFbXB0eV06ICdZb3UgbXVzdCBzZWxlY3QgYSBudW1iZXIgZnJvbSB5b3VyIHBob25lIG51bWJlcnMgdG8gc2VuZCcsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl06ICdJbnZhbGlkIHBob25lIG51bWJlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudHNFbXB0eV06ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCByZWNlaXZlciBudW1iZXIuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0VG9vTG9uZ106ICdUZXh0IGlzIHRvbyBsb25nLCAxMDAwIExpbWl0ZWQnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudE51bWJlckludmFsaWRzXTogJ1JlY2lwaWVudCBudW1iZXIgaXMgaW52YWxpZHMnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vQXJlYUNvZGVdOiAnUGxlYXNlIHNldCB7YXJlYUNvZGVMaW5rfSB0byB1c2UgNy1kaWdpdCBsb2NhbCBwaG9uZSBudW1iZXJzLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc3BlY2lhbE51bWJlcl06ICdEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF06ICdDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmludGVybmFsRXJyb3JdOiAnQ2Fubm90IGNvbm5lY3QgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vdEFuRXh0ZW5zaW9uXTogJ1RoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubmV0d29ya0Vycm9yXTogJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRlck51bWJlckludmFsaWRdOiAnQSB2YWxpZCBQaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQgdG8gc2VuZCB0ZXh0IG1lc3NhZ2UgdG8gcmVjaXBpZW50cyBvdXRzaWRlIG9mIHlvdXIgY29tcGFueS4gUGxlYXNlIGNvbnRhY3QgeW91ciBBZG1pbmlzdHJhdG9yIHRvIGFkZCBhIGRpcmVjdCBudW1iZXIgdG8geW91ciBhY2NvdW50LicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90U21zVG9FeHRlbnNpb25dOiAnQ2Fubm90IHNlbmQgVG8gYSBleHRlbnNpb24gbnVtYmVyIHdpdGggbWFpbiBwaG9uZSBudW1iZXIuIElmIHlvdSB3YW50IHRvIHNlbnQgdG8gYSBleHRlbnNpb24gTnVtYmVyLCBwbGVhc2UganVzdCBlbnRlciBleHRlbnNpb24gTnVtYmVyLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZF06ICdTZW5kaW5nIFNNUyB0byBpbnRlcm5hdGlvbmFsIHBob25lIG51bWJlciBpcyBub3Qgc3VwcG9ydGVkLicsXG4gIGFyZWFDb2RlOiAnYXJlYSBjb2RlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZXNzYWdlU2VuZGVyQWxlcnQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmF0ZUV4Y2VlZGVkOiAnUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4gQXBwIHdpbGwgcmVzdW1lIGluIHt0dGx9IHNlY29uZHMuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SYXRlRXhjZWVkZWRBbGVydC9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IGNvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0Nvbm5lY3Rpdml0eU1vbml0b3IvY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmRpc2Nvbm5lY3RlZF06ICdOZXR3b3JrIGNvbm5lY3Rpb24gaXMgbG9zdC4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0Nvbm5lY3Rpdml0eUFsZXJ0L2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgd2VicGhvbmVFcnJvcnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9XZWJwaG9uZS93ZWJwaG9uZUVycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3dlYnBob25lRXJyb3JzLmNvbm5lY3RGYWlsZWRdOiAnQ29ubmVjdCB3aXRoIHdlYiBwaG9uZSBzZXJ2ZXIgZmFpbGVkLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5jb25uZWN0ZWRdOiAnV2ViIHBob25lIHJlZ2lzdGVyZWQuJyxcbiAgW3dlYnBob25lRXJyb3JzLmJyb3dzZXJOb3RTdXBwb3J0ZWRdOiAnQ2FsbGluZyB3aXRoIGJyb3dzZXIgaXMgb25seSBzdXBwb3J0ZWQgb24gQ2hyb21lLicsXG4gIFt3ZWJwaG9uZUVycm9ycy53ZWJwaG9uZUNvdW50T3ZlckxpbWl0XTogJ0EgbWF4aW11bSBvZiA1IHdlYiBwaG9uZXMgY291bGQgYmUgcmVnaXN0ZXJlZC4nLFxuICBbd2VicGhvbmVFcnJvcnMubm90T3V0Ym91bmRDYWxsV2l0aG91dERMXTogJ1lvdXIgZXh0ZW5zaW9uIGlzIG5vdCBhbGxvd2VkIHRvIG1ha2Ugb3V0Ym91bmQgY2FsbHMgd2l0aCBicm93c2VyIGN1cnJlbnRseSwgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIGZvciBhbiB1cGdyYWRlLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5nZXRTaXBQcm92aXNpb25FcnJvcl06ICdZb3UgaGF2ZSBubyBwZXJtaXNzaW9uIHRvIHNlbmQgbWVzc2FnZS4nLFxuICBbd2VicGhvbmVFcnJvcnMudG9Wb2ljZU1haWxFcnJvcl06ICdDYW5ub3Qgc2VuZCBjYWxsIHRvIHZvaWNlbWFpbCBkdWUgdG8gaW50ZXJuYWwgZXJyb3InLFxuICBbd2VicGhvbmVFcnJvcnMubXV0ZUVycm9yXTogJ0NhbGwgY2Fubm90IGJlIG11dGVkIGF0IHRoZSBtb21lbnQuJyxcbiAgW3dlYnBob25lRXJyb3JzLmhvbGRFcnJvcl06ICdDYWxsIGNhbm5vdCBiZSBob2xkIGF0IHRoZSBtb21lbnQuJyxcbiAgW3dlYnBob25lRXJyb3JzLmZsaXBFcnJvcl06ICdDYW5ub3QgZmxpcCB0aGUgY2FsbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbd2VicGhvbmVFcnJvcnMucmVjb3JkRXJyb3JdOiAnWW91IGNhbm5vdCByZWNvcmQgdGhlIGNhbGwgYXQgdGhlIG1vbWVudC4gRXJyb3IgY29kZToge2Vycm9yQ29kZX0nLFxuICBbd2VicGhvbmVFcnJvcnMucmVjb3JkRGlzYWJsZWRdOiAnU29ycnksIHlvdXIgYWNjb3VudCBkb2VzIG5vdCBoYXZlIHRoZSBmZWF0dXJlIHRvIHJlY29yZCBhIGNhbGwuIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLicsXG4gIFt3ZWJwaG9uZUVycm9ycy50cmFuc2ZlckVycm9yXTogJ0Nhbm5vdCB0cmFuc2ZlciB0aGUgY2FsbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvV2VicGhvbmVBbGVydC9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IG1lZXRpbmdTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZWV0aW5nL21lZXRpbmdTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFttZWV0aW5nU3RhdHVzLmVtcHR5VG9waWNdOiAnUGxlYXNlIGVudGVyIG1lZXRpbmcgdG9waWMuJyxcbiAgW21lZXRpbmdTdGF0dXMubm9QYXNzd29yZF06ICdQbGVhc2UgcHJvdmlkZSBtZWV0aW5nIHBhc3N3b3JkLicsXG4gIFttZWV0aW5nU3RhdHVzLnNjaGVkdWxlZFN1Y2Nlc3NdOiAnTWVldGluZyBpcyBzY2hlZHVsZWQuJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZWV0aW5nQWxlcnQvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBwZXJtaXNzaW9uTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9Sb2xlc0FuZFBlcm1pc3Npb25zL3Blcm1pc3Npb25zTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwZXJtaXNzaW9uTWVzc2FnZXMuaW52YWxpZFRpZXJdOiAnWW91ciBlZGl0aW9uIGRvZXMgbm90IHN1cHBvcnQge2FwcGxpY2F0aW9ufSBpbnRlZ3JhdGlvbi4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIHRvIHVwZ3JhZGUgeW91ciB7YnJhbmR9IGVkaXRpb24uJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW5CdXR0b246ICdTaWduIEluJyxcbiAgdmVyc2lvbjogJ1ZlcnNpb24nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0xvZ2luUGFuZWwvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBjYWxsaW5nT3B0aW9ucyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdDYWxsaW5nJyxcbiAgW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV06ICd7YnJhbmR9IGZvciBEZXNrdG9wJyxcbiAgW2NhbGxpbmdPcHRpb25zLm15cGhvbmVdOiAnTXkge2JyYW5kfSBQaG9uZScsXG4gIFtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lXTogJ090aGVyIFBob25lJyxcbiAgW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXTogJ0N1c3RvbSBQaG9uZScsXG4gIFtjYWxsaW5nT3B0aW9ucy5icm93c2VyXTogJ0Jyb3dzZXInLFxuICBtYWtlQ2FsbHNXaXRoOiAnTWFrZSBteSBjYWxscyB3aXRoJyxcbiAgcmluZ291dEhpbnQ6ICdSaW5nIG1lIGF0IG15IGxvY2F0aW9uIGZpcnN0LCB0aGVuIGNvbm5lY3QgdGhlIGNhbGxlZCBwYXJ0eScsXG4gIG15TG9jYXRpb25MYWJlbDogJ015IExvY2F0aW9uJyxcbiAgcHJlc3MxVG9TdGFydENhbGxMYWJlbDogJ1Byb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGwnLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF06ICdVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBhbmQgcmVjZWl2ZSBjYWxscyB1c2luZyB5b3VyIGNvbXB1dGVy4oCZcyBtaWNyb3Bob25lIGFuZCBzcGVha2VyLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5zb2Z0cGhvbmV9VG9vbHRpcGBdOiAnVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgYW5kIHJlY2VpdmUgY2FsbHMgdXNpbmcgeW91ciB7YnJhbmR9IGZvciBEZXNrdG9wIGFwcC4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwYF06ICdVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gcGhvbmUuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXTogJ0ZvciB0aGUgY2FsbCB5b3UgbWFrZSwgeW91ciB7YnJhbmR9IHBob25lIHdpbGwgcmluZyBmaXJzdCB0aGVuIHRoZSBwYXJ0eSB5b3UgY2FsbGVkLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXBgXTogJ1VzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGNhbGxzIHVzaW5nIHlvdXIgb3RoZXIgcGhvbmVzIHN1Y2ggYXMgaG9tZSBvciBjZWxsIHBob25lcyB0aGF0IHlvdSBoYXZlIGFkZGVkIGluIHlvdXIge2JyYW5kfSBFeHRlbnNpb24uJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcDFgXTogJ0ZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgeW91IGNhbGxlZC4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcGBdOiAnVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgYW55IHBob25lIG9mIHlvdXIgY2hvaWNlIGJ5IGVudGVyaW5nIGEgdmFsaWQgcGhvbmUgbnVtYmVyIGluIHRoZSBmaWVsZCBiZWxvdy4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcDFgXTogJ0ZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgeW91IGNhbGxlZC4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNhdmU6ICdTYXZlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnUmVnaW9uJyxcbiAgTkFPbmx5TWVzc2FnZTogJ1BsZWFzZSBzZXQgeW91ciBhcmVhIGNvZGUuIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nLicsXG4gIE11bHRpV2l0aE5BTWVzc2FnZTogJ1BsZWFzZSBzZXQgdGhlIGNvdW50cnkgYW5kIGFyZWEgY29kZSBmb3IgeW91ciByZWdpb24uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy4nLFxuICBNdWx0aVdpdGhvdXROQU1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IHRoZSBjb3VudHJ5IHlvdSBsb2NhdGUgaW4uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy4nLFxuICBjb3VudHJ5OiAnQ291bnRyeScsXG4gIGFyZWFDb2RlOiAnQXJlYSBDb2RlJyxcbiAgYXJlYUNvZGVQbGFjZWhvbGRlcjogJ0VudGVyIEFyZWEgQ29kZScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBBUjogJ0FyZ2VudGluYScsXG4gIEFUOiAnQXVzdHJpYScsXG4gIEJIOiAnQmFocmFpbicsXG4gIEJSOiAnQnJhemlsJyxcbiAgQkc6ICdCdWxnYXJpYScsXG4gIENBOiAnQ2FuYWRhJyxcbiAgQ0w6ICdDaGlsZScsXG4gIENOOiAnQ2hpbmEnLFxuICBIUjogJ0Nyb2F0aWEnLFxuICBDWTogJ0N5cHJ1cycsXG4gIENaOiAnQ3plY2ggUmVwdWJsaWMnLFxuICBESzogJ0Rlbm1hcmsnLFxuICBETzogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gIEVFOiAnRXN0b25pYScsXG4gIEZJOiAnRmlubGFuZCcsXG4gIEZSOiAnRnJhbmNlJyxcbiAgREU6ICdHZXJtYW55JyxcbiAgSEs6ICdIb25nIEtvbmcnLFxuICBIVTogJ0h1bmdhcnknLFxuICBJRTogJ0lyZWxhbmQnLFxuICBJTDogJ0lzcmFlbCcsXG4gIElOOiAnSW5kaWEnLFxuICBJVDogJ0l0YWx5JyxcbiAgSlA6ICdKYXBhbicsXG4gIExWOiAnTGF0dmlhJyxcbiAgTFQ6ICdMaXRodWFuaWEnLFxuICBMVTogJ0x1eGVtYm91cmcnLFxuICBNWTogJ01hbGF5c2lhJyxcbiAgTVg6ICdNZXhpY28nLFxuICBOTDogJ05ldGhlcmxhbmRzJyxcbiAgTk86ICdOb3J3YXknLFxuICBQQTogJ1BhbmFtYScsXG4gIFBIOiAnUGhpbGlwcGluZXMnLFxuICBQTDogJ1BvbGFuZCcsXG4gIFBUOiAnUG9ydHVnYWwnLFxuICBSTzogJ1JvbWFuaWEnLFxuICBTSzogJ1Nsb3Zha2lhJyxcbiAgU0k6ICdTbG92ZW5pYScsXG4gIEVTOiAnU3BhaW4nLFxuICBTRTogJ1N3ZWRlbicsXG4gIENIOiAnU3dpdHplcmxhbmQnLFxuICBUUjogJ1R1cmtleScsXG4gIEdCOiAnVW5pdGVkIEtpbmdkb20nLFxuICBBVTogJ0F1c3RyYWxpYScsXG4gIEdFOiAnR2VvcmdpYScsXG4gIElEOiAnSW5kb25lc2lhJyxcbiAgS0U6ICdLZW55YScsXG4gIE5HOiAnTmlnZXJpYScsXG4gIFBLOiAnUGFraXN0YW4nLFxuICBaQTogJ1NvdXRoIEFmcmljYScsXG4gIEtSOiAnU291dGggS29yZWEnLFxuICBTRzogJ1NpbmdhcG9yZScsXG4gIFRXOiAnVGFpd2FuJyxcbiAgVUE6ICdVa3JhaW5lJyxcbiAgVVM6ICdVbml0ZWQgU3RhdGVzJyxcbiAgVk46ICdWaWV0bmFtJyxcbiAgQkU6ICdCZWxnaXVtJyxcbiAgQko6ICdCZW5pbicsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHSDogJ0doYW5hJyxcbiAgR1I6ICdHcmVlY2UnLFxuICBHTjogJ0d1aW5lYScsXG4gIE5aOiAnTmV3IFplYWxhbmQnLFxuICBQRTogJ1BlcnUnLFxuICBQUjogJ1B1ZXJ0byBSaWNvJyxcbiAgNDE5OiAnTGF0aW4gQW1lcmljYScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9jb3VudHJ5TmFtZXMvZW4tVVMuanMiLCJpbXBvcnQgcGhvbmVUeXBlcyBmcm9tICcuLi8uLi9lbnVtcy9waG9uZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGhvbmVUeXBlcy5idXNpbmVzc106ICdCdXNpbmVzcyBQaG9uZScsXG4gIFtwaG9uZVR5cGVzLmV4dGVuc2lvbl06ICdFeHRlbnNpb24gTnVtYmVyJyxcbiAgW3Bob25lVHlwZXMuaG9tZV06ICdIb21lIE51bWJlcicsXG4gIFtwaG9uZVR5cGVzLm1vYmlsZV06ICdNb2JpbGUgUGhvbmUnLFxuICBbcGhvbmVUeXBlcy5waG9uZV06ICdQaG9uZScsXG4gIFtwaG9uZVR5cGVzLnVua25vd25dOiAnVW5rbm93biBQaG9uZSBUeXBlJyxcbiAgW3Bob25lVHlwZXMuY29tcGFueV06ICdDb21wYW55IE51bWJlcicsXG4gIFtwaG9uZVR5cGVzLmRpcmVjdF06ICdEaXJlY3QgTnVtYmVyJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lVHlwZU5hbWVzL2VuLVVTLmpzIiwiaW1wb3J0IHBob25lU291cmNlcyBmcm9tICcuLi8uLi9lbnVtcy9waG9uZVNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwaG9uZVNvdXJjZXMuYWNjb3VudF06ICdBY2NvdW50JyxcbiAgW3Bob25lU291cmNlcy5jb250YWN0XTogJ0NvbnRhY3QnLFxuICBbcGhvbmVTb3VyY2VzLnJjQ29udGFjdF06ICd7YnJhbmR9JyxcbiAgW3Bob25lU291cmNlcy5sZWFkXTogJ0xlYWQnLFxuICBbcGhvbmVTb3VyY2VzLm9wcG9ydHVuaXR5XTogJ09wcG9ydHVuaXR5JyxcbiAgW3Bob25lU291cmNlcy5zeXN0ZW1Vc2VyXTogJ1N5c3RlbSBVc2VyJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lU291cmNlTmFtZXMvZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvOiAnVG8nLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0VudGVyIE51bWJlciBvciBOYW1lLi4uJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWNpcGllbnRzSW5wdXQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgRGlyZWN0TnVtYmVyOiAnRGlyZWN0JyxcbiAgTWFpbkNvbXBhbnlOdW1iZXI6ICdNYWluJyxcbiAgQ29tcGFueU51bWJlcjogJ0NvbXBhbnknLFxuICBDb21wYW55RmF4TnVtYmVyOiAnRmF4JyxcbiAgQmxvY2tlZDogJ0Jsb2NrZWQnLFxuICBBZGRpdGlvbmFsQ29tcGFueU51bWJlcjogJ0NvbXBhbnknLFxuICBGb3J3YXJkZWRDb21wYW55TnVtYmVyOiAnRm9yd2FyZGVkJyxcbiAgZnJvbTogJ0Zyb20nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmcm9tOiAnRnJvbScsXG4gIHRvOiAnVG8nLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0VudGVyIE51bWJlciBvciBOYW1lLi4uJyxcbiAgdHlwZU1lc3NhZ2U6ICdUeXBlIG1lc3NhZ2UuLi4nLFxuICBzZW5kOiAnU2VuZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29tcG9zZVRleHRQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERpc3BsYXkvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZU1lc3NhZ2U6ICdUeXBlIG1lc3NhZ2UuLi4nLFxuICBzZW5kOiAnU2VuZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udmVyc2F0aW9uUGFuZWwvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmV3Q29uZmVyZW5jZTogJ05ldyBDb25mZXJlbmNlJyxcbiAgZGlhbEluTnVtYmVyOiAnRGlhbC1pbiBOdW1iZXInLFxuICBob3N0QWNjZXNzOiAnSG9zdCBBY2Nlc3MnLFxuICBwYXJ0aWNpcGFudHNBY2Nlc3M6ICdQYXJ0aWNpcGFudHMgQWNjZXNzJyxcbiAgYWRkaW5hbERpYWxJbk51bWJlcnM6ICdBZGRpdGlvbmFsIERpYWwtaW4gTnVtYmVycycsXG4gIHNlbGVjdE51bWJlcnM6ICdTZWxlY3QgTnVtYmVycycsXG4gIGVuYWJsZUpvaW5CZWZvcmVIb3N0OiAnRW5hYmxlIGpvaW4gYmVmb3JlIEhvc3QnLFxuICBjb25mZXJlbmNlQ29tbWFuZHM6ICdDb25mZXJlbmNlIENvbW1hbmRzJyxcbiAgaW52aXRlV2l0aEdDYWxlbmRhcjogJ0ludml0ZSB3aXRoIEdvb2dsZSBDYWxlbmRhcicsXG4gIGludml0ZVdpdGhUZXh0OiAnSW52aXRlIHdpdGggVGV4dCcsXG4gIGpvaW5Bc0hvc3Q6ICdKb2luIGFzIEhvc3QnLFxuICBpbnZpdGVUZXh0OiAnUGxlYXNlIGpvaW4gdGhlIFJpbmdDZW50cmFsIGNvbmZlcmVuY2UuXFxuXFxuRGlhbC1JbiBOdW1iZXJzOiB7ZGlhbEluTnVtYmVyfSBcXG5cXG57aW50ZXJuYXRpb25hbHN9IFxcblBhcnRpY2lwYW50IEFjY2Vzczoge3BhcnRpY2lwYW50Q29kZX0gXFxuXFxuTmVlZCBhbiBpbnRlcm5hdGlvbmFsIGRpYWwtaW4gcGhvbmUgbnVtYmVyPyBQbGVhc2UgdmlzaXQgaHR0cDovL3d3dy5yaW5nY2VudHJhbC5jb20vY29uZmVyZW5jaW5nIFxcblxcblRoaXMgY29uZmVyZW5jZSBjYWxsIGlzIGJyb3VnaHQgdG8geW91IGJ5IFJpbmdDZW50cmFsIENvbmZlcmVuY2luZy4nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN0YXJTaGFycDJUaXRsZTogJ0NhbGxlciBDb3VudCcsXG4gIHN0YXJTaGFycDJCb2R5OiAnS2VlcCB0cmFjayBvZiBob3cgbWFueSBwZW9wbGUgYXJlIG9uIHRoZSBjYWxsJyxcbiAgc3RhclNoYXJwM1RpdGxlOiAnTGVhdmUgQ29uZmVyZW5jZScsXG4gIHN0YXJTaGFycDNCb2R5OiAnTGV0cyB0aGUgaG9zdCBoYW5nIHVwIGFuZCBlbmQgdGhlIGNhbGwnLFxuICBzdGFyU2hhcnA0VGl0bGU6ICdNZW51JyxcbiAgc3RhclNoYXJwNEJvZHk6ICdMaXN0ZW4gdG8gdGhlIGxpc3Qgb2YgdG91Y2h0b25lIGNvbW1hbmRzJyxcbiAgc3RhclNoYXJwNVRpdGxlOiAnU2V0IExpc3RlbmluZyBNb2RlcycsXG4gIHN0YXJTaGFycDVCb2R5OiBgUHJlc3MgMXg6IE11dGUgY2FsbGVycyAtIENhbGxlcnMgY2FuIHVubXV0ZSB3aXRoICAqLCAjLCA2XG5QcmVzcyAyeDogTXV0ZSBjYWxsZXJzIC0gTGlzdGVuIG9ubHkuIE5vIHVubXV0aW5nIG9wdGlvblxuUHJlc3MgM3g6IFVubXV0ZSBjYWxsZXJzIC0gT3BlbnMgdGhlIGxpbmUgYWdhaW5gLFxuICBzdGFyU2hhcnA2VGl0bGU6ICdNdXRlIEhvc3QgTGluZScsXG4gIHN0YXJTaGFycDZCb2R5OiBgUHJlc3Mgb25jZSB0byBNVVRFXG5QcmVzcyBhZ2FpbiB0byBVTk1VVEVgLFxuICBzdGFyU2hhcnA3VGl0bGU6ICdTZWN1cmUgdGhlIENhbGwnLFxuICBzdGFyU2hhcnA3Qm9keTogYFByZXNzIG9uY2UgdG8gQkxPQ0sgYWxsIGNhbGxlcnNcblByZXNzIGFnYWluIHRvIE9QRU4gdGhlIGNhbGxgLFxuICBzdGFyU2hhcnA4VGl0bGU6ICdIZWFyIHNvdW5kIHdoZW4gcGVvcGxlIEVudGVyIG9yIEV4aXQgY2FsbCcsXG4gIHN0YXJTaGFycDhCb2R5OiBgUHJlc3MgMXg6IFR1cm5zIE9GRiBzb3VuZFxuUHJlc3MgMng6IEVudGVyIHRvbmUgaXMgT04gRXhpdCB0b25lIGlzIE9GRlxuUHJlc3MgM3g6IEVudGVyIHRvbmUgaXMgT0ZGIEV4aXQgdG9uZSBpcyBPTlxuUHJlc3MgNHg6IFR1cm5zIE9OIHNvdW5kYCxcbiAgc3RhcjlUaXRsZTogJ1JlY29yZCB5b3VyIGNvbmZlcmVuY2UnLFxuICBzdGFyOUJvZHk6IGBQcmVzcyBvbmNlIHRvIFNUQVJUIHJlY29yZGluZ1xuUHJlc3MgYWdhaW4gdG8gU1RPUCByZWNvcmRpbmdgLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VDb21tYW5kcy9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjYW5jZWw6ICdDYW5jZWwnLFxuICBjb25maXJtOiAnQ29uZmlybScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTW9kYWwvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWNjb3VudDogJ0FjY291bnQnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG4gIGxlYWQ6ICdMZWFkJyxcbiAgY2hvb3NlRW50aXR5OiAnUGxlYXNlIHNlbGVjdCBlbnRpdHkgdHlwZScsXG4gIGNyZWF0ZTogJ0NyZWF0ZScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRW50aXR5TW9kYWwvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRMb2c6ICdMb2cnLFxuICBlZGl0TG9nOiAnRWRpdCBMb2cnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscycsXG4gIGFkZEVudGl0eTogJ0NyZWF0ZSBOZXcnLFxuICBjYWxsOiAnQ2FsbCcsXG4gIGNvbnZlcnNhdGlvbjogJ0NvbnZlcnNhdGlvbicsXG4gIGdyb3VwQ29udmVyc2F0aW9uOiAnR3JvdXAgQ29udmVyc2F0aW9uJyxcbiAgdm9pY2VNZXNzYWdlOiAnVm9pY2UgbWVzc2FnZScsXG4gIFttZXNzYWdlVHlwZXMudm9pY2VNYWlsXTogJ1ZvaWNlIE1haWwnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIExvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgc2VhcmNoOiAnU2VhcmNoLi4uJyxcbiAgbm9NZXNzYWdlczogJ05vIE1lc3NhZ2VzJyxcbiAgbm9TZWFyY2hSZXN1bHRzOiAnTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZUxpc3QvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ01lc3NhZ2VzJyxcbiAgW21lc3NhZ2VUeXBlcy5hbGxdOiAnQWxsJyxcbiAgW21lc3NhZ2VUeXBlcy52b2ljZU1haWxdOiAnVm9pY2UnLFxuICBbbWVzc2FnZVR5cGVzLnRleHRdOiAnVGV4dCcsXG4gIFttZXNzYWdlVHlwZXMuZmF4XTogJ0ZheCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZXNQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscycsXG4gIGFkZEVudGl0eTogJ0NyZWF0ZSBOZXcnLFxuICBhZGRMb2c6ICdMb2cnLFxuICB0ZXh0OiAnVGV4dCcsXG4gIGNhbGw6ICdDYWxsJyxcbiAgYWRkQ29udGFjdDogJ0FkZCBDb250YWN0JyxcbiAgbWlzc2VkQ2FsbDogJ01pc3NlZCcsXG4gIGluYm91bmRDYWxsOiAnSW5ib3VuZCcsXG4gIG91dGJvdW5kQ2FsbDogJ091dGJvdW5kJyxcbiAgZnJvbTogJ0Zyb20nLFxuICB0bzogJ1RvJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsSXRlbS9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0FjdGl2ZUNhbGxzOiAnTm8gYWN0aXZlIGNhbGxzJyxcbiAgY3VycmVudENhbGw6ICdDdXJyZW50IENhbGwnLFxuICByaW5nQ2FsbDogJ1JpbmdpbmcgQ2FsbCcsXG4gIG9uSG9sZENhbGw6ICdDYWxsIG9uIEhvbGQnLFxuICBvdGhlckRldmljZUNhbGw6ICdPbmdvaW5nIGNhbGxzIG9uIG15IG90aGVyIGRldmljZXMnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxzUGFuZWwvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ0xvZ2dpbmcuLi4nLFxuICBsb2dDYWxsOiAnTG9nIENhbGwnLFxuICBlZGl0TG9nOiAnRWRpdCBMb2cnLFxuICBzZWxlY3Q6ICdTZWxlY3QgYSBtYXRjaGluZyByZWNvcmQnLFxuICBPbkhvbGQ6ICdPbiBIb2xkJyxcbiAgUmluZ2luZzogJ1JpbmdpbmcnLFxuICBDYWxsQ29ubmVjdGVkOiAnQ2FsbCBDb25uZWN0ZWQnLFxuICB1bmtub3duVXNlcjogJ1Vua25vd24gVXNlcicsXG4gIHVua25vd25OdW1iZXI6ICdBbm9ueW1vdXMnLFxuICB1bmF2YWlsYWJsZTogJ1VuYXZhaWxhYmxlJyxcbiAgdmlld0RldGFpbHM6ICdWaWV3IERldGFpbHMnLFxuICBhZGRFbnRpdHk6ICdDcmVhdGUgTmV3JyxcbiAgYWRkTG9nOiAnTG9nJyxcbiAgdGV4dDogJ1RleHQnLFxuICBjYWxsOiAnQ2FsbCcsXG4gIG1pc3NlZENhbGw6ICdNaXNzZWQnLFxuICBpbmJvdW5kQ2FsbDogJ0luYm91bmQnLFxuICBvdXRib3VuZENhbGw6ICdPdXRib3VuZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbEl0ZW0vaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9BY3RpdmVDYWxsczogJ05vIGFjdGl2ZSBjYWxscycsXG4gIG5vUmVjb3JkczogJ05vIHJlc3VsdHMgZm91bmQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxMaXN0L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnSGlzdG9yeSdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0ZvcndhcmQnLFxuICBjYW5jZWw6ICdDYW5jZWwnLFxuICBjdXN0b21OdW1iZXI6ICdDdXN0b20gbnVtYmVyJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZvcndhcmRGb3JtL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNhbmNlbDogJ0NhbmNlbCcsXG4gIHJlcGx5OiAnUmVwbHknLFxuICBvbk15V2F5OiAnT24gbXkgd2F5JyxcbiAgY3VzdG9tTWVzc2FnZTogJ0N1c3RvbSBNZXNzYWdlJyxcbiAgY2FsbE1lQmFja0luOiAnQ2FsbCBtZSBiYWNrIGluJyxcbiAgd2lsbENhbGxZb3VCYWNrSW46ICdXaWxsIGNhbGwgeW91IGJhY2sgaW4nLFxuICBtaW46ICdtaW4uJyxcbiAgaG91cnM6ICdob3VycycsXG4gIGRheXM6ICdkYXlzJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZXBseVdpdGhNZXNzYWdlL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvcndhcmQ6ICdGb3J3YXJkJyxcbiAgcmVwbHk6ICdSZXBseScsXG4gIGlnbm9yZTogJ0lnbm9yZScsXG4gIHRvVm9pY2VtYWlsOiAnVG8gVm9pY2VtYWlsJyxcbiAgYW5zd2VyOiAnQW5zd2VyJyxcbiAgYW5zd2VyQW5kRW5kOiAnQW5zd2VyICYgRW5kJyxcbiAgYW5zd2VyQW5kSG9sZDogJ0Fuc3dlciAmIEhvbGQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0luY29taW5nQ2FsbFBhZC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmtub3duOiAnVW5rbm93bicsXG4gIGFub255bW91czogJ0Fub255bW91cycsXG4gIGFjdGl2ZUNhbGw6ICdBY3RpdmUgQ2FsbCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvSW5jb21pbmdDYWxsUGFnZS9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBoaWRlOiAnSGlkZScsXG4gIGVuZDogJ0VuZCcsXG4gIGtleXBhZDogJ0tleXBhZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbERpYWxQYWQvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5tdXRlOiAnVW5tdXRlJyxcbiAgbXV0ZTogJ011dGUnLFxuICBrZXlwYWQ6ICdLZXlwYWQnLFxuICBob2xkOiAnSG9sZCcsXG4gIG9uSG9sZDogJ09uIEhvbGQnLFxuICBwYXJrOiAnUGFyaycsXG4gIHN0b3BSZWNvcmQ6ICdTdG9wJyxcbiAgcmVjb3JkOiAnUmVjb3JkJyxcbiAgYWRkOiAnQWRkJyxcbiAgdHJhbnNmZXI6ICdUcmFuc2ZlcicsXG4gIGZsaXA6ICdGbGlwJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIEhvbWU6ICdIb21lJyxcbiAgTW9iaWxlOiAnTW9iaWxlJyxcbiAgV29yazogJ1dvcmsnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JhZGlvQnRuR3JvdXAvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZmxpcEhlYWRlcjogJ0ZsaXAgQ2FsbCB0by4uLicsXG4gIGZsaXA6ICdGbGlwJyxcbiAgY29tcGxldGU6ICdDb21wbGV0ZSBGbGlwJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9GbGlwUGFuZWwvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdG86ICdUbzonLFxuICB0cmFuc2ZlclRvOiAnVHJhbnNmZXIgdG8nLFxuICBibGluZFRyYW5zZmVyOiAnVHJhbnNmZXInLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0VudGVyIE51bWJlcicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVHJhbnNmZXJQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmtub3duOiAnVW5rbm93bicsXG4gIGFub255bW91czogJ0Fub255bW91cycsXG4gIGFjdGl2ZUNhbGxzOiAnQWN0aXZlIENhbGxzJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWN0aXZlQ2FsbDogJ0FjdGl2ZSBDYWxsJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsQmFkZ2VDb250YWluZXIvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9Db250YWN0czogJ05vIHJlY29yZHMgZm91bmQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3RMaXN0L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0c1ZpZXcvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsOiAnQWxsJyxcbiAgY29tcGFueTogJ0NvbXBhbnknLFxuICBwZXJzb25hbDogJ1BlcnNvbmFsJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgcHJlc2VuY2VTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9wcmVzZW5jZVN0YXR1cyc7XG5pbXBvcnQgZG5kU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBleHRlbnNpb25MYWJlbDogJ0V4dC4nLFxuICBkaXJlY3RMYWJlbDogJ0RpcmVjdCcsXG4gIGVtYWlsTGFiZWw6ICdFbWFpbCcsXG4gIGNhbGw6ICdDYWxsJyxcbiAgdGV4dDogJ1RleHQnLFxuICBbcHJlc2VuY2VTdGF0dXMuYXZhaWxhYmxlXTogJ0F2YWlsYWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXTogJ0ludmlzaWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXN5ICsgZG5kU3RhdHVzLnRha2VBbGxDYWxsc106ICdCdXN5JyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3kgKyBkbmRTdGF0dXMuZG9Ob3RBY2NlcHREZXBhcnRtZW50Q2FsbHNdOiAnQnVzeScsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXN5ICsgZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdOiAnRG8gbm90IERpc3R1cmInLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3REZXRhaWxzL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhY3REZXRhaWxzOiAnQ29udGFjdCBEZXRhaWxzJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGV0YWlsc1ZpZXcvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB0aXRsZTogJ0F1ZGlvJyxcclxuICBkaWFsQnV0dG9uVm9sdW1lOiAnRGlhbCBCdXR0b24gVm9sdW1lJyxcclxuICByaW5ndG9uZVZvbHVtZTogJ1Jpbmd0b25lIFZvbHVtZScsXHJcbiAgY2FsbFZvbHVtZTogJ0NhbGwgVm9sdW1lJyxcclxuICBtdXRlQ2FsbHM6ICdNdXRlIENhbGxzJyxcclxuICBvdXRwdXREZXZpY2U6ICdPdXRwdXQgRGV2aWNlJyxcclxuICBpbnB1dERldmljZTogJ0lucHV0IERldmljZScsXHJcbiAgbWljUGVybWlzc2lvbjogJ01pY3JvcGhvbmUgUGVybWlzc2lvbicsXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1ZGlvU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0b3BpYzogJ1RvcGljJyxcbiAgd2hlbjogJ1doZW4nLFxuICBkdXJhdGlvbjogJ0R1cmF0aW9uJyxcbiAgcmVjdXJyaW5nTWVldGluZzogJ1JlY3VycmluZyBNZWV0aW5nJyxcbiAgcmVjdXJyaW5nRGVzY3JpYmU6ICdQbGVhc2UgcmVtZW1iZXIgdG8gY2hlY2sgcmVjdXJyZW5jZSBvciByZXBlYXQgaW4geW91ciBjYWxlbmRhciBpbnZpdGF0aW9uIHRvIHlvdXIgYXR0ZW5kZWVzLicsXG4gIHZpZGVvOiAnVmlkZW8nLFxuICB2aWRlb0Rlc2NyaWJlOiAnV2hlbiBqb2luaW5nIGEgbWVldGluZycsXG4gIGhvc3Q6ICdIb3N0JyxcbiAgcGFydGljaXBhbnRzOiAnUGFydGljaXBhbnQnLFxuICBhdWRpb09wdGlvbnM6ICdBdWRpbyBPcHRpb25zJyxcbiAgdm9JUE9ubHk6ICdWb0lQIE9ubHknLFxuICBib3RoOiAnQm90aCcsXG4gIG1lZXRpbmdPcHRpb25zOiAnTWVldGluZyBPcHRpb25zJyxcbiAgcmVxdWlyZVBhc3N3b3JkOiAnUmVxdWlyZSBtZWV0aW5nIHBhc3N3b3JkJyxcbiAgcGFzc3dvcmQ6ICdQYXNzd29yZCcsXG4gIGVuYWJsZUpvaW5CZWZvcmVIb3N0OiAnRW5hYmxlIGpvaW4gYmVmb3JlIGhvc3QnLFxuICB0ZWxlcGhvbnlPbmx5OiAnVGVsZXBob255IE9ubHknLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lZXRpbmdQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBnb29nbGU6ICdHb29nbGUnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2NoZWR1bGU6ICdTY2hlZHVsZScsXG4gIHByb21wdDogJ1BsZWFzZSBhdXRob3JpemUgUmluZ0NlbnRyYWwgdG8gYWNjZXNzIHlvdXIgYWNjb3VudCBpbmZvcm1hdGlvbi4nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVldGluZ1NjaGVkdWxlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGludml0ZVdpdGhDYWxlbmRhcjogJ0ludml0ZSB3aXRoIEdvb2dsZSBDYWxlbmRhcidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nSW52aXRlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGludml0ZVdpdGhDYWxlbmRhcjogJ0ludml0ZSB3aXRoIEdvb2dsZSBDYWxlbmRhcidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db25mZXJlbmNlSW52aXRlQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGhvcml6ZTogJ0F1dGhvcml6ZScsXG4gIHByb21wdDogJ1BsZWFzZSBhdXRob3JpemUgUmluZ0NlbnRyYWwgdG8gYWNjZXNzIHlvdXIgR29vZ2xlIGFjY291bnQgaW5mb3JtYXRpb24uJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NZWV0aW5nQXV0aG9yaXplQnV0dG9uL2kxOG4vZW4tVVMuanMiLCJpbXBvcnQgYXV0aG9yaXphdGlvbkVycm9yIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvR29vZ2xlQXV0aG9yaXplL2F1dGhvcml6YXRpb25FcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhvcml6YXRpb25FcnJvci5hY2NvdW50TG9nZ2VkT3V0XTogJ1dlIG5vdGljZWQgeW91IGhhdmUgbG9nZ2VkIG91dCB5b3VyIEdvb2dsZSBhY2NvdW50IHthY2NvdW50RW1haWx9LiBUbyBjb250aW51ZSBwbGVhc2Uge2NsaWNrSGVyZUxpbmt9IHRvIGF1dGhvcml6ZSBSaW5nQ2VudHJhbCBmb3IgR29vZ2xlIHRvIGFjY2VzcyB5b3VyIEdvb2dsZSBhY2NvdW50LicsXG4gIGNsaWNrSGVyZTogJ2NsaWNrIGhlcmUnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0F1dGhvcml6YXRpb25BbGVydC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdObyByZWNlbnQgcmVjb3JkcyBmb3VuZC4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9lbi1VUy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTm8gcmVjZW50IHJlY29yZHMgZm91bmQuJyxcbiAgaW5Cb3VuZDogJ0luYm91bmQnLFxuICBvdXRCb3VuZDogJ091dGJvdW5kJyxcbiAgbWlzc2VkOiAnTWlzc2VkIENhbGwnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVjZW50QWN0aXZpdHlDYWxscy9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWNlbnRBY3Rpdml0aWVzOiAnUmVjZW50IEFjdGl2aXRpZXMnLFxuICB0ZXh0OiAnVGV4dCcsXG4gIGZheDogJ0ZheCcsXG4gIHZvaWNlbWFpbDogJ1ZvaWNlbWFpbCcsXG4gIGNhbGw6ICdDYWxsJyxcbiAgZ21haWw6ICdHbWFpbCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWNlbnRBY3Rpdml0eUNvbnRhaW5lci9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdObyByZWNlbnQgcmVjb3JkcyBmb3VuZC4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5RW1haWxzL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRpYWxwYWRMYWJlbDogJ0RpYWwgUGFkJyxcbiAgY2FsbHNMYWJlbDogJ0NhbGxzJyxcbiAgaGlzdG9yeUxhYmVsOiAnSGlzdG9yeScsXG4gIG1lc3NhZ2VzTGFiZWw6ICdNZXNzYWdlcycsXG4gIGNvbXBvc2VUZXh0TGFiZWw6ICdDb21wb3NlIFRleHQnLFxuICBtb3JlTWVudUxhYmVsOiAnTW9yZSBtZW51JyxcbiAgY29udGFjdHNMYWJlbDogJ0NvbnRhY3RzJyxcbiAgbWVldGluZ0xhYmVsOiAnU2NoZWR1bGUgTWVldGluZycsXG4gIGNvbmZlcmVuY2VMYWJlbDogJ1NjaGVkdWxlIENvbmZlcmVuY2UnLFxuICBzZXR0aW5nc0xhYmVsOiAnU2V0dGluZ3MnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01haW5WaWV3L2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9mZmxpbmVNb2RlOiAnT2ZmbGluZSBNb2RlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9PZmZsaW5lTW9kZUJhZGdlL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV1bGE6ICdFbmQgVXNlciBMaWNlbnNlIEFncmVlbWVudCcsXG4gIHNlcnZpY2VUZXJtczogJ1NlcnZpY2UgVGVybXMnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0V1bGEvaTE4bi9lbi1VUy5qcyIsImltcG9ydCBwcmVzZW5jZVN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzJztcbmltcG9ydCBkbmRTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9kbmRTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdOiAnQXZhaWxhYmxlJyxcbiAgW3ByZXNlbmNlU3RhdHVzLm9mZmxpbmVdOiAnSW52aXNpYmxlJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3kgKyBkbmRTdGF0dXMudGFrZUFsbENhbGxzXTogJ0J1c3knLFxuICBbcHJlc2VuY2VTdGF0dXMuYnVzeSArIGRuZFN0YXR1cy5kb05vdEFjY2VwdERlcGFydG1lbnRDYWxsc106ICdCdXN5JyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3kgKyBkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc106ICdEbyBub3QgRGlzdHVyYicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN0YXR1czogJ1N0YXR1cycsXG4gIGFjY2VwdFF1ZXVlQ2FsbHM6ICdBY2NlcHQgY2FsbCBxdWV1ZSBjYWxscycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGVuOiAnRW5nbGlzaCcsXHJcbiAgamE6ICdKYXBhbmVzZScsXHJcbiAgZnI6ICdGcmVuY2gnLFxyXG4gIGRlOiAnRGV1dHNjaCcsXHJcbiAgZXM6ICdTcGFuaXNoJyxcclxuICBpdDogJ0l0YWxpYW4nLFxyXG4gIHB0OiAnUG9ydHVndWVzZScsXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWdpb246ICdSZWdpb24nLFxuICBjYWxsaW5nOiAnQ2FsbGluZycsXG4gIGxvZ291dDogJ0xvZ291dCcsXG4gIHZlcnNpb246ICdWZXJzaW9uJyxcbiAgc2V0dGluZ3M6ICdTZXR0aW5ncycsXG4gIGNsaWNrVG9EaWFsOiAnQ2xpY2sgdG8gRGlhbCcsXG4gIGF1dG9DcmVhdGVMb2c6ICdBdXRvLWNyZWF0ZSBDYWxsIExvZycsXG4gIGF1dG9DcmVhdGVTTVNMb2c6ICdBdXRvLWNyZWF0ZSBTTVMgTG9nJyxcbiAgYXV0b0xvZ0NhbGxzOiAnQXV0byBsb2cgY2FsbHMnLFxuICBhdXRvTG9nU01TOiAnQXV0byBsb2cgU01TJyxcbiAgY2xpY2tUb1NNUzogJ0NsaWNrIHRvIFNNUycsXG4gIGNsaWNrVG9EaWFsU01TOiAnQ2xpY2sgdG8gRGlhbC9TTVMnLFxuICBhdWRpbzogJ0F1ZGlvJyxcbiAgbGFuZ3VhZ2U6ICdMYW5ndWFnZScsXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9TZXR0aW5nc1BhbmVsL2kxOG4vZW4tVVMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVuYXV0aG9yaXplZDogJ0F1dGhvcml6ZScsXG4gIGF1dGhvcml6ZWQ6ICdVbmF1dGhvcml6ZScsXG4gIHVuYXV0aG9yaXplZFRpdGxlOiAnQXV0aG9yaXplZCBBY2NvdW50JyxcbiAgdG9vbHRpcDogJ1lvdSBoYXZlIGF1dGhvcml6ZWQgUmluZ0NlbnRyYWwgZm9yIEdvb2dsZSB0byBhY2Nlc3MgeW91ciBhY2NvdW50ICcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aG9yaXplU2V0dGluZ3NQYW5lbC9pMThuL2VuLVVTLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbmNvbWluZ0NhbGw6ICdJbmNvbWluZyBDYWxsIEZyb206JyxcbiAgYW5zd2VyOiAnQW5zd2VyJyxcbiAgaWdub3JlOiAnSWdub3JlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL2VuLVVTLmpzIiwiaW1wb3J0IEVudW0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0VudW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudW0oW1xyXG4gICdidXNpbmVzcycsXHJcbiAgJ2V4dGVuc2lvbicsXHJcbiAgJ2hvbWUnLFxyXG4gICdtb2JpbGUnLFxyXG4gICdwaG9uZScsXHJcbiAgJ3Vua25vd24nLFxyXG4gICdjb21wYW55JyxcclxuICAnZGlyZWN0JyxcclxuXSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlbnVtcy9waG9uZVR5cGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==