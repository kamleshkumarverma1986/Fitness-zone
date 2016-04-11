import {Injectable} from 'angular2/core';

@Injectable()
export class MenuService {

	public menus: Array<any> = [{
        label: 'Home',
        id: 'home',
        href: ['Home'],
        active: true
    },
    {
        label: 'About',
        id: 'about',
        href: ['About'],
        active: false
    },
    {
        label: 'Contact',
        id: 'contact',
        href: ['Contact'],
        active: false
    }];

	getMenus() {
		return this.menus;
	}

	setActive(menuId: string) {
        for (let menu of this.menus) {
            menu.active = menu.id === menuId;
        }
    }

}