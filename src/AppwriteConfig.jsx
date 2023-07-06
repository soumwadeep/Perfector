import { Client, Account, Databases } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a654b76df408fd42f8");
export const account = new Account(client);

export const databases = new Databases(client, "64a655223c7d1fc593e5");
