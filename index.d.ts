interface Options {
    removedKeys?: any[];
    removedValues?: any[];
    excludedKeys?: any[];
    excludedValues?: any[];
    [key: string]: any;
}
declare const Merge: <T extends Options = Options>(...objs: (Options | T)[]) => T;
export { Merge };
export default Merge;
