import { Account, Client } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("662a121d232425521f88");

export const accaoun = new Account(client);
