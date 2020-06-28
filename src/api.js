const BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    async getCategories() { 
        return await this.handleFetch(BASE + '/categories');
    },
    async getProducts(category, page, search) {
        let fields = {};

        if (category != 0) fields.category = category;
        if (page > 0) fields.page = page;
        if (search.trim()) fields.search = search.trim();

        let queryString = new URLSearchParams(fields).toString();

        return await this.handleFetch(BASE + '/products?' + queryString);
    },
    async handleFetch(...args) {
        let res = await fetch(...args).catch();
        res = res.ok ? await res.json() : {error: res.statusText};
        if (!res.error) res = res.result;
        else alert(res.error);
        return res;
    }
};