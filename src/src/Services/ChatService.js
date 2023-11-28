class ChatService {

    constructor() {
        this.url = this.findChatUrl();
    }

    findChatUrl() {

        const portDefault = 3000;
        const portServerJSON = process.env.JSON_SERVER_PORT || portDefault;
        return `http://localhost:${portServerJSON}/chats`;

    }

    async Get(usuarioLogadoId, usuarioChatId) {

        try {
            const response = await fetch(`${this.url}?usuarioId1=${usuarioLogadoId}&usuarioId2=${usuarioChatId}`);
            if (!response.ok) {
                throw new Error(`Erro ao obter chat: ${response.statusText}`);
            }
            const data = await response.json();

            if (data.length === 0) {
                const response2 = await fetch(`${this.url}?usuarioId1=${usuarioChatId}&usuarioId2=${usuarioLogadoId}`);
                if (!response2.ok) {
                    throw new Error(`Erro ao obter chat: ${response2.statusText}`);
                }

                const data2 = await response2.json();
                return data2
            }

            return data;

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async GetChatById(chatId) {

        try {
            const response = await fetch(`${this.url}?chatId=${chatId}`)
            if (!response.ok) {
                throw new Error(`Erro ao obter chat: ${response.statusText}`);
            }
            const data = await response.json();
            return data
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async Post(usuarioLogadoId, usuarioChatId) {
        try {

            const existingChat = await this.Get(usuarioLogadoId, usuarioChatId);

            if (existingChat) {
                console.log('O chat já existe.');
                return existingChat;
            }

            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usuarioId1: usuarioLogadoId,
                    usuarioId2: usuarioChatId,
                    mensagens: [],
                }),
            });

            if (!response.ok) {
                throw new Error(`Erro ao criar chat: ${response.statusText}`);
            }

            const newChat = await response.json();
            console.log('Chat criado com sucesso:', newChat);
            return newChat;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async Put(chatId, usuarioId, mensagem) {
        try {

            const existingChat = await this.GetChatById(chatId);

            if (!existingChat) {
                throw new Error(`Chat não encontrado com ID ${chatId}`);
            }

            existingChat.mensagens.push({
                id: existingChat.mensagens.length + 1,
                usuarioId: usuarioId,
                mensagem: mensagem,
            });

            const response = await fetch(`${this.url}/${chatId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(existingChat),
            });

            if (!response.ok) {
                throw new Error(`Erro ao adicionar mensagem ao chat: ${response.statusText}`);
            }

            const updatedChat = await response.json();
            console.log('Mensagem adicionada com sucesso:', updatedChat);
            return updatedChat;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}