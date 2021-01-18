import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') listStat: boolean = false;

    
    @HostListener('click') toggleOpen(event: Event){
        this.listStat = !this.listStat;
    }
}