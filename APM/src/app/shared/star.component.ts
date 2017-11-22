import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StartComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }
    onClick(): void{
        //note: its not single quote
        this.ratingClicked.emit(`The rating ${this.rating} is clicked`);
    }
}