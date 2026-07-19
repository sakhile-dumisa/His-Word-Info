const _20jmljzvesp = require('../dictionary/carousel.json');
const _1k1otkyn37q = require('../dictionary/faq.json');
const _21ni9wtn9dc = require('../dictionary/footer.json');
const _1dmp0u6n5rz = require('../dictionary/header.json');
const _18ldqbic9lq = require('../dictionary/index.json');
const _1chycdx10n2 = require('../dictionary/privacy-policy.json');
const _28tqfqusf7o = require('../dictionary/terms-of-use.json');

const dictionaries = {
  "carousel": _20jmljzvesp,
  "faq": _1k1otkyn37q,
  "footer": _21ni9wtn9dc,
  "header": _1dmp0u6n5rz,
  "index": _18ldqbic9lq,
  "privacy-policy": _1chycdx10n2,
  "terms-of-use": _28tqfqusf7o
};
const getDictionaries = () => dictionaries;

module.exports.getDictionaries = getDictionaries;
module.exports = dictionaries;
