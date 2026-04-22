const twilio = require("twilio");
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function listMessage() {
    try {
        const messages = await client.messages.list({limit: 10});
        messages.forEach((m) => console.log(m.body));
    } catch (ex) {
        console.error(ex);
        throw ex;
    }
}

async function deleteMessage() {
    const messages = await client.messages.list()
    for (let message of messages) {
        try {
            if (['delivered', 'sent', 'failed', 'undelivered'].includes(message.status)) {
                console.warn(`Deleting: ${message.sid}`);
                await message.remove();
            } else {
                console.log(`Skipping (Situation: ${message.status}): ${message.sid}`);
            }
        } catch (err) {
            console.error(`Your message could not be deleted (${message.sid}):`, err.message);
        }
    }
}

async function sendMessage() {
    const messages = await client.messages.create({
        body: "Hello! This is a message sent from a Messaging Service.",
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER,
    });

    console.log("Your message has been sent:");
    console.log("Body:", messages.body);
    console.log("Message SID:", messages.sid);
}

async function run() {
    console.log("Messages before delete: ")
    await listMessage()
    await deleteMessage();
    console.log("Messages after delete: ")
    await listMessage();
}

// sendMessage();
// listMessage();
run();
