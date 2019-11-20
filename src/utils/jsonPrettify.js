export const jsonPrettify = (ugly_json) => {
    try{
        return JSON.stringify(ugly_json, undefined, 4);
    }catch (e) {
        return ugly_json
    }
}