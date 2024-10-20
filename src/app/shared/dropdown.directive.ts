import { Directive, HostBinding, HostListener } from "@angular/core";

//decorator directive is required to declare a class as directive
//
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    //to dynamically attach and detach css class we are using @HostBinding()
    // class is an array of classess open is css class
    @HostBinding('class.open') isOpen = false;
    //HostListener will listen to the event
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}