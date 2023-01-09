interface Cookies {
    set(name: string, value: string): void
}

class Cookie implements Cookies {
    set(name, value) {
        if (document) {
            document.cookie = `${name}=${value}`;
        }
    }
}

export const cookie = new Cookie();
