class UsuarioService {
    url = 'http://localhost:3001/usuarios';

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
            return usuarios.length > 0;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default UsuarioService;
