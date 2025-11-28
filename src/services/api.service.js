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
    get = async () => {}
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
}