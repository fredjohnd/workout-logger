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

      iconRegistry.addSvgIcon('delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));

      iconRegistry.addSvgIcon('list-add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/list_add.svg'));

      iconRegistry.addSvgIcon('minimize',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/minimize.svg'));

      iconRegistry.addSvgIcon('maximize',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/maximize.svg'));

      iconRegistry.addSvgIcon('save',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/save.svg'));

      iconRegistry.addSvgIcon('timer-off',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/timer_off.svg'));

    }

  }
