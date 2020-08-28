import http from '../http-common';

class NoticiasDataService {
    getAll() {
        return http.get('/noticias');
    }

    getByKeyword(text) {
        return http.get('/noticias', {
            params: {
                name: text,
                all: true
            }
        });
    }

    setPage(pageNum) {
        return http.get('/noticias', {
            params: {
                page: pageNum
            }
        });
    }
}

export default new NoticiasDataService();
