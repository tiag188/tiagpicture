import { Pipe, PipeTransform } from "@angular/core";
import { Img } from "../img/img";

@Pipe({ name: 'fitlerByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
    transform(imgs: Img[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase()

        if (descriptionQuery) {
            return imgs.filter(imgs => imgs.description.toLowerCase().includes(descriptionQuery));
        } else {
            return imgs;
        }
    }

}