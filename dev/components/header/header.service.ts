import {Injectable} from 'angular2/core';

@Injectable()
export class HeaderService {

	public menus: Array<any> = [{
        label: 'Shop',
        id: 'shop',
        href: ['Shop'],
        active: true,
        submenu: [
            { label: 'Protein Supplements', id: 'protein-supplements', href: ['Shop', {category: 'protein-supplements'}], active: false },
            { label: 'Weight Management', id: 'weight-management', href: ['Shop', {category: 'weight-management'}], active: false },
            { label: 'Vitamins Supplements', id: 'vitamins-supplements', href: ['Shop', {category: 'vitamins-supplements'}], active: false },
            { label: 'Fitness Accessories', id: 'fitness-accessories', href: ['Shop', {category: 'fitness-accessories'}], active: false }
        ]
    },
    {
        label: 'Fitness',
        id: 'fitness',
        href: ['Fitness'],
        active: false,
        submenu: [
            { label: 'Gyms', id: 'gyms', href: ['Fitness', {type: 'gyms'}] },
            { label: 'Slimming Centers', id: 'slimming-centers', href: ['Fitness', {type: 'slimming-centers'}] },
            { label: 'Sports Club', id: 'sports-club', href: ['Fitness', {type: 'sports-club'}] },
            { label: 'Dance', id: 'dance', href: ['Fitness', {type: 'dance'}] },
            { label: 'Martial Arts', id: 'martial-arts', href: ['Fitness', {type: 'martial-arts'}] },
            { label: 'Yoga', id: 'yoga', href: ['Fitness', {type: 'yoga'}] }
        ]
    },
    {
        label: 'Events',
        id: 'event',
        href: ['Event'],
        active: false,
        submenu: [
            { label: 'Bangalore', id: 'bangalore', href: ['Event', {location: 'bangalore'}] },
            { label: 'Mumbai', id: 'mumbai', href: ['Event', {location: 'mumbai'}] },
            { label: 'Delhi', id: 'delhi', href: ['Event', {location: 'delhi'}] }
        ]
    }];

	getMenus() {
		return this.menus;
	}

	setActive(menuId: string) {
        for (let menu of this.menus) {
            menu.active = menu.id === menuId;
        }
    }

    setActiveForSubmenu(menuIndex: number, submenuId: string) {
        for (let submenu of this.menus[menuIndex].submenu) {
            submenu.active = submenu.id === submenuId;
        }
    }

}