// export function debounce<Params extends any[]>(
//     func: (...args: Params) => any,
//     timeout: number,
// ): (...args: Params) => void {
//     return (...args: Params) => {
//         setTimeout(() => {
//             func(...args)
//         }, timeout)
//     }
// }
export const debounce = (fn: Function, timeout: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), timeout)
    }
}
