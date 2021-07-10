import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ExponencialPipe, HeaderComponent, FooterComponent],
  exports: [ExponencialPipe, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
