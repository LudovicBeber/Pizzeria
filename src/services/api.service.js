export class ApiService {
    constructor(baseUrl, accessToken) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
    }

    updateAccessToken = (newAccessToken) => {
        this.accessToken = newAccessToken;
    }

    post = async (endpoint, data) => {
        const headers = {
            "Content-Type": "application/json"
        }

        if (this.accessToken?.length) {
            headers.Authorization = `Bearer ${this.accessToken}`;
        }

        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            headers,
            method: 'POST',
            body: JSON.stringify(data)
        });

        return response.json();
    }
    get = async (endpoint) => {
        const headers = {
            "Content-Type": "application/json"
        };

        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            headers,
            method: 'GET',
        });

        return response.json();
    }
    patch = async () => {}
    delete = async () => {}

    users = {
        signUp: async ({ username, email, password }) => {
            return await this.post('/auth/sign-up', { username, email, password });
        },
        signIn: async ({ identifier, password }) => {
            return await this.post('/auth/sign-in', { identifier, password });
        }, 
    }

    pizzas = {
        getAll: async () => {
            return await this.get('/pizzas');
        },
        create: async ({ title, ingredients, price }) => {
            return await this.post('/pizzas', { title, ingredients, price });
        },
        edit: async (id, { title, ingredients, price }) => {
            return await this.patch(`/pizzas/${id}`, { title, ingredients, price });
        },
        delete: async (id) => {
            return await this.delete(`/pizzas/${id}`);
        }
    }
}