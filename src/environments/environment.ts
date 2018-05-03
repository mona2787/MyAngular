// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAvmVkeKjo9A9pK9pWUxvRef-_bvKcqgJM",
    authDomain: "recepielist.firebaseapp.com",
    databaseURL: "https://recepielist.firebaseio.com",
    projectId: "recepielist",
    storageBucket: "",
    messagingSenderId: "865613033128"
  }
};
