# Introduction
The project has been developed using **HTML**, **CSS**, **SASS**, **JavaScript**, **React**, **npm** and **git**. It has been tested with **Cypress** (E2E and Component testing types) and documented with **JSDoc** (for developers) and **MS Word** (for users).
Its main purpose is to record the best results amongst the competitors using 1, 2 or 3 stopwatches, which makes it easier to have different activities set up at the same time.
# The algorithm
Every stopwatch has the algorithm: after hitting a start button, a stopwatch starts showing on its display the elapsed time (updating every 10ms = 0.01s). A stopwatch can't be reset unless a stop button is clicked 3 times to save the best 3 results of competitors. This algorithm prevents from accidental data loss. If users accidentally reload the page, the application will warn about losing all the data before reloading or leaving the page. Also the application has hints for users (glowing animation effects around a stop and a reset button) in case they forget how to use it. Users can interact with 1, 2 or all 3 stopwatches simultaneously, which makes it easier to keep track on different activities at the same time.
# Application styling
## Desktop version
The layout for a desktop version of the application.

![Screenshot 2024-09-11](https://github.com/user-attachments/assets/1853680f-3b4a-4e5a-9bc5-1eb5f007c7f2)
## Mobile verison
The layout for a mobile version changes and stores all the stopwatches in a single column.

![image](https://github.com/user-attachments/assets/8d2e17e1-aaa3-4133-b498-4e3c9dc4d481)
# Cypress tests
## E2E testing
Here's a video of E2E tests with **Cypress**.

https://github.com/user-attachments/assets/91de7a8f-5d64-4a64-b913-a24e41cd30b6
## Component testing
And a video of Component tests.

https://github.com/user-attachments/assets/b8d8f698-4cbc-4183-a2a4-e781423d9f51
# Documentation
## Developer documentation
The application has been documented for developers with **JSDoc**. Available in this repository.

![Developer](https://github.com/user-attachments/assets/0a6b73ea-5a3d-4a82-8e86-454f5e278f16)
## User documentation
Finally, a documentation for users has been created with **MS Word**. The PDF version is available in the repository.

[User documentation.pdf](https://github.com/user-attachments/files/16967419/User.documentation.pdf)
