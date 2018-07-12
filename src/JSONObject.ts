export type JSONObject =
    number | string | boolean |
    JSONArray |
    { [name: string]: JSONObject }

interface JSONArray extends Array<JSONObject> {}
