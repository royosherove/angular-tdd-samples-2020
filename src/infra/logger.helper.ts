class SpecialLogger {
  info = (text:string) =>{
    console.log(`--> LOGGER: ==> ${text}`);
  }
}

export const logger = new SpecialLogger();
