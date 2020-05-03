import CookieUtils from 'js-cookie';

import Swal from 'sweetalert2';
import { observable, decorate, action, computed } from 'mobx';

import {
    fetchFavoriteAds,
    unsetFavoriteAd,
    setFavoriteAd,
    fetchRamadAds,
    saveUserResume,
} from '../server/user';
import { User, RamadAd, UserResume } from '../types/User';

export class UserStore {
    private loggedUser: User = JSON.parse(CookieUtils.get('user') || '{}');
    private favoriteAds = observable.box<number[]>([]);
    private ramadAds = observable.box<RamadAd[]>([]);

    get getUser() {
        return this.loggedUser;
    }

    get getFavoriteAds() {
        return this.favoriteAds.get();
    }

    get getRamadAds() {
        return this.ramadAds.get();
    }

    get getUserInitials() {
        const splitName: string[] = this.loggedUser.name.split(' ');
        return splitName.map((n) => n[0]).join(' ');
    }

    loadFavoriteAds = async () => {
        // Fetch data from server
        const newFavoriteAds: number[] = await fetchFavoriteAds();
        this.favoriteAds.set(newFavoriteAds);
    };

    loadRamadAds = async () => {
        // Fetch data from server
        const newRamadAds: RamadAd[] = await fetchRamadAds();
        this.ramadAds.set(newRamadAds);
    };

    unsetFavoriteAd = async (adId: number) => {
        try {
            await unsetFavoriteAd(adId);
            this.loadFavoriteAds();
        } catch (error) {
            console.log('got error, unset function', error);
        }
    };

    setFavoriteAd = async (adId: number) => {
        try {
            await setFavoriteAd(adId);
            this.loadFavoriteAds();
        } catch (error) {
            console.log('got error, set function', error);
        }
    };

    saveUserResume = async (resume: UserResume) => {
        const response: Response = await saveUserResume(resume);

        response.status === 200
            ? Swal.fire('מעולה!', 'הרזומה שלך נשמר בהצלחה', 'success')
            : Swal.fire('אופס...', 'לא הצלחנו לשמור את הרזומה שלך', 'error');
    };
}

decorate(UserStore, {
    getUser: computed,
    getUserInitials: computed,
    getRamadAds: computed,
    loadRamadAds: action,
    loadFavoriteAds: action,
    unsetFavoriteAd: action,
    setFavoriteAd: action,
    saveUserResume: action,
});
