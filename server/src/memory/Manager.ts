export default class MemoryManager <K, T> {
    public data = new Map<K, T>();
    
    public set(key: K, value: T): void {
        this.data.set(key, value);
    }
    
    public get(key: K): T {
        return this.data.get(key) ?? {} as T;
    }

    public contains(key: K): boolean {
        return this.data.has(key);
    }
}