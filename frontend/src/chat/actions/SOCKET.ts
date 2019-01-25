import autobind from 'autobind-decorator';

export class SOCKET {

    private static port = 8080;
    private static host = location.hostname;
    private static _instance: SOCKET = new SOCKET();
    private static _isOpen = false;
    private static _QUEUE = [];

    private static LISTENER_MAP: { [listener: string]: (data: any) => void } = {};
    ws: WebSocket;

    constructor() {
        if (SOCKET._instance) {
            return SOCKET._instance;
        }
        this.init();
        SOCKET._instance = this;
    }

    init() {
        this.ws = new WebSocket(`ws://${SOCKET.host}:${SOCKET.port}/ws`);

        this.ws.addEventListener('open', () => {
            this.ws.send(JSON.stringify({ code: 'OPEN' }));
            console.log('WS:OPEN');
            SOCKET._isOpen = true;
            SOCKET._QUEUE.forEach(elem => this.ws.send(elem));
        });

        this.ws.addEventListener('message', this.onMessage );
    }

    @autobind
    onMessage(message) {
        if (message.data) {
            try {
                const data = JSON.parse(message.data);
                const code = data.code;
                if (code) {
                    if (typeof SOCKET.LISTENER_MAP[code] === 'function') {
                        SOCKET.LISTENER_MAP[code](data.data);
                    } else {
                        console.error('WS:MESSAGE_WITHOUT_HANDLER', code);
                    }
                } else {
                    console.error('WS:MESSAGE_WITHOUT_CODE', data);
                }
            } catch (e) {
                console.error('WS:MESSAGE_PARSE_ERROR', message.data);
                console.error(e);
            }
        } else {
            console.error('WS:MESSAGE_WITHOUT_DATA');
        }
    }

    @autobind
    on(messageCode, func) {
        SOCKET.LISTENER_MAP[messageCode] = func;
    }

    @autobind
    emit(code: string, data: any = '') {
        const jsonData = JSON.stringify({ code, data });
        if (SOCKET._isOpen) {
            this.ws.send(jsonData);
        } else {
            SOCKET._QUEUE.push(jsonData);
        }
    }
}

const socket  = new SOCKET();
socket.on('ANSWER', (data) => console.log('WS:ANSWER', data));
socket.on('ERROR', (data) => console.error('WS_BACKEND:ERROR', data.error));
socket.on('OPEN_SUCCESS', (data) => console.log('WS:OPEN', data));
