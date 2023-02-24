import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryCodesComponent } from './components/country-codes/country-codes.component';
import { EnglishComponent } from './components/english/english.component';
import { SpanishComponent } from './components/spanish/spanish.component';
const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:EnglishComponent},
  {path:'countryCodes', component:CountryCodesComponent},
  {path:'homeEs', component:SpanishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
