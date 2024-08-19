## Setting up the React App Files

Choose a directory to hold the files for the app and run:

```
git clone https://github.com/Nyxwildflower/assignment_14_msobering.git
```

## Running the Application

1. Open the Docker Desktop app.

2. Open the app folder in a code editor from where you cloned it earlier.

### In Development

3. Enter this command in the editor terminal to run the app in a Docker container.

```
npm run dev-up
```

### In Production

3. Enter this command in the editor terminal to run the app in a Docker container.

```
npm run prod-up
```

4. Load [localhost:5575](http://localhost:5575) in your browser to see the app running.

## Shutting Down the Container

```
npm run dev-down
```

or

```
npm run prod-down
```

## Running Tests

There are several available test scripts for code formatting and component testing:

> [!NOTE]
> The Eslint and Prettier scripts only run on files in the src folder.

### Eslint

To find errors:

```
npm run lint
```

To find and fix errors:

```
npm run lint:fix
```

### Prettier

To find errors:

```
npm run format
```

To find and fix errors:

```
npm run format:fix
```

### App Tests

```
npm run test
```
