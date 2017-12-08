webpackJsonp([11],{

/***/ 2652:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(2653);


/***/ }),

/***/ 2653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _ExtensionServerRunner = __webpack_require__(2654);

var _ExtensionServerRunner2 = _interopRequireDefault(_ExtensionServerRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.runner = new _ExtensionServerRunner2.default();
global.server = global.runner._server;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 2654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(21);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(146);

var _set2 = _interopRequireDefault(_set);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(361);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(92);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(121);

var _ramda = __webpack_require__(147);

var _ramda2 = _interopRequireDefault(_ramda);

var _ChromeTransport = __webpack_require__(892);

var _getProxyServer = __webpack_require__(2655);

var _getProxyServer2 = _interopRequireDefault(_getProxyServer);

var _answer = __webpack_require__(2657);

var _answer2 = _interopRequireDefault(_answer);

var _reject = __webpack_require__(2658);

var _reject2 = _interopRequireDefault(_reject);

var _Phone = __webpack_require__(895);

var _Phone2 = _interopRequireDefault(_Phone);

var _App = __webpack_require__(948);

var _App2 = _interopRequireDefault(_App);

var _createWindow = __webpack_require__(2659);

var _createWindow2 = _interopRequireDefault(_createWindow);

var _Logo = __webpack_require__(1014);

var _Logo2 = _interopRequireDefault(_Logo);

var _Icon = __webpack_require__(1015);

var _Icon2 = _interopRequireDefault(_Icon);

var _notificationIcon = __webpack_require__(2660);

var _notificationIcon2 = _interopRequireDefault(_notificationIcon);

var _BaseRunner2 = __webpack_require__(366);

var _BaseRunner3 = _interopRequireDefault(_BaseRunner2);

var _server = __webpack_require__(2661);

var _server2 = _interopRequireDefault(_server);

var _i18n = __webpack_require__(2662);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

// eslint-disable-next-line

// eslint-disable-next-line

// eslint-disable-next-line
var ProxyServer = (0, _getProxyServer2.default)(_Phone2.default);
// eslint-disable-next-line

// eslint-disable-next-line

var ExtensionServerRunner = function (_BaseRunner) {
  (0, _inherits3.default)(ExtensionServerRunner, _BaseRunner);

  function ExtensionServerRunner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExtensionServerRunner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExtensionServerRunner.__proto__ || (0, _getPrototypeOf2.default)(ExtensionServerRunner)).call.apply(_ref, [this].concat(args))), _this), _this._onStateChange = function () {
      var target = _this._server._target;
      if (target.chromeAdapter.clickToDial !== _this._clickToDial) {
        _this._clickToDial = target.chromeAdapter.clickToDial;
        chrome.storage.local.set({
          clickToDial: !!_this._clickToDial
        });
      }
      if (_this._c2dPermission !== _this.c2dPermission) {
        _this._c2dPermission = _this.c2dPermission;
        chrome.storage.local.set({
          c2dPermission: _this._c2dPermission
        });
      }
      if (_this._c2smsPermission !== _this.c2smsPermission) {
        _this._c2smsPermission = _this.c2dPermission;
        chrome.storage.local.set({
          c2smsPermission: _this._c2smsPermission
        });
      }
      if (target.webphone.ringSession && target.webphone.ringSessionId !== _this.sessionId) {
        _this.sessionId = target.webphone.ringSessionId;
        _this._createNotification();
      }
      if (_this._notificationIdSet && _this._notificationIdSet.size > 0) {
        var ringSessions = new _set2.default();
        target.webphone.sessions.forEach(function (session) {
          if (session.callStatus === 'webphone-session-connecting' && session.direction === 'Inbound') {
            ringSessions.add(session.id);
          }
        });
        var notificationIdArr = [].concat((0, _toConsumableArray3.default)(_this._notificationIdSet)).filter(function (notificationId) {
          return !ringSessions.has(notificationId);
        });
        notificationIdArr.forEach(function (notificationId) {
          chrome.notifications.clear(notificationId);
          _this._notificationIdSet.delete(notificationId);
        });
      }
    }, _this._onWindowRemoved = function (id) {
      if (_this._clientWindow && _this._clientWindow.id === id) {
        _this._clientWindow = null;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExtensionServerRunner, [{
    key: '_renderApp',
    value: function _renderApp() {
      _reactDom2.default.render(_react2.default.createElement(_App2.default, {
        phone: this._server._target,
        logo: _Logo2.default,
        icon: _Icon2.default
      }), document.querySelector('div#viewport'));
    }
  }, {
    key: '_initializeApp',
    value: function _initializeApp() {
      var _this2 = this;

      this._transport = new _ChromeTransport.ServerTransport();
      this._server = new ProxyServer((0, _extends3.default)({}, {"prefix":"rc-chrome","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google","application":"Google Chrome","fullName":"RingCentral"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-fueai0i5mpo6lrfqlekj1p1t0jbj78qq.apps.googleusercontent.com","analyticsKey":"","defaultWhitelist":["http://*","https://*"],"defaultBlacklist":["*://*.salesforce.com/*","*://*.servicenow.com/*","*://*.mindbodyonline.com/*","*://*.zendesk.com/*","*://*.desk.com/*","*://*.oraclecloud.com/*","*://*crm.dynamics.com/*","*://github.com/*","*://login.microsoftonline.com/*","*://accounts.google.com/*","*://login.live.com/*","*://chromedriver.storage.googleapis.com/*"],"managedBlacklist":["*://*.ringcentral.com*","*://ringcentral.*/*","*://*glip.com/*","*://*service-officeathand.att.com/*","*://*btcloudphone.bt.com/*","*://*businessconnect.telus.com/*","*://*google.com*/chrome/newtab*","*://*rc.my.salesforce.com/*"],"version":"4.0.0","buildHash":"232","watch":false}, {
        transport: this._transport
      }));
      this._store = (0, _redux.createStore)(this._server.reducer);
      this._server.setStore(this._store);
      if (document.readyState !== 'loading') {
        this._renderApp();
      } else {
        var fn = function fn() {
          window.removeEventListener('load', fn);
          _this2._renderApp();
        };
        window.addEventListener('load', fn);
      }
      chrome.browserAction.onClicked.addListener(function (tab) {
        return _this2._onBrowserAction(tab);
      });
      this._notificationIdSet = new _set2.default();
      this._store.subscribe(function () {
        return _this2._onStateChange();
      });
      this._injectContent();
      this._meeting = new _server2.default({ server: this._server._target });
    }
  }, {
    key: '_isInPopUpWindow',
    value: function _isInPopUpWindow(windowId) {
      return new _promise2.default(function (resolve) {
        chrome.windows.get(windowId, function (window) {
          resolve(window.type === chrome.windows.WindowType.POPUP);
        });
      });
    }
  }, {
    key: '_injectContent',
    value: function _injectContent() {
      var _this3 = this;

      // inject content into all http/https tabs
      chrome.tabs.query({
        discarded: false
      }, function (tabs) {
        // tabs that doesn't accept scripts will simple fail without effecting background
        _ramda2.default.forEach(function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(tab) {
            var inPopUpWindow;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this3._isInPopUpWindow(tab.windowId);

                  case 2:
                    inPopUpWindow = _context.sent;

                    if (!inPopUpWindow) {
                      chrome.tabs.executeScript(tab.id, {
                        file: 'content.js'
                      });
                    }

                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this3);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }(), tabs);
      });
    }
  }, {
    key: '_onStorageChange',
    value: function _onStorageChange(changes, namespace) {
      (0, _get3.default)(ExtensionServerRunner.prototype.__proto__ || (0, _getPrototypeOf2.default)(ExtensionServerRunner.prototype), '_onStorageChange', this).call(this, changes, namespace);
      if (namespace === 'local' && Object.prototype.hasOwnProperty.call(changes, 'c2d')) {
        var c2d = changes.c2d.newValue;
        chrome.storage.local.remove('c2d');
        if (c2d && c2d.number) {
          if (!c2d.injectedApp) {
            this._showClientWindow();
          }
          this._server._target.routerInteraction.history.push('/dialer');
          this._server._target.dialerUI.call({ phoneNumber: c2d.number });
        }
      }
      if (namespace === 'local' && Object.prototype.hasOwnProperty.call(changes, 'c2sms')) {
        var c2sms = changes.c2sms.newValue;
        chrome.storage.local.remove('c2sms');
        if (c2sms && c2sms.number) {
          if (!c2sms.injectedApp) {
            this._showClientWindow();
          }
          this._server._target.routerInteraction.history.push('/composeText');
          if (this._server._target.composeText.typingToNumber) {
            this._server._target.composeText.addToNumber({
              phoneNumber: this._server._target.composeText.typingToNumber,
              name: this._server._target.composeText.typingToNumber
            });
            this._server._target.composeText.cleanTypingToNumber();
          }
          this._server._target.composeText.updateTypingToNumber(c2sms.number);
          // this._server._target.contactSearch.search({ searchString: c2sms.number });
        }
      }
    }
  }, {
    key: '_showClientWindow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                chrome.windows.onRemoved.addListener(this._onWindowRemoved);

                if (this._clientWindow) {
                  _context2.next = 10;
                  break;
                }

                if (this._clientWindowPromise) {
                  _context2.next = 8;
                  break;
                }

                this._clientWindowPromise = (0, _createWindow2.default)({
                  url: './client.html',
                  width: 300,
                  height: 540,
                  title: {"prefix":"rc-chrome","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google","application":"Google Chrome","fullName":"RingCentral"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-fueai0i5mpo6lrfqlekj1p1t0jbj78qq.apps.googleusercontent.com","analyticsKey":"","defaultWhitelist":["http://*","https://*"],"defaultBlacklist":["*://*.salesforce.com/*","*://*.servicenow.com/*","*://*.mindbodyonline.com/*","*://*.zendesk.com/*","*://*.desk.com/*","*://*.oraclecloud.com/*","*://*crm.dynamics.com/*","*://github.com/*","*://login.microsoftonline.com/*","*://accounts.google.com/*","*://login.live.com/*","*://chromedriver.storage.googleapis.com/*"],"managedBlacklist":["*://*.ringcentral.com*","*://ringcentral.*/*","*://*glip.com/*","*://*service-officeathand.att.com/*","*://*btcloudphone.bt.com/*","*://*businessconnect.telus.com/*","*://*google.com*/chrome/newtab*","*://*rc.my.salesforce.com/*"],"version":"4.0.0","buildHash":"232","watch":false}.brandConfig.appName,
                  useChromeWindowAPI: true
                });
                _context2.next = 6;
                return this._clientWindowPromise;

              case 6:
                this._clientWindow = _context2.sent;

                this._clientWindowPromise = null;

              case 8:
                _context2.next = 11;
                break;

              case 10:
                chrome.windows.update(this._clientWindow.id, {
                  focused: true
                });

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _showClientWindow() {
        return _ref3.apply(this, arguments);
      }

      return _showClientWindow;
    }()
  }, {
    key: '_onBrowserAction',
    value: function _onBrowserAction(tab) {
      if (tab && this._checkUrl(tab.url)) {
        if (this._server._target.chromeAdapter.minimized || this._server._target.chromeAdapter.closed) {
          this._server._target.chromeAdapter.showAdapter();
        }
      } else {
        this._showClientWindow();
      }
    }
  }, {
    key: '_createNotification',
    value: function _createNotification() {
      var _this4 = this;

      var target = this._server._target;
      var contactMapping = target.contactMatcher && target.contactMatcher.dataMapping;
      var fromMatches = contactMapping && contactMapping[target.webphone.ringSession.from] || [];
      var display = void 0;
      if (fromMatches.length === 1) {
        display = _i18n2.default.getString('incomingCall', target.locale.currentLocale) + ' ' + fromMatches[0].name + '\n' + target.webphone.ringSession.from;
      } else {
        display = _i18n2.default.getString('incomingCall', target.locale.currentLocale) + ' ' + target.webphone.ringSession.from;
      }
      var options = {
        type: 'basic',
        iconUrl: _notificationIcon2.default,
        title: chrome.runtime.getManifest().name,
        message: display,
        buttons: [{
          title: _i18n2.default.getString('answer', target.locale.currentLocale),
          iconUrl: _answer2.default
        }, {
          title: _i18n2.default.getString('ignore', target.locale.currentLocale),
          iconUrl: _reject2.default
        }],
        requireInteraction: true
      };
      this._notificationIdSet.add(this.sessionId);
      chrome.notifications.create(this.sessionId, options);
      chrome.notifications.onButtonClicked.addListener(function (notificationId, buttonIndex) {
        if (_this4._notificationIdSet.has(notificationId)) {
          if (buttonIndex === 0) {
            chrome.windows.getLastFocused({}, function (window) {
              if (window && window.focused === true && window.state !== 'minimized') {
                chrome.tabs.query({
                  active: true, windowId: window.id
                }, function (tabs) {
                  _this4._onBrowserAction(tabs[0]);
                });
              } else {
                _this4._showClientWindow();
              }
            });
            target.webphone.answer(notificationId);
          } else {
            target.webphone.reject(notificationId);
          }
          if (notificationId) {
            chrome.notifications.clear(notificationId);
            _this4._notificationIdSet.delete(notificationId);
            // this.notificationId = null;
          }
        }
      });
    }
  }, {
    key: 'c2dPermission',
    get: function get() {
      return !!this._server._target.rolesAndPermissions.ringoutEnabled;
    }
  }, {
    key: 'c2smsPermission',
    get: function get() {
      return !!(this._server._target.rolesAndPermissions.permissions.OutboundSMS || this._server._target.rolesAndPermissions.permissions.InternalSMS);
    }
  }]);
  return ExtensionServerRunner;
}(_BaseRunner3.default);

exports.default = ExtensionServerRunner;

/***/ }),

/***/ 2655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(131);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(21);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = __webpack_require__(1013);

var _toArray3 = _interopRequireDefault(_toArray2);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = getProxyServer;

var _RcModule2 = __webpack_require__(32);

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _baseActionTypes = __webpack_require__(817);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

var _getProxyServerReducer = __webpack_require__(2656);

var _getProxyServerReducer2 = _interopRequireDefault(_getProxyServerReducer);

var _ensureExist = __webpack_require__(71);

var _ensureExist2 = _interopRequireDefault(_ensureExist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyServer(Target) {
  return function (_RcModule) {
    (0, _inherits3.default)(_class, _RcModule);

    function _class(_ref) {
      var _this2 = this;

      var transport = _ref.transport,
          options = (0, _objectWithoutProperties3.default)(_ref, ['transport']);
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, (0, _extends3.default)({}, options, {
        actionTypes: _baseActionTypes2.default
      })));

      _this._target = new Target((0, _extends3.default)({}, options, {
        getState: function getState() {
          return _this.state.target;
        }
      }));

      var _loop = function _loop(subModule) {
        var _context2;

        if ((_context2 = _this._target, Object.prototype.hasOwnProperty).call(_context2, subModule) && _this._target[subModule] instanceof _RcModule3.default) {
          (0, _defineProperty2.default)(_this, subModule, {
            configurable: false,
            enumerable: true,
            get: function get() {
              return this._target[subModule];
            }
          });
        }
      };

      for (var subModule in _this._target) {
        _loop(subModule);
      }

      _this._transport = _ensureExist2.default.call(_this, transport, 'transport');
      _this._reducer = (0, _getProxyServerReducer2.default)({
        moduleReducer: _this._target.reducer,
        transport: transport,
        prefix: _this.prefix
      });

      transport.on(transport.events.request, function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
          var requestId = _ref3.requestId,
              _ref3$payload = _ref3.payload,
              type = _ref3$payload.type,
              functionPath = _ref3$payload.functionPath,
              args = _ref3$payload.args,
              actionNumber = _ref3$payload.actionNumber;

          var _functionPath$split$s, _functionPath$split$s2, pathTokens, fnName, target, _target, result;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = type;
                  _context.next = _context.t0 === _this.actionTypes.execute ? 3 : _context.t0 === _this.actionTypes.sync ? 18 : 20;
                  break;

                case 3:
                  _functionPath$split$s = functionPath.split('.').slice(1), _functionPath$split$s2 = (0, _toArray3.default)(_functionPath$split$s), pathTokens = _functionPath$split$s2.slice(0);
                  fnName = pathTokens.pop();
                  target = _this._target;

                  pathTokens.forEach(function (token) {
                    target = target[token];
                  });
                  _context.prev = 7;
                  _context.next = 10;
                  return (_target = target)[fnName].apply(_target, (0, _toConsumableArray3.default)(args));

                case 10:
                  result = _context.sent;

                  transport.response({
                    requestId: requestId,
                    result: result
                  });
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t1 = _context['catch'](7);

                  transport.response({
                    requestId: requestId,
                    error: _context.t1
                  });

                case 17:
                  return _context.abrupt('break', 22);

                case 18:
                  if (actionNumber !== _this.state.actionNumber) {
                    transport.response({
                      requestId: requestId,
                      result: _this.state
                    });
                  } else {
                    transport.response({
                      requestId: requestId,
                      error: new Error('State is already up to date.')
                    });
                  }
                  return _context.abrupt('break', 22);

                case 20:
                  transport.response({
                    requestId: requestId,
                    error: new Error('Invalid request type \'' + type + '\'.')
                  });
                  return _context.abrupt('break', 22);

                case 22:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[7, 14]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      return _this;
    }

    return _class;
  }(_RcModule3.default);
}


/***/ }),

/***/ 2656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProxyServerReducer;

var _Enum = __webpack_require__(12);

var _baseActionTypes = __webpack_require__(817);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyServerReducer(_ref) {
  var moduleReducer = _ref.moduleReducer,
      transport = _ref.transport,
      prefix = _ref.prefix;

  var actionTypes = (0, _Enum.prefixEnum)({ enumMap: _baseActionTypes2.default, prefix: prefix });
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      target: moduleReducer(undefined, {
        type: actionTypes.initModule
      }),
      lastAction: null,
      actionNumber: -1
    };
    var action = arguments[1];

    if (!action) return state;
    var nextActionNumber = state.actionNumber + 1;
    transport.push({
      payload: {
        type: actionTypes.action,
        action: action,
        actionNumber: nextActionNumber
      }
    });
    return {
      target: moduleReducer(state.target, action),
      lastAction: action,
      actionNumber: nextActionNumber
    };
  };
}


/***/ }),

/***/ 2657:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABbUlEQVR42mNgwAEyL1UIZl0tSMi8XLA+81LBzczL+Z/BGMwuWA+WA6phIBY03G/gAGqszLhU8CHjUv5//LjgA0gtSA9eQwtvFkpnXC44TdhANAzUA9KL29BLBU9INhTh+icYhoO8QpZLsbgcJVggYUqhoVAMMgse+7giqv127//rn2/+n/doESlB8gGcWkDJBpeiJ9+f/geBr3++/i++WkW04SAzQcGwHpeCNz/f/oeB3a/2kRIc6xlACR6XglPvz4AN/QJ08aR704k3GGgmAyg34VLQd3cy2OCH3x6TGIH5n/EaDMJn3p8DG77g0VISDcYTFCAMirQPvz7+//Pvz/+VT9f+P/buxP/H3578r7xeTygocEceDLfe6vr/7c/3/8jg7c93/2tuNOHIKPnr8CY3dMORUwkILH+yGk9yw5NB0HHBlbL/m15s+3/ny73/+18f+p91qRB3BqFZlqZpIUSzYpOmBT1NqyZqVqYAJ2ZWHlw8zSwAAAAASUVORK5CYII="

/***/ }),

/***/ 2658:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABLklEQVR42rWVz0rDQBCHfxRF9NBrEaE+gN48lFJ8At/Dm2BJQkQvwbfoQyRpTOnVm/hOPdT9VhCD+bOr7sBC2J35sjvzm12py25Xh7rPTxVvLhWvZ0rW13bwzRxr+Dhbth8pys+VVAulLxd6rCbK6hNlrwefw3wzxxo++BLTa3fbIz1sruyOlm/Hg5vAB19iiO2ExsVcaT2VrxFD7A84R+Gvv4F+h8NopIU8caS/GgxYX9WnCC45dck5LKsWZEOFfeypPlO2HbenxLBg2u0jH+fjVjeKyp3i8r11HZZNK4JHmz7QqNgbFSTtfWBYMG03IXwvaPnc3WCGBdMJ7AptgIdS4QNtpKKveFTfB9ooXp/ckBTV7ypUr9yCNUiwlg56CQW7NoNe9EGfpn98TD8AdsHl1SslaKYAAAAASUVORK5CYII="

/***/ }),

/***/ 2659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: refactor
exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var url = _ref2.url,
        width = _ref2.width,
        height = _ref2.height,
        title = _ref2.title,
        _ref2$type = _ref2.type,
        type = _ref2$type === undefined ? 'popup' : _ref2$type,
        _ref2$position = _ref2.position,
        position = _ref2$position === undefined ? 'center' : _ref2$position,
        _ref2$focused = _ref2.focused,
        focused = _ref2$focused === undefined ? true : _ref2$focused,
        _ref2$useChromeWindow = _ref2.useChromeWindowAPI,
        useChromeWindowAPI = _ref2$useChromeWindow === undefined ? true : _ref2$useChromeWindow;
    var isMac, dualScreenLeft, dualScreenTop, windowWidth, windowHeight, top, left, newWindow;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isMac = navigator.userAgent.indexOf('Macintosh') > -1 || navigator.userAgent.indexOf('Mac OS X') > -1;
            dualScreenLeft = parseInt(window.screenLeft !== undefined ? window.screenLeft : screen.left, 10);
            dualScreenTop = parseInt(window.screenTop !== undefined ? window.screenTop : screen.top, 10);
            windowWidth = parseInt(window.innerWidth || document.documentElement.clientWidth || screen.width, 10);
            windowHeight = parseInt(window.innerHeight || document.documentElement.clientHeight || screen.height, 10);
            top = void 0;
            left = void 0;
            _context.t0 = position;
            _context.next = _context.t0 === 'bottom-right' ? 10 : _context.t0 === 'center' ? 13 : 13;
            break;

          case 10:
            top = parseInt(windowHeight - height + dualScreenTop, 10);
            left = parseInt(windowWidth - width + dualScreenLeft, 10);
            return _context.abrupt('break', 16);

          case 13:
            top = parseInt(windowHeight / 2 - height / 2 + dualScreenTop, 10);
            left = parseInt(windowWidth / 2 - width / 2 + dualScreenLeft, 10);
            return _context.abrupt('break', 16);

          case 16:

            if (!isMac) {
              width += 16;
              height += 16;
            }

            if (!useChromeWindowAPI) {
              _context.next = 19;
              break;
            }

            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              try {
                chrome.windows.create({
                  url: url,
                  type: type,
                  focused: focused,
                  width: width,
                  height: height,
                  top: top,
                  left: left
                }, function (wind) {
                  resolve(wind);
                });
              } catch (error) {
                reject(error);
              }
            }));

          case 19:
            newWindow = window.open(url, title, 'scrollbars=yes, resizable=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);


            if (window.focus) {
              newWindow.focus();
            }
            return _context.abrupt('return', newWindow);

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function createWindow(_x) {
    return _ref.apply(this, arguments);
  }

  return createWindow;
}();

/***/ }),

/***/ 2660:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 2661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global chrome */

var MeetingServerRunner = function () {
  function MeetingServerRunner(_ref) {
    var server = _ref.server;
    (0, _classCallCheck3.default)(this, MeetingServerRunner);

    this._server = server;
    this._addServerListener();
  }

  (0, _createClass3.default)(MeetingServerRunner, [{
    key: '_addServerListener',
    value: function _addServerListener() {
      var _this = this;

      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        var isAddMeeting = request && request.type === 'addMeeting';
        if (isAddMeeting && request.scheduleData) {
          _this._server.meeting.schedule(request.scheduleData).then(function (scheduleResponse) {
            sendResponse(scheduleResponse.meeting);
          });
        }
        return true;
      });
    }
  }, {
    key: '_addMeeting',
    value: function _addMeeting(tab, scheduleData) {
      var data = {
        type: 'addMeeting',
        scheduleData: scheduleData
      };
      chrome.tabs.sendMessage(tab.id, data, function (response) {
        // response
      });
    }
  }]);
  return MeetingServerRunner;
}();

exports.default = MeetingServerRunner;

/***/ }),

/***/ 2662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _I18n = __webpack_require__(22);

var _I18n2 = _interopRequireDefault(_I18n);

var _loadLocale = __webpack_require__(2663);

var _loadLocale2 = _interopRequireDefault(_loadLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _I18n2.default(_loadLocale2.default);

/***/ }),

/***/ 2663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

exports.default = loadLocale;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadLocale(locale) {
  return new _promise2.default(function (resolve) {
    switch (locale) {
      case 'de':

      case 'de-DE':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(8).then((function (require) {
              var data = __webpack_require__(1684);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var data = require('./de-DE');
            resolve(data.__esModule === true ? data.default : data);
          }
          break;
        }
      case 'en':

      case 'en-CA':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(1).then((function (require) {
              var data = __webpack_require__(1685);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data = require('./en-CA');
            resolve(_data.__esModule === true ? _data.default : _data);
          }
          break;
        }
      case 'en-GB':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(7).then((function (require) {
              var data = __webpack_require__(1686);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data2 = require('./en-GB');
            resolve(_data2.__esModule === true ? _data2.default : _data2);
          }
          break;
        }
      case 'en-US':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
              var data = __webpack_require__(1687);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data3 = require('./en-US');
            resolve(_data3.__esModule === true ? _data3.default : _data3);
          }
          break;
        }
      case 'es':

      case 'es-419':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(6).then((function (require) {
              var data = __webpack_require__(1688);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data4 = require('./es-419');
            resolve(_data4.__esModule === true ? _data4.default : _data4);
          }
          break;
        }
      case 'es-ES':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(5).then((function (require) {
              var data = __webpack_require__(1689);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data5 = require('./es-ES');
            resolve(_data5.__esModule === true ? _data5.default : _data5);
          }
          break;
        }
      case 'fr':

      case 'fr-CA':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(4).then((function (require) {
              var data = __webpack_require__(1690);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data6 = require('./fr-CA');
            resolve(_data6.__esModule === true ? _data6.default : _data6);
          }
          break;
        }
      case 'fr-FR':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(3).then((function (require) {
              var data = __webpack_require__(1691);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data7 = require('./fr-FR');
            resolve(_data7.__esModule === true ? _data7.default : _data7);
          }
          break;
        }
      case 'it':

      case 'it-IT':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(2).then((function (require) {
              var data = __webpack_require__(1692);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data8 = require('./it-IT');
            resolve(_data8.__esModule === true ? _data8.default : _data8);
          }
          break;
        }
      case 'ja':

      case 'ja-JP':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(10).then((function (require) {
              var data = __webpack_require__(1693);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data9 = require('./ja-JP');
            resolve(_data9.__esModule === true ? _data9.default : _data9);
          }
          break;
        }
      case 'pt':

      case 'pt-BR':
        {
          if (true) {
            __webpack_require__.e/* require.ensure */(9).then((function (require) {
              var data = __webpack_require__(1694);
              resolve(data.__esModule === true ? data.default : data);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } else {
            var _data10 = require('./pt-BR');
            resolve(_data10.__esModule === true ? _data10.default : _data10);
          }
          break;
        }
      default:
        resolve({});
        break;
    }
  });
}

/***/ })

},[2652]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9wcm94eS9nZXRQcm94eVNlcnZlci5qcyIsIndlYnBhY2s6Ly8vbGliL3Byb3h5L2dldFByb3h5U2VydmVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvYW5zd2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvcmVqZWN0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NyZWF0ZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvbm90aWZpY2F0aW9uSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9NZWV0aW5nSGVscGVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pMThuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyL2kxOG4vbG9hZExvY2FsZS5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJydW5uZXIiLCJzZXJ2ZXIiLCJfc2VydmVyIiwiUHJveHlTZXJ2ZXIiLCJFeHRlbnNpb25TZXJ2ZXJSdW5uZXIiLCJfb25TdGF0ZUNoYW5nZSIsInRhcmdldCIsIl90YXJnZXQiLCJjaHJvbWVBZGFwdGVyIiwiY2xpY2tUb0RpYWwiLCJfY2xpY2tUb0RpYWwiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJzZXQiLCJfYzJkUGVybWlzc2lvbiIsImMyZFBlcm1pc3Npb24iLCJfYzJzbXNQZXJtaXNzaW9uIiwiYzJzbXNQZXJtaXNzaW9uIiwid2VicGhvbmUiLCJyaW5nU2Vzc2lvbiIsInJpbmdTZXNzaW9uSWQiLCJzZXNzaW9uSWQiLCJfY3JlYXRlTm90aWZpY2F0aW9uIiwiX25vdGlmaWNhdGlvbklkU2V0Iiwic2l6ZSIsInJpbmdTZXNzaW9ucyIsInNlc3Npb25zIiwiZm9yRWFjaCIsInNlc3Npb24iLCJjYWxsU3RhdHVzIiwiZGlyZWN0aW9uIiwiYWRkIiwiaWQiLCJub3RpZmljYXRpb25JZEFyciIsImZpbHRlciIsImhhcyIsIm5vdGlmaWNhdGlvbklkIiwibm90aWZpY2F0aW9ucyIsImNsZWFyIiwiZGVsZXRlIiwiX29uV2luZG93UmVtb3ZlZCIsIl9jbGllbnRXaW5kb3ciLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfdHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiX3N0b3JlIiwicmVkdWNlciIsInNldFN0b3JlIiwicmVhZHlTdGF0ZSIsIl9yZW5kZXJBcHAiLCJmbiIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYnJvd3NlckFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwiX29uQnJvd3NlckFjdGlvbiIsInRhYiIsInN1YnNjcmliZSIsIl9pbmplY3RDb250ZW50IiwiX21lZXRpbmciLCJ3aW5kb3dJZCIsInJlc29sdmUiLCJ3aW5kb3dzIiwiZ2V0IiwidHlwZSIsIldpbmRvd1R5cGUiLCJQT1BVUCIsInRhYnMiLCJxdWVyeSIsImRpc2NhcmRlZCIsIl9pc0luUG9wVXBXaW5kb3ciLCJpblBvcFVwV2luZG93IiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJjaGFuZ2VzIiwibmFtZXNwYWNlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjMmQiLCJuZXdWYWx1ZSIsInJlbW92ZSIsIm51bWJlciIsImluamVjdGVkQXBwIiwiX3Nob3dDbGllbnRXaW5kb3ciLCJyb3V0ZXJJbnRlcmFjdGlvbiIsImhpc3RvcnkiLCJwdXNoIiwiZGlhbGVyVUkiLCJjYWxsIiwicGhvbmVOdW1iZXIiLCJjMnNtcyIsImNvbXBvc2VUZXh0IiwidHlwaW5nVG9OdW1iZXIiLCJhZGRUb051bWJlciIsIm5hbWUiLCJjbGVhblR5cGluZ1RvTnVtYmVyIiwidXBkYXRlVHlwaW5nVG9OdW1iZXIiLCJvblJlbW92ZWQiLCJfY2xpZW50V2luZG93UHJvbWlzZSIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJjb25maWciLCJicmFuZENvbmZpZyIsImFwcE5hbWUiLCJ1c2VDaHJvbWVXaW5kb3dBUEkiLCJ1cGRhdGUiLCJmb2N1c2VkIiwiX2NoZWNrVXJsIiwibWluaW1pemVkIiwiY2xvc2VkIiwic2hvd0FkYXB0ZXIiLCJjb250YWN0TWFwcGluZyIsImNvbnRhY3RNYXRjaGVyIiwiZGF0YU1hcHBpbmciLCJmcm9tTWF0Y2hlcyIsImZyb20iLCJkaXNwbGF5IiwibGVuZ3RoIiwiZ2V0U3RyaW5nIiwibG9jYWxlIiwiY3VycmVudExvY2FsZSIsIm9wdGlvbnMiLCJpY29uVXJsIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwibWVzc2FnZSIsImJ1dHRvbnMiLCJyZXF1aXJlSW50ZXJhY3Rpb24iLCJjcmVhdGUiLCJvbkJ1dHRvbkNsaWNrZWQiLCJidXR0b25JbmRleCIsImdldExhc3RGb2N1c2VkIiwic3RhdGUiLCJhY3RpdmUiLCJhbnN3ZXIiLCJyZWplY3QiLCJyb2xlc0FuZFBlcm1pc3Npb25zIiwicmluZ291dEVuYWJsZWQiLCJwZXJtaXNzaW9ucyIsIk91dGJvdW5kU01TIiwiSW50ZXJuYWxTTVMiLCJnZXRQcm94eVNlcnZlciIsIlRhcmdldCIsImFjdGlvblR5cGVzIiwiZ2V0U3RhdGUiLCJzdWJNb2R1bGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiX3JlZHVjZXIiLCJtb2R1bGVSZWR1Y2VyIiwicHJlZml4Iiwib24iLCJldmVudHMiLCJyZXF1ZXN0IiwicmVxdWVzdElkIiwicGF5bG9hZCIsImZ1bmN0aW9uUGF0aCIsImFyZ3MiLCJhY3Rpb25OdW1iZXIiLCJleGVjdXRlIiwic3luYyIsInNwbGl0Iiwic2xpY2UiLCJwYXRoVG9rZW5zIiwiZm5OYW1lIiwicG9wIiwidG9rZW4iLCJyZXN1bHQiLCJyZXNwb25zZSIsImVycm9yIiwiRXJyb3IiLCJnZXRQcm94eVNlcnZlclJlZHVjZXIiLCJlbnVtTWFwIiwidW5kZWZpbmVkIiwiaW5pdE1vZHVsZSIsImxhc3RBY3Rpb24iLCJhY3Rpb24iLCJuZXh0QWN0aW9uTnVtYmVyIiwicG9zaXRpb24iLCJpc01hYyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJkdWFsU2NyZWVuTGVmdCIsInBhcnNlSW50Iiwic2NyZWVuTGVmdCIsInNjcmVlbiIsImxlZnQiLCJkdWFsU2NyZWVuVG9wIiwic2NyZWVuVG9wIiwidG9wIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmQiLCJuZXdXaW5kb3ciLCJvcGVuIiwiZm9jdXMiLCJjcmVhdGVXaW5kb3ciLCJNZWV0aW5nU2VydmVyUnVubmVyIiwiX2FkZFNlcnZlckxpc3RlbmVyIiwib25NZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiaXNBZGRNZWV0aW5nIiwic2NoZWR1bGVEYXRhIiwibWVldGluZyIsInNjaGVkdWxlIiwidGhlbiIsInNjaGVkdWxlUmVzcG9uc2UiLCJkYXRhIiwic2VuZE1lc3NhZ2UiLCJsb2FkTG9jYWxlIiwicmVxdWlyZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsTUFBUCxHQUFnQixxQ0FBaEI7QUFDQUQsT0FBT0UsTUFBUCxHQUFnQkYsT0FBT0MsTUFBUCxDQUFjRSxPQUE5QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7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QUFLLElBQUw7O0FBRUUsV0FBSyxPQUFMO0FBQWM7QUFDWixjQUFJLElBQUosRUFBMEM7QUFDeENHLFlBQUEsb0RBQTRCLFVBQUNBLE9BQUQsRUFBYTtBQUN6QyxrQkFBTUgsT0FBTyxtQkFBQUcsQ0FBUSxJQUFSLENBQWI7QUFDQS9KLHNCQUFRNEosS0FBS0ksVUFBTCxLQUFvQixJQUFwQixHQUEyQkosS0FBS0ssT0FBaEMsR0FBMENMLElBQWxEO0FBQ0MsYUFIRDtBQUlELFdBTEQsTUFLTztBQUNMLGdCQUFNQSxTQUFPRyxRQUFRLFNBQVIsQ0FBYjtBQUNBL0osb0JBQVE0SixPQUFLSSxVQUFMLEtBQW9CLElBQXBCLEdBQTJCSixPQUFLSyxPQUFoQyxHQUEwQ0wsTUFBbEQ7QUFDRDtBQUNEO0FBQ0Q7QUFDSCxXQUFLLElBQUw7O0FBRUUsV0FBSyxPQUFMO0FBQWM7QUFDWixjQUFJLElBQUosRUFBMEM7QUFDeENHLFlBQUEsbURBQTRCLFVBQUNBLE9BQUQsRUFBYTtBQUN6QyxrQkFBTUgsT0FBTyxtQkFBQUcsQ0FBUSxJQUFSLENBQWI7QUFDQS9KLHNCQUFRNEosS0FBS0ksVUFBTCxLQUFvQixJQUFwQixHQUEyQkosS0FBS0ssT0FBaEMsR0FBMENMLElBQWxEO0FBQ0MsYUFIRDtBQUlELFdBTEQsTUFLTztBQUNMLGdCQUFNQSxVQUFPRyxRQUFRLFNBQVIsQ0FBYjtBQUNBL0osb0JBQVE0SixRQUFLSSxVQUFMLEtBQW9CLElBQXBCLEdBQTJCSixRQUFLSyxPQUFoQyxHQUEwQ0wsT0FBbEQ7QUFDRDtBQUNEO0FBQ0Q7QUFDRDtBQUNFNUosZ0JBQVEsRUFBUjtBQUNBO0FBckpKO0FBdUpELEdBeEpNLENBQVA7QUF5SkQsQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dGVuc2lvblNlcnZlclJ1bm5lciBmcm9tICcuLi9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyJztcclxuXHJcbmdsb2JhbC5ydW5uZXIgPSBuZXcgRXh0ZW5zaW9uU2VydmVyUnVubmVyKCk7XHJcbmdsb2JhbC5zZXJ2ZXIgPSBnbG9iYWwucnVubmVyLl9zZXJ2ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leHRlbnNpb24vYmFja2dyb3VuZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFIgZnJvbSAncmFtZGEnO1xyXG5pbXBvcnQgeyBTZXJ2ZXJUcmFuc3BvcnQgfSBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvQ2hyb21lVHJhbnNwb3J0JztcclxuaW1wb3J0IGdldFByb3h5U2VydmVyIGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9wcm94eS9nZXRQcm94eVNlcnZlcic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgQW5zd2VySWNvbiBmcm9tICchdXJsLWxvYWRlciFicmFuZC1sb2dvLXBhdGgvYW5zd2VyLnBuZyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgUmVqZWN0SWNvbiBmcm9tICchdXJsLWxvYWRlciFicmFuZC1sb2dvLXBhdGgvcmVqZWN0LnBuZyc7XHJcbmltcG9ydCBQaG9uZSBmcm9tICcuLi8uLi9tb2R1bGVzL1Bob25lJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9jb250YWluZXJzL0FwcCc7XHJcbmltcG9ydCBjcmVhdGVXaW5kb3cgZnJvbSAnLi4vY3JlYXRlV2luZG93JztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCBMb2dvIGZyb20gJ2JyYW5kLWxvZ28tcGF0aC9Mb2dvLnN2Zyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgSWNvbiBmcm9tICdicmFuZC1sb2dvLXBhdGgvSWNvbi5zdmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IGljb25VcmwgZnJvbSAnIXVybC1sb2FkZXIhYnJhbmQtbG9nby1wYXRoL25vdGlmaWNhdGlvbkljb24ucG5nJztcclxuaW1wb3J0IEJhc2VSdW5uZXIgZnJvbSAnLi4vQmFzZVJ1bm5lcic7XHJcbmltcG9ydCBNZWV0aW5nU2VydmVyUnVubmVyIGZyb20gJy4uL01lZXRpbmdIZWxwZXIvc2VydmVyJztcclxuXHJcblxyXG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xyXG5cclxuLyogZ2xvYmFsIGNvbmZpZyAqL1xyXG5cclxuY29uc3QgUHJveHlTZXJ2ZXIgPSBnZXRQcm94eVNlcnZlcihQaG9uZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnNpb25TZXJ2ZXJSdW5uZXIgZXh0ZW5kcyBCYXNlUnVubmVyIHtcclxuICBfcmVuZGVyQXBwKCkge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8QXBwXHJcbiAgICAgICAgcGhvbmU9e3RoaXMuX3NlcnZlci5fdGFyZ2V0fVxyXG4gICAgICAgIGxvZ289e0xvZ299XHJcbiAgICAgICAgaWNvbj17SWNvbn1cclxuICAgICAgLz4sXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiN2aWV3cG9ydCcpLFxyXG4gICAgKTtcclxuICB9XHJcbiAgX2luaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLl90cmFuc3BvcnQgPSBuZXcgU2VydmVyVHJhbnNwb3J0KCk7XHJcbiAgICB0aGlzLl9zZXJ2ZXIgPSBuZXcgUHJveHlTZXJ2ZXIoe1xyXG4gICAgICAuLi5jb25maWcsXHJcbiAgICAgIHRyYW5zcG9ydDogdGhpcy5fdHJhbnNwb3J0LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zdG9yZSA9IGNyZWF0ZVN0b3JlKHRoaXMuX3NlcnZlci5yZWR1Y2VyKTtcclxuICAgIHRoaXMuX3NlcnZlci5zZXRTdG9yZSh0aGlzLl9zdG9yZSk7XHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlckFwcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmbik7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyQXBwKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZm4pO1xyXG4gICAgfVxyXG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB0aGlzLl9vbkJyb3dzZXJBY3Rpb24odGFiKSk7XHJcbiAgICB0aGlzLl9ub3RpZmljYXRpb25JZFNldCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuX3N0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9vblN0YXRlQ2hhbmdlKCkpO1xyXG4gICAgdGhpcy5faW5qZWN0Q29udGVudCgpO1xyXG4gICAgdGhpcy5fbWVldGluZyA9IG5ldyBNZWV0aW5nU2VydmVyUnVubmVyKHsgc2VydmVyOiB0aGlzLl9zZXJ2ZXIuX3RhcmdldCB9KTtcclxuICB9XHJcblxyXG4gIF9pc0luUG9wVXBXaW5kb3cod2luZG93SWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjaHJvbWUud2luZG93cy5nZXQod2luZG93SWQsICh3aW5kb3cpID0+IHtcclxuICAgICAgICByZXNvbHZlKHdpbmRvdy50eXBlID09PSBjaHJvbWUud2luZG93cy5XaW5kb3dUeXBlLlBPUFVQKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9pbmplY3RDb250ZW50KCkge1xyXG4gICAgLy8gaW5qZWN0IGNvbnRlbnQgaW50byBhbGwgaHR0cC9odHRwcyB0YWJzXHJcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7XHJcbiAgICAgIGRpc2NhcmRlZDogZmFsc2UsXHJcbiAgICB9LCAodGFicykgPT4ge1xyXG4gICAgICAvLyB0YWJzIHRoYXQgZG9lc24ndCBhY2NlcHQgc2NyaXB0cyB3aWxsIHNpbXBsZSBmYWlsIHdpdGhvdXQgZWZmZWN0aW5nIGJhY2tncm91bmRcclxuICAgICAgUi5mb3JFYWNoKGFzeW5jICh0YWIpID0+IHtcclxuICAgICAgICBjb25zdCBpblBvcFVwV2luZG93ID0gYXdhaXQgdGhpcy5faXNJblBvcFVwV2luZG93KHRhYi53aW5kb3dJZCk7XHJcbiAgICAgICAgaWYgKCFpblBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xyXG4gICAgICAgICAgICBmaWxlOiAnY29udGVudC5qcycsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRhYnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9vblN0YXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fc2VydmVyLl90YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LmNocm9tZUFkYXB0ZXIuY2xpY2tUb0RpYWwgIT09IHRoaXMuX2NsaWNrVG9EaWFsKSB7XHJcbiAgICAgIHRoaXMuX2NsaWNrVG9EaWFsID0gdGFyZ2V0LmNocm9tZUFkYXB0ZXIuY2xpY2tUb0RpYWw7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgICAgY2xpY2tUb0RpYWw6ICEhKHRoaXMuX2NsaWNrVG9EaWFsKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fYzJkUGVybWlzc2lvbiAhPT0gdGhpcy5jMmRQZXJtaXNzaW9uKSB7XHJcbiAgICAgIHRoaXMuX2MyZFBlcm1pc3Npb24gPSB0aGlzLmMyZFBlcm1pc3Npb247XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgICAgYzJkUGVybWlzc2lvbjogdGhpcy5fYzJkUGVybWlzc2lvbixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fYzJzbXNQZXJtaXNzaW9uICE9PSB0aGlzLmMyc21zUGVybWlzc2lvbikge1xyXG4gICAgICB0aGlzLl9jMnNtc1Blcm1pc3Npb24gPSB0aGlzLmMyZFBlcm1pc3Npb247XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgICAgYzJzbXNQZXJtaXNzaW9uOiB0aGlzLl9jMnNtc1Blcm1pc3Npb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldC53ZWJwaG9uZS5yaW5nU2Vzc2lvbiAmJiB0YXJnZXQud2VicGhvbmUucmluZ1Nlc3Npb25JZCAhPT0gdGhpcy5zZXNzaW9uSWQpIHtcclxuICAgICAgdGhpcy5zZXNzaW9uSWQgPSB0YXJnZXQud2VicGhvbmUucmluZ1Nlc3Npb25JZDtcclxuICAgICAgdGhpcy5fY3JlYXRlTm90aWZpY2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uSWRTZXQgJiYgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuc2l6ZSA+IDApIHtcclxuICAgICAgY29uc3QgcmluZ1Nlc3Npb25zID0gbmV3IFNldCgpO1xyXG4gICAgICB0YXJnZXQud2VicGhvbmUuc2Vzc2lvbnMuZm9yRWFjaCgoc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChzZXNzaW9uLmNhbGxTdGF0dXMgPT09ICd3ZWJwaG9uZS1zZXNzaW9uLWNvbm5lY3RpbmcnICYmIHNlc3Npb24uZGlyZWN0aW9uID09PSAnSW5ib3VuZCcpIHtcclxuICAgICAgICAgIHJpbmdTZXNzaW9ucy5hZGQoc2Vzc2lvbi5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uSWRBcnIgPSAoWy4uLnRoaXMuX25vdGlmaWNhdGlvbklkU2V0XS5maWx0ZXIoKG5vdGlmaWNhdGlvbklkID0+ICFyaW5nU2Vzc2lvbnMuaGFzKG5vdGlmaWNhdGlvbklkKSkpKTtcclxuICAgICAgbm90aWZpY2F0aW9uSWRBcnIuZm9yRWFjaCgobm90aWZpY2F0aW9uSWQpID0+IHtcclxuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuZGVsZXRlKG5vdGlmaWNhdGlvbklkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9vblN0b3JhZ2VDaGFuZ2UoY2hhbmdlcywgbmFtZXNwYWNlKSB7XHJcbiAgICBzdXBlci5fb25TdG9yYWdlQ2hhbmdlKGNoYW5nZXMsIG5hbWVzcGFjZSk7XHJcbiAgICBpZiAobmFtZXNwYWNlID09PSAnbG9jYWwnICYmIGNoYW5nZXM6Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2MyZCcpKSB7XHJcbiAgICAgIGNvbnN0IGMyZCA9IGNoYW5nZXMuYzJkLm5ld1ZhbHVlO1xyXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoJ2MyZCcpO1xyXG4gICAgICBpZiAoYzJkICYmIGMyZC5udW1iZXIpIHtcclxuICAgICAgICBpZiAoIWMyZC5pbmplY3RlZEFwcCkge1xyXG4gICAgICAgICAgdGhpcy5fc2hvd0NsaWVudFdpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5yb3V0ZXJJbnRlcmFjdGlvbi5oaXN0b3J5LnB1c2goJy9kaWFsZXInKTtcclxuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5kaWFsZXJVSS5jYWxsKHsgcGhvbmVOdW1iZXI6IGMyZC5udW1iZXIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuYW1lc3BhY2UgPT09ICdsb2NhbCcgJiYgY2hhbmdlczo6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYzJzbXMnKSkge1xyXG4gICAgICBjb25zdCBjMnNtcyA9IGNoYW5nZXMuYzJzbXMubmV3VmFsdWU7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgnYzJzbXMnKTtcclxuICAgICAgaWYgKGMyc21zICYmIGMyc21zLm51bWJlcikge1xyXG4gICAgICAgIGlmICghYzJzbXMuaW5qZWN0ZWRBcHApIHtcclxuICAgICAgICAgIHRoaXMuX3Nob3dDbGllbnRXaW5kb3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQucm91dGVySW50ZXJhY3Rpb24uaGlzdG9yeS5wdXNoKCcvY29tcG9zZVRleHQnKTtcclxuICAgICAgICBpZiAodGhpcy5fc2VydmVyLl90YXJnZXQuY29tcG9zZVRleHQudHlwaW5nVG9OdW1iZXIpIHtcclxuICAgICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNvbXBvc2VUZXh0LmFkZFRvTnVtYmVyKHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNvbXBvc2VUZXh0LnR5cGluZ1RvTnVtYmVyLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jb21wb3NlVGV4dC50eXBpbmdUb051bWJlcixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY29tcG9zZVRleHQuY2xlYW5UeXBpbmdUb051bWJlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jb21wb3NlVGV4dC51cGRhdGVUeXBpbmdUb051bWJlcihjMnNtcy5udW1iZXIpO1xyXG4gICAgICAgIC8vIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNvbnRhY3RTZWFyY2guc2VhcmNoKHsgc2VhcmNoU3RyaW5nOiBjMnNtcy5udW1iZXIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjMmRQZXJtaXNzaW9uKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5fc2VydmVyLl90YXJnZXQucm9sZXNBbmRQZXJtaXNzaW9ucy5yaW5nb3V0RW5hYmxlZDtcclxuICB9XHJcblxyXG4gIGdldCBjMnNtc1Blcm1pc3Npb24oKSB7XHJcbiAgICByZXR1cm4gISEoXHJcbiAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LnJvbGVzQW5kUGVybWlzc2lvbnMucGVybWlzc2lvbnMuT3V0Ym91bmRTTVMgfHxcclxuICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQucm9sZXNBbmRQZXJtaXNzaW9ucy5wZXJtaXNzaW9ucy5JbnRlcm5hbFNNU1xyXG4gICAgKTtcclxuICB9XHJcbiAgX29uV2luZG93UmVtb3ZlZCA9IChpZCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX2NsaWVudFdpbmRvdyAmJiB0aGlzLl9jbGllbnRXaW5kb3cuaWQgPT09IGlkKSB7XHJcbiAgICAgIHRoaXMuX2NsaWVudFdpbmRvdyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIF9zaG93Q2xpZW50V2luZG93KCkge1xyXG4gICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKHRoaXMuX29uV2luZG93UmVtb3ZlZCk7XHJcbiAgICBpZiAoIXRoaXMuX2NsaWVudFdpbmRvdykge1xyXG4gICAgICBpZiAoIXRoaXMuX2NsaWVudFdpbmRvd1Byb21pc2UpIHtcclxuICAgICAgICB0aGlzLl9jbGllbnRXaW5kb3dQcm9taXNlID0gY3JlYXRlV2luZG93KHtcclxuICAgICAgICAgIHVybDogJy4vY2xpZW50Lmh0bWwnLFxyXG4gICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgIGhlaWdodDogNTQwLFxyXG4gICAgICAgICAgdGl0bGU6IGNvbmZpZy5icmFuZENvbmZpZy5hcHBOYW1lLFxyXG4gICAgICAgICAgdXNlQ2hyb21lV2luZG93QVBJOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudFdpbmRvdyA9IGF3YWl0IHRoaXMuX2NsaWVudFdpbmRvd1Byb21pc2U7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50V2luZG93UHJvbWlzZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh0aGlzLl9jbGllbnRXaW5kb3cuaWQsIHtcclxuICAgICAgICBmb2N1c2VkOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgX29uQnJvd3NlckFjdGlvbih0YWIpIHtcclxuICAgIGlmICh0YWIgJiYgdGhpcy5fY2hlY2tVcmwodGFiLnVybCkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNocm9tZUFkYXB0ZXIubWluaW1pemVkIHx8XHJcbiAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5jbG9zZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5zaG93QWRhcHRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zaG93Q2xpZW50V2luZG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9jcmVhdGVOb3RpZmljYXRpb24oKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9zZXJ2ZXIuX3RhcmdldDtcclxuICAgIGNvbnN0IGNvbnRhY3RNYXBwaW5nID0gdGFyZ2V0LmNvbnRhY3RNYXRjaGVyICYmIHRhcmdldC5jb250YWN0TWF0Y2hlci5kYXRhTWFwcGluZztcclxuICAgIGNvbnN0IGZyb21NYXRjaGVzID0gKGNvbnRhY3RNYXBwaW5nICYmIGNvbnRhY3RNYXBwaW5nW3RhcmdldC53ZWJwaG9uZS5yaW5nU2Vzc2lvbi5mcm9tXSkgfHwgW107XHJcbiAgICBsZXQgZGlzcGxheTtcclxuICAgIGlmIChmcm9tTWF0Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZGlzcGxheSA9IGAke2kxOG4uZ2V0U3RyaW5nKCdpbmNvbWluZ0NhbGwnLCB0YXJnZXQubG9jYWxlLmN1cnJlbnRMb2NhbGUpfSAke2Zyb21NYXRjaGVzWzBdLm5hbWV9XFxuJHt0YXJnZXQud2VicGhvbmUucmluZ1Nlc3Npb24uZnJvbX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGxheSA9IGAke2kxOG4uZ2V0U3RyaW5nKCdpbmNvbWluZ0NhbGwnLCB0YXJnZXQubG9jYWxlLmN1cnJlbnRMb2NhbGUpfSAke3RhcmdldC53ZWJwaG9uZS5yaW5nU2Vzc2lvbi5mcm9tfWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICBpY29uVXJsLFxyXG4gICAgICB0aXRsZTogY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5uYW1lLFxyXG4gICAgICBtZXNzYWdlOiBkaXNwbGF5LFxyXG4gICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgIHRpdGxlOiBpMThuLmdldFN0cmluZygnYW5zd2VyJywgdGFyZ2V0LmxvY2FsZS5jdXJyZW50TG9jYWxlKSxcclxuICAgICAgICBpY29uVXJsOiBBbnN3ZXJJY29uXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogaTE4bi5nZXRTdHJpbmcoJ2lnbm9yZScsIHRhcmdldC5sb2NhbGUuY3VycmVudExvY2FsZSksXHJcbiAgICAgICAgaWNvblVybDogUmVqZWN0SWNvblxyXG4gICAgICB9XSxcclxuICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuYWRkKHRoaXMuc2Vzc2lvbklkKTtcclxuICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZSh0aGlzLnNlc3Npb25JZCwgb3B0aW9ucyk7XHJcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5vbkJ1dHRvbkNsaWNrZWQuYWRkTGlzdGVuZXIoKFxyXG4gICAgICBub3RpZmljYXRpb25JZCwgYnV0dG9uSW5kZXhcclxuICAgICkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uSWRTZXQuaGFzKG5vdGlmaWNhdGlvbklkKSkge1xyXG4gICAgICAgIGlmIChidXR0b25JbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgY2hyb21lLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoe30sICh3aW5kb3cpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuZm9jdXNlZCA9PT0gdHJ1ZSAmJiB3aW5kb3cuc3RhdGUgIT09ICdtaW5pbWl6ZWQnKSB7XHJcbiAgICAgICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLCB3aW5kb3dJZDogd2luZG93LmlkXHJcbiAgICAgICAgICAgICAgfSwgKHRhYnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uQnJvd3NlckFjdGlvbih0YWJzWzBdKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLl9zaG93Q2xpZW50V2luZG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGFyZ2V0LndlYnBob25lLmFuc3dlcihub3RpZmljYXRpb25JZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhcmdldC53ZWJwaG9uZS5yZWplY3Qobm90aWZpY2F0aW9uSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkKTtcclxuICAgICAgICAgIHRoaXMuX25vdGlmaWNhdGlvbklkU2V0LmRlbGV0ZShub3RpZmljYXRpb25JZCk7XHJcbiAgICAgICAgICAvLyB0aGlzLm5vdGlmaWNhdGlvbklkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lci9pbmRleC5qcyIsImltcG9ydCBSY01vZHVsZSBmcm9tICcuLi9SY01vZHVsZSc7XHJcbmltcG9ydCBiYXNlQWN0aW9uVHlwZXMgZnJvbSAnLi9iYXNlQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyIGZyb20gJy4vZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyJztcclxuaW1wb3J0IGVuc3VyZUV4aXN0IGZyb20gJy4uL2Vuc3VyZUV4aXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByb3h5U2VydmVyKFRhcmdldCkge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJjTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgdHJhbnNwb3J0LCAuLi5vcHRpb25zIH0pIHtcclxuICAgICAgc3VwZXIoe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgYWN0aW9uVHlwZXM6IGJhc2VBY3Rpb25UeXBlcyxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX3RhcmdldCA9IG5ldyBUYXJnZXQoe1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgZ2V0U3RhdGU6ICgpID0+IHRoaXMuc3RhdGUudGFyZ2V0LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgc3ViTW9kdWxlIGluIHRoaXMuX3RhcmdldCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuX3RhcmdldDo6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzdWJNb2R1bGUpICYmXHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldFtzdWJNb2R1bGVdIGluc3RhbmNlb2YgUmNNb2R1bGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBzdWJNb2R1bGUsIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRbc3ViTW9kdWxlXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdHJhbnNwb3J0ID0gdGhpczo6ZW5zdXJlRXhpc3QodHJhbnNwb3J0LCAndHJhbnNwb3J0Jyk7XHJcbiAgICAgIHRoaXMuX3JlZHVjZXIgPSBnZXRQcm94eVNlcnZlclJlZHVjZXIoe1xyXG4gICAgICAgIG1vZHVsZVJlZHVjZXI6IHRoaXMuX3RhcmdldC5yZWR1Y2VyLFxyXG4gICAgICAgIHRyYW5zcG9ydCxcclxuICAgICAgICBwcmVmaXg6IHRoaXMucHJlZml4LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyYW5zcG9ydC5vbihcclxuICAgICAgICB0cmFuc3BvcnQuZXZlbnRzLnJlcXVlc3QsXHJcbiAgICAgICAgYXN5bmMgKHtcclxuICAgICAgICAgIHJlcXVlc3RJZCxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgZnVuY3Rpb25QYXRoLFxyXG4gICAgICAgICAgICBhcmdzLFxyXG4gICAgICAgICAgICBhY3Rpb25OdW1iZXJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5hY3Rpb25UeXBlcy5leGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgWy4uLnBhdGhUb2tlbnNdID0gZnVuY3Rpb25QYXRoLnNwbGl0KCcuJykuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZm5OYW1lID0gcGF0aFRva2Vucy5wb3AoKTtcclxuICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0O1xyXG4gICAgICAgICAgICAgIHBhdGhUb2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFt0b2tlbl07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRhcmdldFtmbk5hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuYWN0aW9uVHlwZXMuc3luYzoge1xyXG4gICAgICAgICAgICAgIGlmIChhY3Rpb25OdW1iZXIgIT09IHRoaXMuc3RhdGUuYWN0aW9uTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQucmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdDogdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQucmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBuZXcgRXJyb3IoJ1N0YXRlIGlzIGFscmVhZHkgdXAgdG8gZGF0ZS4nKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHRyYW5zcG9ydC5yZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKGBJbnZhbGlkIHJlcXVlc3QgdHlwZSAnJHt0eXBlfScuYClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9wcm94eS9nZXRQcm94eVNlcnZlci5qcyIsImltcG9ydCB7IHByZWZpeEVudW0gfSBmcm9tICcuLi9FbnVtJztcclxuaW1wb3J0IGJhc2VBY3Rpb25UeXBlcyBmcm9tICcuL2Jhc2VBY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm94eVNlcnZlclJlZHVjZXIoeyBtb2R1bGVSZWR1Y2VyLCB0cmFuc3BvcnQsIHByZWZpeCB9KSB7XHJcbiAgY29uc3QgYWN0aW9uVHlwZXMgPSBwcmVmaXhFbnVtKHsgZW51bU1hcDogYmFzZUFjdGlvblR5cGVzLCBwcmVmaXggfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICB0YXJnZXQ6IG1vZHVsZVJlZHVjZXIodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaW5pdE1vZHVsZSxcclxuICAgICAgfSksXHJcbiAgICAgIGxhc3RBY3Rpb246IG51bGwsXHJcbiAgICAgIGFjdGlvbk51bWJlcjogLTEsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uLFxyXG4gICkgPT4ge1xyXG4gICAgaWYgKCFhY3Rpb24pIHJldHVybiBzdGF0ZTtcclxuICAgIGNvbnN0IG5leHRBY3Rpb25OdW1iZXIgPSBzdGF0ZS5hY3Rpb25OdW1iZXIgKyAxO1xyXG4gICAgdHJhbnNwb3J0LnB1c2goe1xyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWN0aW9uLFxyXG4gICAgICAgIGFjdGlvbixcclxuICAgICAgICBhY3Rpb25OdW1iZXI6IG5leHRBY3Rpb25OdW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRhcmdldDogbW9kdWxlUmVkdWNlcihzdGF0ZS50YXJnZXQsIGFjdGlvbiksXHJcbiAgICAgIGxhc3RBY3Rpb246IGFjdGlvbixcclxuICAgICAgYWN0aW9uTnVtYmVyOiBuZXh0QWN0aW9uTnVtYmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcHJveHkvZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQllBQUFBV0NBWUFBQURFdEd3N0FBQUJiVWxFUVZSNDJtTmd3QUV5TDFVSVpsMHRTTWk4WExBKzgxTEJ6Y3pMK1ovQkdNd3VXQStXQTZwaElCWTAzRy9nQUdxc3pMaFU4Q0hqVXY1Ly9MamdBMGd0U0E5ZVF3dHZGa3BuWEM0NFRkaEFOQXpVQTlLTDI5QkxCVTlJTmhUaCtpY1lob084UXBaTHNiZ2NKVmdnWVVxaG9WQU1NZ3NlKzdnaXF2MTI3Ly9ybjIvK24vZG9FU2xCOGdHY1drREpCcGVpSjkrZi9nZUJyMysrL2krK1drVzA0U0F6UWNHd0hwZUNOei9mL29lQjNhLzJrUkljNnhsQUNSNlhnbFB2ejRBTi9RSjA4YVI3MDRrM0dHZ21BeWczNFZMUWQzY3kyT0NIM3g2VEdJSDVuL0VhRE1KbjNwOERHNzdnMFZJU0RjWVRGQ0FNaXJRUHZ6NysvL1B2ei8rVlQ5ZitQL2J1eFAvSDM1NzhyN3hlVHlnb2NFY2VETGZlNnZyLzdjLzMvOGpnN2M5My8ydHVOT0hJS1BucjhDWTNkTU9SVXdrSUxIK3lHazl5dzVOQjBISEJsYkwvbTE1cyszL255NzMvKzE4ZitwOTFxUkIzQnFGWmxxWnBJVVN6WXBPbUJUMU5xeVpxVnFZQUoyWldIbHc4elN3QUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3VybC1sb2FkZXIhLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvYW5zd2VyLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjY1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQllBQUFBV0NBWUFBQURFdEd3N0FBQUJMa2xFUVZSNDJyV1Z6MHJEUUJDSGZ4UkY5TkJyRWFFK2dONDhsRko4QXQvRG0yQkpRa1F2d2Jmb1F5UnBUT25WbS9oT1BkVDlWaENEK2JPcjdzQkMySjM1c2p2em0xMnB5MjVYaDdyUFR4VnZMaFd2WjByVzEzYnd6UnhyK0RoYnRoOHB5cytWVkF1bEx4ZDZyQ2JLNmhObHJ3ZWZ3M3d6eHhvKytCTFRhM2ZiSXoxc3J1eU9sbS9IZzV2QUIxOWlpTzJFeHNWY2FUMlZyeEZEN0E4NFIrR3Z2NEYraDhOb3BJVThjYVMvR2d4WVg5V25DQzQ1ZGNrNUxLc1daRU9GZmV5cFBsTzJIYmVueExCZzJ1MGpIK2ZqVmplS3lwM2k4cjExSFpaTks0SkhtejdRcU5nYkZTVHRmV0JZTUcwM0lYd3ZhUG5jM1dDR0JkTUo3QXB0Z0lkUzRRTnRwS0t2ZUZUZkI5b29YcC9ja0JUVjd5cFVyOXlDTlVpd2xnNTZDUVc3Tm9OZTlFR2Zwbjk4VEQ4QWRzSGwxU3NsYUtZQUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3VybC1sb2FkZXIhLi9zcmMvZ2V0QnJhbmRDb25maWcvcmMvcmVqZWN0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMjY1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiLy8gVE9ETzogcmVmYWN0b3JcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZG93KHtcclxuICB1cmwsXHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIHRpdGxlLFxyXG4gIHR5cGUgPSAncG9wdXAnLFxyXG4gIHBvc2l0aW9uID0gJ2NlbnRlcicsXHJcbiAgZm9jdXNlZCA9IHRydWUsXHJcbiAgdXNlQ2hyb21lV2luZG93QVBJID0gdHJ1ZSxcclxufSkge1xyXG4gIGNvbnN0IGlzTWFjID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNYWNpbnRvc2gnKSA+IC0xIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTWFjIE9TIFgnKSA+IC0xO1xyXG5cclxuICBjb25zdCBkdWFsU2NyZWVuTGVmdCA9IHBhcnNlSW50KFxyXG4gICAgd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgIHdpbmRvdy5zY3JlZW5MZWZ0IDpcclxuICAgICAgc2NyZWVuLmxlZnQsXHJcbiAgICAxMCxcclxuICApO1xyXG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSBwYXJzZUludChcclxuICAgIHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgIHdpbmRvdy5zY3JlZW5Ub3AgOlxyXG4gICAgICBzY3JlZW4udG9wLFxyXG4gICAgMTAsXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgd2luZG93V2lkdGggPSBwYXJzZUludChcclxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBzY3JlZW4ud2lkdGgsXHJcbiAgICAxMCxcclxuICApO1xyXG4gIGNvbnN0IHdpbmRvd0hlaWdodCA9IHBhcnNlSW50KFxyXG4gICAgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgc2NyZWVuLmhlaWdodCxcclxuICAgIDEwLFxyXG4gICk7XHJcblxyXG4gIGxldCB0b3A7XHJcbiAgbGV0IGxlZnQ7XHJcbiAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuICAgICAgdG9wID0gcGFyc2VJbnQod2luZG93SGVpZ2h0IC0gaGVpZ2h0ICsgZHVhbFNjcmVlblRvcCwgMTApO1xyXG4gICAgICBsZWZ0ID0gcGFyc2VJbnQod2luZG93V2lkdGggLSB3aWR0aCArIGR1YWxTY3JlZW5MZWZ0LCAxMCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnY2VudGVyJzpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRvcCA9IHBhcnNlSW50KCgod2luZG93SGVpZ2h0IC8gMikgLSAoaGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcCwgMTApO1xyXG4gICAgICBsZWZ0ID0gcGFyc2VJbnQoKCh3aW5kb3dXaWR0aCAvIDIpIC0gKHdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQsIDEwKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzTWFjKSB7XHJcbiAgICB3aWR0aCArPSAxNjtcclxuICAgIGhlaWdodCArPSAxNjtcclxuICB9XHJcbiAgaWYgKHVzZUNocm9tZVdpbmRvd0FQSSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjaHJvbWUud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgdHlwZSxcclxuICAgICAgICAgIGZvY3VzZWQsXHJcbiAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgIHRvcCxcclxuICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgfSwgKHdpbmQpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUod2luZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKFxyXG4gICAgdXJsLFxyXG4gICAgdGl0bGUsXHJcbiAgICBgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT1ubywgd2lkdGg9JHt3aWR0aH0sIGhlaWdodD0ke2hlaWdodH0sIHRvcD0ke3RvcH0sIGxlZnQ9JHtsZWZ0fWAsXHJcbiAgKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5mb2N1cykge1xyXG4gICAgbmV3V2luZG93LmZvY3VzKCk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdXaW5kb3c7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9jcmVhdGVXaW5kb3cuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGQUFBQUJRQ0FZQUFBQ09FZkt0QUFBTU5FbEVRVlI0MnUxY0NYQlVWUmJ0UUl5SU9vSWpPaElHQWlJdzdwWWJvQUtpb3pORHFUT09zMVNOVG8wMWlwWXdNQ3BTYnREcGROSy9RWFlTRWtBMFFCQ0VFSkFsaEhRV3lBS0VrQ1lKQ1dRaFpDRmtreVZrSTJFN2MrOU5kOUtSakpLa083OVQ5VS9WcTkvOXQzN3Z2UHZ1OHQ1OXJkTnAwS0JCZ3dZTkdqUm8wS0JCUTQ4RjV1dEd3S3liU2NWQ0paZEtMUlc0U2FtMTFja2lkYVM2dWc5eDgzU1BVYVZpM1lpczZ5MnhYSGYxaUl2WGVWSWxBakZIZDdVSGt0ZGNtdXNleUczcFh2S1c2ZnJUajhmMVdPS3VKVEtPMjlSOWt1ZEM4aHJNTjZMY2ZEdnlsRUU0b2d5VHdwL0x6YitVYXk0bHNUc2tVVVRlaVJXdklMSzJLVS9qWS8vSm1PZzNCejYrb2JoRkh3RlAvVTU0K082VzRxbVBsSE5EZkZkamdtRXVQdkovRDF0Tno2Q01TSFV5a1lHdU54aE8wSG1ONWh1d1hSbUx2eGhub1o4K0hEcS9CQXhZbElaeGE3TXdlV2MrQXBLS3NUeXRER0daRlFnN1VvRVYxaktZa2tyd2J1UnhUQWpMeHAyTDA2QXpKdUkyL1dhOFp0UmpxL0lNTHBpOW5LTVRYV2xZdW1wdG04eWVXRzE2Q1E4YmxrUG51d2VEQTYzNElQbzQ0Z3JQNG16RFJWd3Z6bDI0aEQxRjV6RERVb0NoUVZib0RIdHh2MkVsVnBuK1FKM1RaU0pqWFVQZUhOM0lybFJzai9JSVJ2c3RwY1ltNEtsdk12QXRTZGI1eGt2b0ttcWJMbU5qZGlYR2htYlF1eFB4dU44eXhDaVBkWTFFVi9pSk5pZTVVMGJoMDRCM29OTkhZM2hRR2hGWGprdFhyc0xadUh6MXFoQTVNcGdrVW0vQlJ3SHZvODdjcDdNa3puUUZnWmFPVnFURWZDZWVOODRuSFplTWFWRjVPTk9CWWRwWlZOUHdubUU1VGpweUg4WVpGK09FK2U3T0VHaHhCWUc1SGFsRXR0a0hJLzFXNDlhNUI3QWhxd0xkamMzSEt0SHZ5eFRjWXdoRHVqSzhvd1RtdW9MQTJvNlFOOFN3SGdNWEhjUytrOVZRQzRmS3ptUHdrbFI0R3paMmxNUmFWeEI0WFQ5KzBqeEFKSS9KUzYrb2dkcklxcW9WRW9jWjFxR3dBOE5aRlFMWllEeHZuQ2ZEZHIrS2t2ZGpwSkVrOXArWGdtZElKOWFaYjNKZkFqOExlRnNNeG5mWkZYQTNiTTJwRXNQeUlWbG50eVF3VVhrSXZjbFZZV3ZycnBnWlE5WlpINFBZNi9BVHU1WEFKZ3JOMkVtK2gveThzeGN1dWkyQk5VMlhjRitJRlkvNkJmL3N4RVMzRWhobStxMUVHR3E0SzUwYXlvWWtmR1dhNUI0RThzVEF3NFlRUFBsMU9pNjZJTUp3UmNReWJrMG1SaGxXb2Y0bnBMRGJDSXhVUnN2RVFFK1F2clpTbUlBSTVWbjFDZnliOFF1WlZlR2czZzZPZFRta3FtNjh0dkFFUXVPbEsrMjM3QXJwejVwVFFKTnIvY2VHaTVjeFBQZ3dYakg2cVV0Z2xia2YrdXMzNFlQb2dqWVY1QWtENy9sN01YUng0alZsMkpKRVBMQnNIMTVjbTRhNXlZV3RSaWMzQWxnN25oNStnWTdqZ09ocHdJV3pMaVB4czdnVHVFVy9CYWZNZDZoSDRIWmxqRXlHeGhlMWJlaUh1M09obXhVRlR6K0xsTjVVZXRsS2IxdlIrVWJMUGI5ZloyMld5SUpJaXIwQ2dZTkxnV09iZ0NqeTEzWk5kaG1CN09qcmpFa0lONDFYajhDWi91L2dqa1ZwTXNIcGlFbmZXb1dnRy8xanBOeHNpa1cvT2ZHNHpSd241SG5aenZPeEQ1V3NxcnJtQjVQOWdVUWFWbHYrQ3VTRUEzVWxuU0xuQ2htS0MvOVBUVGpNSXc1Y2FzVi8vS2VvUitEemZtYVpodit4ZmhrVmxDeEVNVWtlUk9TWHlVVW9PTnVBL0RQMVdKNVdpcjRCc1VLZWx6RUd0eWl4eURsdEkvRDREbUFKQmYzWllVQjlKU0p5VG1OWjZra0VIU3pCWHBMeU9ubzNmMzV6eXhHOEVYRUVTMUpLMnVqZTBwcEdmQnlkaHlkV0hzQnZxQTUvM3BpT0k1VzFVSklLOFNiZC84Ym1UR3gwaUpKZVhIOFVUeHZtcTBNZ3IwSDQ2RU5sRGNNUlRCUkwydzNHWmluam83VzgxU2lVMXphaVAxMzNNbHJnWVlqR0l5SDdXNlhsdEJYWS9pWlFlUWcxSk5TL1hwZ2d3MXozeFM2OHVpRWR6NjArQk4zczNSUk4yTW9YVWZqM3RteDVOSk9JR3JFMFNhN3plKzNYV2UvZVBqZSsrYm5QZGlHWU9zU082YVM3QityRFVOdE9mT3h5QW5rMTdWWjloQ3dBT1NLNjRBeDZHWnFsanlYc0YwcWNTRkg0MFVwOFpTMFY0K0hwb0FmWFpwYkpjMHp5Vzl0ejhOYU9BdXdxcUViaHVRWjUxcXVsSXl6TlpOSXo5bk9lZE82dWVYdFFWSDBCVDM5OVVFaXpkOXFUSzFQd1lQQStxa3UwUTJkYWtGUnlycVd1Q3c2Y3hFMzY3MlhpdDlzSnpGZThaZW1SVjg4Y3NTU2x1S1VoOWlJUzRXdVRDbW1RQlVNWEpXSk5SdXV6bjhUa2tZUkVpcFNzeXl3WHc4VFBDVkZFdGcvZC8wMzZLUVRTRVA2RnVabFlKbVlnV2Z1NXBDTHNuY1lxNDcwZFI4V1ZZdDE4UDFsODdpeit6UUZmN3BGaGJzZWFqQXA0NktPUXJmaDBQNEZaeWxDcWJCUkpVRnNIK2wycXZDT0JMY09KaWwwdmNtUFl6VmxySTVDakE1WWd2cGVsS3Eyc1JvaXl2NGVQeXh5R0hydEJ2V3dXL2o3U2RhOTlsOTRzbVhUdlRhUmZEenVvakJmRDB1UWFFL3pJOHYyNGVMazFXdHAwbEJ4cVgvbzlaWVI3RU1oVm14Q2Eya1p5WGxoekNKL0g1bU42Vkk0MDNOTnVYT2lldTRsRWRxNTV1UFlqcVdMeVdEK3luclIzaEZqcWdGWTlXbG5YQk84RmUrVmVmc2RFMG9zVFFnL0paKzRZMW5kbHRjMVNWa1gzRGxxUUlQY3lpYTl2ekdqVDJhb1NtSzhNdW1ZSWMvVGhRMHJiVGhKWGVqUHBQanNTaXM5Skk3MXNVc2hEaW9mWk9uSzgrVjZXMEh2SkVMQmxIV2ZyQ0c0OEUvWkRmWk84SS9YVStSWVhpQW1lRW5rTUw2OC8zT0kyOFc5L0VwT1B1TUl6SXBtOWJKM0o5ODZPUDk2R3dEWFUrU3dFV1dvTTRYS2JFVEU1R0pFc3NvVHM4M25aZmJ5QXRoYVlDV1JDdUVHOWJjT1BSaS9lK2o1TEdzaUVzYVZsVW9jc1NoQXkrTnlZVlNuaTJ6SEN5T2pZeWVKblZwSmJ0SmoxTGhrWXIzWjBybDJWOFBjTldlVnRDRnhJUnFTUFdrYUUzWmdoNU1ad3VvVWRFY2NxWmYyWGxUc1QxQ3c1cmZPRHE2eW54SjNnNjl5NFZ6Y2NSdFBsS3lKMUhxU2orTnJiNUpia25xNFg4c1h5MG4zLzNOTHFhMzVLMG1WL0J4TVZjK0tNK0lkL0VtbXp0T2piSVdSMFJuK1ZJcDNRbm01ay9KZmNtTHYxNjlSeFk3ZzhaNWlEOFdHdGplUFl0aTlWbHZVWVN5SkxrMTF5cE1mM0Y3ZGVwd2F4VGtvcHJaYnY3RHZ5dFlVSGlza1ZPaTNPZG4vYnVYbjdpbHJlOGZmd1RMbkdVUTNyMEJPa1ArMDRRTzlpQ1dXMXdSMzNEbldHM1hqWlZZTWpYaUpIZW94aGdYcVJ5QXoveVpMb1UyMUwwZUJLc3lQTmplSmpSVzNUTlRrdDl1c242RmhNL2x1MXd6aytjaU5yR3E4OTV4aHR5RFhiODN6UFB5aks0T2prWDF1enhLWGhDUXFXVE5heEl1MnpvekJ0VjA2YnVyRFVlZ2RhTWNWL3Fub0VibFBHVWtDZWdMM0Y1MVNiMitQT1k0ZFo5MGxraTZQTnhMR2ZLSHFRaHZ2REZPMDQrbitNbE5MejBQa25ZYU5wZ25vRVZwcjdTNHJaakpnQ1ZTZElpNm9ieEhrZUZaZ3M1UEh3NWdpRmladHB5V3R4YXh3eGEwOGhidFp2UmFsNWdMb1RxcThiWjhNbnlDcERRbTNVVXgxS3p6ZUtYMWxPNm9NTlZIdmcySHRFeUdGTU12cXJQeVBOaVpJNjM3M2tsRmIybUNuOTdiay95SlQrSm1XQytnU3lPL09BWVFYR2hHYTRKRzNOMldDdjRMbXdUTnhyK09ZbjA5KzZkVmt6MVBRN1NXNE03d0ZTdUNPUHBNOHZDU0dtVjl4blhaaWw4SEcvSUl3TVRuTksxcW1yVUVmdTBJTXJySGpRYndYcWZ5YjVzdHRUTytLVlIrSEJtYUdXNDI1TDRPZnhCZVJZeHlKS2VkSTlrNHRtQkx3bkNUeGJqbFc1SFhrNzgzK0FoLzgrVEEyWTVyN1pXYXlVeHhrWFNXWW9KemU2Q3pJcmFqRmdmZ3FlTWdhaHh0elhmUW5rVW1UK2xhVFZEbDZjS3NtTmFvTW5KdTRKUElUQmh2WElOM3VybW1CNTNTbStHY3B3U2F0bEV0V1V4SXlLR2lJdkZYZjVia2FxTXFvakcyNXFWRTh5NTV6a1lTU0puQm1xaGs1a2QrVU9HcllzZVIwaXo0Vko1aDNlNXNCYkRKNDFMaGJEd3NtTjNlSGk4TXpONTNGa2JjbGdqQ2FkbDJjZTVEYmJIRHExMFlZbkt6OEltQ0tab1p6Y3lITjFqbk9FemdLL2NWdE9GUjVhWVJWWFpXckFkSnczMyt4R0cyMjZ1TlVyV25rQ2ovcUZTSElqNStkRjBMQ3VkOElFUk1PbEsvaWVpSnU0TmxNaURIYVNkeXFqM1crcmx6TTJHM0phN1FyVHk1TGN5TUg4OEdBclBvMDdnZVNTYXBsRTdjZ3c1ZVNnV2ZHRkdCbHlXTjdGc2UweTB4KzdzcjNMdFpzTm5ibmRsY09vY0dVOFhqRWFKY1dNSnphOWwxb2xWMlg2N2dMTVAzQlNGcjE1MlRHY0NuL21MQUpldytCcCtFR0JWbm1tcjM0ckpoa0Q4SjFwWXJ2ckdtNjMzZFVWRzY1NVl3N1BDay8xbjRxeGhnV1NxOElyWmJ6Y3lHdTJYUGh6SC8wMldRQWFZMWlJOS8ybllRT1IxdDVxbWx0dnVCWUNYYnpsbnlPRkV1Vk9XYmpuQlc4dS9MbllmTmQxUnhGdXZlVmZTTlQrZE1KSmtxajk3WW1UREl2Mnh6dE84eE43eGw4L1VWMTFHalJvMEtCQmd3WU5HalJvME5CajhUL3dmc3M4MlJoNzVnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91cmwtbG9hZGVyIS4vc3JjL2dldEJyYW5kQ29uZmlnL3JjL25vdGlmaWNhdGlvbkljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSAyNjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCIvKiBnbG9iYWwgY2hyb21lICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZXRpbmdTZXJ2ZXJSdW5uZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgc2VydmVyIH0pIHtcbiAgICB0aGlzLl9zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5fYWRkU2VydmVyTGlzdGVuZXIoKTtcbiAgfVxuXG4gIF9hZGRTZXJ2ZXJMaXN0ZW5lcigpIHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBpc0FkZE1lZXRpbmcgPSByZXF1ZXN0ICYmIHJlcXVlc3QudHlwZSA9PT0gJ2FkZE1lZXRpbmcnO1xuICAgICAgaWYgKGlzQWRkTWVldGluZyAmJiByZXF1ZXN0LnNjaGVkdWxlRGF0YSkge1xuICAgICAgICB0aGlzLl9zZXJ2ZXIubWVldGluZy5zY2hlZHVsZShyZXF1ZXN0LnNjaGVkdWxlRGF0YSkudGhlbigoc2NoZWR1bGVSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNlbmRSZXNwb25zZShzY2hlZHVsZVJlc3BvbnNlLm1lZXRpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgX2FkZE1lZXRpbmcodGFiLCBzY2hlZHVsZURhdGEpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdHlwZTogJ2FkZE1lZXRpbmcnLFxuICAgICAgc2NoZWR1bGVEYXRhLFxuICAgIH07XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBkYXRhLCAocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIHJlc3BvbnNlXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvTWVldGluZ0hlbHBlci9zZXJ2ZXIuanMiLCJpbXBvcnQgSTE4biBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvSTE4bic7XG5pbXBvcnQgbG9hZExvY2FsZSBmcm9tICcuL2xvYWRMb2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bihsb2FkTG9jYWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvRXh0ZW5zaW9uU2VydmVyUnVubmVyL2kxOG4vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTG9jYWxlKGxvY2FsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgIGNhc2UgJ2RlJzpcbiAgXG4gICAgICBjYXNlICdkZS1ERSc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9kZS1ERSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RlLURFJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZGUtREUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kZS1ERScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAnZW4nOlxuICBcbiAgICAgIGNhc2UgJ2VuLUNBJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLUNBJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tQ0EnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1DQScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUNBJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2VuLUdCJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLUdCJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tR0InKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1HQicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLUdCJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2VuLVVTJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VuLVVTJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZW4tVVMnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdlbi1VUycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VuLVVTJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlICdlcyc6XG4gIFxuICAgICAgY2FzZSAnZXMtNDE5Jzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2VzLTQxOSddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VzLTQxOScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2VzLTQxOScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VzLTQxOScpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdlcy1FUyc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9lcy1FUyddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2VzLUVTJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnZXMtRVMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9lcy1FUycpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAnZnInOlxuICBcbiAgICAgIGNhc2UgJ2ZyLUNBJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2ZyLUNBJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZnItQ0EnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdmci1DQScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2ZyLUNBJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2ZyLUZSJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL2ZyLUZSJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZnItRlInKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdmci1GUicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2ZyLUZSJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlICdpdCc6XG4gIFxuICAgICAgY2FzZSAnaXQtSVQnOiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZS5lbnN1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXF1aXJlLmVuc3VyZShbJy4vaXQtSVQnXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9pdC1JVCcpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgICAgfSwgJ2l0LUlUJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vaXQtSVQnKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgJ2phJzpcbiAgXG4gICAgICBjYXNlICdqYS1KUCc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFsnLi9qYS1KUCddLCAocmVxdWlyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2phLUpQJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgICB9LCAnamEtSlAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9qYS1KUCcpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YS5fX2VzTW9kdWxlID09PSB0cnVlID8gZGF0YS5kZWZhdWx0IDogZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAncHQnOlxuICBcbiAgICAgIGNhc2UgJ3B0LUJSJzoge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmUuZW5zdXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVxdWlyZS5lbnN1cmUoWycuL3B0LUJSJ10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vcHQtQlInKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEuX19lc01vZHVsZSA9PT0gdHJ1ZSA/IGRhdGEuZGVmYXVsdCA6IGRhdGEpO1xuICAgICAgICAgIH0sICdwdC1CUicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL3B0LUJSJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhLl9fZXNNb2R1bGUgPT09IHRydWUgPyBkYXRhLmRlZmF1bHQgOiBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaTE4bi9sb2FkTG9jYWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==