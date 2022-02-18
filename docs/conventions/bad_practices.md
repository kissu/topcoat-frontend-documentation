# 💀 Bad practices

### Supporting "string-leans"

Meaning that the first 2 should lead to the exact same result:
```html
<input :isDisabled="false">
<input isDisabled="false">
<input isDisabled="'false'"> ❌ not supported tho!
```

Even if it may be some QoL for the end user to remember to put a `:`, I think that it is super bad on a lot of various things at the same time.

---
Still, this one was achieved thanks to some hacky mixin, it works as following:
- if we have a prop starting with `is`, `can`, `has` or `show` (case sensitive), it will have a stringlean counterpart
- example: `isRounded` (Boolean + String) would generate a computed property named `stringleanIsRounded`
- this will **NOT** be available in the devtools because it's being plugged to the Vue instance later on (thanks to `Object.defineProperty`)
- the programatically generated computed prop **IS** reactive
- it's globally available since it's in `commonMixin.js` so no need to worry about it, only to write the proper prefix
- the method checking if the string is a valid boolean is named `computeStringlean` and available in `/utils/helpers.js`
- please double check that a stringlean initial prop (eg: `isRounded`) is used only once, in the `props` object definition, everywhere else it should be using it's stringlean counterpart

The related SO question is [available here](https://stackoverflow.com/q/71111571/8816585).

## ⚠️ Dangerous things to avoid
- be careful of margins/paddings when working with your components, try to apply them on the outside to not face some issues later on (need to overwrite the default styles of the custom component)
- be careful of not mapping the entirety of Tailwind inside of our `.vue` files, since a user can simply pass down any CSS that he'd like. More details [on Slack](https://topcoatdata.slack.com/archives/C0292MG185B/p1640771650032400?thread_ts=1640771575.032300&cid=C0292MG185B).
