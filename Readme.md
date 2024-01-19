# React Practice and Learning

# Parcel - read docs
- Dev Build
- Local Server
- Hot Module Replacement - HMR
- Uses File Watching Algo that is built in C++
- Cache - Faster builds
- Image Optimisation
- Minification of files in Prod - Bundling
- Compression
- Consistent Hashing ???
- Differential Bundling - Different Bundle for different browsers
- Code Splitting

# JSX 
JSX is not the same as HTML or React - It is a HTML/XML like syntax.
JSEngine does not understand the JSX - It is transpiled by <b>Babel</b> so that JSEngine can render it.

If JSX is multiline, we need to wrap it in paranthesis ().

```
const heading = <h1>Hello World</h1>

const heading = (<h1>
                        Hello World
                </h1>)

```

You can use JS Snippets inside JSX using **Curly Braces { }**

# React Components

Two Types:
- **Class Based Component** - Old
- **Functional Component** - New

React functional component is just a normal JS Function which returns some JSX element- Always start with a Capital letter.

### Componet Composition
Component within a component
