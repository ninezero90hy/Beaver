import {Component, HostBinding, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'header[component-board-header]',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  @HostBinding('class.page-header')
  private readonly class = true;
  @HostBinding('style.background-color')
  private readonly style = '#0f619f';

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(private readonly renderer: Renderer2) {
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  ngOnInit(): void {
    this.setHeaderOptions();
  }

  ngOnDestroy(): void {
    this.removeHeaderOptions();
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private setHeaderOptions(): void {
    // fix side bar
    this.renderer.addClass(document.body, 'header-function-fixed');
  }

  private removeHeaderOptions(): void {
    // remove fixed side bar
    this.renderer.removeClass(document.body, 'header-function-fixed');
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}