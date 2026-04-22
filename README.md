# Twilio SMS Manager 🚀

A robust **Node.js** utility designed to interact with the **Twilio API**. This project demonstrates how to send SMS messages, fetch message history, and perform clean-up operations by securely deleting messages based on their delivery status.

## ✨ Features

* **SMS Dispatch:** Sends text messages using Twilio's Messaging Service.
* **Message Retrieval:** Lists the last 10 messages from your Twilio account logs.
* **Smart Deletion:** Implements asynchronous deletion with status checks. It only attempts to remove messages that have reached a final state (`sent`, `delivered`, or `failed`), effectively preventing **409 Conflict** errors.
* **Security Focused:** Uses `dotenv` to manage sensitive API credentials and phone numbers via environment variables.

## 🛠️ Tech Stack

* **Node.js**
* **Twilio SDK**
* **Dotenv** (Environment variable management)

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Omerli-Faruk/twilio-sms-project.git](https://github.com/Omerli-Faruk/twilio-sms-project.git)