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
            { label: 'Slimming Centers', id: 'slimming-centers', href: ['Fitness', {type: 'slimming_centers'}], img_url: '../assets/img/gym1.jpg', desc: 'Get in shape the right way with one of the top slimming centers in Bangalore.' },
            { label: 'Gyms', id: 'gyms', href: ['Fitness', {type: 'gyms'}], img_url: '../assets/img/gym2.jpg', desc: 'Workout your way to six packs in the trendiest gyms of Bangalore.' },
            { label: 'Sports Club', id: 'sports-club', href: ['Fitness', {type: 'sport_clubs'}], img_url: '../assets/img/gym3.jpg', desc: 'Play your favorite sport with friends and family at a nearby sports club.' },
            { label: 'Dance', id: 'dance', href: ['Fitness', {type: 'dances'}], img_url: '../assets/img/gym4.jpg', desc: 'Join your favorite dance classes to stay fit – Aerobics, Zumba, Hip-hop and more.' },
            { label: 'Martial Arts', id: 'martial-arts', href: ['Fitness', {type: 'martial_arts'}], img_url: '../assets/img/gym5.jpg', desc: 'Book a free session of Martial Arts and get trained for speed, strength and mobility.' },
            { label: 'Yoga', id: 'yoga', href: ['Fitness', {type: 'yogas'}], img_url: '../assets/img/gym6.jpg', desc: 'Stay fit and stress free with some peaceful yoga sessions in nearby yoga centre.' }
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