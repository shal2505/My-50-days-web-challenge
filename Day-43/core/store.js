class StateStore {

    constructor(initialState) {

        this.state = initialState;

        this.listeners = [];
    }


    subscribe(listenerFunction) {

        this.listeners.push(listenerFunction);

        // Bonus: unsubscribe function
        return () => {

            this.listeners =
                this.listeners.filter(
                    listener => listener !== listenerFunction
                );

        };
    }


    setState(newState) {

        this.state = {
            ...this.state,
            ...newState
        };

        this.listeners.forEach(
            listener => listener(this.state)
        );
    }

}


export const globalStore =
    new StateStore({
        cartCount: 0,
        userTheme: "light"
    });