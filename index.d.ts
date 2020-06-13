interface More {
    [key: string]: any;
}
declare const Merge: <T extends More = More>(...objs: (More | T)[]) => T;
export { Merge };
export default Merge;
