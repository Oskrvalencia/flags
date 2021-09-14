import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFlags'
})
export class FilterFlagsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 4) return value
    const resultFilter = []
    for (const filter of value) {
      if (filter.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultFilter.push(filter)
      }
    }
    return resultFilter;
  }

}
