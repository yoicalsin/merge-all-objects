interface More {
    [key: string]: any;
}
declare const IsObject: (src: any) => boolean;
declare const Merge: (...objs: More[]) => More;
export { Merge, IsObject };
export default Merge;
