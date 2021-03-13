import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { Observable, timer } from "rxjs";
import { of } from 'rxjs/internal/observable/of';
export class PreloadPublicModules implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/features/block-chain/block-chain.module').then(m => m.BlockChainModule) 
  },
  { 
    path: 'settings',
    loadChildren: () => import('./modules/features/settings/settings.module').then(m => m.SettingsModule) 
  },
  { 
    path: 'new/transaction',
    loadChildren: () => import('./modules/features/transaction/transaction.module').then(m => m.TransactionModule) 
  },
  { 
    path: 'new/transaction/pending',
    loadChildren: () => import('./modules/features/transaction/transaction.module').then(m => m.TransactionModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadPublicModules
  })],
  exports: [RouterModule],
  providers: [PreloadPublicModules]
})
export class AppRoutingModule { }
