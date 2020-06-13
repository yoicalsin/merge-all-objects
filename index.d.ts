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
 *    },
 *    circle: {
 *       one: {}
 *    }
 * }
 * const obj2 = {
 *    app: {
 *       port: 8080
 *    },
 *    circle: {
 *       two: {}
 *    }
 * }
 * Merge(obj1, obj2, ["circle"])
 */
declare const Merge: <T extends More = More>(...objs: (More | T)[]) => T;
export { Merge };
export default Merge;
