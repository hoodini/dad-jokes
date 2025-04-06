# Dad Jokes Web App 👨‍👦

A simple, modern web application that displays random dad jokes fetched from the [icanhazdadjoke.com](https://icanhazdadjoke.com/) API. Built with vanilla JavaScript and styled with CSS for a clean, responsive user interface.

## 🚀 Features

- Fetch random dad jokes from a public API
- Clean, modern user interface
- Mobile-responsive design
- Error handling for API failures
- Smooth animations and transitions
- GitHub-themed color scheme

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required!

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/hoodini/dad-jokes.git
```

2. Navigate to the project directory:
```bash
cd dad-jokes
```

3. Open the `index.html` file in your web browser:
   - Double-click the file in your file explorer
   - Or drag and drop it into your browser
   - Or use a local development server

## 💻 Usage

1. When you open the app, it automatically loads a random dad joke
2. Click the "Get Another Joke" button to fetch a new joke
3. Enjoy and share with friends!

### Example

```javascript
// The app uses fetch API to get jokes:
const joke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
});
```

## 🔒 Security Assessment

### Potential Vulnerabilities

1. **Cross-Site Scripting (XSS)**
   - **Risk**: Medium
   - **Description**: The application displays content from an external API
   - **Mitigation**: The app uses textContent instead of innerHTML for displaying jokes, which automatically escapes HTML and prevents XSS attacks

2. **API Rate Limiting**
   - **Risk**: Low
   - **Description**: Rapid clicking of the "Get Another Joke" button could trigger API rate limits
   - **Mitigation**: Consider implementing a cooldown period between requests

3. **Content Security Policy**
   - **Risk**: Low
   - **Description**: No CSP headers are currently set
   - **Recommendation**: Add CSP headers to restrict resource loading to trusted sources

### Security Best Practices Implemented

1. HTTPS API Endpoint
   - The app uses HTTPS for API requests, ensuring secure data transmission

2. Input Sanitization
   - All API responses are treated as text, not HTML
   - No user input is sent to the API

3. Error Handling
   - Failed API requests are gracefully handled with user-friendly messages

### Security Recommendations

1. Add the following meta tags to index.html:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https://icanhazdadjoke.com">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

2. Implement rate limiting on the client side:
   - Add a 1-second delay between joke requests
   - Disable the button while loading

3. Add CORS headers if hosting on a public domain

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [icanhazdadjoke.com](https://icanhazdadjoke.com/) for providing the dad jokes API
- GitHub for being awesome!

## 📧 Contact

If you have any questions or suggestions, please open an issue in the repository.

---

Made with ❤️ and dad jokes