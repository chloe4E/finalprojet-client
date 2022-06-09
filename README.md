# Cover Letter Generator

<br>

# Quick Compo

<br>

## Description

This application uses AI to generate cover letters. It takes simple inputs such as your name, surname, work experience described in one paragraph, and a copy paste of the job description you are applying to. With this set of information it generates a cover letter that you can edit and save. [Try it here](https://cover-letter-generator.netlify.app/)

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start creating cover letters.
- **Login:** As a user I can login to the platform so that I can access my profile and the cover letters I created.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access my cover letters and create new ones.
- **Create Cover Letter:** As a logged in user I can generate new cover letters
- **Cover Letter Page:** As a user I can view, edit and delete the cover letters I created.

## Backlog

- connect to open.ai API
- send user's input to API
- return AI generated cover letter to users

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                                    | Component           | Permissions                | Behavior                                                                                                                            |
| --------------------------------------- | ------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `/login`                                | LoginPage           | anon only `<AnonRoute>`    | Login form, navigates to new-user/form if the user logs in for the first time or redirect to the user-profile for a recurring user. |
| `/signup`                               | SignupPage          | anon only `<AnonRoute>`    | Signup form, navigates to LoginPage page after signup.                                                                              |
| `/`                                     | HomePage            | public `<Route>`           | Home page.                                                                                                                          |
| `/user-profile`                         | ProfileLandingPage  | user only `<PrivateRoute>` | Display list of cover letters for the current user.                                                                                 |
| `/new-user/form`                        | NewUserform         | user only `<PrivateRoute>` | Takes input from the user to generate the first cover letter.                                                                       |
| `/user-profile/add-job`                 | AddNewJobForm       | user only `<PrivateRoute>` | Create a new cover letter (with the help of a form)                                                                                 |
| `/job/:coverLetterId/cover-letter`      | CoverLetterPage     | user only `<PrivateRoute>` | Display a specific cover letter.                                                                                                    |
| `/job/:coverLetterId/cover-letter/edit` | EditCoverLetterPage | user only `<PrivateRoute>` | Let user edit or delete a specific cover letter.                                                                                    |

## Components

Pages:

- LoginPage
- SignupPage
- HomePage
- ProfileLandingPage
- NewUserform
- AddNewJobForm
- CoverLetterPage
- EditCoverLetterPage

Components:

- Navbar
- JobCard
- Msterform
- MultiSpteProgressBar
- PersonalInformationForm
- Step1
- Step2
- Step3
- WorkHistoryForm

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  surname: { type: String },
  jobList :  [ { type: Schema.Types.ObjectId, ref:'Job' } ]
}
```

**Job model**

```javascript
 {
   title: { type: String, required: true },
   description: { type: String, required: true  },
   coverLetter: [ { type: Schema.Types.ObjectId, ref:'CoverLetter' } ]
 }
```

**Cover Letter model**

```javascript
{
  text: { type: String, required: true },

}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                                         | Request Body      | Success status | Error Status | Description                                                                                                                     |
| ----------- | ------------------------------------------- | ----------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/verify `                             | Saved session     | 200            | 404          | Check if contains the JWT token. If it does, user is logged in and return profile page                                          |
| POST        | `/auth/signup`                              | {email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                               | {email, password} | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then create new JWT.                     |
| POST        | `/auth/logout`                              |                   | 204            | 400          | Logs out the user by killing the JWT token.                                                                                     |
| GET         | `/api/job/:coverLetterId/cover-letter`      |                   |                | 400          | Show specific cover letter                                                                                                      |
| GET         | `/api/job/:coverLetterId/cover-letter/edit` |                   |                |              | Let current user edit a specific cover letter                                                                                   |
| PUT         | `/api/job/:coverLetterId/cover-letter/edit` |                   | 201            | 400          | Save edited specific cover letter                                                                                               |
| DELETE      | `/api/:coverLetterId/cover-letter/delete`   |                   | 200            | 400          | Delete specific cover letter                                                                                                    |
| DELETE      | `/api/job-list/:jobId`                      |                   | 201            | 400          | delete specific job                                                                                                             |
| GET         | `/api/user-profile`                         |                   |                |              | show current user profile                                                                                                       |
| PUT         | `/api/user-profile/:id`                     | { name, surname}  | 201            | 400          | edit user information                                                                                                           |
| PUT         | `/api/new-user/:id/form`                    |                   | 200            | 400          | edit user information for the first time                                                                                        |
| POST        | `/api/new-job/form`                         |                   | 204            | 400          | Let the new user fill a form to update its work experience                                                                      |
| PUT         | `/api/new-job/form2`                        |                   | 204            | 400          | Let the new user fill a form and add additional information to create the cover letter, then generates the cover letter         |
| POST        | `/api/user-profile/form`                    |                   | 204            | 400          | Let the (recurring) user fill a form to generate a cover letter                                                                 |

<br>

## API's

[Link to API](https://beta.openai.com/)
<br>

## Packages

- react-boostrap
- react-strap
  <br>

## Links

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/chloe4E/finalprojet-client)

[Server repository Link](https://github.com/Pip0kinha/finalproject-server)

[Deployed App Link](https://p3-cover-letter-generator.herokuapp.com/)

[Netlify App Link](https://cover-letter-generator.netlify.app/)

### Figma

[Figma Link](https://www.figma.com/file/Wv3ovBvpkM99Q5BqkoPLQc/Cover-Letter-Generator?node-id=6%3A57)

### Contributors

Leticia Moresca - <Pip0kinha> - <https://www.linkedin.com/in/leticia-m-85867a23b/>

Chloé Faurie - <chloe4E> - <https://www.linkedin.com/in/chlo%C3%A9-faurie/>
