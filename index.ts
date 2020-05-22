import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts";
import getClasses from "./domain/getClass.ts";

const classes = await getClasses();

const content = classes.map(aula => `${aula.id} - ${aula.name}`).join("\n");

writeFileStrSync("./classes.txt", content);