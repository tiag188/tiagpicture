import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SerachComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        //rxjs debunce with pipe
        this.debounce
            .pipe(debounceTime(400)).subscribe(filter => this.onTyping.emit(filter));
    }
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}