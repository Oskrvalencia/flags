import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectListFlags'
})
export class SelectListFlagsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' ) return value
    const resultFilter = []
    for (const filter of value) {
      if (filter.region.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultFilter.push(filter)
      }
    }
    return resultFilter;
  }

}
