## Contact Page – Backend & Message Flow

This document explains **how the contact form works end-to-end** – from the React contact page at route `/contact` (`src/pages/Contact.jsx`) to the email that arrives in the inbox.

---

### 1. Frontend: Contact Form Structure (React)

- **File**: `src/pages/Contact.jsx`
- **Form element**: 
  - `id="contact-form"`
  - Method is handled by JavaScript (no `action` attribute; submission is via `fetch`)
- **Fields and names**:
  - **Name**: `<input id="name" name="name" required />`
  - **Email**: `<input id="email" name="email" type="email" required />`
  - **Mobile Number**: `<input id="mobile" name="mobile" type="tel" />` (optional)
  - **Message**: `<textarea id="message" name="message" required></textarea>`
- **User feedback element**:
  - `<div id="form-message" class="hidden ..."></div>` – this is where success/error messages are shown.

The visual styles and layout are powered by Tailwind CSS and custom styles, but **the important part for backend flow is the `id` and `name` attributes** listed above.

---

### 2. Frontend: React Submit Logic

- **File**: `src/pages/Contact.jsx`
- **Component**: `Contact`

**High-level flow (intended when wired to backend)**:

1. **Local state**:
   - `const [formState, setFormState] = useState({ name: '', email: '', mobile: '', message: '' });`
   - `const [status, setStatus] = useState('idle'); // idle, submitting, success, error`
2. **Change handler**:
   - `handleChange` updates `formState` based on `e.target.name` and `e.target.value`.
3. **Submit handler**:
   - `handleSubmit` is attached to the form’s `onSubmit`.
   - Calls `e.preventDefault();`.
4. **Validation**:
   - Check that **name**, **email**, and **message** are not empty before calling the backend.
5. **Submit button loading state**:
   - When `status === 'submitting'`, the button shows a loading state and is disabled.

---

### 3. Frontend → Backend Payload & Endpoint

After validation, the React frontend builds the **payload** expected by the email API:

- **Transform to API format**:
  - The backend expects: `name`, `email`, `mobileNumber`, `message`
  - React builds:
    - `name`: from `formState.name`
    - `email`: from `formState.email`
    - `mobileNumber`: from `formState.mobile` (or `'Not provided'` if empty)
    - `message`: prefixed with `"Enquiry from TWO8AI Website\n\n"` plus the user’s message

**Example `apiPayload` structure:**

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "mobileNumber": "9876543210",
  "message": "Enquiry from TWO8AI Website\n\nUser's original message here..."
}
```

- **Endpoint URL currently used by the frontend**:
  - `const apiUrl = 'https://emails-api-puce.vercel.app/api/email';`
- **HTTP request details**:
  - Method: `POST`
  - Headers:
    - `Content-Type: application/json`
    - `Accept: application/json`
  - Body: `JSON.stringify(apiPayload)`

The response is parsed as JSON if possible; otherwise, it falls back to text and wraps it as `{ message: "..." }`.

---

### 4. Frontend: Handling Success & Errors

After the `fetch` call from the React contact form:

- **If `response.ok === false`**:
  - Read JSON (or text) to get an error message.
  - Throw `Error` with a message like:
    - `result.error`, or `result.message`, or a generic `HTTP <status> - <statusText>`.
- **If result contains `error`**:
  - Throw `Error(result.error)`.
- **On success**:
  1. Clear the React `formState` so all fields become empty again.
  2. Set `status` to `'success'` so the success card is rendered:
     - Text: `"Message Sent! We'll get back to you shortly."`
- **On error (catch block)**:
  - Log full details to the console for debugging.
  - Detect **network problems** (`Failed to fetch`, `NetworkError`, `TypeError`):
    - Show something like:  
      `"⚠️ Network Error: Unable to connect to the email service. Please check your internet connection and try again."`
  - For other errors:
    - Show something like:  
      `"Sorry, there was an error: <error message>. Please try again later."`
  - Optionally set `status` to `'error'` and render an inline error message in the React UI.
- **Finally (always)**:
  - Re-enable the submit button and restore its original text based on the `status` state.

---

### 5. Backend: Email API (Vercel Function)

- **File**: `api/email.js`
- **Runtime**: Node.js (designed for Vercel/Node serverless).
- **Library**: `nodemailer`
  - Declared in `api/package.json.example` as:
    - `"nodemailer": "^6.9.7"`

#### 5.1. CORS & Allowed Origins

- **Allowed domains**:
  - `https://tosssolution.com`
  - `https://www.tosssolution.com`
- **Function**: `getCorsHeaders(origin)`
  - If `origin` is in the allowed list, `Access-Control-Allow-Origin` is set to that origin.
  - Otherwise, it falls back to the **first allowed origin**.
- **CORS headers set for every response**:
  - `Access-Control-Allow-Origin`
  - `Access-Control-Allow-Methods: POST, OPTIONS`
  - `Access-Control-Allow-Headers: Content-Type, Accept`
  - `Access-Control-Max-Age: 86400`
  - `Content-Type: application/json`
- **Preflight requests**:
  - If `req.method === 'OPTIONS'`, returns `200` immediately (preflight success).

#### 5.2. HTTP Method & Body

- Only **POST** is allowed:
  - Any non-POST (except OPTIONS) returns:
    - Status `405`
    - JSON: `{ error: 'Method not allowed', allowed: ['POST'] }`
- For POST:
  - Reads JSON body:
    - `const { name, email, mobileNumber, message } = req.body;`

#### 5.3. Validation

- **Required fields**:
  - `name`
  - `email`
  - `message`
- If any required field is missing:
  - Status `400`
  - JSON:
    ```json
    {
      "error": "Missing required fields",
      "required": ["name", "email", "message"],
      "received": {
        "name": true/false,
        "email": true/false,
        "message": true/false
      }
    }
    ```
- **Email format check**:
  - Uses regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - If invalid:
    - Status `400`
    - JSON: `{ "error": "Invalid email format" }`

---

### 6. Backend: SMTP & Email Sending

#### 6.1. SMTP Transport Setup

- Created with `nodemailer.createTransport`:
  - Host: `process.env.SMTP_HOST || "smtp.gmail.com"`
  - Port: `process.env.SMTP_PORT || "587"`
  - Secure: `false` (for port 587)
  - Auth:
    - `user`: `process.env.GMAIL_USER || "toss125training@gmail.com"`
    - `pass`: `process.env.GMAIL_APP_PASSWORD || "<gmail app password>"`

> **Important**: In real deployments, you should set these as **environment variables** and **not rely on any hard-coded credentials**.

#### 6.2. Recipient & Email Content

- **Recipient**:
  - `const FIXED_RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "siddharth.toss.cs@gmail.com";`
  - All contact form submissions go to this **fixed inbox**.

- **Email subject**:
  - `'Contact Form Submission - TWO8AI Website'`

- **Plain-text body** example:

```text
Name: <name>
Email: <email>
Mobile Number: <mobileNumber or 'Not provided'>
Message: <message>
```

- **HTML body**:
  - Nicely formatted `<div>` with:
    - Name
    - Email
    - Mobile number (if any)
    - Message, with line breaks converted to `<br>` tags.

- **From / Reply-To**:
  - `from`: `"Contact Form" <GMAIL_USER>`
  - `to`: fixed recipient email
  - `replyTo`: the **user’s email** – so you can click Reply in your inbox and respond directly to the sender.

#### 6.3. Sending & Responses

- **On success**:
  - Calls `await transporter.sendMail(mailOptions);`
  - Returns status `200` with JSON:
    ```json
    {
      "message": "Email sent successfully",
      "details": {
        "from": "Contact Form <...>",
        "to": "<recipient email>",
        "subject": "Contact Form Submission - TWO8AI Website"
      }
    }
    ```
- **On error**:
  - Logs error to server console: `console.error('Email Send Error:', error);`
  - Returns status `500` with JSON:
    - In development: `{ "error": error.message }`
    - In production: `{ "error": "Failed to send email. Please try again later." }`

---

### 7. Environment Variables & Deployment Notes

Refer also to `api/EMAIL_API_FIX.md` for deployment details; key points:

- **Required env vars (Vercel or similar)**:
  - `GMAIL_USER` – Gmail address used to send emails.
  - `GMAIL_APP_PASSWORD` – 16-character app password for that Gmail account.
  - `RECIPIENT_EMAIL` – Where contact form submissions should be delivered.
  - (Optional) `SMTP_HOST`, `SMTP_PORT` – if different from defaults.
- **Node version**:
  - `api/package.json.example` specifies:
    - `"node": ">=18.x"`

---

### 8. End-to-End: How a Message Travels

1. **User fills the form** on `contact.html` (`name`, `email`, `mobile`, `message`) and clicks **"Send Message"**.
2. **Frontend validation** runs in `assetes/main.js`:
   - If any required fields are missing, shows an inline error and stops.
3. **Frontend builds JSON payload** and sends a **POST** request to  
   `https://emails-api-puce.vercel.app/api/email`.
4. **Backend (Node + nodemailer)** receives the JSON, validates fields and email format.
5. **Backend formats and sends the email** using Gmail SMTP to the fixed recipient inbox.
6. **Backend responds** with success or error JSON.
7. **Frontend reads the response**:
   - On success: resets the form and shows a green success message.
   - On failure: shows a red error message (network vs server error are messaged differently).
8. **Notification in inbox**:
   - Recipient sees an email with subject  
     **"Contact Form Submission - TWO8AI Website"**, and can reply directly to the sender.

---

### 9. Reusing This Pattern for Other Pages

To create a **new page with a similar contact/lead form**:

1. **React frontend**:
   - Create a new page/component similar to `Contact.jsx` with a form that captures `name`, `email`, `mobile`, and `message`.
   - Use the same field names (`name`, `email`, `mobile`, `message`) so the existing backend works without change.
2. **React logic**:
   - Reuse the same pattern of `formState`, `status`, `handleChange`, and `handleSubmit` to submit JSON to the email API.
3. **Backend**:
   - Keep `api/email.js` the same unless you want:
     - Different recipient email
     - Different subject
     - Extra fields or storage (e.g., database).

This file should give you a clear map of **every step in the contact flow**, so you can confidently replicate or extend it for other pages.

