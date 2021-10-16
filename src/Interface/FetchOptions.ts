
interface FetchOptions {
    method: string;
    headers?: {
        'Content-Type': string;
    };
    body?: BodyInit;
    credentials?: RequestCredentials;
}

export default FetchOptions;