# Planify V1.0

## Description

Planify is a web application, developed with Next.js, that helps you organise your day to day tasks.
It lets you create new tasks and check each out as you complete it.
This version of Planify introduced a brand new task details page.
To start your day the right way, use Planify!

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/taskmanagement-assignment3-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn dev` or `npm run dev`

## How I got organized

I started by reading the Next.js docs to get a better grasp of it, then I identified all the components I could re-use from assignment 2 and I copied them. I then planned what I had to do and implemented the logic in incrememnts. Finally I added the missing styles.

## Challenges Found

1. **Understanding GetServerSideProps and Next.js in general**
   It was difficult, but with some next.js docs, some googling and some chatGPT, I got something working. It's not optimal of course but it's a good start.

2. **Persisting data**
   I first wanted to persist the tasks data into localstorage, so I tried creating a useLocalStorage custom hook, and tried adding a useEffect to get the tasks from localstorage on mount and store back the tasks on unmount or when the tasks list changed. It didn't work. So, I moved on. I tried using redux-persist, and all worked out.

## Folder Structure

The code is all located in the src/ folder.

### The src/ folder:

It is divided into the components/ folder, the features/ folder and the data/ folder.

### The assets/ folder:

It's where all images and videos and assets in general are stored. There's only an image for now.

### The components/ folder:

It is divided into:

1. **atoms/** which is where the smallest pieces of components like buttons and inputs are implemented.
2. **molecules/** which is where the atoms are used to create the structures that need to be used in the interface, like the Task component for example that specifies how a single task should be rendered.
3. **organisms/** is where molecules are used to create features for the app. For example, there's the logic to handle tasks.
4. **templates/** this is where organisms are grouped to create the different views in the app.

### The hooks/ folder:

This is where all custom hooks are stored. There's only 2 for now.

### The pages/ folder:

This is where all pages are stored.
This folder is used for routing.

- index.tsx is the homepage. It's the page used for tasks management.
- task is where details are displayed. Users are redirected to the correct task page depending on an id (I've called it slug but it's an id)
- \_error is where users get redirected whenever there's a 404 error or 500 error, or any other error.

### The store/ folder:

This is where the redux store is created and managed.

### The styles/ folder:

This is where the global style is stored.

### The data/ folder:

It contains data, and interfaces to structure data objects.
