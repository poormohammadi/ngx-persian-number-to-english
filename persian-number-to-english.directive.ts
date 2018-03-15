import {
  Directive,
  Input,
  Output,
  EventEmitter
} from '@angular/core'

import {NgModel} from '@angular/forms';

@Directive({
  selector: '[appPersianNumberToEnglish]',
  providers: [NgModel]
})

export class PersianNumberToEnglishDirective {
  public InputValue;

  public charMap = [
    {
      pattern: '۰',
      replace: '0'
    },
    {
      pattern: '۱',
      replace: '1'
    },
    {
      pattern: '۲',
      replace: '2'
    },
    {
      pattern: '۳',
      replace: '3'
    },
    {
      pattern: '۴',
      replace: '4'
    },
    {
      pattern: '۵',
      replace: '5'
    },
    {
      pattern: '۶',
      replace: '6'
    },
    {
      pattern: '۷',
      replace: '7'
    },
    {
      pattern: '۸',
      replace: '8'
    },
    {
      pattern: '۹',
      replace: '9'
    },

  ];

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  @Input() set ngModel(value: any) {
    this.InputValue = value

    if (this.InputValue) {
      for (var i = 0; i < this.charMap.length; i++) {
        this.InputValue = this.InputValue.replace(this.charMap[i].pattern, this.charMap[i].replace)
      }
    }


    setTimeout(() => {
      this.ngModelChange.emit(this.InputValue);
    });
  }

}
