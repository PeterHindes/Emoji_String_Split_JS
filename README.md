### *Split emoji strings, including compound emoji such as 👩🏽‍🚀*

# Why You Need It

The .split function native to javascript does not understand compound emojis. So it will work with ``"Hello World ❓"`` but not ``"Hello World 👩🏽‍🚀"``

# How To Install

To install simply run `npm install @ph9214/emoji_string_split_js`

# How To Use

Demo code

```javascript
let split = require("@ph9214/emoji_string_split_js")

let h = "Hello World 👩🏽‍🚀"
let s = h.split("") // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r','l', 'd', ' ', '\ud83d', '\udc69', '\ud83c', '\udffd', '‍', '\ud83d', '\ude80']
let sn = split.splitE6(h) // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', ' ', '👩🏽‍🚀' ]
let sanity = (s === sn) // false (would be true if js split worked properly)
let un = split.assembleE6(s) // "Hello World 👩🏽‍🚀"
let check = (un === h) // True
console.log( s, sn, un, check, sanity )
```

# What you get

Avalible methods are ``.splitE6`` which splits a string containing emojis and ``.assembleE6`` which combines them back into a normal string reverting the change.