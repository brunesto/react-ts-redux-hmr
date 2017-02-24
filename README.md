# react-ts-redux-hmr

Almost minimal project with HMR (hot module reload) in react typescript with redux.

Most of this repository is taken from [http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/] - The rest is the redux part


To try it out
```
    npm install
    npm start
```
Then go to http://localhost:3000/

Modify the source and save, the components should reload automagically, preserving the state.

Hot module reload is supported in react components (tsx and jsx files) ,and redux reducers/actions

The first time the reducer is reloaded it will kick a warning ``` warning.js:10 <Provider> does not support changing `store` on the fly``` . AFAIK it is safe to ignore because the Provider that triggerred the warning is itself reloaded


The trick to make HMR work was to accept and replace both the App component and the reducer inside the same
module (here index-hmr.tsx)
