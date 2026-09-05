class UserCard extends HTMLElement {

    constructor() {
        super();

        // Create Shadow DOM
        this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {

        const name =
            this.getAttribute("name") || "Unknown User";

        const role =
            this.getAttribute("role") || "Member";

        this.render(name, role);
    }

    render(name, role) {

        this.shadowRoot.innerHTML = `

            <style>

                .card {
                    width: 130px;
                    min-height: 105px;

                    padding: 15px;

                    background: #ffffff;

                    border: 1px solid #dddddd;

                    border-radius: 10px;

                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);

                    text-align: center;

                    font-family: Arial, sans-serif;

                    transition: transform 0.25s ease,
                                box-shadow 0.25s ease;
                }

                .card:hover {
                    transform: translateY(-4px);

                    box-shadow:
                        0 7px 18px rgba(0, 0, 0, 0.18);
                }

                .avatar {
                    width: 50px;
                    height: 50px;

                    margin: 0 auto 8px;

                    border-radius: 50%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: #f3f3f3;

                    border: 3px solid #111111;

                    color: #111111;

                    font-size: 22px;
                    font-weight: bold;
                }

                h2 {
                    margin: 5px 0;

                    color: #1464a0;

                    font-size: 14px;
                }

                p {
                    margin: 0;

                    color: #666666;

                    font-size: 10px;

                    line-height: 1.4;
                }

            </style>

            <div class="card">

                <div class="avatar">
                    GH
                </div>

                <h2>${name}</h2>

                <p>${role}</p>

            </div>
        `;
    }


    // Bonus Challenge
    static get observedAttributes() {

        return ["name", "role"];

    }


    // Bonus Challenge
    attributeChangedCallback(
        attributeName,
        oldValue,
        newValue
    ) {

        if (
            oldValue !== newValue &&
            this.shadowRoot
        ) {

            const name =
                this.getAttribute("name") || "Unknown User";

            const role =
                this.getAttribute("role") || "Member";

            this.render(name, role);
        }
    }
}


// Register Custom Element
customElements.define("user-card", UserCard);