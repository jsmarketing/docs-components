import {StoryFn} from '@storybook/addons';
import {radios} from '@storybook/addon-knobs';
import {Theme} from '../../models';

export function getThemeSelector() {
    const label = 'Theme';
    const options = {
        Light: Theme.Light,
        Dark: Theme.Dark,
    };
    const defaultValue = Theme.Dark;

    return radios(label, options, defaultValue);
}

export default function withTheme(story: StoryFn) {
    const theme = getThemeSelector();
    document.body.classList.add('yc-root');
    document.body.classList.toggle('yc-root_theme_light', theme === 'light');
    document.body.classList.toggle('yc-root_theme_dark', theme === 'dark');

    return story();
}
