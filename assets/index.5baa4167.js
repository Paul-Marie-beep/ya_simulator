// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hF8lp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
var _welcomeController = require("./src/js/controllers/welcomeController");
(0, _welcomeController.waitForStartInput)();

},{"./src/js/controllers/welcomeController":"64iI8"}],"64iI8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "waitForStartInput", ()=>waitForStartInput);
var _gameController = require("./gameController");
var _welcomeView = require("../views/welcomeView");
var _welcomeViewDefault = parcelHelpers.interopDefault(_welcomeView);
const waitForStartInput = function() {
    (0, _welcomeViewDefault.default).waitForStart((0, _gameController.initializeGame));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./gameController":"kqfSP","../views/welcomeView":"kga6f"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kqfSP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mistakesWereMade", ()=>mistakesWereMade);
parcelHelpers.export(exports, "virtualPlayerChoice", ()=>virtualPlayerChoice);
parcelHelpers.export(exports, "humanOrMachine", ()=>humanOrMachine);
parcelHelpers.export(exports, "initializeGame", ()=>initializeGame);
var _model = require("../model");
var _eventsDisplayController = require("./eventsDisplayController");
var _playersView = require("../views/playersView");
var _playersViewDefault = parcelHelpers.interopDefault(_playersView);
var _helpers = require("../helpers");
var _buttonsController = require("./buttonsController");
var _honkyController = require("./honkyController");
var _vadeRetroController = require("./vadeRetroController");
var _zapController = require("./zapController");
var _farewellController = require("./farewellController");
if (module.hot) module.hot.accept();
const showPlayers = function(players, player) {
    // Show the players on the screen
    (0, _playersViewDefault.default).renderPlayers(players);
    // Show who is the player currently playing
    (0, _playersViewDefault.default).highlightActivePlayer(player);
};
const startGame = function() {
    // Since this is the very beginning of the game, we start with all the players involved
    //We choose the first player and then launch the game
    const firstPlayer = _model.chooseFirstPlayer();
    // We show the players on scren
    showPlayers(_model.currentPlayers, firstPlayer);
    // We let the human player know the name of the first player
    _eventsDisplayController.gameStartAnnouncement(firstPlayer.name);
    // Select randomly the direction towards which the game will start
    _model.chooseDirectionForFirstYa();
    // Launch the game with a ya
    // Change the console log by a graphic representation in a view in the future
    console.log(`${firstPlayer.name} commence le jeu en faisant un ya vers la ${(0, _helpers.translateDirection)(_model.gameDirection)}`);
    // As a matter of fact,  This is the future view
    _eventsDisplayController.firstShotAnnouncement(firstPlayer.name, (0, _helpers.translateDirection)(_model.gameDirection));
    _model.changePlayer(firstPlayer);
    // we allow the player to see the various commands by pressing Enter
    (0, _buttonsController.triggerCommandsPopup)();
};
const mistakesWereMade = function(player = _model.currentPlayer) {
    // It is not a problem to select players by their names in this case but selecting them by Id would be admittedly better
    // What happens if a player makes a mistake ?
    console.log(`${player.name} has committed a mistake and must leave the game`);
    // Let the player know that one of his challengers has just been eliminated
    _eventsDisplayController.virtualPlayerEliminationAnnouncement(player.name);
    // Get rid of the player that has commited a mistake
    _model.updateCurrentPlayers(player);
    // Guard function to end the game if only two players have not been eliminated
    if (_model.currentPlayers.length === 2) {
        (0, _playersViewDefault.default).renderPlayers(_model.currentPlayers);
        console.log(`Il n'y a plus que deux joueurs : ${_model.currentPlayers[0].name} et ${_model.currentPlayers[1].name} donc le jeu est fini`);
        // The game ends here and the human player has won
        console.log("\uD83E\uDD47\uD83E\uDD47\uD83E\uDD47 Bravo !! vous avez gagn\xe9 \uD83E\uDD47\uD83E\uDD47\uD83E\uDD47");
        (0, _farewellController.endGameByVictory)();
        //
        return;
    }
    //We wait 4 seconds before re-starting the game
    setTimeout(()=>{
        startGame();
        humanOrMachine();
    }, 4000);
};
const virtualPlayerChoice = function(player, zapPossible = true) {
    // Highlight the player whose turn it is to play on the graphical representation
    (0, _playersViewDefault.default).highlightActivePlayer(player);
    // Define a random number to help choose an option
    const randomNumber = (0, _helpers.randomInt)(0, (0, _helpers.defineMax)(player));
    console.log(`${player.name} is ${player.riskProfile} and got ${randomNumber} as a random number`);
    // Depending on this random number, we then select a shot for the virtual player to play
    if (randomNumber <= 3) {
        console.log(`${player.name} has chosen to hold down`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Hold Down");
        _model.changeDirectionAfterHoldDown();
        // Guard to stop the game if a mistake has been committed
        if ((0, _helpers.hasAPlayerCommitedAMistake)(player, "hold down")) {
            console.log(` 😡😡😡 ${player.name} has failed while trying to hold down. ${player.name} is eliminated 😡😡😡`);
            _eventsDisplayController.virtualPlayerMistakeWarning(player.name, "Hold Down");
            mistakesWereMade();
            return;
        }
        _model.changePlayer(player);
    } else if (randomNumber > 3 && randomNumber <= 6) {
        console.log(`${player.name} has chosen to honky tonk`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Honky Tonk");
        setTimeout(()=>{
            (0, _honkyController.honkyTonkByVirtualPlayer)();
        }, 2000);
        return;
    } else if (randomNumber > 6 && randomNumber <= 10) {
        console.log(`${player.name} has chosen to ahi`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Ahi");
        // Guard if a mistake has been committed
        if ((0, _helpers.hasAPlayerCommitedAMistake)(player, "ahi")) {
            console.log(` 😡😡😡 ${player.name} has failed while trying to ahi. ${player.name} is eliminated 😡😡😡`);
            _eventsDisplayController.virtualPlayerMistakeWarning(player.name, "Ahi");
            mistakesWereMade();
            return;
        }
        console.log(`${player.name} a bien fait ahi`);
        _model.changePlayer(player, 2);
    } else if (randomNumber > 10 && randomNumber <= 15) {
        // Guard to prevent the game from continuing if the player who's trying to let commits a mistake while doing so
        if ((0, _helpers.hasAPlayerCommitedAMistake)(player, "let")) {
            console.log(` 😡😡😡 ${player.name} has failed while trying to let. ${player.name} is eliminated 😡😡😡`);
            _eventsDisplayController.virtualPlayerMistakeWarning(player.name, "Let");
            mistakesWereMade();
            return;
        }
        console.log(`${player.name} has chosen to let`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Je laisse.");
        (0, _buttonsController.humanReactionToLet)();
        return;
    } else if (randomNumber > 15 && randomNumber <= 18) {
        console.log(`${player.name} has chosen to Vade Retro`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Vade Retro");
        (0, _vadeRetroController.vadeRetroByVirtualPlayer)();
        return;
    } else if (randomNumber > 18 && randomNumber <= 25) {
        // condtionality to prevent a player who said "Je prends" after being zapped to zap afterwards
        if (zapPossible) {
            console.log(`${player.name} has chosen to Zap`);
            _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Zap");
            // We shall aknowledge the fact that a zap sequence has been initiated
            _model.updateListOfZappedPlayers(player);
            _model.recordFirstPlayerToZap(player);
            (0, _zapController.zapByVirtualPlayer)(player);
            return;
        } else {
            console.log("Zap denied");
            virtualPlayerChoice(player, false);
            return;
        }
    } else {
        console.log(`${player.name} has chosen to ya`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, "Ya");
        // Guard to stop the game if a mistake has been committed
        if ((0, _helpers.hasAPlayerCommitedAMistake)(player, "ya")) {
            console.log(`😡😡😡 ${player.name} has failed while trying to ya. ${player.name} is eliminated 😡😡😡`);
            _eventsDisplayController.virtualPlayerMistakeWarning(player.name, "Ya");
            mistakesWereMade();
            return;
        }
        _model.changePlayer(player);
    }
    // We go back to testing if the player is virtual or human and relaunch the game
    setTimeout(()=>humanOrMachine(_model.currentPlayer), 2000);
};
const humanOrMachine = function() {
    //We check if the player that shall play now is human or not
    if (_model.isHumanPlayerInvolved()) {
        //The human player cannot be selected to start the game for the sake of simplicity
        //What happens if the human player is selected in the course of the game
        console.log("C'est au tour du joueur humain de jouer");
        _eventsDisplayController.drawHumanPlayerAttention();
        (0, _buttonsController.handleHumanTurnToPlay)();
    } else {
        console.log(`C'est au tour de ${_model.currentPlayer.name} de jouer. Que va-t-il se passer ?`);
        // Let the human player know whose player's turn it is to play
        _eventsDisplayController.playerChangeAnnouncement(_model.currentPlayer.name);
        // if the player is virtual, then it automatically plays its turn
        // Make the virtual player decide which shot he is going to play
        virtualPlayerChoice(_model.currentPlayer);
    }
};
const initializeGame = function(name = _model.humanPlayerName) {
    // We do not want to see the log of the pas events when we start another game
    (0, _playersViewDefault.default).eraseEvents();
    (0, _buttonsController.eraseHumanCheck)();
    _model.createInitialListOfPlayers(name);
    // The function to create the initial list of players is separated from startGame() so that we can use said function to restart a game after an elimination without re-creating a whole new array of players
    startGame();
    humanOrMachine();
};

},{"../model":"Y4A21","./eventsDisplayController":"9p6qn","../views/playersView":"5dkxY","../helpers":"hGI1E","./buttonsController":"hwP37","./honkyController":"8kxp2","./vadeRetroController":"cT8dF","./zapController":"87MLe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./farewellController":"gLEdG"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentPlayers", ()=>currentPlayers);
parcelHelpers.export(exports, "currentPlayer", ()=>currentPlayer);
parcelHelpers.export(exports, "gameDirection", ()=>gameDirection);
parcelHelpers.export(exports, "playerInitiatingAZap", ()=>playerInitiatingAZap);
parcelHelpers.export(exports, "humanPlayerName", ()=>humanPlayerName);
parcelHelpers.export(exports, "createInitialListOfPlayers", ()=>createInitialListOfPlayers);
parcelHelpers.export(exports, "chooseFirstPlayer", ()=>chooseFirstPlayer);
parcelHelpers.export(exports, "chooseAPlayerThatIsNotHuman", ()=>chooseAPlayerThatIsNotHuman);
parcelHelpers.export(exports, "chooseRandomPlayer", ()=>chooseRandomPlayer);
parcelHelpers.export(exports, "updateCurrentPlayer", ()=>updateCurrentPlayer);
parcelHelpers.export(exports, "chooseDirectionForFirstYa", ()=>chooseDirectionForFirstYa);
parcelHelpers.export(exports, "updateCurrentPlayers", ()=>updateCurrentPlayers);
parcelHelpers.export(exports, "changePlayer", ()=>changePlayer);
parcelHelpers.export(exports, "isHumanPlayerInvolved", ()=>isHumanPlayerInvolved);
parcelHelpers.export(exports, "changeDirectionAfterHoldDown", ()=>changeDirectionAfterHoldDown);
parcelHelpers.export(exports, "lookForPlayersReactingToHonkyTonk", ()=>lookForPlayersReactingToHonkyTonk);
parcelHelpers.export(exports, "lookForPlayersReactingToVadeRetro", ()=>lookForPlayersReactingToVadeRetro);
parcelHelpers.export(exports, "updateListOfZappedPlayers", ()=>updateListOfZappedPlayers);
parcelHelpers.export(exports, "unzapAllPlayers", ()=>unzapAllPlayers);
parcelHelpers.export(exports, "recordFirstPlayerToZap", ()=>recordFirstPlayerToZap);
parcelHelpers.export(exports, "endOfZap", ()=>endOfZap);
parcelHelpers.export(exports, "extractPlayer", ()=>extractPlayer);
var _helpers = require("./helpers");
"use strict";
// const players = [
//   { numero: 1, name: "Camille", human: true, zapped: false  },
//   { numero: 2, name: "Patrick", riskProfile: "bold", skill: "low", human: false, zapped: false  },
//   { numero: 3, name: "Jean-Claude", riskProfile: "cautious", skill: "low", human: false, zapped: false  },
//   { numero: 4, name: "Claudine", riskProfile: "bold", skill: "average", human: false, zapped: false  },
//   { numero: 5, name: "Martine", riskProfile: "average", skill: "average", human: false, zapped: false  },
//   { numero: 6, name: "Michel", riskProfile: "average", skill: "high", human: false, zapped: false  },
// ];
const players = [
    {
        numero: 1,
        name: "",
        human: true,
        zapped: false
    },
    {
        numero: 2,
        name: "Patrick",
        riskProfile: "bold",
        skill: "high",
        human: false,
        zapped: false
    },
    {
        numero: 3,
        name: "Jean-Claude",
        riskProfile: "cautious",
        skill: "high",
        human: false,
        zapped: false
    },
    {
        numero: 4,
        name: "Claudine",
        riskProfile: "bold",
        skill: "high",
        human: false,
        zapped: false
    },
    {
        numero: 5,
        name: "Martine",
        riskProfile: "average",
        skill: "high",
        human: false,
        zapped: false
    },
    {
        numero: 6,
        name: "Michel",
        riskProfile: "average",
        skill: "high",
        human: false,
        zapped: false
    }
];
let currentPlayers;
let currentPlayer;
let gameDirection;
let playerInitiatingAZap;
let humanPlayerName;
const updateHumanPlayerName = function(patro) {
    if (humanPlayerName === patro) return;
    else humanPlayerName = patro;
};
const createInitialListOfPlayers = function(patro) {
    currentPlayers = [];
    players.forEach((el)=>currentPlayers.push(el));
    // register the name of the human player in case we want to stat another game
    updateHumanPlayerName(patro);
    // Register the fact that we have got a name for our human player
    currentPlayers[0].name = patro;
    console.log("v\xe9rif que le nom du joueur humain est bien pris en compte", currentPlayers[0].name);
    console.log("v\xe9rif que le nom du joueur humain est bien pris en compte", currentPlayers);
};
const chooseFirstPlayer = function() {
    // We create a random integer (for the sake of simplicity, we decide that the game will always be launched by a virtual player)
    let indexOfFirstPlayer = (0, _helpers.randomInt)(1, currentPlayers.length - 1);
    // The direction of the game is re-initialized (In case we are starting again after an elimination)
    gameDirection = "";
    // We chose a player from the array
    currentPlayer = currentPlayers[indexOfFirstPlayer];
    console.log(`Le  joueur choisi est : ${currentPlayer.name}`);
    return currentPlayer;
};
const chooseAPlayerThatIsNotHuman = function() {
    let indexOfFirstPlayer = (0, _helpers.randomInt)(1, currentPlayers.length - 1);
    // We chose a player from the array
    currentPlayer = currentPlayers[indexOfFirstPlayer];
    return currentPlayer;
};
const chooseRandomPlayer = function(player = "") {
    // For the zap shot, we need the impossibility for a  player to randomly select himself
    const transitArray = currentPlayers.filter((pl)=>pl !== player);
    // Case where a player has to be selected after, let's say, Honky Tonk or Vade Retro. Therefore, the human player is also part of the equation this time
    // The game direction is not modified, hence the need for another function
    let indexOfNewPlayer = (0, _helpers.randomInt)(-1, transitArray.length - 1);
    currentPlayer = transitArray[indexOfNewPlayer];
    return currentPlayer;
};
const updateCurrentPlayer = function(name) {
    currentPlayer = currentPlayers.find((player)=>player.name === name);
    console.log("new current player", currentPlayer);
    return currentPlayer;
};
const chooseDirectionForFirstYa = function() {
    //We randomly chose a direction with which the game will start
    const rand1 = (0, _helpers.randomInt)(0, 2);
    if (rand1 === 1) gameDirection = "left";
    else gameDirection = "right";
};
const updateCurrentPlayers = function(player) {
    const currentPlayerIndex = currentPlayers.indexOf(player);
    currentPlayers.splice(currentPlayerIndex, 1);
    console.log("voici le nouvel array des joueurs:", currentPlayers);
};
const changePlayer = function(player, increment = 1) {
    const indexOfCurrentPlayer = currentPlayers.indexOf(player);
    console.log("player :", player, "index of current player :", indexOfCurrentPlayer, "increment :", increment);
    console.log(`le tour passe au joueur situé ${increment} position(s) vers la ${gameDirection}`);
    // We shoud differentiate two cases depending on the direction of the game
    if (gameDirection === "left") {
        if (indexOfCurrentPlayer - increment >= 0) currentPlayer = currentPlayers[indexOfCurrentPlayer - increment];
        else currentPlayer = currentPlayers[currentPlayers.length - increment + indexOfCurrentPlayer];
    } else if (gameDirection === "right") {
        if (indexOfCurrentPlayer + increment <= currentPlayers.length - 1) currentPlayer = currentPlayers[indexOfCurrentPlayer + increment];
        else currentPlayer = currentPlayers[increment - (currentPlayers.length - indexOfCurrentPlayer)];
    }
    console.log(currentPlayer);
    console.log("joueur actuel apr\xe8s changement:", currentPlayer.name, "current player human ?", currentPlayer.human);
};
const isHumanPlayerInvolved = function() {
    if (currentPlayer.human) return true;
};
const changeDirectionAfterHoldDown = function() {
    // We change the direction of the game
    gameDirection === "left" ? gameDirection = "right" : gameDirection = "left";
    console.log("Game direction is now :", gameDirection);
};
const lookForPlayersReactingToHonkyTonk = function() {
    // We want to return an array of players who will have to houba houba
    return (0, _helpers.honkyTonkHelper)(gameDirection, currentPlayers, currentPlayer);
};
const lookForPlayersReactingToVadeRetro = function() {
    // We want to return an array of players who will have to sa ta nas
    return (0, _helpers.vadeRetroHelper)(gameDirection, currentPlayers, currentPlayer);
};
const updateListOfZappedPlayers = function(obj) {
    // We must set the zapped property of the zapped player to true to indicated that he's been zapped.
    currentPlayers.find((player)=>player.numero === obj.numero).zapped = true;
    console.log("\uD83D\uDC39\uD83D\uDC39 Test zap update \uD83D\uDC39\uD83D\uDC39", currentPlayers);
};
const unzapAllPlayers = function() {
    currentPlayers.forEach((player)=>player.zapped = false);
};
const recordFirstPlayerToZap = function(player = "human") {
    // Two separate case : the player who initiates a zap is human or isn't
    if (player === "human") {
        console.log("TRIG");
        playerInitiatingAZap = currentPlayers.find((obj)=>obj.human === true);
    } else playerInitiatingAZap = player;
};
const endOfZap = function() {
    // Reset the name of the first player to zap
    playerInitiatingAZap = "";
    // set that no players have not been zapped
    unzapAllPlayers();
};
const extractPlayer = function(name) {
    return currentPlayers.find((player)=>player.name === name);
};

},{"./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomInt", ()=>randomInt);
parcelHelpers.export(exports, "defineMax", ()=>defineMax);
parcelHelpers.export(exports, "defineRandomNumberToGenerateMistakeChance", ()=>defineRandomNumberToGenerateMistakeChance);
parcelHelpers.export(exports, "hasAPlayerCommitedAMistake", ()=>hasAPlayerCommitedAMistake);
parcelHelpers.export(exports, "hitOrMissHonkyTonk", ()=>hitOrMissHonkyTonk);
parcelHelpers.export(exports, "honkyTonkHelper", ()=>honkyTonkHelper);
parcelHelpers.export(exports, "vadeRetroHelper", ()=>vadeRetroHelper);
parcelHelpers.export(exports, "translateDirection", ()=>translateDirection);
parcelHelpers.export(exports, "defineReactionTime", ()=>defineReactionTime);
var _model = require("./model");
const randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
};
const defineMax = function(currentPlayer) {
    if (currentPlayer.riskProfile === "cautious") return 33;
    if (currentPlayer.riskProfile === "average") return 28;
    if (currentPlayer.riskProfile === "bold") return 23;
};
const defineRandomNumberToGenerateMistakeChance = function(shotPlayed1, currentPlayer) {
    if (shotPlayed1 === "ya" || shotPlayed1 === "let") {
        if (currentPlayer.skill === "low") return 80;
        else if (currentPlayer.skill === "average") return 40;
    } else if (currentPlayer.skill === "high") return 21;
    if (shotPlayed1 === "hold down" || shotPlayed1 === "ahi") {
        if (currentPlayer.skill === "low") return 90;
        else if (currentPlayer.skill === "average") return 45;
    } else if (currentPlayer.skill === "high") return 25;
    if (shotPlayed1 === "honky tonk") {
        if (currentPlayer.skill === "low") return 195;
        else if (currentPlayer.skill === "average") return 60;
        else if (currentPlayer.skill === "high") return 25;
    }
    if (shotPlayed1 === "reaction to honky tonk" || shotPlayed1 === "take") {
        if (currentPlayer.skill === "low") return 125;
        else if (currentPlayer.skill === "average") return 50;
    } else if (currentPlayer.skill === "high") return 22;
};
const hasAPlayerCommitedAMistake = function(player = (0, _model.currentPlayer), shot = shotPlayed) {
    const max = defineRandomNumberToGenerateMistakeChance(shot, player);
    const rand = randomInt(0, max);
    console.log(`Pour le % d'erreur, ${player.name} a obtenu ${rand} comme nombre aléatoire`);
    if (rand > 20) return true;
    else return false;
};
const hitOrMissHonkyTonk = function(playerReactingToShot, shot) {
    console.log(`${playerReactingToShot.name} va devoir faire "${shot}"`);
    if (hasAPlayerCommitedAMistake(playerReactingToShot, "reaction to honky tonk")) {
        console.log(`${playerReactingToShot.name} has made a mistake while doing "${shot}"`);
        return true;
    } else return false;
};
const honkyTonkHelper = function(gameDirection, currentPlayers, currentPlayer) {
    const indexOfCurrentPlayer = currentPlayers.indexOf(currentPlayer);
    if (gameDirection === "left") {
        if (indexOfCurrentPlayer >= 2) return [
            currentPlayers[indexOfCurrentPlayer - 1],
            currentPlayers[indexOfCurrentPlayer - 2]
        ];
        if (indexOfCurrentPlayer === 1) return [
            currentPlayers[indexOfCurrentPlayer - 1],
            currentPlayers[currentPlayers.length - 1]
        ];
        if (indexOfCurrentPlayer === 0) return [
            currentPlayers[currentPlayers.length - 1],
            currentPlayers[currentPlayers.length - 2]
        ];
    } else {
        if (indexOfCurrentPlayer <= currentPlayers.length - 3) return [
            currentPlayers[indexOfCurrentPlayer + 1],
            currentPlayers[indexOfCurrentPlayer + 2]
        ];
        if (indexOfCurrentPlayer === currentPlayers.length - 2) return [
            currentPlayers[indexOfCurrentPlayer + 1],
            currentPlayers[0]
        ];
        if (indexOfCurrentPlayer === currentPlayers.length - 1) return [
            currentPlayers[0],
            currentPlayers[1]
        ];
    }
};
const vadeRetroHelper = function(gameDirection, currentPlayers, currentPlayer) {
    const indexOfCurrentPlayer = currentPlayers.indexOf(currentPlayer);
    if (gameDirection === "left") {
        if (indexOfCurrentPlayer >= 3) return [
            currentPlayers[indexOfCurrentPlayer - 1],
            currentPlayers[indexOfCurrentPlayer - 2],
            currentPlayers[indexOfCurrentPlayer - 3]
        ];
        if (indexOfCurrentPlayer === 2) return [
            currentPlayers[indexOfCurrentPlayer - 1],
            currentPlayers[indexOfCurrentPlayer - 2],
            currentPlayers[currentPlayers.length - 1]
        ];
        if (indexOfCurrentPlayer === 1) return [
            currentPlayers[indexOfCurrentPlayer - 1],
            currentPlayers[currentPlayers.length - 1],
            currentPlayers[currentPlayers.length - 2]
        ];
        if (indexOfCurrentPlayer === 0) return [
            currentPlayers[currentPlayers.length - 1],
            currentPlayers[currentPlayers.length - 2],
            currentPlayers[currentPlayers.length - 3]
        ];
    } else {
        if (indexOfCurrentPlayer <= currentPlayers.length - 4) return [
            currentPlayers[indexOfCurrentPlayer + 1],
            currentPlayers[indexOfCurrentPlayer + 2],
            currentPlayers[indexOfCurrentPlayer + 3]
        ];
        if (indexOfCurrentPlayer === currentPlayers.length - 3) return [
            currentPlayers[indexOfCurrentPlayer + 1],
            currentPlayers[indexOfCurrentPlayer + 2],
            currentPlayers[0]
        ];
        if (indexOfCurrentPlayer === currentPlayers.length - 2) return [
            currentPlayers[indexOfCurrentPlayer + 1],
            currentPlayers[0],
            currentPlayers[1]
        ];
        if (indexOfCurrentPlayer === currentPlayers.length - 1) return [
            currentPlayers[0],
            currentPlayers[1],
            currentPlayers[2]
        ];
    }
};
const translateDirection = function(gameDirection) {
    if (gameDirection === "left") return "gauche";
    if (gameDirection === "right") return "droite";
};
const defineReactionTime = function() {
    return randomInt(1, 4) * 1000;
};

},{"./model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9p6qn":[function(require,module,exports) {
//These Functions make sure that the events that are occuring are properly displayed
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomeMessage", ()=>welcomeMessage);
parcelHelpers.export(exports, "gameStartAnnouncement", ()=>gameStartAnnouncement);
parcelHelpers.export(exports, "firstShotAnnouncement", ()=>firstShotAnnouncement);
parcelHelpers.export(exports, "virtualPlayerShotAnnouncement", ()=>virtualPlayerShotAnnouncement);
parcelHelpers.export(exports, "virtualPlayerMistakeWarning", ()=>virtualPlayerMistakeWarning);
parcelHelpers.export(exports, "virtualPlayerEliminationAnnouncement", ()=>virtualPlayerEliminationAnnouncement);
parcelHelpers.export(exports, "drawHumanPlayerAttention", ()=>drawHumanPlayerAttention);
parcelHelpers.export(exports, "playerChangeAnnouncement", ()=>playerChangeAnnouncement);
parcelHelpers.export(exports, "virtualPlayerNoiseAnnouncement", ()=>virtualPlayerNoiseAnnouncement);
parcelHelpers.export(exports, "playerHavingToDesignateAnotherPlayerAnnouncement", ()=>playerHavingToDesignateAnotherPlayerAnnouncement);
parcelHelpers.export(exports, "chosenPlayerNameAnnoucement", ()=>chosenPlayerNameAnnoucement);
parcelHelpers.export(exports, "zapAnnouncement", ()=>zapAnnouncement);
parcelHelpers.export(exports, "zapFailAnnouncement", ()=>zapFailAnnouncement);
parcelHelpers.export(exports, "lastZapOkAnnouncement", ()=>lastZapOkAnnouncement);
parcelHelpers.export(exports, "lastZapFailAnnouncement", ()=>lastZapFailAnnouncement);
parcelHelpers.export(exports, "serviceMessage", ()=>serviceMessage);
parcelHelpers.export(exports, "humanPlayerValidation", ()=>humanPlayerValidation);
parcelHelpers.export(exports, "humanPlayerMistakewarning", ()=>humanPlayerMistakewarning);
parcelHelpers.export(exports, "humanTypingMistake", ()=>humanTypingMistake);
var _playersView = require("../views/playersView");
var _playersViewDefault = parcelHelpers.interopDefault(_playersView);
const welcomeMessage = function() {
    (0, _playersViewDefault.default).renderEvents("Bonne chance Camille. Le jeu commence !!", "welcome");
};
const gameStartAnnouncement = function(name) {
    (0, _playersViewDefault.default).renderEvents(`🙋‍♀️ ${name} a choisi de jouer en premier`, "player-change");
};
const firstShotAnnouncement = function(name, direction) {
    (0, _playersViewDefault.default).renderEvents(`🙋‍♀️ ${name} commence le jeu en faisant un ya vers la ${direction}`, "event");
};
const virtualPlayerShotAnnouncement = function(name, shot) {
    (0, _playersViewDefault.default).renderEvents(`🙆 ${name} a choisi de faire un ${shot}`, "event");
};
const virtualPlayerMistakeWarning = function(name, shot) {
    (0, _playersViewDefault.default).renderEvents(`🤦‍♂️ ${name} a lamentablement échoué dans sa tentative de faire un ${shot}`, "warning");
};
const virtualPlayerEliminationAnnouncement = function(name) {
    (0, _playersViewDefault.default).renderEvents(`🤷‍♀️ ${name} a commis une erreur et est éliminé`, "elimination");
};
const drawHumanPlayerAttention = function() {
    (0, _playersViewDefault.default).renderEvents("\uD83E\uDD2F C'est \xe0 votre tour de jouer", "attention");
};
const playerChangeAnnouncement = function(name) {
    (0, _playersViewDefault.default).renderEvents(`😱 C'est donc au tour de ${name} de jouer. Que va-t-il se passer ?`, "player-change");
};
const virtualPlayerNoiseAnnouncement = function(name, noise) {
    (0, _playersViewDefault.default).renderEvents(`👍🏻 ${name} a réussi à dire ${noise}`, "validate");
};
const playerHavingToDesignateAnotherPlayerAnnouncement = function(name) {
    (0, _playersViewDefault.default).renderEvents(`${name} doit désormais appeler un nouveau joueur pour continuer le jeu`, "event");
};
const chosenPlayerNameAnnoucement = function(playerToCallName, playerCalledName, noise) {
    (0, _playersViewDefault.default).renderEvents(`${playerToCallName} a appelé ${playerCalledName} après avoir dit ${noise}`, "event");
};
const zapAnnouncement = function(playerZappingName, playerZappedName) {
    (0, _playersViewDefault.default).renderEvents(`${playerZappingName} a choisi de zapper ${playerZappedName}`, "event");
};
const zapFailAnnouncement = function(playerZappedName, playerZappingName) {
    (0, _playersViewDefault.default).renderEvents(`${playerZappedName} a été zappé par ${playerZappingName} alors qu'il avait déjà été zappé`, "warning");
};
const lastZapOkAnnouncement = function(lastPlayerToZapName, firstPlayerToZapName) {
    (0, _playersViewDefault.default).renderEvents(`👍🏻 ${lastPlayerToZapName} a réussi à zapper le premier joueur à avoir zappé : ${firstPlayerToZapName}`, "validate");
    (0, _playersViewDefault.default).renderEvents(`🙋‍♀️ C'est donc à ${firstPlayerToZapName} de reprendre le jeu`, "event");
};
const lastZapFailAnnouncement = function(lastPlayerToZapName, firstPlayerToZapName, playerActuallyZappedName) {
    (0, _playersViewDefault.default).renderEvents(`👩🏼‍🦯 ${lastPlayerToZapName} n'a pas réussi à zapper le premier joueur à avoir zappé : ${firstPlayerToZapName} puisqu'il a zappé ${playerActuallyZappedName}`, "warning");
};
const serviceMessage = function(string, type = "event") {
    (0, _playersViewDefault.default).renderEvents(string, type);
};
const humanPlayerValidation = function(shot) {
    (0, _playersViewDefault.default).renderEvents(`🐵 Vous avez réussi à faire ${shot}`, "validate");
};
const humanPlayerMistakewarning = function(shot) {
    (0, _playersViewDefault.default).renderEvents(`🙈 Vous n'avez pas réussi à faire ${shot}`, "warning");
};
const humanTypingMistake = function(key) {
    (0, _playersViewDefault.default).renderEvents(`🐙 Vous avez fait une erreur et pressé la touche ${key}`, "warning");
};

},{"../views/playersView":"5dkxY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5dkxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class playersView {
    _playerGrid = "";
    __eventsDisplay = document.querySelector(".wrapper__tell");
    highlightActivePlayer(currentPlayer) {
        document.querySelectorAll(".player__ball").forEach((div)=>{
            div.classList.remove("active");
        });
        document.querySelector(`.player__ball--${currentPlayer.numero}`).classList.add("active");
    }
    renderPlayers(currentPlayers) {
        this._playerGrid = document.querySelector(".wrapper__show");
        let html = "";
        // The order of the elements of the array is reversed so that the graphical representation matches what happens in the model
        const reversedArray = [];
        currentPlayers.forEach((el)=>{
            reversedArray.push(el);
        });
        reversedArray.reverse().forEach((el, i)=>{
            html = html + `
      <div data-name=${el.name} class="player player--${i + 1}">
          <div class="child player__ball player__ball--${el.numero}"></div>
          <div class="child player__name">${el.name}</div>
        </div>
      `;
        });
        this._playerGrid.innerHTML = html;
    }
    renderEvents(eventDescription, type) {
        const html = `<p class= "wrapper__tell--${type}" >${eventDescription}</p>`;
        this.__eventsDisplay.insertAdjacentHTML("afterbegin", html);
    }
    eraseEvents() {
        this.__eventsDisplay.innerHTML = "";
    }
    handleHumanChoiceOfANewPlayer(handler, shot) {
        //We want the human player to click on the new player with which he want to continue the game
        // We then want this view to return the name of the player who should carry on playing to the controller
        const insideListener = function(event) {
            event.preventDefault();
            if (event.target.classList.contains("player")) {
                handler(event.target.dataset.name, shot);
                document.querySelector(".wrapper__show").removeEventListener("click", insideListener);
            }
            //If the click is not on the name but on the ball, we still want the name of player to be sent back to the controller
            if (event.target.classList.contains("child")) {
                handler(event.target.parentNode.dataset.name, shot);
                document.querySelector(".wrapper__show").removeEventListener("click", insideListener);
            }
        };
        document.querySelector(".wrapper__show").addEventListener("click", insideListener);
    }
}
exports.default = new playersView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwP37":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasTheHumanPlayerTriedToTake", ()=>hasTheHumanPlayerTriedToTake);
parcelHelpers.export(exports, "triggerCommandsPopup", ()=>triggerCommandsPopup);
parcelHelpers.export(exports, "handleHumanTurnToPlay", ()=>handleHumanTurnToPlay);
parcelHelpers.export(exports, "humanResponseToHonkyTonk", ()=>humanResponseToHonkyTonk);
parcelHelpers.export(exports, "humanResponseToVadeRetro", ()=>humanResponseToVadeRetro);
parcelHelpers.export(exports, "checkHumanDesignationOfANewPlayer", ()=>checkHumanDesignationOfANewPlayer);
parcelHelpers.export(exports, "checkReactionToBeingCalled", ()=>checkReactionToBeingCalled);
parcelHelpers.export(exports, "humanReactionToBeingCalledAfterHoubaHouba", ()=>humanReactionToBeingCalledAfterHoubaHouba);
parcelHelpers.export(exports, "eraseHumanCheck", ()=>eraseHumanCheck);
parcelHelpers.export(exports, "checkHumanReactionToLet", ()=>checkHumanReactionToLet);
parcelHelpers.export(exports, "MakeAVirtualPlayerTake", ()=>MakeAVirtualPlayerTake);
parcelHelpers.export(exports, "humanReactionToLet", ()=>humanReactionToLet);
parcelHelpers.export(exports, "humanResponseToZap", ()=>humanResponseToZap);
parcelHelpers.export(exports, "checkIfHumanZapGoneWell", ()=>checkIfHumanZapGoneWell);
var _eventsDisplayControllerJs = require("./eventsDisplayController.js");
var _modelJs = require("../model.js");
var _buttonsViewJs = require("../views/buttonsView.js");
var _buttonsViewJsDefault = parcelHelpers.interopDefault(_buttonsViewJs);
var _playersViewJs = require("../views/playersView.js");
var _playersViewJsDefault = parcelHelpers.interopDefault(_playersViewJs);
var _gameControllerJs = require("./gameController.js");
var _honkyControllerJs = require("./honkyController.js");
var _vadeRetroControllerJs = require("./vadeRetroController.js");
var _letControllerJs = require("./letController.js");
var _zapControllerJs = require("./zapController.js");
var _farewellControllerJs = require("./farewellController.js");
var _helpersJs = require("../helpers.js");
"use strict";
let virtualHouba;
let hasTheHumanPlayerTriedToTake;
// Function to check that the player has made a ya in the right direction
const checkDirection = function(direction) {
    if (direction === _modelJs.gameDirection) {
        // The player has chosen the right direction for his ya
        console.log("Le joueur a fait un ya dans le bon sens");
        _eventsDisplayControllerJs.humanPlayerValidation("Ya");
        _modelJs.changePlayer(_modelJs.currentPlayer);
        setTimeout(()=>{
            (0, _gameControllerJs.virtualPlayerChoice)(_modelJs.currentPlayer);
        }, 2000);
    } else {
        //The player has lost the game
        _eventsDisplayControllerJs.humanPlayerMistakewarning("Ya");
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        (0, _farewellControllerJs.endGamebyDefeat)();
    }
};
const checkIfTheHumanPlayerHasZappedHimself = function(playerZapped) {
    if (playerZapped.numero === _modelJs.currentPlayer.numero) return true;
    else return false;
};
// Function to terminate the game if a human player tries to zap himself
// Two potential occurences :
//   1°) When the human player initiates a zap
//   2°) When a human player is reacting to a zap
const actIfAHumanPlayerHasZappedhimself = function() {
    console.log("Vous ne pouvez pas vous zapper vous-m\xeame");
    _eventsDisplayControllerJs.serviceMessage("Vous ne pouvez pas vous auto-zapper");
    _eventsDisplayControllerJs.humanPlayerMistakewarning("Zap");
    console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
    (0, _zapControllerJs.eraseZapConditions)();
    (0, _farewellControllerJs.endGamebyDefeat)();
};
const checkHumanResponsesToShot = function(keyPressed, type) {
    // We start by  erasing the commands shown to the human player
    (0, _buttonsViewJsDefault.default).clearCommands();
    // Two cases, a shot chosen via a key that is pressed or the name of a player to be zapped that is chosen by clicking on a name.
    if (type === "key") {
        // This function waits for the key that the player has pressed to check if he has lost or if the game can continue;
        if (keyPressed === "h") {
            // The player has chosen to play a hold down => the game direction is changing
            console.log("le joueur fait un hold down");
            _eventsDisplayControllerJs.humanPlayerValidation("Hold Down");
            _modelJs.changeDirectionAfterHoldDown();
            _modelJs.changePlayer(_modelJs.currentPlayer);
            setTimeout(()=>{
                (0, _gameControllerJs.virtualPlayerChoice)(_modelJs.currentPlayer);
            }, 2000);
        } else if (keyPressed === "ArrowLeft") {
            const dir = "left";
            checkDirection(dir);
        } else if (keyPressed === "ArrowRight") {
            const dir = "right";
            checkDirection(dir);
        } else if (keyPressed === "o") {
            console.log("le joueur a fait un honky tonk");
            _eventsDisplayControllerJs.humanPlayerValidation("Honky Tonk");
            setTimeout(()=>{
                (0, _honkyControllerJs.honkyTonkByVirtualPlayer)();
            }, 2000);
        } else if (keyPressed === "a") {
            console.log("le joueur a fait un ahi");
            _eventsDisplayControllerJs.humanPlayerValidation("Ahi");
            _modelJs.changePlayer(_modelJs.currentPlayer, 2);
            setTimeout(()=>{
                (0, _gameControllerJs.virtualPlayerChoice)(_modelJs.currentPlayer);
            }, 2000);
        } else if (keyPressed === "l") {
            console.log("Le joueur a dit 'Je laisse'");
            _eventsDisplayControllerJs.humanPlayerValidation("Je laisse");
            humanReactionToLet();
        // letByVirtualPlayer(model.currentPlayer);
        } else if (keyPressed === "v") {
            console.log("Le joueur dit 'Vade Retro'");
            _eventsDisplayControllerJs.humanPlayerValidation("Vade Retro");
            setTimeout(()=>{
                (0, _vadeRetroControllerJs.vadeRetroByVirtualPlayer)();
            }, 2000);
        } else {
            console.log(`Le joueur a commis une erreur en pressant ${keyPressed}`);
            _eventsDisplayControllerJs.humanTypingMistake(keyPressed);
            console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
            (0, _farewellControllerJs.endGamebyDefeat)();
        }
    } else if (type === "click") {
        console.log(`Vous avez choisi de zapper ${keyPressed}`);
        _eventsDisplayControllerJs.serviceMessage(`Vous avez choisi de zapper ${keyPressed}`);
        // We must record that if the human player initiated the zap, he or she has to be considered as "zapped"
        _modelJs.updateListOfZappedPlayers(_modelJs.currentPlayer);
        const playerZapped = _modelJs.extractPlayer(keyPressed);
        // Guard to prevent a human player frome zapping him or herself
        if (checkIfTheHumanPlayerHasZappedHimself(playerZapped)) {
            actIfAHumanPlayerHasZappedhimself();
            return;
        }
        console.log("test model.currentPlayer", _modelJs.currentPlayer);
        (0, _zapControllerJs.carryOnZapProcess)(playerZapped);
        _modelJs.recordFirstPlayerToZap();
        setTimeout(()=>{
            (0, _zapControllerJs.toZapOrNotToZap)(playerZapped);
        }, 2000);
    }
};
const triggerCommandsPopup = function() {
    // Show the popup if needed
    (0, _buttonsViewJsDefault.default).showCommandsToPlayer();
};
const handleHumanTurnToPlay = function() {
    (0, _playersViewJsDefault.default).highlightActivePlayer(_modelJs.currentPlayer);
    // Offer the human player the possibility to see the various commands
    (0, _buttonsViewJsDefault.default).showShotsCommands();
    (0, _buttonsViewJsDefault.default).handlePlayerResponseToShot(checkHumanResponsesToShot);
};
// This function checks that Houba Houba has been done successfully
const checkHumanResponsesToHonkyTonk = function(keyPressed, playersToHoubaHouba) {
    // We start by  erasing the commands shown to the human player
    (0, _buttonsViewJsDefault.default).clearCommands();
    // First case, the player reacts successfully
    if (keyPressed === "b") {
        console.log("le joueur a bien fait Houba Houba");
        _eventsDisplayControllerJs.humanPlayerValidation("Houba Houba");
        // If both player  managed to Houba Houba
        if (!virtualHouba) {
            console.log(`${playersToHoubaHouba[0].name} & ${playersToHoubaHouba[1].name} ont tous les deux réussi à faire houba houba.`);
            // If both players are succesful at houba houba then the second player shall choose a new player to continue the game
            if (playersToHoubaHouba[1].human) {
                checkHumanDesignationOfANewPlayer("honky");
                // We take advantage of the test to provide the human player with the name of the virtual player that successfully said "Houba Houba"
                _eventsDisplayControllerJs.virtualPlayerNoiseAnnouncement(playersToHoubaHouba[0].name, "Houba Houba");
            } else {
                _eventsDisplayControllerJs.virtualPlayerNoiseAnnouncement(playersToHoubaHouba[1].name, "Houba Houba");
                (0, _honkyControllerJs.relaunchGameAfterHoubaHouba)(playersToHoubaHouba[1]);
            }
        } else if (virtualHouba) {
            // If the virtual player fails to Houba Houba
            console.log(`${playersToHoubaHouba[1].name} has failed to Houba Houba`);
            console.log(`${playersToHoubaHouba[1].name} must go !!`);
            _eventsDisplayControllerJs.virtualPlayerMistakeWarning(playersToHoubaHouba[1].name, "Houba Houba");
            (0, _gameControllerJs.mistakesWereMade)(playersToHoubaHouba[1]);
            return;
        }
    // 2nd case, the player doesn't
    } else {
        console.log("Le joueur a mal fait Houba Houba");
        _eventsDisplayControllerJs.humanPlayerMistakewarning("Houba Houba");
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        (0, _farewellControllerJs.endGamebyDefeat)();
    }
};
const hasTheHumanPlayerSuccesfullyDoneSatanas = function(keyPressed, index) {
    if (index === 0 && keyPressed === "s" || index === 1 && keyPressed === "t" || index === 2 && keyPressed === "n") return true;
};
const checkHumanResponsesToVadeRetro = function(keyPressed) {
    // We start by erasing the commands shown to the human player
    (0, _buttonsViewJsDefault.default).clearCommands();
    // We need to know the position of the humain player in the array of the players who are going to react to Vade Retro
    const index = (0, _vadeRetroControllerJs.playersToSatanas).findIndex((player)=>player.human === true);
    // Let us define if the human player has reacted succesfully
    // first case the player reacts succesfully;
    if (hasTheHumanPlayerSuccesfullyDoneSatanas(keyPressed, index)) {
        console.log("Le joueur a bien r\xe9agi en faisant Sa, Ta ou Nas");
        _eventsDisplayControllerJs.humanPlayerValidation("Sa, Ta ou Nas");
        if (index === 2) // If the human player is to say nas, we then shall ask the player who said ta to choose a player to call
        (0, _vadeRetroControllerJs.relaunchGameAfterVadeRetro)((0, _vadeRetroControllerJs.playersToSatanas)[1]);
        else (0, _vadeRetroControllerJs.checkForSatanas)((0, _vadeRetroControllerJs.playersToSatanas)[index + 1], (0, _vadeRetroControllerJs.sayings)[index + 1], index + 1);
    } else {
        // Case where the player reacted unsuccessfully
        console.log("Le joueur a mal dit 'Sa', 'Ta' ou 'Nas'");
        _eventsDisplayControllerJs.humanPlayerMistakewarning("Sa, Ta ou Nas");
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        (0, _farewellControllerJs.endGamebyDefeat)();
    }
};
const humanResponseToHonkyTonk = function(houba, playersReactingToHonkyTonk) {
    // virtualHouba stores the information wether the virtual player involved
    virtualHouba = houba;
    (0, _buttonsViewJsDefault.default).showHonkyTonkCommands();
    (0, _buttonsViewJsDefault.default).handlePlayerResponseToHonkyTonk(checkHumanResponsesToHonkyTonk, playersReactingToHonkyTonk);
};
const humanResponseToVadeRetro = function(saying) {
    (0, _buttonsViewJsDefault.default).showVadeRetroCommands(saying);
    (0, _buttonsViewJsDefault.default).handlePlayerResponseToVadeRetro(checkHumanResponsesToVadeRetro);
};
const checkHumanDesignationOfANewPlayer = function(shot) {
    (0, _buttonsViewJsDefault.default).showCallNewPlayerCommands();
    (0, _playersViewJsDefault.default).handleHumanChoiceOfANewPlayer((0, _honkyControllerJs.callPlayer), shot);
};
const checkReactionToBeingCalled = function(boolean, noise) {
    (0, _buttonsViewJsDefault.default).clearCommands();
    if (boolean) handleHumanTurnToPlay();
    else {
        console.log(`Le joueur a mal dit ${noise}`);
        _eventsDisplayControllerJs.humanPlayerMistakewarning(noise);
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        (0, _farewellControllerJs.endGamebyDefeat)();
    }
};
const humanReactionToBeingCalledAfterHoubaHouba = function(noise) {
    (0, _buttonsViewJsDefault.default).ShowNameCalledCommands(noise);
    (0, _buttonsViewJsDefault.default).handlePlayerResponseToCall(checkReactionToBeingCalled, noise);
};
const eraseHumanCheck = function() {
    hasTheHumanPlayerTriedToTake = "";
};
const checkHumanReactionToLet = function(key) {
    (0, _buttonsViewJsDefault.default).clearCommands();
    if (key === "p") {
        console.log("Le joueur a bien dit 'Je prends'");
        _eventsDisplayControllerJs.humanPlayerValidation("Je prends");
        // We need to specify that the current player is now the human player (hardcoded for now)
        _modelJs.updateCurrentPlayer(`${_modelJs.humanPlayerName}`);
        console.log("test");
        handleHumanTurnToPlay();
    } else {
        console.log("Le joueur a mal dit 'Je prends'");
        _eventsDisplayControllerJs.humanPlayerMistakewarning("Je prends");
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        (0, _farewellControllerJs.endGamebyDefeat)();
    }
};
const MakeAVirtualPlayerTake = function() {
    (0, _letControllerJs.letByVirtualPlayer)(_modelJs.currentPlayer);
};
const humanReactionToLet = function() {
    (0, _buttonsViewJsDefault.default).showLetCommands();
    const reactionTime = (0, _helpersJs.defineReactionTime)();
    (0, _buttonsViewJsDefault.default).handlePlayerResponseToLet(checkHumanReactionToLet, MakeAVirtualPlayerTake, reactionTime);
};
const humanResponseToZap = function() {
    (0, _buttonsViewJsDefault.default).showZapCommands();
    (0, _playersViewJsDefault.default).handleHumanChoiceOfANewPlayer(checkIfHumanZapGoneWell);
};
const checkIfHumanZapGoneWell = function(name) {
    // Dont show the instructions any more
    (0, _buttonsViewJsDefault.default).clearCommands();
    console.log(`Vous avez choisi de zapper ${name}`);
    _eventsDisplayControllerJs.serviceMessage(`Vous avez choisi de zapper ${name}`);
    // We shall convert the name we got from the click of the player in to an object from the model
    const playerZapped = _modelJs.extractPlayer(name);
    // Guard to prevent a human player frome zapping him or herself
    if (checkIfTheHumanPlayerHasZappedHimself(playerZapped)) {
        actIfAHumanPlayerHasZappedhimself();
        return;
    }
    // We shall check if we are in a last Zap situation and act accordingly
    if ((0, _zapControllerJs.zapCounter) === _modelJs.currentPlayers.lenght - 1) {
        console.log("Tous les joueurs ont \xe9t\xe9 zapp\xe9s !!!");
        _eventsDisplayControllerJs.serviceMessage("\uD83D\uDE49 Tous les joueurs ont \xe9t\xe9 zapp\xe9s !!!");
        (0, _zapControllerJs.lastZap)(_modelJs.currentPlayer, playerZapped);
        return;
    }
    // 2 cases : the chosen player has already benne zapped or not
    if (playerZapped.zapped) {
        console.log(`${name} a déjà été zappé`);
        _eventsDisplayControllerJs.serviceMessage("Vous ne pouvez zapper quelqu'un qui a d\xe9j\xe0 \xe9t\xe9 zapp\xe9");
        _eventsDisplayControllerJs.humanPlayerMistakewarning("Je prends");
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        (0, _zapControllerJs.eraseZapConditions)();
        (0, _farewellControllerJs.endGamebyDefeat)();
    } else {
        console.log(`${name} n'a pas encore été zappé`);
        _eventsDisplayControllerJs.serviceMessage("Vous avez zapp\xe9 quelqu'un qui n'a pas encore \xe9t\xe9 zapp\xe9");
        _eventsDisplayControllerJs.humanPlayerValidation("Zap");
        // We then let the zapped virtual player carry on with the game
        (0, _zapControllerJs.carryOnZapProcess)(playerZapped);
        setTimeout(()=>{
            (0, _zapControllerJs.toZapOrNotToZap)(playerZapped);
        }, 2000);
    }
};

},{"./eventsDisplayController.js":"9p6qn","../model.js":"Y4A21","../views/buttonsView.js":"g7qU8","../views/playersView.js":"5dkxY","./gameController.js":"kqfSP","./honkyController.js":"8kxp2","./vadeRetroController.js":"cT8dF","./letController.js":"3gxsS","./zapController.js":"87MLe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./farewellController.js":"gLEdG","../helpers.js":"hGI1E"}],"g7qU8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class buttonsView {
    constructor(){
        this.commandPanel = document.querySelector(".commands__contextual");
    }
    showShotsCommands() {
        this.commandPanel.innerHTML = "<p>C'est \xe0 votre tour de jouer</p><p>Appuyez sur Entr\xe9e pour d\xe9couvrir les diff\xe9rentes commandes</p>";
    }
    showHonkyTonkCommands() {
        this.commandPanel.innerHTML = "<p>Appuyez sur la touche B pour faire 'Houba Houba'</p>";
    }
    showVadeRetroCommands(saying) {
        this.commandPanel.innerHTML = `<p>Vous devez dire ${saying}</p></br><p>Appuyez sur la touche S pour dire Sa</br>Appuyez sur la touche T pour dire Ta</br>Appuyez sur la touche N pour dire Nas</p>`;
    }
    showCallNewPlayerCommands() {
        this.commandPanel.innerHTML = "<p>Cliquez sur le nom d'un joueur pour lui indiquer que c'est \xe0 lui de continuer \xe0 jouer";
    }
    ShowNameCalledCommands(noise) {
        this.commandPanel.innerHTML = `<p>Appuyez sur D pour dire ${noise}</p>`;
    }
    showLetCommands() {
        this.commandPanel.innerHTML = "<p> Si vous avez envie de prendre : appuyez sur P pour dire 'Je prends'</p><p>Sinon, n'appuyez sur aucune touche</p>";
    }
    showZapCommands() {
        this.commandPanel.innerHTML = "<p>Cliquez sur le nom d'un joueur pour le zapper</p>";
    }
    handlePlayerResponseToHonkyTonk(handler, playersReactingToHonkyTonk) {
        //We want to see if the human player has pressed the right key
        const insideListener = function(event) {
            console.log(event.key);
            handler(event.key, playersReactingToHonkyTonk);
            document.removeEventListener("keydown", insideListener);
        };
        document.addEventListener("keydown", insideListener);
    }
    handlePlayerResponseToVadeRetro(handler) {
        //We want to see if the human player has pressed the right key
        const insideListener = function(event) {
            console.log(event.key);
            console.log("le joueur a press\xe9 la touche :", event.key);
            handler(event.key);
            document.removeEventListener("keydown", insideListener);
        };
        document.addEventListener("keydown", insideListener);
    }
    // Erases the orders given to the player
    clearCommands() {
        this.commandPanel.innerHTML = "";
    }
    // Function to handle the input of the human player regarding which shot he intends to play
    handlePlayerResponseToShot(handler) {
        //We want the key that has has been pressed to go back to the controller
        const insideKeyListener = function(event) {
            // Guard to prevent the function to be triggered if the player only want to see the commands
            if (event.key === "Enter") return;
            console.log("le joueur a press\xe9 la touche :", event.key);
            handler(event.key, "key");
            document.removeEventListener("keydown", insideKeyListener);
            document.querySelector(".wrapper").removeEventListener("click", insideClickListener);
        };
        // We want the name of the player that's been zapped to go back to the controller
        const insideClickListener = function(event) {
            event.preventDefault();
            if (event.target.classList.contains("player")) {
                handler(event.target.dataset.name, "click");
                document.querySelector(".wrapper").removeEventListener("click", insideClickListener);
                document.removeEventListener("keydown", insideKeyListener);
            }
            //If the click is not on the name but on the ball, we still want the name of player to be sent back to the controller
            if (event.target.classList.contains("child")) {
                handler(event.target.parentNode.dataset.name, "click");
                document.querySelector(".wrapper").removeEventListener("click", insideClickListener);
                document.removeEventListener("keydown", insideKeyListener);
            }
        };
        document.addEventListener("keydown", insideKeyListener);
        document.querySelector(".wrapper").addEventListener("click", insideClickListener);
    }
    // This function deals with the reaction of the human player when his name is called after houba houba
    handlePlayerResponseToCall(handler, noise) {
        const insideListener = function(event) {
            // Guard to prevent the function to be triggered if the player only want to see the commands
            if (event.key === "Enter") return;
            if (event.key === "d") {
                console.log("Le joueur a press\xe9 la bonne touche");
                handler(true, noise);
                document.removeEventListener("keydown", insideListener);
            } else {
                console.log("Le joueur n'a pas press\xe9 la bonne touche");
                handler(false, noise);
                document.removeEventListener("keydown", insideListener);
            }
        };
        document.addEventListener("keydown", insideListener);
    }
    handlePlayerResponseToLet(handler1, handler2, reactionTime) {
        console.log("test reaction time", reactionTime);
        // This function handles what happens if the human player presses a key when he or another player has chosen to let
        const insideListener = function(event) {
            // Guard to prevent the function to be triggered if the player only want to see the commands
            if (event.key === "Enter") return;
            console.log(`Le joueur a appuyé sur la touche ${event.key}`);
            handler1(event.key);
            document.removeEventListener("keydown", insideListener);
            // We need to stop the timer so that no other player can carry on playing afterwards
            stopTakeTimer();
        };
        document.addEventListener("keydown", insideListener);
        // We create a timer to trigger the shot of a virtual player in case nobody wants to take
        const TakeTimer = setTimeout(()=>{
            document.removeEventListener("keydown", insideListener);
            handler2();
        }, reactionTime);
        // We need to be able to stop the timer in case the human player chose to take
        const stopTakeTimer = function() {
            clearTimeout(TakeTimer);
        };
    }
    showCommandsToPlayer() {
        // This function makes sure that the popup will not be visible any more when the exit button is clicked on
        const insideInsideListener = function(event) {
            if (event.target.classList.contains("exit-button")) {
                document.querySelector(".popup-instructions").style.display = "none";
                document.removeEventListener("click", insideInsideListener);
            }
        };
        const insideListener = function(event) {
            console.log(`Le joueur a appuyé sur la touche ${event.key}`);
            // If the human player presses enter, he shall be shown the commands
            if (event.key === "Enter") {
                document.querySelector(".popup-instructions").style.display = "flex";
                document.addEventListener("click", insideInsideListener);
            }
        };
        document.addEventListener("keydown", insideListener);
    }
}
exports.default = new buttonsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kxp2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dringManagement", ()=>dringManagement);
parcelHelpers.export(exports, "relaunchGameAfterHoubaHouba", ()=>relaunchGameAfterHoubaHouba);
parcelHelpers.export(exports, "callPlayer", ()=>callPlayer);
parcelHelpers.export(exports, "honkyTonkByVirtualPlayer", ()=>honkyTonkByVirtualPlayer);
var _eventsDisplayController = require("./eventsDisplayController");
var _model = require("../model");
var _gameController = require("./gameController");
var _helpers = require("../helpers");
var _buttonsController = require("./buttonsController");
var _playersView = require("../views/playersView");
var _playersViewDefault = parcelHelpers.interopDefault(_playersView);
var _buttonsView = require("../views/buttonsView");
var _buttonsViewDefault = parcelHelpers.interopDefault(_buttonsView);
"use strict";
// This function will define the players that will have to react to the honky tonk
const WhoWillHoubaHouba = function() {
    return (0, _model.lookForPlayersReactingToHonkyTonk)();
};
const defineNoise = function(shot) {
    if (shot === "honky") return "Dring";
    else if (shot === "vade") return "Je br\xfble.";
};
const dringManagement = function(player, shot) {
    // We must define what the player will have to say depending on the shot currently being played
    const noise = defineNoise(shot);
    // The player dot should be highlighted
    (0, _playersViewDefault.default).highlightActivePlayer(player);
    // We differentiate between the case where a human player should react and the case where a virtual player should react
    if (player.human) {
        console.log(`Vous devez dire "${noise}"`);
        (0, _buttonsController.humanReactionToBeingCalledAfterHoubaHouba)(noise);
    } else // In the case of a virtual player : 2 cases :
    // 1°) The player reacts successfully
    // 2°) The player does not react successfully
    if (!(0, _helpers.hasAPlayerCommitedAMistake)(player, "reaction to honky tonk")) {
        console.log(`${player.name} a réussi à dire ${noise}`);
        // we shall let the human player know what's happening
        _eventsDisplayController.virtualPlayerShotAnnouncement(player.name, noise);
        setTimeout(()=>{
            (0, _gameController.humanOrMachine)();
        }, 3000);
    } else {
        console.log(`${player.name} n'a pas réussi à dire ${noise}`);
        _eventsDisplayController.virtualPlayerMistakeWarning(player.name, noise);
        console.log(`😡😡😡${player.name} est éliminé😡😡😡`);
        (0, _gameController.mistakesWereMade)(player);
    }
};
const relaunchGameAfterHoubaHouba = function(playerToCallANewPlayer) {
    console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);
    _eventsDisplayController.playerHavingToDesignateAnotherPlayerAnnouncement(playerToCallANewPlayer.name);
    // A player is randomly selected
    const newPlayer = (0, _model.chooseRandomPlayer)();
    console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit Houba Houba`);
    _eventsDisplayController.chosenPlayerNameAnnoucement(playerToCallANewPlayer.name, newPlayer.name, "Houba Houba");
    // We then test if the new player has successfully reacted by saying "Dring"
    dringManagement(newPlayer, "honky");
};
const callPlayer = function(playerName, shot) {
    // We erase the order that was shown to players
    (0, _buttonsViewDefault.default).clearCommands();
    // in the model, we set the new current  players
    const newPlayer = (0, _model.updateCurrentPlayer)(playerName);
    console.log(newPlayer.name, "est le joueur qui a \xe9t\xe9 choisi pour continuer le jeu");
    // We shall then check if the chosen player managed to say dring (or 'je brûle' in case of vade retro)
    dringManagement(newPlayer, shot);
};
// This function handles the process of the various reactions of players (virtual or human) to a honky tonk shot.
const reactionsToHonkyTonk = function(playersReactingToHonkyTonk) {
    //Case when one of the player involved is human
    if (playersReactingToHonkyTonk[0].human || playersReactingToHonkyTonk[1].human) // We check that the virtual player has managed to do Houba Houba.
    // hitOrMissHonkyTonk will return a boolean telling us if the virtual player has managed to houba houba.
    (0, _buttonsController.humanResponseToHonkyTonk)((0, _helpers.hitOrMissHonkyTonk)(playersReactingToHonkyTonk.find((player)=>player.human === false), "Houba Houba"), playersReactingToHonkyTonk);
    else {
        // Case where none of the players who have to say houba houba are human
        // houba0 et houba1 are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
        // the booleans are true if a mistake has been committed and false otherwise
        const houba0 = (0, _helpers.hitOrMissHonkyTonk)(playersReactingToHonkyTonk[0], "Houba Houba");
        const houba1 = (0, _helpers.hitOrMissHonkyTonk)(playersReactingToHonkyTonk[1], "Houba Houba");
        if (houba0 && houba1) {
            // If both players are mistaken, they are both eliminated
            (0, _gameController.mistakesWereMade)(playersReactingToHonkyTonk[0]);
            (0, _gameController.mistakesWereMade)(playersReactingToHonkyTonk[1]);
            _eventsDisplayController.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[0].name, "Houba Houba");
            _eventsDisplayController.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[1].name, "Houba Houba");
        } else if (!houba0 && !houba1) {
            // case where both players have successfully houba houba. We must then relauch the game by calling another player
            console.log(`${playersReactingToHonkyTonk[0].name} & ${playersReactingToHonkyTonk[1].name} ont tous les deux réussi à faire Houba Houba `);
            _eventsDisplayController.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[0].name, "Houba Houba");
            _eventsDisplayController.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[1].name, "Houba Houba");
            relaunchGameAfterHoubaHouba(playersReactingToHonkyTonk[1]);
        } else if (houba0 && !houba1) {
            // The second player has been succesful at houba houba but the first has not
            console.log(`${playersReactingToHonkyTonk[1].name} has achieved Houba Houba`);
            _eventsDisplayController.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[0].name, "Houba Houba");
            _eventsDisplayController.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[1].name, "Houba Houba");
            // Since a mistake has been committed, the elimination of the first player to houba houba is triggered
            (0, _gameController.mistakesWereMade)(playersReactingToHonkyTonk[0]);
        } else if (!houba0 && houba1) {
            // The second player has committed a mistake and must be eliminated but the first player managed to do it
            console.log(`${playersReactingToHonkyTonk[0].name} has achieved Houba Houba`);
            _eventsDisplayController.virtualPlayerNoiseAnnouncement(playersReactingToHonkyTonk[0].name, "Houba Houba");
            _eventsDisplayController.virtualPlayerMistakeWarning(playersReactingToHonkyTonk[1].name, "Houba Houba");
            (0, _gameController.mistakesWereMade)(playersReactingToHonkyTonk[1]);
        // The first player has been succesful at houba houba
        }
    }
};
const honkyTonkByVirtualPlayer = function() {
    // First we want to understand who are the players who will have to react to the honky tonk shot
    const playersToHoubaHouba = WhoWillHoubaHouba();
    // Then we check if the virtual players involved managed to do Houba Houba
    reactionsToHonkyTonk(playersToHoubaHouba);
};

},{"./eventsDisplayController":"9p6qn","../model":"Y4A21","./gameController":"kqfSP","../helpers":"hGI1E","./buttonsController":"hwP37","../views/playersView":"5dkxY","../views/buttonsView":"g7qU8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cT8dF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playersToSatanas", ()=>playersToSatanas);
parcelHelpers.export(exports, "sayings", ()=>sayings);
parcelHelpers.export(exports, "relaunchGameAfterVadeRetro", ()=>relaunchGameAfterVadeRetro);
parcelHelpers.export(exports, "checkForSatanas", ()=>checkForSatanas);
parcelHelpers.export(exports, "vadeRetroByVirtualPlayer", ()=>vadeRetroByVirtualPlayer);
var _eventsDisplayController = require("./eventsDisplayController");
var _model = require("../model");
var _helpers = require("../helpers");
var _honkyController = require("./honkyController");
var _gameController = require("./gameController");
var _buttonsController = require("./buttonsController");
"use strict";
let playersToSatanas;
const sayings = [
    "Sa",
    "Ta",
    "Nas"
];
const whoWillSatanas = function() {
    return (0, _model.lookForPlayersReactingToVadeRetro)();
};
const relaunchGameAfterVadeRetro = function(playerToCallANewPlayer) {
    console.log(`${playerToCallANewPlayer.name} doit désormais désigner quelqu'un pour devenir le nouveau joueur`);
    _eventsDisplayController.playerHavingToDesignateAnotherPlayerAnnouncement(playerToCallANewPlayer.name);
    // A player is randomly selected
    const newPlayer = (0, _model.chooseRandomPlayer)();
    console.log(`${playerToCallANewPlayer.name} a appelé ${newPlayer.name} après avoir dit "Ta"`);
    _eventsDisplayController.chosenPlayerNameAnnoucement(playerToCallANewPlayer.name, newPlayer.name, "Ta");
    // We then test if the new player has successfully reacted by saying "Dring"
    (0, _honkyController.dringManagement)(newPlayer, "vade");
};
const checkForSatanas = function(player = playersToSatanas[0], saying = sayings[0], i = 0) {
    // We shall check at each time if the player involved is human or not
    if (player.human) (0, _buttonsController.humanResponseToVadeRetro)(saying);
    else // The parameters of the hitOrMissHonkyTonk functions are booleans that tell us if the virtual player has successfully reacted to the honky tonk situation
    // the booleans are true if a mistake has been committed and false otherwise
    if ((0, _helpers.hitOrMissHonkyTonk)(player, saying)) {
        console.log(`${player.name} n'a pas réussi à faire "${saying}"`);
        _eventsDisplayController.virtualPlayerMistakeWarning(player.name, saying);
        (0, _gameController.mistakesWereMade)(player);
    } else {
        // Case where the player reacted successfully
        console.log(`${player.name} a réussi à faire "${saying}"`);
        _eventsDisplayController.virtualPlayerNoiseAnnouncement(player.name, saying);
        // No need to carry on testing the reactions if 3 people have reacted successfully. We shall then move on
        if (i >= 2) {
            // Two cases : The player who said ta is human or not
            if (playersToSatanas[1].human) // We are now going to take advantage of the fact that we already coded the part where we designate a new player for the konky tonk shot and use it instead od coding something specific
            (0, _buttonsController.checkHumanDesignationOfANewPlayer)("vade");
            else relaunchGameAfterVadeRetro(playersToSatanas[1]);
        } else checkForSatanas(playersToSatanas[i + 1], sayings[i + 1], i + 1);
    }
};
const vadeRetroByVirtualPlayer = function() {
    // First we want to understand who are the players who will have to react to the vade retro shot
    playersToSatanas = whoWillSatanas();
    console.log("\uD83D\uDC41️ Voici les joueurs qui vont devoir faire Sa Ta Nas :", playersToSatanas);
    _eventsDisplayController.serviceMessage(`👁️ Voici les joueurs qui vont devoir dire Sa, Ta et Nas : ${playersToSatanas[0].name}, ${playersToSatanas[1].name} et ${playersToSatanas[2].name}`, "player-change");
    // Then we check if the virtual players involved managed to do Sa/Ta/Nas
    checkForSatanas();
};

},{"./eventsDisplayController":"9p6qn","../model":"Y4A21","../helpers":"hGI1E","./honkyController":"8kxp2","./gameController":"kqfSP","./buttonsController":"hwP37","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gxsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "letByVirtualPlayer", ()=>letByVirtualPlayer);
var _eventsDisplayController = require("./eventsDisplayController");
var _model = require("../model");
var _helpers = require("../helpers");
var _gameController = require("./gameController");
var _buttonsView = require("../views/buttonsView");
var _buttonsViewDefault = parcelHelpers.interopDefault(_buttonsView);
"use strict";
const letByVirtualPlayer = function() {
    // If a virtual player has chosen to take, we need to clear the commands shown to the player
    (0, _buttonsViewDefault.default).clearCommands();
    // Let us notice that chooseRandomPlayer changes the current player in the model
    const newPlayer = (0, _model.chooseAPlayerThatIsNotHuman)();
    console.log(`${newPlayer.name} a décidé de prendre`);
    _eventsDisplayController.virtualPlayerShotAnnouncement(newPlayer.name, "Je prends");
    // TEST POUR SAVOIR SI NEW PLAYER A REUSSI dire je prends
    if ((0, _helpers.hasAPlayerCommitedAMistake)(newPlayer, "take")) {
        console.log(` 😡😡😡 ${newPlayer.name} n'a pas réussi à dire "Je prends" et est éliminé`);
        _eventsDisplayController.virtualPlayerMistakeWarning(newPlayer.name, "Je prends");
        (0, _gameController.mistakesWereMade)();
    }
    setTimeout(()=>{
        (0, _gameController.virtualPlayerChoice)(newPlayer);
    }, 1000);
};

},{"./eventsDisplayController":"9p6qn","../model":"Y4A21","../helpers":"hGI1E","./gameController":"kqfSP","../views/buttonsView":"g7qU8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87MLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zapCounter", ()=>zapCounter);
parcelHelpers.export(exports, "eraseZapConditions", ()=>eraseZapConditions);
parcelHelpers.export(exports, "carryOnZapProcess", ()=>carryOnZapProcess);
parcelHelpers.export(exports, "toZapOrNotToZap", ()=>toZapOrNotToZap);
parcelHelpers.export(exports, "lastZap", ()=>lastZap);
parcelHelpers.export(exports, "zapByVirtualPlayer", ()=>zapByVirtualPlayer);
var _eventsDisplayController = require("./eventsDisplayController");
var _model = require("../model");
var _gameController = require("./gameController");
var _helpers = require("../helpers");
var _playersView = require("../views/playersView");
var _playersViewDefault = parcelHelpers.interopDefault(_playersView);
var _buttonsController = require("./buttonsController");
var _farewellController = require("./farewellController");
"use strict";
let zapCounter = 0;
const eraseZapConditions = function() {
    // reset the zap counter
    zapCounter = 0;
    (0, _model.endOfZap)();
};
const carryOnZapProcess = function(playerZapped) {
    (0, _playersViewDefault.default).highlightActivePlayer(playerZapped);
    (0, _model.updateListOfZappedPlayers)(playerZapped);
    zapCounter++;
    console.log("zapCounter :", zapCounter);
    (0, _model.updateCurrentPlayer)(playerZapped.name);
};
const toZapOrNotToZap = function(playerZapped) {
    // We shall state that the player that's been zapped is now the current player
    console.log("\uD83D\uDC2D\uD83D\uDC2DTest currentPlayer\uD83D\uDC2D\uD83D\uDC2D", (0, _model.currentPlayer));
    const rand = (0, _helpers.randomInt)(0, 100);
    if (rand <= 90) // Case where a player elected to zap another player
    zapByVirtualPlayer(playerZapped);
    else {
        // Case where a player chose to start another round without zapping
        console.log(`${playerZapped.name} dit 'Je prends'`);
        _eventsDisplayController.virtualPlayerShotAnnouncement(playerZapped.name, "Je prends");
        // We shall unzap all players.
        eraseZapConditions();
        // There is a real chance that the player electing not to zap will commit a mistake !!
        if ((0, _helpers.hasAPlayerCommitedAMistake)(playerZapped, "take")) {
            console.log(`${playerZapped.name} n'a pas réussi à dire 'Je prends'`);
            _eventsDisplayController.virtualPlayerMistakeWarning(playerZapped.name, "Je prends");
            console.log(`${playerZapped.name} est éliminé`);
            (0, _gameController.mistakesWereMade)(playerZapped);
        } else // Case where no mistake has been committed
        // The second parameter is to make it impossible for a player to zap after having said 'Je prends'
        (0, _gameController.virtualPlayerChoice)(playerZapped, false);
    }
};
const lastZap = function(player, playerZapped) {
    if (playerZapped.numero === (0, _model.playerInitiatingAZap).numero) {
        // Case where the player manages to zap the first player ta have zapped
        console.log(`${player.name} a réussi à zapper le premier joueur à avoir zappé : ${(0, _model.playerInitiatingAZap).name}`);
        console.log(`C'est donc à ${(0, _model.playerInitiatingAZap).name} de reprendre le jeu`);
        _eventsDisplayController.lastZapOkAnnouncement(player.name, (0, _model.playerInitiatingAZap).name);
        // Back to a normal round
        (0, _model.updateCurrentPlayer)(playerZapped.name);
        (0, _gameController.humanOrMachine)();
    } else {
        // Case where the player fails to zap the first player to have zapped
        console.log(`${player.name} n'a pas réussi à zapper le premier joueur à avoir zappé : ${(0, _model.playerInitiatingAZap).name} puisqu'il a zappé ${playerZapped.name}`);
        _eventsDisplayController.lastZapFailAnnouncement(player.name, (0, _model.playerInitiatingAZap).name, playerZapped.name);
        console.log(`${player.name} est donc éliminé`);
        // We shall erase  all zap parameters.
        eraseZapConditions();
        // Since this function handles all lastZap situations for human or virtual players, we should differentiate depending on the nature of the player
        if (player.human) (0, _farewellController.endGamebyDefeat)();
        else (0, _gameController.mistakesWereMade)(player);
    }
};
const humanZap = function(playerZapped) {
    console.log("playerZapped humanZap:", playerZapped);
    carryOnZapProcess(playerZapped);
    setTimeout(()=>{
        (0, _buttonsController.humanResponseToZap)();
    }, 2000);
};
const zapByVirtualPlayer = function(player) {
    // The presence of a parameter allows us to make sure that a player will not zap him or herself
    // chooseRandomPlayer updates the current player in the model
    const playerZapped = (0, _model.chooseRandomPlayer)(player);
    // Guard function to handle the situation where everyone has previously been zapped the last zap situation;
    if (zapCounter === (0, _model.currentPlayers).length - 1) {
        console.log("Tous les joueurs ont \xe9t\xe9 zapp\xe9s !!!");
        _eventsDisplayController.serviceMessage("\uD83D\uDE49 Tous les joueurs ont \xe9t\xe9 zapp\xe9s !!!");
        lastZap(player, playerZapped);
        return;
    }
    console.log("\uD83D\uDC39\uD83D\uDC39 player zapping \uD83D\uDC39\uD83D\uDC39 :", player.name, "\uD83D\uDC39\uD83D\uDC39 player zapped \uD83D\uDC39\uD83D\uDC39 :", playerZapped.name);
    _eventsDisplayController.zapAnnouncement(player.name, playerZapped.name);
    // Guard function to handle a situation in which someone who had previously been zapped is zapped again
    if (playerZapped.zapped) {
        console.log(`${playerZapped.name} a été zappé par ${player.name} alors qu'il avait déjà été zappé`);
        _eventsDisplayController.zapFailAnnouncement(playerZapped.name, player.name);
        console.log(`${player.name} est donc éliminé`);
        // We shall erase  all zap parameters.
        eraseZapConditions();
        (0, _gameController.mistakesWereMade)(player);
        return;
    }
    // case where the zapped player is human
    if (playerZapped.human) {
        humanZap(playerZapped);
        return;
    }
    carryOnZapProcess(playerZapped);
    setTimeout(()=>{
        toZapOrNotToZap(playerZapped);
    }, 2000);
};

},{"./eventsDisplayController":"9p6qn","../model":"Y4A21","./gameController":"kqfSP","../helpers":"hGI1E","../views/playersView":"5dkxY","./buttonsController":"hwP37","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./farewellController":"gLEdG"}],"gLEdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endGamebyDefeat", ()=>endGamebyDefeat);
parcelHelpers.export(exports, "endGameByVictory", ()=>endGameByVictory);
parcelHelpers.export(exports, "startAgain", ()=>startAgain);
var _farewellView = require("../views/farewellView");
var _farewellViewDefault = parcelHelpers.interopDefault(_farewellView);
var _gameController = require("./gameController");
const endGamebyDefeat = function() {
    (0, _farewellViewDefault.default).showDefeatPopup();
    (0, _farewellViewDefault.default).handleStartAgainDecision(startAgain);
};
const endGameByVictory = function() {
    (0, _farewellViewDefault.default).showVictoryPopup();
    (0, _farewellViewDefault.default).handleStartAgainDecision(startAgain);
};
const startAgain = function() {
    console.log("trig appui sur le bouton 'Start Again'");
    (0, _gameController.initializeGame)();
};

},{"../views/farewellView":"4WVmU","./gameController":"kqfSP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WVmU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class farewellView {
    constructor(){
        this.defeatPopup = document.querySelector(".popup-endgame--defeat");
        this.victoryPopup = document.querySelector(".popup-endgame--victory");
        this.overlay = document.querySelector(".overlay");
        this.handleClick = this.handleClick.bind(this);
    }
    addOverlay() {
        this.overlay.style.display = "flex";
    }
    removeOverlay() {
        this.overlay.style.display = "none";
    }
    showDefeatPopup() {
        this.defeatPopup.style.display = "flex";
        this.addOverlay();
    }
    hideDefeatPopup() {
        this.defeatPopup.style.display = "none";
        this.removeOverlay();
    }
    showVictoryPopup() {
        this.victoryPopup.style.display = "flex";
        this.addOverlay();
    }
    hideVictoryPopup() {
        this.victoryPopup.style.display = "none";
        this.removeOverlay();
    }
    handleClick(event, handler) {
        console.log("event target", event.target);
        if (event.target.classList.contains("start-again-button")) {
            console.log("\uD83E\uDD84\uD83E\uDD84\uD83E\uDD84 Le bouton a \xe9t\xe9 press\xe9");
            // We want to close the right popup
            if (event.target.id === "start-again-button-after-defeat") this.hideDefeatPopup();
            if (event.target.id === "start-again-button-after-victory") this.hideVictoryPopup();
            document.removeEventListener("click", this.insideListener);
            handler();
        }
    }
    handleStartAgainDecision(handler) {
        this.insideListener = (event)=>this.handleClick(event, handler);
        document.addEventListener("click", this.insideListener);
    // by clicking on a button, the human player will start another game.
    }
    StartAgainDecisionHandled() {
        console.log("trig remover event listener");
    }
}
exports.default = new farewellView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kga6f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class welcomeView {
    waitForStart(handler) {
        // We do not want the form to be emptied is someone presses enter
        const preventSubmissionByPressingEnter = function(event) {
            if (event.key === "Enter") event.preventDefault();
        };
        const insideListener = function() {
            const humanPlayerName = document.querySelector(".form__input").value;
            // Guard to check that a name has actually been typed
            if (humanPlayerName === "") {
                alert("On t'a demand\xe9 d'\xe9crire ton nom, abruti !!");
                return;
            }
            // Send the name back to the controller for the game to start with this information
            handler(humanPlayerName);
            //Hide the welcome popup
            document.querySelector(".popup-welcome").style.display = "none";
            document.querySelector(".start__button").removeEventListener("click", insideListener);
            document.querySelector(".form").removeEventListener("keydown", preventSubmissionByPressingEnter);
        };
        document.querySelector(".form").addEventListener("keydown", preventSubmissionByPressingEnter);
        document.querySelector(".start__button").addEventListener("click", insideListener);
    }
}
exports.default = new welcomeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hF8lp","igcvL"], "igcvL", "parcelRequire2638")

//# sourceMappingURL=index.5baa4167.js.map
