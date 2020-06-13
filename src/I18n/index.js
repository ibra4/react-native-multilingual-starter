import I18n from 'react-native-i18n';
import en from './locales/en';
import ar from './locales/ar';

I18n.fallbacks = false;

I18n.translations = {
    en,
    ar
};

export default I18n;