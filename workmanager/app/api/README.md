## API Folder Overview

Under the `api` folder, we handle all the API requests.

### Entities:

#### Tasks
- **Properties:**
  - `title`
  - `content`
  - `status`
  - `date`
  - `userId` (links to the user collection, establishing a relationship between `users` and `tasks` collections)

#### HTTP Requests for Tasks:
- **GET:** Retrieve all tasks
  ```
  https://localhost:3000/api/tasks
  ```
- **GET SINGLE:** Retrieve a specific task by ID
  ```
  https://localhost:3000/api/tasks/[taskId]
  ```
- **POST:** Create a new task (requires a request body)
  ```
  https://localhost:3000/api/tasks
  ```
- **DELETE:** Remove a specific task by ID
  ```
  https://localhost:3000/api/tasks/[taskId]
  ```
- **PUT:** Update a specific task by ID
  ```
  https://localhost:3000/api/tasks/[taskId]
  ```

#### Users
- **Properties:**
  - User-related properties specific to your implementation.

#### HTTP Requests for Users:
- **GET:** Retrieve all users
  ```
  https://localhost:3000/api/users
  ```
- **GET SINGLE:** Retrieve a specific user by ID
  ```
  https://localhost:3000/api/users/[userId]
  ```
- **POST:** Create a new user (requires a request body)
  ```
  https://localhost:3000/api/users
  ```
- **DELETE:** Remove a specific user by ID
  ```
  https://localhost:3000/api/users/[userId]
  ```
- **PUT:** Update a specific user by ID
  ```
  https://localhost:3000/api/users/[userId]
  ```
