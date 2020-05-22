import { Client} from "https://deno.land/x/mysql/mod.ts";
import Class from "../model/class.ts";

export default async (): Promise<Class[]> => {
    const client = await new Client().connect({
        hostname: "127.0.0.1",
        username: "root",
        password: "root",
        db: "deno"
    });

    const rows = await client.query("select id, name from lessons");
    const classes: Class[] = rows.map((row: any): Class => {
        return {
            id: row.id,
            name: row.name
        }
    });

    return classes;

}
