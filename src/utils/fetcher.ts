interface IFetch {
    get: (url: string) => Promise<IFetchData>
    post: (url: string, data) => Promise<IFetchData>
}

interface IFetchData {
    success: boolean
    count: number
    token: string
}

class Fetcher implements IFetch {
    isLoading = false;
    error;

    async get(url) {
        try {
            this.isLoading = true;
            const response = await fetch(url);
            const fetchData = await response.json() as IFetchData;
            this.isLoading = false;

            return fetchData;
        } catch (error) {
            this.isLoading = false;
            this.error = error.message;
        }
    }

    async post(url, data) {
        try {
            this.isLoading = true;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const fetchData = await response.json() as IFetchData;
            this.isLoading = false;

            return fetchData;
        } catch (error) {
            this.isLoading = false;
            this.error = error.message;
        }
    }
}

export const fetcher = new Fetcher();
