import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    currentDate = new Date().toDateString();
    
    greeting = 'Trailblazer';

    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }

    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
}