import axios from 'axios';

class OpinionService {
    async getOpinionsNick(nick) {
        let theOpinions = await axios.get(`http://localhost:3001/opinion/?nick=${nick}`)
        return theOpinions.data;
    }

    async postOpinionNick(data) {
        let { nick } = data;

        let opinionAdded = await axios.post(`http://localhost:3001/opinion/?nick=${nick}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return opinionAdded.data;
    }

    async deleteOpinionNick(_id) {
        let data = {
            _id
        };
        let opinionDeleted = await axios.delete("http://localhost:3001/opinion", {
            params: data
        });
        return opinionDeleted.data;
    }

}

export default new OpinionService();