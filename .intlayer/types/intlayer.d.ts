import "intlayer";
import _1bxnjw24iz3 from './carousel.ts';
import _m8ume60x4r from './faq.ts';
import _27vhy2491p4 from './footer.ts';
import _w86j9qrbme from './header.ts';
import _21bicsbovdx from './index.ts';
import _xhvjpmbezy from './privacy-policy.ts';
import _9mp30moxyt from './terms-of-use.ts';

declare module 'intlayer' {
  interface __DictionaryRegistry {
    "carousel": typeof _1bxnjw24iz3;
    "faq": typeof _m8ume60x4r;
    "footer": typeof _27vhy2491p4;
    "header": typeof _w86j9qrbme;
    "index": typeof _21bicsbovdx;
    "privacy-policy": typeof _xhvjpmbezy;
    "terms-of-use": typeof _9mp30moxyt;
  }

  interface __DeclaredLocalesRegistry {
    "en": 1;
    "zu": 1;
  }

  interface __RequiredLocalesRegistry {
    "en": 1;
    "zu": 1;
  }

  interface __SchemaRegistry {

  }

  interface __StrictModeRegistry { mode: 'inclusive' }

  interface __EditorRegistry { enabled : false }

  interface __RoutingRegistry { mode: 'prefix-no-default'; defaultLocale: 'en' }
}
