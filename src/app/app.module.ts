import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewsComponent } from './blockchain-views/blockchain-views.component';
import { BlockViewComponent } from './block-view/block-view.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { PendingDataComponent } from './pending-data/pending-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewsComponent,
    BlockViewComponent,
    DataTableComponent,
    SettingsComponent,
    CreateDataComponent,
    PendingDataComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
