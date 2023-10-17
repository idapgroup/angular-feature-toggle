# FeatureToggle

FeatureToggle is a library for Angular 16+ that allows you to easily implement feature toggles in your application.

## Steps to use

1. Create feature toggle json file in assets folder
   Example:

  ```json
  {
  "feature1": true,
  "feature2": false
}
  ```

2. Provide feature toggle service and load initializer

- Import and provide without SSR example
  ```ts
  import {provideFeatureToggle} from 'feature-toggle';
  import {HttpClientModule} from '@angular/common/http';
  import {featureToggleBrowserLoaderProvider} from "feature-toggle/browser-loader";
  // ...
  providers: [
    featureToggleBrowserLoaderProvider('/assets/file-name.json'),
    provideFeatureToggle()
  ]
  ```
  > Note: featureToggleBrowserLoaderProvider() use HttpClient to load json file
- Import and provide with SSR example
  * app.browser.module.ts
    ```ts
      import {featureToggleBrowserLoaderProvider} from "feature-toggle/browser-loader";
      // ...
      providers: [
        featureToggleBrowserLoaderProvider('/assets/file-name.json'),
      ]
    ```
    > Note: featureToggleBrowserLoaderProvider() use HttpClient to load json file
  * app.module.ts
    ```ts
      import {provideFeatureToggle} from "feature-toggle";
      // ...
      providers: [
        provideFeatureToggle(),
      ]
    ```
  * app.server.module.ts
   ```ts
     import {featureToggleServerLoaderProvider} from "feature-toggle/server-loader";
     // ...
     providers: [
       featureToggleServerLoaderProvider('/assets/file-name.json'),
     ]
   ```

3. Use feature toggle guard in your routing

  ```ts
import {featureToggleGuard} from "feature-toggle";
// ...
const routes = [
  // ...
  {
    path: 'feature-one',
    canMatch: [featureToggleGuard('feature-one')],
    loadComponent: () => import('./pages/feature-one/feature-one.component').then(m => m.FeatureOneComponent),
  }
  // ...
]
  ```

4. Use feature toggle directive in your template

  ```ts
import {FeatureToggleDirective} from "feature-toggle";
// ...
imports: [
  FeatureToggleDirective
]
  ```

  ```angular2html

<div *featureToggle="'feature-one'">
  Feature one is enabled
</div>
/* or */
<div *featureToggle="'feature-one'; else elseBlock">
  Feature one is enabled
</div>
<ng-template #elseBlock>
  Feature one is disabled
</ng-template>
  ```

## Lib build

Run `npm run build:lib` to build the library. The build artifacts will be stored in the `dist/` directory.

## Example dev server

Run `ng serve` or `npm run example:start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Example SSR server

Run `npm run build:ssr` to build the project and `npm run serve:ssr`. The build artifacts will be stored in the `dist/` directory.
