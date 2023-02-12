import axios from 'axios';

class ProyectoService {
    async getProjectsNick(nick) {
        let theProjects = await axios.get(`http://localhost:3001/proyecto/?nick=${nick}`)
        return theProjects.data;
    }

}

export default new ProyectoService();