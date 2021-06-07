// Single Responsibility Principle


// Если есть другое поведение то его надо вынести в отдельный класс.

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    updata(text) {
        this.text = text;
        this.modified = true;
    }

    //  Violation of Principle
    /*  
        нарушается принцип, так как класс News 
        теперь отвечает не только за создание и 
        обновление новости, но и вывод новости 
        в формате html и JSON
    */

    // toHTML() {
    //     return `
    //         <div class="news">
    //             <h1>${this.title}</h1>
    //             <p>${this.text}</p>
    //         </div>
    //     `
    // }

    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified,
    //     }, null, 2);
    // }
}

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified,
        }, null, 2);
    }

    xml() {
        return `
        <news>
            <title>${this.news.title}</title>
            <text>${this.news.text}</text>
        </news>`
    }
}

const news = new News('Microsoft', 'Новая операционная систма');

const printer = new NewsPrinter(news);

// console.log(news.toHTML());
// console.log(news.toJSON());

console.log(printer.html());
console.log(printer.xml());
console.log(printer.json());