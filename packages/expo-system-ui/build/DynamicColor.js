import { Appearance } from 'react-native';
import ExpoSystemUI from './ExpoSystemUI';
function NativeDynamicColor(name, scheme) {
    if (process.env.EXPO_OS === 'android') {
        return ExpoSystemUI.DynamicColor(name, scheme);
    }
    return null;
}
export function DynamicColor(name) {
    const scheme = Appearance.getColorScheme();
    return NativeDynamicColor(name, scheme ?? 'unspecified');
}
//# sourceMappingURL=DynamicColor.js.map