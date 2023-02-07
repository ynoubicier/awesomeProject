//This file can be replaced during build by using the 'fileReplacements' array.
// `ng build` replaces `environnement.ts` with `environnement.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
};

/**
 * For easier debugging in developpement mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on preformance if an error is thrown.
*/
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.