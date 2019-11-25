import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: '--My WorkList (25)',
      type: 'header'
    },
    {
      title: '--My Cases (5)',
      type: 'header'
    },
    {
      title: '--Calendar',
      type: 'header'
    },
    {
      title: '--Reports',
      type: 'header'
    },
    {
      title: '--Dashboard',
      type: 'header'
    },
    {
      title: '--Claims Search',
      type: 'header'
    },
    {
      title: 'Employer Details',
      type: 'dropdown',
      submenus: [
        {
          title: 'ABCD Corporation ',
          badge: {
            // text: 'Pro ',
            // class: 'badge-success'
          }
        },
        {
          title: '  Master Contact No: AB00019'
        }
      ]
    },
    {
      title: 'Policy Details',
      type: 'dropdown',
      submenus: [
        {
          title: 'Policy Start Date (08/10/2019)',
          
        },
        {
          title: 'Policy Expiry Date (08/10/2020)',
          // badge:{
          //   text:"08/10/2020"
          // }
        }
      ]
    },
    {
      title: 'Employee Details',
      type: 'dropdown',
      submenus: [
        {
          title: 'Policy Start Date (08/10/2019)',
          
        },
        {
          title: 'Policy Expiry Date (08/10/2020)',
          // badge:{
          //   text:"08/10/2020"
          // }
        }
      ]
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
