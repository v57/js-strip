## Installation
``` sh
npm install --save @v57/strip
```

## Usage
``` js
const strip = require('@v57/strip')
let a
let b = 0
let c = '1'
console.log(strip({ a, b, c }))
// prints { b: 0, c: '1' }
```