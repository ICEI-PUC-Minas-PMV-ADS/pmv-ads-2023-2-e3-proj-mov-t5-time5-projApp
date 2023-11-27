class UsuarioService {

    constructor() {
        this.url = this.findUserUrl();
    }

    findUserUrl(){

        const portDefault = 3000;
        const portServerJSON = process.env.JSON_SERVER_PORT || portDefault;
        return `http://localhost:${portServerJSON}/usuarios`;

    }

    async Get(id) {
        try {
            const response = await fetch(`${this.url}/${id}`);
            if (!response.ok) {
                throw new Error('Erro ao obter usuário');
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async GetAll() {
        try {
            const response = await fetch(`${this.url}`);
            if (!response.ok) {
                throw new Error('Erro ao obter usuários');
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async Post(data) {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async Put(id, data) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Erro ao atualizar usuário');
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async Exist(email, senha = null) {
        try {
            let url = `${this.url}?email=${email}`;
            if (senha) {
                url += `&senha=${senha}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao verificar se o usuário existe');
            }
            const usuarios = await response.json();
            return usuarios;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default UsuarioService;
