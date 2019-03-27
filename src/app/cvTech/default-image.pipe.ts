import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: String, args?: any): String {
    if (!value){
     return 'cvf.png' ;
    } else{
      return value;
    }
  }

}
