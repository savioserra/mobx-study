import { observable, action, reaction } from 'mobx';

class CommonStore {

    @observable counter = 0;

    constructor() {
        reaction(
            () => this.counter,
            console.log
        );
    }

    @action increment() {
        this.counter += 1;
    }

    @action decrement() {
        this.counter -= 1;
    }

}

export default new CommonStore();