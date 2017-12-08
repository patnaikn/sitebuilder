import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { EditorComponent } from './editor/editor.component';
import { PropertiesComponent } from './properties/properties.component';
import { StylesComponent } from './styles/styles.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes : Routes = [
  {path: 'properties', component: PropertiesComponent },
  {path: 'styles', component: StylesComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    EditorComponent,
    PropertiesComponent,
    StylesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
