# How To Install

To install simply run `npm install @ph9214/emoji_string_split_js`

# How To Use

Demo code

```javascript
let split = require("@ph9214/emoji_string_split_js")

let h = "Hello Gamers"
let s = split.splitE6(h) // ['H', 'e', 'l', 'l', 'o', ' ', 'G', 'a', 'm', 'e', 'r', s']
let u = split.assembleE6(s) // "Hello Gamers"
let check = (u === h) // True
console.log( s, u, check )
```

# What you get

Avalible methods are .splitE6 which splits a string containing emojis and .assembleE6 which combines them back into a normal string reverting the change.