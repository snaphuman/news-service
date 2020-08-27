import http from '../http-common';

class NoticiasDataService {
    getAll() {
        return http.get('/noticias');
    }
}

export default new NoticiasDataService();
