# ONESHOP WEB SDK
Web framework for accessing Oneshop API conveniently.

[![Version](https://img.shields.io/npm/v/oneshop.web.svg)](https://www.npmjs.org/package/onehshop.web)
[![Downloads](https://img.shields.io/npm/dm/oneshop.web.svg)](https://www.npmjs.com/package/oneshop.web)
[![Try on RunKit](https://badge.runkitcdn.com/oneshop.web.svg)](https://runkit.com/npm/oneshop.web)

The Oneshop Web library provides convenient access to Oneshop Web APIs.

## Documentation

See the [`Oneshop-web` API docs](https://docs.oneshop.dev) for JS/ReactJS.
<br/><br/>

## Guildlines
### Create shop (Referral Code Required)
[`https://youtu.be/YjEhv97633Y`](https://youtu.be/YjEhv97633Y)

### Setup custom theme
[`https://youtu.be/CPEyCSblJb4`](https://youtu.be/CPEyCSblJb4)

### Develop your own theme
[`https://youtu.be/ej2FloWjxNQ`](https://youtu.be/ej2FloWjxNQ)<br/><br/>

  
## Installation

### Option 1. For React JS, Vue Js or Angular JS.

Install with `yarn`:

```
yarn add oneshop.web
```

OR with `npm`:

```
npm install --save oneshop.web
```

OR using UMD build (exports a global `Oneshop` object);
<br/>

### Option 2. Loading Oneshop Web SDK asynchronously
Loading Oneshop.web asynchronously can speed up your initial page load.

```html
<html>
  <head>
    <!-- ... -->

    <script id="oneshop-web" src="https://cdn.oneshop.cloud/oneshop-sdk.min.js" async></script>

    <!-- ... -->
  </head>
  <!-- ... -->
</html>
```

<br/><br/>
## Usage
### ReactJS

```js
import React from 'react';
import Oneshop from 'oneshop.web';
const OS = new Oneshop();

function App(){

    // get article hooks and init articles = [];
    const {articles, setArticles} = useState([]);

    // get articles
    OS.article.get().then(setArticles).catch(alert);

    return (
        <div className="articles">
            {articles.map(a => (
                <div id={a.id}>
                    {a.sections.map((s, section_idx) => (
                        <div id={`section-${a.id}-${section_idx}`} className="section">
                            <img src={`${s.media[0].url}`}>
                            <h3>{s.title}</h3>
                            <p>{s.description}<p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

```

### Html
```html
<html>
  <head>
    <!-- ... -->

    <script id="oneshop-web" src="https://cdn.oneshop.cloud/oneshop-sdk.min.js" async></script>

    <!-- ... -->
  </head>
  <body>
    <script>
        let os = new Oneshop();

        // perform login
        os.consumer.login({
            email:"peter@foo.com", 
            passwd:"this-is-a-very-long-password"
        })
        .then((tokens) => {
            // do you stuffs
        })
        .catch(error => console.log(error))
    </script>
  </body>
  <!-- ... -->
</html>
```
<br/><br/>
## Equiry?
Developers are eligible to request a referral code from us to use the service for free!<br/>
Please email to: [`support@oneshop.team`](mailto:support@oneshop.team) for details 🎉
