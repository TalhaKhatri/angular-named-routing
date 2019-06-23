import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent,
    children: [
      {path: 'test', component: TestComponent, outlet: 'secondary'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
