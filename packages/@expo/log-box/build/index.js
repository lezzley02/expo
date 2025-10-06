"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorToast = useErrorToast;
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
if (process.env.NODE_ENV === 'development' && process.env.EXPO_OS === 'web') {
    // Stack traces are big with React Navigation
    require('./LogBox').default.install();
}
let currentRoot = null;
let isErrorToastInstalled = false;
function useErrorToast() {
    if (process.env.NODE_ENV === 'development' && process.env.EXPO_OS === 'web') {
        if (isErrorToastInstalled) {
            return undefined;
        }
        const ErrorToast = require('./ErrorToast')
            .default;
        // Create a new div with ID `error-toast` element and render ErrorToast into it.
        const div = document.createElement('div');
        div.id = 'error-toast';
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
        currentRoot.render(react_1.default.createElement(ErrorToast));
    }
}
