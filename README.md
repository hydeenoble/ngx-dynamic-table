# ngx-dynamic-table

Dynamic table generator library for Angular.

## Installation

`npm install ngx-dynamic-table --save`

if you use `yarn` you might want to use:

`yarn install ngx-dynamic-table --save`

## Usage

`ngx-dynamic-table` exposes a module called `NgxDynamicTableModule`. 

### Step 1: 
Import `NgxDynamicTableModule` in your root module e.g: `AppModule`.

```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxDynamicTableModule } from 'ngx-dynamic-table'; // ==> import module from library

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDynamicTableModule // ==> add module to `imports` array.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the module is imported, you can start using the libaray seamlessly.

### Step 2

Setup table config in your component file: 

```typescript
//app.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  config = {
    tableName: 'Customer Table',
    tableOffset: 5,
    tableHeaders: ['name', 'phone', 'country', 'zip code', 'state', 'customer', 'order number'],
    tableData: [
      {
        name: 'John Doe 1',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
    ]
  };
}

```

## Table Config properties
`tableName`: Name of the table.

`tableOffset`: Number of rows to be displayed per page upon pagination.

`tableHeaders`: row headers of the table.

`tableData`: An array of data to be displayed in the table.

P.S: elements in the `tableHeaders` array must be the same as the keys in the object of each elements on the `tableData` array.

### Step 3: 
Finally, add the `ngx-dynamic-table` to your template:

```html
<!-- app.component.html-->
<ngx-dynamic-table [config]=config></ngx-dynamic-table>
```

And we are done ... 
## License

...


