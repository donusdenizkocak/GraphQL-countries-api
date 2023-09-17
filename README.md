# React Country Selector App

This README file provides an explanation for a project containing the source code of a React application. This application utilizes Apollo Client to fetch country information and allows users to view the capital or emoji of the selected country.

## About the Project

This React application boasts the following features:

- A list of countries displaying their names, flags, capitals, and spoken languages.
- A filtering feature enabling users to filter countries by their names.
- The ability to categorize countries under "Capital" or "Emoji" groups.
- An option to display the capital or emoji of the selected country.
- User-friendly country selection through a dropdown menu.

## Project Setup

To run this project, follow these steps:

1. Clone the project to your computer or download it as a ZIP file.

2. Open a terminal inside the project folder.

3. Install the required dependencies by running the following commands one by one:

   ```
   npm install
   ```

4. The project uses [Countries GraphQL API](https://countries.trevorblades.com) to fetch data using Apollo Client. Check your Apollo Client settings and update the API URI if necessary:

   ```javascript
   const client = new ApolloClient({
     cache: new InMemoryCache(),
     uri: 'https://countries.trevorblades.com'
   });
   ```

5. Start the project:

   ```
   npm start
   ```

6. Visit `http://localhost:3000` in your browser to view the application.

## Usage

When the application starts, you'll see a list of countries and various options. Users can perform the following actions:

- Enter a word or phrase in the "Filter" field to filter countries by their names.

- Select an option from the "Select" dropdown to categorize countries under "Capital" or "Emoji" groups.

- After categorizing countries under "Capital" or "Emoji" groups, you'll see a dropdown menu listing countries within each group. When you select a country from this list, the selected country's name, capital, or emoji will be displayed on the screen.

- You can use the "Select Country" dropdown to choose a country.

## Contributing

If you wish to contribute to this project, follow these steps:

1. Fork this repository.

2. Create a branch for a new feature or fix:

   ```
   git checkout -b new-feature
   ```

3. Make your changes and add clear and descriptive comments.

4. Publish your changes in your own fork:

   ```
   git push origin new-feature
   ```

5. Create a Pull Request (PR) and submit your changes for review.

6. Once your changes are approved, they will be merged into the main branch.

## License

This project is licensed under the MIT License. For more information, refer to the [LICENSE](LICENSE) file.

---

Feel free to contact us for more information or assistance regarding this project. Happy coding!