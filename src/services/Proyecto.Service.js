import axios from 'axios';

class ProyectoService {
    async getProjectsNick(nick) {
        let theProjects = await axios.get(`http://localhost:3001/proyecto/?nick=${nick}`)
        return theProjects.data;
    }

    async postProjectNick(data) {
        let { nick } = data;

        let projectAdded = await axios.post(`http://localhost:3001/proyecto/?nick=${nick}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return projectAdded.data;
    }

}

export default new ProyectoService();