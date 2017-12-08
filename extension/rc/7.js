webpackJsonp([7],{

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Call with {brand}',
  smsTitle: 'SMS with {brand}'
};

// @key: @#@"c2dTitle"@#@ @source: @#@"Call with {brand}"@#@
// @key: @#@"smsTitle"@#@ @source: @#@"SMS with {brand}"@#@

/***/ }),

/***/ 1036:
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

// @key: @#@"[authMessages.internalError]"@#@ @source: @#@"Login failed due to internal errors. Please try again later."@#@
// @key: @#@"[authMessages.accessDenied]"@#@ @source: @#@"Access denied. Please contact support."@#@
// @key: @#@"[authMessages.sessionExpired]"@#@ @source: @#@"Session expired. Please sign in."@#@


/***/ }),

/***/ 1047:
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

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Dialling emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options,\n    please contact your account administrator for an upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'area code'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'Emergency dialling is not supported.'), _callErrors$noToNumbe);

// @key: @#@"[callErrors.noToNumber]"@#@ @source: @#@"Please enter a valid phone number."@#@
// @key: @#@"[callErrors.noAreaCode]"@#@ @source: @#@"Please set {areaCodeLink} to use 7-digit local phone numbers."@#@
// @key: @#@"[callErrors.specialNumber]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported."@#@
// @key: @#@"[callErrors.connectFailed]"@#@ @source: @#@"Connection failed. Please try again later."@#@
// @key: @#@"[callErrors.internalError]"@#@ @source: @#@"Cannot connect due to internal errors. Please try again later."@#@
// @key: @#@"[callErrors.notAnExtension]"@#@ @source: @#@"The extension number does not exist."@#@
// @key: @#@"[callErrors.networkError]"@#@ @source: @#@"Cannot connect due to network issues. Please try again later."@#@
// @key: @#@"[callErrors.noRingoutEnable]"@#@ @source: @#@"Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options\n    please contact your account administrator for an upgrade."@#@
// @key: @#@"areaCode"@#@ @source: @#@"area code"@#@
// @key: @#@"telus911"@#@ @source: @#@"Emergency dialing is not supported."@#@


/***/ }),

/***/ 1058:
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

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Settings saved successfully. Please make sure you have {brand} for Desktop installed on your computer.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Please select in the Calling section how you want to make your call. If you let us know your location by specifying the country and area code (if available) in the Region section, you can do local dialling with the app.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Please select in the Calling section how you want to make your call.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Your permissions have been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'Your phone number information has been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Settings > Calling'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Your permissions have been changed and you cannot make calls with your browser. For details, please contact your account administrator.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Dialling emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number.'), _callingSettingsMessa);

// @key: @#@"[callingSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[callingSettingsMessages.saveSuccessWithSoftphone]"@#@ @source: @#@"Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer."@#@
// @key: @#@"[callingSettingsMessages.firstLogin]"@#@ @source: @#@"Please select in Calling section how you want to make your call. It would be nice if you let us know your location by specifying the country and area code (if available) in Region section, so you can do local dialing with the app."@#@
// @key: @#@"[callingSettingsMessages.firstLoginOther]"@#@ @source: @#@"Please select in Calling section how you want to make your call."@#@
// @key: @#@"[callingSettingsMessages.permissionChanged]"@#@ @source: @#@"Your permissions have been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"[callingSettingsMessages.phoneNumberChanged]"@#@ @source: @#@"Your phone number information has been changed recently. Please go to {link} to check your Calling options."@#@
// @key: @#@"link"@#@ @source: @#@"Settings > Calling"@#@
// @key: @#@"[callingSettingsMessages.webphonePermissionRemoved]"@#@ @source: @#@"Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator."@#@
// @key: @#@"[callingSettingsMessages.emergencyCallingNotAvailable]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number."@#@


/***/ }),

/***/ 1069:
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

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"[regionSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[regionSettingsMessages.dialingPlansChanged]"@#@ @source: @#@"The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}."@#@
// @key: @#@"regionSettings"@#@ @source: @#@"region settings"@#@
// @key: @#@"[regionSettingsMessages.areaCodeInvalid]"@#@ @source: @#@"Please enter a valid area code."@#@


/***/ }),

/***/ 1080:
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

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Send Success.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Something went wrong with sending the message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Phone Number Validation Error.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Please enter the text to be sent.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'You do not have permission to send messages.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'You must select a number from your phone numbers to send'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Please enter a valid receiver number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Text is too long, 1000 limit'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Recipient number is invalid'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Dialling emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Cannot send to an extension number with main phone number. If you want to sent to a extension number, please just enter the extension number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalids, 'You don\'t have valid phone number to send SMS from. Please contact your account administrator.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Sending SMS to international phone numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'area code'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'A valid Phone Number is required to send text messages to recipients outside of your company. Please contact your Administrator to add a direct number to your account.'), _messageSenderMessage);

// @key: @#@"[messageSenderMessages.sendSuccess]"@#@ @source: @#@"Send Success."@#@
// @key: @#@"[messageSenderMessages.sendError]"@#@ @source: @#@"Something wrong happened when send message."@#@
// @key: @#@"[messageSenderMessages.numberValidateError]"@#@ @source: @#@"Phone Number Validate Error."@#@
// @key: @#@"[messageSenderMessages.textEmpty]"@#@ @source: @#@"Please enter the text to be sent."@#@
// @key: @#@"[messageSenderMessages.noPermission]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[messageSenderMessages.senderEmpty]"@#@ @source: @#@"You must select a number from your phone numbers to send"@#@
// @key: @#@"[messageSenderMessages.noToNumber]"@#@ @source: @#@"Invalid phone number."@#@
// @key: @#@"[messageSenderMessages.recipientsEmpty]"@#@ @source: @#@"Please enter a valid receiver number."@#@
// @key: @#@"[messageSenderMessages.textTooLong]"@#@ @source: @#@"Text is too long, 1000 Limited"@#@
// @key: @#@"[messageSenderMessages.recipientNumberInvalids]"@#@ @source: @#@"Recipient number is invalids"@#@
// @key: @#@"[messageSenderMessages.noAreaCode]"@#@ @source: @#@"Please set {areaCodeLink} to use 7-digit local phone numbers."@#@
// @key: @#@"[messageSenderMessages.specialNumber]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported."@#@
// @key: @#@"[messageSenderMessages.connectFailed]"@#@ @source: @#@"Connection failed. Please try again later."@#@
// @key: @#@"[messageSenderMessages.internalError]"@#@ @source: @#@"Cannot connect due to internal errors. Please try again later."@#@
// @key: @#@"[messageSenderMessages.notAnExtension]"@#@ @source: @#@"The extension number does not exist."@#@
// @key: @#@"[messageSenderMessages.networkError]"@#@ @source: @#@"Cannot connect due to network issues. Please try again later."@#@
// @key: @#@"[messageSenderMessages.senderNumberInvalid]"@#@ @source: @#@"A valid Phone Number is required to send text message to recipients outside of your company. Please contact your Administrator to add a direct number to your account."@#@
// @key: @#@"[messageSenderMessages.notSmsToExtension]"@#@ @source: @#@"Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number."@#@
// @key: @#@"[messageSenderMessages.internationalSMSNotSupported]"@#@ @source: @#@"Sending SMS to international phone number is not supported."@#@
// @key: @#@"areaCode"@#@ @source: @#@"area code"@#@


/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Request limit exceeded. App will resume in {ttl} seconds.'
};

// @key: @#@"rateExceeded"@#@ @source: @#@"Request limit exceeded. App will resume in {ttl} seconds."@#@


/***/ }),

/***/ 1102:
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

// @key: @#@"[connectivityMonitorMessages.disconnected]"@#@ @source: @#@"Network connection is lost."@#@


/***/ }),

/***/ 1113:
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

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Send success.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Calling with browser is only supported on Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'A maximum of 5 web phones could be registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'Your extension is currently not allowed to make outbound calls with browser. Please contact your account representative for an upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'You do not have permission to send messages.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Web phone registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'Cannot send call to voicemail due to internal error'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'Call cannot be muted at the moment.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'Call cannot be held at the moment.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'Cannot flip the call. Please try again later.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'You cannot record the call at the moment. Error code: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'Sorry, your account does not have the feature to record a call. Please contact your account administrator.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'Cannot transfer the call. Please try again later.'), _webphoneErrors$conne);

// @key: @#@"[webphoneErrors.connectFailed]"@#@ @source: @#@"Connect with web phone server failed."@#@
// @key: @#@"[webphoneErrors.connected]"@#@ @source: @#@"Web phone registered."@#@
// @key: @#@"[webphoneErrors.browserNotSupported]"@#@ @source: @#@"Calling with browser is only supported on Chrome."@#@
// @key: @#@"[webphoneErrors.webphoneCountOverLimit]"@#@ @source: @#@"A maximum of 5 web phones could be registered."@#@
// @key: @#@"[webphoneErrors.notOutboundCallWithoutDL]"@#@ @source: @#@"Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade."@#@
// @key: @#@"[webphoneErrors.getSipProvisionError]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[webphoneErrors.toVoiceMailError]"@#@ @source: @#@"Cannot send call to voicemail due to internal error"@#@
// @key: @#@"[webphoneErrors.muteError]"@#@ @source: @#@"Call cannot be muted at the moment."@#@
// @key: @#@"[webphoneErrors.holdError]"@#@ @source: @#@"Call cannot be hold at the moment."@#@
// @key: @#@"[webphoneErrors.flipError]"@#@ @source: @#@"Cannot flip the call. Please try again later."@#@
// @key: @#@"[webphoneErrors.recordError]"@#@ @source: @#@"You cannot record the call at the moment. Error code: {errorCode}"@#@
// @key: @#@"[webphoneErrors.recordDisabled]"@#@ @source: @#@"Sorry, your account does not have the feature to record a call. Please contact your account administrator."@#@
// @key: @#@"[webphoneErrors.transferError]"@#@ @source: @#@"Cannot transfer the call. Please try again later."@#@


/***/ }),

/***/ 1125:
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

// @key: @#@"[permissionMessages.invalidTier]"@#@ @source: @#@"Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition."@#@


/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Sign In',
  version: 'Version'
};

// @key: @#@"loginButton"@#@ @source: @#@"Sign In"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@


/***/ }),

/***/ 1147:
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
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} for Desktop'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'My {brand} Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Other Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Custom Phone'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Make my calls using'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Ring me at my location first, then connect the called party'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'My Location'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Prompt me to dial 1 before connecting the call'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Browser'), (0, _defineProperty3.default)(_title$callingOptions, 'save', 'Save'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser + 'Tooltip', 'Use this option to make and receive calls using your computer\'s microphone and speaker.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone + 'Tooltip', 'Use this option to make and receive calls using your {brand} for Desktop app.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip', 'Use this option to make calls using your {brand} phone.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone + 'Tooltip1', 'For the call you make, your {brand} phone will ring first then the party that you called.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip', 'Use this option to make calls using your other phones such as home or mobile phones that you have added in your {brand} Extension.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone + 'Tooltip1', 'For the call you make, this phone will ring first then the party that you called.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip', 'Use this option to make calls using any phone of your choice by entering a valid phone number in the field below.'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone + 'Tooltip1', 'For the call you make, this phone will ring first then the party that you called.'), _title$callingOptions);

// @key: @#@"title"@#@ @source: @#@"Calling"@#@
// @key: @#@"[callingOptions.softphone]"@#@ @source: @#@"{brand} for Desktop"@#@
// @key: @#@"[callingOptions.myphone]"@#@ @source: @#@"My {brand} Phone"@#@
// @key: @#@"[callingOptions.otherphone]"@#@ @source: @#@"Other Phone"@#@
// @key: @#@"[callingOptions.customphone]"@#@ @source: @#@"Custom Phone"@#@
// @key: @#@"[callingOptions.browser]"@#@ @source: @#@"Browser"@#@
// @key: @#@"makeCallsWith"@#@ @source: @#@"Make my calls with"@#@
// @key: @#@"ringoutHint"@#@ @source: @#@"Ring me at my location first, then connect the called party"@#@
// @key: @#@"myLocationLabel"@#@ @source: @#@"My Location"@#@
// @key: @#@"press1ToStartCallLabel"@#@ @source: @#@"Prompt me to dial 1 before connecting the call"@#@
// @key: @#@"[`${callingOptions.browser}Tooltip`]"@#@ @source: @#@"Use this option to make and receive calls using your computer’s microphone and speaker."@#@
// @key: @#@"[`${callingOptions.softphone}Tooltip`]"@#@ @source: @#@"Use this option to make and receive calls using your {brand} for Desktop app."@#@
// @key: @#@"[`${callingOptions.myphone}Tooltip`]"@#@ @source: @#@"Use this option to make calls using your {brand} phone."@#@
// @key: @#@"[`${callingOptions.myphone}Tooltip1`]"@#@ @source: @#@"For the call you make, your {brand} phone will ring first then the party you called."@#@
// @key: @#@"[`${callingOptions.otherphone}Tooltip`]"@#@ @source: @#@"Use this option to make calls using your other phones such as home or cell phones that you have added in your {brand} Extension."@#@
// @key: @#@"[`${callingOptions.otherphone}Tooltip1`]"@#@ @source: @#@"For the call you make, this phone will ring first then the party you called."@#@
// @key: @#@"[`${callingOptions.customphone}Tooltip`]"@#@ @source: @#@"Use this option to make calls using any phone of your choice by entering a valid phone number in the field below."@#@
// @key: @#@"[`${callingOptions.customphone}Tooltip1`]"@#@ @source: @#@"For the call you make, this phone will ring first then the party you called."@#@


/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Save'
};


/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Region',
  NAOnlyMessage: 'Please set your area code. This will be used for local dialling.',
  MultiWithNAMessage: 'Please set the country and area code for your region. This will be used for local dialling and phone number formatting.',
  MultiWithoutNAMessage: 'Please select which country you are located in. This will be used for local dialling and phone number formatting.',
  country: 'Country',
  areaCode: 'Area Code',
  areaCodePlaceholder: 'Enter Area Code',
  save: 'Save'
};

// @key: @#@"title"@#@ @source: @#@"Region"@#@
// @key: @#@"NAOnlyMessage"@#@ @source: @#@"Please set your area code. This will be used for local dialing."@#@
// @key: @#@"MultiWithNAMessage"@#@ @source: @#@"Please set the country and area code for your region. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"MultiWithoutNAMessage"@#@ @source: @#@"Please select the country you locate in. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"country"@#@ @source: @#@"Country"@#@
// @key: @#@"areaCode"@#@ @source: @#@"Area Code"@#@
// @key: @#@"areaCodePlaceholder"@#@ @source: @#@"Enter Area Code"@#@


/***/ }),

/***/ 1180:
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
  PR: 'Puerto Rico'
};

// @key: @#@"419"@#@ @source: @#@"Latin America"@#@
// @key: @#@"AR"@#@ @source: @#@"Argentina"@#@
// @key: @#@"AT"@#@ @source: @#@"Austria"@#@
// @key: @#@"BH"@#@ @source: @#@"Bahrain"@#@
// @key: @#@"BR"@#@ @source: @#@"Brazil"@#@
// @key: @#@"BG"@#@ @source: @#@"Bulgaria"@#@
// @key: @#@"CA"@#@ @source: @#@"Canada"@#@
// @key: @#@"CL"@#@ @source: @#@"Chile"@#@
// @key: @#@"CN"@#@ @source: @#@"China"@#@
// @key: @#@"HR"@#@ @source: @#@"Croatia"@#@
// @key: @#@"CY"@#@ @source: @#@"Cyprus"@#@
// @key: @#@"CZ"@#@ @source: @#@"Czech Republic"@#@
// @key: @#@"DK"@#@ @source: @#@"Denmark"@#@
// @key: @#@"DO"@#@ @source: @#@"Dominican Republic"@#@
// @key: @#@"EE"@#@ @source: @#@"Estonia"@#@
// @key: @#@"FI"@#@ @source: @#@"Finland"@#@
// @key: @#@"FR"@#@ @source: @#@"France"@#@
// @key: @#@"DE"@#@ @source: @#@"Germany"@#@
// @key: @#@"HK"@#@ @source: @#@"Hong Kong"@#@
// @key: @#@"HU"@#@ @source: @#@"Hungary"@#@
// @key: @#@"IE"@#@ @source: @#@"Ireland"@#@
// @key: @#@"IL"@#@ @source: @#@"Israel"@#@
// @key: @#@"IN"@#@ @source: @#@"India"@#@
// @key: @#@"IT"@#@ @source: @#@"Italy"@#@
// @key: @#@"JP"@#@ @source: @#@"Japan"@#@
// @key: @#@"LV"@#@ @source: @#@"Latvia"@#@
// @key: @#@"LT"@#@ @source: @#@"Lithuania"@#@
// @key: @#@"LU"@#@ @source: @#@"Luxembourg"@#@
// @key: @#@"MY"@#@ @source: @#@"Malaysia"@#@
// @key: @#@"MX"@#@ @source: @#@"Mexico"@#@
// @key: @#@"NL"@#@ @source: @#@"Netherlands"@#@
// @key: @#@"NO"@#@ @source: @#@"Norway"@#@
// @key: @#@"PA"@#@ @source: @#@"Panama"@#@
// @key: @#@"PH"@#@ @source: @#@"Philippines"@#@
// @key: @#@"PL"@#@ @source: @#@"Poland"@#@
// @key: @#@"PT"@#@ @source: @#@"Portugal"@#@
// @key: @#@"RO"@#@ @source: @#@"Romania"@#@
// @key: @#@"SK"@#@ @source: @#@"Slovakia"@#@
// @key: @#@"SI"@#@ @source: @#@"Slovenia"@#@
// @key: @#@"ES"@#@ @source: @#@"Spain"@#@
// @key: @#@"SE"@#@ @source: @#@"Sweden"@#@
// @key: @#@"CH"@#@ @source: @#@"Switzerland"@#@
// @key: @#@"TR"@#@ @source: @#@"Turkey"@#@
// @key: @#@"GB"@#@ @source: @#@"United Kingdom"@#@
// @key: @#@"AU"@#@ @source: @#@"Australia"@#@
// @key: @#@"GE"@#@ @source: @#@"Georgia"@#@
// @key: @#@"ID"@#@ @source: @#@"Indonesia"@#@
// @key: @#@"KE"@#@ @source: @#@"Kenya"@#@
// @key: @#@"NG"@#@ @source: @#@"Nigeria"@#@
// @key: @#@"PK"@#@ @source: @#@"Pakistan"@#@
// @key: @#@"ZA"@#@ @source: @#@"South Africa"@#@
// @key: @#@"KR"@#@ @source: @#@"South Korea"@#@
// @key: @#@"SG"@#@ @source: @#@"Singapore"@#@
// @key: @#@"TW"@#@ @source: @#@"Taiwan"@#@
// @key: @#@"UA"@#@ @source: @#@"Ukraine"@#@
// @key: @#@"US"@#@ @source: @#@"United States"@#@
// @key: @#@"VN"@#@ @source: @#@"Vietnam"@#@
// @key: @#@"BE"@#@ @source: @#@"Belgium"@#@
// @key: @#@"BJ"@#@ @source: @#@"Benin"@#@
// @key: @#@"SV"@#@ @source: @#@"El Salvador"@#@
// @key: @#@"GH"@#@ @source: @#@"Ghana"@#@
// @key: @#@"GR"@#@ @source: @#@"Greece"@#@
// @key: @#@"GN"@#@ @source: @#@"Guinea"@#@
// @key: @#@"NZ"@#@ @source: @#@"New Zealand"@#@
// @key: @#@"PE"@#@ @source: @#@"Peru"@#@
// @key: @#@"PR"@#@ @source: @#@"Puerto Rico"@#@


/***/ }),

/***/ 1191:
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

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Business Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Extension Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Home Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Mobile Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Unknown Phone Type'), _phoneTypes$business$);

// @key: @#@"[phoneTypes.business]"@#@ @source: @#@"Business Phone"@#@
// @key: @#@"[phoneTypes.extension]"@#@ @source: @#@"Extension Phone"@#@
// @key: @#@"[phoneTypes.home]"@#@ @source: @#@"Home Phone"@#@
// @key: @#@"[phoneTypes.mobile]"@#@ @source: @#@"Mobile Phone"@#@
// @key: @#@"[phoneTypes.phone]"@#@ @source: @#@"Phone"@#@
// @key: @#@"[phoneTypes.unknown]"@#@ @source: @#@"Unknown Phone Type"@#@
// @key: @#@"[phoneTypes.company]"@#@ @source: @#@"Company Phone"@#@
// @key: @#@"[phoneTypes.direct]"@#@ @source: @#@"Direct Phone"@#@


/***/ }),

/***/ 1202:
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

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Account'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contact'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Opportunity'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'System User'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), _phoneSources$account);

// @key: @#@"[phoneSources.account]"@#@ @source: @#@"Account"@#@
// @key: @#@"[phoneSources.contact]"@#@ @source: @#@"Contact"@#@
// @key: @#@"[phoneSources.rcContact]"@#@ @source: @#@"{brand}"@#@
// @key: @#@"[phoneSources.lead]"@#@ @source: @#@"Lead"@#@
// @key: @#@"[phoneSources.opportunity]"@#@ @source: @#@"Opportunity"@#@
// @key: @#@"[phoneSources.systemUser]"@#@ @source: @#@"System User"@#@


/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name'
};

// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@


/***/ }),

/***/ 1224:
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
  from: 'From',
  AdditionalCompanyNumber: 'Company',
  ForwardedCompanyNumber: 'Forwarded'
};

// @key: @#@"DirectNumber"@#@ @source: @#@"Direct"@#@
// @key: @#@"MainCompanyNumber"@#@ @source: @#@"Main"@#@
// @key: @#@"CompanyNumber"@#@ @source: @#@"Company"@#@
// @key: @#@"CompanyFaxNumber"@#@ @source: @#@"Fax"@#@
// @key: @#@"Blocked"@#@ @source: @#@"Blocked"@#@
// @key: @#@"AdditionalCompanyNumber"@#@ @source: @#@"Company"@#@
// @key: @#@"ForwardedCompanyNumber"@#@ @source: @#@"Forwarded"@#@
// @key: @#@"from"@#@ @source: @#@"From"@#@


/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'From',
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name',
  typeMessage: 'Type message...',
  send: 'Send'
};

// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@
// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1246:
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

// @key: @#@"logging"@#@ @source: @#@"Logging..."@#@
// @key: @#@"logCall"@#@ @source: @#@"Log Call"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"select"@#@ @source: @#@"Select a matching record"@#@
// @key: @#@"OnHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"Ringing"@#@ @source: @#@"Ringing"@#@
// @key: @#@"CallConnected"@#@ @source: @#@"Call Connected"@#@
// @key: @#@"unknownUser"@#@ @source: @#@"Unknown User"@#@
// @key: @#@"unknownNumber"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"unavailable"@#@ @source: @#@"Unavailable"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@


/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  send: 'Send',
  typeMessage: 'Type message...'
};

// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'New conference',
  dialInNumber: 'Dial-in number',
  host: 'Host',
  participants: 'Participants',
  internationalParticipants: 'International participants',
  internationalNumbersHeader: 'Select International dial-in numbers',
  search: 'Search...',
  inviteWithText: 'Invite by text',
  inviteText: 'Please join the RingCentral conference. \n\nDial-In Numbers: {dialInNumber} \n\n{internationals} \nParticipant Access: {participantCode} \n\nNeed an international dial-in phone number? Please visit http://www.ringcentral.com/conferencing \n\nThis conference call is brought to you by RingCentral Conferencing.'
};

// @key: @#@"newConference"@#@ @source: @#@"New Conference"@#@
// @key: @#@"dialInNumber"@#@ @source: @#@"Dial-in Number"@#@
// @key: @#@"host"@#@ @source: @#@"Host"@#@
// @key: @#@"participants"@#@ @source: @#@"Participants"@#@
// @key: @#@"internationalParticipants"@#@ @source: @#@"International participants"@#@
// @key: @#@"internationalNumbersHeader"@#@ @source: @#@"Select International Dial-in Numbers"@#@
// @key: @#@"search"@#@ @source: @#@"Search..."@#@
// @key: @#@"inviteWithText"@#@ @source: @#@"Invite with Text"@#@
// @key: @#@"inviteText"@#@ @source: @#@"Please join the RingCentral conference.\n\nDial-In Numbers: {dialInNumber} \n\n{internationals} \nParticipant Access: {participantCode} \n\nNeed an international dial-in phone number? Please visit http://www.ringcentral.com/conferencing \n\nThis conference call is brought to you by RingCentral Conferencing."@#@


/***/ }),

/***/ 1280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  confirm: 'Confirm'
};

// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"confirm"@#@ @source: @#@"Confirm"@#@


/***/ }),

/***/ 1291:
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

// @key: @#@"account"@#@ @source: @#@"Account"@#@
// @key: @#@"contact"@#@ @source: @#@"Contact"@#@
// @key: @#@"lead"@#@ @source: @#@"Lead"@#@
// @key: @#@"chooseEntity"@#@ @source: @#@"Please select entity type"@#@
// @key: @#@"create"@#@ @source: @#@"Create"@#@


/***/ }),

/***/ 1302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messageTypes = __webpack_require__(367);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  addLog: 'Log',
  editLog: 'Edit Log',
  viewDetails: 'View Details',
  addEntity: 'Create New',
  call: 'Call',
  conversation: 'Conversation',
  groupConversation: 'Group Conversation'
};

// @key: @#@"addLog"@#@ @source: @#@"Log"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@
// @key: @#@"addEntity"@#@ @source: @#@"Create New"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"conversation"@#@ @source: @#@"Conversation"@#@
// @key: @#@"groupConversation"@#@ @source: @#@"Group Conversation"@#@
// @key: @#@"voiceMessage"@#@ @source: @#@"Voice message"@#@
// @key: @#@"[messageTypes.voiceMail]"@#@ @source: @#@"Voice Mail"@#@


/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Loading: 'Loading...',
  search: 'Search...',
  noMessages: 'No messages',
  noSearchResults: 'No matching records found'
};

// @key: @#@"Loading"@#@ @source: @#@"Loading..."@#@
// @key: @#@"search"@#@ @source: @#@"Search..."@#@
// @key: @#@"noMessages"@#@ @source: @#@"No Messages"@#@
// @key: @#@"noSearchResults"@#@ @source: @#@"No matching records found"@#@


/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messageTypes = __webpack_require__(367);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  title: 'Messages'
};

// @key: @#@"title"@#@ @source: @#@"Messages"@#@
// @key: @#@"[messageTypes.all]"@#@ @source: @#@"All"@#@
// @key: @#@"[messageTypes.voiceMail]"@#@ @source: @#@"Voice"@#@
// @key: @#@"[messageTypes.text]"@#@ @source: @#@"Text"@#@
// @key: @#@"[messageTypes.fax]"@#@ @source: @#@"Fax"@#@


/***/ }),

/***/ 1333:
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
  addContact: 'Add contact',
  missedCall: 'Missed',
  inboundCall: 'Inbound',
  outboundCall: 'Outbound',
  from: 'From',
  to: 'To'
};

// @key: @#@"logging"@#@ @source: @#@"Logging..."@#@
// @key: @#@"logCall"@#@ @source: @#@"Log Call"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"select"@#@ @source: @#@"Select a matching record"@#@
// @key: @#@"OnHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"Ringing"@#@ @source: @#@"Ringing"@#@
// @key: @#@"CallConnected"@#@ @source: @#@"Call Connected"@#@
// @key: @#@"unknownUser"@#@ @source: @#@"Unknown User"@#@
// @key: @#@"unknownNumber"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"unavailable"@#@ @source: @#@"Unavailable"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@
// @key: @#@"addEntity"@#@ @source: @#@"Create New"@#@
// @key: @#@"addLog"@#@ @source: @#@"Log"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"addContact"@#@ @source: @#@"Add Contact"@#@
// @key: @#@"missedCall"@#@ @source: @#@"Missed"@#@
// @key: @#@"inboundCall"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outboundCall"@#@ @source: @#@"Outbound"@#@
// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@


/***/ }),

/***/ 1344:
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

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"currentCall"@#@ @source: @#@"Current Call"@#@
// @key: @#@"ringCall"@#@ @source: @#@"Ringing Call"@#@
// @key: @#@"onHoldCall"@#@ @source: @#@"Call on Hold"@#@
// @key: @#@"otherDeviceCall"@#@ @source: @#@"Ongoing calls on my other devices"@#@


/***/ }),

/***/ 1355:
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

// @key: @#@"logging"@#@ @source: @#@"Logging..."@#@
// @key: @#@"logCall"@#@ @source: @#@"Log Call"@#@
// @key: @#@"editLog"@#@ @source: @#@"Edit Log"@#@
// @key: @#@"select"@#@ @source: @#@"Select a matching record"@#@
// @key: @#@"OnHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"Ringing"@#@ @source: @#@"Ringing"@#@
// @key: @#@"CallConnected"@#@ @source: @#@"Call Connected"@#@
// @key: @#@"unknownUser"@#@ @source: @#@"Unknown User"@#@
// @key: @#@"unknownNumber"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"unavailable"@#@ @source: @#@"Unavailable"@#@
// @key: @#@"viewDetails"@#@ @source: @#@"View Details"@#@
// @key: @#@"addEntity"@#@ @source: @#@"Create New"@#@
// @key: @#@"addLog"@#@ @source: @#@"Log"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"missedCall"@#@ @source: @#@"Missed"@#@
// @key: @#@"inboundCall"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outboundCall"@#@ @source: @#@"Outbound"@#@


/***/ }),

/***/ 1366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  noRecords: 'No records'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"noRecords"@#@ @source: @#@"No results found"@#@


/***/ }),

/***/ 1377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'History'
};

// @key: @#@"title"@#@ @source: @#@"History"@#@


/***/ }),

/***/ 1388:
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

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"customNumber"@#@ @source: @#@"Custom number"@#@


/***/ }),

/***/ 1399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  reply: 'Reply',
  onMyWay: 'On my way',
  customMessage: 'Custom message',
  callMeBackIn: 'Call me back in',
  willCallYouBackIn: 'Will call you back in',
  min: 'minutes',
  hours: 'hours',
  days: 'days'
};

// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"onMyWay"@#@ @source: @#@"On my way"@#@
// @key: @#@"customMessage"@#@ @source: @#@"Custom Message"@#@
// @key: @#@"callMeBackIn"@#@ @source: @#@"Call me back in"@#@
// @key: @#@"willCallYouBackIn"@#@ @source: @#@"Will call you back in"@#@
// @key: @#@"min"@#@ @source: @#@"min."@#@
// @key: @#@"hours"@#@ @source: @#@"hours"@#@
// @key: @#@"days"@#@ @source: @#@"days"@#@


/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Forward',
  reply: 'Reply',
  ignore: 'Ignore',
  toVoicemail: 'To voicemail',
  answer: 'Answer',
  answerAndEnd: 'Answer & end',
  answerAndHold: 'Answer & hold'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@
// @key: @#@"toVoicemail"@#@ @source: @#@"To Voicemail"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"answerAndEnd"@#@ @source: @#@"Answer & End"@#@
// @key: @#@"answerAndHold"@#@ @source: @#@"Answer & Hold"@#@


/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Unknown',
  anonymous: 'Anonymous',
  activeCall: 'Active call'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1432:
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

// @key: @#@"hide"@#@ @source: @#@"Hide"@#@
// @key: @#@"end"@#@ @source: @#@"End"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@


/***/ }),

/***/ 1443:
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

// @key: @#@"unmute"@#@ @source: @#@"Unmute"@#@
// @key: @#@"mute"@#@ @source: @#@"Mute"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@
// @key: @#@"hold"@#@ @source: @#@"Hold"@#@
// @key: @#@"onHold"@#@ @source: @#@"On Hold"@#@
// @key: @#@"park"@#@ @source: @#@"Park"@#@
// @key: @#@"stopRecord"@#@ @source: @#@"Stop"@#@
// @key: @#@"record"@#@ @source: @#@"Record"@#@
// @key: @#@"add"@#@ @source: @#@"Add"@#@
// @key: @#@"transfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@


/***/ }),

/***/ 1455:
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

// @key: @#@"flipHeader"@#@ @source: @#@"Flip Call to..."@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@
// @key: @#@"complete"@#@ @source: @#@"Complete Flip"@#@


/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To:',
  transferTo: 'Transfer to',
  blindTransfer: 'Transfer',
  enterNameOrNumber: 'Enter number'
};

// @key: @#@"to"@#@ @source: @#@"To:"@#@
// @key: @#@"transferTo"@#@ @source: @#@"Transfer to"@#@
// @key: @#@"blindTransfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number"@#@


/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Unknown',
  anonymous: 'Anonymous',
  activeCalls: 'Active calls'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCalls"@#@ @source: @#@"Active Calls"@#@


/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Active call'
};

// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'No records found'
};

// @key: @#@"noContacts"@#@ @source: @#@"No records found"@#@


/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Search...'
};

// @key: @#@"searchPlaceholder"@#@ @source: @#@"Search..."@#@


/***/ }),

/***/ 1521:
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

// @key: @#@"all"@#@ @source: @#@"All"@#@
// @key: @#@"company"@#@ @source: @#@"Company"@#@
// @key: @#@"personal"@#@ @source: @#@"Personal"@#@


/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Contact details'
};

// @key: @#@"contactDetails"@#@ @source: @#@"Contact Details"@#@


/***/ }),

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  google: 'Google'
};

/***/ }),

/***/ 1564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@


/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.',
  inBound: 'Inbound',
  outBound: 'Outbound',
  missed: 'Missed call'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@
// @key: @#@"inBound"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outBound"@#@ @source: @#@"Outbound"@#@
// @key: @#@"missed"@#@ @source: @#@"Missed Call"@#@


/***/ }),

/***/ 1586:
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

// @key: @#@"recentActivities"@#@ @source: @#@"Recent Activities"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"fax"@#@ @source: @#@"Fax"@#@
// @key: @#@"voicemail"@#@ @source: @#@"Voicemail"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"gmail"@#@ @source: @#@"Gmail"@#@

/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'No recent records found.'
};

/***/ }),

/***/ 1609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Offline Mode'
};

// @key: @#@"offlineMode"@#@ @source: @#@"Offline Mode"@#@


/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'End User Licence Agreement',
  serviceTerms: 'Service Terms'
};

// @key: @#@"eula"@#@ @source: @#@"End User License Agreement"@#@
// @key: @#@"serviceTerms"@#@ @source: @#@"Service Terms"@#@


/***/ }),

/***/ 1631:
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

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Available'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.bus + _dndStatus2.default.takeAllCalls, 'Busy'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptDepartmentCalls, 'Busy'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptAnyCalls, 'Do not Disturb'), _presenceStatus$avail);

// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[presenceStatus.busy+dndStatus.takeAllCalls]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.busy+dndStatus.doNotAcceptDepartmentCalls]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.busy+dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@


/***/ }),

/***/ 1642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Status',
  acceptQueueCalls: 'Accept call queue calls'
};

// @key: @#@"status"@#@ @source: @#@"Status"@#@
// @key: @#@"acceptQueueCalls"@#@ @source: @#@"Accept call queue calls"@#@


/***/ }),

/***/ 1653:
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

// @key: @#@"en"@#@ @source: @#@"English"@#@
// @key: @#@"ja"@#@ @source: @#@"Japanese"@#@
// @key: @#@"fr"@#@ @source: @#@"French"@#@
// @key: @#@"de"@#@ @source: @#@"Deutsch"@#@
// @key: @#@"es"@#@ @source: @#@"Spanish"@#@
// @key: @#@"it"@#@ @source: @#@"Italian"@#@
// @key: @#@"pt"@#@ @source: @#@"Portuguese"@#@


/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Region',
  calling: 'Calling',
  logout: 'Log out',
  version: 'Version',
  settings: 'Settings',
  clickToDial: 'Click to Dial',
  autoCreateLog: 'Auto-create Call Log',
  clickToSMS: 'Click to SMS',
  clickToDialSMS: 'Click to Dial/SMS',
  autoCreateSMSLog: 'Auto-create SMS log',
  autoLogCalls: 'Auto log calls',
  autoLogSMS: 'Auto log SMS'
};

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"calling"@#@ @source: @#@"Calling"@#@
// @key: @#@"logout"@#@ @source: @#@"Logout"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@
// @key: @#@"settings"@#@ @source: @#@"Settings"@#@
// @key: @#@"clickToDial"@#@ @source: @#@"Click to Dial"@#@
// @key: @#@"autoCreateLog"@#@ @source: @#@"Auto-create Call Log"@#@
// @key: @#@"autoCreateSMSLog"@#@ @source: @#@"Auto-create SMS Log"@#@
// @key: @#@"autoLogCalls"@#@ @source: @#@"Auto log calls"@#@
// @key: @#@"autoLogSMS"@#@ @source: @#@"Auto log SMS"@#@
// @key: @#@"clickToSMS"@#@ @source: @#@"Click to SMS"@#@
// @key: @#@"clickToDialSMS"@#@ @source: @#@"Click to Dial/SMS"@#@
// @key: @#@"audio"@#@ @source: @#@"Audio"@#@
// @key: @#@"language"@#@ @source: @#@"Language"@#@


/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Authorise',
  authorized: 'Unauthorise',
  unauthorizedTitle: 'Authorised Account',
  tooltip: 'You have authorised RingCentral for Google to access your account '
};

// @key: @#@"unauthorized"@#@ @source: @#@"Authorize"@#@
// @key: @#@"authorized"@#@ @source: @#@"Unauthorize"@#@
// @key: @#@"unauthorizedTitle"@#@ @source: @#@"Authorized Account"@#@
// @key: @#@"tooltip"@#@ @source: @#@"You have authorized RingCentral for Google to access your account "@#@

/***/ }),

/***/ 1686:
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

// @key: @#@"incomingCall"@#@ @source: @#@"Incoming Call From:"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DaHJvbWVBZGFwdGVyL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbEFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzQWxlcnQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQWxlcnQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL2VuLUdCLmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTW9kYWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZUxpc3QvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NZXNzYWdlc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbEl0ZW0vaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbEl0ZW0vaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb250YWluZXJzL0NhbGxIaXN0b3J5UGFnZS9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZvcndhcmRGb3JtL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVwbHlXaXRoTWVzc2FnZS9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0luY29taW5nQ2FsbFBhZC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb250YWluZXJzL0luY29taW5nQ2FsbFBhZ2UvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsRGlhbFBhZC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxQYWQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9GbGlwUGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UcmFuc2ZlclBhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvQ2FsbEN0cmxQYWdlL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvQ2FsbEJhZGdlQ29udGFpbmVyL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29udGFjdExpc3QvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0c1ZpZXcvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29udGFjdERldGFpbHNWaWV3L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFNvdXJjZUZpbHRlci9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUVtYWlscy9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL09mZmxpbmVNb2RlQmFkZ2UvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdWxhL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vZW51bXMvcGhvbmVUeXBlcy5qcz9mNDNmKioqKioqIl0sIm5hbWVzIjpbImMyZFRpdGxlIiwic21zVGl0bGUiLCJpbnRlcm5hbEVycm9yIiwiYWNjZXNzRGVuaWVkIiwic2Vzc2lvbkV4cGlyZWQiLCJub1RvTnVtYmVyIiwibm9BcmVhQ29kZSIsInNwZWNpYWxOdW1iZXIiLCJjb25uZWN0RmFpbGVkIiwibm90QW5FeHRlbnNpb24iLCJuZXR3b3JrRXJyb3IiLCJub1JpbmdvdXRFbmFibGUiLCJzYXZlU3VjY2VzcyIsInNhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZSIsImZpcnN0TG9naW4iLCJmaXJzdExvZ2luT3RoZXIiLCJwZXJtaXNzaW9uQ2hhbmdlZCIsInBob25lTnVtYmVyQ2hhbmdlZCIsIndlYnBob25lUGVybWlzc2lvblJlbW92ZWQiLCJlbWVyZ2VuY3lDYWxsaW5nTm90QXZhaWxhYmxlIiwicmVnaW9uIiwiZGlhbGluZ1BsYW5zQ2hhbmdlZCIsImFyZWFDb2RlSW52YWxpZCIsInNlbmRTdWNjZXNzIiwic2VuZEVycm9yIiwibnVtYmVyVmFsaWRhdGVFcnJvciIsInRleHRFbXB0eSIsIm5vUGVybWlzc2lvbiIsInNlbmRlckVtcHR5IiwicmVjaXBpZW50c0VtcHR5IiwidGV4dFRvb0xvbmciLCJyZWNpcGllbnROdW1iZXJJbnZhbGlkcyIsIm5vdFNtc1RvRXh0ZW5zaW9uIiwic2VuZGVyTnVtYmVySW52YWxpZHMiLCJpbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkIiwic2VuZGVyTnVtYmVySW52YWxpZCIsInJhdGVFeGNlZWRlZCIsImRpc2Nvbm5lY3RlZCIsImJyb3dzZXJOb3RTdXBwb3J0ZWQiLCJ3ZWJwaG9uZUNvdW50T3ZlckxpbWl0Iiwibm90T3V0Ym91bmRDYWxsV2l0aG91dERMIiwiZ2V0U2lwUHJvdmlzaW9uRXJyb3IiLCJjb25uZWN0ZWQiLCJ0b1ZvaWNlTWFpbEVycm9yIiwibXV0ZUVycm9yIiwiaG9sZEVycm9yIiwiZmxpcEVycm9yIiwicmVjb3JkRXJyb3IiLCJyZWNvcmREaXNhYmxlZCIsInRyYW5zZmVyRXJyb3IiLCJpbnZhbGlkVGllciIsImxvZ2luQnV0dG9uIiwidmVyc2lvbiIsInRpdGxlIiwic29mdHBob25lIiwibXlwaG9uZSIsIm90aGVycGhvbmUiLCJjdXN0b21waG9uZSIsImJyb3dzZXIiLCJzYXZlIiwiTkFPbmx5TWVzc2FnZSIsIk11bHRpV2l0aE5BTWVzc2FnZSIsIk11bHRpV2l0aG91dE5BTWVzc2FnZSIsImNvdW50cnkiLCJhcmVhQ29kZSIsImFyZWFDb2RlUGxhY2Vob2xkZXIiLCJBUiIsIkFUIiwiQkgiLCJCUiIsIkJHIiwiQ0EiLCJDTCIsIkNOIiwiSFIiLCJDWSIsIkNaIiwiREsiLCJETyIsIkVFIiwiRkkiLCJGUiIsIkRFIiwiSEsiLCJIVSIsIklFIiwiSUwiLCJJTiIsIklUIiwiSlAiLCJMViIsIkxUIiwiTFUiLCJNWSIsIk1YIiwiTkwiLCJOTyIsIlBBIiwiUEgiLCJQTCIsIlBUIiwiUk8iLCJTSyIsIlNJIiwiRVMiLCJTRSIsIkNIIiwiVFIiLCJHQiIsIkFVIiwiR0UiLCJJRCIsIktFIiwiTkciLCJQSyIsIlpBIiwiS1IiLCJTRyIsIlRXIiwiVUEiLCJVUyIsIlZOIiwiQkUiLCJCSiIsIlNWIiwiR0giLCJHUiIsIkdOIiwiTloiLCJQRSIsIlBSIiwiYnVzaW5lc3MiLCJleHRlbnNpb24iLCJob21lIiwibW9iaWxlIiwicGhvbmUiLCJ1bmtub3duIiwiYWNjb3VudCIsImNvbnRhY3QiLCJsZWFkIiwib3Bwb3J0dW5pdHkiLCJzeXN0ZW1Vc2VyIiwicmNDb250YWN0IiwidG8iLCJlbnRlck5hbWVPck51bWJlciIsIkRpcmVjdE51bWJlciIsIk1haW5Db21wYW55TnVtYmVyIiwiQ29tcGFueU51bWJlciIsIkNvbXBhbnlGYXhOdW1iZXIiLCJCbG9ja2VkIiwiZnJvbSIsIkFkZGl0aW9uYWxDb21wYW55TnVtYmVyIiwiRm9yd2FyZGVkQ29tcGFueU51bWJlciIsInR5cGVNZXNzYWdlIiwic2VuZCIsImxvZ2dpbmciLCJsb2dDYWxsIiwiZWRpdExvZyIsInNlbGVjdCIsIk9uSG9sZCIsIlJpbmdpbmciLCJDYWxsQ29ubmVjdGVkIiwidW5rbm93blVzZXIiLCJ1bmtub3duTnVtYmVyIiwidW5hdmFpbGFibGUiLCJ2aWV3RGV0YWlscyIsIm5ld0NvbmZlcmVuY2UiLCJkaWFsSW5OdW1iZXIiLCJob3N0IiwicGFydGljaXBhbnRzIiwiaW50ZXJuYXRpb25hbFBhcnRpY2lwYW50cyIsImludGVybmF0aW9uYWxOdW1iZXJzSGVhZGVyIiwic2VhcmNoIiwiaW52aXRlV2l0aFRleHQiLCJpbnZpdGVUZXh0IiwiY2FuY2VsIiwiY29uZmlybSIsImNob29zZUVudGl0eSIsImNyZWF0ZSIsImFkZExvZyIsImFkZEVudGl0eSIsImNhbGwiLCJjb252ZXJzYXRpb24iLCJncm91cENvbnZlcnNhdGlvbiIsIkxvYWRpbmciLCJub01lc3NhZ2VzIiwibm9TZWFyY2hSZXN1bHRzIiwidGV4dCIsImFkZENvbnRhY3QiLCJtaXNzZWRDYWxsIiwiaW5ib3VuZENhbGwiLCJvdXRib3VuZENhbGwiLCJub0FjdGl2ZUNhbGxzIiwiY3VycmVudENhbGwiLCJyaW5nQ2FsbCIsIm9uSG9sZENhbGwiLCJvdGhlckRldmljZUNhbGwiLCJub1JlY29yZHMiLCJmb3J3YXJkIiwiY3VzdG9tTnVtYmVyIiwicmVwbHkiLCJvbk15V2F5IiwiY3VzdG9tTWVzc2FnZSIsImNhbGxNZUJhY2tJbiIsIndpbGxDYWxsWW91QmFja0luIiwibWluIiwiaG91cnMiLCJkYXlzIiwiaWdub3JlIiwidG9Wb2ljZW1haWwiLCJhbnN3ZXIiLCJhbnN3ZXJBbmRFbmQiLCJhbnN3ZXJBbmRIb2xkIiwiYW5vbnltb3VzIiwiYWN0aXZlQ2FsbCIsImhpZGUiLCJlbmQiLCJrZXlwYWQiLCJ1bm11dGUiLCJtdXRlIiwiaG9sZCIsIm9uSG9sZCIsInBhcmsiLCJzdG9wUmVjb3JkIiwicmVjb3JkIiwiYWRkIiwidHJhbnNmZXIiLCJmbGlwIiwiZmxpcEhlYWRlciIsImNvbXBsZXRlIiwidHJhbnNmZXJUbyIsImJsaW5kVHJhbnNmZXIiLCJhY3RpdmVDYWxscyIsIm5vQ29udGFjdHMiLCJzZWFyY2hQbGFjZWhvbGRlciIsImFsbCIsImNvbXBhbnkiLCJwZXJzb25hbCIsImNvbnRhY3REZXRhaWxzIiwiZ29vZ2xlIiwiaW5Cb3VuZCIsIm91dEJvdW5kIiwibWlzc2VkIiwicmVjZW50QWN0aXZpdGllcyIsImZheCIsInZvaWNlbWFpbCIsImdtYWlsIiwib2ZmbGluZU1vZGUiLCJldWxhIiwic2VydmljZVRlcm1zIiwiYXZhaWxhYmxlIiwib2ZmbGluZSIsImJ1cyIsInRha2VBbGxDYWxscyIsImJ1c3kiLCJkb05vdEFjY2VwdERlcGFydG1lbnRDYWxscyIsImRvTm90QWNjZXB0QW55Q2FsbHMiLCJzdGF0dXMiLCJhY2NlcHRRdWV1ZUNhbGxzIiwiZW4iLCJqYSIsImZyIiwiZGUiLCJlcyIsIml0IiwicHQiLCJjYWxsaW5nIiwibG9nb3V0Iiwic2V0dGluZ3MiLCJjbGlja1RvRGlhbCIsImF1dG9DcmVhdGVMb2ciLCJjbGlja1RvU01TIiwiY2xpY2tUb0RpYWxTTVMiLCJhdXRvQ3JlYXRlU01TTG9nIiwiYXV0b0xvZ0NhbGxzIiwiYXV0b0xvZ1NNUyIsInVuYXV0aG9yaXplZCIsImF1dGhvcml6ZWQiLCJ1bmF1dGhvcml6ZWRUaXRsZSIsInRvb2x0aXAiLCJpbmNvbWluZ0NhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2tCQUFlO0FBQ2JBLFlBQVUsbUJBREc7QUFFYkMsWUFBVTtBQUZHLEM7O0FBS2Y7QUFDQSwyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7O29HQUdHLHVCQUFhQyxhLEVBQWdCLDhELHdEQUM3Qix1QkFBYUMsWSxFQUFlLHdDLHdEQUM1Qix1QkFBYUMsYyxFQUFpQixrQzs7QUFHakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7O29HQUdHLHFCQUFXQyxVLEVBQWEsb0Msd0RBQ3hCLHFCQUFXQyxVLEVBQWEsK0Qsd0RBQ3hCLHFCQUFXQyxhLEVBQWdCLGlFLHdEQUMzQixxQkFBV0MsYSxFQUFnQiw0Qyx3REFDM0IscUJBQVdOLGEsRUFBZ0IsZ0Usd0RBQzNCLHFCQUFXTyxjLEVBQWlCLHNDLHdEQUM1QixxQkFBV0MsWSxFQUFlLCtELHdEQUMxQixxQkFBV0MsZSxFQUFrQiwrSyxvRUFDcEIsVyxvRUFDQSxzQzs7QUFHWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOzs7Ozs7b0dBSUcsa0NBQXdCQyxXLEVBQWMsOEIsd0RBQ3RDLGtDQUF3QkMsd0IsRUFBMkIsd0csd0RBQ25ELGtDQUF3QkMsVSxFQUFhLDZOLHdEQUNyQyxrQ0FBd0JDLGUsRUFBa0Isc0Usd0RBQzFDLGtDQUF3QkMsaUIsRUFBb0IsaUcsd0RB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SnNCLEVBS3RCLE9BTHNCLEVBTXRCLFNBTnNCLEVBT3RCLFNBUHNCLEVBUXRCLFFBUnNCLENBQVQsQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjMmRUaXRsZTogJ0NhbGwgd2l0aCB7YnJhbmR9JyxcbiAgc21zVGl0bGU6ICdTTVMgd2l0aCB7YnJhbmR9Jyxcbn07XHJcblxuLy8gQGtleTogQCNAXCJjMmRUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCB3aXRoIHticmFuZH1cIkAjQFxuLy8gQGtleTogQCNAXCJzbXNUaXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiU01TIHdpdGgge2JyYW5kfVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9DaHJvbWVBZGFwdGVyL2kxOG4vZW4tR0IuanMiLCJpbXBvcnQgYXV0aE1lc3NhZ2VzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQXV0aC9hdXRoTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFthdXRoTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl06ICdMb2dpbiBmYWlsZWQgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF06ICdBY2Nlc3MgZGVuaWVkLiBQbGVhc2UgY29udGFjdCBzdXBwb3J0LicsXG4gIFthdXRoTWVzc2FnZXMuc2Vzc2lvbkV4cGlyZWRdOiAnU2Vzc2lvbiBleHBpcmVkLiBQbGVhc2Ugc2lnbiBpbi4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dpbiBmYWlsZWQgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF1cIkAjQCBAc291cmNlOiBAI0BcIkFjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNlc3Npb24gZXhwaXJlZC4gUGxlYXNlIHNpZ24gaW4uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0F1dGhBbGVydC9pMThuL2VuLUdCLmpzIiwiaW1wb3J0IGNhbGxFcnJvcnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjYWxsRXJyb3JzLm5vVG9OdW1iZXJdOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLicsXG4gIFtjYWxsRXJyb3JzLm5vQXJlYUNvZGVdOiAnUGxlYXNlIHNldCB7YXJlYUNvZGVMaW5rfSB0byB1c2UgNy1kaWdpdCBsb2NhbCBwaG9uZSBudW1iZXJzLicsXG4gIFtjYWxsRXJyb3JzLnNwZWNpYWxOdW1iZXJdOiAnRGlhbGxpbmcgZW1lcmdlbmN5IG9yIHNwZWNpYWwgc2VydmljZSBudW1iZXJzIGlzIG5vdCBzdXBwb3J0ZWQuJyxcbiAgW2NhbGxFcnJvcnMuY29ubmVjdEZhaWxlZF06ICdDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbY2FsbEVycm9ycy5pbnRlcm5hbEVycm9yXTogJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW2NhbGxFcnJvcnMubm90QW5FeHRlbnNpb25dOiAnVGhlIGV4dGVuc2lvbiBudW1iZXIgZG9lcyBub3QgZXhpc3QuJyxcbiAgW2NhbGxFcnJvcnMubmV0d29ya0Vycm9yXTogJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbY2FsbEVycm9ycy5ub1JpbmdvdXRFbmFibGVdOiAnWW91ciBleHRlbnNpb24gaXMgYWxsb3dlZCB0byBtYWtlIGNhbGxzIHdpdGggZGVza3RvcCBhcHAuXFxuICAgIElmIHlvdSB3aXNoIHRvIHN3aXRjaCB0byBvdGhlciBjYWxsaW5nIG9wdGlvbnMsXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLicsXG4gIGFyZWFDb2RlOiAnYXJlYSBjb2RlJyxcbiAgdGVsdXM5MTE6ICdFbWVyZ2VuY3kgZGlhbGxpbmcgaXMgbm90IHN1cHBvcnRlZC4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5ub1RvTnVtYmVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vQXJlYUNvZGVdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMuc3BlY2lhbE51bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIkRpYWxpbmcgZW1lcmdlbmN5IG9yIHNwZWNpYWwgc2VydmljZSBudW1iZXJzIGlzIG5vdCBzdXBwb3J0ZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMuY29ubmVjdEZhaWxlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbm5lY3Rpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLmludGVybmFsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vdEFuRXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiVGhlIGV4dGVuc2lvbiBudW1iZXIgZG9lcyBub3QgZXhpc3QuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubmV0d29ya0Vycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIG5ldHdvcmsgaXNzdWVzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vUmluZ291dEVuYWJsZV1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgZXh0ZW5zaW9uIGlzIGFsbG93ZWQgdG8gbWFrZSBjYWxscyB3aXRoIGRlc2t0b3AgYXBwLlxcbiAgICBJZiB5b3Ugd2lzaCB0byBzd2l0Y2ggdG8gb3RoZXIgY2FsbGluZyBvcHRpb25zXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLlwiQCNAXG4vLyBAa2V5OiBAI0BcImFyZWFDb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJhcmVhIGNvZGVcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZWx1czkxMVwiQCNAIEBzb3VyY2U6IEAjQFwiRW1lcmdlbmN5IGRpYWxpbmcgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbEFsZXJ0L2kxOG4vZW4tR0IuanMiLCJpbXBvcnQgY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc106ICdTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZV06ICdTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBtYWtlIHN1cmUgeW91IGhhdmUge2JyYW5kfSBmb3IgRGVza3RvcCBpbnN0YWxsZWQgb24geW91ciBjb21wdXRlci4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbl06ICdQbGVhc2Ugc2VsZWN0IGluIHRoZSBDYWxsaW5nIHNlY3Rpb24gaG93IHlvdSB3YW50IHRvIG1ha2UgeW91ciBjYWxsLiBJZiB5b3UgbGV0IHVzIGtub3cgeW91ciBsb2NhdGlvbiBieSBzcGVjaWZ5aW5nIHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgKGlmIGF2YWlsYWJsZSkgaW4gdGhlIFJlZ2lvbiBzZWN0aW9uLCB5b3UgY2FuIGRvIGxvY2FsIGRpYWxsaW5nIHdpdGggdGhlIGFwcC4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbk90aGVyXTogJ1BsZWFzZSBzZWxlY3QgaW4gdGhlIENhbGxpbmcgc2VjdGlvbiBob3cgeW91IHdhbnQgdG8gbWFrZSB5b3VyIGNhbGwuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBlcm1pc3Npb25DaGFuZ2VkXTogJ1lvdXIgcGVybWlzc2lvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgcmVjZW50bHkuIFBsZWFzZSBnbyB0byB7bGlua30gdG8gY2hlY2sgeW91ciBDYWxsaW5nIG9wdGlvbnMuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBob25lTnVtYmVyQ2hhbmdlZF06ICdZb3VyIHBob25lIG51bWJlciBpbmZvcm1hdGlvbiBoYXMgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLicsXG4gIGxpbms6ICdTZXR0aW5ncyA+IENhbGxpbmcnLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZF06ICdZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGFuZCB5b3UgY2Fubm90IG1ha2UgY2FsbHMgd2l0aCB5b3VyIGJyb3dzZXIuIEZvciBkZXRhaWxzLCBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZW1lcmdlbmN5Q2FsbGluZ05vdEF2YWlsYWJsZV06ICdEaWFsbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4gSW4gYW4gZW1lcmdlbmN5LCB1c2UgeW91ciB0cmFkaXRpb25hbCB3aXJlbGluZSBvciB3aXJlbGVzcyBwaG9uZSB0byBjYWxsIGFuIGVtZXJnZW5jeSBudW1iZXIuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5zYXZlU3VjY2Vzc1dpdGhTb2Z0cGhvbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBtYWtlIHN1cmUgeW91IGhhdmUge2JyYW5kfSBmb3IgRGVza3RvcCBpbnN0YWxsZWQgaW4geW91ciBjb21wdXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbl1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgaW4gQ2FsbGluZyBzZWN0aW9uIGhvdyB5b3Ugd2FudCB0byBtYWtlIHlvdXIgY2FsbC4gSXQgd291bGQgYmUgbmljZSBpZiB5b3UgbGV0IHVzIGtub3cgeW91ciBsb2NhdGlvbiBieSBzcGVjaWZ5aW5nIHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgKGlmIGF2YWlsYWJsZSkgaW4gUmVnaW9uIHNlY3Rpb24sIHNvIHlvdSBjYW4gZG8gbG9jYWwgZGlhbGluZyB3aXRoIHRoZSBhcHAuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmZpcnN0TG9naW5PdGhlcl1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgaW4gQ2FsbGluZyBzZWN0aW9uIGhvdyB5b3Ugd2FudCB0byBtYWtlIHlvdXIgY2FsbC5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGVybWlzc2lvbkNoYW5nZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5waG9uZU51bWJlckNoYW5nZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIHBob25lIG51bWJlciBpbmZvcm1hdGlvbiBoYXMgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxpbmtcIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzID4gQ2FsbGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy53ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBhbmQgeW91IGNhbm5vdCBtYWtlIGNhbGxzIHdpdGggQnJvd3Nlci4gRm9yIGRldGFpbHMgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGVdXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLiBJbiBhbiBlbWVyZ2VuY3ksIHVzZSB5b3VyIHRyYWRpdGlvbmFsIHdpcmVsaW5lIG9yIHdpcmVsZXNzIHBob25lIHRvIGNhbGwgYW4gZW1lcmdlbmN5IG51bWJlci5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzQWxlcnQvaTE4bi9lbi1HQi5qcyIsImltcG9ydCByZWdpb25TZXR0aW5nc01lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUmVnaW9uU2V0dGluZ3MvcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVnaW9uOiAnUmVnaW9uJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NdOiAnU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmRpYWxpbmdQbGFuc0NoYW5nZWRdOiAnVGhlIHByZXZpb3VzIHJlZ2lvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGZvciB5b3VyIGFjY291bnQuXFxuICAgIFBsZWFzZSB2ZXJpZnkgeW91ciBuZXcge3JlZ2lvblNldHRpbmdzTGlua30uJyxcbiAgcmVnaW9uU2V0dGluZ3M6ICdyZWdpb24gc2V0dGluZ3MnLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5hcmVhQ29kZUludmFsaWRdOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYXJlYSBjb2RlLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInJlZ2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiUmVnaW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuZGlhbGluZ1BsYW5zQ2hhbmdlZF1cIkAjQCBAc291cmNlOiBAI0BcIlRoZSBwcmV2aW91cyByZWdpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBmb3IgeW91ciBhY2NvdW50LlxcbiAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgbmV3IHtyZWdpb25TZXR0aW5nc0xpbmt9LlwiQCNAXG4vLyBAa2V5OiBAI0BcInJlZ2lvblNldHRpbmdzXCJAI0AgQHNvdXJjZTogQCNAXCJyZWdpb24gc2V0dGluZ3NcIkAjQFxuLy8gQGtleTogQCNAXCJbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5hcmVhQ29kZUludmFsaWRdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBhcmVhIGNvZGUuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlZ2lvblNldHRpbmdzQWxlcnQvaTE4bi9lbi1HQi5qcyIsImltcG9ydCBtZXNzYWdlU2VuZGVyTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZXNzYWdlU2VuZGVyL21lc3NhZ2VTZW5kZXJNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kU3VjY2Vzc106ICdTZW5kIFN1Y2Nlc3MuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kRXJyb3JdOiAnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBzZW5kaW5nIHRoZSBtZXNzYWdlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubnVtYmVyVmFsaWRhdGVFcnJvcl06ICdQaG9uZSBOdW1iZXIgVmFsaWRhdGlvbiBFcnJvci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRFbXB0eV06ICdQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gYmUgc2VudC4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vUGVybWlzc2lvbl06ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2VzLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyRW1wdHldOiAnWW91IG11c3Qgc2VsZWN0IGEgbnVtYmVyIGZyb20geW91ciBwaG9uZSBudW1iZXJzIHRvIHNlbmQnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vVG9OdW1iZXJdOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50c0VtcHR5XTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHJlY2VpdmVyIG51bWJlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRUb29Mb25nXTogJ1RleHQgaXMgdG9vIGxvbmcsIDEwMDAgbGltaXQnLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudE51bWJlckludmFsaWRzXTogJ1JlY2lwaWVudCBudW1iZXIgaXMgaW52YWxpZCcsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9BcmVhQ29kZV06ICdQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zcGVjaWFsTnVtYmVyXTogJ0RpYWxsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF06ICdDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmludGVybmFsRXJyb3JdOiAnQ2Fubm90IGNvbm5lY3QgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vdEFuRXh0ZW5zaW9uXTogJ1RoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubmV0d29ya0Vycm9yXTogJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vdFNtc1RvRXh0ZW5zaW9uXTogJ0Nhbm5vdCBzZW5kIHRvIGFuIGV4dGVuc2lvbiBudW1iZXIgd2l0aCBtYWluIHBob25lIG51bWJlci4gSWYgeW91IHdhbnQgdG8gc2VudCB0byBhIGV4dGVuc2lvbiBudW1iZXIsIHBsZWFzZSBqdXN0IGVudGVyIHRoZSBleHRlbnNpb24gbnVtYmVyLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyTnVtYmVySW52YWxpZHNdOiAnWW91IGRvblxcJ3QgaGF2ZSB2YWxpZCBwaG9uZSBudW1iZXIgdG8gc2VuZCBTTVMgZnJvbS4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkXTogJ1NlbmRpbmcgU01TIHRvIGludGVybmF0aW9uYWwgcGhvbmUgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLicsXG4gIGFyZWFDb2RlOiAnYXJlYSBjb2RlJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJOdW1iZXJJbnZhbGlkXTogJ0EgdmFsaWQgUGhvbmUgTnVtYmVyIGlzIHJlcXVpcmVkIHRvIHNlbmQgdGV4dCBtZXNzYWdlcyB0byByZWNpcGllbnRzIG91dHNpZGUgb2YgeW91ciBjb21wYW55LiBQbGVhc2UgY29udGFjdCB5b3VyIEFkbWluaXN0cmF0b3IgdG8gYWRkIGEgZGlyZWN0IG51bWJlciB0byB5b3VyIGFjY291bnQuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kU3VjY2Vzc11cIkAjQCBAc291cmNlOiBAI0BcIlNlbmQgU3VjY2Vzcy5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIlNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGVuIHNlbmQgbWVzc2FnZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm51bWJlclZhbGlkYXRlRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJQaG9uZSBOdW1iZXIgVmFsaWRhdGUgRXJyb3IuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0RW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gYmUgc2VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vUGVybWlzc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIG5vIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyRW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgbXVzdCBzZWxlY3QgYSBudW1iZXIgZnJvbSB5b3VyIHBob25lIG51bWJlcnMgdG8gc2VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9Ub051bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIkludmFsaWQgcGhvbmUgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50c0VtcHR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVjZWl2ZXIgbnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMudGV4dFRvb0xvbmddXCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0IGlzIHRvbyBsb25nLCAxMDAwIExpbWl0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnJlY2lwaWVudE51bWJlckludmFsaWRzXVwiQCNAIEBzb3VyY2U6IEAjQFwiUmVjaXBpZW50IG51bWJlciBpcyBpbnZhbGlkc1wiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9BcmVhQ29kZV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJEaWFsaW5nIGVtZXJnZW5jeSBvciBzcGVjaWFsIHNlcnZpY2UgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuY29ubmVjdEZhaWxlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNvbm5lY3Rpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RBbkV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIlRoZSBleHRlbnNpb24gbnVtYmVyIGRvZXMgbm90IGV4aXN0LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubmV0d29ya0Vycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIG5ldHdvcmsgaXNzdWVzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyTnVtYmVySW52YWxpZF1cIkAjQCBAc291cmNlOiBAI0BcIkEgdmFsaWQgUGhvbmUgTnVtYmVyIGlzIHJlcXVpcmVkIHRvIHNlbmQgdGV4dCBtZXNzYWdlIHRvIHJlY2lwaWVudHMgb3V0c2lkZSBvZiB5b3VyIGNvbXBhbnkuIFBsZWFzZSBjb250YWN0IHlvdXIgQWRtaW5pc3RyYXRvciB0byBhZGQgYSBkaXJlY3QgbnVtYmVyIHRvIHlvdXIgYWNjb3VudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vdFNtc1RvRXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IHNlbmQgVG8gYSBleHRlbnNpb24gbnVtYmVyIHdpdGggbWFpbiBwaG9uZSBudW1iZXIuIElmIHlvdSB3YW50IHRvIHNlbnQgdG8gYSBleHRlbnNpb24gTnVtYmVyLCBwbGVhc2UganVzdCBlbnRlciBleHRlbnNpb24gTnVtYmVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNlbmRpbmcgU01TIHRvIGludGVybmF0aW9uYWwgcGhvbmUgbnVtYmVyIGlzIG5vdCBzdXBwb3J0ZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVcIkAjQCBAc291cmNlOiBAI0BcImFyZWEgY29kZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZXNzYWdlU2VuZGVyQWxlcnQvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmF0ZUV4Y2VlZGVkOiAnUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4gQXBwIHdpbGwgcmVzdW1lIGluIHt0dGx9IHNlY29uZHMuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwicmF0ZUV4Y2VlZGVkXCJAI0AgQHNvdXJjZTogQCNAXCJSZXF1ZXN0IGxpbWl0IGV4Y2VlZGVkLiBBcHAgd2lsbCByZXN1bWUgaW4ge3R0bH0gc2Vjb25kcy5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9lbi1HQi5qcyIsImltcG9ydCBjb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5kaXNjb25uZWN0ZWRdOiAnTmV0d29yayBjb25uZWN0aW9uIGlzIGxvc3QuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5kaXNjb25uZWN0ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJOZXR3b3JrIGNvbm5lY3Rpb24gaXMgbG9zdC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9lbi1HQi5qcyIsImltcG9ydCB3ZWJwaG9uZUVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbd2VicGhvbmVFcnJvcnMuY29ubmVjdEZhaWxlZF06ICdTZW5kIHN1Y2Nlc3MuJyxcbiAgW3dlYnBob25lRXJyb3JzLmJyb3dzZXJOb3RTdXBwb3J0ZWRdOiAnQ2FsbGluZyB3aXRoIGJyb3dzZXIgaXMgb25seSBzdXBwb3J0ZWQgb24gQ2hyb21lLicsXG4gIFt3ZWJwaG9uZUVycm9ycy53ZWJwaG9uZUNvdW50T3ZlckxpbWl0XTogJ0EgbWF4aW11bSBvZiA1IHdlYiBwaG9uZXMgY291bGQgYmUgcmVnaXN0ZXJlZC4nLFxuICBbd2VicGhvbmVFcnJvcnMubm90T3V0Ym91bmRDYWxsV2l0aG91dERMXTogJ1lvdXIgZXh0ZW5zaW9uIGlzIGN1cnJlbnRseSBub3QgYWxsb3dlZCB0byBtYWtlIG91dGJvdW5kIGNhbGxzIHdpdGggYnJvd3Nlci4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIGZvciBhbiB1cGdyYWRlLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5nZXRTaXBQcm92aXNpb25FcnJvcl06ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2VzLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5jb25uZWN0ZWRdOiAnV2ViIHBob25lIHJlZ2lzdGVyZWQuJyxcbiAgW3dlYnBob25lRXJyb3JzLnRvVm9pY2VNYWlsRXJyb3JdOiAnQ2Fubm90IHNlbmQgY2FsbCB0byB2b2ljZW1haWwgZHVlIHRvIGludGVybmFsIGVycm9yJyxcbiAgW3dlYnBob25lRXJyb3JzLm11dGVFcnJvcl06ICdDYWxsIGNhbm5vdCBiZSBtdXRlZCBhdCB0aGUgbW9tZW50LicsXG4gIFt3ZWJwaG9uZUVycm9ycy5ob2xkRXJyb3JdOiAnQ2FsbCBjYW5ub3QgYmUgaGVsZCBhdCB0aGUgbW9tZW50LicsXG4gIFt3ZWJwaG9uZUVycm9ycy5mbGlwRXJyb3JdOiAnQ2Fubm90IGZsaXAgdGhlIGNhbGwuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgW3dlYnBob25lRXJyb3JzLnJlY29yZEVycm9yXTogJ1lvdSBjYW5ub3QgcmVjb3JkIHRoZSBjYWxsIGF0IHRoZSBtb21lbnQuIEVycm9yIGNvZGU6IHtlcnJvckNvZGV9JyxcbiAgW3dlYnBob25lRXJyb3JzLnJlY29yZERpc2FibGVkXTogJ1NvcnJ5LCB5b3VyIGFjY291bnQgZG9lcyBub3QgaGF2ZSB0aGUgZmVhdHVyZSB0byByZWNvcmQgYSBjYWxsLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci4nLFxuICBbd2VicGhvbmVFcnJvcnMudHJhbnNmZXJFcnJvcl06ICdDYW5ub3QgdHJhbnNmZXIgdGhlIGNhbGwuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmNvbm5lY3RGYWlsZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJDb25uZWN0IHdpdGggd2ViIHBob25lIHNlcnZlciBmYWlsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmNvbm5lY3RlZF1cIkAjQCBAc291cmNlOiBAI0BcIldlYiBwaG9uZSByZWdpc3RlcmVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5icm93c2VyTm90U3VwcG9ydGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbGluZyB3aXRoIGJyb3dzZXIgaXMgb25seSBzdXBwb3J0ZWQgb24gQ2hyb21lLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy53ZWJwaG9uZUNvdW50T3ZlckxpbWl0XVwiQCNAIEBzb3VyY2U6IEAjQFwiQSBtYXhpbXVtIG9mIDUgd2ViIHBob25lcyBjb3VsZCBiZSByZWdpc3RlcmVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5ub3RPdXRib3VuZENhbGxXaXRob3V0RExdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIGV4dGVuc2lvbiBpcyBub3QgYWxsb3dlZCB0byBtYWtlIG91dGJvdW5kIGNhbGxzIHdpdGggYnJvd3NlciBjdXJyZW50bHksIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSBmb3IgYW4gdXBncmFkZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuZ2V0U2lwUHJvdmlzaW9uRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgaGF2ZSBubyBwZXJtaXNzaW9uIHRvIHNlbmQgbWVzc2FnZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMudG9Wb2ljZU1haWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBzZW5kIGNhbGwgdG8gdm9pY2VtYWlsIGR1ZSB0byBpbnRlcm5hbCBlcnJvclwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5tdXRlRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIGNhbm5vdCBiZSBtdXRlZCBhdCB0aGUgbW9tZW50LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5ob2xkRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIGNhbm5vdCBiZSBob2xkIGF0IHRoZSBtb21lbnQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmZsaXBFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBmbGlwIHRoZSBjYWxsLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5yZWNvcmRFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBjYW5ub3QgcmVjb3JkIHRoZSBjYWxsIGF0IHRoZSBtb21lbnQuIEVycm9yIGNvZGU6IHtlcnJvckNvZGV9XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLnJlY29yZERpc2FibGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiU29ycnksIHlvdXIgYWNjb3VudCBkb2VzIG5vdCBoYXZlIHRoZSBmZWF0dXJlIHRvIHJlY29yZCBhIGNhbGwuIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy50cmFuc2ZlckVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IHRyYW5zZmVyIHRoZSBjYWxsLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vZW4tR0IuanMiLCJpbXBvcnQgcGVybWlzc2lvbk1lc3NhZ2VzIGZyb21cbiAgJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGVybWlzc2lvbk1lc3NhZ2VzLmludmFsaWRUaWVyXTogJ1lvdXIgZWRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHthcHBsaWNhdGlvbn0gaW50ZWdyYXRpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSB0byB1cGdyYWRlIHlvdXIge2JyYW5kfSBlZGl0aW9uLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltwZXJtaXNzaW9uTWVzc2FnZXMuaW52YWxpZFRpZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIGVkaXRpb24gZG9lcyBub3Qgc3VwcG9ydCB7YXBwbGljYXRpb259IGludGVncmF0aW9uLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgdG8gdXBncmFkZSB5b3VyIHticmFuZH0gZWRpdGlvbi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUm9sZXNBbmRQZXJtaXNzaW9uc0FsZXJ0L2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2luQnV0dG9uOiAnU2lnbiBJbicsXG4gIHZlcnNpb246ICdWZXJzaW9uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9naW5CdXR0b25cIkAjQCBAc291cmNlOiBAI0BcIlNpZ24gSW5cIkAjQFxuLy8gQGtleTogQCNAXCJ2ZXJzaW9uXCJAI0AgQHNvdXJjZTogQCNAXCJWZXJzaW9uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0xvZ2luUGFuZWwvaTE4bi9lbi1HQi5qcyIsImltcG9ydCBjYWxsaW5nT3B0aW9ucyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdDYWxsaW5nJyxcbiAgW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV06ICd7YnJhbmR9IGZvciBEZXNrdG9wJyxcbiAgW2NhbGxpbmdPcHRpb25zLm15cGhvbmVdOiAnTXkge2JyYW5kfSBQaG9uZScsXG4gIFtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lXTogJ090aGVyIFBob25lJyxcbiAgW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXTogJ0N1c3RvbSBQaG9uZScsXG4gIG1ha2VDYWxsc1dpdGg6ICdNYWtlIG15IGNhbGxzIHVzaW5nJyxcbiAgcmluZ291dEhpbnQ6ICdSaW5nIG1lIGF0IG15IGxvY2F0aW9uIGZpcnN0LCB0aGVuIGNvbm5lY3QgdGhlIGNhbGxlZCBwYXJ0eScsXG4gIG15TG9jYXRpb25MYWJlbDogJ015IExvY2F0aW9uJyxcbiAgcHJlc3MxVG9TdGFydENhbGxMYWJlbDogJ1Byb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGwnLFxuICBbY2FsbGluZ09wdGlvbnMuYnJvd3Nlcl06ICdCcm93c2VyJyxcbiAgc2F2ZTogJ1NhdmUnLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF06ICdVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBhbmQgcmVjZWl2ZSBjYWxscyB1c2luZyB5b3VyIGNvbXB1dGVyXFwncyBtaWNyb3Bob25lIGFuZCBzcGVha2VyLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5zb2Z0cGhvbmV9VG9vbHRpcGBdOiAnVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgYW5kIHJlY2VpdmUgY2FsbHMgdXNpbmcgeW91ciB7YnJhbmR9IGZvciBEZXNrdG9wIGFwcC4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwYF06ICdVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gcGhvbmUuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXTogJ0ZvciB0aGUgY2FsbCB5b3UgbWFrZSwgeW91ciB7YnJhbmR9IHBob25lIHdpbGwgcmluZyBmaXJzdCB0aGVuIHRoZSBwYXJ0eSB0aGF0IHlvdSBjYWxsZWQuJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcGBdOiAnVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgeW91ciBvdGhlciBwaG9uZXMgc3VjaCBhcyBob21lIG9yIG1vYmlsZSBwaG9uZXMgdGhhdCB5b3UgaGF2ZSBhZGRlZCBpbiB5b3VyIHticmFuZH0gRXh0ZW5zaW9uLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXAxYF06ICdGb3IgdGhlIGNhbGwgeW91IG1ha2UsIHRoaXMgcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHRoYXQgeW91IGNhbGxlZC4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcGBdOiAnVXNlIHRoaXMgb3B0aW9uIHRvIG1ha2UgY2FsbHMgdXNpbmcgYW55IHBob25lIG9mIHlvdXIgY2hvaWNlIGJ5IGVudGVyaW5nIGEgdmFsaWQgcGhvbmUgbnVtYmVyIGluIHRoZSBmaWVsZCBiZWxvdy4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcDFgXTogJ0ZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgdGhhdCB5b3UgY2FsbGVkLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcInticmFuZH0gZm9yIERlc2t0b3BcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMubXlwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk15IHticmFuZH0gUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk90aGVyIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmJyb3dzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJCcm93c2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWFrZUNhbGxzV2l0aFwiQCNAIEBzb3VyY2U6IEAjQFwiTWFrZSBteSBjYWxscyB3aXRoXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ291dEhpbnRcIkAjQCBAc291cmNlOiBAI0BcIlJpbmcgbWUgYXQgbXkgbG9jYXRpb24gZmlyc3QsIHRoZW4gY29ubmVjdCB0aGUgY2FsbGVkIHBhcnR5XCJAI0Bcbi8vIEBrZXk6IEAjQFwibXlMb2NhdGlvbkxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJNeSBMb2NhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInByZXNzMVRvU3RhcnRDYWxsTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlByb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIgY29tcHV0ZXLigJlzIG1pY3JvcGhvbmUgYW5kIHNwZWFrZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZX1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIge2JyYW5kfSBmb3IgRGVza3RvcCBhcHAuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gcGhvbmUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXVwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB5b3VyIHticmFuZH0gcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIG90aGVyIHBob25lcyBzdWNoIGFzIGhvbWUgb3IgY2VsbCBwaG9uZXMgdGhhdCB5b3UgaGF2ZSBhZGRlZCBpbiB5b3VyIHticmFuZH0gRXh0ZW5zaW9uLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXAxYF1cIkAjQCBAc291cmNlOiBAI0BcIkZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgeW91IGNhbGxlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyBhbnkgcGhvbmUgb2YgeW91ciBjaG9pY2UgYnkgZW50ZXJpbmcgYSB2YWxpZCBwaG9uZSBudW1iZXIgaW4gdGhlIGZpZWxkIGJlbG93LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdXCJAI0AgQHNvdXJjZTogQCNAXCJGb3IgdGhlIGNhbGwgeW91IG1ha2UsIHRoaXMgcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNhdmU6ICdTYXZlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnUmVnaW9uJyxcbiAgTkFPbmx5TWVzc2FnZTogJ1BsZWFzZSBzZXQgeW91ciBhcmVhIGNvZGUuIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsbGluZy4nLFxuICBNdWx0aVdpdGhOQU1lc3NhZ2U6ICdQbGVhc2Ugc2V0IHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgZm9yIHlvdXIgcmVnaW9uLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLicsXG4gIE11bHRpV2l0aG91dE5BTWVzc2FnZTogJ1BsZWFzZSBzZWxlY3Qgd2hpY2ggY291bnRyeSB5b3UgYXJlIGxvY2F0ZWQgaW4uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsbGluZyBhbmQgcGhvbmUgbnVtYmVyIGZvcm1hdHRpbmcuJyxcbiAgY291bnRyeTogJ0NvdW50cnknLFxuICBhcmVhQ29kZTogJ0FyZWEgQ29kZScsXG4gIGFyZWFDb2RlUGxhY2Vob2xkZXI6ICdFbnRlciBBcmVhIENvZGUnLFxuICBzYXZlOiAnU2F2ZScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJSZWdpb25cIkAjQFxuLy8gQGtleTogQCNAXCJOQU9ubHlNZXNzYWdlXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2Ugc2V0IHlvdXIgYXJlYSBjb2RlLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGluZy5cIkAjQFxuLy8gQGtleTogQCNAXCJNdWx0aVdpdGhOQU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQgdGhlIGNvdW50cnkgYW5kIGFyZWEgY29kZSBmb3IgeW91ciByZWdpb24uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nIGFuZCBwaG9uZSBudW1iZXIgZm9ybWF0dGluZy5cIkAjQFxuLy8gQGtleTogQCNAXCJNdWx0aVdpdGhvdXROQU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgdGhlIGNvdW50cnkgeW91IGxvY2F0ZSBpbi4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLlwiQCNAXG4vLyBAa2V5OiBAI0BcImNvdW50cnlcIkAjQCBAc291cmNlOiBAI0BcIkNvdW50cnlcIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiQXJlYSBDb2RlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVQbGFjZWhvbGRlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgQXJlYSBDb2RlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlZ2lvblNldHRpbmdzUGFuZWwvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBVDogJ0F1c3RyaWEnLFxuICBCSDogJ0JhaHJhaW4nLFxuICBCUjogJ0JyYXppbCcsXG4gIEJHOiAnQnVsZ2FyaWEnLFxuICBDQTogJ0NhbmFkYScsXG4gIENMOiAnQ2hpbGUnLFxuICBDTjogJ0NoaW5hJyxcbiAgSFI6ICdDcm9hdGlhJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoIFJlcHVibGljJyxcbiAgREs6ICdEZW5tYXJrJyxcbiAgRE86ICdEb21pbmljYW4gUmVwdWJsaWMnLFxuICBFRTogJ0VzdG9uaWEnLFxuICBGSTogJ0ZpbmxhbmQnLFxuICBGUjogJ0ZyYW5jZScsXG4gIERFOiAnR2VybWFueScsXG4gIEhLOiAnSG9uZyBLb25nJyxcbiAgSFU6ICdIdW5nYXJ5JyxcbiAgSUU6ICdJcmVsYW5kJyxcbiAgSUw6ICdJc3JhZWwnLFxuICBJTjogJ0luZGlhJyxcbiAgSVQ6ICdJdGFseScsXG4gIEpQOiAnSmFwYW4nLFxuICBMVjogJ0xhdHZpYScsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1YOiAnTWV4aWNvJyxcbiAgTkw6ICdOZXRoZXJsYW5kcycsXG4gIE5POiAnTm9yd2F5JyxcbiAgUEE6ICdQYW5hbWEnLFxuICBQSDogJ1BoaWxpcHBpbmVzJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUk86ICdSb21hbmlhJyxcbiAgU0s6ICdTbG92YWtpYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBFUzogJ1NwYWluJyxcbiAgU0U6ICdTd2VkZW4nLFxuICBDSDogJ1N3aXR6ZXJsYW5kJyxcbiAgVFI6ICdUdXJrZXknLFxuICBHQjogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBHRTogJ0dlb3JnaWEnLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIEtFOiAnS2VueWEnLFxuICBORzogJ05pZ2VyaWEnLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgWkE6ICdTb3V0aCBBZnJpY2EnLFxuICBLUjogJ1NvdXRoIEtvcmVhJyxcbiAgU0c6ICdTaW5nYXBvcmUnLFxuICBUVzogJ1RhaXdhbicsXG4gIFVBOiAnVWtyYWluZScsXG4gIFVTOiAnVW5pdGVkIFN0YXRlcycsXG4gIFZOOiAnVmlldG5hbScsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJKOiAnQmVuaW4nLFxuICBTVjogJ0VsIFNhbHZhZG9yJyxcbiAgR0g6ICdHaGFuYScsXG4gIEdSOiAnR3JlZWNlJyxcbiAgR046ICdHdWluZWEnLFxuICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgUEU6ICdQZXJ1JyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIjQxOVwiQCNAIEBzb3VyY2U6IEAjQFwiTGF0aW4gQW1lcmljYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkFSXCJAI0AgQHNvdXJjZTogQCNAXCJBcmdlbnRpbmFcIkAjQFxuLy8gQGtleTogQCNAXCJBVFwiQCNAIEBzb3VyY2U6IEAjQFwiQXVzdHJpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkJIXCJAI0AgQHNvdXJjZTogQCNAXCJCYWhyYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQlJcIkAjQCBAc291cmNlOiBAI0BcIkJyYXppbFwiQCNAXG4vLyBAa2V5OiBAI0BcIkJHXCJAI0AgQHNvdXJjZTogQCNAXCJCdWxnYXJpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNBXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5hZGFcIkAjQFxuLy8gQGtleTogQCNAXCJDTFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2hpbGVcIkAjQFxuLy8gQGtleTogQCNAXCJDTlwiQCNAIEBzb3VyY2U6IEAjQFwiQ2hpbmFcIkAjQFxuLy8gQGtleTogQCNAXCJIUlwiQCNAIEBzb3VyY2U6IEAjQFwiQ3JvYXRpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNZXCJAI0AgQHNvdXJjZTogQCNAXCJDeXBydXNcIkAjQFxuLy8gQGtleTogQCNAXCJDWlwiQCNAIEBzb3VyY2U6IEAjQFwiQ3plY2ggUmVwdWJsaWNcIkAjQFxuLy8gQGtleTogQCNAXCJES1wiQCNAIEBzb3VyY2U6IEAjQFwiRGVubWFya1wiQCNAXG4vLyBAa2V5OiBAI0BcIkRPXCJAI0AgQHNvdXJjZTogQCNAXCJEb21pbmljYW4gUmVwdWJsaWNcIkAjQFxuLy8gQGtleTogQCNAXCJFRVwiQCNAIEBzb3VyY2U6IEAjQFwiRXN0b25pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkZJXCJAI0AgQHNvdXJjZTogQCNAXCJGaW5sYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRlJcIkAjQCBAc291cmNlOiBAI0BcIkZyYW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcIkRFXCJAI0AgQHNvdXJjZTogQCNAXCJHZXJtYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwiSEtcIkAjQCBAc291cmNlOiBAI0BcIkhvbmcgS29uZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIkhVXCJAI0AgQHNvdXJjZTogQCNAXCJIdW5nYXJ5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiSUVcIkAjQCBAc291cmNlOiBAI0BcIklyZWxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJJTFwiQCNAIEBzb3VyY2U6IEAjQFwiSXNyYWVsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSU5cIkAjQCBAc291cmNlOiBAI0BcIkluZGlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSVRcIkAjQCBAc291cmNlOiBAI0BcIkl0YWx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiSlBcIkAjQCBAc291cmNlOiBAI0BcIkphcGFuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTFZcIkAjQCBAc291cmNlOiBAI0BcIkxhdHZpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkxUXCJAI0AgQHNvdXJjZTogQCNAXCJMaXRodWFuaWFcIkAjQFxuLy8gQGtleTogQCNAXCJMVVwiQCNAIEBzb3VyY2U6IEAjQFwiTHV4ZW1ib3VyZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIk1ZXCJAI0AgQHNvdXJjZTogQCNAXCJNYWxheXNpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIk1YXCJAI0AgQHNvdXJjZTogQCNAXCJNZXhpY29cIkAjQFxuLy8gQGtleTogQCNAXCJOTFwiQCNAIEBzb3VyY2U6IEAjQFwiTmV0aGVybGFuZHNcIkAjQFxuLy8gQGtleTogQCNAXCJOT1wiQCNAIEBzb3VyY2U6IEAjQFwiTm9yd2F5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiUEFcIkAjQCBAc291cmNlOiBAI0BcIlBhbmFtYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlBIXCJAI0AgQHNvdXJjZTogQCNAXCJQaGlsaXBwaW5lc1wiQCNAXG4vLyBAa2V5OiBAI0BcIlBMXCJAI0AgQHNvdXJjZTogQCNAXCJQb2xhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJQVFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9ydHVnYWxcIkAjQFxuLy8gQGtleTogQCNAXCJST1wiQCNAIEBzb3VyY2U6IEAjQFwiUm9tYW5pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlNLXCJAI0AgQHNvdXJjZTogQCNAXCJTbG92YWtpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlNJXCJAI0AgQHNvdXJjZTogQCNAXCJTbG92ZW5pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkVTXCJAI0AgQHNvdXJjZTogQCNAXCJTcGFpblwiQCNAXG4vLyBAa2V5OiBAI0BcIlNFXCJAI0AgQHNvdXJjZTogQCNAXCJTd2VkZW5cIkAjQFxuLy8gQGtleTogQCNAXCJDSFwiQCNAIEBzb3VyY2U6IEAjQFwiU3dpdHplcmxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJUUlwiQCNAIEBzb3VyY2U6IEAjQFwiVHVya2V5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiR0JcIkAjQCBAc291cmNlOiBAI0BcIlVuaXRlZCBLaW5nZG9tXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQVVcIkAjQCBAc291cmNlOiBAI0BcIkF1c3RyYWxpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdFXCJAI0AgQHNvdXJjZTogQCNAXCJHZW9yZ2lhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSURcIkAjQCBAc291cmNlOiBAI0BcIkluZG9uZXNpYVwiQCNAXG4vLyBAa2V5OiBAI0BcIktFXCJAI0AgQHNvdXJjZTogQCNAXCJLZW55YVwiQCNAXG4vLyBAa2V5OiBAI0BcIk5HXCJAI0AgQHNvdXJjZTogQCNAXCJOaWdlcmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUEtcIkAjQCBAc291cmNlOiBAI0BcIlBha2lzdGFuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiWkFcIkAjQCBAc291cmNlOiBAI0BcIlNvdXRoIEFmcmljYVwiQCNAXG4vLyBAa2V5OiBAI0BcIktSXCJAI0AgQHNvdXJjZTogQCNAXCJTb3V0aCBLb3JlYVwiQCNAXG4vLyBAa2V5OiBAI0BcIlNHXCJAI0AgQHNvdXJjZTogQCNAXCJTaW5nYXBvcmVcIkAjQFxuLy8gQGtleTogQCNAXCJUV1wiQCNAIEBzb3VyY2U6IEAjQFwiVGFpd2FuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVUFcIkAjQCBAc291cmNlOiBAI0BcIlVrcmFpbmVcIkAjQFxuLy8gQGtleTogQCNAXCJVU1wiQCNAIEBzb3VyY2U6IEAjQFwiVW5pdGVkIFN0YXRlc1wiQCNAXG4vLyBAa2V5OiBAI0BcIlZOXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV0bmFtXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQkVcIkAjQCBAc291cmNlOiBAI0BcIkJlbGdpdW1cIkAjQFxuLy8gQGtleTogQCNAXCJCSlwiQCNAIEBzb3VyY2U6IEAjQFwiQmVuaW5cIkAjQFxuLy8gQGtleTogQCNAXCJTVlwiQCNAIEBzb3VyY2U6IEAjQFwiRWwgU2FsdmFkb3JcIkAjQFxuLy8gQGtleTogQCNAXCJHSFwiQCNAIEBzb3VyY2U6IEAjQFwiR2hhbmFcIkAjQFxuLy8gQGtleTogQCNAXCJHUlwiQCNAIEBzb3VyY2U6IEAjQFwiR3JlZWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR05cIkAjQCBAc291cmNlOiBAI0BcIkd1aW5lYVwiQCNAXG4vLyBAa2V5OiBAI0BcIk5aXCJAI0AgQHNvdXJjZTogQCNAXCJOZXcgWmVhbGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlBFXCJAI0AgQHNvdXJjZTogQCNAXCJQZXJ1XCJAI0Bcbi8vIEBrZXk6IEAjQFwiUFJcIkAjQCBAc291cmNlOiBAI0BcIlB1ZXJ0byBSaWNvXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY291bnRyeU5hbWVzL2VuLUdCLmpzIiwiaW1wb3J0IHBob25lVHlwZXMgZnJvbSAnLi4vLi4vZW51bXMvcGhvbmVUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3Bob25lVHlwZXMuYnVzaW5lc3NdOiAnQnVzaW5lc3MgUGhvbmUnLFxuICBbcGhvbmVUeXBlcy5leHRlbnNpb25dOiAnRXh0ZW5zaW9uIFBob25lJyxcbiAgW3Bob25lVHlwZXMuaG9tZV06ICdIb21lIFBob25lJyxcbiAgW3Bob25lVHlwZXMubW9iaWxlXTogJ01vYmlsZSBQaG9uZScsXG4gIFtwaG9uZVR5cGVzLnBob25lXTogJ1Bob25lJyxcbiAgW3Bob25lVHlwZXMudW5rbm93bl06ICdVbmtub3duIFBob25lIFR5cGUnLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5idXNpbmVzc11cIkAjQCBAc291cmNlOiBAI0BcIkJ1c2luZXNzIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuZXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiRXh0ZW5zaW9uIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuaG9tZV1cIkAjQCBAc291cmNlOiBAI0BcIkhvbWUgUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5tb2JpbGVdXCJAI0AgQHNvdXJjZTogQCNAXCJNb2JpbGUgUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5waG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIlBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMudW5rbm93bl1cIkAjQCBAc291cmNlOiBAI0BcIlVua25vd24gUGhvbmUgVHlwZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmNvbXBhbnldXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55IFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuZGlyZWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlyZWN0IFBob25lXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcGhvbmVUeXBlTmFtZXMvZW4tR0IuanMiLCJpbXBvcnQgcGhvbmVTb3VyY2VzIGZyb20gJy4uLy4uL2VudW1zL3Bob25lU291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3Bob25lU291cmNlcy5hY2NvdW50XTogJ0FjY291bnQnLFxuICBbcGhvbmVTb3VyY2VzLmNvbnRhY3RdOiAnQ29udGFjdCcsXG4gIFtwaG9uZVNvdXJjZXMubGVhZF06ICdMZWFkJyxcbiAgW3Bob25lU291cmNlcy5vcHBvcnR1bml0eV06ICdPcHBvcnR1bml0eScsXG4gIFtwaG9uZVNvdXJjZXMuc3lzdGVtVXNlcl06ICdTeXN0ZW0gVXNlcicsXG4gIFtwaG9uZVNvdXJjZXMucmNDb250YWN0XTogJ3ticmFuZH0nLFxufTtcblxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLmFjY291bnRdXCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5jb250YWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMucmNDb250YWN0XVwiQCNAIEBzb3VyY2U6IEAjQFwie2JyYW5kfVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMubGVhZF1cIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLm9wcG9ydHVuaXR5XVwiQCNAIEBzb3VyY2U6IEAjQFwiT3Bwb3J0dW5pdHlcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLnN5c3RlbVVzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJTeXN0ZW0gVXNlclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lU291cmNlTmFtZXMvZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvOiAnVG8nLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0VudGVyIE51bWJlciBvciBOYW1lJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW50ZXJOYW1lT3JOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkVudGVyIE51bWJlciBvciBOYW1lLi4uXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBEaXJlY3ROdW1iZXI6ICdEaXJlY3QnLFxuICBNYWluQ29tcGFueU51bWJlcjogJ01haW4nLFxuICBDb21wYW55TnVtYmVyOiAnQ29tcGFueScsXG4gIENvbXBhbnlGYXhOdW1iZXI6ICdGYXgnLFxuICBCbG9ja2VkOiAnQmxvY2tlZCcsXG4gIGZyb206ICdGcm9tJyxcbiAgQWRkaXRpb25hbENvbXBhbnlOdW1iZXI6ICdDb21wYW55JyxcbiAgRm9yd2FyZGVkQ29tcGFueU51bWJlcjogJ0ZvcndhcmRlZCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcIkRpcmVjdE51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRGlyZWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiTWFpbkNvbXBhbnlOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIk1haW5cIkAjQFxuLy8gQGtleTogQCNAXCJDb21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ29tcGFueUZheE51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRmF4XCJAI0Bcbi8vIEBrZXk6IEAjQFwiQmxvY2tlZFwiQCNAIEBzb3VyY2U6IEAjQFwiQmxvY2tlZFwiQCNAXG4vLyBAa2V5OiBAI0BcIkFkZGl0aW9uYWxDb21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wYW55XCJAI0Bcbi8vIEBrZXk6IEAjQFwiRm9yd2FyZGVkQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yd2FyZGVkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJvbVwiQCNAIEBzb3VyY2U6IEAjQFwiRnJvbVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Gcm9tRmllbGQvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZnJvbTogJ0Zyb20nLFxuICB0bzogJ1RvJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdFbnRlciBOdW1iZXIgb3IgTmFtZScsXG4gIHR5cGVNZXNzYWdlOiAnVHlwZSBtZXNzYWdlLi4uJyxcbiAgc2VuZDogJ1NlbmQnLFxufTtcblxuLy8gQGtleTogQCNAXCJmcm9tXCJAI0AgQHNvdXJjZTogQCNAXCJGcm9tXCJAI0Bcbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW50ZXJOYW1lT3JOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkVudGVyIE51bWJlciBvciBOYW1lLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwidHlwZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlR5cGUgbWVzc2FnZS4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlbmRcIkAjQCBAc291cmNlOiBAI0BcIlNlbmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29tcG9zZVRleHRQYW5lbC9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2dpbmdcIkAjQCBAc291cmNlOiBAI0BcIkxvZ2dpbmcuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJsb2dDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJMb2cgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImVkaXRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkVkaXQgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VsZWN0XCJAI0AgQHNvdXJjZTogQCNAXCJTZWxlY3QgYSBtYXRjaGluZyByZWNvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJPbkhvbGRcIkAjQCBAc291cmNlOiBAI0BcIk9uIEhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJSaW5naW5nXCJAI0AgQHNvdXJjZTogQCNAXCJSaW5naW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ2FsbENvbm5lY3RlZFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBDb25uZWN0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duVXNlclwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93biBVc2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93bk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdmFpbGFibGVcIkAjQCBAc291cmNlOiBAI0BcIlVuYXZhaWxhYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlld0RldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIlZpZXcgRGV0YWlsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzZW5kOiAnU2VuZCcsXG4gIHR5cGVNZXNzYWdlOiAnVHlwZSBtZXNzYWdlLi4uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidHlwZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlR5cGUgbWVzc2FnZS4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlbmRcIkAjQCBAc291cmNlOiBAI0BcIlNlbmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udmVyc2F0aW9uUGFuZWwvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmV3Q29uZmVyZW5jZTogJ05ldyBjb25mZXJlbmNlJyxcbiAgZGlhbEluTnVtYmVyOiAnRGlhbC1pbiBudW1iZXInLFxuICBob3N0OiAnSG9zdCcsXG4gIHBhcnRpY2lwYW50czogJ1BhcnRpY2lwYW50cycsXG4gIGludGVybmF0aW9uYWxQYXJ0aWNpcGFudHM6ICdJbnRlcm5hdGlvbmFsIHBhcnRpY2lwYW50cycsXG4gIGludGVybmF0aW9uYWxOdW1iZXJzSGVhZGVyOiAnU2VsZWN0IEludGVybmF0aW9uYWwgZGlhbC1pbiBudW1iZXJzJyxcbiAgc2VhcmNoOiAnU2VhcmNoLi4uJyxcbiAgaW52aXRlV2l0aFRleHQ6ICdJbnZpdGUgYnkgdGV4dCcsXG4gIGludml0ZVRleHQ6ICdQbGVhc2Ugam9pbiB0aGUgUmluZ0NlbnRyYWwgY29uZmVyZW5jZS4gXFxuXFxuRGlhbC1JbiBOdW1iZXJzOiB7ZGlhbEluTnVtYmVyfSBcXG5cXG57aW50ZXJuYXRpb25hbHN9IFxcblBhcnRpY2lwYW50IEFjY2Vzczoge3BhcnRpY2lwYW50Q29kZX0gXFxuXFxuTmVlZCBhbiBpbnRlcm5hdGlvbmFsIGRpYWwtaW4gcGhvbmUgbnVtYmVyPyBQbGVhc2UgdmlzaXQgaHR0cDovL3d3dy5yaW5nY2VudHJhbC5jb20vY29uZmVyZW5jaW5nIFxcblxcblRoaXMgY29uZmVyZW5jZSBjYWxsIGlzIGJyb3VnaHQgdG8geW91IGJ5IFJpbmdDZW50cmFsIENvbmZlcmVuY2luZy4nLFxufTtcblxuLy8gQGtleTogQCNAXCJuZXdDb25mZXJlbmNlXCJAI0AgQHNvdXJjZTogQCNAXCJOZXcgQ29uZmVyZW5jZVwiQCNAXG4vLyBAa2V5OiBAI0BcImRpYWxJbk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbC1pbiBOdW1iZXJcIkAjQFxuLy8gQGtleTogQCNAXCJob3N0XCJAI0AgQHNvdXJjZTogQCNAXCJIb3N0XCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFydGljaXBhbnRzXCJAI0AgQHNvdXJjZTogQCNAXCJQYXJ0aWNpcGFudHNcIkAjQFxuLy8gQGtleTogQCNAXCJpbnRlcm5hdGlvbmFsUGFydGljaXBhbnRzXCJAI0AgQHNvdXJjZTogQCNAXCJJbnRlcm5hdGlvbmFsIHBhcnRpY2lwYW50c1wiQCNAXG4vLyBAa2V5OiBAI0BcImludGVybmF0aW9uYWxOdW1iZXJzSGVhZGVyXCJAI0AgQHNvdXJjZTogQCNAXCJTZWxlY3QgSW50ZXJuYXRpb25hbCBEaWFsLWluIE51bWJlcnNcIkAjQFxuLy8gQGtleTogQCNAXCJzZWFyY2hcIkAjQCBAc291cmNlOiBAI0BcIlNlYXJjaC4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImludml0ZVdpdGhUZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJJbnZpdGUgd2l0aCBUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW52aXRlVGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIGpvaW4gdGhlIFJpbmdDZW50cmFsIGNvbmZlcmVuY2UuXFxuXFxuRGlhbC1JbiBOdW1iZXJzOiB7ZGlhbEluTnVtYmVyfSBcXG5cXG57aW50ZXJuYXRpb25hbHN9IFxcblBhcnRpY2lwYW50IEFjY2Vzczoge3BhcnRpY2lwYW50Q29kZX0gXFxuXFxuTmVlZCBhbiBpbnRlcm5hdGlvbmFsIGRpYWwtaW4gcGhvbmUgbnVtYmVyPyBQbGVhc2UgdmlzaXQgaHR0cDovL3d3dy5yaW5nY2VudHJhbC5jb20vY29uZmVyZW5jaW5nIFxcblxcblRoaXMgY29uZmVyZW5jZSBjYWxsIGlzIGJyb3VnaHQgdG8geW91IGJ5IFJpbmdDZW50cmFsIENvbmZlcmVuY2luZy5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNhbmNlbDogJ0NhbmNlbCcsXG4gIGNvbmZpcm06ICdDb25maXJtJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiY2FuY2VsXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5jZWxcIkAjQFxuLy8gQGtleTogQCNAXCJjb25maXJtXCJAI0AgQHNvdXJjZTogQCNAXCJDb25maXJtXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01vZGFsL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFjY291bnQ6ICdBY2NvdW50JyxcbiAgY29udGFjdDogJ0NvbnRhY3QnLFxuICBsZWFkOiAnTGVhZCcsXG4gIGNob29zZUVudGl0eTogJ1BsZWFzZSBzZWxlY3QgZW50aXR5IHR5cGUnLFxuICBjcmVhdGU6ICdDcmVhdGUnLFxufTtcblxuLy8gQGtleTogQCNAXCJhY2NvdW50XCJAI0AgQHNvdXJjZTogQCNAXCJBY2NvdW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29udGFjdFwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcImxlYWRcIkAjQCBAc291cmNlOiBAI0BcIkxlYWRcIkAjQFxuLy8gQGtleTogQCNAXCJjaG9vc2VFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZWxlY3QgZW50aXR5IHR5cGVcIkAjQFxuLy8gQGtleTogQCNAXCJjcmVhdGVcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2VuLUdCLmpzIiwiaW1wb3J0IG1lc3NhZ2VUeXBlcyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9lbnVtcy9tZXNzYWdlVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZExvZzogJ0xvZycsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHZpZXdEZXRhaWxzOiAnVmlldyBEZXRhaWxzJyxcbiAgYWRkRW50aXR5OiAnQ3JlYXRlIE5ldycsXG4gIGNhbGw6ICdDYWxsJyxcbiAgY29udmVyc2F0aW9uOiAnQ29udmVyc2F0aW9uJyxcbiAgZ3JvdXBDb252ZXJzYXRpb246ICdHcm91cCBDb252ZXJzYXRpb24nLFxufTtcblxuLy8gQGtleTogQCNAXCJhZGRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkxvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImVkaXRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkVkaXQgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlld0RldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIlZpZXcgRGV0YWlsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZEVudGl0eVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3JlYXRlIE5ld1wiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJjb252ZXJzYXRpb25cIkAjQCBAc291cmNlOiBAI0BcIkNvbnZlcnNhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcImdyb3VwQ29udmVyc2F0aW9uXCJAI0AgQHNvdXJjZTogQCNAXCJHcm91cCBDb252ZXJzYXRpb25cIkAjQFxuLy8gQGtleTogQCNAXCJ2b2ljZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlIG1lc3NhZ2VcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlIE1haWxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZUl0ZW0vaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICBzZWFyY2g6ICdTZWFyY2guLi4nLFxuICBub01lc3NhZ2VzOiAnTm8gbWVzc2FnZXMnLFxuICBub1NlYXJjaFJlc3VsdHM6ICdObyBtYXRjaGluZyByZWNvcmRzIGZvdW5kJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiTG9hZGluZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9hZGluZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlYXJjaFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VhcmNoLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwibm9NZXNzYWdlc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gTWVzc2FnZXNcIkAjQFxuLy8gQGtleTogQCNAXCJub1NlYXJjaFJlc3VsdHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIG1hdGNoaW5nIHJlY29yZHMgZm91bmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTWVzc2FnZUxpc3QvaTE4bi9lbi1HQi5qcyIsImltcG9ydCBtZXNzYWdlVHlwZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vZW51bXMvbWVzc2FnZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ01lc3NhZ2VzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIk1lc3NhZ2VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy5hbGxdXCJAI0AgQHNvdXJjZTogQCNAXCJBbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVR5cGVzLnZvaWNlTWFpbF1cIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VUeXBlcy50ZXh0XVwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMuZmF4XVwiQCNAIEBzb3VyY2U6IEAjQFwiRmF4XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VzUGFuZWwvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nZ2luZzogJ0xvZ2dpbmcuLi4nLFxuICBsb2dDYWxsOiAnTG9nIENhbGwnLFxuICBlZGl0TG9nOiAnRWRpdCBMb2cnLFxuICBzZWxlY3Q6ICdTZWxlY3QgYSBtYXRjaGluZyByZWNvcmQnLFxuICBPbkhvbGQ6ICdPbiBIb2xkJyxcbiAgUmluZ2luZzogJ1JpbmdpbmcnLFxuICBDYWxsQ29ubmVjdGVkOiAnQ2FsbCBDb25uZWN0ZWQnLFxuICB1bmtub3duVXNlcjogJ1Vua25vd24gVXNlcicsXG4gIHVua25vd25OdW1iZXI6ICdBbm9ueW1vdXMnLFxuICB1bmF2YWlsYWJsZTogJ1VuYXZhaWxhYmxlJyxcbiAgdmlld0RldGFpbHM6ICdWaWV3IERldGFpbHMnLFxuICBhZGRFbnRpdHk6ICdDcmVhdGUgTmV3JyxcbiAgYWRkTG9nOiAnTG9nJyxcbiAgdGV4dDogJ1RleHQnLFxuICBjYWxsOiAnQ2FsbCcsXG4gIGFkZENvbnRhY3Q6ICdBZGQgY29udGFjdCcsXG4gIG1pc3NlZENhbGw6ICdNaXNzZWQnLFxuICBpbmJvdW5kQ2FsbDogJ0luYm91bmQnLFxuICBvdXRib3VuZENhbGw6ICdPdXRib3VuZCcsXG4gIGZyb206ICdGcm9tJyxcbiAgdG86ICdUbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2dpbmdcIkAjQCBAc291cmNlOiBAI0BcIkxvZ2dpbmcuLi5cIkAjQFxuLy8gQGtleTogQCNAXCJsb2dDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJMb2cgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImVkaXRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkVkaXQgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VsZWN0XCJAI0AgQHNvdXJjZTogQCNAXCJTZWxlY3QgYSBtYXRjaGluZyByZWNvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJPbkhvbGRcIkAjQCBAc291cmNlOiBAI0BcIk9uIEhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJSaW5naW5nXCJAI0AgQHNvdXJjZTogQCNAXCJSaW5naW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ2FsbENvbm5lY3RlZFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBDb25uZWN0ZWRcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duVXNlclwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93biBVc2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93bk51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdmFpbGFibGVcIkAjQCBAc291cmNlOiBAI0BcIlVuYXZhaWxhYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmlld0RldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIlZpZXcgRGV0YWlsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZEVudGl0eVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3JlYXRlIE5ld1wiQCNAXG4vLyBAa2V5OiBAI0BcImFkZExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwidGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRDb250YWN0XCJAI0AgQHNvdXJjZTogQCNAXCJBZGQgQ29udGFjdFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1pc3NlZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk1pc3NlZFwiQCNAXG4vLyBAa2V5OiBAI0BcImluYm91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJJbmJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0Ym91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJPdXRib3VuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImZyb21cIkAjQCBAc291cmNlOiBAI0BcIkZyb21cIkAjQFxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG9cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbEl0ZW0vaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9BY3RpdmVDYWxsczogJ05vIGFjdGl2ZSBjYWxscycsXG4gIGN1cnJlbnRDYWxsOiAnQ3VycmVudCBDYWxsJyxcbiAgcmluZ0NhbGw6ICdSaW5naW5nIENhbGwnLFxuICBvbkhvbGRDYWxsOiAnQ2FsbCBvbiBIb2xkJyxcbiAgb3RoZXJEZXZpY2VDYWxsOiAnT25nb2luZyBjYWxscyBvbiBteSBvdGhlciBkZXZpY2VzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9BY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gYWN0aXZlIGNhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY3VycmVudENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkN1cnJlbnQgQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcInJpbmdDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJSaW5naW5nIENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJvbkhvbGRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIG9uIEhvbGRcIkAjQFxuLy8gQGtleTogQCNAXCJvdGhlckRldmljZUNhbGxcIkAjQCBAc291cmNlOiBAI0BcIk9uZ29pbmcgY2FsbHMgb24gbXkgb3RoZXIgZGV2aWNlc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2dpbmc6ICdMb2dnaW5nLi4uJyxcbiAgbG9nQ2FsbDogJ0xvZyBDYWxsJyxcbiAgZWRpdExvZzogJ0VkaXQgTG9nJyxcbiAgc2VsZWN0OiAnU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkJyxcbiAgT25Ib2xkOiAnT24gSG9sZCcsXG4gIFJpbmdpbmc6ICdSaW5naW5nJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NhbGwgQ29ubmVjdGVkJyxcbiAgdW5rbm93blVzZXI6ICdVbmtub3duIFVzZXInLFxuICB1bmtub3duTnVtYmVyOiAnQW5vbnltb3VzJyxcbiAgdW5hdmFpbGFibGU6ICdVbmF2YWlsYWJsZScsXG4gIHZpZXdEZXRhaWxzOiAnVmlldyBEZXRhaWxzJyxcbiAgYWRkRW50aXR5OiAnQ3JlYXRlIE5ldycsXG4gIGFkZExvZzogJ0xvZycsXG4gIHRleHQ6ICdUZXh0JyxcbiAgY2FsbDogJ0NhbGwnLFxuICBtaXNzZWRDYWxsOiAnTWlzc2VkJyxcbiAgaW5ib3VuZENhbGw6ICdJbmJvdW5kJyxcbiAgb3V0Ym91bmRDYWxsOiAnT3V0Ym91bmQnLFxufTtcblxuLy8gQGtleTogQCNAXCJsb2dnaW5nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dnaW5nLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwibG9nQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTG9nIENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJlZGl0TG9nXCJAI0AgQHNvdXJjZTogQCNAXCJFZGl0IExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInNlbGVjdFwiQCNAIEBzb3VyY2U6IEAjQFwiU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiT25Ib2xkXCJAI0AgQHNvdXJjZTogQCNAXCJPbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUmluZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ2luZ1wiQCNAXG4vLyBAa2V5OiBAI0BcIkNhbGxDb25uZWN0ZWRcIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgQ29ubmVjdGVkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5rbm93blVzZXJcIkAjQCBAc291cmNlOiBAI0BcIlVua25vd24gVXNlclwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25OdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkFub255bW91c1wiQCNAXG4vLyBAa2V5OiBAI0BcInVuYXZhaWxhYmxlXCJAI0AgQHNvdXJjZTogQCNAXCJVbmF2YWlsYWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcInZpZXdEZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJWaWV3IERldGFpbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRFbnRpdHlcIkAjQCBAc291cmNlOiBAI0BcIkNyZWF0ZSBOZXdcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRMb2dcIkAjQCBAc291cmNlOiBAI0BcIkxvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWlzc2VkQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTWlzc2VkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluYm91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk91dGJvdW5kXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxJdGVtL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vQWN0aXZlQ2FsbHM6ICdObyBhY3RpdmUgY2FsbHMnLFxuICBub1JlY29yZHM6ICdObyByZWNvcmRzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9BY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gYWN0aXZlIGNhbGxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZXN1bHRzIGZvdW5kXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxMaXN0L2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnSGlzdG9yeScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJIaXN0b3J5XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxIaXN0b3J5UGFnZS9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb3J3YXJkOiAnRm9yd2FyZCcsXG4gIGNhbmNlbDogJ0NhbmNlbCcsXG4gIGN1c3RvbU51bWJlcjogJ0N1c3RvbSBudW1iZXInLFxufTtcblxuLy8gQGtleTogQCNAXCJmb3J3YXJkXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FuY2VsXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5jZWxcIkAjQFxuLy8gQGtleTogQCNAXCJjdXN0b21OdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkN1c3RvbSBudW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRm9yd2FyZEZvcm0vaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgcmVwbHk6ICdSZXBseScsXG4gIG9uTXlXYXk6ICdPbiBteSB3YXknLFxuICBjdXN0b21NZXNzYWdlOiAnQ3VzdG9tIG1lc3NhZ2UnLFxuICBjYWxsTWVCYWNrSW46ICdDYWxsIG1lIGJhY2sgaW4nLFxuICB3aWxsQ2FsbFlvdUJhY2tJbjogJ1dpbGwgY2FsbCB5b3UgYmFjayBpbicsXG4gIG1pbjogJ21pbnV0ZXMnLFxuICBob3VyczogJ2hvdXJzJyxcbiAgZGF5czogJ2RheXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJjYW5jZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbmNlbFwiQCNAXG4vLyBAa2V5OiBAI0BcInJlcGx5XCJAI0AgQHNvdXJjZTogQCNAXCJSZXBseVwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uTXlXYXlcIkAjQCBAc291cmNlOiBAI0BcIk9uIG15IHdheVwiQCNAXG4vLyBAa2V5OiBAI0BcImN1c3RvbU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIkN1c3RvbSBNZXNzYWdlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbE1lQmFja0luXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIG1lIGJhY2sgaW5cIkAjQFxuLy8gQGtleTogQCNAXCJ3aWxsQ2FsbFlvdUJhY2tJblwiQCNAIEBzb3VyY2U6IEAjQFwiV2lsbCBjYWxsIHlvdSBiYWNrIGluXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWluXCJAI0AgQHNvdXJjZTogQCNAXCJtaW4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG91cnNcIkAjQCBAc291cmNlOiBAI0BcImhvdXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZGF5c1wiQCNAIEBzb3VyY2U6IEAjQFwiZGF5c1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZXBseVdpdGhNZXNzYWdlL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvcndhcmQ6ICdGb3J3YXJkJyxcbiAgcmVwbHk6ICdSZXBseScsXG4gIGlnbm9yZTogJ0lnbm9yZScsXG4gIHRvVm9pY2VtYWlsOiAnVG8gdm9pY2VtYWlsJyxcbiAgYW5zd2VyOiAnQW5zd2VyJyxcbiAgYW5zd2VyQW5kRW5kOiAnQW5zd2VyICYgZW5kJyxcbiAgYW5zd2VyQW5kSG9sZDogJ0Fuc3dlciAmIGhvbGQnLFxufTtcblxuLy8gQGtleTogQCNAXCJmb3J3YXJkXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVwbHlcIkAjQCBAc291cmNlOiBAI0BcIlJlcGx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiaWdub3JlXCJAI0AgQHNvdXJjZTogQCNAXCJJZ25vcmVcIkAjQFxuLy8gQGtleTogQCNAXCJ0b1ZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVG8gVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5zd2VyXCJAI0AgQHNvdXJjZTogQCNAXCJBbnN3ZXJcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJBbmRFbmRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEVuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImFuc3dlckFuZEhvbGRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEhvbGRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvSW5jb21pbmdDYWxsUGFkL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVua25vd246ICdVbmtub3duJyxcbiAgYW5vbnltb3VzOiAnQW5vbnltb3VzJyxcbiAgYWN0aXZlQ2FsbDogJ0FjdGl2ZSBjYWxsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5rbm93blwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93blwiQCNAXG4vLyBAa2V5OiBAI0BcImFub255bW91c1wiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvSW5jb21pbmdDYWxsUGFnZS9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBoaWRlOiAnSGlkZScsXG4gIGVuZDogJ0VuZCcsXG4gIGtleXBhZDogJ0tleXBhZCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcImhpZGVcIkAjQCBAc291cmNlOiBAI0BcIkhpZGVcIkAjQFxuLy8gQGtleTogQCNAXCJlbmRcIkAjQCBAc291cmNlOiBAI0BcIkVuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImtleXBhZFwiQCNAIEBzb3VyY2U6IEAjQFwiS2V5cGFkXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0FjdGl2ZUNhbGxEaWFsUGFkL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVubXV0ZTogJ1VubXV0ZScsXG4gIG11dGU6ICdNdXRlJyxcbiAga2V5cGFkOiAnS2V5cGFkJyxcbiAgaG9sZDogJ0hvbGQnLFxuICBvbkhvbGQ6ICdPbiBIb2xkJyxcbiAgcGFyazogJ1BhcmsnLFxuICBzdG9wUmVjb3JkOiAnU3RvcCcsXG4gIHJlY29yZDogJ1JlY29yZCcsXG4gIGFkZDogJ0FkZCcsXG4gIHRyYW5zZmVyOiAnVHJhbnNmZXInLFxuICBmbGlwOiAnRmxpcCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcInVubXV0ZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5tdXRlXCJAI0Bcbi8vIEBrZXk6IEAjQFwibXV0ZVwiQCNAIEBzb3VyY2U6IEAjQFwiTXV0ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImtleXBhZFwiQCNAIEBzb3VyY2U6IEAjQFwiS2V5cGFkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIm9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhcmtcIkAjQCBAc291cmNlOiBAI0BcIlBhcmtcIkAjQFxuLy8gQGtleTogQCNAXCJzdG9wUmVjb3JkXCJAI0AgQHNvdXJjZTogQCNAXCJTdG9wXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVjb3JkXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNvcmRcIkAjQFxuLy8gQGtleTogQCNAXCJhZGRcIkAjQCBAc291cmNlOiBAI0BcIkFkZFwiQCNAXG4vLyBAa2V5OiBAI0BcInRyYW5zZmVyXCJAI0AgQHNvdXJjZTogQCNAXCJUcmFuc2ZlclwiQCNAXG4vLyBAa2V5OiBAI0BcImZsaXBcIkAjQCBAc291cmNlOiBAI0BcIkZsaXBcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbFBhZC9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmbGlwSGVhZGVyOiAnRmxpcCBDYWxsIHRvLi4uJyxcbiAgZmxpcDogJ0ZsaXAnLFxuICBjb21wbGV0ZTogJ0NvbXBsZXRlIEZsaXAnLFxufTtcblxuLy8gQGtleTogQCNAXCJmbGlwSGVhZGVyXCJAI0AgQHNvdXJjZTogQCNAXCJGbGlwIENhbGwgdG8uLi5cIkAjQFxuLy8gQGtleTogQCNAXCJmbGlwXCJAI0AgQHNvdXJjZTogQCNAXCJGbGlwXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29tcGxldGVcIkAjQCBAc291cmNlOiBAI0BcIkNvbXBsZXRlIEZsaXBcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRmxpcFBhbmVsL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvOiAnVG86JyxcbiAgdHJhbnNmZXJUbzogJ1RyYW5zZmVyIHRvJyxcbiAgYmxpbmRUcmFuc2ZlcjogJ1RyYW5zZmVyJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdFbnRlciBudW1iZXInLFxufTtcblxuLy8gQGtleTogQCNAXCJ0b1wiQCNAIEBzb3VyY2U6IEAjQFwiVG86XCJAI0Bcbi8vIEBrZXk6IEAjQFwidHJhbnNmZXJUb1wiQCNAIEBzb3VyY2U6IEAjQFwiVHJhbnNmZXIgdG9cIkAjQFxuLy8gQGtleTogQCNAXCJibGluZFRyYW5zZmVyXCJAI0AgQHNvdXJjZTogQCNAXCJUcmFuc2ZlclwiQCNAXG4vLyBAa2V5OiBAI0BcImVudGVyTmFtZU9yTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJFbnRlciBOdW1iZXJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvVHJhbnNmZXJQYW5lbC9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmtub3duOiAnVW5rbm93bicsXG4gIGFub255bW91czogJ0Fub255bW91cycsXG4gIGFjdGl2ZUNhbGxzOiAnQWN0aXZlIGNhbGxzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5rbm93blwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93blwiQCNAXG4vLyBAa2V5OiBAI0BcImFub255bW91c1wiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIkFjdGl2ZSBDYWxsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWN0aXZlQ2FsbDogJ0FjdGl2ZSBjYWxsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvQ2FsbEJhZGdlQ29udGFpbmVyL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vQ29udGFjdHM6ICdObyByZWNvcmRzIGZvdW5kJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9Db250YWN0c1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjb3JkcyBmb3VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0TGlzdC9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInNlYXJjaFBsYWNlaG9sZGVyXCJAI0AgQHNvdXJjZTogQCNAXCJTZWFyY2guLi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdHNWaWV3L2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFsbDogJ0FsbCcsXG4gIGNvbXBhbnk6ICdDb21wYW55JyxcbiAgcGVyc29uYWw6ICdQZXJzb25hbCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29tcGFueVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcInBlcnNvbmFsXCJAI0AgQHNvdXJjZTogQCNAXCJQZXJzb25hbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhY3REZXRhaWxzOiAnQ29udGFjdCBkZXRhaWxzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiY29udGFjdERldGFpbHNcIkAjQCBAc291cmNlOiBAI0BcIkNvbnRhY3QgRGV0YWlsc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0RGV0YWlsc1ZpZXcvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZ29vZ2xlOiAnR29vZ2xlJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vUmVjb3JkczogJ05vIHJlY2VudCByZWNvcmRzIGZvdW5kLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vUmVjb3Jkc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjZW50IHJlY29yZHMgZm91bmQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTm8gcmVjZW50IHJlY29yZHMgZm91bmQuJyxcbiAgaW5Cb3VuZDogJ0luYm91bmQnLFxuICBvdXRCb3VuZDogJ091dGJvdW5kJyxcbiAgbWlzc2VkOiAnTWlzc2VkIGNhbGwnLFxufTtcblxuLy8gQGtleTogQCNAXCJub1JlY29yZHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIHJlY2VudCByZWNvcmRzIGZvdW5kLlwiQCNAXG4vLyBAa2V5OiBAI0BcImluQm91bmRcIkAjQCBAc291cmNlOiBAI0BcIkluYm91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRCb3VuZFwiQCNAIEBzb3VyY2U6IEAjQFwiT3V0Ym91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJtaXNzZWRcIkAjQCBAc291cmNlOiBAI0BcIk1pc3NlZCBDYWxsXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2VudEFjdGl2aXR5Q2FsbHMvaTE4bi9lbi1HQi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVjZW50QWN0aXZpdGllczogJ1JlY2VudCBBY3Rpdml0aWVzJyxcbiAgdGV4dDogJ1RleHQnLFxuICBmYXg6ICdGYXgnLFxuICB2b2ljZW1haWw6ICdWb2ljZW1haWwnLFxuICBjYWxsOiAnQ2FsbCcsXG4gIGdtYWlsOiAnR21haWwnLFxufTtcblxuLy8gQGtleTogQCNAXCJyZWNlbnRBY3Rpdml0aWVzXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNlbnQgQWN0aXZpdGllc1wiQCNAXG4vLyBAa2V5OiBAI0BcInRleHRcIkAjQCBAc291cmNlOiBAI0BcIlRleHRcIkAjQFxuLy8gQGtleTogQCNAXCJmYXhcIkAjQCBAc291cmNlOiBAI0BcIkZheFwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImdtYWlsXCJAI0AgQHNvdXJjZTogQCNAXCJHbWFpbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWNlbnRBY3Rpdml0eUNvbnRhaW5lci9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdObyByZWNlbnQgcmVjb3JkcyBmb3VuZC4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5RW1haWxzL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9mZmxpbmVNb2RlOiAnT2ZmbGluZSBNb2RlJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwib2ZmbGluZU1vZGVcIkAjQCBAc291cmNlOiBAI0BcIk9mZmxpbmUgTW9kZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9PZmZsaW5lTW9kZUJhZGdlL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV1bGE6ICdFbmQgVXNlciBMaWNlbmNlIEFncmVlbWVudCcsXG4gIHNlcnZpY2VUZXJtczogJ1NlcnZpY2UgVGVybXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJldWxhXCJAI0AgQHNvdXJjZTogQCNAXCJFbmQgVXNlciBMaWNlbnNlIEFncmVlbWVudFwiQCNAXG4vLyBAa2V5OiBAI0BcInNlcnZpY2VUZXJtc1wiQCNAIEBzb3VyY2U6IEAjQFwiU2VydmljZSBUZXJtc1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9FdWxhL2kxOG4vZW4tR0IuanMiLCJpbXBvcnQgcHJlc2VuY2VTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9wcmVzZW5jZVN0YXR1cyc7XG5pbXBvcnQgZG5kU3RhdHVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUHJlc2VuY2UvZG5kU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcHJlc2VuY2VTdGF0dXMuYXZhaWxhYmxlXTogJ0F2YWlsYWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXTogJ0ludmlzaWJsZScsXG4gIFtwcmVzZW5jZVN0YXR1cy5idXMrZG5kU3RhdHVzLnRha2VBbGxDYWxsc106ICdCdXN5JyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3krZG5kU3RhdHVzLmRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzXTogJ0J1c3knLFxuICBbcHJlc2VuY2VTdGF0dXMuYnVzeStkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc106ICdEbyBub3QgRGlzdHVyYicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdXCJAI0AgQHNvdXJjZTogQCNAXCJBdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMub2ZmbGluZV1cIkAjQCBAc291cmNlOiBAI0BcIkludmlzaWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5idXN5K2RuZFN0YXR1cy50YWtlQWxsQ2FsbHNdXCJAI0AgQHNvdXJjZTogQCNAXCJCdXN5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmJ1c3krZG5kU3RhdHVzLmRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzXVwiQCNAIEBzb3VyY2U6IEAjQFwiQnVzeVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5idXN5K2RuZFN0YXR1cy5kb05vdEFjY2VwdEFueUNhbGxzXVwiQCNAIEBzb3VyY2U6IEAjQFwiRG8gbm90IERpc3R1cmJcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUHJlc2VuY2VJdGVtL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN0YXR1czogJ1N0YXR1cycsXG4gIGFjY2VwdFF1ZXVlQ2FsbHM6ICdBY2NlcHQgY2FsbCBxdWV1ZSBjYWxscycsXG59O1xuXG4vLyBAa2V5OiBAI0BcInN0YXR1c1wiQCNAIEBzb3VyY2U6IEAjQFwiU3RhdHVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWNjZXB0UXVldWVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQWNjZXB0IGNhbGwgcXVldWUgY2FsbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbjogJ0VuZ2xpc2gnLFxuICBqYTogJ0phcGFuZXNlJyxcbiAgZnI6ICdGcmVuY2gnLFxuICBkZTogJ0RldXRzY2gnLFxuICBlczogJ1NwYW5pc2gnLFxuICBpdDogJ0l0YWxpYW4nLFxuICBwdDogJ1BvcnR1Z3Vlc2UnLFxufTtcclxuXG4vLyBAa2V5OiBAI0BcImVuXCJAI0AgQHNvdXJjZTogQCNAXCJFbmdsaXNoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiamFcIkAjQCBAc291cmNlOiBAI0BcIkphcGFuZXNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJcIkAjQCBAc291cmNlOiBAI0BcIkZyZW5jaFwiQCNAXG4vLyBAa2V5OiBAI0BcImRlXCJAI0AgQHNvdXJjZTogQCNAXCJEZXV0c2NoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZXNcIkAjQCBAc291cmNlOiBAI0BcIlNwYW5pc2hcIkAjQFxuLy8gQGtleTogQCNAXCJpdFwiQCNAIEBzb3VyY2U6IEAjQFwiSXRhbGlhblwiQCNAXG4vLyBAa2V5OiBAI0BcInB0XCJAI0AgQHNvdXJjZTogQCNAXCJQb3J0dWd1ZXNlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0xvY2FsZVBpY2tlci9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWdpb246ICdSZWdpb24nLFxuICBjYWxsaW5nOiAnQ2FsbGluZycsXG4gIGxvZ291dDogJ0xvZyBvdXQnLFxuICB2ZXJzaW9uOiAnVmVyc2lvbicsXG4gIHNldHRpbmdzOiAnU2V0dGluZ3MnLFxuICBjbGlja1RvRGlhbDogJ0NsaWNrIHRvIERpYWwnLFxuICBhdXRvQ3JlYXRlTG9nOiAnQXV0by1jcmVhdGUgQ2FsbCBMb2cnLFxuICBjbGlja1RvU01TOiAnQ2xpY2sgdG8gU01TJyxcbiAgY2xpY2tUb0RpYWxTTVM6ICdDbGljayB0byBEaWFsL1NNUycsXG4gIGF1dG9DcmVhdGVTTVNMb2c6ICdBdXRvLWNyZWF0ZSBTTVMgbG9nJyxcbiAgYXV0b0xvZ0NhbGxzOiAnQXV0byBsb2cgY2FsbHMnLFxuICBhdXRvTG9nU01TOiAnQXV0byBsb2cgU01TJyxcbn07XG5cblxuLy8gQGtleTogQCNAXCJyZWdpb25cIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxpbmdcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJsb2dvdXRcIkAjQCBAc291cmNlOiBAI0BcIkxvZ291dFwiQCNAXG4vLyBAa2V5OiBAI0BcInZlcnNpb25cIkAjQCBAc291cmNlOiBAI0BcIlZlcnNpb25cIkAjQFxuLy8gQGtleTogQCNAXCJzZXR0aW5nc1wiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3NcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvRGlhbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gRGlhbFwiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9DcmVhdGVMb2dcIkAjQCBAc291cmNlOiBAI0BcIkF1dG8tY3JlYXRlIENhbGwgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0b0NyZWF0ZVNNU0xvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0by1jcmVhdGUgU01TIExvZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9Mb2dDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0byBsb2cgY2FsbHNcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRvTG9nU01TXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRvIGxvZyBTTVNcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvU01TXCJAI0AgQHNvdXJjZTogQCNAXCJDbGljayB0byBTTVNcIkAjQFxuLy8gQGtleTogQCNAXCJjbGlja1RvRGlhbFNNU1wiQCNAIEBzb3VyY2U6IEAjQFwiQ2xpY2sgdG8gRGlhbC9TTVNcIkAjQFxuLy8gQGtleTogQCNAXCJhdWRpb1wiQCNAIEBzb3VyY2U6IEAjQFwiQXVkaW9cIkAjQFxuLy8gQGtleTogQCNAXCJsYW5ndWFnZVwiQCNAIEBzb3VyY2U6IEAjQFwiTGFuZ3VhZ2VcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvU2V0dGluZ3NQYW5lbC9pMThuL2VuLUdCLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1bmF1dGhvcml6ZWQ6ICdBdXRob3Jpc2UnLFxuICBhdXRob3JpemVkOiAnVW5hdXRob3Jpc2UnLFxuICB1bmF1dGhvcml6ZWRUaXRsZTogJ0F1dGhvcmlzZWQgQWNjb3VudCcsXG4gIHRvb2x0aXA6ICdZb3UgaGF2ZSBhdXRob3Jpc2VkIFJpbmdDZW50cmFsIGZvciBHb29nbGUgdG8gYWNjZXNzIHlvdXIgYWNjb3VudCAnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmF1dGhvcml6ZWRcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImF1dGhvcml6ZWRcIkAjQCBAc291cmNlOiBAI0BcIlVuYXV0aG9yaXplXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdXRob3JpemVkVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZWQgQWNjb3VudFwiQCNAXG4vLyBAa2V5OiBAI0BcInRvb2x0aXBcIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIGF1dGhvcml6ZWQgUmluZ0NlbnRyYWwgZm9yIEdvb2dsZSB0byBhY2Nlc3MgeW91ciBhY2NvdW50IFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluY29taW5nQ2FsbDogJ0luY29taW5nIENhbGwgRnJvbTonLFxuICBhbnN3ZXI6ICdBbnN3ZXInLFxuICBpZ25vcmU6ICdJZ25vcmUnLFxufTtcblxuLy8gQGtleTogQCNAXCJpbmNvbWluZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluY29taW5nIENhbGwgRnJvbTpcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlclwiQCNAXG4vLyBAa2V5OiBAI0BcImlnbm9yZVwiQCNAIEBzb3VyY2U6IEAjQFwiSWdub3JlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyL2kxOG4vZW4tR0IuanMiLCJpbXBvcnQgRW51bSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRW51bShbXHJcbiAgJ2J1c2luZXNzJyxcclxuICAnZXh0ZW5zaW9uJyxcclxuICAnaG9tZScsXHJcbiAgJ21vYmlsZScsXHJcbiAgJ3Bob25lJyxcclxuICAndW5rbm93bicsXHJcbiAgJ2NvbXBhbnknLFxyXG4gICdkaXJlY3QnLFxyXG5dKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVudW1zL3Bob25lVHlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9