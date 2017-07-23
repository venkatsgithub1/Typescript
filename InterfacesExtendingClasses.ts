class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// Since Control was extended by interface. The classes
// extending Control can also implement methods of interface.
