import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validators-errors',
  templateUrl: './validators-errors.component.html',
  styleUrls: ['./validators-errors.component.css']
})
export class ValidatorsErrorsComponent {

  @Input()
  control: FormControl | undefined;
}
