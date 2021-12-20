# Bad practices

### Supporting "string-leans"

Meaning that the first 2 should lead to the exact same result:
```html
<input :isDisabled="false">
<input isDisabled="false">
<input isDisabled="'false'"> ❌ not supported tho!
```

Even if it may be some QoL for the end user to remember to put a `:`, I think that it is super bad on a lot of various things at the same time.

## ⚠️ Dangerous things to avoid
- be careful of margins/paddings when working with your components, try to apply them on the outside to not face some issues later on (need to overwrite the default styles of the custom component)
