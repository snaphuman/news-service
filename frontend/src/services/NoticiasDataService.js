import http from '../http-common';

class NoticiasDataService {
    getAll(text, pageNum) {
        return http.get('/noticias', {
            params: {
                name: text,
                page: pageNum
            }
        });
    }
}

export default new NoticiasDataService();
