
class BibliotecaService {
    url = 'http://localhost:3001/bibliotecas';

    async Get(usuarioId) {

        try {
            const response = await fetch(`${this.url}?usuarioId=${usuarioId}`);
            if (!response.ok) {
                throw new Error('Erro ao obter biblioteca');
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
                throw new Error('Erro ao criar biblioteca');
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }

    }

    async Put() {

        //Implementar

    }

    async Exist(UsuarioId){
        try {
            const response = await fetch(`${this.url}?usuarioId=${UsuarioId}`);
            if (!response.ok) {
                throw new Error('Erro ao verificar se a biblioteca existe');
            }
            const bibliotecas = await response.json();
            return bibliotecas.length > 0;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default BibliotecaService;
