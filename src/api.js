const BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    async getCategories() { 
        return await this.handleFetch(BASE + '/categories');
    },
    async handleFetch(...args) {
        let res = await fetch(...args).catch();
        res = res.ok ? await res.json() : {error: res.statusText};
        if (!res.error) res = res.result;
        else alert(res.error);
        return res;
    }
};