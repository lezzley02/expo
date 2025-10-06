"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentGlobalErrorOverlay = presentGlobalErrorOverlay;
exports.dismissGlobalErrorOverlay = dismissGlobalErrorOverlay;
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const LogBoxData = __importStar(require("./Data/LogBoxData"));
const ContextPlatform_1 = require("./ContextPlatform");
const ContextActions_1 = require("./ContextActions");
let currentRoot = null;
function presentGlobalErrorOverlay() {
    if (currentRoot) {
        return;
    }
    const { LogBoxInspectorContainer } = require('./ErrorOverlay');
    const ErrorOverlay = LogBoxData.withSubscription((0, ContextPlatform_1.withRuntimePlatform)((0, ContextActions_1.withActions)(LogBoxInspectorContainer, {
        onMinimize: () => {
            LogBoxData.setSelectedLog(-1);
            LogBoxData.setSelectedLog(-1);
        },
    }), { platform: process.env.EXPO_OS ?? 'web' }));
    // Create a new div with ID `error-overlay` element and render LogBoxInspector into it.
    const div = document.createElement('div');
    div.id = 'error-overlay';
    document.body.appendChild(div);
    const shadowRoot = div.attachShadow({ mode: 'open' });
    document.querySelectorAll('style').forEach(styleEl => {
        const id = styleEl.id || 'unknown';
        const moduleName = styleEl.getAttribute('data-expo-css-hmr');
        const isLogBoxStyle = moduleName && moduleName.includes('expo_log_box');
        const isReactNativeStyle = id === 'react-native-stylesheet';
        if (isLogBoxStyle || isReactNativeStyle) {
            shadowRoot.appendChild(styleEl.cloneNode(true));
        }
    });
    const shadowContainer = document.createElement('div');
    shadowRoot.appendChild(shadowContainer);
    currentRoot = client_1.default.createRoot(shadowContainer);
    currentRoot.render(react_1.default.createElement(ErrorOverlay));
}
function dismissGlobalErrorOverlay() {
    // Remove div with ID `error-overlay`
    if (currentRoot) {
        currentRoot.unmount();
        currentRoot = null;
    }
    const div = document.getElementById('error-overlay');
    div?.remove();
}
