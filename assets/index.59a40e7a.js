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
})({"8UT0b":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
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

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "humanOrMachine", ()=>humanOrMachine);
var _model = require("./model");
var _playersView = require("./views/playersView");
var _playersViewDefault = parcelHelpers.interopDefault(_playersView);
var _helpers = require("./helpers");
var _buttonsController = require("./controllers/buttonsController");
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
    // Select randomly the direction towards which the game will start
    _model.chooseDirectionForFirstYa();
    // Launch the game with a ya
    // Change the console log by a graphic representation in a view in the future
    console.log(`${firstPlayer.name} commence le jeu en faisant un ya vers la ${_model.gameDirection}`);
    _model.changePlayer(firstPlayer);
};
const mistakesWereMade = function(player = _model.currentPlayer) {
    // What happens if a player makes a mistake ?
    console.log(`${player.name} has commited a mistake and must leave the game`);
    // Get rid of the player that has commited a mistake
    _model.updateCurrentPlayers(player);
    // Guard function to end the game if only two players have not been eliminated
    if (_model.currentPlayers.length === 2) {
        console.log(`Il n'y a plus que deux joueurs : ${currentPlayers[0].name} et ${currentPlayers[1].name} donc le jeu est fini`);
        return;
    }
    //We wait 4 seconds before re-starting the game
    setTimeout(()=>{
        startGame();
        humanOrMachine();
    }, 4000);
};
// This function will make the virtual player chooe between different shots depending on the players profile and then handles the various actions that will follow.
const virtualPlayerChoice = function(player) {
    // Define a random number to help choose an option
    const randomNumber = (0, _helpers.randomInt)(0, (0, _helpers.defineMax)(player));
    console.log(`${player.name} is ${player.riskProfile} and got ${randomNumber} as a random number`);
    // Depending on this random number, we then select a shot for the virtual player to play
    if (randomNumber <= 3) {
        console.log(`${player.name} has chosen to hold down`);
        _model.changeDirectionAfterHoldDown();
        // Guard to stop the game if a mistake has been committed
        if ((0, _helpers.hasAPlayerCommitedAMistake)(player, "hold down")) {
            console.log(` 😡😡😡 ${player.name} has failed while trying to hold down. ${player.name} is eliminated 😡😡😡`);
            mistakesWereMade();
            return;
        }
        _model.changePlayer(player);
    } else if (randomNumber > 3 && randomNumber <= 6) {
        console.log(`${player.name} has chosen to honky tonk`);
        return;
    } else {
        console.log(`${player.name} has chosen to ya`);
        // Guard to stop the game if a mistake has been committed
        if ((0, _helpers.hasAPlayerCommitedAMistake)(player, "ya")) {
            console.log(`😡😡😡 ${player.name} has failed while trying to ya. ${player.name} is eliminated 😡😡😡`);
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
        (0, _buttonsController.handleHumanTurnToPlay)();
    } else {
        console.log(`C'est au tour de ${_model.currentPlayer.name} de jouer. Que va-t-il se passer ?`);
        // if the player is virtual, then it automatically plays its turn
        (0, _playersViewDefault.default).highlightActivePlayer(_model.currentPlayer);
        // Make the virtual player decide which shot he is going to play
        virtualPlayerChoice(_model.currentPlayer);
    }
};
const initializeGame = function() {
    _model.createInitialListOfPlayers();
    // The function to create the initial list of players is separated from startGame() so that we can use said function to restart a game after an elimination without re-creating a whole new array of players
    startGame();
    humanOrMachine();
};
initializeGame();

},{"./model":"Y4A21","./views/playersView":"5dkxY","./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./controllers/buttonsController":"hwP37"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentPlayers", ()=>currentPlayers);
parcelHelpers.export(exports, "currentPlayer", ()=>currentPlayer);
parcelHelpers.export(exports, "gameDirection", ()=>gameDirection);
parcelHelpers.export(exports, "createInitialListOfPlayers", ()=>createInitialListOfPlayers);
parcelHelpers.export(exports, "chooseFirstPlayer", ()=>chooseFirstPlayer);
parcelHelpers.export(exports, "chooseDirectionForFirstYa", ()=>chooseDirectionForFirstYa);
parcelHelpers.export(exports, "updateCurrentPlayers", ()=>updateCurrentPlayers);
parcelHelpers.export(exports, "changePlayer", ()=>changePlayer);
parcelHelpers.export(exports, "isHumanPlayerInvolved", ()=>isHumanPlayerInvolved);
parcelHelpers.export(exports, "changeDirectionAfterHoldDown", ()=>changeDirectionAfterHoldDown);
var _helpers = require("./helpers");
"use strict";
// const players = [
//   { numero: 1, name: "Camille", human: true },
//   { numero: 2, name: "Patrick", riskProfile: "bold", skill: "low", human: false },
//   { numero: 3, name: "Jean-Claude", riskProfile: "cautious", skill: "low", human: false },
//   { numero: 4, name: "Claudine", riskProfile: "bold", skill: "average", human: false },
//   { numero: 5, name: "Martine", riskProfile: "average", skill: "average", human: false },
//   { numero: 6, name: "Michel", riskProfile: "average", skill: "high", human: false },
// ];
const players = [
    {
        numero: 1,
        name: "Camille",
        human: true
    },
    {
        numero: 2,
        name: "Patrick",
        riskProfile: "bold",
        skill: "high",
        human: false
    },
    {
        numero: 3,
        name: "Jean-Claude",
        riskProfile: "cautious",
        skill: "high",
        human: false
    },
    {
        numero: 4,
        name: "Claudine",
        riskProfile: "bold",
        skill: "high",
        human: false
    },
    {
        numero: 5,
        name: "Martine",
        riskProfile: "average",
        skill: "high",
        human: false
    },
    {
        numero: 6,
        name: "Michel",
        riskProfile: "average",
        skill: "high",
        human: false
    }
];
let currentPlayers;
let currentPlayer;
let gameDirection;
const createInitialListOfPlayers = function() {
    currentPlayers = players;
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
const changePlayer = function(player) {
    const indexOfCurrentPlayer = currentPlayers.indexOf(player);
    if (gameDirection === "left") {
        if (indexOfCurrentPlayer === 0) {
            console.log("on repart \xe0 la fin de l'array");
            currentPlayer = currentPlayers[currentPlayers.length - 1];
        } else {
            console.log("le tour passe au joueur \xe0 gauche");
            currentPlayer = currentPlayers[indexOfCurrentPlayer - 1];
        }
        console.log("joueur actuel apr\xe8s changement:", currentPlayer);
    }
    if (gameDirection === "right") {
        if (indexOfCurrentPlayer === currentPlayers.length - 1) {
            console.log("on repart au d\xe9but de l'array");
            currentPlayer = currentPlayers[0];
        } else {
            console.log("le tour passe au joueur \xe0 droite");
            currentPlayer = currentPlayers[indexOfCurrentPlayer + 1];
        }
        console.log("joueur actuel apr\xe8s changement:", currentPlayer.name, "||", "Is current player human ?", currentPlayer.human);
    }
};
const isHumanPlayerInvolved = function() {
    if (currentPlayer.human) return true;
};
const changeDirectionAfterHoldDown = function() {
    // We change the direction of the game
    gameDirection === "left" ? gameDirection = "right" : gameDirection = "left";
    console.log("Game direction is now :", gameDirection);
};

},{"./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomInt", ()=>randomInt);
parcelHelpers.export(exports, "defineMax", ()=>defineMax);
parcelHelpers.export(exports, "defineRandomNumberToGenerateMistakeChance", ()=>defineRandomNumberToGenerateMistakeChance);
parcelHelpers.export(exports, "DefinePlayersReactingToHonkyTonkInHelper", ()=>DefinePlayersReactingToHonkyTonkInHelper);
parcelHelpers.export(exports, "hasAPlayerCommitedAMistake", ()=>hasAPlayerCommitedAMistake);
const randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
};
const defineMax = function(currentPlayer1) {
    if (currentPlayer1.riskProfile === "cautious") return 20;
    if (currentPlayer1.riskProfile === "average") return 15;
    if (currentPlayer1.riskProfile === "bold") return 10;
};
const defineRandomNumberToGenerateMistakeChance = function(shotPlayed1, currentPlayer1) {
    if (shotPlayed1 === "ya") {
        if (currentPlayer1.skill === "low") return 80;
        else if (currentPlayer1.skill === "average") return 40;
    } else if (currentPlayer1.skill === "high") return 21;
    if (shotPlayed1 === "hold down") {
        if (currentPlayer1.skill === "low") return 90;
        else if (currentPlayer1.skill === "average") return 45;
    } else if (currentPlayer1.skill === "high") return 25;
    if (shotPlayed1 === "honky tonk") {
        if (currentPlayer1.skill === "low") return 195;
        else if (currentPlayer1.skill === "average") return 60;
    } else if (currentPlayer1.skill === "high") return 25;
    if (shotPlayed1 === "reaction to honky tonk") {
        if (currentPlayer1.skill === "low") return 125;
        else if (currentPlayer1.skill === "average") return 50;
    } else if (currentPlayer1.skill === "high") return 22;
};
const DefinePlayersReactingToHonkyTonkInHelper = function(indexOfCurrentPlayer, currentPlayers, gameDirection) {
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
const hasAPlayerCommitedAMistake = function(player = currentPlayer, shot = shotPlayed) {
    const max = defineRandomNumberToGenerateMistakeChance(shot, player);
    const rand = randomInt(0, max);
    console.log(`Pour le % d'erreur, ${player.name} a obtenu ${rand} comme nombre aléatoire`);
    if (rand > 20) return true;
    else return false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"5dkxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class playersView {
    _playerGrid = "";
    highlightActivePlayer(currentPlayer) {
        document.querySelectorAll(".player__ball").forEach((div)=>{
            div.classList.remove("active");
        });
        document.querySelector(`.player__ball--${currentPlayer.numero}`).classList.add("active");
    }
    renderPlayers(currentPlayers) {
        this._playerGrid = document.querySelector(".wrapper");
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
    handleHumanChoiceOfANewPlayer(handler) {
        //We want the human player to click on the new player with which he want to continue the game
        // We then want this view to return the name of the player who should carry on playing to the controller
        const insideListener = function(event) {
            event.preventDefault();
            if (event.target.classList.contains("player")) {
                handler(event.target.dataset.name);
                document.querySelector(".wrapper").removeEventListener("click", insideListener);
            }
            //If the click is not on the name but on the ball, we still want the name of player to be sent back to the controller
            if (event.target.classList.contains("child")) {
                handler(event.target.parentNode.dataset.name);
                document.querySelector(".wrapper").removeEventListener("click", insideListener);
            }
        };
        document.querySelector(".wrapper").addEventListener("click", insideListener);
    }
}
exports.default = new playersView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwP37":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleHumanTurnToPlay", ()=>handleHumanTurnToPlay);
var _modelJs = require("../model.js");
var _buttonsView = require("../views/buttonsView");
var _buttonsViewDefault = parcelHelpers.interopDefault(_buttonsView);
var _app = require("../app");
"use strict";
const checkHumanResponsesToShot = function(keyPressed) {
    // We start by  erasing the commands shown to the human player
    (0, _buttonsViewDefault.default).clearCommands();
    // This function waits for the key that the player has pressed to check if he has lost or if the game can continue;
    if (keyPressed === "h") {
        // The player has chosen to play a hold down => the game direction is changing
        console.log("le joueur fait un hold down");
        _modelJs.changeDirectionAfterHoldDown();
        _modelJs.changePlayer(_modelJs.currentPlayer);
        (0, _app.humanOrMachine)();
        return;
    }
    if (keyPressed === _modelJs.gameDirection) {
        // The player has chosen the right direction for his ya
        console.log("Le joueur a fait un ya dans le bon sens");
        _modelJs.changePlayer(_modelJs.currentPlayer);
        (0, _app.humanOrMachine)();
        return;
    } else {
        //The player has lost the game
        console.log("C'est la lose !!! \uD83D\uDE35‍\uD83D\uDCAB");
        return;
    }
};
const handleHumanTurnToPlay = function() {
    (0, _buttonsViewDefault.default).showShotsCommands();
    (0, _buttonsViewDefault.default).handlePlayerResponseToShot(checkHumanResponsesToShot);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../app":"8lRBv","../views/buttonsView":"g7qU8","../model.js":"Y4A21"}],"g7qU8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class buttonsView {
    _commandPanel = document.querySelector(".commands");
    showShotsCommands() {
        this._commandPanel.innerHTML = "<p>Appuyez sur la fl\xe8che qui va dans le sens du jeu sur votre clavier</p><p>Ou appuyez sur la touche H pour faire un 'Hold Down'</p><p>Ou appuyez sur truc pour faire Honky Tonk";
    }
    showHonkyTonkCommands() {
        this._commandPanel.innerHTML = "<p>Appuyez sur la touche B pour faire 'Houba Houba'</p>";
    }
    showCallNewPlayerCommands() {
        this._commandPanel.innerHTML = "<p>Cliquez sur le nom d'un joueur pour lui indiquer que c'est \xe0 lui de continuer \xe0 jouer";
    }
    handlePlayerResponseToHonkyTonk(handler) {
        //We want to see if the human player has pressed the right key
        const insideListener = function(event) {
            console.log(event.key);
            handler(event.key);
            document.removeEventListener("keydown", insideListener);
        };
        document.addEventListener("keydown", insideListener);
    }
    clearCommands() {
        this._commandPanel.innerHTML = "";
    }
    handlePlayerResponseToShot(handler) {
        //We want the key that has has been pressed to go back to the controller
        console.log("handlePlayerResponseToYa triggered");
        const insideListener = function(event) {
            if (event.key === "ArrowLeft") {
                console.log(event.key);
                handler("left");
                document.removeEventListener("keydown", insideListener);
            }
            if (event.key === "ArrowRight") {
                console.log(event.key);
                handler("right");
                document.removeEventListener("keydown", insideListener);
            }
            if (event.key === "h") {
                console.log(event.key);
                handler("h");
                document.removeEventListener("keydown", insideListener);
            }
        };
        document.addEventListener("keydown", insideListener);
    }
}
exports.default = new buttonsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8UT0b","8lRBv"], "8lRBv", "parcelRequire2638")

//# sourceMappingURL=index.59a40e7a.js.map
