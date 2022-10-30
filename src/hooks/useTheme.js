import { useCallback, useEffect, useState } from 'react';
import { storage } from '../classes/Storage';

const THEME_KEY = 'theme';

export function useTheme() {
    console.log(storage.get(THEME_KEY));
    const [theme, setTheme] = useState(storage.get(THEME_KEY)?.theme);
    if (!theme) {
        setTheme('light');
    }
    useEffect(() => {
        if (!theme) return;
        document.getElementById('root').setAttribute('data-theme', theme);
        storage.set(THEME_KEY, {
            theme,
        });
    }, [theme]);
    console.log('theme', theme);
    return { theme, setTheme };
}
