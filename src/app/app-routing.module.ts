import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewsComponent } from './blockchain-views/blockchain-views.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { PendingDataComponent } from './pending-data/pending-data.component';

const routes: Routes = [
  {
    path: '',
    component: BlockchainViewsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'create-new',
    component: CreateDataComponent
  },
  {
    path: 'pending',
    component: PendingDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
