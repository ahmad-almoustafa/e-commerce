# eCommerce Single Page Application

A single page application for an ecommerce website built with React, Redux Toolkit, Expressjs, Stripe and Tailwind CSS.
## Live Demo

<a href="http://shop.ahmadalmoustafa.com/" target="_blank">http://shop.ahmadalmoustafa.com/</a>

## Getting Started
### Backend

Express server to handle frontend API requests

#### Requirements

- Node v10+
- Configured .env file

#### How to run
1- navigate to the server directory:
```sh
cd server 
```
2. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
# Stripe API keys - see https://stripe.com/docs/development/quickstart#api-keys
STRIPE_PUBLISHABLE_KEY=pk_test...
STRIPE_SECRET_KEY=sk_test...
```


3. Install dependencies and start the server

```sh
npm install
npm start
```
This backend api server runs on localhost:5252, but the Frontned Recat app will be available at localhost:3000. API requests to your backend are proxied by the create-react-app server using the proxy setting in ./package.json.

### Frontend

A single page application for an ecommerce website 
#### How to run
1- navigate to the client directory:
```sh
cd client 
```
2. Install dependencies


```sh
npm install
```

3. Start the react app

```sh
npm start
```
4. Navigate to [http://localhost:3000](http://localhost:3000) in your browser


## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux Toolkit](https://redux-toolkit.js.org/) - A set of utilities that enables a powerful and simplified approach to configure the Redux store
- [Express.js](https://expressjs.com/) - A web framework for Node.js
- [Axios](https://github.com/axios/axios) - A library for making HTTP requests
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [Stripe](https://stripe.com/) - A platform for securely accepting payments online


## Author
Ahmad Al Moustafa
<a href="https://www.ahmadalmoustafa.com/" target="_blank">https://www.ahmadalmoustafa.com/</a>
