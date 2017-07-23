let key = "key"

class Employee {
    private _fullName: string;
    get fullName(): string {
        return this.fullName;
    }
    set fullName(newName:string) {
        if (key && key == 'key') {
            this._fullName = newName;
        } else {
            console.log('Unauthorized update');
        }
    }
}
