webpackJsonp([9],{

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  c2dTitle: 'Chamar com {brand}',
  smsTitle: 'SMS com {brand}'
};

// @key: @#@"c2dTitle"@#@ @source: @#@"Call with {brand}"@#@
// @key: @#@"smsTitle"@#@ @source: @#@"SMS with {brand}"@#@

/***/ }),

/***/ 1044:
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

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Falha de login devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Acesso negado. Entre em contato com o Suporte.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Sessão expirada. Conecte-se.'), _authMessages$interna);

// @key: @#@"[authMessages.internalError]"@#@ @source: @#@"Login failed due to internal errors. Please try again later."@#@
// @key: @#@"[authMessages.accessDenied]"@#@ @source: @#@"Access denied. Please contact support."@#@
// @key: @#@"[authMessages.sessionExpired]"@#@ @source: @#@"Session expired. Please sign in."@#@


/***/ }),

/***/ 1055:
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

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Insira um número de telefone válido.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Defina o {areaCodeLink} para usar números de telefone locais de sete dígitos.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Não há suporte de discagem para números de emergência ou serviço especiais.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Falha de conexão. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Não é possível conectar devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'O número de ramal não existe.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Não é possível conectar devido a erros de rede. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'O ramal pode fazer chamadas com o aplicativo de desktop.\n    Se você deseja alternar para outras opções de chamada,\n    entre em contato com o administrador da conta para fazer um upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'código de área'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'telus911', 'Não há suporte para a discagem de emergência.'), _callErrors$noToNumbe);

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

/***/ 1066:
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

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Configurações salvas com sucesso.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Configurações salvas com sucesso. Verifique se o {brand} para Desktop está instalado no computador.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Selecione como você deseja fazer a chamada na seção Chamadas. Informe sua localização ao especificar o código de país e área (se disponível) na seção Região para fazer chamadas locais com o aplicativo.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Selecione como você deseja fazer a chamada na seção Chamadas.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Suas permissões foram alteradas recentemente. Acesse o {link} para verificar as opções de Chamada.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'As informações de números de telefone foram alteradas recentemente. Acesse o {link} para verificar as opções de Chamada.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Configurações > Chamada'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Suas permissões foram alteradas e não é possível fazer chamadas com o Navegador. Para obter mais detalhes, entre em contato com o administrador da conta.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Não há suporte de discagem para números de emergência ou serviço especiais. Em uma emergência, use seu telefone fixo tradicional ou sem fio para fazer uma chamada para um número de emergência.'), _callingSettingsMessa);

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

/***/ 1077:
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
  region: 'Região'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Configurações salvas com sucesso.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'A região anterior não é mais suportada para sua conta.\n    Verifique as novas {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'configurações de região'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Insira um código de área válido.'), _region$regionSetting);

// @key: @#@"region"@#@ @source: @#@"Region"@#@
// @key: @#@"[regionSettingsMessages.saveSuccess]"@#@ @source: @#@"Settings saved successfully."@#@
// @key: @#@"[regionSettingsMessages.dialingPlansChanged]"@#@ @source: @#@"The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}."@#@
// @key: @#@"regionSettings"@#@ @source: @#@"region settings"@#@
// @key: @#@"[regionSettingsMessages.areaCodeInvalid]"@#@ @source: @#@"Please enter a valid area code."@#@


/***/ }),

/***/ 1088:
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

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Enviado com sucesso.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Erro ao enviar a mensagem.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Erro de validação do número de telefone.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Insira o texto para envio.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'Você não tem permissão para enviar mensagens.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'Você deve selecionar um número de telefone para enviar'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Número de telefone inválido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Insira um número de recebimento válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'O texto é muito longo. Limitado a 1000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'O número do destinatário é inválido'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Defina o {areaCodeLink} para usar números de telefone locais de sete dígitos.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Não há suporte de discagem para números de emergência ou serviço especiais.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Falha de conexão. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Não é possível conectar devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'O número de ramal não existe.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Não é possível conectar devido a erros de rede. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'Requer um número de telefone para uma enviar mensagem de texto para os destinatários fora da empresa. Contate o Administrador para adicionar um número direto à conta.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Não é possível enviar para um número de ramal com o número de telefone principal. Se você deseja enviar para um Número de ramal, insira um Número de ramal.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Não há suporte para o envio de SMS para um número de telefone internacional.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'código de área'), _messageSenderMessage);

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

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Limite de solicitações excedido. O aplicativo continuará em {ttl} segundos.'
};

// @key: @#@"rateExceeded"@#@ @source: @#@"Request limit exceeded. App will resume in {ttl} seconds."@#@


/***/ }),

/***/ 1110:
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

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'A conexão de rede foi perdida.');

// @key: @#@"[connectivityMonitorMessages.disconnected]"@#@ @source: @#@"Network connection is lost."@#@


/***/ }),

/***/ 1121:
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

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Falha ao conectar ao servidor de telefone da Web.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, 'Telefone da Web registrado.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Há suporte para ligação com o navegador somente no Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'É possível registrar no máximo cinco telefones Web.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'No momento, o ramal não pode fazer chamadas de saída com o navegador. Entre em contato com o representante da conta para fazer um upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'Você não tem permissão para enviar mensagens.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, 'Não é possível enviar chamadas para caixa postal devido a um erro interno'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, 'Não é possível deixar a chamada sem som no momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, 'Não é possível colocar a chamada em espera no momento.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, 'Não é possível transferir a chamada. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, 'Não é possível gravar a chamada no momento. Código de erro: {errorCode}'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, 'Sua conta não tem o recurso de gravação de chamadas. Entre em contato com o administrador da conta.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, 'Não é possível transferir a chamada. Tente novamente mais tarde.'), _webphoneErrors$conne);

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

/***/ 1133:
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

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Sua edição não oferece suporte à integração com {application}. Entre em contato com o representante da conta para fazer upgrade da edição do {brand}.');

// @key: @#@"[permissionMessages.invalidTier]"@#@ @source: @#@"Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition."@#@


/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Entrar',
  version: 'Versão'
};

// @key: @#@"loginButton"@#@ @source: @#@"Sign In"@#@
// @key: @#@"version"@#@ @source: @#@"Version"@#@


/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(276);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$save$callingOp;

var _callingOptions = __webpack_require__(368);

var _callingOptions2 = _interopRequireDefault(_callingOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$save$callingOp = {
  title: 'Chamadas',
  save: 'Salvar'
}, (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.softphone, '{brand} para Desktop'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.myphone, 'Meu telefone {brand}'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.otherphone, 'Outro telefone'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.customphone, 'Telefone personalizado'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.browser, 'Navegador'), (0, _defineProperty3.default)(_title$save$callingOp, 'makeCallsWith', 'Fazer minhas chamadas com'), (0, _defineProperty3.default)(_title$save$callingOp, 'ringoutHint', 'Ligar para meu local primeiro e, em seguida, conectar ao destinatário da chamada'), (0, _defineProperty3.default)(_title$save$callingOp, 'myLocationLabel', 'Meu local'), (0, _defineProperty3.default)(_title$save$callingOp, 'press1ToStartCallLabel', 'Solicitar discar 1 antes de conectar a chamada'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.browser + 'Tooltip', 'Use esta opção para fazer e receber chamadas usando o microfone e o alto-falante do computador.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.softphone + 'Tooltip', 'Use esta opção para fazer e receber chamadas usando o aplicativo {brand} para Desktop.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.myphone + 'Tooltip', 'Use esta opção para fazer chamadas usando o telefone {brand}.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.myphone + 'Tooltip1', 'Para a chamada efetuada, o telefone {brand} toca primeiro e, em seguida, a parte de destino.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.otherphone + 'Tooltip', 'Use esta opção para fazer chamadas usando outros telefones, como o residencial ou celular, adicionado no Ramal do {brand}.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.otherphone + 'Tooltip1', 'Para a chamada efetuada, o telefone toca primeiro e, em seguida, a parte de destino.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.customphone + 'Tooltip', 'Use esta opção para fazer chamadas usando qualquer telefone de sua escolha ao inserir um número de telefone válido no campo abaixo.'), (0, _defineProperty3.default)(_title$save$callingOp, _callingOptions2.default.customphone + 'Tooltip1', 'Para a chamada efetuada, o telefone toca primeiro e, em seguida, a parte de destino.'), _title$save$callingOp);

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

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Salvar'
};


/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  save: 'Salvar',
  title: 'Região',
  NAOnlyMessage: 'Defina seu código de área. Ele será usado para discagem local.',
  MultiWithNAMessage: 'Defina o país e o código de área da sua região. Isso será usado para discagem local e a formatação de número de telefone.',
  MultiWithoutNAMessage: 'Selecione o país onde você está localizado. Isso será usado para discagem local e para a formação de número de telefone.',
  country: 'País',
  areaCode: 'Código de área',
  areaCodePlaceholder: 'Inserir código de área'
};

// @key: @#@"title"@#@ @source: @#@"Region"@#@
// @key: @#@"NAOnlyMessage"@#@ @source: @#@"Please set your area code. This will be used for local dialing."@#@
// @key: @#@"MultiWithNAMessage"@#@ @source: @#@"Please set the country and area code for your region. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"MultiWithoutNAMessage"@#@ @source: @#@"Please select the country you locate in. This will be used for local dialing and phone number formatting."@#@
// @key: @#@"country"@#@ @source: @#@"Country"@#@
// @key: @#@"areaCode"@#@ @source: @#@"Area Code"@#@
// @key: @#@"areaCodePlaceholder"@#@ @source: @#@"Enter Area Code"@#@


/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  AR: 'Argentina',
  AT: 'Áustria',
  BH: 'Bahrain',
  BR: 'Brasil',
  BG: 'Bulgária',
  CA: 'Canadá',
  CL: 'Chile',
  CN: 'China',
  HR: 'Croácia',
  CY: 'Chipre',
  CZ: 'República Tcheca',
  DK: 'Dinamarca',
  DO: 'República Dominicana',
  EE: 'Estônia',
  FI: 'Finlândia',
  FR: 'França',
  DE: 'Alemanha',
  HK: 'Hong Kong',
  HU: 'Hungria',
  IE: 'Irlanda',
  IL: 'Israel',
  IN: 'Índia',
  IT: 'Itália',
  JP: 'Japão',
  LV: 'Látvia',
  LT: 'Lituânia',
  LU: 'Luxemburgo',
  MY: 'Malásia',
  MX: 'México',
  NL: 'Holanda',
  NO: 'Noruega',
  PA: 'Panamá',
  PH: 'Filipinas',
  PL: 'Polônia',
  PT: 'Portugal',
  RO: 'Romênia',
  SK: 'Eslováquia',
  SI: 'Eslovênia',
  ES: 'Espanha',
  SE: 'Suécia',
  CH: 'Suíça',
  TR: 'Turquia',
  GB: 'Reino Unido',
  AU: 'Austrália',
  GE: 'Geórgia',
  ID: 'Indonésia',
  KE: 'Quênia',
  NG: 'Nigéria',
  PK: 'Paquistão',
  ZA: 'África do Sul',
  KR: 'Coreia do Sul',
  SG: 'Cingapura',
  TW: 'Taiwan',
  UA: 'Ucrânia',
  US: 'Estados Unidos',
  VN: 'Vietnã',
  BE: 'Bélgica',
  BJ: 'Benin',
  SV: 'El Salvador',
  GH: 'Gana',
  GR: 'Grécia',
  GN: 'Guiné',
  NZ: 'Nova Zelândia',
  PE: 'Peru',
  PR: 'Porto Rico'
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

/***/ 1199:
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

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Telefone comercial'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Telefone com ramal'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Telefone residencial'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Telefone celular'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Telefone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Tipo de telefone desconhecido'), _phoneTypes$business$);

// @key: @#@"[phoneTypes.business]"@#@ @source: @#@"Business Phone"@#@
// @key: @#@"[phoneTypes.extension]"@#@ @source: @#@"Extension Phone"@#@
// @key: @#@"[phoneTypes.home]"@#@ @source: @#@"Home Phone"@#@
// @key: @#@"[phoneTypes.mobile]"@#@ @source: @#@"Mobile Phone"@#@
// @key: @#@"[phoneTypes.phone]"@#@ @source: @#@"Phone"@#@
// @key: @#@"[phoneTypes.unknown]"@#@ @source: @#@"Unknown Phone Type"@#@
// @key: @#@"[phoneTypes.company]"@#@ @source: @#@"Company Phone"@#@
// @key: @#@"[phoneTypes.direct]"@#@ @source: @#@"Direct Phone"@#@


/***/ }),

/***/ 1210:
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

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Conta'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contato'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.rcContact, '{brand}'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Oportunidade'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'Usuário do sistema'), _phoneSources$account);

// @key: @#@"[phoneSources.account]"@#@ @source: @#@"Account"@#@
// @key: @#@"[phoneSources.contact]"@#@ @source: @#@"Contact"@#@
// @key: @#@"[phoneSources.rcContact]"@#@ @source: @#@"{brand}"@#@
// @key: @#@"[phoneSources.lead]"@#@ @source: @#@"Lead"@#@
// @key: @#@"[phoneSources.opportunity]"@#@ @source: @#@"Opportunity"@#@
// @key: @#@"[phoneSources.systemUser]"@#@ @source: @#@"System User"@#@


/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'Para',
  enterNameOrNumber: 'Insira o número ou o nome...'
};

// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@


/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Direto',
  MainCompanyNumber: 'Principal',
  CompanyNumber: 'Empresa',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Bloqueado',
  AdditionalCompanyNumber: 'Empresa',
  ForwardedCompanyNumber: 'Encaminhado',
  from: 'De'
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

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'De',
  to: 'Para',
  enterNameOrNumber: 'Insira o número ou o nome...',
  typeMessage: 'Digite a mensagem...',
  send: 'Enviar'
};

// @key: @#@"from"@#@ @source: @#@"From"@#@
// @key: @#@"to"@#@ @source: @#@"To"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number or Name..."@#@
// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Registrando...',
  logCall: 'Registrar chamada',
  editLog: 'Editar log',
  select: 'Selecionar um registro correspondente',
  OnHold: 'Em espera',
  Ringing: 'Toque',
  CallConnected: 'Chamada conectada',
  unknownUser: 'Usuário desconhecido',
  unknownNumber: 'Anônimo',
  unavailable: 'Indisponível',
  viewDetails: 'Exibir detalhes'
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

/***/ 1265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  typeMessage: 'Digite a mensagem...',
  send: 'Enviar'
};

// @key: @#@"typeMessage"@#@ @source: @#@"Type message..."@#@
// @key: @#@"send"@#@ @source: @#@"Send"@#@


/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  newConference: 'Nova conferência',
  dialInNumber: 'Número de discagem',
  host: 'Organizador',
  participants: 'Participantes',
  internationalParticipants: 'Participantes internacionais',
  internationalNumbersHeader: 'Selecionar os números de discagem internacionais',
  search: 'Pesquisar...',
  inviteWithText: 'Convidar com texto',
  inviteText: 'Entre na conferência do RingCentral.\n\nNúmeros de discagem: {dialInNumber} \n\n{internationals} \nAcesso de participantes: {participantCode} \n\nPrecisa de um número de telefone com discagem internacional? Acesse http://www.ringcentral.com/conferencing \n\nEsta chamada em conferência foi possibilitada pelo RingCentral Conferencing.'
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

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancelar',
  confirm: 'Confirmar'
};

// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"confirm"@#@ @source: @#@"Confirm"@#@


/***/ }),

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Conta',
  contact: 'Contato',
  lead: 'Lead',
  chooseEntity: 'Selecione o tipo de entidade',
  create: 'Criar'
};

// @key: @#@"account"@#@ @source: @#@"Account"@#@
// @key: @#@"contact"@#@ @source: @#@"Contact"@#@
// @key: @#@"lead"@#@ @source: @#@"Lead"@#@
// @key: @#@"chooseEntity"@#@ @source: @#@"Please select entity type"@#@
// @key: @#@"create"@#@ @source: @#@"Create"@#@


/***/ }),

/***/ 1310:
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
  editLog: 'Editar log',
  viewDetails: 'Exibir detalhes',
  addEntity: 'Criar novo',
  call: 'Chamada',
  conversation: 'Conversa',
  groupConversation: 'Conversa em grupo'
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

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Loading: 'Carregando...',
  search: 'Pesquisar...',
  noMessages: 'Nenhuma mensagem',
  noSearchResults: 'Nenhum registro correspondente encontrado'
};

// @key: @#@"Loading"@#@ @source: @#@"Loading..."@#@
// @key: @#@"search"@#@ @source: @#@"Search..."@#@
// @key: @#@"noMessages"@#@ @source: @#@"No Messages"@#@
// @key: @#@"noSearchResults"@#@ @source: @#@"No matching records found"@#@


/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Registrando...',
  logCall: 'Registrar chamada',
  editLog: 'Editar log',
  select: 'Selecionar um registro correspondente',
  OnHold: 'Em espera',
  Ringing: 'Toque',
  CallConnected: 'Chamada conectada',
  unknownUser: 'Usuário desconhecido',
  unknownNumber: 'Anônimo',
  unavailable: 'Indisponível',
  viewDetails: 'Exibir detalhes',
  addEntity: 'Criar novo',
  addLog: 'Log',
  text: 'Texto',
  call: 'Chamada',
  addContact: 'Adicionar contato',
  missedCall: 'Perdidas',
  inboundCall: 'Entrada',
  outboundCall: 'Saída',
  from: 'De',
  to: 'Para'
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

/***/ 1352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'Sem chamadas ativas',
  currentCall: 'Chamada atual',
  ringCall: 'Chamada sonora',
  onHoldCall: 'Chamada em espera',
  otherDeviceCall: 'Chamadas em andamento nos meus outros dispositivos'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"currentCall"@#@ @source: @#@"Current Call"@#@
// @key: @#@"ringCall"@#@ @source: @#@"Ringing Call"@#@
// @key: @#@"onHoldCall"@#@ @source: @#@"Call on Hold"@#@
// @key: @#@"otherDeviceCall"@#@ @source: @#@"Ongoing calls on my other devices"@#@


/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Registrando...',
  logCall: 'Registrar chamada',
  editLog: 'Editar log',
  select: 'Selecionar um registro correspondente',
  OnHold: 'Em espera',
  Ringing: 'Toque',
  CallConnected: 'Chamada conectada',
  unknownUser: 'Usuário desconhecido',
  unknownNumber: 'Anônimo',
  unavailable: 'Indisponível',
  viewDetails: 'Exibir detalhes',
  addEntity: 'Criar novo',
  addLog: 'Log',
  text: 'Texto',
  call: 'Chamada',
  missedCall: 'Perdidas',
  inboundCall: 'Entrada',
  outboundCall: 'Saída'
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

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'Sem chamadas ativas',
  noRecords: 'Nenhum resultado encontrado'
};

// @key: @#@"noActiveCalls"@#@ @source: @#@"No active calls"@#@
// @key: @#@"noRecords"@#@ @source: @#@"No results found"@#@


/***/ }),

/***/ 1385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Histórico'
};

// @key: @#@"title"@#@ @source: @#@"History"@#@


/***/ }),

/***/ 1396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Encaminhar',
  cancel: 'Cancelar',
  customNumber: 'Número personalizado'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"cancel"@#@ @source: @#@"Cancel"@#@
// @key: @#@"customNumber"@#@ @source: @#@"Custom number"@#@


/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancelar',
  reply: 'Responder',
  onMyWay: 'Estou a caminho',
  customMessage: 'Mensagem personalizada',
  callMeBackIn: 'Ligue de novo em',
  willCallYouBackIn: 'Você pode ligar de novo em',
  min: 'min.',
  hours: 'horas',
  days: 'dias'
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

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  forward: 'Encaminhar',
  reply: 'Responder',
  ignore: 'Ignorar',
  toVoicemail: 'Para caixa postal',
  answer: 'Responder',
  answerAndEnd: 'Responder e encerrar',
  answerAndHold: 'Responder e colocar em espera'
};

// @key: @#@"forward"@#@ @source: @#@"Forward"@#@
// @key: @#@"reply"@#@ @source: @#@"Reply"@#@
// @key: @#@"ignore"@#@ @source: @#@"Ignore"@#@
// @key: @#@"toVoicemail"@#@ @source: @#@"To Voicemail"@#@
// @key: @#@"answer"@#@ @source: @#@"Answer"@#@
// @key: @#@"answerAndEnd"@#@ @source: @#@"Answer & End"@#@
// @key: @#@"answerAndHold"@#@ @source: @#@"Answer & Hold"@#@


/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Desconhecido',
  anonymous: 'Anônimo',
  activeCall: 'Chamada ativa'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  hide: 'Ocultar',
  end: 'Fim',
  keypad: 'Teclado numérico'
};

// @key: @#@"hide"@#@ @source: @#@"Hide"@#@
// @key: @#@"end"@#@ @source: @#@"End"@#@
// @key: @#@"keypad"@#@ @source: @#@"Keypad"@#@


/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unmute: 'Desativar mudo',
  mute: 'Ativar mudo',
  keypad: 'Teclado numérico',
  hold: 'Aguardar',
  onHold: 'Em espera',
  park: 'Estacionar',
  stopRecord: 'Parar',
  record: 'Gravar',
  add: 'Adicionar',
  transfer: 'Transferência',
  flip: 'Transferir'
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

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  flipHeader: 'Transferir chamada para...',
  flip: 'Transferir',
  complete: 'Transferência concluída'
};

// @key: @#@"flipHeader"@#@ @source: @#@"Flip Call to..."@#@
// @key: @#@"flip"@#@ @source: @#@"Flip"@#@
// @key: @#@"complete"@#@ @source: @#@"Complete Flip"@#@


/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'Para:',
  transferTo: 'Transferir para',
  blindTransfer: 'Transferência',
  enterNameOrNumber: 'Inserir número'
};

// @key: @#@"to"@#@ @source: @#@"To:"@#@
// @key: @#@"transferTo"@#@ @source: @#@"Transfer to"@#@
// @key: @#@"blindTransfer"@#@ @source: @#@"Transfer"@#@
// @key: @#@"enterNameOrNumber"@#@ @source: @#@"Enter Number"@#@


/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unknown: 'Desconhecido',
  anonymous: 'Anônimo',
  activeCalls: 'Chamadas ativas'
};

// @key: @#@"unknown"@#@ @source: @#@"Unknown"@#@
// @key: @#@"anonymous"@#@ @source: @#@"Anonymous"@#@
// @key: @#@"activeCalls"@#@ @source: @#@"Active Calls"@#@


/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  activeCall: 'Chamada ativa'
};

// @key: @#@"activeCall"@#@ @source: @#@"Active Call"@#@


/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noContacts: 'Nenhum registro encontrado'
};

// @key: @#@"noContacts"@#@ @source: @#@"No records found"@#@


/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  searchPlaceholder: 'Pesquisar...'
};

// @key: @#@"searchPlaceholder"@#@ @source: @#@"Search..."@#@


/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  all: 'Todos',
  company: 'Empresa',
  personal: 'Pessoal'
};

// @key: @#@"all"@#@ @source: @#@"All"@#@
// @key: @#@"company"@#@ @source: @#@"Company"@#@
// @key: @#@"personal"@#@ @source: @#@"Personal"@#@


/***/ }),

/***/ 1542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactDetails: 'Detalhes de contato'
};

// @key: @#@"contactDetails"@#@ @source: @#@"Contact Details"@#@


/***/ }),

/***/ 1556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  google: 'Google'
};

/***/ }),

/***/ 1572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nenhum registro recente encontrado.'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@


/***/ }),

/***/ 1583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nenhum registro recente encontrado.',
  inBound: 'Entrada',
  outBound: 'Saída',
  missed: 'Chamada perdida'
};

// @key: @#@"noRecords"@#@ @source: @#@"No recent records found."@#@
// @key: @#@"inBound"@#@ @source: @#@"Inbound"@#@
// @key: @#@"outBound"@#@ @source: @#@"Outbound"@#@
// @key: @#@"missed"@#@ @source: @#@"Missed Call"@#@


/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  recentActivities: 'Atividades recentes',
  text: 'Texto',
  fax: 'Fax',
  voicemail: 'Caixa postal',
  call: 'Chamada',
  gmail: 'Gmail'
};

// @key: @#@"recentActivities"@#@ @source: @#@"Recent Activities"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"fax"@#@ @source: @#@"Fax"@#@
// @key: @#@"voicemail"@#@ @source: @#@"Voicemail"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"gmail"@#@ @source: @#@"Gmail"@#@

/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noRecords: 'Nenhum registro recente encontrado.'
};

/***/ }),

/***/ 1617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Modo offline'
};

// @key: @#@"offlineMode"@#@ @source: @#@"Offline Mode"@#@


/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'Contrato de licença do usuário final',
  serviceTerms: 'Termos de serviço'
};

// @key: @#@"eula"@#@ @source: @#@"End User License Agreement"@#@
// @key: @#@"serviceTerms"@#@ @source: @#@"Service Terms"@#@


/***/ }),

/***/ 1639:
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

exports.default = (_presenceStatus$avail = {}, (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.available, 'Disponível'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.offline, 'Invisível'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.takeAllCalls, 'Ocupado'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptDepartmentCalls, 'Ocupado'), (0, _defineProperty3.default)(_presenceStatus$avail, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptAnyCalls, 'Não perturbe'), _presenceStatus$avail);

// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[presenceStatus.busy+dndStatus.takeAllCalls]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.busy+dndStatus.doNotAcceptDepartmentCalls]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[presenceStatus.busy+dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@


/***/ }),

/***/ 1650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  status: 'Status',
  acceptQueueCalls: 'Aceitar chamadas em fila'
};

// @key: @#@"status"@#@ @source: @#@"Status"@#@
// @key: @#@"acceptQueueCalls"@#@ @source: @#@"Accept call queue calls"@#@


/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'English',
  ja: 'Japanese',
  fr: 'Francês',
  de: 'Deutsch',
  es: 'Espanhol',
  it: 'Italiano',
  pt: 'Português'
};

// @key: @#@"en"@#@ @source: @#@"English"@#@
// @key: @#@"ja"@#@ @source: @#@"Japanese"@#@
// @key: @#@"fr"@#@ @source: @#@"French"@#@
// @key: @#@"de"@#@ @source: @#@"Deutsch"@#@
// @key: @#@"es"@#@ @source: @#@"Spanish"@#@
// @key: @#@"it"@#@ @source: @#@"Italian"@#@
// @key: @#@"pt"@#@ @source: @#@"Portuguese"@#@


/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Região',
  calling: 'Chamadas',
  logout: 'Logout',
  version: 'Versão',
  settings: 'Configurações',
  clickToDial: 'Clique para discar',
  autoCreateLog: 'Criar log de chamadas automaticamente',
  autoCreateSMSLog: 'Criar log de SMS automaticamente',
  autoLogCalls: 'Registrar chamadas automaticamente',
  autoLogSMS: 'Registrar SMS automaticamente',
  clickToSMS: 'Clicar para enviar mensagem de texto',
  clickToDialSMS: 'Clique para discar/enviar mensagem de texto'
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

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unauthorized: 'Autorizar',
  authorized: 'Cancelar autorização',
  unauthorizedTitle: 'Conta autorizada',
  tooltip: 'Você autorizou o RingCentral for Google a acessar sua conta '
};

// @key: @#@"unauthorized"@#@ @source: @#@"Authorize"@#@
// @key: @#@"authorized"@#@ @source: @#@"Unauthorize"@#@
// @key: @#@"unauthorizedTitle"@#@ @source: @#@"Authorized Account"@#@
// @key: @#@"tooltip"@#@ @source: @#@"You have authorized RingCentral for Google to access your account "@#@

/***/ }),

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  incomingCall: 'Chamada recebida de:',
  answer: 'Responder',
  ignore: 'Ignorar'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DaHJvbWVBZGFwdGVyL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbEFsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1dlYnBob25lQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TYXZlQnV0dG9uL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9saWIvY291bnRyeU5hbWVzL3B0LUJSLmpzIiwid2VicGFjazovLy9saWIvcGhvbmVUeXBlTmFtZXMvcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2xpYi9waG9uZVNvdXJjZU5hbWVzL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2lwaWVudHNJbnB1dC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ29uZmVyZW5jZVBhbmVsL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTW9kYWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL01lc3NhZ2VJdGVtL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWVzc2FnZUxpc3QvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BY3RpdmVDYWxsSXRlbS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxzUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NhbGxMaXN0L2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvQ2FsbEhpc3RvcnlQYWdlL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRm9yd2FyZEZvcm0vaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZXBseVdpdGhNZXNzYWdlL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSW5jb21pbmdDYWxsUGFkL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvSW5jb21pbmdDYWxsUGFnZS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0FjdGl2ZUNhbGxEaWFsUGFkL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWN0aXZlQ2FsbFBhZC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQ3RybFBhZ2UvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29udGFpbmVycy9DYWxsQmFkZ2VDb250YWluZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TGlzdC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RzVmlldy9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0NvbnRhY3RTb3VyY2VGaWx0ZXIvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0RGV0YWlsc1ZpZXcvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVjZW50QWN0aXZpdHlNZXNzYWdlcy9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5Q2FsbHMvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZWNlbnRBY3Rpdml0eUNvbnRhaW5lci9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5RW1haWxzL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL0V1bGEvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QcmVzZW5jZUl0ZW0vaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QcmVzZW5jZVNldHRpbmdTZWN0aW9uL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9jYWxlUGlja2VyL2kxOG4vcHQtQlIuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU2V0dGluZ3NQYW5lbC9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhvcml6ZVNldHRpbmdzUGFuZWwvaTE4bi9wdC1CUi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL3B0LUJSLmpzIiwid2VicGFjazovLy9lbnVtcy9waG9uZVR5cGVzLmpzP2Y0M2YqKioqKioqKiJdLCJuYW1lcyI6WyJjMmRUaXRsZSIsInNtc1RpdGxlIiwiaW50ZXJuYWxFcnJvciIsImFjY2Vzc0RlbmllZCIsInNlc3Npb25FeHBpcmVkIiwibm9Ub051bWJlciIsIm5vQXJlYUNvZGUiLCJzcGVjaWFsTnVtYmVyIiwiY29ubmVjdEZhaWxlZCIsIm5vdEFuRXh0ZW5zaW9uIiwibmV0d29ya0Vycm9yIiwibm9SaW5nb3V0RW5hYmxlIiwic2F2ZVN1Y2Nlc3MiLCJzYXZlU3VjY2Vzc1dpdGhTb2Z0cGhvbmUiLCJmaXJzdExvZ2luIiwiZmlyc3RMb2dpbk90aGVyIiwicGVybWlzc2lvbkNoYW5nZWQiLCJwaG9uZU51bWJlckNoYW5nZWQiLCJ3ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkIiwiZW1lcmdlbmN5Q2FsbGluZ05vdEF2YWlsYWJsZSIsInJlZ2lvbiIsImRpYWxpbmdQbGFuc0NoYW5nZWQiLCJhcmVhQ29kZUludmFsaWQiLCJzZW5kU3VjY2VzcyIsInNlbmRFcnJvciIsIm51bWJlclZhbGlkYXRlRXJyb3IiLCJ0ZXh0RW1wdHkiLCJub1Blcm1pc3Npb24iLCJzZW5kZXJFbXB0eSIsInJlY2lwaWVudHNFbXB0eSIsInRleHRUb29Mb25nIiwicmVjaXBpZW50TnVtYmVySW52YWxpZHMiLCJzZW5kZXJOdW1iZXJJbnZhbGlkIiwibm90U21zVG9FeHRlbnNpb24iLCJpbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkIiwicmF0ZUV4Y2VlZGVkIiwiZGlzY29ubmVjdGVkIiwiY29ubmVjdGVkIiwiYnJvd3Nlck5vdFN1cHBvcnRlZCIsIndlYnBob25lQ291bnRPdmVyTGltaXQiLCJub3RPdXRib3VuZENhbGxXaXRob3V0REwiLCJnZXRTaXBQcm92aXNpb25FcnJvciIsInRvVm9pY2VNYWlsRXJyb3IiLCJtdXRlRXJyb3IiLCJob2xkRXJyb3IiLCJmbGlwRXJyb3IiLCJyZWNvcmRFcnJvciIsInJlY29yZERpc2FibGVkIiwidHJhbnNmZXJFcnJvciIsImludmFsaWRUaWVyIiwibG9naW5CdXR0b24iLCJ2ZXJzaW9uIiwidGl0bGUiLCJzYXZlIiwic29mdHBob25lIiwibXlwaG9uZSIsIm90aGVycGhvbmUiLCJjdXN0b21waG9uZSIsImJyb3dzZXIiLCJOQU9ubHlNZXNzYWdlIiwiTXVsdGlXaXRoTkFNZXNzYWdlIiwiTXVsdGlXaXRob3V0TkFNZXNzYWdlIiwiY291bnRyeSIsImFyZWFDb2RlIiwiYXJlYUNvZGVQbGFjZWhvbGRlciIsIkFSIiwiQVQiLCJCSCIsIkJSIiwiQkciLCJDQSIsIkNMIiwiQ04iLCJIUiIsIkNZIiwiQ1oiLCJESyIsIkRPIiwiRUUiLCJGSSIsIkZSIiwiREUiLCJISyIsIkhVIiwiSUUiLCJJTCIsIklOIiwiSVQiLCJKUCIsIkxWIiwiTFQiLCJMVSIsIk1ZIiwiTVgiLCJOTCIsIk5PIiwiUEEiLCJQSCIsIlBMIiwiUFQiLCJSTyIsIlNLIiwiU0kiLCJFUyIsIlNFIiwiQ0giLCJUUiIsIkdCIiwiQVUiLCJHRSIsIklEIiwiS0UiLCJORyIsIlBLIiwiWkEiLCJLUiIsIlNHIiwiVFciLCJVQSIsIlVTIiwiVk4iLCJCRSIsIkJKIiwiU1YiLCJHSCIsIkdSIiwiR04iLCJOWiIsIlBFIiwiUFIiLCJidXNpbmVzcyIsImV4dGVuc2lvbiIsImhvbWUiLCJtb2JpbGUiLCJwaG9uZSIsInVua25vd24iLCJhY2NvdW50IiwiY29udGFjdCIsInJjQ29udGFjdCIsImxlYWQiLCJvcHBvcnR1bml0eSIsInN5c3RlbVVzZXIiLCJ0byIsImVudGVyTmFtZU9yTnVtYmVyIiwiRGlyZWN0TnVtYmVyIiwiTWFpbkNvbXBhbnlOdW1iZXIiLCJDb21wYW55TnVtYmVyIiwiQ29tcGFueUZheE51bWJlciIsIkJsb2NrZWQiLCJBZGRpdGlvbmFsQ29tcGFueU51bWJlciIsIkZvcndhcmRlZENvbXBhbnlOdW1iZXIiLCJmcm9tIiwidHlwZU1lc3NhZ2UiLCJzZW5kIiwibG9nZ2luZyIsImxvZ0NhbGwiLCJlZGl0TG9nIiwic2VsZWN0IiwiT25Ib2xkIiwiUmluZ2luZyIsIkNhbGxDb25uZWN0ZWQiLCJ1bmtub3duVXNlciIsInVua25vd25OdW1iZXIiLCJ1bmF2YWlsYWJsZSIsInZpZXdEZXRhaWxzIiwibmV3Q29uZmVyZW5jZSIsImRpYWxJbk51bWJlciIsImhvc3QiLCJwYXJ0aWNpcGFudHMiLCJpbnRlcm5hdGlvbmFsUGFydGljaXBhbnRzIiwiaW50ZXJuYXRpb25hbE51bWJlcnNIZWFkZXIiLCJzZWFyY2giLCJpbnZpdGVXaXRoVGV4dCIsImludml0ZVRleHQiLCJjYW5jZWwiLCJjb25maXJtIiwiY2hvb3NlRW50aXR5IiwiY3JlYXRlIiwiYWRkTG9nIiwiYWRkRW50aXR5IiwiY2FsbCIsImNvbnZlcnNhdGlvbiIsImdyb3VwQ29udmVyc2F0aW9uIiwiTG9hZGluZyIsIm5vTWVzc2FnZXMiLCJub1NlYXJjaFJlc3VsdHMiLCJ0ZXh0IiwiYWRkQ29udGFjdCIsIm1pc3NlZENhbGwiLCJpbmJvdW5kQ2FsbCIsIm91dGJvdW5kQ2FsbCIsIm5vQWN0aXZlQ2FsbHMiLCJjdXJyZW50Q2FsbCIsInJpbmdDYWxsIiwib25Ib2xkQ2FsbCIsIm90aGVyRGV2aWNlQ2FsbCIsIm5vUmVjb3JkcyIsImZvcndhcmQiLCJjdXN0b21OdW1iZXIiLCJyZXBseSIsIm9uTXlXYXkiLCJjdXN0b21NZXNzYWdlIiwiY2FsbE1lQmFja0luIiwid2lsbENhbGxZb3VCYWNrSW4iLCJtaW4iLCJob3VycyIsImRheXMiLCJpZ25vcmUiLCJ0b1ZvaWNlbWFpbCIsImFuc3dlciIsImFuc3dlckFuZEVuZCIsImFuc3dlckFuZEhvbGQiLCJhbm9ueW1vdXMiLCJhY3RpdmVDYWxsIiwiaGlkZSIsImVuZCIsImtleXBhZCIsInVubXV0ZSIsIm11dGUiLCJob2xkIiwib25Ib2xkIiwicGFyayIsInN0b3BSZWNvcmQiLCJyZWNvcmQiLCJhZGQiLCJ0cmFuc2ZlciIsImZsaXAiLCJmbGlwSGVhZGVyIiwiY29tcGxldGUiLCJ0cmFuc2ZlclRvIiwiYmxpbmRUcmFuc2ZlciIsImFjdGl2ZUNhbGxzIiwibm9Db250YWN0cyIsInNlYXJjaFBsYWNlaG9sZGVyIiwiYWxsIiwiY29tcGFueSIsInBlcnNvbmFsIiwiY29udGFjdERldGFpbHMiLCJnb29nbGUiLCJpbkJvdW5kIiwib3V0Qm91bmQiLCJtaXNzZWQiLCJyZWNlbnRBY3Rpdml0aWVzIiwiZmF4Iiwidm9pY2VtYWlsIiwiZ21haWwiLCJvZmZsaW5lTW9kZSIsImV1bGEiLCJzZXJ2aWNlVGVybXMiLCJhdmFpbGFibGUiLCJvZmZsaW5lIiwiYnVzeSIsInRha2VBbGxDYWxscyIsImRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzIiwiZG9Ob3RBY2NlcHRBbnlDYWxscyIsInN0YXR1cyIsImFjY2VwdFF1ZXVlQ2FsbHMiLCJlbiIsImphIiwiZnIiLCJkZSIsImVzIiwiaXQiLCJwdCIsImNhbGxpbmciLCJsb2dvdXQiLCJzZXR0aW5ncyIsImNsaWNrVG9EaWFsIiwiYXV0b0NyZWF0ZUxvZyIsImF1dG9DcmVhdGVTTVNMb2ciLCJhdXRvTG9nQ2FsbHMiLCJhdXRvTG9nU01TIiwiY2xpY2tUb1NNUyIsImNsaWNrVG9EaWFsU01TIiwidW5hdXRob3JpemVkIiwiYXV0aG9yaXplZCIsInVuYXV0aG9yaXplZFRpdGxlIiwidG9vbHRpcCIsImluY29taW5nQ2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7a0JBQWU7QUFDYkEsWUFBVSxvQkFERztBQUViQyxZQUFVO0FBRkcsQzs7QUFLZjtBQUNBLDJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7b0dBR0csdUJBQWFDLGEsRUFBZ0IscUUsd0RBQzdCLHVCQUFhQyxZLEVBQWUsZ0Qsd0RBQzVCLHVCQUFhQyxjLEVBQWlCLDhCOztBQUdqQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7b0dBR0cscUJBQVdDLFUsRUFBYSxzQyx3REFDeEIscUJBQVdDLFUsRUFBYSwrRSx3REFDeEIscUJBQVdDLGEsRUFBZ0IsNkUsd0RBQzNCLHFCQUFXQyxhLEVBQWdCLCtDLHdEQUMzQixxQkFBV04sYSxFQUFnQiw4RSx3REFDM0IscUJBQVdPLGMsRUFBaUIsK0Isd0RBQzVCLHFCQUFXQyxZLEVBQWUsNkUsd0RBQzFCLHFCQUFXQyxlLEVBQWtCLGdNLG9FQUNwQixnQixvRUFDQSwrQzs7QUFHWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOzs7Ozs7b0dBSUcsa0NBQXdCQyxXLEVBQWMsbUMsd0RBQ3RDLGtDQUF3QkMsd0IsRUFBMkIscUcsd0RBQ25ELGtDQUF3QkMsVSxFQUFhLDJNLHdEQUNyQyxrQ0FBd0JDLGUsRUFBa0IsK0Qsd0RBQzFDLGtDQUF3QkMsaUIsRUFBb0Isb0csd0RBQzVDLGtDQUF3QkMsa0IsRUFBcUIsMEgsZ0VBQ3hDLHlCLHdEQUNMLGtDQUF3QkMseUIsRUFBNEIsMkosd0RBQ3BELGtDQUF3QkMsNEIs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Q0E7Ozs7Ozs7Ozs7Ozs7O2tCQ05lO0FBQ2JDLE1BQUksU0FEUztBQUViQyxNQUFJLFVBRlM7QUFHYkMsTUFBSSxTQUhTO0FBSWJDLE1BQUksU0FKUztBQUtiQyxNQUFJLFVBTFM7QUFNYkMsTUFBSSxVQU5TO0FBT2JDLE1BQUk7QUFQUyxDOztBQVVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztrQkNoQmU7QUFDYm5QLFVBQVEsUUFESztBQUVib1AsV0FBUyxVQUZJO0FBR2JDLFVBQVEsUUFISztBQUlidE4sV0FBUyxRQUpJO0FBS2J1TixZQUFVLGVBTEc7QUFNYkMsZUFBYSxvQkFOQTtBQU9iQyxpQkFBZSx1Q0FQRjtBQVFiQyxvQkFBa0Isa0NBUkw7QUFTYkMsZ0JBQWMsb0NBVEQ7QUFVYkMsY0FBWSwrQkFWQztBQVdiQyxjQUFZLHNDQVhDO0FBWWJDLGtCQUFnQjtBQVpILEM7O0FBZ0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O2tCQzdCZTtBQUNiQyxnQkFBYyxXQUREO0FBRWJDLGNBQVksc0JBRkM7QUFHYkMscUJBQW1CLGtCQUhOO0FBSWJDLFdBQVM7QUFKSSxDOztBQU9mO0FBQ0E7QUFDQTtBQUNBLDRHOzs7Ozs7Ozs7Ozs7O2tCQ1ZlO0FBQ2JDLGdCQUFjLHNCQUREO0FBRWJyRSxVQUFRLFdBRks7QUFHYkYsVUFBUTtBQUhLLEM7O0FBTWY7QUFDQTtBQUNBLCtDOzs7Ozs7Ozs7Ozs7OztBQ1JBOzs7Ozs7a0JBRWUsbUJBQVMsQ0FDdEIsVUFEc0IsRUFFdEIsV0FGc0IsRUFHdEIsTUFIc0IsRUFJdEIsUUFKc0IsRUFLdEIsT0FMc0IsRUFNdEIsU0FOc0IsRUFPdEIsU0FQc0IsRUFRdEIsUUFSc0IsQ0FBVCxDIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGMyZFRpdGxlOiAnQ2hhbWFyIGNvbSB7YnJhbmR9JyxcbiAgc21zVGl0bGU6ICdTTVMgY29tIHticmFuZH0nLFxufTtcclxuXG4vLyBAa2V5OiBAI0BcImMyZFRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIHdpdGgge2JyYW5kfVwiQCNAXG4vLyBAa2V5OiBAI0BcInNtc1RpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJTTVMgd2l0aCB7YnJhbmR9XCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0Nocm9tZUFkYXB0ZXIvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBhdXRoTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2F1dGhNZXNzYWdlcy5pbnRlcm5hbEVycm9yXTogJ0ZhbGhhIGRlIGxvZ2luIGRldmlkbyBhIGVycm9zIGludGVybm9zLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nLFxuICBbYXV0aE1lc3NhZ2VzLmFjY2Vzc0RlbmllZF06ICdBY2Vzc28gbmVnYWRvLiBFbnRyZSBlbSBjb250YXRvIGNvbSBvIFN1cG9ydGUuJyxcbiAgW2F1dGhNZXNzYWdlcy5zZXNzaW9uRXhwaXJlZF06ICdTZXNzw6NvIGV4cGlyYWRhLiBDb25lY3RlLXNlLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlthdXRoTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkxvZ2luIGZhaWxlZCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlthdXRoTWVzc2FnZXMuYWNjZXNzRGVuaWVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQWNjZXNzIGRlbmllZC4gUGxlYXNlIGNvbnRhY3Qgc3VwcG9ydC5cIkAjQFxuLy8gQGtleTogQCNAXCJbYXV0aE1lc3NhZ2VzLnNlc3Npb25FeHBpcmVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2Vzc2lvbiBleHBpcmVkLiBQbGVhc2Ugc2lnbiBpbi5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgY2FsbEVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGwvY2FsbEVycm9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxFcnJvcnMubm9Ub051bWJlcl06ICdJbnNpcmEgdW0gbsO6bWVybyBkZSB0ZWxlZm9uZSB2w6FsaWRvLicsXG4gIFtjYWxsRXJyb3JzLm5vQXJlYUNvZGVdOiAnRGVmaW5hIG8ge2FyZWFDb2RlTGlua30gcGFyYSB1c2FyIG7Dum1lcm9zIGRlIHRlbGVmb25lIGxvY2FpcyBkZSBzZXRlIGTDrWdpdG9zLicsXG4gIFtjYWxsRXJyb3JzLnNwZWNpYWxOdW1iZXJdOiAnTsOjbyBow6Egc3Vwb3J0ZSBkZSBkaXNjYWdlbSBwYXJhIG7Dum1lcm9zIGRlIGVtZXJnw6puY2lhIG91IHNlcnZpw6dvIGVzcGVjaWFpcy4nLFxuICBbY2FsbEVycm9ycy5jb25uZWN0RmFpbGVkXTogJ0ZhbGhhIGRlIGNvbmV4w6NvLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nLFxuICBbY2FsbEVycm9ycy5pbnRlcm5hbEVycm9yXTogJ07Do28gw6kgcG9zc8OtdmVsIGNvbmVjdGFyIGRldmlkbyBhIGVycm9zIGludGVybm9zLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nLFxuICBbY2FsbEVycm9ycy5ub3RBbkV4dGVuc2lvbl06ICdPIG7Dum1lcm8gZGUgcmFtYWwgbsOjbyBleGlzdGUuJyxcbiAgW2NhbGxFcnJvcnMubmV0d29ya0Vycm9yXTogJ07Do28gw6kgcG9zc8OtdmVsIGNvbmVjdGFyIGRldmlkbyBhIGVycm9zIGRlIHJlZGUuIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicsXG4gIFtjYWxsRXJyb3JzLm5vUmluZ291dEVuYWJsZV06ICdPIHJhbWFsIHBvZGUgZmF6ZXIgY2hhbWFkYXMgY29tIG8gYXBsaWNhdGl2byBkZSBkZXNrdG9wLlxcbiAgICBTZSB2b2PDqiBkZXNlamEgYWx0ZXJuYXIgcGFyYSBvdXRyYXMgb3DDp8O1ZXMgZGUgY2hhbWFkYSxcXG4gICAgZW50cmUgZW0gY29udGF0byBjb20gbyBhZG1pbmlzdHJhZG9yIGRhIGNvbnRhIHBhcmEgZmF6ZXIgdW0gdXBncmFkZS4nLFxuICBhcmVhQ29kZTogJ2PDs2RpZ28gZGUgw6FyZWEnLFxuICB0ZWx1czkxMTogJ07Do28gaMOhIHN1cG9ydGUgcGFyYSBhIGRpc2NhZ2VtIGRlIGVtZXJnw6puY2lhLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltjYWxsRXJyb3JzLm5vVG9OdW1iZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm9BcmVhQ29kZV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5zcGVjaWFsTnVtYmVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5jb25uZWN0RmFpbGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMuaW50ZXJuYWxFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm90QW5FeHRlbnNpb25dXCJAI0AgQHNvdXJjZTogQCNAXCJUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbEVycm9ycy5uZXR3b3JrRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxFcnJvcnMubm9SaW5nb3V0RW5hYmxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBleHRlbnNpb24gaXMgYWxsb3dlZCB0byBtYWtlIGNhbGxzIHdpdGggZGVza3RvcCBhcHAuXFxuICAgIElmIHlvdSB3aXNoIHRvIHN3aXRjaCB0byBvdGhlciBjYWxsaW5nIG9wdGlvbnNcXG4gICAgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IgZm9yIGFuIHVwZ3JhZGUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXJlYUNvZGVcIkAjQCBAc291cmNlOiBAI0BcImFyZWEgY29kZVwiQCNAXG4vLyBAa2V5OiBAI0BcInRlbHVzOTExXCJAI0AgQHNvdXJjZTogQCNAXCJFbWVyZ2VuY3kgZGlhbGluZyBpcyBub3Qgc3VwcG9ydGVkLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsQWxlcnQvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzXTogJ0NvbmZpZ3VyYcOnw7VlcyBzYWx2YXMgY29tIHN1Y2Vzc28uJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZV06ICdDb25maWd1cmHDp8O1ZXMgc2FsdmFzIGNvbSBzdWNlc3NvLiBWZXJpZmlxdWUgc2UgbyB7YnJhbmR9IHBhcmEgRGVza3RvcCBlc3TDoSBpbnN0YWxhZG8gbm8gY29tcHV0YWRvci4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbl06ICdTZWxlY2lvbmUgY29tbyB2b2PDqiBkZXNlamEgZmF6ZXIgYSBjaGFtYWRhIG5hIHNlw6fDo28gQ2hhbWFkYXMuIEluZm9ybWUgc3VhIGxvY2FsaXphw6fDo28gYW8gZXNwZWNpZmljYXIgbyBjw7NkaWdvIGRlIHBhw61zIGUgw6FyZWEgKHNlIGRpc3BvbsOtdmVsKSBuYSBzZcOnw6NvIFJlZ2nDo28gcGFyYSBmYXplciBjaGFtYWRhcyBsb2NhaXMgY29tIG8gYXBsaWNhdGl2by4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbk90aGVyXTogJ1NlbGVjaW9uZSBjb21vIHZvY8OqIGRlc2VqYSBmYXplciBhIGNoYW1hZGEgbmEgc2XDp8OjbyBDaGFtYWRhcy4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGVybWlzc2lvbkNoYW5nZWRdOiAnU3VhcyBwZXJtaXNzw7VlcyBmb3JhbSBhbHRlcmFkYXMgcmVjZW50ZW1lbnRlLiBBY2Vzc2UgbyB7bGlua30gcGFyYSB2ZXJpZmljYXIgYXMgb3DDp8O1ZXMgZGUgQ2hhbWFkYS4nLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMucGhvbmVOdW1iZXJDaGFuZ2VkXTogJ0FzIGluZm9ybWHDp8O1ZXMgZGUgbsO6bWVyb3MgZGUgdGVsZWZvbmUgZm9yYW0gYWx0ZXJhZGFzIHJlY2VudGVtZW50ZS4gQWNlc3NlIG8ge2xpbmt9IHBhcmEgdmVyaWZpY2FyIGFzIG9ww6fDtWVzIGRlIENoYW1hZGEuJyxcbiAgbGluazogJ0NvbmZpZ3VyYcOnw7VlcyA+IENoYW1hZGEnLFxuICBbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZF06ICdTdWFzIHBlcm1pc3PDtWVzIGZvcmFtIGFsdGVyYWRhcyBlIG7Do28gw6kgcG9zc8OtdmVsIGZhemVyIGNoYW1hZGFzIGNvbSBvIE5hdmVnYWRvci4gUGFyYSBvYnRlciBtYWlzIGRldGFsaGVzLCBlbnRyZSBlbSBjb250YXRvIGNvbSBvIGFkbWluaXN0cmFkb3IgZGEgY29udGEuJyxcbiAgW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGVdOiAnTsOjbyBow6Egc3Vwb3J0ZSBkZSBkaXNjYWdlbSBwYXJhIG7Dum1lcm9zIGRlIGVtZXJnw6puY2lhIG91IHNlcnZpw6dvIGVzcGVjaWFpcy4gRW0gdW1hIGVtZXJnw6puY2lhLCB1c2Ugc2V1IHRlbGVmb25lIGZpeG8gdHJhZGljaW9uYWwgb3Ugc2VtIGZpbyBwYXJhIGZhemVyIHVtYSBjaGFtYWRhIHBhcmEgdW0gbsO6bWVybyBkZSBlbWVyZ8OqbmNpYS4nLFxufTtcblxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnNhdmVTdWNjZXNzV2l0aFNvZnRwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIlNldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGF2ZSB7YnJhbmR9IGZvciBEZXNrdG9wIGluc3RhbGxlZCBpbiB5b3VyIGNvbXB1dGVyLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5maXJzdExvZ2luXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNlbGVjdCBpbiBDYWxsaW5nIHNlY3Rpb24gaG93IHlvdSB3YW50IHRvIG1ha2UgeW91ciBjYWxsLiBJdCB3b3VsZCBiZSBuaWNlIGlmIHlvdSBsZXQgdXMga25vdyB5b3VyIGxvY2F0aW9uIGJ5IHNwZWNpZnlpbmcgdGhlIGNvdW50cnkgYW5kIGFyZWEgY29kZSAoaWYgYXZhaWxhYmxlKSBpbiBSZWdpb24gc2VjdGlvbiwgc28geW91IGNhbiBkbyBsb2NhbCBkaWFsaW5nIHdpdGggdGhlIGFwcC5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZmlyc3RMb2dpbk90aGVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNlbGVjdCBpbiBDYWxsaW5nIHNlY3Rpb24gaG93IHlvdSB3YW50IHRvIG1ha2UgeW91ciBjYWxsLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltjYWxsaW5nU2V0dGluZ3NNZXNzYWdlcy5wZXJtaXNzaW9uQ2hhbmdlZF1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgcGVybWlzc2lvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgcmVjZW50bHkuIFBsZWFzZSBnbyB0byB7bGlua30gdG8gY2hlY2sgeW91ciBDYWxsaW5nIG9wdGlvbnMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLnBob25lTnVtYmVyQ2hhbmdlZF1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgcGhvbmUgbnVtYmVyIGluZm9ybWF0aW9uIGhhcyBiZWVuIGNoYW5nZWQgcmVjZW50bHkuIFBsZWFzZSBnbyB0byB7bGlua30gdG8gY2hlY2sgeW91ciBDYWxsaW5nIG9wdGlvbnMuXCJAI0Bcbi8vIEBrZXk6IEAjQFwibGlua1wiQCNAIEBzb3VyY2U6IEAjQFwiU2V0dGluZ3MgPiBDYWxsaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzLndlYnBob25lUGVybWlzc2lvblJlbW92ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGFuZCB5b3UgY2Fubm90IG1ha2UgY2FsbHMgd2l0aCBCcm93c2VyLiBGb3IgZGV0YWlscyBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci5cIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMuZW1lcmdlbmN5Q2FsbGluZ05vdEF2YWlsYWJsZV1cIkAjQCBAc291cmNlOiBAI0BcIkRpYWxpbmcgZW1lcmdlbmN5IG9yIHNwZWNpYWwgc2VydmljZSBudW1iZXJzIGlzIG5vdCBzdXBwb3J0ZWQuIEluIGFuIGVtZXJnZW5jeSwgdXNlIHlvdXIgdHJhZGl0aW9uYWwgd2lyZWxpbmUgb3Igd2lyZWxlc3MgcGhvbmUgdG8gY2FsbCBhbiBlbWVyZ2VuY3kgbnVtYmVyLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IHJlZ2lvblNldHRpbmdzTWVzc2FnZXMgZnJvbVxuICAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWdpb246ICdSZWdpw6NvJyxcbiAgW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NdOiAnQ29uZmlndXJhw6fDtWVzIHNhbHZhcyBjb20gc3VjZXNzby4nLFxuICBbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5kaWFsaW5nUGxhbnNDaGFuZ2VkXTogJ0EgcmVnacOjbyBhbnRlcmlvciBuw6NvIMOpIG1haXMgc3Vwb3J0YWRhIHBhcmEgc3VhIGNvbnRhLlxcbiAgICBWZXJpZmlxdWUgYXMgbm92YXMge3JlZ2lvblNldHRpbmdzTGlua30uJyxcbiAgcmVnaW9uU2V0dGluZ3M6ICdjb25maWd1cmHDp8O1ZXMgZGUgcmVnacOjbycsXG4gIFtyZWdpb25TZXR0aW5nc01lc3NhZ2VzLmFyZWFDb2RlSW52YWxpZF06ICdJbnNpcmEgdW0gY8OzZGlnbyBkZSDDoXJlYSB2w6FsaWRvLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInJlZ2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiUmVnaW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuc2F2ZVN1Y2Nlc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3JlZ2lvblNldHRpbmdzTWVzc2FnZXMuZGlhbGluZ1BsYW5zQ2hhbmdlZF1cIkAjQCBAc291cmNlOiBAI0BcIlRoZSBwcmV2aW91cyByZWdpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBmb3IgeW91ciBhY2NvdW50LlxcbiAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgbmV3IHtyZWdpb25TZXR0aW5nc0xpbmt9LlwiQCNAXG4vLyBAa2V5OiBAI0BcInJlZ2lvblNldHRpbmdzXCJAI0AgQHNvdXJjZTogQCNAXCJyZWdpb24gc2V0dGluZ3NcIkAjQFxuLy8gQGtleTogQCNAXCJbcmVnaW9uU2V0dGluZ3NNZXNzYWdlcy5hcmVhQ29kZUludmFsaWRdXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBhcmVhIGNvZGUuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlZ2lvblNldHRpbmdzQWxlcnQvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBtZXNzYWdlU2VuZGVyTWVzc2FnZXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZXNzYWdlU2VuZGVyL21lc3NhZ2VTZW5kZXJNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kU3VjY2Vzc106ICdFbnZpYWRvIGNvbSBzdWNlc3NvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZEVycm9yXTogJ0Vycm8gYW8gZW52aWFyIGEgbWVuc2FnZW0uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5udW1iZXJWYWxpZGF0ZUVycm9yXTogJ0Vycm8gZGUgdmFsaWRhw6fDo28gZG8gbsO6bWVybyBkZSB0ZWxlZm9uZS4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRFbXB0eV06ICdJbnNpcmEgbyB0ZXh0byBwYXJhIGVudmlvLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9QZXJtaXNzaW9uXTogJ1ZvY8OqIG7Do28gdGVtIHBlcm1pc3PDo28gcGFyYSBlbnZpYXIgbWVuc2FnZW5zLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZGVyRW1wdHldOiAnVm9jw6ogZGV2ZSBzZWxlY2lvbmFyIHVtIG7Dum1lcm8gZGUgdGVsZWZvbmUgcGFyYSBlbnZpYXInLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vVG9OdW1iZXJdOiAnTsO6bWVybyBkZSB0ZWxlZm9uZSBpbnbDoWxpZG8uJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5yZWNpcGllbnRzRW1wdHldOiAnSW5zaXJhIHVtIG7Dum1lcm8gZGUgcmVjZWJpbWVudG8gdsOhbGlkby4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRUb29Mb25nXTogJ08gdGV4dG8gw6kgbXVpdG8gbG9uZ28uIExpbWl0YWRvIGEgMTAwMCcsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50TnVtYmVySW52YWxpZHNdOiAnTyBuw7ptZXJvIGRvIGRlc3RpbmF0w6FyaW8gw6kgaW52w6FsaWRvJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub0FyZWFDb2RlXTogJ0RlZmluYSBvIHthcmVhQ29kZUxpbmt9IHBhcmEgdXNhciBuw7ptZXJvcyBkZSB0ZWxlZm9uZSBsb2NhaXMgZGUgc2V0ZSBkw61naXRvcy4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNwZWNpYWxOdW1iZXJdOiAnTsOjbyBow6Egc3Vwb3J0ZSBkZSBkaXNjYWdlbSBwYXJhIG7Dum1lcm9zIGRlIGVtZXJnw6puY2lhIG91IHNlcnZpw6dvIGVzcGVjaWFpcy4nLFxuICBbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLmNvbm5lY3RGYWlsZWRdOiAnRmFsaGEgZGUgY29uZXjDo28uIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicsXG4gIFttZXNzYWdlU2VuZGVyTWVzc2FnZXMuaW50ZXJuYWxFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBjb25lY3RhciBkZXZpZG8gYSBlcnJvcyBpbnRlcm5vcy4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RBbkV4dGVuc2lvbl06ICdPIG7Dum1lcm8gZGUgcmFtYWwgbsOjbyBleGlzdGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5uZXR3b3JrRXJyb3JdOiAnTsOjbyDDqSBwb3Nzw612ZWwgY29uZWN0YXIgZGV2aWRvIGEgZXJyb3MgZGUgcmVkZS4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJOdW1iZXJJbnZhbGlkXTogJ1JlcXVlciB1bSBuw7ptZXJvIGRlIHRlbGVmb25lIHBhcmEgdW1hIGVudmlhciBtZW5zYWdlbSBkZSB0ZXh0byBwYXJhIG9zIGRlc3RpbmF0w6FyaW9zIGZvcmEgZGEgZW1wcmVzYS4gQ29udGF0ZSBvIEFkbWluaXN0cmFkb3IgcGFyYSBhZGljaW9uYXIgdW0gbsO6bWVybyBkaXJldG8gw6AgY29udGEuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub3RTbXNUb0V4dGVuc2lvbl06ICdOw6NvIMOpIHBvc3PDrXZlbCBlbnZpYXIgcGFyYSB1bSBuw7ptZXJvIGRlIHJhbWFsIGNvbSBvIG7Dum1lcm8gZGUgdGVsZWZvbmUgcHJpbmNpcGFsLiBTZSB2b2PDqiBkZXNlamEgZW52aWFyIHBhcmEgdW0gTsO6bWVybyBkZSByYW1hbCwgaW5zaXJhIHVtIE7Dum1lcm8gZGUgcmFtYWwuJyxcbiAgW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkXTogJ07Do28gaMOhIHN1cG9ydGUgcGFyYSBvIGVudmlvIGRlIFNNUyBwYXJhIHVtIG7Dum1lcm8gZGUgdGVsZWZvbmUgaW50ZXJuYWNpb25hbC4nLFxuICBhcmVhQ29kZTogJ2PDs2RpZ28gZGUgw6FyZWEnLFxufTtcblxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnNlbmRTdWNjZXNzXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZCBTdWNjZXNzLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc2VuZEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoZW4gc2VuZCBtZXNzYWdlLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubnVtYmVyVmFsaWRhdGVFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIlBob25lIE51bWJlciBWYWxpZGF0ZSBFcnJvci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLnRleHRFbXB0eV1cIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBlbnRlciB0aGUgdGV4dCB0byBiZSBzZW50LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm9QZXJtaXNzaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2UuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJFbXB0eV1cIkAjQCBAc291cmNlOiBAI0BcIllvdSBtdXN0IHNlbGVjdCBhIG51bWJlciBmcm9tIHlvdXIgcGhvbmUgbnVtYmVycyB0byBzZW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub1RvTnVtYmVyXVwiQCNAIEBzb3VyY2U6IEAjQFwiSW52YWxpZCBwaG9uZSBudW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5yZWNpcGllbnRzRW1wdHldXCJAI0AgQHNvdXJjZTogQCNAXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCByZWNlaXZlciBudW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy50ZXh0VG9vTG9uZ11cIkAjQCBAc291cmNlOiBAI0BcIlRleHQgaXMgdG9vIGxvbmcsIDEwMDAgTGltaXRlZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMucmVjaXBpZW50TnVtYmVySW52YWxpZHNdXCJAI0AgQHNvdXJjZTogQCNAXCJSZWNpcGllbnQgbnVtYmVyIGlzIGludmFsaWRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5ub0FyZWFDb2RlXVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNldCB7YXJlYUNvZGVMaW5rfSB0byB1c2UgNy1kaWdpdCBsb2NhbCBwaG9uZSBudW1iZXJzLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMuc3BlY2lhbE51bWJlcl1cIkAjQCBAc291cmNlOiBAI0BcIkRpYWxpbmcgZW1lcmdlbmN5IG9yIHNwZWNpYWwgc2VydmljZSBudW1iZXJzIGlzIG5vdCBzdXBwb3J0ZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5jb25uZWN0RmFpbGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hbEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2Fubm90IGNvbm5lY3QgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbbWVzc2FnZVNlbmRlck1lc3NhZ2VzLm5vdEFuRXh0ZW5zaW9uXVwiQCNAIEBzb3VyY2U6IEAjQFwiVGhlIGV4dGVuc2lvbiBudW1iZXIgZG9lcyBub3QgZXhpc3QuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5uZXR3b3JrRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5zZW5kZXJOdW1iZXJJbnZhbGlkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQSB2YWxpZCBQaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQgdG8gc2VuZCB0ZXh0IG1lc3NhZ2UgdG8gcmVjaXBpZW50cyBvdXRzaWRlIG9mIHlvdXIgY29tcGFueS4gUGxlYXNlIGNvbnRhY3QgeW91ciBBZG1pbmlzdHJhdG9yIHRvIGFkZCBhIGRpcmVjdCBudW1iZXIgdG8geW91ciBhY2NvdW50LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlU2VuZGVyTWVzc2FnZXMubm90U21zVG9FeHRlbnNpb25dXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3Qgc2VuZCBUbyBhIGV4dGVuc2lvbiBudW1iZXIgd2l0aCBtYWluIHBob25lIG51bWJlci4gSWYgeW91IHdhbnQgdG8gc2VudCB0byBhIGV4dGVuc2lvbiBOdW1iZXIsIHBsZWFzZSBqdXN0IGVudGVyIGV4dGVuc2lvbiBOdW1iZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW21lc3NhZ2VTZW5kZXJNZXNzYWdlcy5pbnRlcm5hdGlvbmFsU01TTm90U3VwcG9ydGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiU2VuZGluZyBTTVMgdG8gaW50ZXJuYXRpb25hbCBwaG9uZSBudW1iZXIgaXMgbm90IHN1cHBvcnRlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVwiQCNAIEBzb3VyY2U6IEAjQFwiYXJlYSBjb2RlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL01lc3NhZ2VTZW5kZXJBbGVydC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByYXRlRXhjZWVkZWQ6ICdMaW1pdGUgZGUgc29saWNpdGHDp8O1ZXMgZXhjZWRpZG8uIE8gYXBsaWNhdGl2byBjb250aW51YXLDoSBlbSB7dHRsfSBzZWd1bmRvcy4nLFxufTtcblxuLy8gQGtleTogQCNAXCJyYXRlRXhjZWVkZWRcIkAjQCBAc291cmNlOiBAI0BcIlJlcXVlc3QgbGltaXQgZXhjZWVkZWQuIEFwcCB3aWxsIHJlc3VtZSBpbiB7dHRsfSBzZWNvbmRzLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SYXRlRXhjZWVkZWRBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IGNvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0Nvbm5lY3Rpdml0eU1vbml0b3IvY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzLmRpc2Nvbm5lY3RlZF06ICdBIGNvbmV4w6NvIGRlIHJlZGUgZm9pIHBlcmRpZGEuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcy5kaXNjb25uZWN0ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJOZXR3b3JrIGNvbm5lY3Rpb24gaXMgbG9zdC5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9wdC1CUi5qcyIsImltcG9ydCB3ZWJwaG9uZUVycm9ycyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1dlYnBob25lL3dlYnBob25lRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbd2VicGhvbmVFcnJvcnMuY29ubmVjdEZhaWxlZF06ICdGYWxoYSBhbyBjb25lY3RhciBhbyBzZXJ2aWRvciBkZSB0ZWxlZm9uZSBkYSBXZWIuJyxcbiAgW3dlYnBob25lRXJyb3JzLmNvbm5lY3RlZF06ICdUZWxlZm9uZSBkYSBXZWIgcmVnaXN0cmFkby4nLFxuICBbd2VicGhvbmVFcnJvcnMuYnJvd3Nlck5vdFN1cHBvcnRlZF06ICdIw6Egc3Vwb3J0ZSBwYXJhIGxpZ2HDp8OjbyBjb20gbyBuYXZlZ2Fkb3Igc29tZW50ZSBubyBDaHJvbWUuJyxcbiAgW3dlYnBob25lRXJyb3JzLndlYnBob25lQ291bnRPdmVyTGltaXRdOiAnw4kgcG9zc8OtdmVsIHJlZ2lzdHJhciBubyBtw6F4aW1vIGNpbmNvIHRlbGVmb25lcyBXZWIuJyxcbiAgW3dlYnBob25lRXJyb3JzLm5vdE91dGJvdW5kQ2FsbFdpdGhvdXRETF06ICdObyBtb21lbnRvLCBvIHJhbWFsIG7Do28gcG9kZSBmYXplciBjaGFtYWRhcyBkZSBzYcOtZGEgY29tIG8gbmF2ZWdhZG9yLiBFbnRyZSBlbSBjb250YXRvIGNvbSBvIHJlcHJlc2VudGFudGUgZGEgY29udGEgcGFyYSBmYXplciB1bSB1cGdyYWRlLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5nZXRTaXBQcm92aXNpb25FcnJvcl06ICdWb2PDqiBuw6NvIHRlbSBwZXJtaXNzw6NvIHBhcmEgZW52aWFyIG1lbnNhZ2Vucy4nLFxuICBbd2VicGhvbmVFcnJvcnMudG9Wb2ljZU1haWxFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBlbnZpYXIgY2hhbWFkYXMgcGFyYSBjYWl4YSBwb3N0YWwgZGV2aWRvIGEgdW0gZXJybyBpbnRlcm5vJyxcbiAgW3dlYnBob25lRXJyb3JzLm11dGVFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBkZWl4YXIgYSBjaGFtYWRhIHNlbSBzb20gbm8gbW9tZW50by4nLFxuICBbd2VicGhvbmVFcnJvcnMuaG9sZEVycm9yXTogJ07Do28gw6kgcG9zc8OtdmVsIGNvbG9jYXIgYSBjaGFtYWRhIGVtIGVzcGVyYSBubyBtb21lbnRvLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5mbGlwRXJyb3JdOiAnTsOjbyDDqSBwb3Nzw612ZWwgdHJhbnNmZXJpciBhIGNoYW1hZGEuIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicsXG4gIFt3ZWJwaG9uZUVycm9ycy5yZWNvcmRFcnJvcl06ICdOw6NvIMOpIHBvc3PDrXZlbCBncmF2YXIgYSBjaGFtYWRhIG5vIG1vbWVudG8uIEPDs2RpZ28gZGUgZXJybzoge2Vycm9yQ29kZX0nLFxuICBbd2VicGhvbmVFcnJvcnMucmVjb3JkRGlzYWJsZWRdOiAnU3VhIGNvbnRhIG7Do28gdGVtIG8gcmVjdXJzbyBkZSBncmF2YcOnw6NvIGRlIGNoYW1hZGFzLiBFbnRyZSBlbSBjb250YXRvIGNvbSBvIGFkbWluaXN0cmFkb3IgZGEgY29udGEuJyxcbiAgW3dlYnBob25lRXJyb3JzLnRyYW5zZmVyRXJyb3JdOiAnTsOjbyDDqSBwb3Nzw612ZWwgdHJhbnNmZXJpciBhIGNoYW1hZGEuIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5jb25uZWN0RmFpbGVkXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29ubmVjdCB3aXRoIHdlYiBwaG9uZSBzZXJ2ZXIgZmFpbGVkLlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5jb25uZWN0ZWRdXCJAI0AgQHNvdXJjZTogQCNAXCJXZWIgcGhvbmUgcmVnaXN0ZXJlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuYnJvd3Nlck5vdFN1cHBvcnRlZF1cIkAjQCBAc291cmNlOiBAI0BcIkNhbGxpbmcgd2l0aCBicm93c2VyIGlzIG9ubHkgc3VwcG9ydGVkIG9uIENocm9tZS5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMud2VicGhvbmVDb3VudE92ZXJMaW1pdF1cIkAjQCBAc291cmNlOiBAI0BcIkEgbWF4aW11bSBvZiA1IHdlYiBwaG9uZXMgY291bGQgYmUgcmVnaXN0ZXJlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMubm90T3V0Ym91bmRDYWxsV2l0aG91dERMXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91ciBleHRlbnNpb24gaXMgbm90IGFsbG93ZWQgdG8gbWFrZSBvdXRib3VuZCBjYWxscyB3aXRoIGJyb3dzZXIgY3VycmVudGx5LCBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLmdldFNpcFByb3Zpc2lvbkVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiWW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2UuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3dlYnBob25lRXJyb3JzLnRvVm9pY2VNYWlsRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3Qgc2VuZCBjYWxsIHRvIHZvaWNlbWFpbCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JcIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMubXV0ZUVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBjYW5ub3QgYmUgbXV0ZWQgYXQgdGhlIG1vbWVudC5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMuaG9sZEVycm9yXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBjYW5ub3QgYmUgaG9sZCBhdCB0aGUgbW9tZW50LlwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5mbGlwRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJDYW5ub3QgZmxpcCB0aGUgY2FsbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMucmVjb3JkRXJyb3JdXCJAI0AgQHNvdXJjZTogQCNAXCJZb3UgY2Fubm90IHJlY29yZCB0aGUgY2FsbCBhdCB0aGUgbW9tZW50LiBFcnJvciBjb2RlOiB7ZXJyb3JDb2RlfVwiQCNAXG4vLyBAa2V5OiBAI0BcIlt3ZWJwaG9uZUVycm9ycy5yZWNvcmREaXNhYmxlZF1cIkAjQCBAc291cmNlOiBAI0BcIlNvcnJ5LCB5b3VyIGFjY291bnQgZG9lcyBub3QgaGF2ZSB0aGUgZmVhdHVyZSB0byByZWNvcmQgYSBjYWxsLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci5cIkAjQFxuLy8gQGtleTogQCNAXCJbd2VicGhvbmVFcnJvcnMudHJhbnNmZXJFcnJvcl1cIkAjQCBAc291cmNlOiBAI0BcIkNhbm5vdCB0cmFuc2ZlciB0aGUgY2FsbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvV2VicGhvbmVBbGVydC9pMThuL3B0LUJSLmpzIiwiaW1wb3J0IHBlcm1pc3Npb25NZXNzYWdlcyBmcm9tXG4gICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW3Blcm1pc3Npb25NZXNzYWdlcy5pbnZhbGlkVGllcl06ICdTdWEgZWRpw6fDo28gbsOjbyBvZmVyZWNlIHN1cG9ydGUgw6AgaW50ZWdyYcOnw6NvIGNvbSB7YXBwbGljYXRpb259LiBFbnRyZSBlbSBjb250YXRvIGNvbSBvIHJlcHJlc2VudGFudGUgZGEgY29udGEgcGFyYSBmYXplciB1cGdyYWRlIGRhIGVkacOnw6NvIGRvIHticmFuZH0uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3Blcm1pc3Npb25NZXNzYWdlcy5pbnZhbGlkVGllcl1cIkAjQCBAc291cmNlOiBAI0BcIllvdXIgZWRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHthcHBsaWNhdGlvbn0gaW50ZWdyYXRpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSB0byB1cGdyYWRlIHlvdXIge2JyYW5kfSBlZGl0aW9uLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW5CdXR0b246ICdFbnRyYXInLFxuICB2ZXJzaW9uOiAnVmVyc8OjbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImxvZ2luQnV0dG9uXCJAI0AgQHNvdXJjZTogQCNAXCJTaWduIEluXCJAI0Bcbi8vIEBrZXk6IEAjQFwidmVyc2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiVmVyc2lvblwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgY2FsbGluZ09wdGlvbnMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsaW5nU2V0dGluZ3MvY2FsbGluZ09wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnQ2hhbWFkYXMnLFxuICBzYXZlOiAnU2FsdmFyJyxcbiAgW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV06ICd7YnJhbmR9IHBhcmEgRGVza3RvcCcsXG4gIFtjYWxsaW5nT3B0aW9ucy5teXBob25lXTogJ01ldSB0ZWxlZm9uZSB7YnJhbmR9JyxcbiAgW2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmVdOiAnT3V0cm8gdGVsZWZvbmUnLFxuICBbY2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmVdOiAnVGVsZWZvbmUgcGVyc29uYWxpemFkbycsXG4gIFtjYWxsaW5nT3B0aW9ucy5icm93c2VyXTogJ05hdmVnYWRvcicsXG4gIG1ha2VDYWxsc1dpdGg6ICdGYXplciBtaW5oYXMgY2hhbWFkYXMgY29tJyxcbiAgcmluZ291dEhpbnQ6ICdMaWdhciBwYXJhIG1ldSBsb2NhbCBwcmltZWlybyBlLCBlbSBzZWd1aWRhLCBjb25lY3RhciBhbyBkZXN0aW5hdMOhcmlvIGRhIGNoYW1hZGEnLFxuICBteUxvY2F0aW9uTGFiZWw6ICdNZXUgbG9jYWwnLFxuICBwcmVzczFUb1N0YXJ0Q2FsbExhYmVsOiAnU29saWNpdGFyIGRpc2NhciAxIGFudGVzIGRlIGNvbmVjdGFyIGEgY2hhbWFkYScsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5icm93c2VyfVRvb2x0aXBgXTogJ1VzZSBlc3RhIG9ww6fDo28gcGFyYSBmYXplciBlIHJlY2ViZXIgY2hhbWFkYXMgdXNhbmRvIG8gbWljcm9mb25lIGUgbyBhbHRvLWZhbGFudGUgZG8gY29tcHV0YWRvci4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuc29mdHBob25lfVRvb2x0aXBgXTogJ1VzZSBlc3RhIG9ww6fDo28gcGFyYSBmYXplciBlIHJlY2ViZXIgY2hhbWFkYXMgdXNhbmRvIG8gYXBsaWNhdGl2byB7YnJhbmR9IHBhcmEgRGVza3RvcC4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcMOnw6NvIHBhcmEgZmF6ZXIgY2hhbWFkYXMgdXNhbmRvIG8gdGVsZWZvbmUge2JyYW5kfS4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMubXlwaG9uZX1Ub29sdGlwMWBdOiAnUGFyYSBhIGNoYW1hZGEgZWZldHVhZGEsIG8gdGVsZWZvbmUge2JyYW5kfSB0b2NhIHByaW1laXJvIGUsIGVtIHNlZ3VpZGEsIGEgcGFydGUgZGUgZGVzdGluby4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcMOnw6NvIHBhcmEgZmF6ZXIgY2hhbWFkYXMgdXNhbmRvIG91dHJvcyB0ZWxlZm9uZXMsIGNvbW8gbyByZXNpZGVuY2lhbCBvdSBjZWx1bGFyLCBhZGljaW9uYWRvIG5vIFJhbWFsIGRvIHticmFuZH0uJyxcbiAgW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcDFgXTogJ1BhcmEgYSBjaGFtYWRhIGVmZXR1YWRhLCBvIHRlbGVmb25lIHRvY2EgcHJpbWVpcm8gZSwgZW0gc2VndWlkYSwgYSBwYXJ0ZSBkZSBkZXN0aW5vLicsXG4gIFtgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwYF06ICdVc2UgZXN0YSBvcMOnw6NvIHBhcmEgZmF6ZXIgY2hhbWFkYXMgdXNhbmRvIHF1YWxxdWVyIHRlbGVmb25lIGRlIHN1YSBlc2NvbGhhIGFvIGluc2VyaXIgdW0gbsO6bWVybyBkZSB0ZWxlZm9uZSB2w6FsaWRvIG5vIGNhbXBvIGFiYWl4by4nLFxuICBbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcDFgXTogJ1BhcmEgYSBjaGFtYWRhIGVmZXR1YWRhLCBvIHRlbGVmb25lIHRvY2EgcHJpbWVpcm8gZSwgZW0gc2VndWlkYSwgYSBwYXJ0ZSBkZSBkZXN0aW5vLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRpdGxlXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsaW5nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcInticmFuZH0gZm9yIERlc2t0b3BcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMubXlwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk15IHticmFuZH0gUGhvbmVcIkAjQFxuLy8gQGtleTogQCNAXCJbY2FsbGluZ09wdGlvbnMub3RoZXJwaG9uZV1cIkAjQCBAc291cmNlOiBAI0BcIk90aGVyIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmN1c3RvbXBob25lXVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2NhbGxpbmdPcHRpb25zLmJyb3dzZXJdXCJAI0AgQHNvdXJjZTogQCNAXCJCcm93c2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWFrZUNhbGxzV2l0aFwiQCNAIEBzb3VyY2U6IEAjQFwiTWFrZSBteSBjYWxscyB3aXRoXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmluZ291dEhpbnRcIkAjQCBAc291cmNlOiBAI0BcIlJpbmcgbWUgYXQgbXkgbG9jYXRpb24gZmlyc3QsIHRoZW4gY29ubmVjdCB0aGUgY2FsbGVkIHBhcnR5XCJAI0Bcbi8vIEBrZXk6IEAjQFwibXlMb2NhdGlvbkxhYmVsXCJAI0AgQHNvdXJjZTogQCNAXCJNeSBMb2NhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInByZXNzMVRvU3RhcnRDYWxsTGFiZWxcIkAjQCBAc291cmNlOiBAI0BcIlByb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuYnJvd3Nlcn1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIgY29tcHV0ZXLigJlzIG1pY3JvcGhvbmUgYW5kIHNwZWFrZXIuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLnNvZnRwaG9uZX1Ub29sdGlwYF1cIkAjQCBAc291cmNlOiBAI0BcIlVzZSB0aGlzIG9wdGlvbiB0byBtYWtlIGFuZCByZWNlaXZlIGNhbGxzIHVzaW5nIHlvdXIge2JyYW5kfSBmb3IgRGVza3RvcCBhcHAuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIHticmFuZH0gcGhvbmUuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm15cGhvbmV9VG9vbHRpcDFgXVwiQCNAIEBzb3VyY2U6IEAjQFwiRm9yIHRoZSBjYWxsIHlvdSBtYWtlLCB5b3VyIHticmFuZH0gcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW2Ake2NhbGxpbmdPcHRpb25zLm90aGVycGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyB5b3VyIG90aGVyIHBob25lcyBzdWNoIGFzIGhvbWUgb3IgY2VsbCBwaG9uZXMgdGhhdCB5b3UgaGF2ZSBhZGRlZCBpbiB5b3VyIHticmFuZH0gRXh0ZW5zaW9uLlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5vdGhlcnBob25lfVRvb2x0aXAxYF1cIkAjQCBAc291cmNlOiBAI0BcIkZvciB0aGUgY2FsbCB5b3UgbWFrZSwgdGhpcyBwaG9uZSB3aWxsIHJpbmcgZmlyc3QgdGhlbiB0aGUgcGFydHkgeW91IGNhbGxlZC5cIkAjQFxuLy8gQGtleTogQCNAXCJbYCR7Y2FsbGluZ09wdGlvbnMuY3VzdG9tcGhvbmV9VG9vbHRpcGBdXCJAI0AgQHNvdXJjZTogQCNAXCJVc2UgdGhpcyBvcHRpb24gdG8gbWFrZSBjYWxscyB1c2luZyBhbnkgcGhvbmUgb2YgeW91ciBjaG9pY2UgYnkgZW50ZXJpbmcgYSB2YWxpZCBwaG9uZSBudW1iZXIgaW4gdGhlIGZpZWxkIGJlbG93LlwiQCNAXG4vLyBAa2V5OiBAI0BcIltgJHtjYWxsaW5nT3B0aW9ucy5jdXN0b21waG9uZX1Ub29sdGlwMWBdXCJAI0AgQHNvdXJjZTogQCNAXCJGb3IgdGhlIGNhbGwgeW91IG1ha2UsIHRoaXMgcGhvbmUgd2lsbCByaW5nIGZpcnN0IHRoZW4gdGhlIHBhcnR5IHlvdSBjYWxsZWQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc1BhbmVsL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNhdmU6ICdTYWx2YXInLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1NhdmVCdXR0b24vaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2F2ZTogJ1NhbHZhcicsXG4gIHRpdGxlOiAnUmVnacOjbycsXG4gIE5BT25seU1lc3NhZ2U6ICdEZWZpbmEgc2V1IGPDs2RpZ28gZGUgw6FyZWEuIEVsZSBzZXLDoSB1c2FkbyBwYXJhIGRpc2NhZ2VtIGxvY2FsLicsXG4gIE11bHRpV2l0aE5BTWVzc2FnZTogJ0RlZmluYSBvIHBhw61zIGUgbyBjw7NkaWdvIGRlIMOhcmVhIGRhIHN1YSByZWdpw6NvLiBJc3NvIHNlcsOhIHVzYWRvIHBhcmEgZGlzY2FnZW0gbG9jYWwgZSBhIGZvcm1hdGHDp8OjbyBkZSBuw7ptZXJvIGRlIHRlbGVmb25lLicsXG4gIE11bHRpV2l0aG91dE5BTWVzc2FnZTogJ1NlbGVjaW9uZSBvIHBhw61zIG9uZGUgdm9jw6ogZXN0w6EgbG9jYWxpemFkby4gSXNzbyBzZXLDoSB1c2FkbyBwYXJhIGRpc2NhZ2VtIGxvY2FsIGUgcGFyYSBhIGZvcm1hw6fDo28gZGUgbsO6bWVybyBkZSB0ZWxlZm9uZS4nLFxuICBjb3VudHJ5OiAnUGHDrXMnLFxuICBhcmVhQ29kZTogJ0PDs2RpZ28gZGUgw6FyZWEnLFxuICBhcmVhQ29kZVBsYWNlaG9sZGVyOiAnSW5zZXJpciBjw7NkaWdvIGRlIMOhcmVhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIlJlZ2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcIk5BT25seU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBzZXQgeW91ciBhcmVhIGNvZGUuIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsaW5nLlwiQCNAXG4vLyBAa2V5OiBAI0BcIk11bHRpV2l0aE5BTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNldCB0aGUgY291bnRyeSBhbmQgYXJlYSBjb2RlIGZvciB5b3VyIHJlZ2lvbi4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLlwiQCNAXG4vLyBAa2V5OiBAI0BcIk11bHRpV2l0aG91dE5BTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNlbGVjdCB0aGUgY291bnRyeSB5b3UgbG9jYXRlIGluLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGluZyBhbmQgcGhvbmUgbnVtYmVyIGZvcm1hdHRpbmcuXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY291bnRyeVwiQCNAIEBzb3VyY2U6IEAjQFwiQ291bnRyeVwiQCNAXG4vLyBAa2V5OiBAI0BcImFyZWFDb2RlXCJAI0AgQHNvdXJjZTogQCNAXCJBcmVhIENvZGVcIkAjQFxuLy8gQGtleTogQCNAXCJhcmVhQ29kZVBsYWNlaG9sZGVyXCJAI0AgQHNvdXJjZTogQCNAXCJFbnRlciBBcmVhIENvZGVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBBUjogJ0FyZ2VudGluYScsXG4gIEFUOiAnw4F1c3RyaWEnLFxuICBCSDogJ0JhaHJhaW4nLFxuICBCUjogJ0JyYXNpbCcsXG4gIEJHOiAnQnVsZ8OhcmlhJyxcbiAgQ0E6ICdDYW5hZMOhJyxcbiAgQ0w6ICdDaGlsZScsXG4gIENOOiAnQ2hpbmEnLFxuICBIUjogJ0Nyb8OhY2lhJyxcbiAgQ1k6ICdDaGlwcmUnLFxuICBDWjogJ1JlcMO6YmxpY2EgVGNoZWNhJyxcbiAgREs6ICdEaW5hbWFyY2EnLFxuICBETzogJ1JlcMO6YmxpY2EgRG9taW5pY2FuYScsXG4gIEVFOiAnRXN0w7RuaWEnLFxuICBGSTogJ0ZpbmzDom5kaWEnLFxuICBGUjogJ0ZyYW7Dp2EnLFxuICBERTogJ0FsZW1hbmhhJyxcbiAgSEs6ICdIb25nIEtvbmcnLFxuICBIVTogJ0h1bmdyaWEnLFxuICBJRTogJ0lybGFuZGEnLFxuICBJTDogJ0lzcmFlbCcsXG4gIElOOiAnw41uZGlhJyxcbiAgSVQ6ICdJdMOhbGlhJyxcbiAgSlA6ICdKYXDDo28nLFxuICBMVjogJ0zDoXR2aWEnLFxuICBMVDogJ0xpdHXDom5pYScsXG4gIExVOiAnTHV4ZW1idXJnbycsXG4gIE1ZOiAnTWFsw6FzaWEnLFxuICBNWDogJ03DqXhpY28nLFxuICBOTDogJ0hvbGFuZGEnLFxuICBOTzogJ05vcnVlZ2EnLFxuICBQQTogJ1BhbmFtw6EnLFxuICBQSDogJ0ZpbGlwaW5hcycsXG4gIFBMOiAnUG9sw7RuaWEnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUk86ICdSb23Dqm5pYScsXG4gIFNLOiAnRXNsb3bDoXF1aWEnLFxuICBTSTogJ0VzbG92w6puaWEnLFxuICBFUzogJ0VzcGFuaGEnLFxuICBTRTogJ1N1w6ljaWEnLFxuICBDSDogJ1N1w63Dp2EnLFxuICBUUjogJ1R1cnF1aWEnLFxuICBHQjogJ1JlaW5vIFVuaWRvJyxcbiAgQVU6ICdBdXN0csOhbGlhJyxcbiAgR0U6ICdHZcOzcmdpYScsXG4gIElEOiAnSW5kb27DqXNpYScsXG4gIEtFOiAnUXXDqm5pYScsXG4gIE5HOiAnTmlnw6lyaWEnLFxuICBQSzogJ1BhcXVpc3TDo28nLFxuICBaQTogJ8OBZnJpY2EgZG8gU3VsJyxcbiAgS1I6ICdDb3JlaWEgZG8gU3VsJyxcbiAgU0c6ICdDaW5nYXB1cmEnLFxuICBUVzogJ1RhaXdhbicsXG4gIFVBOiAnVWNyw6JuaWEnLFxuICBVUzogJ0VzdGFkb3MgVW5pZG9zJyxcbiAgVk46ICdWaWV0bsOjJyxcbiAgQkU6ICdCw6lsZ2ljYScsXG4gIEJKOiAnQmVuaW4nLFxuICBTVjogJ0VsIFNhbHZhZG9yJyxcbiAgR0g6ICdHYW5hJyxcbiAgR1I6ICdHcsOpY2lhJyxcbiAgR046ICdHdWluw6knLFxuICBOWjogJ05vdmEgWmVsw6JuZGlhJyxcbiAgUEU6ICdQZXJ1JyxcbiAgUFI6ICdQb3J0byBSaWNvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiNDE5XCJAI0AgQHNvdXJjZTogQCNAXCJMYXRpbiBBbWVyaWNhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQVJcIkAjQCBAc291cmNlOiBAI0BcIkFyZ2VudGluYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkFUXCJAI0AgQHNvdXJjZTogQCNAXCJBdXN0cmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQkhcIkAjQCBAc291cmNlOiBAI0BcIkJhaHJhaW5cIkAjQFxuLy8gQGtleTogQCNAXCJCUlwiQCNAIEBzb3VyY2U6IEAjQFwiQnJhemlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQkdcIkAjQCBAc291cmNlOiBAI0BcIkJ1bGdhcmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ0FcIkAjQCBAc291cmNlOiBAI0BcIkNhbmFkYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNMXCJAI0AgQHNvdXJjZTogQCNAXCJDaGlsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIkNOXCJAI0AgQHNvdXJjZTogQCNAXCJDaGluYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkhSXCJAI0AgQHNvdXJjZTogQCNAXCJDcm9hdGlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQ1lcIkAjQCBAc291cmNlOiBAI0BcIkN5cHJ1c1wiQCNAXG4vLyBAa2V5OiBAI0BcIkNaXCJAI0AgQHNvdXJjZTogQCNAXCJDemVjaCBSZXB1YmxpY1wiQCNAXG4vLyBAa2V5OiBAI0BcIkRLXCJAI0AgQHNvdXJjZTogQCNAXCJEZW5tYXJrXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRE9cIkAjQCBAc291cmNlOiBAI0BcIkRvbWluaWNhbiBSZXB1YmxpY1wiQCNAXG4vLyBAa2V5OiBAI0BcIkVFXCJAI0AgQHNvdXJjZTogQCNAXCJFc3RvbmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRklcIkAjQCBAc291cmNlOiBAI0BcIkZpbmxhbmRcIkAjQFxuLy8gQGtleTogQCNAXCJGUlwiQCNAIEBzb3VyY2U6IEAjQFwiRnJhbmNlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiREVcIkAjQCBAc291cmNlOiBAI0BcIkdlcm1hbnlcIkAjQFxuLy8gQGtleTogQCNAXCJIS1wiQCNAIEBzb3VyY2U6IEAjQFwiSG9uZyBLb25nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiSFVcIkAjQCBAc291cmNlOiBAI0BcIkh1bmdhcnlcIkAjQFxuLy8gQGtleTogQCNAXCJJRVwiQCNAIEBzb3VyY2U6IEAjQFwiSXJlbGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIklMXCJAI0AgQHNvdXJjZTogQCNAXCJJc3JhZWxcIkAjQFxuLy8gQGtleTogQCNAXCJJTlwiQCNAIEBzb3VyY2U6IEAjQFwiSW5kaWFcIkAjQFxuLy8gQGtleTogQCNAXCJJVFwiQCNAIEBzb3VyY2U6IEAjQFwiSXRhbHlcIkAjQFxuLy8gQGtleTogQCNAXCJKUFwiQCNAIEBzb3VyY2U6IEAjQFwiSmFwYW5cIkAjQFxuLy8gQGtleTogQCNAXCJMVlwiQCNAIEBzb3VyY2U6IEAjQFwiTGF0dmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTFRcIkAjQCBAc291cmNlOiBAI0BcIkxpdGh1YW5pYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkxVXCJAI0AgQHNvdXJjZTogQCNAXCJMdXhlbWJvdXJnXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTVlcIkAjQCBAc291cmNlOiBAI0BcIk1hbGF5c2lhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTVhcIkAjQCBAc291cmNlOiBAI0BcIk1leGljb1wiQCNAXG4vLyBAa2V5OiBAI0BcIk5MXCJAI0AgQHNvdXJjZTogQCNAXCJOZXRoZXJsYW5kc1wiQCNAXG4vLyBAa2V5OiBAI0BcIk5PXCJAI0AgQHNvdXJjZTogQCNAXCJOb3J3YXlcIkAjQFxuLy8gQGtleTogQCNAXCJQQVwiQCNAIEBzb3VyY2U6IEAjQFwiUGFuYW1hXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUEhcIkAjQCBAc291cmNlOiBAI0BcIlBoaWxpcHBpbmVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUExcIkAjQCBAc291cmNlOiBAI0BcIlBvbGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlBUXCJAI0AgQHNvdXJjZTogQCNAXCJQb3J0dWdhbFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJPXCJAI0AgQHNvdXJjZTogQCNAXCJSb21hbmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiU0tcIkAjQCBAc291cmNlOiBAI0BcIlNsb3Zha2lhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiU0lcIkAjQCBAc291cmNlOiBAI0BcIlNsb3ZlbmlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiRVNcIkAjQCBAc291cmNlOiBAI0BcIlNwYWluXCJAI0Bcbi8vIEBrZXk6IEAjQFwiU0VcIkAjQCBAc291cmNlOiBAI0BcIlN3ZWRlblwiQCNAXG4vLyBAa2V5OiBAI0BcIkNIXCJAI0AgQHNvdXJjZTogQCNAXCJTd2l0emVybGFuZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlRSXCJAI0AgQHNvdXJjZTogQCNAXCJUdXJrZXlcIkAjQFxuLy8gQGtleTogQCNAXCJHQlwiQCNAIEBzb3VyY2U6IEAjQFwiVW5pdGVkIEtpbmdkb21cIkAjQFxuLy8gQGtleTogQCNAXCJBVVwiQCNAIEBzb3VyY2U6IEAjQFwiQXVzdHJhbGlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiR0VcIkAjQCBAc291cmNlOiBAI0BcIkdlb3JnaWFcIkAjQFxuLy8gQGtleTogQCNAXCJJRFwiQCNAIEBzb3VyY2U6IEAjQFwiSW5kb25lc2lhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiS0VcIkAjQCBAc291cmNlOiBAI0BcIktlbnlhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTkdcIkAjQCBAc291cmNlOiBAI0BcIk5pZ2VyaWFcIkAjQFxuLy8gQGtleTogQCNAXCJQS1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFraXN0YW5cIkAjQFxuLy8gQGtleTogQCNAXCJaQVwiQCNAIEBzb3VyY2U6IEAjQFwiU291dGggQWZyaWNhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiS1JcIkAjQCBAc291cmNlOiBAI0BcIlNvdXRoIEtvcmVhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiU0dcIkAjQCBAc291cmNlOiBAI0BcIlNpbmdhcG9yZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlRXXCJAI0AgQHNvdXJjZTogQCNAXCJUYWl3YW5cIkAjQFxuLy8gQGtleTogQCNAXCJVQVwiQCNAIEBzb3VyY2U6IEAjQFwiVWtyYWluZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlVTXCJAI0AgQHNvdXJjZTogQCNAXCJVbml0ZWQgU3RhdGVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiVk5cIkAjQCBAc291cmNlOiBAI0BcIlZpZXRuYW1cIkAjQFxuLy8gQGtleTogQCNAXCJCRVwiQCNAIEBzb3VyY2U6IEAjQFwiQmVsZ2l1bVwiQCNAXG4vLyBAa2V5OiBAI0BcIkJKXCJAI0AgQHNvdXJjZTogQCNAXCJCZW5pblwiQCNAXG4vLyBAa2V5OiBAI0BcIlNWXCJAI0AgQHNvdXJjZTogQCNAXCJFbCBTYWx2YWRvclwiQCNAXG4vLyBAa2V5OiBAI0BcIkdIXCJAI0AgQHNvdXJjZTogQCNAXCJHaGFuYVwiQCNAXG4vLyBAa2V5OiBAI0BcIkdSXCJAI0AgQHNvdXJjZTogQCNAXCJHcmVlY2VcIkAjQFxuLy8gQGtleTogQCNAXCJHTlwiQCNAIEBzb3VyY2U6IEAjQFwiR3VpbmVhXCJAI0Bcbi8vIEBrZXk6IEAjQFwiTlpcIkAjQCBAc291cmNlOiBAI0BcIk5ldyBaZWFsYW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiUEVcIkAjQCBAc291cmNlOiBAI0BcIlBlcnVcIkAjQFxuLy8gQGtleTogQCNAXCJQUlwiQCNAIEBzb3VyY2U6IEAjQFwiUHVlcnRvIFJpY29cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9jb3VudHJ5TmFtZXMvcHQtQlIuanMiLCJpbXBvcnQgcGhvbmVUeXBlcyBmcm9tICcuLi8uLi9lbnVtcy9waG9uZVR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBbcGhvbmVUeXBlcy5idXNpbmVzc106ICdUZWxlZm9uZSBjb21lcmNpYWwnLFxuICBbcGhvbmVUeXBlcy5leHRlbnNpb25dOiAnVGVsZWZvbmUgY29tIHJhbWFsJyxcbiAgW3Bob25lVHlwZXMuaG9tZV06ICdUZWxlZm9uZSByZXNpZGVuY2lhbCcsXG4gIFtwaG9uZVR5cGVzLm1vYmlsZV06ICdUZWxlZm9uZSBjZWx1bGFyJyxcbiAgW3Bob25lVHlwZXMucGhvbmVdOiAnVGVsZWZvbmUnLFxuICBbcGhvbmVUeXBlcy51bmtub3duXTogJ1RpcG8gZGUgdGVsZWZvbmUgZGVzY29uaGVjaWRvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMuYnVzaW5lc3NdXCJAI0AgQHNvdXJjZTogQCNAXCJCdXNpbmVzcyBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmV4dGVuc2lvbl1cIkAjQCBAc291cmNlOiBAI0BcIkV4dGVuc2lvbiBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmhvbWVdXCJAI0AgQHNvdXJjZTogQCNAXCJIb21lIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMubW9iaWxlXVwiQCNAIEBzb3VyY2U6IEAjQFwiTW9iaWxlIFBob25lXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lVHlwZXMucGhvbmVdXCJAI0AgQHNvdXJjZTogQCNAXCJQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLnVua25vd25dXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFBob25lIFR5cGVcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVUeXBlcy5jb21wYW55XVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueSBQaG9uZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVR5cGVzLmRpcmVjdF1cIkAjQCBAc291cmNlOiBAI0BcIkRpcmVjdCBQaG9uZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Bob25lVHlwZU5hbWVzL3B0LUJSLmpzIiwiaW1wb3J0IHBob25lU291cmNlcyBmcm9tICcuLi8uLi9lbnVtcy9waG9uZVNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwaG9uZVNvdXJjZXMuYWNjb3VudF06ICdDb250YScsXG4gIFtwaG9uZVNvdXJjZXMuY29udGFjdF06ICdDb250YXRvJyxcbiAgW3Bob25lU291cmNlcy5yY0NvbnRhY3RdOiAne2JyYW5kfScsXG4gIFtwaG9uZVNvdXJjZXMubGVhZF06ICdMZWFkJyxcbiAgW3Bob25lU291cmNlcy5vcHBvcnR1bml0eV06ICdPcG9ydHVuaWRhZGUnLFxuICBbcGhvbmVTb3VyY2VzLnN5c3RlbVVzZXJdOiAnVXN1w6FyaW8gZG8gc2lzdGVtYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMuYWNjb3VudF1cIkAjQCBAc291cmNlOiBAI0BcIkFjY291bnRcIkAjQFxuLy8gQGtleTogQCNAXCJbcGhvbmVTb3VyY2VzLmNvbnRhY3RdXCJAI0AgQHNvdXJjZTogQCNAXCJDb250YWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5yY0NvbnRhY3RdXCJAI0AgQHNvdXJjZTogQCNAXCJ7YnJhbmR9XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3Bob25lU291cmNlcy5sZWFkXVwiQCNAIEBzb3VyY2U6IEAjQFwiTGVhZFwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMub3Bwb3J0dW5pdHldXCJAI0AgQHNvdXJjZTogQCNAXCJPcHBvcnR1bml0eVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwaG9uZVNvdXJjZXMuc3lzdGVtVXNlcl1cIkAjQCBAc291cmNlOiBAI0BcIlN5c3RlbSBVc2VyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcGhvbmVTb3VyY2VOYW1lcy9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdG86ICdQYXJhJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdJbnNpcmEgbyBuw7ptZXJvIG91IG8gbm9tZS4uLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcInRvXCJAI0AgQHNvdXJjZTogQCNAXCJUb1wiQCNAXG4vLyBAa2V5OiBAI0BcImVudGVyTmFtZU9yTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJFbnRlciBOdW1iZXIgb3IgTmFtZS4uLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWNpcGllbnRzSW5wdXQvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgRGlyZWN0TnVtYmVyOiAnRGlyZXRvJyxcbiAgTWFpbkNvbXBhbnlOdW1iZXI6ICdQcmluY2lwYWwnLFxuICBDb21wYW55TnVtYmVyOiAnRW1wcmVzYScsXG4gIENvbXBhbnlGYXhOdW1iZXI6ICdGYXgnLFxuICBCbG9ja2VkOiAnQmxvcXVlYWRvJyxcbiAgQWRkaXRpb25hbENvbXBhbnlOdW1iZXI6ICdFbXByZXNhJyxcbiAgRm9yd2FyZGVkQ29tcGFueU51bWJlcjogJ0VuY2FtaW5oYWRvJyxcbiAgZnJvbTogJ0RlJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiRGlyZWN0TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJEaXJlY3RcIkAjQFxuLy8gQGtleTogQCNAXCJNYWluQ29tcGFueU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiTWFpblwiQCNAXG4vLyBAa2V5OiBAI0BcIkNvbXBhbnlOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkNvbXBhbnlcIkAjQFxuLy8gQGtleTogQCNAXCJDb21wYW55RmF4TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJGYXhcIkAjQFxuLy8gQGtleTogQCNAXCJCbG9ja2VkXCJAI0AgQHNvdXJjZTogQCNAXCJCbG9ja2VkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiQWRkaXRpb25hbENvbXBhbnlOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkNvbXBhbnlcIkAjQFxuLy8gQGtleTogQCNAXCJGb3J3YXJkZWRDb21wYW55TnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkZWRcIkAjQFxuLy8gQGtleTogQCNAXCJmcm9tXCJAI0AgQHNvdXJjZTogQCNAXCJGcm9tXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0Zyb21GaWVsZC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmcm9tOiAnRGUnLFxuICB0bzogJ1BhcmEnLFxuICBlbnRlck5hbWVPck51bWJlcjogJ0luc2lyYSBvIG7Dum1lcm8gb3UgbyBub21lLi4uJyxcbiAgdHlwZU1lc3NhZ2U6ICdEaWdpdGUgYSBtZW5zYWdlbS4uLicsXG4gIHNlbmQ6ICdFbnZpYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJmcm9tXCJAI0AgQHNvdXJjZTogQCNAXCJGcm9tXCJAI0Bcbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZW50ZXJOYW1lT3JOdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkVudGVyIE51bWJlciBvciBOYW1lLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwidHlwZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlR5cGUgbWVzc2FnZS4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlbmRcIkAjQCBAc291cmNlOiBAI0BcIlNlbmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29tcG9zZVRleHRQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnUmVnaXN0cmFuZG8uLi4nLFxuICBsb2dDYWxsOiAnUmVnaXN0cmFyIGNoYW1hZGEnLFxuICBlZGl0TG9nOiAnRWRpdGFyIGxvZycsXG4gIHNlbGVjdDogJ1NlbGVjaW9uYXIgdW0gcmVnaXN0cm8gY29ycmVzcG9uZGVudGUnLFxuICBPbkhvbGQ6ICdFbSBlc3BlcmEnLFxuICBSaW5naW5nOiAnVG9xdWUnLFxuICBDYWxsQ29ubmVjdGVkOiAnQ2hhbWFkYSBjb25lY3RhZGEnLFxuICB1bmtub3duVXNlcjogJ1VzdcOhcmlvIGRlc2NvbmhlY2lkbycsXG4gIHVua25vd25OdW1iZXI6ICdBbsO0bmltbycsXG4gIHVuYXZhaWxhYmxlOiAnSW5kaXNwb27DrXZlbCcsXG4gIHZpZXdEZXRhaWxzOiAnRXhpYmlyIGRldGFsaGVzJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3REaXNwbGF5L2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVNZXNzYWdlOiAnRGlnaXRlIGEgbWVuc2FnZW0uLi4nLFxuICBzZW5kOiAnRW52aWFyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidHlwZU1lc3NhZ2VcIkAjQCBAc291cmNlOiBAI0BcIlR5cGUgbWVzc2FnZS4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcInNlbmRcIkAjQCBAc291cmNlOiBAI0BcIlNlbmRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udmVyc2F0aW9uUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmV3Q29uZmVyZW5jZTogJ05vdmEgY29uZmVyw6puY2lhJyxcbiAgZGlhbEluTnVtYmVyOiAnTsO6bWVybyBkZSBkaXNjYWdlbScsXG4gIGhvc3Q6ICdPcmdhbml6YWRvcicsXG4gIHBhcnRpY2lwYW50czogJ1BhcnRpY2lwYW50ZXMnLFxuICBpbnRlcm5hdGlvbmFsUGFydGljaXBhbnRzOiAnUGFydGljaXBhbnRlcyBpbnRlcm5hY2lvbmFpcycsXG4gIGludGVybmF0aW9uYWxOdW1iZXJzSGVhZGVyOiAnU2VsZWNpb25hciBvcyBuw7ptZXJvcyBkZSBkaXNjYWdlbSBpbnRlcm5hY2lvbmFpcycsXG4gIHNlYXJjaDogJ1Blc3F1aXNhci4uLicsXG4gIGludml0ZVdpdGhUZXh0OiAnQ29udmlkYXIgY29tIHRleHRvJyxcbiAgaW52aXRlVGV4dDogJ0VudHJlIG5hIGNvbmZlcsOqbmNpYSBkbyBSaW5nQ2VudHJhbC5cXG5cXG5Ow7ptZXJvcyBkZSBkaXNjYWdlbToge2RpYWxJbk51bWJlcn0gXFxuXFxue2ludGVybmF0aW9uYWxzfSBcXG5BY2Vzc28gZGUgcGFydGljaXBhbnRlczoge3BhcnRpY2lwYW50Q29kZX0gXFxuXFxuUHJlY2lzYSBkZSB1bSBuw7ptZXJvIGRlIHRlbGVmb25lIGNvbSBkaXNjYWdlbSBpbnRlcm5hY2lvbmFsPyBBY2Vzc2UgaHR0cDovL3d3dy5yaW5nY2VudHJhbC5jb20vY29uZmVyZW5jaW5nIFxcblxcbkVzdGEgY2hhbWFkYSBlbSBjb25mZXLDqm5jaWEgZm9pIHBvc3NpYmlsaXRhZGEgcGVsbyBSaW5nQ2VudHJhbCBDb25mZXJlbmNpbmcuJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibmV3Q29uZmVyZW5jZVwiQCNAIEBzb3VyY2U6IEAjQFwiTmV3IENvbmZlcmVuY2VcIkAjQFxuLy8gQGtleTogQCNAXCJkaWFsSW5OdW1iZXJcIkAjQCBAc291cmNlOiBAI0BcIkRpYWwtaW4gTnVtYmVyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaG9zdFwiQCNAIEBzb3VyY2U6IEAjQFwiSG9zdFwiQCNAXG4vLyBAa2V5OiBAI0BcInBhcnRpY2lwYW50c1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFydGljaXBhbnRzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW50ZXJuYXRpb25hbFBhcnRpY2lwYW50c1wiQCNAIEBzb3VyY2U6IEAjQFwiSW50ZXJuYXRpb25hbCBwYXJ0aWNpcGFudHNcIkAjQFxuLy8gQGtleTogQCNAXCJpbnRlcm5hdGlvbmFsTnVtYmVyc0hlYWRlclwiQCNAIEBzb3VyY2U6IEAjQFwiU2VsZWN0IEludGVybmF0aW9uYWwgRGlhbC1pbiBOdW1iZXJzXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VhcmNoXCJAI0AgQHNvdXJjZTogQCNAXCJTZWFyY2guLi5cIkAjQFxuLy8gQGtleTogQCNAXCJpbnZpdGVXaXRoVGV4dFwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXRlIHdpdGggVGV4dFwiQCNAXG4vLyBAa2V5OiBAI0BcImludml0ZVRleHRcIkAjQCBAc291cmNlOiBAI0BcIlBsZWFzZSBqb2luIHRoZSBSaW5nQ2VudHJhbCBjb25mZXJlbmNlLlxcblxcbkRpYWwtSW4gTnVtYmVyczoge2RpYWxJbk51bWJlcn0gXFxuXFxue2ludGVybmF0aW9uYWxzfSBcXG5QYXJ0aWNpcGFudCBBY2Nlc3M6IHtwYXJ0aWNpcGFudENvZGV9IFxcblxcbk5lZWQgYW4gaW50ZXJuYXRpb25hbCBkaWFsLWluIHBob25lIG51bWJlcj8gUGxlYXNlIHZpc2l0IGh0dHA6Ly93d3cucmluZ2NlbnRyYWwuY29tL2NvbmZlcmVuY2luZyBcXG5cXG5UaGlzIGNvbmZlcmVuY2UgY2FsbCBpcyBicm91Z2h0IHRvIHlvdSBieSBSaW5nQ2VudHJhbCBDb25mZXJlbmNpbmcuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbmZlcmVuY2VQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gIGNvbmZpcm06ICdDb25maXJtYXInLFxufTtcblxuLy8gQGtleTogQCNAXCJjYW5jZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbmNlbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbmZpcm1cIkAjQCBAc291cmNlOiBAI0BcIkNvbmZpcm1cIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvTW9kYWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWNjb3VudDogJ0NvbnRhJyxcbiAgY29udGFjdDogJ0NvbnRhdG8nLFxuICBsZWFkOiAnTGVhZCcsXG4gIGNob29zZUVudGl0eTogJ1NlbGVjaW9uZSBvIHRpcG8gZGUgZW50aWRhZGUnLFxuICBjcmVhdGU6ICdDcmlhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFjY291bnRcIkAjQCBAc291cmNlOiBAI0BcIkFjY291bnRcIkAjQFxuLy8gQGtleTogQCNAXCJjb250YWN0XCJAI0AgQHNvdXJjZTogQCNAXCJDb250YWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwibGVhZFwiQCNAIEBzb3VyY2U6IEAjQFwiTGVhZFwiQCNAXG4vLyBAa2V5OiBAI0BcImNob29zZUVudGl0eVwiQCNAIEBzb3VyY2U6IEAjQFwiUGxlYXNlIHNlbGVjdCBlbnRpdHkgdHlwZVwiQCNAXG4vLyBAa2V5OiBAI0BcImNyZWF0ZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3JlYXRlXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0VudGl0eU1vZGFsL2kxOG4vcHQtQlIuanMiLCJpbXBvcnQgbWVzc2FnZVR5cGVzIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2VudW1zL21lc3NhZ2VUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkTG9nOiAnTG9nJyxcbiAgZWRpdExvZzogJ0VkaXRhciBsb2cnLFxuICB2aWV3RGV0YWlsczogJ0V4aWJpciBkZXRhbGhlcycsXG4gIGFkZEVudGl0eTogJ0NyaWFyIG5vdm8nLFxuICBjYWxsOiAnQ2hhbWFkYScsXG4gIGNvbnZlcnNhdGlvbjogJ0NvbnZlcnNhJyxcbiAgZ3JvdXBDb252ZXJzYXRpb246ICdDb252ZXJzYSBlbSBncnVwbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFkZExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbnZlcnNhdGlvblwiQCNAIEBzb3VyY2U6IEAjQFwiQ29udmVyc2F0aW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZ3JvdXBDb252ZXJzYXRpb25cIkAjQCBAc291cmNlOiBAI0BcIkdyb3VwIENvbnZlcnNhdGlvblwiQCNAXG4vLyBAa2V5OiBAI0BcInZvaWNlTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2UgbWVzc2FnZVwiQCNAXG4vLyBAa2V5OiBAI0BcIlttZXNzYWdlVHlwZXMudm9pY2VNYWlsXVwiQCNAIEBzb3VyY2U6IEAjQFwiVm9pY2UgTWFpbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZXNzYWdlSXRlbS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBMb2FkaW5nOiAnQ2FycmVnYW5kby4uLicsXG4gIHNlYXJjaDogJ1Blc3F1aXNhci4uLicsXG4gIG5vTWVzc2FnZXM6ICdOZW5odW1hIG1lbnNhZ2VtJyxcbiAgbm9TZWFyY2hSZXN1bHRzOiAnTmVuaHVtIHJlZ2lzdHJvIGNvcnJlc3BvbmRlbnRlIGVuY29udHJhZG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJMb2FkaW5nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2FkaW5nLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VhcmNoXCJAI0AgQHNvdXJjZTogQCNAXCJTZWFyY2guLi5cIkAjQFxuLy8gQGtleTogQCNAXCJub01lc3NhZ2VzXCJAI0AgQHNvdXJjZTogQCNAXCJObyBNZXNzYWdlc1wiQCNAXG4vLyBAa2V5OiBAI0BcIm5vU2VhcmNoUmVzdWx0c1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9NZXNzYWdlTGlzdC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnUmVnaXN0cmFuZG8uLi4nLFxuICBsb2dDYWxsOiAnUmVnaXN0cmFyIGNoYW1hZGEnLFxuICBlZGl0TG9nOiAnRWRpdGFyIGxvZycsXG4gIHNlbGVjdDogJ1NlbGVjaW9uYXIgdW0gcmVnaXN0cm8gY29ycmVzcG9uZGVudGUnLFxuICBPbkhvbGQ6ICdFbSBlc3BlcmEnLFxuICBSaW5naW5nOiAnVG9xdWUnLFxuICBDYWxsQ29ubmVjdGVkOiAnQ2hhbWFkYSBjb25lY3RhZGEnLFxuICB1bmtub3duVXNlcjogJ1VzdcOhcmlvIGRlc2NvbmhlY2lkbycsXG4gIHVua25vd25OdW1iZXI6ICdBbsO0bmltbycsXG4gIHVuYXZhaWxhYmxlOiAnSW5kaXNwb27DrXZlbCcsXG4gIHZpZXdEZXRhaWxzOiAnRXhpYmlyIGRldGFsaGVzJyxcbiAgYWRkRW50aXR5OiAnQ3JpYXIgbm92bycsXG4gIGFkZExvZzogJ0xvZycsXG4gIHRleHQ6ICdUZXh0bycsXG4gIGNhbGw6ICdDaGFtYWRhJyxcbiAgYWRkQ29udGFjdDogJ0FkaWNpb25hciBjb250YXRvJyxcbiAgbWlzc2VkQ2FsbDogJ1BlcmRpZGFzJyxcbiAgaW5ib3VuZENhbGw6ICdFbnRyYWRhJyxcbiAgb3V0Ym91bmRDYWxsOiAnU2HDrWRhJyxcbiAgZnJvbTogJ0RlJyxcbiAgdG86ICdQYXJhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcImFkZENvbnRhY3RcIkAjQCBAc291cmNlOiBAI0BcIkFkZCBDb250YWN0XCJAI0Bcbi8vIEBrZXk6IEAjQFwibWlzc2VkQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiTWlzc2VkXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaW5ib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIkluYm91bmRcIkAjQFxuLy8gQGtleTogQCNAXCJvdXRib3VuZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk91dGJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZnJvbVwiQCNAIEBzb3VyY2U6IEAjQFwiRnJvbVwiQCNAXG4vLyBAa2V5OiBAI0BcInRvXCJAI0AgQHNvdXJjZTogQCNAXCJUb1wiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsSXRlbS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0FjdGl2ZUNhbGxzOiAnU2VtIGNoYW1hZGFzIGF0aXZhcycsXG4gIGN1cnJlbnRDYWxsOiAnQ2hhbWFkYSBhdHVhbCcsXG4gIHJpbmdDYWxsOiAnQ2hhbWFkYSBzb25vcmEnLFxuICBvbkhvbGRDYWxsOiAnQ2hhbWFkYSBlbSBlc3BlcmEnLFxuICBvdGhlckRldmljZUNhbGw6ICdDaGFtYWRhcyBlbSBhbmRhbWVudG8gbm9zIG1ldXMgb3V0cm9zIGRpc3Bvc2l0aXZvcycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vQWN0aXZlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIGFjdGl2ZSBjYWxsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImN1cnJlbnRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJDdXJyZW50IENhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJyaW5nQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiUmluZ2luZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwib25Ib2xkQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbCBvbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3RoZXJEZXZpY2VDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJPbmdvaW5nIGNhbGxzIG9uIG15IG90aGVyIGRldmljZXNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbHNQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dnaW5nOiAnUmVnaXN0cmFuZG8uLi4nLFxuICBsb2dDYWxsOiAnUmVnaXN0cmFyIGNoYW1hZGEnLFxuICBlZGl0TG9nOiAnRWRpdGFyIGxvZycsXG4gIHNlbGVjdDogJ1NlbGVjaW9uYXIgdW0gcmVnaXN0cm8gY29ycmVzcG9uZGVudGUnLFxuICBPbkhvbGQ6ICdFbSBlc3BlcmEnLFxuICBSaW5naW5nOiAnVG9xdWUnLFxuICBDYWxsQ29ubmVjdGVkOiAnQ2hhbWFkYSBjb25lY3RhZGEnLFxuICB1bmtub3duVXNlcjogJ1VzdcOhcmlvIGRlc2NvbmhlY2lkbycsXG4gIHVua25vd25OdW1iZXI6ICdBbsO0bmltbycsXG4gIHVuYXZhaWxhYmxlOiAnSW5kaXNwb27DrXZlbCcsXG4gIHZpZXdEZXRhaWxzOiAnRXhpYmlyIGRldGFsaGVzJyxcbiAgYWRkRW50aXR5OiAnQ3JpYXIgbm92bycsXG4gIGFkZExvZzogJ0xvZycsXG4gIHRleHQ6ICdUZXh0bycsXG4gIGNhbGw6ICdDaGFtYWRhJyxcbiAgbWlzc2VkQ2FsbDogJ1BlcmRpZGFzJyxcbiAgaW5ib3VuZENhbGw6ICdFbnRyYWRhJyxcbiAgb3V0Ym91bmRDYWxsOiAnU2HDrWRhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibG9nZ2luZ1wiQCNAIEBzb3VyY2U6IEAjQFwiTG9nZ2luZy4uLlwiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ0NhbGxcIkAjQCBAc291cmNlOiBAI0BcIkxvZyBDYWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZWRpdExvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiRWRpdCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJzZWxlY3RcIkAjQCBAc291cmNlOiBAI0BcIlNlbGVjdCBhIG1hdGNoaW5nIHJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcIk9uSG9sZFwiQCNAIEBzb3VyY2U6IEAjQFwiT24gSG9sZFwiQCNAXG4vLyBAa2V5OiBAI0BcIlJpbmdpbmdcIkAjQCBAc291cmNlOiBAI0BcIlJpbmdpbmdcIkAjQFxuLy8gQGtleTogQCNAXCJDYWxsQ29ubmVjdGVkXCJAI0AgQHNvdXJjZTogQCNAXCJDYWxsIENvbm5lY3RlZFwiQCNAXG4vLyBAa2V5OiBAI0BcInVua25vd25Vc2VyXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duIFVzZXJcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmtub3duTnVtYmVyXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJ1bmF2YWlsYWJsZVwiQCNAIEBzb3VyY2U6IEAjQFwiVW5hdmFpbGFibGVcIkAjQFxuLy8gQGtleTogQCNAXCJ2aWV3RGV0YWlsc1wiQCNAIEBzb3VyY2U6IEAjQFwiVmlldyBEZXRhaWxzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkRW50aXR5XCJAI0AgQHNvdXJjZTogQCNAXCJDcmVhdGUgTmV3XCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWRkTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbFwiQCNAXG4vLyBAa2V5OiBAI0BcIm1pc3NlZENhbGxcIkAjQCBAc291cmNlOiBAI0BcIk1pc3NlZFwiQCNAXG4vLyBAa2V5OiBAI0BcImluYm91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJJbmJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0Ym91bmRDYWxsXCJAI0AgQHNvdXJjZTogQCNAXCJPdXRib3VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0FjdGl2ZUNhbGxzOiAnU2VtIGNoYW1hZGFzIGF0aXZhcycsXG4gIG5vUmVjb3JkczogJ05lbmh1bSByZXN1bHRhZG8gZW5jb250cmFkbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vQWN0aXZlQ2FsbHNcIkAjQCBAc291cmNlOiBAI0BcIk5vIGFjdGl2ZSBjYWxsc1wiQCNAXG4vLyBAa2V5OiBAI0BcIm5vUmVjb3Jkc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVzdWx0cyBmb3VuZFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0hpc3TDs3JpY28nLFxufTtcblxuLy8gQGtleTogQCNAXCJ0aXRsZVwiQCNAIEBzb3VyY2U6IEAjQFwiSGlzdG9yeVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0VuY2FtaW5oYXInLFxuICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gIGN1c3RvbU51bWJlcjogJ07Dum1lcm8gcGVyc29uYWxpemFkbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImZvcndhcmRcIkAjQCBAc291cmNlOiBAI0BcIkZvcndhcmRcIkAjQFxuLy8gQGtleTogQCNAXCJjYW5jZWxcIkAjQCBAc291cmNlOiBAI0BcIkNhbmNlbFwiQCNAXG4vLyBAa2V5OiBAI0BcImN1c3RvbU51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIG51bWJlclwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Gb3J3YXJkRm9ybS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gIHJlcGx5OiAnUmVzcG9uZGVyJyxcbiAgb25NeVdheTogJ0VzdG91IGEgY2FtaW5obycsXG4gIGN1c3RvbU1lc3NhZ2U6ICdNZW5zYWdlbSBwZXJzb25hbGl6YWRhJyxcbiAgY2FsbE1lQmFja0luOiAnTGlndWUgZGUgbm92byBlbScsXG4gIHdpbGxDYWxsWW91QmFja0luOiAnVm9jw6ogcG9kZSBsaWdhciBkZSBub3ZvIGVtJyxcbiAgbWluOiAnbWluLicsXG4gIGhvdXJzOiAnaG9yYXMnLFxuICBkYXlzOiAnZGlhcycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImNhbmNlbFwiQCNAIEBzb3VyY2U6IEAjQFwiQ2FuY2VsXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVwbHlcIkAjQCBAc291cmNlOiBAI0BcIlJlcGx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwib25NeVdheVwiQCNAIEBzb3VyY2U6IEAjQFwiT24gbXkgd2F5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiY3VzdG9tTWVzc2FnZVwiQCNAIEBzb3VyY2U6IEAjQFwiQ3VzdG9tIE1lc3NhZ2VcIkAjQFxuLy8gQGtleTogQCNAXCJjYWxsTWVCYWNrSW5cIkAjQCBAc291cmNlOiBAI0BcIkNhbGwgbWUgYmFjayBpblwiQCNAXG4vLyBAa2V5OiBAI0BcIndpbGxDYWxsWW91QmFja0luXCJAI0AgQHNvdXJjZTogQCNAXCJXaWxsIGNhbGwgeW91IGJhY2sgaW5cIkAjQFxuLy8gQGtleTogQCNAXCJtaW5cIkAjQCBAc291cmNlOiBAI0BcIm1pbi5cIkAjQFxuLy8gQGtleTogQCNAXCJob3Vyc1wiQCNAIEBzb3VyY2U6IEAjQFwiaG91cnNcIkAjQFxuLy8gQGtleTogQCNAXCJkYXlzXCJAI0AgQHNvdXJjZTogQCNAXCJkYXlzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlcGx5V2l0aE1lc3NhZ2UvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9yd2FyZDogJ0VuY2FtaW5oYXInLFxuICByZXBseTogJ1Jlc3BvbmRlcicsXG4gIGlnbm9yZTogJ0lnbm9yYXInLFxuICB0b1ZvaWNlbWFpbDogJ1BhcmEgY2FpeGEgcG9zdGFsJyxcbiAgYW5zd2VyOiAnUmVzcG9uZGVyJyxcbiAgYW5zd2VyQW5kRW5kOiAnUmVzcG9uZGVyIGUgZW5jZXJyYXInLFxuICBhbnN3ZXJBbmRIb2xkOiAnUmVzcG9uZGVyIGUgY29sb2NhciBlbSBlc3BlcmEnLFxufTtcblxuLy8gQGtleTogQCNAXCJmb3J3YXJkXCJAI0AgQHNvdXJjZTogQCNAXCJGb3J3YXJkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicmVwbHlcIkAjQCBAc291cmNlOiBAI0BcIlJlcGx5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiaWdub3JlXCJAI0AgQHNvdXJjZTogQCNAXCJJZ25vcmVcIkAjQFxuLy8gQGtleTogQCNAXCJ0b1ZvaWNlbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiVG8gVm9pY2VtYWlsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5zd2VyXCJAI0AgQHNvdXJjZTogQCNAXCJBbnN3ZXJcIkAjQFxuLy8gQGtleTogQCNAXCJhbnN3ZXJBbmRFbmRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEVuZFwiQCNAXG4vLyBAa2V5OiBAI0BcImFuc3dlckFuZEhvbGRcIkAjQCBAc291cmNlOiBAI0BcIkFuc3dlciAmIEhvbGRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvSW5jb21pbmdDYWxsUGFkL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVua25vd246ICdEZXNjb25oZWNpZG8nLFxuICBhbm9ueW1vdXM6ICdBbsO0bmltbycsXG4gIGFjdGl2ZUNhbGw6ICdDaGFtYWRhIGF0aXZhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5rbm93blwiQCNAIEBzb3VyY2U6IEAjQFwiVW5rbm93blwiQCNAXG4vLyBAa2V5OiBAI0BcImFub255bW91c1wiQCNAIEBzb3VyY2U6IEAjQFwiQW5vbnltb3VzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWN0aXZlQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRhaW5lcnMvSW5jb21pbmdDYWxsUGFnZS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBoaWRlOiAnT2N1bHRhcicsXG4gIGVuZDogJ0ZpbScsXG4gIGtleXBhZDogJ1RlY2xhZG8gbnVtw6lyaWNvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiaGlkZVwiQCNAIEBzb3VyY2U6IEAjQFwiSGlkZVwiQCNAXG4vLyBAa2V5OiBAI0BcImVuZFwiQCNAIEBzb3VyY2U6IEAjQFwiRW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwia2V5cGFkXCJAI0AgQHNvdXJjZTogQCNAXCJLZXlwYWRcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQWN0aXZlQ2FsbERpYWxQYWQvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5tdXRlOiAnRGVzYXRpdmFyIG11ZG8nLFxuICBtdXRlOiAnQXRpdmFyIG11ZG8nLFxuICBrZXlwYWQ6ICdUZWNsYWRvIG51bcOpcmljbycsXG4gIGhvbGQ6ICdBZ3VhcmRhcicsXG4gIG9uSG9sZDogJ0VtIGVzcGVyYScsXG4gIHBhcms6ICdFc3RhY2lvbmFyJyxcbiAgc3RvcFJlY29yZDogJ1BhcmFyJyxcbiAgcmVjb3JkOiAnR3JhdmFyJyxcbiAgYWRkOiAnQWRpY2lvbmFyJyxcbiAgdHJhbnNmZXI6ICdUcmFuc2ZlcsOqbmNpYScsXG4gIGZsaXA6ICdUcmFuc2ZlcmlyJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidW5tdXRlXCJAI0AgQHNvdXJjZTogQCNAXCJVbm11dGVcIkAjQFxuLy8gQGtleTogQCNAXCJtdXRlXCJAI0AgQHNvdXJjZTogQCNAXCJNdXRlXCJAI0Bcbi8vIEBrZXk6IEAjQFwia2V5cGFkXCJAI0AgQHNvdXJjZTogQCNAXCJLZXlwYWRcIkAjQFxuLy8gQGtleTogQCNAXCJob2xkXCJAI0AgQHNvdXJjZTogQCNAXCJIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwib25Ib2xkXCJAI0AgQHNvdXJjZTogQCNAXCJPbiBIb2xkXCJAI0Bcbi8vIEBrZXk6IEAjQFwicGFya1wiQCNAIEBzb3VyY2U6IEAjQFwiUGFya1wiQCNAXG4vLyBAa2V5OiBAI0BcInN0b3BSZWNvcmRcIkAjQCBAc291cmNlOiBAI0BcIlN0b3BcIkAjQFxuLy8gQGtleTogQCNAXCJyZWNvcmRcIkAjQCBAc291cmNlOiBAI0BcIlJlY29yZFwiQCNAXG4vLyBAa2V5OiBAI0BcImFkZFwiQCNAIEBzb3VyY2U6IEAjQFwiQWRkXCJAI0Bcbi8vIEBrZXk6IEAjQFwidHJhbnNmZXJcIkAjQCBAc291cmNlOiBAI0BcIlRyYW5zZmVyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmxpcFwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BY3RpdmVDYWxsUGFkL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZsaXBIZWFkZXI6ICdUcmFuc2ZlcmlyIGNoYW1hZGEgcGFyYS4uLicsXG4gIGZsaXA6ICdUcmFuc2ZlcmlyJyxcbiAgY29tcGxldGU6ICdUcmFuc2ZlcsOqbmNpYSBjb25jbHXDrWRhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiZmxpcEhlYWRlclwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcCBDYWxsIHRvLi4uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmxpcFwiQCNAIEBzb3VyY2U6IEAjQFwiRmxpcFwiQCNAXG4vLyBAa2V5OiBAI0BcImNvbXBsZXRlXCJAI0AgQHNvdXJjZTogQCNAXCJDb21wbGV0ZSBGbGlwXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0ZsaXBQYW5lbC9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0bzogJ1BhcmE6JyxcbiAgdHJhbnNmZXJUbzogJ1RyYW5zZmVyaXIgcGFyYScsXG4gIGJsaW5kVHJhbnNmZXI6ICdUcmFuc2ZlcsOqbmNpYScsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnSW5zZXJpciBuw7ptZXJvJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwidG9cIkAjQCBAc291cmNlOiBAI0BcIlRvOlwiQCNAXG4vLyBAa2V5OiBAI0BcInRyYW5zZmVyVG9cIkAjQCBAc291cmNlOiBAI0BcIlRyYW5zZmVyIHRvXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYmxpbmRUcmFuc2ZlclwiQCNAIEBzb3VyY2U6IEAjQFwiVHJhbnNmZXJcIkAjQFxuLy8gQGtleTogQCNAXCJlbnRlck5hbWVPck51bWJlclwiQCNAIEBzb3VyY2U6IEAjQFwiRW50ZXIgTnVtYmVyXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1RyYW5zZmVyUGFuZWwvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdW5rbm93bjogJ0Rlc2NvbmhlY2lkbycsXG4gIGFub255bW91czogJ0Fuw7RuaW1vJyxcbiAgYWN0aXZlQ2FsbHM6ICdDaGFtYWRhcyBhdGl2YXMnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmtub3duXCJAI0AgQHNvdXJjZTogQCNAXCJVbmtub3duXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYW5vbnltb3VzXCJAI0AgQHNvdXJjZTogQCNAXCJBbm9ueW1vdXNcIkAjQFxuLy8gQGtleTogQCNAXCJhY3RpdmVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQWN0aXZlIENhbGxzXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxDdHJsUGFnZS9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVDYWxsOiAnQ2hhbWFkYSBhdGl2YScsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFjdGl2ZUNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkFjdGl2ZSBDYWxsXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0NhbGxCYWRnZUNvbnRhaW5lci9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub0NvbnRhY3RzOiAnTmVuaHVtIHJlZ2lzdHJvIGVuY29udHJhZG8nLFxufTtcblxuLy8gQGtleTogQCNAXCJub0NvbnRhY3RzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZWNvcmRzIGZvdW5kXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0NvbnRhY3RMaXN0L2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNlYXJjaFBsYWNlaG9sZGVyOiAnUGVzcXVpc2FyLi4uJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwic2VhcmNoUGxhY2Vob2xkZXJcIkAjQCBAc291cmNlOiBAI0BcIlNlYXJjaC4uLlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0c1ZpZXcvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsOiAnVG9kb3MnLFxuICBjb21wYW55OiAnRW1wcmVzYScsXG4gIHBlcnNvbmFsOiAnUGVzc29hbCcsXG59O1xuXG4vLyBAa2V5OiBAI0BcImFsbFwiQCNAIEBzb3VyY2U6IEAjQFwiQWxsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY29tcGFueVwiQCNAIEBzb3VyY2U6IEAjQFwiQ29tcGFueVwiQCNAXG4vLyBAa2V5OiBAI0BcInBlcnNvbmFsXCJAI0AgQHNvdXJjZTogQCNAXCJQZXJzb25hbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Db250YWN0U291cmNlRmlsdGVyL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhY3REZXRhaWxzOiAnRGV0YWxoZXMgZGUgY29udGF0bycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImNvbnRhY3REZXRhaWxzXCJAI0AgQHNvdXJjZTogQCNAXCJDb250YWN0IERldGFpbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ29udGFjdERldGFpbHNWaWV3L2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGdvb2dsZTogJ0dvb2dsZScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFNvdXJjZUZpbHRlci9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub1JlY29yZHM6ICdOZW5odW0gcmVnaXN0cm8gcmVjZW50ZSBlbmNvbnRyYWRvLicsXG59O1xuXG4vLyBAa2V5OiBAI0BcIm5vUmVjb3Jkc1wiQCNAIEBzb3VyY2U6IEAjQFwiTm8gcmVjZW50IHJlY29yZHMgZm91bmQuXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1JlY2VudEFjdGl2aXR5TWVzc2FnZXMvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTmVuaHVtIHJlZ2lzdHJvIHJlY2VudGUgZW5jb250cmFkby4nLFxuICBpbkJvdW5kOiAnRW50cmFkYScsXG4gIG91dEJvdW5kOiAnU2HDrWRhJyxcbiAgbWlzc2VkOiAnQ2hhbWFkYSBwZXJkaWRhJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwibm9SZWNvcmRzXCJAI0AgQHNvdXJjZTogQCNAXCJObyByZWNlbnQgcmVjb3JkcyBmb3VuZC5cIkAjQFxuLy8gQGtleTogQCNAXCJpbkJvdW5kXCJAI0AgQHNvdXJjZTogQCNAXCJJbmJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwib3V0Qm91bmRcIkAjQCBAc291cmNlOiBAI0BcIk91dGJvdW5kXCJAI0Bcbi8vIEBrZXk6IEAjQFwibWlzc2VkXCJAI0AgQHNvdXJjZTogQCNAXCJNaXNzZWQgQ2FsbFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9SZWNlbnRBY3Rpdml0eUNhbGxzL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlY2VudEFjdGl2aXRpZXM6ICdBdGl2aWRhZGVzIHJlY2VudGVzJyxcbiAgdGV4dDogJ1RleHRvJyxcbiAgZmF4OiAnRmF4JyxcbiAgdm9pY2VtYWlsOiAnQ2FpeGEgcG9zdGFsJyxcbiAgY2FsbDogJ0NoYW1hZGEnLFxuICBnbWFpbDogJ0dtYWlsJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwicmVjZW50QWN0aXZpdGllc1wiQCNAIEBzb3VyY2U6IEAjQFwiUmVjZW50IEFjdGl2aXRpZXNcIkAjQFxuLy8gQGtleTogQCNAXCJ0ZXh0XCJAI0AgQHNvdXJjZTogQCNAXCJUZXh0XCJAI0Bcbi8vIEBrZXk6IEAjQFwiZmF4XCJAI0AgQHNvdXJjZTogQCNAXCJGYXhcIkAjQFxuLy8gQGtleTogQCNAXCJ2b2ljZW1haWxcIkAjQCBAc291cmNlOiBAI0BcIlZvaWNlbWFpbFwiQCNAXG4vLyBAa2V5OiBAI0BcImNhbGxcIkAjQCBAc291cmNlOiBAI0BcIkNhbGxcIkAjQFxuLy8gQGtleTogQCNAXCJnbWFpbFwiQCNAIEBzb3VyY2U6IEAjQFwiR21haWxcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUmVjZW50QWN0aXZpdHlDb250YWluZXIvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm9SZWNvcmRzOiAnTmVuaHVtIHJlZ2lzdHJvIHJlY2VudGUgZW5jb250cmFkby4nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlY2VudEFjdGl2aXR5RW1haWxzL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9mZmxpbmVNb2RlOiAnTW9kbyBvZmZsaW5lJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwib2ZmbGluZU1vZGVcIkAjQCBAc291cmNlOiBAI0BcIk9mZmxpbmUgTW9kZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9PZmZsaW5lTW9kZUJhZGdlL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV1bGE6ICdDb250cmF0byBkZSBsaWNlbsOnYSBkbyB1c3XDoXJpbyBmaW5hbCcsXG4gIHNlcnZpY2VUZXJtczogJ1Rlcm1vcyBkZSBzZXJ2acOnbycsXG59O1xuXG4vLyBAa2V5OiBAI0BcImV1bGFcIkAjQCBAc291cmNlOiBAI0BcIkVuZCBVc2VyIExpY2Vuc2UgQWdyZWVtZW50XCJAI0Bcbi8vIEBrZXk6IEAjQFwic2VydmljZVRlcm1zXCJAI0AgQHNvdXJjZTogQCNAXCJTZXJ2aWNlIFRlcm1zXCJAI0BcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL0V1bGEvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBwcmVzZW5jZVN0YXR1cyBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1ByZXNlbmNlL3ByZXNlbmNlU3RhdHVzJztcbmltcG9ydCBkbmRTdGF0dXMgZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9QcmVzZW5jZS9kbmRTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFtwcmVzZW5jZVN0YXR1cy5hdmFpbGFibGVdOiAnRGlzcG9uw612ZWwnLFxuICBbcHJlc2VuY2VTdGF0dXMub2ZmbGluZV06ICdJbnZpc8OtdmVsJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3krZG5kU3RhdHVzLnRha2VBbGxDYWxsc106ICdPY3VwYWRvJyxcbiAgW3ByZXNlbmNlU3RhdHVzLmJ1c3krZG5kU3RhdHVzLmRvTm90QWNjZXB0RGVwYXJ0bWVudENhbGxzXTogJ09jdXBhZG8nLFxuICBbcHJlc2VuY2VTdGF0dXMuYnVzeStkbmRTdGF0dXMuZG9Ob3RBY2NlcHRBbnlDYWxsc106ICdOw6NvIHBlcnR1cmJlJyxcbn07XG5cbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmF2YWlsYWJsZV1cIkAjQCBAc291cmNlOiBAI0BcIkF2YWlsYWJsZVwiQCNAXG4vLyBAa2V5OiBAI0BcIltwcmVzZW5jZVN0YXR1cy5vZmZsaW5lXVwiQCNAIEBzb3VyY2U6IEAjQFwiSW52aXNpYmxlXCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmJ1c3krZG5kU3RhdHVzLnRha2VBbGxDYWxsc11cIkAjQCBAc291cmNlOiBAI0BcIkJ1c3lcIkAjQFxuLy8gQGtleTogQCNAXCJbcHJlc2VuY2VTdGF0dXMuYnVzeStkbmRTdGF0dXMuZG9Ob3RBY2NlcHREZXBhcnRtZW50Q2FsbHNdXCJAI0AgQHNvdXJjZTogQCNAXCJCdXN5XCJAI0Bcbi8vIEBrZXk6IEAjQFwiW3ByZXNlbmNlU3RhdHVzLmJ1c3krZG5kU3RhdHVzLmRvTm90QWNjZXB0QW55Q2FsbHNdXCJAI0AgQHNvdXJjZTogQCNAXCJEbyBub3QgRGlzdHVyYlwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9QcmVzZW5jZUl0ZW0vaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgYWNjZXB0UXVldWVDYWxsczogJ0FjZWl0YXIgY2hhbWFkYXMgZW0gZmlsYScsXG59O1xuXG4vLyBAa2V5OiBAI0BcInN0YXR1c1wiQCNAIEBzb3VyY2U6IEAjQFwiU3RhdHVzXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYWNjZXB0UXVldWVDYWxsc1wiQCNAIEBzb3VyY2U6IEAjQFwiQWNjZXB0IGNhbGwgcXVldWUgY2FsbHNcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvUHJlc2VuY2VTZXR0aW5nU2VjdGlvbi9pMThuL3B0LUJSLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbjogJ0VuZ2xpc2gnLFxuICBqYTogJ0phcGFuZXNlJyxcbiAgZnI6ICdGcmFuY8OqcycsXG4gIGRlOiAnRGV1dHNjaCcsXG4gIGVzOiAnRXNwYW5ob2wnLFxuICBpdDogJ0l0YWxpYW5vJyxcbiAgcHQ6ICdQb3J0dWd1w6pzJyxcbn07XHJcblxuLy8gQGtleTogQCNAXCJlblwiQCNAIEBzb3VyY2U6IEAjQFwiRW5nbGlzaFwiQCNAXG4vLyBAa2V5OiBAI0BcImphXCJAI0AgQHNvdXJjZTogQCNAXCJKYXBhbmVzZVwiQCNAXG4vLyBAa2V5OiBAI0BcImZyXCJAI0AgQHNvdXJjZTogQCNAXCJGcmVuY2hcIkAjQFxuLy8gQGtleTogQCNAXCJkZVwiQCNAIEBzb3VyY2U6IEAjQFwiRGV1dHNjaFwiQCNAXG4vLyBAa2V5OiBAI0BcImVzXCJAI0AgQHNvdXJjZTogQCNAXCJTcGFuaXNoXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaXRcIkAjQCBAc291cmNlOiBAI0BcIkl0YWxpYW5cIkAjQFxuLy8gQGtleTogQCNAXCJwdFwiQCNAIEBzb3VyY2U6IEAjQFwiUG9ydHVndWVzZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Mb2NhbGVQaWNrZXIvaTE4bi9wdC1CUi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVnaW9uOiAnUmVnacOjbycsXG4gIGNhbGxpbmc6ICdDaGFtYWRhcycsXG4gIGxvZ291dDogJ0xvZ291dCcsXG4gIHZlcnNpb246ICdWZXJzw6NvJyxcbiAgc2V0dGluZ3M6ICdDb25maWd1cmHDp8O1ZXMnLFxuICBjbGlja1RvRGlhbDogJ0NsaXF1ZSBwYXJhIGRpc2NhcicsXG4gIGF1dG9DcmVhdGVMb2c6ICdDcmlhciBsb2cgZGUgY2hhbWFkYXMgYXV0b21hdGljYW1lbnRlJyxcbiAgYXV0b0NyZWF0ZVNNU0xvZzogJ0NyaWFyIGxvZyBkZSBTTVMgYXV0b21hdGljYW1lbnRlJyxcbiAgYXV0b0xvZ0NhbGxzOiAnUmVnaXN0cmFyIGNoYW1hZGFzIGF1dG9tYXRpY2FtZW50ZScsXG4gIGF1dG9Mb2dTTVM6ICdSZWdpc3RyYXIgU01TIGF1dG9tYXRpY2FtZW50ZScsXG4gIGNsaWNrVG9TTVM6ICdDbGljYXIgcGFyYSBlbnZpYXIgbWVuc2FnZW0gZGUgdGV4dG8nLFxuICBjbGlja1RvRGlhbFNNUzogJ0NsaXF1ZSBwYXJhIGRpc2Nhci9lbnZpYXIgbWVuc2FnZW0gZGUgdGV4dG8nLFxufTtcblxuXG4vLyBAa2V5OiBAI0BcInJlZ2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiUmVnaW9uXCJAI0Bcbi8vIEBrZXk6IEAjQFwiY2FsbGluZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQ2FsbGluZ1wiQCNAXG4vLyBAa2V5OiBAI0BcImxvZ291dFwiQCNAIEBzb3VyY2U6IEAjQFwiTG9nb3V0XCJAI0Bcbi8vIEBrZXk6IEAjQFwidmVyc2lvblwiQCNAIEBzb3VyY2U6IEAjQFwiVmVyc2lvblwiQCNAXG4vLyBAa2V5OiBAI0BcInNldHRpbmdzXCJAI0AgQHNvdXJjZTogQCNAXCJTZXR0aW5nc1wiQCNAXG4vLyBAa2V5OiBAI0BcImNsaWNrVG9EaWFsXCJAI0AgQHNvdXJjZTogQCNAXCJDbGljayB0byBEaWFsXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0b0NyZWF0ZUxvZ1wiQCNAIEBzb3VyY2U6IEAjQFwiQXV0by1jcmVhdGUgQ2FsbCBMb2dcIkAjQFxuLy8gQGtleTogQCNAXCJhdXRvQ3JlYXRlU01TTG9nXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRvLWNyZWF0ZSBTTVMgTG9nXCJAI0Bcbi8vIEBrZXk6IEAjQFwiYXV0b0xvZ0NhbGxzXCJAI0AgQHNvdXJjZTogQCNAXCJBdXRvIGxvZyBjYWxsc1wiQCNAXG4vLyBAa2V5OiBAI0BcImF1dG9Mb2dTTVNcIkAjQCBAc291cmNlOiBAI0BcIkF1dG8gbG9nIFNNU1wiQCNAXG4vLyBAa2V5OiBAI0BcImNsaWNrVG9TTVNcIkAjQCBAc291cmNlOiBAI0BcIkNsaWNrIHRvIFNNU1wiQCNAXG4vLyBAa2V5OiBAI0BcImNsaWNrVG9EaWFsU01TXCJAI0AgQHNvdXJjZTogQCNAXCJDbGljayB0byBEaWFsL1NNU1wiQCNAXG4vLyBAa2V5OiBAI0BcImF1ZGlvXCJAI0AgQHNvdXJjZTogQCNAXCJBdWRpb1wiQCNAXG4vLyBAa2V5OiBAI0BcImxhbmd1YWdlXCJAI0AgQHNvdXJjZTogQCNAXCJMYW5ndWFnZVwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9TZXR0aW5nc1BhbmVsL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHVuYXV0aG9yaXplZDogJ0F1dG9yaXphcicsXG4gIGF1dGhvcml6ZWQ6ICdDYW5jZWxhciBhdXRvcml6YcOnw6NvJyxcbiAgdW5hdXRob3JpemVkVGl0bGU6ICdDb250YSBhdXRvcml6YWRhJyxcbiAgdG9vbHRpcDogJ1ZvY8OqIGF1dG9yaXpvdSBvIFJpbmdDZW50cmFsIGZvciBHb29nbGUgYSBhY2Vzc2FyIHN1YSBjb250YSAnLFxufTtcblxuLy8gQGtleTogQCNAXCJ1bmF1dGhvcml6ZWRcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZVwiQCNAXG4vLyBAa2V5OiBAI0BcImF1dGhvcml6ZWRcIkAjQCBAc291cmNlOiBAI0BcIlVuYXV0aG9yaXplXCJAI0Bcbi8vIEBrZXk6IEAjQFwidW5hdXRob3JpemVkVGl0bGVcIkAjQCBAc291cmNlOiBAI0BcIkF1dGhvcml6ZWQgQWNjb3VudFwiQCNAXG4vLyBAa2V5OiBAI0BcInRvb2x0aXBcIkAjQCBAc291cmNlOiBAI0BcIllvdSBoYXZlIGF1dGhvcml6ZWQgUmluZ0NlbnRyYWwgZm9yIEdvb2dsZSB0byBhY2Nlc3MgeW91ciBhY2NvdW50IFwiQCNAXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemVTZXR0aW5nc1BhbmVsL2kxOG4vcHQtQlIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluY29taW5nQ2FsbDogJ0NoYW1hZGEgcmVjZWJpZGEgZGU6JyxcbiAgYW5zd2VyOiAnUmVzcG9uZGVyJyxcbiAgaWdub3JlOiAnSWdub3JhcicsXG59O1xuXG4vLyBAa2V5OiBAI0BcImluY29taW5nQ2FsbFwiQCNAIEBzb3VyY2U6IEAjQFwiSW5jb21pbmcgQ2FsbCBGcm9tOlwiQCNAXG4vLyBAa2V5OiBAI0BcImFuc3dlclwiQCNAIEBzb3VyY2U6IEAjQFwiQW5zd2VyXCJAI0Bcbi8vIEBrZXk6IEAjQFwiaWdub3JlXCJAI0AgQHNvdXJjZTogQCNAXCJJZ25vcmVcIkAjQFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9wdC1CUi5qcyIsImltcG9ydCBFbnVtIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9FbnVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFbnVtKFtcclxuICAnYnVzaW5lc3MnLFxyXG4gICdleHRlbnNpb24nLFxyXG4gICdob21lJyxcclxuICAnbW9iaWxlJyxcclxuICAncGhvbmUnLFxyXG4gICd1bmtub3duJyxcclxuICAnY29tcGFueScsXHJcbiAgJ2RpcmVjdCcsXHJcbl0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZW51bXMvcGhvbmVUeXBlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=