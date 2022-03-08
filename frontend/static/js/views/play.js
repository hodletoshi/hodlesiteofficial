import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Play");
    }

    async getHtml() {
        return `
            <h1>Play</h1>
            <p>You are viewing the play page!</p>
        `;
    }
}
