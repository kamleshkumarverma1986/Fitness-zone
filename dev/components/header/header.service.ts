import {Injectable} from 'angular2/core';

@Injectable()
export class HeaderService {

	public menus: Array<any> = [{
        label: 'Shop',
        id: 'shop',
        href: ['Shop'],
        active: true
    },
    {
        label: 'Fitness',
        id: 'fitness',
        href: ['Fitness'],
        active: false
    },
    {
        label: 'Events',
        id: 'event',
        href: ['Event'],
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