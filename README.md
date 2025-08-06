
# ⚖️ Smart Legal Assistant (SLA) — AI-Powered Legal Query Solver

## 📌 Project Overview
Smart Legal Assistant (SLA) is an AI-powered chatbot that provides users with accurate and structured legal guidance. The system is designed to:

- Explain legal terms and court procedures
- Help draft common legal documents (e.g., rental agreements, contracts, affidavits)
- Fetch legal citations using RAG from a legal corpus
- Recommend legal steps based on structured decision trees
- Provide function-based services (e.g., stamp duty calculator, lawyer appointments)

SLA is built on top of modern Large Language Models (LLMs) and combines system prompting, user prompting, tuning parameters, structured output, function calling, and Retrieval-Augmented Generation (RAG) for robust legal assistance.

## ✅ Core Features
- 🧠 Prompt-engineered AI behavior (Strict legal expert personality)
- 🔧 Adjustable response style via model parameters
- 📄 Structured legal documents in JSON and .docx
- 🧮 Function calls for external logic (e.g., stamp duty calculations)
- 📚 RAG-enabled retrieval from real Indian laws, court rulings, and contracts

## 💡 Concept-by-Concept Breakdown

### 1️⃣ System Prompt and User Prompt

#### 🔷 What it is:
Prompts define how the AI behaves. The system prompt controls the assistant's persona, while user prompts guide the model on the user’s intent.

#### 🧰 How It’s Implemented:
- **System Prompt** is pre-defined:
  > "You are a legal expert assistant trained in Indian laws. Always provide accurate and referenced information. If unsure or if the query requires professional legal advice, clearly state so."

- **User Prompts** are captured through a frontend form or chat UI.

#### 💡 Examples:
- **User Prompt**: "What is the process of filing an FIR in Delhi?"
- **System Prompt in context**: "Explain clearly in steps, based on Indian Penal Code and CrPC. Include citations."

The combination ensures legally sound and context-aware answers.

### 2️⃣ Tuning Parameters

#### 🔷 What it is:
Model tuning parameters adjust how the LLM responds (e.g., creativity, consistency, risk of hallucination).

#### 🧰 How It’s Implemented:
Users can toggle between modes:

| Mode | Temperature | Top_p | Use Case |
|------|-------------|-------|----------|
| Strict Law Mode | 0.2 | 0.7 | Accurate legal info |
| Simplified Mode | 0.5 | 0.9 | User-friendly, casual tone |

These settings are applied during model inference via backend config.

#### 💡 Example:
In **Strict Mode**:
> "As per Section 154 of the CrPC, an FIR must be filed at the nearest police station..."

In **Simplified Mode**:
> "You can go to your local police station and file an FIR. Just make sure to keep a copy."

### 3️⃣ Structured Output

#### 🔷 What it is:
Structured output provides answers in a clear, machine-readable format such as JSON or tables, helpful for integrations and templates.

#### 🧰 How It’s Implemented:
- **Legal Q&A Output**:
```json
{
  "query": "How to file an FIR",
  "jurisdiction": "India",
  "steps": [
    "Visit nearest police station",
    "Submit a written complaint",
    "Request a signed FIR copy",
    "Track FIR number"
  ],
  "references": ["CrPC Section 154"]
}
```

- **Document Draft Output**:
```json
{
  "documentType": "Rental Agreement",
  "parties": ["Mr. A", "Mr. B"],
  "location": "Chennai",
  "duration": "11 months",
  "rent": "₹15,000",
  "clauses": ["No subletting", "2-month notice"]
}
```
These are further converted into `.docx` files using `python-docx`.

### 4️⃣ Function Calling

#### 🔷 What it is:
Function calling allows the LLM to trigger backend logic such as fetching data or performing calculations.

#### 🧰 How It’s Implemented:
Supported functions:

- `calculate_stamp_duty(document_type, state, value)`
- `fetch_latest_law(section_number)`
- `schedule_lawyer_appointment(user_id, case_type)`

#### 💡 Example Function Call:
```json
{
  "name": "calculate_stamp_duty",
  "parameters": {
    "document_type": "Rental Agreement",
    "state": "Tamil Nadu",
    "value": "150000"
  }
}
```
Returned Output:
```json
{
  "stamp_duty": "₹1200",
  "reference": "Tamil Nadu Stamp Act, 2013"
}
```

### 5️⃣ Retrieval-Augmented Generation (RAG)

#### 🔷 What it is:
RAG enhances the chatbot by retrieving relevant legal documents or court judgments before answering, improving factual grounding.

#### 🧰 How It’s Implemented:
- Legal datasets are chunked and stored in a vector database (e.g., FAISS or Pinecone).
- A query like “What does CrPC Section 154 state?” retrieves the relevant text.
- The LLM uses this retrieved context to answer.

#### 💡 Example:
- **User Query**: "What is the punishment for cyberstalking?"
- **Retrieved Text**: "As per Section 354D of the IPC..."
- **Model Output**: "Under Section 354D of the Indian Penal Code, cyberstalking is punishable with imprisonment up to 3 years..."

## 🧱 System Architecture

```
User Input
    ↓
System + User Prompt
    ↓
+--- Retrieval (RAG) ---+
|                       |
|   +→ FAISS Vector DB  |
|   ↓                  |
| Prompt + Context → LLM → Function Call (if needed)
                             ↓
                      JSON Output / .docx File
```

## 🔧 Tech Stack

- **Frontend**: React / Next.js (chat UI)
- **Backend**: Python (FastAPI)
- **AI**: OpenAI GPT-4 with Function Calling
- **RAG**: FAISS / Pinecone + legal corpus
- **Document Builder**: `python-docx`
- **Auth & DB**: Firebase, MongoDB

## 📦 Example Use Cases

- 🧾 "Draft a rental agreement for 11 months between A and B in Tamil Nadu."
- ⚖️ "Explain how to file a writ petition in High Court."
- 📚 "What does CrPC Section 154 say?"

## 🔮 Future Enhancements

- Voice support (text-to-speech)
- Regional language prompts (Hindi, Tamil)
- Legal news summarizer (via RAG)
- Integration with government legal databases (eCourts, IndiaCode)

## 📄 License

MIT License – For educational and informational use only. Not a substitute for professional legal advice.
