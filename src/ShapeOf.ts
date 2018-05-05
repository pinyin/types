type ShapeOf<T extends object, Key extends keyof T = keyof T> = {
    [K in Key]: any
}
