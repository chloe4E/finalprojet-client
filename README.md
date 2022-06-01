# Cover Letter Generator

<br>

# Quick Compo

<br>

## Description

This application uses AI to generate cover letters.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start creating cover letters.
- **Login:** As a user I can login to the platform so that I can access my profile, job profiles and create cover letters.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit my information, create new job profiles and generate cover letters.
- **Job Profile:** As a logged in user I can access the job profile, save relevant information regarding a specific job application and create cover letters.
- **Create Cover Letter:** As a logged in user I can generate new cover letters
- **Cover Letter Page:** As a user I can view, edit and delete the cover letters I created.
- **Job Board:** As a user I want to see the jobs I can apply for.

## Backlog

- connect to open.ai API
- send user's input to API
- return AI generated cover letter to users

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                                     | Component             | Permissions                | Behavior                                                                                                          |
| ---------------------------------------- | --------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `/login`                                 | LoginPage             | anon only `<AnonRoute>`    | Login form, navigates to UserCreateProfile page after login.                                                      |
| `/signup`                                | SignupPage            | anon only `<AnonRoute>`    | Signup form, navigates to LoginPage page after signup.                                                            |
| `/`                                      | HomePage              | public `<Route>`           | Home page.                                                                                                        |
| `/user-profile`                          | ProfilePage           | user only `<PrivateRoute>` | Display UserProfilePage for the current user.                                                                     |
| `/user-profile/create`                   | CreateProfilePage     | user only `<PrivateRoute>` | Create user profile form.                                                                                         |
| `/job-profile/create`                    | CreateJobPage         | user only `<PrivateRoute>` | Create a new job (form)                                                                                           |
| `/job-list`                              | JobListPage           | user only `<PrivateRoute>` | Display list of job created by the current user.                                                                  |
| `/job-list/:jobId`                       | JobDetailPage         | user only `<PrivateRoute>` | Display details of the job created by the current user.                                                           |
| `/job-list/:jobId/cover-letter/create`   | CreateCoverLetterPage | user only `<PrivateRoute>` | After cover letter generation by the AI, display of the result to the current user with possibilit to save or not |
| `/job-list/:jobId/cover-letter/:Id/edit` | EditCoverLetterPage   | user only `<PrivateRoute>` | Gives the current user the possibility to edit the generated cover letter.                                        |
| `/user-profile/edit`                     | EditProfilePage       | user only `<PrivateRoute>` | Current User can edit its profile.                                                                                |
| `/job-list/:jobId/edit`                  |                       | EditJobDetailPage          | user only `<PrivateRoute>`                                                                                        | Current User can edit its job profile. |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- CreateProfilePage

- EditProfilePage

- CreateCoverLetterPage

- JobListPage

- CreateJobPage

- JobDetailsPage

- EditJobDetailsPage

- EditCoverLetterPage

- JobBoardPage (bonus)

Components:

- Navbar
- Buttons
- JobCard
- CoverLetterCard
- JobTasksCard
- ApplicationProcessCard
- PersonalInformationForm
- WorkHistoryForm
- EducationForm
- JobDescriptionForm
- LandingPageImg
- BenefitsForUserCard

bonus:

- JobPostCard

## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Job Service**

  - `jobService` :
    - `.addJob(JobData)`
    - `.getJobs()`
    - `.getOneJob(id)`
    - `.editJob(id)`
    - `.deleteJob(id)`

- **Cover Letter Service**
  - `coverLetterService` :
    - `.generateCoverLetter(UserProfileDate, JobDetailsData)`
    - `.addCoverLetter(CoverLetterData)`
    - `.getCoverLetters()`
    - `.getOneCoverLetter(id)`
    - `.editCoverLetter(id)`
    - `.deleteCoverLetter(id)`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
	address: { type: Schema.Types.ObjectId, ref:'Adress' },
  education: [ { type: Schema.Types.ObjectId, ref:'Education' } ]
  workExperience: [ { type: Schema.Types.ObjectId, ref:'WorkExperience' } ]
  jobList :  [ { type: Schema.Types.ObjectId, ref:'Job' } ]
}
```

**Job model**

```javascript
 {
   title: { type: String, required: true },
   description: { type: String, required: true  },
   coverLetter: [ { type: Schema.Types.ObjectId, ref:'CoverLetter' } ],
   notes: [],
   applicationStatus: []
 }
```

**Cover Letter model**

```javascript
{
  text: { type: String, required: true },
  job: [ { type: Schema.Types.ObjectId, ref:'Job' } ],
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                                           | Request Body                                           | Success status | Error Status | Description                                                                                                                     |
| ----------- | --------------------------------------------- | ------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/verify `                               | Saved session                                          | 200            | 404          | Check if contains the JWT token. If it does, user is logged in and return profile page                                          |
| POST        | `/auth/signup`                                | {email, password}                                      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                                 | {email, password}                                      | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then create new JWT.                     |
| POST        | `/auth/logout`                                |                                                        | 204            | 400          | Logs out the user by killing the JWT token.                                                                                     |
| GET         | `/api/job-list`                               |                                                        |                | 400          | Show all jobs that the current user has created                                                                                 |
| GET         | `/api/job-list/:jobId`                        |                                                        |                |              | Show specific job                                                                                                               |
| POST        | `/api/job-list`                               | { title, description}                                  | 201            | 400          | Create and save a new job                                                                                                       |
| PUT         | `/api/job-list/:jobId`                   | { title, description }                                 | 200            | 400          | edit job                                                                                                                        |
| DELETE      | `/api/job-list/:jobId`                 |                                                        | 201            | 400          | delete specific job                                                                                                             |
| GET         | `/api/user-profile/:Id`                           |                                                        |                |              | show current user profile                                                                                                      
| PUT         | `/api/user-profile/:id`                      | { email, address, education, workExperience, jobList } | 201            | 400          | edit player                                                                                                                     |
| DELETE      | `/api/jobList/:jobId/cover-letter/:id` |                                                        | 200            | 400          | delete cover letter                                                                                                             |
| PUT         | `/api/jobList/:jobId/cover-letter/:id`   | {text,job}                                             |                |              | edit cover letter                                                                                                               |

<br>

## API's

[Link to API](https://beta.openai.com/)
<br>

## Packages

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/wBEqWaCq/coverlettergenerator)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/chloe4E/finalprojet-client)

[Server repository Link](https://github.com/Pip0kinha/finalproject-server)

[Deployed App Link](http://heroku.com)

### Figma

[Figma Link](https://www.figma.com/file/Wv3ovBvpkM99Q5BqkoPLQc/Cover-Letter-Generator?node-id=6%3A57)

### Contributors

Leticia Moresca - <Pip0kinha> - <https://www.linkedin.com/in/leticia-m-85867a23b/>

Chloé Faurie - <chloe4E> - <https://www.linkedin.com/in/chlo%C3%A9-faurie/>

