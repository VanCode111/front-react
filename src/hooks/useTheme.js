import { storage } from '../classes/Storage';

const THEME_KEY = 'theme';

export function useTheme() {
    const theme = storage.get(THEME_KEY);
    if (!theme) {
        storage.set(THEME_KEY, 'white');
    }

    document.getElementById('root').setAttribute('data-theme', theme);
}
