import { LightningElement } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
    sessions = [];
    handleSearchKeyInput(event) {
        const searchKey = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter((session) =>
            session.name.toLowerCase().includes(searchKey)
        );
    }
    connectedCallback() {
        getSessions().then((result) => {
            this.sessions = this.allSessions = result;
        });
    }
    handleSessionClick(event) {
        const index = event.currentTarget.dataset.index;
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'details',
                sessionId: this.sessions[index].id
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
