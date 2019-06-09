import { Component } from '@angular/core';
import { ExerciseService } from './shared/exercise.service';
import { CategoryService } from './shared/category.service';
import { ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private categoryService: CategoryService,
    private exerciseService: ExerciseService,
    private iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon('chevron-left',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chevron_left.svg'));

      iconRegistry.addSvgIcon('chevron-right',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chevron_right.svg'));

      iconRegistry.addSvgIcon('time',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/time.svg'));
    }

  }
