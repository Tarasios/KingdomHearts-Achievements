// Internationalization System
// Each page declares itself on the <body> tag:
//   <body data-page="index" data-root="./">           (root-level pages)
//   <body data-page="safety-scanner" data-root="../">  (pages in subfolders)
// data-page = name of the page's JSON file in lang/messages/<lang>/
// data-root = relative path back to the public/ root
class I18n {
    constructor() {
        this.currentLang = this.loadStoredLanguage();
        this.page = document.body.dataset.page || 'index';
        this.root = document.body.dataset.root || './';
        this.messages = {};
    }

    loadStoredLanguage() {
        // Validate the stored value: only known languages are accepted.
        try {
            const stored = localStorage.getItem('preferred-language');
            return stored === 'fr' ? 'fr' : 'en';
        } catch (e) {
            return 'en';
        }
    }

    async loadMessages() {
        try {
            const response = await fetch(`${this.root}lang/messages/${this.currentLang}/${this.page}.json`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            this.messages = await response.json();
            this.updatePage();
        } catch (error) {
            if (this.currentLang !== 'en') {
                console.warn(`Failed to load ${this.currentLang}/${this.page}.json, falling back to English`);
                this.currentLang = 'en';
                await this.loadMessages();
            } else {
                // English itself failed: usually file:// (fetch blocked) or a
                // missing JSON file. The only unavoidable hardcoded string,
                // since the language files themselves could not be loaded.
                console.error(`Failed to load lang/messages/en/${this.page}.json`, error);
                this.showLoadError();
            }
        }
    }

    showLoadError() {
        const banner = document.createElement('div');
        banner.setAttribute('role', 'alert');
        banner.style.cssText = 'background:#2c3e50;color:#fff;padding:1rem;text-align:center;font-weight:600;';
        banner.textContent = 'Could not load page text. If you opened this file directly, serve the site with a local web server (e.g. "python -m http.server" in the public folder).';
        document.body.prepend(banner);
    }

    async setLanguage(lang) {
        if (lang !== 'en' && lang !== 'fr') return;
        if (this.currentLang !== lang) {
            this.currentLang = lang;
            try {
                localStorage.setItem('preferred-language', lang);
            } catch (e) { /* private browsing: switch works, just won't persist */ }
            await this.loadMessages();
        }
    }

    getMessage(key) {
        return Object.prototype.hasOwnProperty.call(this.messages, key)
            ? this.messages[key]
            : key;
    }

    // Replaces %1..%9 in a message with the provided arguments.
    format(key, ...args) {
        let msg = this.getMessage(key);
        args.forEach((arg, i) => {
            msg = msg.split(`%${i + 1}`).join(String(arg));
        });
        return msg;
    }

    updatePage() {
        // Keep <html lang> in sync (screen readers and search engines use it).
        document.documentElement.lang = this.currentLang;

        Object.keys(this.messages).forEach(key => {
            if (key === 'page-title') {
                document.title = this.messages[key];
                return;
            }
            const element = document.getElementById(key);
            if (!element) return;

            if (element.tagName === 'IMG') {
                element.alt = this.messages[key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = this.messages[key];
            } else {
                // textContent only, never innerHTML: lang files can never
                // inject markup or scripts.
                element.textContent = this.messages[key];
            }
        });

        this.updateLanguageToggle();

        // Let page scripts (e.g. the melding calculator) re-render their
        // dynamically built content in the new language.
        document.dispatchEvent(new CustomEvent('i18n:updated', {
            detail: { lang: this.currentLang }
        }));
    }

    updateLanguageToggle() {
        const flag = document.getElementById('lang-flag');
        const text = document.getElementById('lang-text');
        const button = document.getElementById('langToggle');

        if (flag && text) {
            if (this.currentLang === 'en') {
                flag.textContent = '🇫🇷';
                text.textContent = 'FR';
            } else {
                flag.textContent = '🇨🇦';
                text.textContent = 'EN';
            }
        }
        if (button) {
            button.setAttribute('aria-label', this.getMessage('lang-toggle-aria'));
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    async init() {
        await this.loadMessages();
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', async () => {
                await this.setLanguage(this.currentLang === 'en' ? 'fr' : 'en');
            });
        }
    }
}

const i18n = new I18n();