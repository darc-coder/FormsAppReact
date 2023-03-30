export default class KeyGen {
    static index = 0;
    static get key() {
        const key = "key" + this.index;
        this.index++;
        return key;
    }
}