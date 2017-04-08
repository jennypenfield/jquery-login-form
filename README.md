# jQuery Login Form

> This is a bonus assignment. Complete it at your own pace.

## Problem Description

You have just been hired at the hot new startup bloop.xyz. Tagline: Have you
blooped today?

Jeff is the Director of UX and your new boss. After adding some user behavior
analytics, Jeff noticed that users have had trouble logging into the site and
asked if you can help re-design the login experience from scratch.

The backend team has been directed to assist you with this task. Sam - the lead
backend developer - has warned you that the database they are currently using is
flaky and has a tendency to randomly error out or take a long time to respond.
He assures you they are working hard to fix this, but you don't have high hopes
that they will be able to fix the problem before Jeff's UX deadline.

Armed with your knowledge of HTML, CSS, JavaScript, jQuery, and AJAX you decide
to write a robust Login Form on top of the flaky backend. You want to impress
Jeff with your first real task and are passionate about improving the customer
experience.

## Development Setup

Make sure [Node.js] is installed on your system. Then, on the command line:

```sh
# installs the node_modules folder (one-time step)
npm install

# start the web server on port 7979
node app.js
```

Open your browser to [http://127.0.0.1:7979/login.html] to see the app. Note
that the app will serve files out of the `/public` folder.

[Node.js]:https://nodejs.org/en/
[http://127.0.0.1:7979/login.html]:http://127.0.0.1:7979/login.html

## Phase 1 - Styling

A `login.html` page has already been started for you. Your first task is to add
some CSS to this page to make it look better. Jeff has been very clear that he
expects the login page to work great on all devices. Use CSS media queries and
your design chops to improve the look and feel of the login page. Feel free to
change the HTML structure as needed to accomplish this, but be sure to follow
best practices for the Semantic Web.

Jeff has given you some design guidelines:
- The Header should always take up 100% of the width of the page.
- The Login Form should be centered on the page, and never wider than 500px.
- The Login Form should have a border and a white background that contrasts with
  the body behind it. There should be some padding on the inside of the form so
  the inputs are not flush with the border.
- When on a mobile device, the Login Form should take 100% of the width of the
  device with some slight padding on the left and right for buffer.
- The Username and Password fields should be the same width and take up most
  of the horizontal width of the Login Form container.
- The "Log In" button should be the primary action button on the page. It should
  stand out visually accordingly.
- The Help Center links should be below the Login Form and "inside" the Login
  Form container visually. The links should be easy to read and find, but not
  stand out.
- The Help Center links should be horizontally aligned on desktop widths and
  vertically aligned on mobile devices.
- The Footer should take up 100% of the width of the page. The background color
  of the footer should be somehow related to the background color of the Header
  (but not the same color).

## Phase 2 - AJAX Login

Use jQuery and AJAX to send a login request when the user submits the form.

- The api endpoint for logging in is: `http://127.0.0.1:7979/api/login`
- This URL accepts an HTTP POST request with the following two parameters:
  `username` and `password`
- The response from this endpoint could be anything! But generally you should
  anticipate an HTTP 200 for a successful login and an HTTP 400 if the username
  / password do not match. The server always returns JSON.
- Sam has given you some test accounts to login with:
  - `testuser1` has password `ilovebananas`
  - `testadmin5` has password `always_name_your_functions`
  - `qauser3` has password `luv2manage5tate`
- The Login Form should show an appropriate loading state while the request is
  active. The user should not be able to re-submit the form or edit their
  username or password while a login attempt is ongoing.
- If there is an error, the Login Form should show an appropriate error above
  Login button, but below the Password field.
- If the login was successful, the user should be redirected to the homepage at
  `http://127.0.0.1:7979/index.html`
- Jeff has instructed you to fail the login attempt and show an appropriate
  error message to the user if it takes longer than 15 seconds for the server to
  respond. Be sure to cancel any pending AJAX requests you have made if this
  happens.

## Phase 3 - Help Center modals

Jenn from the Web Copy team would like to show the contents of a Markdown file
when a user presses the "Need help logging in?" link.

```
TODO: finish writing this
```
