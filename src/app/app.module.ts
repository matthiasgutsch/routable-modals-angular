import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Ng Bootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ModalContainerComponent } from './modal-container.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'product/:id', component: ModalContainerComponent },
];

@NgModule({
  declarations: [AppComponent, ModalContainerComponent, PhotoDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  entryComponents: [PhotoDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
