interface More {
    [key: string]: any;
}
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param {object} obj
 * @example
 * const obj1 = {
 *    app: {
 *       name: "Application"
 *    }
 * }
 * const obj2 = {
 *    app: {
 *       port: 8080
 *    }
 * }
 * Merge(obj1, obj2)
 */
declare const Merge: <T extends More = More>(...objs: (More | T)[]) => T;
export { Merge };
export default Merge;
