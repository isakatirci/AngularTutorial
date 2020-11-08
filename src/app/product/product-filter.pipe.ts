import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): unknown {
    if (
      args.length === 0 ||
      args[0] === undefined ||
      args[0] === null ||
      args[0].trim().length === 0
    ) {
      return value;
    }
    return value.filter((p) => p.name.indexOf(args[0]) !== -1);
  }
}
