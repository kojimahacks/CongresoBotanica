import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },
  { path: 'programa', loadChildren: './pages/programa/programa.module#ProgramaPageModule' },
  { path: 'notas', loadChildren: './pages/notas/notas.module#NotasPageModule' },
  { path: 'universidad', loadChildren: './pages/universidad/universidad.module#UniversidadPageModule' },
  { path: 'turismo', loadChildren: './pages/turismo/turismo.module#TurismoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
