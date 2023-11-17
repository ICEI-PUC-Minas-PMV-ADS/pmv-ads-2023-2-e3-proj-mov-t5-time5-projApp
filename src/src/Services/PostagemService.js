class PostagemService {
    
    constructor() {
        this.url = this.findPostUrl();
    }

    findPostUrl(){

        const portDefault = 3000;
        const portServerJSON = process.env.JSON_SERVER_PORT || portDefault;
        return `http://localhost:${portServerJSON}/postagens`;

    }

    async GetAll() {
        try {
            const response = await fetch(`${this.url}`);
            if (!response.ok) {
                throw new Error('Erro ao obter postagens');
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }

}

export default PostagemService;
