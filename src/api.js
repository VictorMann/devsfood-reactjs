const BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    async getCategories() { 
        let res = await fetch(BASE + '/categories').catch();
        res = res.ok ? await res.json() : {error: res.statusText};
        if (!res.error) res = res.result;
        else alert(res.error);
        return res;
    }
};